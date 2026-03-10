import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import './Terms.css';

export default function Terms() {
  return (
    <div className="page">
      <main className="terms-main">
        <div className="terms-container">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: March 2026</p>

          <section className="terms-section">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using ExerciseTracker, you agree to be bound by these Terms 
              of Service. This application is operated by <strong>Saditya Adhikari (Age 21)</strong>. 
              If you do not agree to all terms, please do not use our service.
            </p>
          </section>

          <section className="terms-section">
            <h2>Description of Service</h2>
            <p>
              ExerciseTracker is a fitness tracking application that allows users to:
            </p>
            <ul>
              <li>Track exercises and workouts</li>
              <li>Monitor calorie intake</li>
              <li>Set fitness goals</li>
              <li>View progress over time</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>User Accounts</h2>
            <p>
              To use certain features, you must register for an account. You are responsible for:
            </p>
            <ul>
              <li>Maintaining account security</li>
              <li>All activities under your account</li>
              <li>Providing accurate information</li>
              <li>Notifying us of unauthorized use at sadityaadhikaru@gmail.com</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>User Responsibilities</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use the service for illegal purposes</li>
              <li>Attempt to gain unauthorized access</li>
              <li>Interfere with other users' experience</li>
              <li>Upload malicious code or content</li>
              <li>Impersonate others</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Intellectual Property</h2>
            <p>
              The application, including its code, design, and content, is owned by 
              <strong> Saditya Adhikari</strong>. You may not copy, modify, or distribute 
              any part without explicit permission.
            </p>
          </section>

          <section className="terms-section">
            <h2>Limitation of Liability</h2>
            <p>
              ExerciseTracker is provided "as is" without warranties. We are not liable for:
            </p>
            <ul>
              <li>Any indirect or incidental damages</li>
              <li>Loss of data or profits</li>
              <li>Service interruptions</li>
              <li>Accuracy of fitness/health information</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Contact Information</h2>
            <p>
              For any questions regarding these Terms, please contact:
            </p>
            <div className="contact-info">
              <p><strong>Developer:</strong> Saditya Adhikari</p>
              <p><strong>Email:</strong> sadityaadhikaru@gmail.com</p>
              <p><strong>Phone:</strong> 9813462408</p>
              <p><strong>Age:</strong> 21 years</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}