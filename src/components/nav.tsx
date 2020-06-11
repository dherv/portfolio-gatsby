import React, { FC } from "react";
import NavLink from "./nav-link";
import { INavLink } from "../types/interfaces";
import styles from "./nav.module.css";

const Nav: FC<Props> = ({ links }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {links.map(({ name, href }) => (
          <li key={href}>
            <NavLink href={href} name={name} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface Props {
  links: INavLink[];
}

export default Nav;
