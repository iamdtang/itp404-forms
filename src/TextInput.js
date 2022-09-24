import { useState } from "react";

export default function TextInput(props) {
  const [value, setValue] = useState("");

  return (
    <>
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        type="text"
        className="form-control"
        id={props.id}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
}
