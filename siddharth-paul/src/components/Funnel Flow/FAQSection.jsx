import React, { useState } from "react";
import "../Component_Styles/FAQSection.css";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How long will it take to get access to the course?",
      answer:
        "Your credentials to access the course will be delivered to your inbox within 24 hours of your purchase. Please check your promotions/updates tab and spam folder as well.",
    },
    {
      question: "Does the course come with a certificate of completion?",
      answer:
        "Yes, a signed digital certificate is available to the students after successful completion of the course.",
    },
    {
      question: "How can I clear my doubts during the course, if I have any?",
      answer:
        "You can use the virtual course community available inside the course platform to ask questions and learn with other students.",
    },
    {
      question:
        "Can I cancel my course purchase and get a refund if I don't like it?",
      answer:
        "Yes, you can cancel your course anytime within 14 days of purchase and get full refund, no questions asked. Your money will be refunded within few hours of cancellation.",
    },
    {
      question: "Whom do I contact in case of any issues or concerns?",
      answer:
        "If you need any assistance, please reach out to us via WhatsApp and your concerns will be addressed instantly.",
    },
  ];

  // WhatsApp config for +91 8850614359 (wa.me requires no leading '+')
  const WHATSAPP_PHONE = "918850614359"; // +91 8850614359
  const WHATSAPP_DEFAULT_MESSAGE = "Hi, I need support regarding the course.";
  const encodedMessage = encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE);
  const waMeUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;

  // Optional: small click handler to try native scheme first (will not block the anchor navigation)
  const handleSupportClick = (e) => {
    // log for debugging
    // (If you previously saw no logs, this will confirm whether the click is reaching the element.)
    // Open DevTools Console, click the link, and check for this message.
    console.log("[FAQ] Support link clicked");

    // Try to open native app quickly on mobile (non-blocking). The anchor will still navigate to wa.me.
    const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    if (isMobile) {
      const nativeUrl = `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encodedMessage}`;
      // Attempt native scheme in a non-blocking way.
      // This will fail silently if the scheme isn't supported; the anchor's href will still take effect.
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = nativeUrl;
      document.body.appendChild(iframe);
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);
    }
  };

  return (
    <section className="faq-main-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="faq-title">GET YOUR QUESTIONS ANSWERED</h2>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => {
            const isOpen = openFAQ === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div key={index} className={`faq-item ${isOpen ? "active" : ""}`}>
                <div
                  id={questionId}
                  className="faq-question"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                >
                  <h3 className="faq-question-text">{faq.question}</h3>
                  <span className="faq-toggle">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div
                    id={answerId}
                    className="faq-answer"
                    role="region"
                    aria-labelledby={questionId}
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Anchor link that reliably opens WhatsApp Web (and redirects to app on mobile). */}
        {/* It is styled with the same className so your CSS keeps working. */}
        <a
          href={waMeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="faq-support-button"
          onClick={handleSupportClick}
          aria-label="Open WhatsApp chat with support"
        >
          Need Support? WhatsApp Us
        </a>
      </div>
    </section>
  );
};

export default FAQSection;
