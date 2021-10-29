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

export function Admin() {
  const history = useHistory();
  const [newMenuItem, setNewMenuItem] = useState(blankMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewMenuItem({ ...newMenuItem, [event.target.id]: event.target.value });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        />
        <Input
          id="description"
          name="description"
          label="Description"
          type="textarea"
          value={newMenuItem.description}
          onChange={onChange}
        />
        <Input
          type="number"
          id="price"
          name="price"
          label="Price"
          value={newMenuItem.price?.toString() ?? ""}
          onChange={onChange}
        />
        <input type="submit" value="Save Menu Item" />
      </form>
    </>
  );
}
