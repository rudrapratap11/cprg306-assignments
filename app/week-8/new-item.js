"use client";
import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: uuidv4(),
            name,
            quantity,
            category
        };
        onAddItem(newItem);
        setName('');
        setQuantity('');
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5 p-4 bg-gray-800 rounded max-w-md">
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
            />
            <div className="flex mb-2">
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="p-2 w-1/3 bg-gray-700 text-white rounded mr-2"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="p-2 w-2/3 bg-gray-700 text-white rounded"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="household">Household</option>
                </select>
            </div>
            <button type="submit" className="p-2 w-full bg-blue-500 text-white rounded">Add Item</button>
        </form>
    );
};

export default NewItem;