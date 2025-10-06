import Image from "next/image";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect('/dashboard/counter');
  // return (
  //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  //     <h1>Hello</h1>
  //   </main>
  // );
}
