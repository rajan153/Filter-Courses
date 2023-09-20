import React from "react";
import Card from "./Card";

function Cards(props) {
  const course = props.course;
  const category = props.category;
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(course).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      return course[category];
    }
  }
  getCourses();
  return (
    <div className="flex flex-row justify-center flex-wrap gap-4 pb-8">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
