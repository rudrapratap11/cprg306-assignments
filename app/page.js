import Link from "next/link";
export default function Home() {
  let a = 5;
  let b = 10;
  return (
    <div>
      <p><Link href= "week_1"> Week-1</Link></p>
      <p><Link href= "/week-2">week-2</Link></p>
    
      <p><Link href= "/week-3">week-3</Link></p>
      <p><Link href= "/week-4">week-4</Link></p>
    </div>
  );
}