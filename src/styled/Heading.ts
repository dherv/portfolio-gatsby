import styled, { css } from "styled-components";

export const Heading = styled.h1`
  font-weight: 600;
`;

export const HeadingDark = styled(Heading)`
  color: var(--text-color-dark);
`;

export const AppHeading = styled.h5`
  height: 1rem;
  line-height: 1rem;
  padding: 0 1rem;
  background-color: #484848;
  color: #fff;
  font-weight: 500;
  font-size: 0.5rem;
  white-space: nowrap;
`;
