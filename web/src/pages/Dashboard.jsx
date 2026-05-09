function Dashboard() {

  const user =
    JSON.parse(localStorage.getItem('user'))

  return (

    <div style={{
      padding: '40px',
      color: 'white',
      background: '#0f172a',
      minHeight: '100vh'
    }}>

      <h1>
        Welcome, {user?.name}
      </h1>

      <p>
        Lost & Found Hub Dashboard
      </p>

    </div>
  )
}

export default Dashboard