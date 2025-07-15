import React, { useState } from 'react';
import '../Component_Styles/FAQSection.css';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How soon can I start the course after registering?",
      answer: "You'll receive your login credentials in your email within 12 hours of registration. Remember to check your promotions folder and spam inbox if you don't see it in your main inbox."
    },
    {
      question: "Will I receive any certification after completing the course?",
      answer: "Absolutely! Upon successful completion, you'll receive a verified digital certificate that you can add to your portfolio and professional profiles."
    },
    {
      question: "What kind of support is available during the course?",
      answer: "We offer a dedicated community forum where you can interact with instructors and fellow students to get your questions answered and share your learning experience."
    },
    {
      question: "What is your refund policy if I'm not satisfied?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the course, you can request a full refund within 30 days of purchase with no questions asked."
    },
    {
      question: "How can I get help if I have technical issues?",
      answer: "Our support team is available via WhatsApp and email. We typically respond within 2 hours during business hours to help resolve any technical difficulties you may encounter."
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
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="faq-question-text">{faq.question}</h3>
                <span className={`faq-toggle ${openFAQ === index ? 'open' : ''}`}>
                  {openFAQ === index ? '−' : '+'}
                </span>
              </div>
              {openFAQ === index && (
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              )}
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