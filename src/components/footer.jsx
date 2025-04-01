import Button from "./Elements/Button";

// eslint-disable-next-line react/prop-types
const Footer = ({ deleteDone, deleteAll }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
        <Button bg={"bg-red-500"} onclick={deleteDone} text={"text-black"}>
          Delete Done Task
        </Button>
        <Button onclick={deleteAll} bg={"bg-red-500"} text={"text-black"}>
          Delete All Taskk
        </Button>
      </div>
    </div>
  );
};

export default Footer;
