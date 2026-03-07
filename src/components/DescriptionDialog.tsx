import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

const DescriptionDialog = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer px-4 py-2 border border-secondary rounded-sm w-fit text-xs">
        Read Book Description
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Here's a detailed description.</DialogDescription>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {description}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DescriptionDialog;
