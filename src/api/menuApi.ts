export async function getMenu() {
  const response = await fetch("http://localhost:3001/menu");
  if (!response.ok) throw response;
  const menu = await response.json();
  return menu;
}
