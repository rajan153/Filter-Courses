import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./components/Data";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";

function App() {
  const [course, setCourse] = useState({});
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourse(output.data);
    } catch (error) {
      console.log("error here");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Buttons
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      />
      <Cards course={course} category={category}/>
    </>
  );
}

export default App;
