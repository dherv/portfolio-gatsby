import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-weight: 600;
`;

export const HeadingDark = styled(Heading)`
  color: var(--text-color-dark);
`;

export const AppHeading = styled.h5<{ width: number }>`
  width: ${(props) => props.width && props.width}px;
  height: 1rem;
  line-height: 1rem;
  padding: 0 1rem;
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
  font-weight: 500;
  font-size: 0.5rem;
  text-align: center;
  white-space: nowrap;
`;
