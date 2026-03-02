import { Input } from "./ui/input";
import { Field, FieldDescription, FieldLabel } from "./ui/field";
import FavoriteGenresField from "./FavoriteGenresField";
import FavoriteAuthorsField from "./FavoriteAuthorsField";

const user_input_fields = [
  {
    label: "Full name",
    placeholder: "Enter your full name",
    description: "This will be used to personalize your experience.",
    required: true,
  },
  {
    label: "Age",
    placeholder: "Enter your age",
    type: "number",
    description:
      "Optional, but this will help us recommend age-appropriate books.",
  },
  {
    label: "Occupation",
    placeholder: "Enter your occupation",
    description:
      "Optional, but this will help us understand your lifestyle and recommend relevant books.",
  },
  {
    label: "Location",
    placeholder: "Enter your location",
    description:
      "Optional, but this will help us recommend books that are popular in your area.",
  },
];

const UserInfoPage = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div className=" flex flex-col w-full max-w-150 gap-4">
        <h1 className="text-2xl font-bold text-primary">
          Tell us about yourself!
        </h1>
        {user_input_fields.map((field) => (
          <Field key={field.label}>
            <FieldLabel>{field.label}</FieldLabel>
            <Input
              type={field.type || "text"}
              placeholder={field.placeholder}
              required={field.required || false}
            />
            <FieldDescription>{field.description}</FieldDescription>
          </Field>
        ))}

        <FavoriteGenresField />
        <FavoriteAuthorsField />

        <button className="w-fit self-end bg-primary text-white px-4 py-2 rounded-sm cursor-pointer hover:bg-bluewhite hover:text-black hover:border hover:border-primary transition-all duration-300 ">
          Save
        </button>
      </div>
    </div>
  );
};

export default UserInfoPage;
