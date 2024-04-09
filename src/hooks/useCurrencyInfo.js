import { useEffect, useState } from "react";

function useCurrencyHook(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((responseData) => {
        // Update the state with the fetched data
        setData(responseData[currency]);
      })
      .catch((error) => {
        console.error("Error fetching currency data:", error);
      });
  }, [currency]);

  // Return the data you want to use in your component
  return data;
}

export default useCurrencyHook;
