import { Field, FieldLabel, FieldDescription } from "./ui/field";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { Input } from "./ui/input";

const FavoriteGenresField = () => {
  const [favoriteGenres, setFavoriteGenres] = useState<string[]>([]);
  return (
    <Field>
      <FieldLabel>Favorite Genres</FieldLabel>
      {favoriteGenres.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-2">
          {favoriteGenres.map((genre) => (
            <ItemCard
              key={genre}
              itemName={genre}
              setItems={setFavoriteGenres}
              listItems={favoriteGenres}
            />
          ))}
        </div>
      )}

      <Input
        placeholder="Add a favorite genre"
        onChange={(e) => {
          const value = e.target.value;
          if (value.endsWith(",") || value.endsWith(" ")) {
            const genre = value.slice(0, -1).trim();

            if (genre && !favoriteGenres.includes(genre)) {
              setFavoriteGenres([...favoriteGenres, genre]);
              e.target.value = "";
            }
          }
        }}
      />

      <FieldDescription>Enter genres you enjoy reading, separated by commas or spaces.</FieldDescription>
    </Field>
  );
};

export default FavoriteGenresField;
