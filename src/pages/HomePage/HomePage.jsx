import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="home-page">
      
      <main className="home-main">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Track Your Fitness Journey <span className="hero-emoji">💪</span>
            </h1>
            <p className="hero-subtitle">
              Log exercises, monitor progress, and achieve your fitness goals with ExerciseTracker
            </p>
            <div className="hero-buttons">
              <Link to="/exercises" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Exercises</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Tracking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-header">
            <h2>Why Choose ExerciseTracker?</h2>
            <p>Everything you need to track your fitness journey</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Easy Logging</h3>
              <p>Quickly add exercises with name, duration, and category</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Smart Filtering</h3>
              <p>Filter exercises by category, difficulty, and search terms</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>View all your exercises in an organized grid layout</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Goal Setting</h3>
              <p>Set and track your fitness goals over time</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Access your exercises anywhere, anytime</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Real-time Updates</h3>
              <p>Changes sync instantly across your account</p>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="section-header">
            <h2>Exercise Categories</h2>
            <p>Choose from a variety of exercise types</p>
          </div>
          
          <div className="categories-grid">
            <Link to="/exercises?category=chest" className="category-card chest">
              <span className="category-emoji">💪</span>
              <h3>Chest</h3>
              <p>Bench press, push-ups, flies</p>
            </Link>
            
            <Link to="/exercises?category=back" className="category-card back">
              <span className="category-emoji">🔙</span>
              <h3>Back</h3>
              <p>Pull-ups, rows, deadlifts</p>
            </Link>
            
            <Link to="/exercises?category=legs" className="category-card legs">
              <span className="category-emoji">🦵</span>
              <h3>Legs</h3>
              <p>Squats, lunges, leg press</p>
            </Link>
            
            <Link to="/exercises?category=arms" className="category-card arms">
              <span className="category-emoji">💪</span>
              <h3>Arms</h3>
              <p>Bicep curls, tricep extensions</p>
            </Link>
            
            <Link to="/exercises?category=shoulders" className="category-card shoulders">
              <span className="category-emoji">🏋️</span>
              <h3>Shoulders</h3>
              <p>Shoulder press, lateral raises</p>
            </Link>
            
            <Link to="/exercises?category=cardio" className="category-card cardio">
              <span className="category-emoji">🏃</span>
              <h3>Cardio</h3>
              <p>Running, cycling, jumping jacks</p>
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works-section">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Get started in three simple steps</p>
          </div>
          
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create an Account</h3>
                <p>Sign up for free and set up your profile</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Add Exercises</h3>
                <p>Log your exercises with details and categories</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Track Progress</h3>
                <p>View and filter your exercises to monitor progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Start Your Fitness Journey?</h2>
            <p>Join thousands of users tracking their exercises daily</p>
            <Link to="/register" className="btn btn-cta">
              Sign Up Now - It's Free!
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}