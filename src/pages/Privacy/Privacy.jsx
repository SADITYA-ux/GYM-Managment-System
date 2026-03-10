import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="page">
      <main className="privacy-main">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: March 2026</p>

          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to ExerciseTracker. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our application. 
              ExerciseTracker is developed and maintained by <strong>Saditya Adhikari</strong>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Register for an account</li>
              <li>Fill out forms on our application</li>
              <li>Add or track exercises and calorie information</li>
              <li>Contact us via email at sadityaadhikaru@gmail.com</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and manage your account</li>
              <li>Provide and maintain our exercise tracking services</li>
              <li>Improve user experience</li>
              <li>Communicate with you about updates and features</li>
              <li>Respond to your inquiries at sadityaadhikaru@gmail.com</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Data Storage and Security</h2>
            <p>
              Your data is stored securely and is only accessible by you and the application 
              administrator (<strong>Saditya Adhikari, Age 21</strong>). We implement reasonable 
              security measures to protect your personal information.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Third-Party Services</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. 
              We may share anonymous usage data for analytical purposes to improve our services.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> sadityaadhikaru@gmail.com</p>
              <p><strong>Phone:</strong> 9813462408</p>
              <p><strong>Developer:</strong> Saditya Adhikari (Age 21)</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}