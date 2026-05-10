import { useState } from "react"
import "../styles/AddItemModal.css"

function AddItemModal({ closeModal, onSubmit }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    imageUrl: "",
    status: "LOST"
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="modal-overlay">

      <div className="modal-content">

        <h2>Add Item</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="title"
            placeholder="Item Title"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL"
            onChange={handleChange}
          />

          <select name="status" onChange={handleChange}>
            <option value="LOST">Lost</option>
            <option value="FOUND">Found</option>
          </select>

          <button type="submit">
            Submit Item
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={closeModal}
          >
            Cancel
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddItemModal