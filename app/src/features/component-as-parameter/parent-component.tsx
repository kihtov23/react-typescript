import react from "react";

interface ParentComponentProps {
  children: React.ReactNode;
}

export function TryParentComponent(props: ParentComponentProps) {
  return (
    <>
      <h4>Parent component content before child component</h4>
      {props.children}
      <h4>Parent component content after child component</h4>
    </>
  );
}
