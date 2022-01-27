import React, { useState, useEffect } from "react";

function LocalApi() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetch("/test-api", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        // eslint-disable-next-line no-console
        console.log(data);
      });
  }, []);

  return (
    <ul>
      {apiData ? (
        apiData.info.map((item, i) => <li key={i}>{item}</li>)
      ) : (
        <p>Loading data...</p>
      )}
    </ul>
  );
}

export default LocalApi;
