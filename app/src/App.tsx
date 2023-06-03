import React from "react";
import { TryUseState } from "./features/use-state";
import { TryUseRef } from "./features/use-ref";

function App() {
  return (
    <>
      <h2>This is an app to learn react + typescript features.</h2>
      <hr />
      <TryUseState />
      <hr />
      <TryUseRef />
    </>
  );
}

export default App;
