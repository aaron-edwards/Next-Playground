import { Bars3Icon } from "@heroicons/react/24/outline";

type Props = {
  onSidebarOpen: () => void;
};

export default function Header({ onSidebarOpen }: Props) {
  return (
    <header>
      <div className="sticky top-0 z-40 px-4 h-16 flex items-center gap-x-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-sm">
        <button
          type="button"
          className="-m-2.5 p-2.5  lg:hidden"
          onClick={onSidebarOpen}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
