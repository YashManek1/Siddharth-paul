import React, { useState, useMemo } from "react";
import "../Component_Styles/GlobalMagnetCheckout.css";

// Parse addOns string into array of objects: { number, title, price, description }
// Improved parseAddons to handle missing numbers, extra dashes, and proper line breaks
function parseAddons(addons) {
  if (!addons) return [];
  // Normalize line endings and remove stray slashes
  const clean = addons.replace(/\?\/-/g, "").replace(/\r\n|\r/g, "\n");
  // Split by numbered pattern (handles both "1." and "2.")
  const items = clean.split(/(?=\d+\.\s)/g).filter(Boolean);
  return items.map((item, idx) => {
    // Try to match: 1. Title — 999/-\nDescription...
    const match = item.match(
      /^(\d+)\.\s*([^-–—\n]+)[-–—]?\s*([₹$]?\d+[/-]*)?\s*\n?([\s\S]*)/m
    );
    if (match) {
      return {
        number: match[1],
        title: match[2].trim(),
        price: match[3] ? match[3].replace(/[^\d]/g, "") : "",
        description: match[4] ? match[4].replace(/\\n/g, "\n").trim() : "",
      };
    }
    // If no number, try to match: Title — 999/-\nDescription...
    const altMatch = item.match(
      /^([^-–—\n]+)[-–—]?\s*([₹$]?\d+[/-]*)?\s*\n?([\s\S]*)/m
    );
    if (altMatch) {
      return {
        number: String(idx + 1),
        title: altMatch[1].trim(),
        price: altMatch[2] ? altMatch[2].replace(/[^\d]/g, "") : "",
        description: altMatch[3]
          ? altMatch[3].replace(/\\n/g, "\n").trim()
          : "",
      };
    }
    return {
      number: String(idx + 1),
      title: item.trim(),
      price: "",
      description: "",
    };
  });
}

const RoasRocketCheckout = ({ price, finalPrice, addons }) => {
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

        {addonList.length > 0 && (
          <div className="checkout-addons">
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
                        {addon.description.split("\n").map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            ))}
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

export default RoasRocketCheckout;
