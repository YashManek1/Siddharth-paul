import React, { useState } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";
import { useMemo } from "react";

const parseAddons = (addons) => {
  if (!addons) return [];
  return addons
    .split(/\d+\.\s|\\n|\n/)
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};

const GlobalMagnetCheckout = ({ price, finalPrice, addons }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactInfo: "",
    address: "",
  });

  const addonList = useMemo(() => parseAddons(addons), [addons]);
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddonChange = (idx) => {
    setSelectedAddons((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const calculateTotal = () => {
    let total = Number(finalPrice || price || 0);
    addonList.forEach((addon, idx) => {
      if (selectedAddons.includes(idx)) {
        const match = addon.match(/([0-9]+)[^0-9]*$/);
        if (match) total += Number(match[1]);
      }
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <section className="global-magnet-checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Info"
          value={formData.contactInfo}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />

        <div className="checkout-pricing">
          <div>
            <span>Base Price: </span>
            <span>{price}/-</span>
          </div>
          <div>
            <span>Final Price: </span>
            <span>{finalPrice}/-</span>
          </div>
        </div>

        {addonList.length > 0 && (
          <div className="checkout-addons">
            <h4>Add-ons</h4>
            {addonList.map((addon, idx) => (
              <label key={idx} style={{ display: "block", marginBottom: 4 }}>
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(idx)}
                  onChange={() => handleAddonChange(idx)}
                />
                {addon}
              </label>
            ))}
          </div>
        )}

        <div className="checkout-total">
          <strong>Total: {calculateTotal()}/-</strong>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default GlobalMagnetCheckout;
