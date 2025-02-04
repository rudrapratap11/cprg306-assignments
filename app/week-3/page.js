import ItemList from './item-list.js';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="bg-gray-200 p-2">
            <p>
                <Link className="font-bold bg-blue-200 p-0 m-1" href="../">Home</Link>
            </p>
            <h1 className="text-4xl text-center">Shopping List</h1>
            <ItemList />
        </div>
    );
}
