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
import { TryParentComponent } from "./features/component-as-parameter/parent-component";
import { TryChildComponent } from "./features/component-as-parameter/child-component";
import { TryGenerateKeys } from "./features/generate-keys";
import { TryUseMemo } from "./features/use-memo";
import { ParentUserComponent } from "./features/context/parent-user-component";

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
      <hr />
      <h3>Try component as parameter</h3>
      <TryParentComponent>
        <TryChildComponent />
      </TryParentComponent>
      <hr />
      <h3>Try generate keys </h3>
      <TryGenerateKeys />
      <hr />
      <h3>Try use memo</h3>
      <TryUseMemo />
      <hr />
      <h3>Try context.</h3>
      <ParentUserComponent />
    </>
  );
}

export default App;
