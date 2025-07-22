// (Removed stray code: handleAddonChange, calculateTotal)
import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Parse addOns string into array of objects: { number, title, price, description }
function parseAddons(addons) {
  if (!addons) return [];
  // Split by numbered pattern (handles both "1." and "1. ")
  const items = addons.split(/(?=\d+\.\s)/g).filter(Boolean);
  return items.map((item) => {
    // Extract number, title, price, description
    const match = item.match(/(\d+)\.\s*([^\d$\n]+)(?:\s*\$?(\d+))?(.*)/s);
    if (match) {
      return {
        number: match[1],
        title: match[2].trim(),
        price: match[3] ? Number(match[3]) : 0,
        description: match[4] ? match[4].replace(/\n/g, " ").trim() : "",
      };
    }
    return { number: "", title: item.trim(), price: 0, description: "" };
  });
}

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
        total += addon.price || 0;
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
            {addonList.length > 0 && (
              <>
                <h4>Bonus Add-ons</h4>
                {addonList.map((addon, idx) => (
                  <div className="bonus-item" key={idx}>
                    <div className="bonus-checkbox">
                      <input
                        type="checkbox"
                        id={`addon-${idx}`}
                        checked={selectedAddons.includes(idx)}
                        onChange={() => handleAddonChange(idx)}
                      />
                      <label htmlFor={`addon-${idx}`}>
                        <span className="bonus-title">
                          {addon.number && `${addon.number}. `}
                          {addon.title}
                          {addon.price ? ` - ${addon.price}/-` : ""}
                        </span>
                        {addon.description && (
                          <span className="bonus-description">
                            {addon.description}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

        <div className="checkout-total">
          <div className="price-breakdown">
            <div>
              <span>Base Price: </span>
              <span>{price}/-</span>
            </div>
            {addonList.map(
              (addon, idx) =>
                selectedAddons.includes(idx) && (
                  <div className="price-row addon-row" key={idx}>
                    <span className="price-label">{addon.title}:</span>
                    <span className="price-amount">+{addon.price}/-</span>
                  </div>
                )
            )}
          </div>
          <strong>Total: {calculateTotal()}/-</strong>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default GlobalMagnetCheckout;
