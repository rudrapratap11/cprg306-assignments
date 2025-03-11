export default function Item({ item }) {
    if (!item) {
      return null;
    }
    return (
      <div className="item p-3 bg-white shadow rounded">
        <ul className="list-disc pl-5 space-y-2">
          <li className="item-name text-gray-700 text-lg font-semibold">{item.name}</li>
          <li className="item-quantity text-gray-700">Quantity: {item.quantity}</li>
          <li className="item-category text-gray-700">Category: {item.category}</li>
        </ul>
      </div>
    );
  }