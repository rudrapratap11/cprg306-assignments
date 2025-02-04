export default function Item({ name, quantity, color}) {
  
    return (
      <section className="bg-slate-300 m-2 p-2">
        <h2 className="font-bold text-lg text-orange-600">{name}</h2>
        <p className="ml-1">Age: {age}</p>
        <p className="ml-1">Breed: {breed}</p>
        <p className="ml-1">Color: {color}</p>
      </section>
    );
  }