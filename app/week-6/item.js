export default function Item({ name, quantity, category }) {
    return (
      <div className="p-4 bg-white shadow rounded">
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700 text-lg font-semibold">{name}</li>
          <li className="text-gray-700">Quantity: {quantity}</li>
          <li className="text-gray-700">Category: {category}</li>
        </ul>
      </div>
    );
  }