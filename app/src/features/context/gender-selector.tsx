import { useUserContext } from "./user-context";

export function GenderSelector() {
  const userContext = useUserContext();
  return (
    <>
      <button
        type="submit"
        className="bg-yellow-400"
        onClick={() => userContext.setGender("Mail")}
      >
        Mail
      </button>
      <br></br>
      <br></br>
      <button
        type="submit"
        className="bg-yellow-400"
        onClick={() => userContext.setGender("Femail")}
      >
        Femail
      </button>
    </>
  );
}

export type Gender = "NotSpecified" | "Mail" | "Femail";
