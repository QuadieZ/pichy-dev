import { NavigationBar } from "@/components";
import { useEffect, useState } from "react";

const Work = () => {
  const [data, setData] = useState();
  const getData = async () => {
    const response = await fetch("/api/notion", {
      method: "GET",
    });
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <NavigationBar />
      
    </>
  );
};

export default Work;
