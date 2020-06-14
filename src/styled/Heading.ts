import styled, { css } from "styled-components";
import { device } from "./media-queries";

export const Heading = styled.h1`
  font-weight: 600;
`;

export const HeadingDark = styled(Heading)`
  color: var(--text-color-dark);
`;

export const HeadingDate = styled(Heading)`
  margin: 1rem 0 2rem;
  @media ${device.tablet} {
    margin: 0;
  }
`;

export const HeadingLight = styled.h1`
  font-weight: 300;
  margin-bottom: 0.25rem;
`;

export const AppHeading = styled.h5<{ width: number }>`
  width: ${(props) => (props.width ? props.width : 80)}px;
  height: 1rem;
  line-height: 1rem;
  padding: 0 1rem;
  background-color: var(--dark-background-color);
  color: var(--dark-text-color);
  font-weight: 500;
  font-size: 0.5rem;
  text-align: center;
  white-space: nowrap;
  flex: 0 0 ${(props) => (props.width ? props.width : 80)}px;
`;
