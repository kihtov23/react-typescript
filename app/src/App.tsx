import React from "react";
import { TryUseState } from "./features/use-state";
import { TryUseRef } from "./features/use-ref";
import { TryAddStylesheet } from "./features/add-stylesheet/add-stylesheet";
import { TryIfStatement } from "./features/if";
import { TryApiCall } from "./features/api/get-product-api-call";
import { TryUseEffect } from "./features/use-effect";
import {
  TryAfterUseCallback,
  TryBeforeUseCallback,
} from "./features/use-callback";

function App() {
  return (
    <>
      <h2>This is an app to learn react + typescript features.</h2>
      <hr />
      <h3>Try useState</h3>
      <TryUseState />
      <hr />
      <h3>Try useRef</h3>
      <TryUseRef />
      <hr />
      <h3>Try import stylesheet</h3>
      <TryAddStylesheet />
      <hr />
      <h3>Try if statement</h3>
      <TryIfStatement />
      <hr />
      <h3>Try Api call</h3>
      <TryApiCall />
      <hr />
      <h3>Try useEffect</h3>
      <TryUseEffect />
      <hr />
      <h3>Try BeforeUseCallback</h3>
      <TryBeforeUseCallback />
      <TryAfterUseCallback />
    </>
  );
}

export default App;
