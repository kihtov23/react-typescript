import react from "react";

export function TryIfStatement() {
  const falseCondition = false;
  const trueCondition = true;

  return (
    <>
      {falseCondition ? (
        <h2>This should be hidden</h2>
      ) : (
        <h2>This should be displayed</h2>
      )}
      {trueCondition ? (
        <h2>This should be displayed</h2>
      ) : (
        <h2>This should be hidden</h2>
      )}
    </>
  );
}
