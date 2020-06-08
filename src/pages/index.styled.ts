import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const Wrapper = styled.div<{ space: number }>`
  margin-top: ${(props) => props.space}rem;
  margin-bottom: ${(props) => props.space}rem;
`;

export const Module = styled.div`
  margin-bottom: 6rem;
`;
