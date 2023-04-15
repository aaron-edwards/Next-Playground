import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className={`${inter.className} text-4xl text-gray-700 font-bold`}>
        Nextjs Playground App
      </h1>
    </main>
  );
}
