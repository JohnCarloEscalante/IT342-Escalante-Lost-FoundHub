import { useEffect, useState } from "react";

import Sidebar from "../../../shared/components/Sidebar";
import ItemCard from "../components/ItemCard";

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

            <div className="dashboard-container">

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
                        .filter((item) => {

                            const keyword =
                                search.toLowerCase();

                            return (
                                item.itemName
                                    ?.toLowerCase()
                                    .includes(keyword)

                                ||

                                item.description
                                    ?.toLowerCase()
                                    .includes(keyword)

                                ||

                                item.location
                                    ?.toLowerCase()
                                    .includes(keyword)

                                ||

                                item.type
                                    ?.toLowerCase()
                                    .includes(keyword)

                                ||

                                item.status
                                    ?.toLowerCase()
                                    .includes(keyword)
                            );
                        })
                        
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