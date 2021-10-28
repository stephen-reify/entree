import React from "react";

type InputProps = {
  id: string;
  label: string;
  name: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "email" | "number" | "date" | "textarea";
  value: string;
};

export function Input({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <label>
      {label}
      {type === "textarea" ? (
        <textarea name={name} id={id} value={value} onChange={onChange} />
      ) : (
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        />
      )}
    </label>
  );
}
