import React, { useState } from 'react';
import './HomeFAQSection.css';

const HomeFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "What is the refund policy?",
      answer: "We offer risk-free purchases across all courses. You can avail a full refund in 7 days of purchase, no questions asked. This is applicable across all courses and all plans."
    },
    {
      question: "Are the courses conducted live?",
      answer: "No, all the courses are self-paced and come with lifetime access. You can go through the course at your own pace."
    },
    {
      question: "Are there any criteria for joining the courses?",
      answer: "Not at all! The courses are designed for anyone and everyone who want to learn."
    },
    {
      question: "Can I enroll in multiple courses?",
      answer: "Yes, go for it! There are no limits on the number of courses that you can take up. We encourage you to join any and all courses that you might find useful."
    },
    {
      question: "Is there a community that I can join?",
      answer: "The plan for all courses includes access to a virtual chat based community space where you can interact with other students, ask questions, and network."
    },
    {
      question: "Will I get a certificate, as proof of my learning?",
      answer: "Yes! You will receive a digital 'Certificate of Completion.' We can't wait for you to proudly share your achievements with your friends and family."
    },
    {
      question: "In which language will the course be taught?",
      answer: "A mix of hindi and english"
    },
    {
      question: "Whom do I contact in case of any issues or concerns?",
      answer: "If you need any assistance, please reach out to us via WhatsApp and your concerns will be addressed instantly."
    }
  ];

  return (
    <section className="home-faq-main-section">
      <div className="home-faq-container">
        <div className="home-faq-header">
          <p className="home-faq-subtitle">FREQUENTLY ASKED QUESTIONS</p>
          <h2 className="home-faq-title">GET YOUR QUESTIONS ANSWERED</h2>
        </div>

        <div className="home-faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="home-faq-item">
              <div 
                className="home-faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="home-faq-question-text">{faq.question}</h3>
                <span className={`home-faq-toggle ${openFAQ === index ? 'open' : ''}`}>
                  {openFAQ === index ? '−' : '+'}
                </span>
              </div>
              {openFAQ === index && (
                <div className="home-faq-answer">
                  <p className="home-faq-answer-text">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="home-faq-support-button">
          Need Support? WhatsApp Us
        </button>
      </div>
    </section>
  );
};

export default HomeFAQSection;
