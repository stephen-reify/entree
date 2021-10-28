import { useState } from "react";
import styles from "./App.module.scss";
import { Input } from "./Input";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Fried Chicken",
    description:
      "Beer battered and slightly spicy. Just like mama used to make!",
    price: 12.99,
  },
  {
    id: 2,
    name: "Fried Okra",
    description:
      "Flower battered and deep fried. Crispy on the outside and soft in the center. Yum!",
    price: 3.99,
  },
];

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
  return (
    <>
      <h1>Entree</h1>
      <form>
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
      {menu.map((item) => {
        return (
          <div key={item.id} className={styles.card}>
            <dl>
              <dt>{item.name}</dt>
              <dd>
                {item.description}
                <br />
                <i>${item.price}</i>
              </dd>
            </dl>
          </div>
        );
      })}
    </>
  );
}
