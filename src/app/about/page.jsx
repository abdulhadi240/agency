import Image from "next/image";

export default function Home() {
  return (
    <main className="mb-52 mt-52">
      <Image src={'/brand.jpg'} height={500} width={500}/>
    </main>
  );
}
