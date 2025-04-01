import Button from "./Elements/Button";

function Action({ onfilter }) {
  return (
    <div className="my-4">
      <h2 className="text-center font-bold text-3xl mb-5">Todo List</h2>
      <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-10">
        <Button onclick={() => onfilter("all")}>All</Button>
        <Button onclick={() => onfilter("done")}>Done</Button>
        <Button onclick={() => onfilter("active")}>Active</Button>
      </div>
    </div>
  );
}

export default Action;
