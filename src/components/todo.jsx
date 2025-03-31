/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function TodoList({ onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState([]);

  useEffect(() => {
    const saveData = localStorage.getItem("datablog");
    if (saveData) {
      try {
        const parse = JSON.parse(saveData);
        setValue(Array.isArray(parse) ? parse : []);
      } catch (error) {
        console.log("data gaggal diambil", error);
      }
    }
  }, []);
  const handleDone = (id) => {
    const updatedValue = value.map((val) => {
      if (val.id === id) {
        return { ...val, selesai: !val.selesai };
      }
      return val;
    });
    setValue(updatedValue);
    localStorage.setItem("datablog", JSON.stringify(updatedValue));
  };

  const handleDelet = (id) => {
    const dataYangdihapus = value.filter((val) => val.id !== id);
    setValue(dataYangdihapus);
    localStorage.setItem("datablog", JSON.stringify(dataYangdihapus));
  };

  return (
    <>
      {isEditing ? (
        <div className="shadow-md shadow px-4 py-4 rounded-md">
          <div className="flex items-center">
            <div className="w-full">
              <form>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 md:space-y-0">
                  <input
                    type="text"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    className="shadow w-full px-4 py-2 rounded-sm"
                  />
                  <button className="font-semibold w-full sm:w-[20%] text-black py-2 bg-sky-500  rounded-md">
                    Save
                  </button>
                  <button className="font-semibold w-full sm:w-[20%] text-black py-2 bg-red-500   rounded-md">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        value.map((val) => {
          return (
            <>
              <div className="flex justify-between items-center shadow-md shadow  px-4 py-4 rounded-md">
                <p
                  className={`md:font-semibold md:text-lg ${
                    val.selesai && "line-through text-red-500"
                  }`}
                >
                  {val.value}
                </p>
                <div className="space-x-2 md:space-x-3">
                  <input
                    type="checkbox"
                    onChange={() => {
                      handleDone(val.id);
                    }}
                  />
                  <button className="text-yellow-500">✏️</button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelet(val.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
}
