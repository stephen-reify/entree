import { useState } from "react";
import { Input } from "./Input";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

const blankMenuItem: NewMenuItem = {
  name: "",
  description: "",
  price: null,
};

export function App() {
  const [newMenuItem, setNewMenuItem] = useState(blankMenuItem);

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewMenuItem({ ...newMenuItem, [event.target.id]: event.target.value });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // setMenu([
    //   ...menu,
    //   {
    //     id: menu.length + 1,
    //     description: newMenuItem.description,
    //     price: newMenuItem.price as number,
    //     name: newMenuItem.name,
    //   },
    // ]);
    setNewMenuItem(blankMenuItem);
  }

  return (
    <>
      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <h1>Entree</h1>
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
