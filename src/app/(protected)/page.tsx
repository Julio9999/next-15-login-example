import Link from "next/link";


export default function Home() {

  return (
    <div>
      Pagina principal
      <Link href={"/dashboard"}>Pagina de dashboard</Link>
    </div>
  );
}
