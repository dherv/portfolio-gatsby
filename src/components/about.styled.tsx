import styled from "styled-components";

export const Styled = {
  Item: styled.li<{ order: number }>`
    order: ${(props) => props.order};
    grid-row: ${(props) => (props.order === 3 ? "span 2" : "span 1")};
  `,
};
