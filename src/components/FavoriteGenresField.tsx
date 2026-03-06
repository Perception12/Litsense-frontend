import { Field, FieldLabel, FieldDescription } from "./ui/field";
import ItemCard from "./ItemCard";
import { Input } from "./ui/input";
import type { UserInfo } from "@/lib/data_models";

const FavoriteGenresField = ({
  userInfo,
  setUserInfo,
}: {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
}) => {
  const addGenre = (raw: string, inputEl?: HTMLInputElement) => {
    const name = raw.replace(/,$|\n$/g, "").trim();
    if (name && !userInfo.favoriteGenres?.includes(name)) {
      setUserInfo((prev) => ({
        ...prev,
        favoriteGenres: [...(prev.favoriteGenres || []), name],
      }));
      console.log("genres:", userInfo.favoriteGenres)
    }
    if (inputEl) inputEl.value = "";
  };
  return (
    <Field>
      <FieldLabel>Favorite Genres</FieldLabel>
      {userInfo?.favoriteGenres  && (
        <div className="flex gap-2 flex-wrap mb-2">
          {userInfo.favoriteGenres?.map((genre) => (
            <ItemCard
              key={genre}
              itemName={genre}
              setUserInfo={setUserInfo}
              itemtag="favoriteGenres"
              listItems={userInfo.favoriteGenres}
            />
          ))}
        </div>
      )}

      <Input
        placeholder="Add a favorite genre"
        onChange={(e) => {
          const value = (e.target as HTMLInputElement).value;
          if (value.endsWith(",")) {
            addGenre(value, e.target as HTMLInputElement);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            addGenre(
              (e.target as HTMLInputElement).value,
              e.target as HTMLInputElement,
            );
          }
        }}
        onBlur={(e) => {
          addGenre(
            (e.target as HTMLInputElement).value,
            e.target as HTMLInputElement,
          );
        }}
      />

      <FieldDescription>
        Enter genres you enjoy reading (add by pressing comma or Enter).
      </FieldDescription>
    </Field>
  );
};

export default FavoriteGenresField;
