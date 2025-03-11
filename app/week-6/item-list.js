"use client";

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <button
          className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-500'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-500'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedItems.map((item) => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </div>
    </div>
  );
}