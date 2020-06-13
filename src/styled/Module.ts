import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
`;

export const ContainerLarge = styled(Container)`
  max-width: 1160px;
  margin: 6rem auto;
`;

export const Title = styled(Container)`
  height: initial;
`;

export const Content = styled.div<{ space: number }>`
  margin-top: ${(props) => props.space * 2}rem;
  margin-bottom: ${(props) => props.space * 2}rem;
`;

export const Module = styled.section`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
