import { Field, FieldLabel, FieldDescription } from "./ui/field";
import ItemCard from "./ItemCard";
import { Input } from "./ui/input";
import type { UserInfo } from "@/lib/data_models";

const FavoriteAuthorsField = ({
  userInfo,
  setUserInfo,
}: {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}) => {

  const addAuthor = (raw: string, inputEl?: HTMLInputElement) => {
    const name = raw.replace(/,|\n/g, "").trim();
    if (name && !userInfo.favoriteAuthors?.includes(name)) {
      setUserInfo((prev) => ({
        ...prev,
        favoriteAuthors: [...(prev.favoriteAuthors || []), name],
      }));
      console.log("authors:", userInfo.favoriteAuthors)
    }
    if (inputEl) inputEl.value = "";
  };
  return (
    <Field>
      <FieldLabel>Favorite Authors</FieldLabel>
      {userInfo.favoriteAuthors && (
        <div className="flex gap-2 flex-wrap mb-2">
          {userInfo.favoriteAuthors?.map((author) => (
            <ItemCard
              key={author}
              itemName={author}
              setUserInfo={setUserInfo}
              listItems={userInfo.favoriteAuthors}
              itemtag = "favoriteAuthors"
              className="bg-green-100 text-green-600! border-green-700!"
            />
          ))}
        </div>
      )}

      <Input
        placeholder="Add a favorite author"
        onChange={(e) => {
          const value = (e.target as HTMLInputElement).value;
          if (value.endsWith(",")) {
            addAuthor(value, e.target as HTMLInputElement);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addAuthor(
              (e.target as HTMLInputElement).value,
              e.target as HTMLInputElement,
            );
          }
        }}
        onBlur={(e) => {
          addAuthor(
            (e.target as HTMLInputElement).value,
            e.target as HTMLInputElement,
          );
        }}
      />

      <FieldDescription>
        Enter authors you enjoy reading (add by pressing comma or Enter).
      </FieldDescription>
    </Field>
  );
};

export default FavoriteAuthorsField;
