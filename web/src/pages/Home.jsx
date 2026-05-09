import { Link } from 'react-router-dom'
import '../styles/auth.css'

function Home() {
  return (
    <div className="home-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          Lost & Found Hub
        </div>

        <div className="nav-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="glass-card">

          <h1>
            Reconnect People
            <br />
            With Their Belongings
          </h1>

          <p>
            Lost & Found Hub helps students and staff report,
            search, and recover lost items through a centralized
            and modern campus platform.
          </p>

          <div className="hero-buttons">

            <Link to="/login" className="hero-btn">
              Get Started
            </Link>

            <Link to="/register" className="hero-btn secondary-btn">
              Create Account
            </Link>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="feature-card">
          <h2>📦 Report Lost Items</h2>
          <p>
            Quickly submit lost item reports with detailed descriptions.
          </p>
        </div>

        <div className="feature-card">
          <h2>🔍 Search Found Items</h2>
          <p>
            Browse reported found items and reconnect owners faster.
          </p>
        </div>

        <div className="feature-card">
          <h2>🛡 Secure Claims</h2>
          <p>
            Admin verification ensures safe and legitimate item claims.
          </p>
        </div>

      </section>

    </div>
  )
}

export default Home