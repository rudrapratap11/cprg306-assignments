export default function Page(){
    let employee1={
        name:"John",
        age:30,
        salary:25000
    };

    let employee2={
        name:"Henry",
        age:31,
        salary:300000
    };

    let employee3={
        name:"Jatt",
        age:32,
        salary:500000
    };

    return (<main>
        <h1 className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"> Employee details</h1>
        <section className= "bg-pink-200 p-4 m-4"> 
        <p>name: {employee1.name}</p>
        <p>Age: {employee1.age}</p>
        <p>salary: {employee1.salary}</p>
        </section>
       
        <section className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 p-4 m-4">
        <p className="p-4 m-4 bg-slate-800">    
        <p>name: {employee2.name}</p>
        <p>Age: {employee2.age}</p>
        <p>salary: {employee2.salary}</p>
        </p>
        </section>
        
        <section className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-888 p-4 m-4">
            <p className="p-4 m-4 bg-slate-800">
        <p>name: {employee3.name}</p>
        <p>Age: {employee3.age}</p>
        <p>salary: {employee3.salary}</p>
        </p>
        </section>

    </main>)
}