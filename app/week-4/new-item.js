"use client"
import { useState } from "react"

export default function Counter() {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    console.log("New Quantity:", quantity + 1); // Logs the expected new value
  };

  const decrement = () => {
    if (quantity > 1) { // Prevents decrementing when quantity is 1
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-4 shadow rounded w-1/2 mx-auto">
      <div className="text-2xl mb-4 text-black">Quantity: {quantity}</div>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1} // Now disables the button when quantity is 1
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
        >
          Decrement
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
