import Link from "next/link";
import styles from "./Navbar.module.css";
import { links } from "./data";
import Button from "@/elements/Button/Button";
import Logo from "@/elements/Logo/Logo";
import DarkMode from "../Dark-light-mode/DarkMode";


export default function Navbar() {
  return (
    <div className={styles.container}>

      <Logo /> 
      <div className={styles.links}>
      <DarkMode />
        {links.map((link) => (
          <a href={link.url} className={styles.link} key={link.id}>
            {link.title}
          </a>
        ))}

        <Button />
      </div>
    </div>
  );
}
