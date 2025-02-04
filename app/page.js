import Link from "next/link";
export default function Home() {
  let a = 5;
  let b = 10;
  return (
    <div>
      <p><Link href= "week_1"> go to week 1</Link></p>
      <p><Link href= "/week-2">week-2</Link></p>
    
      <p><Link href= "/week-3">Go to week3</Link></p>

      <p>The adddition is {a+b}</p>
    </div>
  );
}