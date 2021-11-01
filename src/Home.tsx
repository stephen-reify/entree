import { useEffect, useState } from "react";
import { getMenu } from "./api/menuApi";
import styles from "./styles/Home.module.scss";
import { MenuItem } from "./types/menuTypes";

export function Home() {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  useEffect(() => {
    async function _getMenu() {
      const remoteMenu = await getMenu();
      setMenu(remoteMenu);
    }
    _getMenu();
  }, []); // dependency array - empty means no deps... so no reason to cause it to run again.
  return (
    <>
      <h1>Home</h1>

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
