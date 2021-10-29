import { NewMenuItem } from "../types/menuTypes";

export async function getMenu() {
  const response = await fetch("http://localhost:3001/menu");
  if (!response.ok) throw response;
  const menu = await response.json();
  return menu;
}

export async function addMenuItem(newMenuItem: NewMenuItem) {
  const response = await fetch("http://localhost:3001/menu", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newMenuItem),
  });
  if (!response.ok) throw response;
  const menuItem = await response.json();
  return menuItem;
}
