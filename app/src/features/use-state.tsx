import react, { useState } from "react";

type User = {
  name: string;
  age: number;
};

export function TryUseState() {
  //here type inference was applied
  // !!!When we call setIsDisabled React re-renders full component and all child components !!!
  const [isDisabled, setIsDisabled] = useState(true);
  //specify type, make nullable, use union type
  const [user, setUser] = useState<User | null>(null);

  function enableDisableSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setIsDisabled(!isDisabled);
  }

  const currentUser = { name: "Oleg", age: 32 };
  function displayUserInfo(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setUser(currentUser);
  }
  return (
    <>
      <button onClick={enableDisableSubmit}>Enable/disable submit</button>
      <button disabled={isDisabled}>Submit</button>
      <br />
      <button onClick={displayUserInfo}>Display User Info</button>
      {user && (
        <h4>
          User name: {user.name}. Age: {currentUser.age}
        </h4>
      )}
    </>
  );
}
