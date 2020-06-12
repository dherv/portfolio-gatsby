import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  height: 250px;
`;

export const Title = styled(Container)`
  height: initial;
`;

export const Content = styled.div<{ space: number }>`
  margin-top: ${(props) => props.space}rem;
  margin-bottom: ${(props) => props.space}rem;
`;

export const Module = styled.section`
  margin-bottom: 6rem;
`;
