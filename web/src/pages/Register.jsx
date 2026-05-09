import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../api/authApi'
import '../styles/auth.css'

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
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

  const handleRegister = async (e) => {
    e.preventDefault()

    if (
      !formData.name ||
      !formData.email ||
      !formData.password
    ) {
      alert('Please fill all fields')
      return
    }

    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters')
      return
    }

    try {

      setLoading(true)

      await registerUser(formData)

      alert('Registration Successful!')

      navigate('/login')

    } catch (error) {

      console.log(error)

      alert(
        error.response?.data ||
        'Registration failed'
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
          Register
        </h1>

        <p className="auth-subtitle">
          Create your account
        </p>

        <form onSubmit={handleRegister}>

          <div className="input-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

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
            {loading ? 'Loading...' : 'Create Account'}
          </button>

        </form>

        <div className="auth-footer">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Register