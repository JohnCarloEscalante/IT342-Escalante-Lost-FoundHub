import Sidebar from "../../../shared/components/Sidebar";

import "../styles/Dashboard.css"

function MyReports() {

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-container">

        <div className="page-header">
          <h1>My Reports</h1>
          <p>Your submitted reports will appear here.</p>
        </div>

        <div className="empty-state">

          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
            alt="Reports"
          />

          <h2>No Reports Yet</h2>

          <p>
            Your submitted lost and found reports will appear here.
          </p>

        </div>

      </div>

    </div>
  )
}

export default MyReports