"use client";

import React, { useState } from 'react';

function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce"); // Set default value
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      category,
      quantity
    };
    onAddItem(newItem);
    setName("");
    setCategory("produce"); // Reset to default value
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-md rounded text-black space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Item name</label>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Item category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border rounded text-gray-800"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen">Frozen Foods</option>
          <option value="canned">Canned Goods</option>
          <option value="dry">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Item quantity</label>
        <input
          type="number"
          placeholder="Item quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold rounded hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Submit</button>
    </form>
  );
}

export default NewItem;