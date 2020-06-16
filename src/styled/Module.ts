import styled from "styled-components";
import { device } from "./media-queries";

export const Wrapper = styled.div`
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;
  @media ${device.laptop} {
    max-width: var(--container-width);
  }
`;

export const Module = styled.section<{ isHero?: boolean }>`
  margin-top: 5rem;
  margin-bottom: 5rem;
  min-height: ${(props) => props.isHero && "calc(100vh - 101px - 10rem)"};
`;

export const Title = styled(Wrapper)`
  height: initial;
`;

// Tabs need a different styling to handle the hover event which takes the full width => no Wrapper
export const Tabs = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Panels = styled(Wrapper)``;
