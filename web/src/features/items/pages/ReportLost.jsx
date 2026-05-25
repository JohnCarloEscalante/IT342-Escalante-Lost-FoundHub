import { useState } from "react"

import Sidebar from "../../../shared/components/Sidebar"

import { createItem } from "../api/itemApi"

import "../styles/Dashboard.css"
import "../styles/forms.css"

function ReportLost() {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [imageUrl, setImageUrl] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createItem({
          itemName: title,
          description,
          location,
          imageUrl,
          type: "Lost",
          status: "Open",
          ownerEmail:
              localStorage.getItem("userEmail")
      });
      window.location.href = "/browse";
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="dashboard-container">

        <div className="page-header">
          <h1>Report Lost Item</h1>
          <p>Provide details about your lost item.</p>
        </div>

        <form className="item-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Item Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <button type="submit">
            Submit Report
          </button>

        </form>

      </div>

    </div>
  )
}

export default ReportLost