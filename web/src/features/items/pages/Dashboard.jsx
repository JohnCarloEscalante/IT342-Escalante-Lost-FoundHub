import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import ItemCard from "../../../components/ItemCard";
import AddItemModal from "../../../components/AddItemModal";

import { getAllItems, createItem } from "../api/itemApi";

import "../styles/dashboard.css";

function Dashboard() {

    const [items, setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

        try {

            const response = await getAllItems();

            setItems(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    const handleAddItem = async (itemData) => {

        try {

            await createItem(itemData);

            setShowModal(false);

            fetchItems();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div>
            <div className="dashboard-layout">

                <Sidebar />

                <div className="dashboard-content">

                    <div className="dashboard-header">

                        <h1>Lost & Found Dashboard</h1>

                        <button
                            className="add-btn"
                            onClick={() => setShowModal(true)}
                        >
                            + Add Item
                        </button>

                    </div>

                    <div className="items-grid">

                        {items.map((item) => (

                            <ItemCard
                                key={item.id}
                                item={item}
                            />

                        ))}

                    </div>

                </div>

            </div>

            {showModal && (
                <AddItemModal
                    closeModal={() => setShowModal(false)}
                    onSubmit={handleAddItem}
                />
            )}
        </div>
    );
}

export default Dashboard;