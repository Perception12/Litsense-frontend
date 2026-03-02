import { Field, FieldLabel, FieldDescription } from "./ui/field";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { Input } from './ui/input';

const FavoriteAuthorsField = () => {
    const [favoriteAuthors, setFavoriteAuthors] = useState<string[]>([]);
  return (
    <Field>
      <FieldLabel>Favorite Authors</FieldLabel>
      {favoriteAuthors.length > 0 && (
        <div className="flex gap-2 flex-wrap mb-2">
          {favoriteAuthors.map((author) => (
            <ItemCard
              key={author}
              itemName={author}
              setItems={setFavoriteAuthors}
              listItems={favoriteAuthors}
              className='bg-green-100 text-green-600! border-green-700!'
            />
          ))}
      </div>)}

      <Input
        placeholder="Add a favorite author"
        onChange={(e) => {
          const value = e.target.value;
          if (value.endsWith(",") || value.endsWith(" ")) {
            const author = value.slice(0, -1).trim();

            if (author && !favoriteAuthors.includes(author)) {
              setFavoriteAuthors([...favoriteAuthors, author]);
              e.target.value = "";
            }
          }
        }}
      />

      <FieldDescription>Enter authors you enjoy reading, separated by commas or spaces.</FieldDescription>
    </Field>
  )
}

export default FavoriteAuthorsField