const brandColor: string = "#428";

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const menu: MenuItem[] = [
  {
    id: 1,
    name: "Fried Chicken",
    description: "delicious fried stuff",
    price: 1000,
  },
  {
    id: 2,
    name: "Fried Okra",
    description: "delicious fried stuff",
    price: 800,
  },
];

export function App() {
  return (
    <>
      <h1 style={{ color: brandColor, paddingBottom: "1.2rem" }}>Entree</h1>
      <ul>
        {menu.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
