//useCallback is used to cache a function definition between re-renders
//use case - when function is passed as a parameter
import react, { useCallback, useEffect, useState } from "react";

// this component demonstrates that when setState is called, then
// whole component is rerendered. In this case it means that API call is made each time we setState!
// which is really bad and unwanted in most cases
export function TryBeforeUseCallback() {
  const [submitted, setSubmitted] = useState(false);

  function getDataFromApi() {
    console.log("TryBeforeUseCallback. API was called");
    return "TryBeforeUseCallback. This is API response";
  }

  return (
    <>
      <button onClick={() => setSubmitted(!submitted)}>Handle name</button>
      <DisplayAPIData getDataFromApi={getDataFromApi} />
    </>
  );
}

// in this component we moved API call into useCallback

export function TryAfterUseCallback() {
  const [submitted, setSubmitted] = useState(false);

  function getDataFromApi() {
    console.log("TryAfterUseCallback. API was called");
    return "TryAfterUseCallback. This is API response";
  }

  const memorizedGetDataFromApi = useCallback(() => {
    return getDataFromApi();
  }, []);

  return (
    <>
      <button onClick={() => setSubmitted(!submitted)}>Handle name</button>
      <DisplayAPIData getDataFromApi={memorizedGetDataFromApi} />
    </>
  );
}

function DisplayAPIData({ getDataFromApi }: { getDataFromApi: () => string }) {
  const [data, setData] = useState<string | null>();
  useEffect(() => {
    setData(getDataFromApi);
  }, [getDataFromApi]);
  return <h4>{data}</h4>;
}
