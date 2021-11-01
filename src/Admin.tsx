import { useState } from "react";
import { addMenuItem } from "./api/menuApi";
import { Input } from "./shared/Input";
import { NewMenuItem } from "./types/menuTypes";
import { useHistory } from "react-router-dom";

const blankMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

type AdminError = {
  name: string;
  description: string;
  price: string;
};

type Status = "Idle" | "Saving" | "Submitted";

export function Admin() {
  const history = useHistory();
  const [status, setStatus] = useState<Status>("Idle");
  const [newMenuItem, setNewMenuItem] = useState(blankMenuItem);

  const errors = validate();
  const valid = Object.values(errors).every((v) => !v);

  function validate(): AdminError {
    const error: AdminError = {
      name: "",
      description: "",
      price: "",
    };

    Object.keys(error).forEach((k) => {
      const key = k as keyof NewMenuItem;
      if (!newMenuItem[key]) error[key] = `${k} is required.`;
    });
    // if (newMenuItem.price == 0)
    //   error.price = "Price must be greater than zero.";

    return error;
  }

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewMenuItem({ ...newMenuItem, [event.target.id]: event.target.value });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Submitted");
    if (!valid) return;
    setStatus("Saving");
    await addMenuItem(newMenuItem);
    // redirect to home
    history.push("/");
  }

  return (
    <>
      <h1>Entree Admin</h1>
      <h2>Add Menu Item</h2>
      <form onSubmit={onSubmit}>
        <Input
          id="name"
          name="name"
          label="Name"
          value={newMenuItem.name}
          onChange={onChange}
          error={status !== "Idle" ? errors.name : ""}
        />
        <Input
          id="description"
          name="description"
          label="Description"
          type="textarea"
          value={newMenuItem.description}
          onChange={onChange}
          error={status !== "Idle" ? errors.description : ""}
        />
        <Input
          type="number"
          id="price"
          name="price"
          label="Price"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
          error={status !== "Idle" ? errors.price : ""}
        />
        <input
          type="submit"
          value="Save Menu Item"
          disabled={status === "Saving"}
        />
      </form>
    </>
  );
}
