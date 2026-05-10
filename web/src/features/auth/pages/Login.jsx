import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/authApi'
import '../styles/auth.css'

function Login() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {

    e.preventDefault()

    if (
      !formData.email ||
      !formData.password
    ) {
      alert('Please fill all fields')
      return
    }

    try {

      setLoading(true)

      const response = await loginUser(formData)

      localStorage.setItem(
          "token",
          response.data
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data ||
        'Invalid credentials'
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container">

      <div className="auth-card">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <h1 className="auth-title">
          Login
        </h1>

        <p className="auth-subtitle">
          Welcome back
        </p>

        <form onSubmit={handleLogin}>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>

        </form>

        <div className="auth-footer">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Login