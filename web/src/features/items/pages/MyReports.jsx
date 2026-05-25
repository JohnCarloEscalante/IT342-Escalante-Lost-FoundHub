import { useEffect, useState } from "react"

import Sidebar from "../../../shared/components/Sidebar"
import ItemCard from "../components/ItemCard"

import { getAllItems } from "../api/itemApi"

import "../styles/Dashboard.css"
import "../styles/items.css"

function MyReports() {

  const [myItems, setMyItems] = useState([])

  useEffect(() => {
    fetchMyReports()
  }, [])

  const fetchMyReports = async () => {

    try {

      const response = await getAllItems()

      const currentUserEmail =
        localStorage.getItem("userEmail")

      const filteredItems = response.data.filter(
        (item) => item.ownerEmail === currentUserEmail
      )

      setMyItems(filteredItems)

    } catch (error) {

      console.log(error)
    }
  }

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-container">

        <div className="page-header">
          <h1>My Reports</h1>
          <p>Your submitted reports appear here.</p>
        </div>

        {myItems.length === 0 ? (

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

        ) : (

          <div className="items-grid">

            {myItems.map((item) => (

              <ItemCard
                key={item.id}
                item={item}
              />

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default MyReports