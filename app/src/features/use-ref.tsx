import react, { useRef } from "react";

//if we return html then return type is JSX.Element
export function TryUseRef(): JSX.Element {
  // use null as default value because no elements exist when we create this variable
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(inputRef.current?.value);
  }
  return (
    <>
      
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="your name" ref={inputRef}></input>
        <button type="submit">Print to Console</button>
      </form>
    </>
  );
}
