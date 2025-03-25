"use client";

import React, { useState } from "react";
import NewItem from "../../week-8/new-item";
import ItemList from "../../week-8/item-list";
import MealIdeas from "../../week-8/meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim().replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 bg-gray-900 text-white min-h-screen">
      <div className="flex-1 lg:mr-5 mb-5 lg:mb-0">
        <h1 className="text-3xl mb-5">Shopping List</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-5">
            <NewItem onAddItem={handleAddItem} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="flex-1 lg:mr-5">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1 lg:ml-5">
            <h2 className="text-2xl mb-4">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </div>
  );
}