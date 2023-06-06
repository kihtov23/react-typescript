import React from "react";
import { TryUseState } from "./features/use-state";
import { TryUseRef } from "./features/use-ref";
import { TryAddStylesheet } from "./features/add-stylesheet/add-stylesheet";
import { TryIfStatement } from "./features/if";

function App() {
  return (
    <>
      <h2>This is an app to learn react + typescript features.</h2>
      <hr />
      <TryUseState />
      <hr />
      <TryUseRef />
      <hr />
      <TryAddStylesheet />
      <hr />
      <TryIfStatement />
    </>
  );
}

export default App;
