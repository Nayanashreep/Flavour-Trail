import { useState } from "react";

export default function OwnerDashboard() {
  const [menuItem, setMenuItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Upload menu:", menuItem);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Owner Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={menuItem}
          onChange={(e) => setMenuItem(e.target.value)}
          placeholder="Add menu item"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2">Upload</button>
      </form>
    </div>
  );
}
