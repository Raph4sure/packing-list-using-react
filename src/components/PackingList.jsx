import { useState } from "react";
import Item from "./Item";

/* const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Shoe", quantity: 2, packed: false },
]; */

export default function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
    const [sortBy, setSortBy] = useState("input");

    let sortByItem;

    if (sortBy === "input") sortByItem = items;

    if (sortBy === "description")
        sortByItem = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed")
        sortByItem = items
            .slice()
            .sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">
            <ul>
                {sortByItem.map((item) => (
                    <Item
                        item={item}
                        onDeleteItem={onDeleteItem}
                        key={item.id}
                        onToggleItem={onToggleItem}
                    />
                ))}
            </ul>
            <div className="actions">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button onClick={onClearList}>Clear List</button>
            </div>
        </div>
    );
}
