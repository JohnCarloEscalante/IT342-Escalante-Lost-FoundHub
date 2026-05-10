import {
    updateItemStatus,
    deleteItem
} from "../api/itemApi";

import "../styles/itemCard.css";

function ItemCard({ item, refreshItems }) {

    const userEmail =
        localStorage.getItem("userEmail");

    const isOwner =
        userEmail === item.ownerEmail;

    const handleResolve = async () => {

        try {

            await updateItemStatus(
                item.id,
                "Resolved"
            );

            refreshItems();

        } catch (error) {

            console.log(error);
        }
    };

    const handleDelete = async () => {

        try {

            await deleteItem(item.id);

            refreshItems();

        } catch (error) {

            console.log(error);
        }
    };

    return (
        <div className="item-card">

            <img
                src={
                    item.imageUrl ||
                    "https://via.placeholder.com/300"
                }
                alt={item.itemName}
            />

            <div className="item-card-content">

                <div className="item-top">

                    <h3>{item.itemName}</h3>

                    <span
                        className={
                            item.status === "Resolved"
                                ? "resolved-badge"
                                : "open-badge"
                        }
                    >
                        {item.status}
                    </span>

                </div>

                <p className="item-type">
                    {item.type} Item
                </p>

                <p>
                    {item.description}
                </p>

                <p className="location">
                    📍 {item.location}
                </p>

                <p className="owner">
                    Posted by:
                    {" "}
                    {item.ownerEmail}
                </p>

                {isOwner && (
                    <div className="item-actions">

                        {item.status !== "Resolved" && (
                            <button
                                className="resolve-btn"
                                onClick={handleResolve}
                            >
                                Mark Resolved
                            </button>
                        )}

                        <button
                            className="delete-btn"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                    </div>
                )}

            </div>

        </div>
    );
}

export default ItemCard;