import React, { useState } from 'react';
import './HomeFAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How long will it take to get access to the course?",
      answer: "Your credentials to access the course will be delivered to your inbox within 24 hours of your purchase. Please check your promotions/updates tab and spam folder as well."
    },
    {
      question: "Does the course come with a certificate of completion?",
      answer: "Yes, a signed digital certificate is available to the students after successful completion of the course."
    },
    {
      question: "How can I clear my doubts during the course, if I have any?",
      answer: "You can use the virtual course community available inside the course platform to ask questions and learn with other students."
    },
    {
      question: "Can I cancel my course purchase and get a refund if I don't like it?",
      answer: "Yes, you can cancel your course anytime within 14 days of purchase and get full refund, no questions asked. Your money will be refunded within few hours of cancellation."
    },
    {
      question: "Whom do I contact in case of any issues or concerns?",
      answer: "If you need any assistance, please reach out to us via WhatsApp and your concerns will be addressed instantly."
    }
  ];

  return (
    <section className="faq-main-section">
      <div className="faq-container">
        <div className="faq-header">
          <p className="faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="faq-title">GET YOUR QUESTIONS ANSWERED</h2>
        </div>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className={`faq-item {openFAQ === index ? 'active' : ''}`}>
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className="faq-toggle">
                  {openFAQ === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p className="faq-answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="faq-support-button">
          Need Support? WhatsApp Us
        </button>
      </div>
    </section>
  );
};

export default FAQSection;