import { useState, useEffect } from "react";

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.100.108:1337/api${path}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [path]);

  return [items, isLoading];
}

export default useFetchApiItems;