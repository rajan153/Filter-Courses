import React from "react";

function Card(props) {
  const course = props.course;
  return (
    <div className="bg-slate-800 flex flex-col gap-4 text-white p-4 rounded-lg items-start w-[360px]">
      <img src={course.image.url}/>
      <h2 className="font-bold text-2xl">{course.title}</h2>
      <p className="text-left text-xl ">
        {course.description.length > 100
          ? course.description.substr(0, 100) + "..."
          : course.description}
      </p>
    </div>
  );
}

export default Card;
