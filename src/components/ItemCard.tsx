import { XIcon } from "lucide-react";

const ItemCard = ({
  itemName,
  setItems,
  listItems,
  className = "",
}: {
  itemName: string;
  setItems: (items: string[]) => void;
  listItems: string[];
  className?: string;
}) => {
  return (
    <div
      className={`px-2 py-1 bg-bluewhite text-primary text-xs flex items-center justify-center rounded-sm border border-primary gap-2 ${className}`}
    >
      {itemName}{" "}
      <XIcon
        className="w-3 h-3 cursor-pointer"
        onClick={() => setItems(listItems.filter((item) => item !== itemName))}
      />
    </div>
  );
};

export default ItemCard;
