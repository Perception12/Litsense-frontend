import type { UserInfo } from "@/lib/data_models";
import { XIcon } from "lucide-react";

const ItemCard = ({
  itemName,
  setUserInfo,
  listItems,
  itemtag,
  className = "",
}: {
  itemName: string;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
  listItems: string[] | undefined;
  itemtag: string;
  className?: string;
}) => {
  return (
    <div
      className={`px-2 py-1 bg-bluewhite text-primary text-xs flex items-center justify-center rounded-sm border border-primary gap-2 ${className}`}
    >
      {itemName}{" "}
      <XIcon
        className="w-3 h-3 cursor-pointer"
        onClick={() =>
          setUserInfo((prev) => ({
            ...prev,
            [itemtag]: listItems?.filter((item) => item !== itemName),
          }))
        }
      />
    </div>
  );
};

export default ItemCard;
