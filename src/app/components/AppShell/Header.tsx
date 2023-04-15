import { Inter } from "next/font/google";
import { Bars3Icon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  onSidebarOpen: () => void;
};

export default function Header({ onSidebarOpen }: Props) {
  return (
    <header className="lg:pl-72">
      <div className="sticky top-0 z-40 px-4 h-16 flex items-center gap-x-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm">
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={onSidebarOpen}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
        <h1
          className={`${inter.className} text-4xl text-gray-700 dark:text-gray-300 font-bold`}
        >
          Nextjs Playground App
        </h1>
      </div>
    </header>
  );
}
