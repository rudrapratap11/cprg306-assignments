"use client";

import { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, { name: newItem.name, category: newItem.category, quantity: newItem.quantity }]);
  };

  return (
    <main className="p-8 min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-extrabold mb-6">🛒 Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}