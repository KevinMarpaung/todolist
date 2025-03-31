// eslint-disable-next-line react/prop-types
const Footer = ({ deleteDone, deleteAll }) => {
  return (
    <div className="mt-12">
      <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0">
        <button
          className="w-full font-semibold text-white px-8 py-2 rounded-md bg-red-500 "
          onClick={deleteDone}
        >
          Delete Done Task
        </button>
        <button
          className="w-full font-semibold text-white px-8 py-2 rounded-md bg-red-500 "
          onClick={deleteAll}
        >
          Delete All Taskk
        </button>
      </div>
    </div>
  );
};

export default Footer;
