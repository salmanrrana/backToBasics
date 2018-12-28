import { useState, useEffect } from "react";
import axios from "axios";

//This is a reuseable hook function that we can use to receive another array from an endpoint
const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        );
        setResources(response.data);
      })(resource);
    },
    [resource]
  );
  return resources;
};

export default useResources;
