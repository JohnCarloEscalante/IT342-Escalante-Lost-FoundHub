import { useEffect, useState } from "react";

import Sidebar from "../../../components/Sidebar";
import ItemCard from "../../../components/ItemCard";

import { getAllItems } from "../api/itemApi";

import "../styles/dashboard.css";
import "../styles/items.css";

function BrowseItems() {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {

        try {

            const response =
                await getAllItems();

            setItems(response.data);

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="dashboard-layout">

            <Sidebar />

            <div className="dashboard-content">

                <h1>Browse Items</h1>

                <input
                    type="text"
                    placeholder="Search items..."
                    className="search-input"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <div className="items-grid">

                    {items
                        .filter((item) =>
                            item.itemName
                                ?.toLowerCase()
                                .includes(
                                    search.toLowerCase()
                                )
                        )
                        .map((item) => (

                            <ItemCard
                                key={item.id}
                                item={item}
                                refreshItems={fetchItems}
                            />

                        ))}

                </div>

            </div>

        </div>
    );
}

export default BrowseItems;