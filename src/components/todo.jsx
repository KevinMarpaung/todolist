/* eslint-disable react/prop-types */

import { useState } from "react";

export default function TodoList({ handleCheked, handleDelete, value }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <div className="shadow px-4 py-4 rounded-md">
          <div className="flex items-center">
            <div className="w-full">
              <form>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-2 md:space-y-0">
                  <input
                    type="text"
                    value={value}
                    className="shadow w-full px-4 py-2 rounded-sm"
                  />
                  <button className="font-semibold w-full sm:w-[20%] text-black py-2  bg-sky-500  rounded-md">
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
              <div className="flex justify-between items-center shadow-md   px-4 py-4 rounded-md">
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
                    checked={val.selesai}
                    onChange={() => handleCheked(val.id)}
                  />
                  <button className="text-yellow-500">✏️</button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDelete(val.id)}
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
