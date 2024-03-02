import axios from "axios";
import { useState, useEffect } from "react";

const productionURL = "http://api.production:8888/";
const testURL = "http://localhost:5000/";

const useFetch = (link: string, type: string, data: any) => {
  const [responseData, setResponseData] = useState<any>(null);
  const [err, setErr] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // fetching with the function FETCH
    let options = {
      method: type,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch(testURL + link, options)
      .then((response) => {
        console.log(response);
        setResponseData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErr(error);
        setIsLoading(false);
      });

    // fetching using the axios
    let axiosOptions = {
      method: type,
      url: testURL + link,
      data: data,
    };
    axios(axiosOptions)
      .then((response) => {
        console.log(response);
        setResponseData(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErr(error);
        setIsLoading(false);
      });
  }, [link]);

  return { responseData, isLoading, err };
};
export default useFetch;
