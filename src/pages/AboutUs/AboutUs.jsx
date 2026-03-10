import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="page">
      <main className="about-main">
        <div className="about-container">
          <h1>About Us</h1>
          
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-avatar">👨‍💻</div>
              <h2>Saditya Adhikari</h2>
              <p className="profile-title">Founder & Lead Developer</p>
              <p className="profile-age">Age: 21 years</p>
              
              <div className="profile-contact">
                <p><span>📧</span> sadityaadhikaru@gmail.com</p>
                <p><span>📞</span> 9813462408</p>
              </div>
            </div>
            
            <div className="profile-bio">
              <h3>Hello, I'm Saditya! 👋</h3>
              <p>
                I'm a 21-year-old passionate coder and fitness enthusiast. I created 
                ExerciseTracker to help people like you track their fitness journey 
                in a simple and effective way.
              </p>
              <p>
                As a developer, I believe in creating applications that are not only 
                functional but also intuitive and enjoyable to use. ExerciseTracker 
                combines my love for coding with my interest in fitness and healthy living.
              </p>
            </div>
          </div>
          
          <div className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At ExerciseTracker, our mission is to make fitness tracking accessible, 
              simple, and motivating for everyone. We believe that small daily efforts 
              lead to big transformations, and we're here to help you track every step 
              of your journey.
            </p>
          </div>
          
          <div className="features-summary">
            <h2>What We Offer</h2>
            <div className="features-grid">
              <div className="feature-item">
                <span className="feature-icon">💪</span>
                <h3>Exercise Tracking</h3>
                <p>Log and monitor all your workouts</p>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🥗</span>
                <h3>Calorie Counter</h3>
                <p>Track your daily food intake</p>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">📊</span>
                <h3>Progress Analytics</h3>
                <p>Visualize your fitness journey</p>
              </div>
              
              <div className="feature-item">
                <span className="feature-icon">🎯</span>
                <h3>Goal Setting</h3>
                <p>Set and achieve fitness goals</p>
              </div>
            </div>
          </div>
          
          <div className="story-section">
            <h2>My Story</h2>
            <p>
              At 21, I've been coding for several years and have always been passionate 
              about technology. But like many developers, I found myself sitting for long 
              hours and neglecting my health. That's when I decided to combine my two 
              passions - coding and fitness.
            </p>
            <p>
              I built ExerciseTracker from the ground up, pouring my knowledge of web 
              development and my personal fitness experience into every line of code. 
              Today, it's a tool that I use daily, and I'm excited to share it with you.
            </p>
          </div>
          
          <div className="contact-cta">
            <h2>Get in Touch</h2>
            <p>
              Have questions, suggestions, or just want to say hi? I'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Contact Me</a>
              <a href="mailto:sadityaadhikaru@gmail.com" className="cta-btn secondary">
                sadityaadhikaru@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}