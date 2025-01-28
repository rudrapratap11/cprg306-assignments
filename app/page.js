import Link from "next/link";
import Title from "/title";
export default function Home() {
  let a = 5;
  let b = 10;
  return (
    <div>
      <Title />
      <h1>My app weeek 2</h1>
      <p><Link href= "/week-2">Go to week2</Link></p>
      <p>The adddition is {a+b}</p>
    </div>
  );
}