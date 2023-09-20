import React from "react";

function Buttons(props) {
  const filterData = props.filterData;
  const category = props.category;
  const setCategory = props.setCategory;

  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="flex items-center justify-center gap-4 p-4 flex-wrap">
      {filterData.map((e) => (
        <button
          key={e.id}
          className={`bg-blue-900 p-4 rounded-xl text-white ${category === e.title ? "bg-opacity-10 border border-white" : "bg-black"}`}
          onClick={() => filterHandler(e.title)}
        >
          {e.title}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
