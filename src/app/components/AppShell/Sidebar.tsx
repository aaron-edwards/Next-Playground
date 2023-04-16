import CloseButton from "./CloseButton";
import Title from "../Title";

type Props = {
  onClose: () => void;
};

export default function Sidebar({ onClose }: Props) {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-teal-700 text-white px-4 pb-4">
      <div className="flex h-16 items-center justify-between">
        <Title title="Next Playground" />

        <CloseButton onClose={onClose} />
      </div>
      <nav className="flex flex-1 flex-col">Nav Menu</nav>
    </div>
  );
}
