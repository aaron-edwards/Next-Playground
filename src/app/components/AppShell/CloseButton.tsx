import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  onClose: () => void;
};

export default function CloseButton({ onClose }: Props) {
  return (
    <button type="button" className="-m-2.5 p-2.5 lg:hidden" onClick={onClose}>
      <span className="sr-only">Close sidebar</span>
      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </button>
  );
}
