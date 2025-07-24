import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./PolicyPages.css";

const TermsOfUse = () => (
  <div className="policy-layout">
    <Header />
    <div className="policy-container">
      <div className="policy-content">
        <h1 className="policy-title">Terms and Conditions</h1>
        
        <section className="policy-section">
          <h2>Introduction</h2>
          <p>Welcome to our Terms and Conditions page. By using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website.</p>
        </section>

        <section className="policy-section">
          <h2>Use of the Website</h2>
          <p>The content of the pages of this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this website meet your specific requirements.</p>
        </section>

        <section className="policy-section">
          <h2>Intellectual Property</h2>
          <p>This website contains material that is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</p>
        </section>

        <section className="policy-section">
          <h2>User Responsibilities</h2>
          <p>By using this website, you agree to refrain from any activity that may cause damage to the website, compromise its security, or disrupt the service to other users. You are also responsible for ensuring that any information you provide is accurate, up-to-date, and free of malicious content.</p>
        </section>

        <section className="policy-section">
          <h2>Limitation of Liability</h2>
          <p>We shall not be held liable for any indirect, incidental, special, or consequential damages, including, without limitation, loss of revenue or profits, arising out of the use or inability to use this website.</p>
        </section>

        <section className="policy-section">
          <h2>Termination of Use</h2>
          <p>We reserve the right to terminate your access to the website if we determine that you have violated these terms. Such termination may occur without notice and without any liability to you.</p>
        </section>

        <section className="policy-section">
          <h2>Changes to the Terms</h2>
          <p>We may update these terms and conditions from time to time, and any changes will be effective immediately upon posting on this website. It is your responsibility to check this page periodically to stay informed of any changes.</p>
        </section>

        <section className="policy-section">
          <h2>Governing Law</h2>
          <p>These terms and conditions are governed by and construed in accordance with the laws of India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of India.</p>
        </section>

        <section className="policy-section">
          <h2>Refund Policy</h2>
          <p>Our refund policy ensures that you are eligible for a refund if you meet certain conditions. Refunds will be processed if there is a failure to deliver the agreed-upon services or if a technical issue on our end prevents you from using our services. Please note that we do not provide refunds for cancellations made by users or for services already delivered. If you believe you qualify for a refund, please contact us at the provided email address with your purchase details.</p>
        </section>

        <section className="policy-section">
          <h2>Contact Information</h2>
          <p>If you have any questions about our Terms and Conditions, please contact us at:</p>
          <p className="contact-info">Email: <a href="mailto:paul@elixzorconsulting.com">paul@elixzorconsulting.com</a></p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default TermsOfUse;
