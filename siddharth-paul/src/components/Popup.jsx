import React, { useState, useEffect } from 'react';
import './Popup.css';

const Popup = ({ isOpen, onClose, userIdentifier }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (submitError) {
      setSubmitError("");
    }
  };

  const handleCancel = () => {
    // Mark as cancelled in localStorage to prevent showing again
    localStorage.setItem("popupCancelled", "true");
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (
      !formData.fullName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.email.trim() ||
      !formData.address.trim()
    ) {
      setSubmitError("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Prepare data in the format expected by backend
      const dataToSubmit = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        contactInfo: formData.phoneNumber.trim(),
        address: formData.address.trim(),
        userIdentifier: userIdentifier,
        submittedAt: new Date().toISOString(),
        source: "popup", // Differentiate popup submissions from checkout submissions
        product: "Free Income Starter Pack",
        amount: 0,
      };

      const response = await fetch(
        "https://siddharth-paul.onrender.com/api/client-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSubmit),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Server error: ${response.status}`
        );
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);

      // Success - close popup and allow access to site
      localStorage.setItem('popupSubmitted', 'true');
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(
        error.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="sp-popup-overlay">
      <div className="sp-popup-container">
        <button
          className="sp-popup-close-btn"
          onClick={handleCancel}
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="sp-popup-header">
          <h2 className="sp-popup-title">Access Free Income Starter Pack</h2>

          <p className="sp-popup-subtitle">
            Complete the form below to access exclusive content
          </p>
        </div>

        {submitError && <div className="sp-error-message">{submitError}</div>}

        <form onSubmit={handleSubmit} className="sp-popup-form">
          <div className="sp-form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="sp-form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="sp-form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="sp-form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              rows="3"
            />
          </div>

          <div className="sp-button-group">
            <button
              type="submit"
              className="sp-submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Access"}
            </button>

            <button
              type="button"
              className="sp-cancel-button"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
