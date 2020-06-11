import React, { FC } from "react";
import AboutCountries from "./about-countries";
import { IAboutData } from "../types/interfaces";
import Element from "./app/element";
import ElementTextContent from "./app/element-text-content";
import AboutYears from "./about-years";
import { Styled } from "./about.styled";
import styles from "./about.module.css";

const About: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      <AboutCountries />
      <ul className={styles.list}>
        {data.map(({ title, items }, index) => {
          const order = index > 0 ? index + 2 : 1;
          return (
            <Styled.Item as="li" key={title} order={order}>
              <Element title={title}>
                <ElementTextContent items={items}></ElementTextContent>
              </Element>
            </Styled.Item>
          );
        })}
        <Styled.Item as="li" order={1}>
          <AboutYears count={2} />
        </Styled.Item>
      </ul>
    </div>
  );
};

interface Props {
  data: IAboutData[];
}

export default About;
