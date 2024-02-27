import { css, styled } from "styled-components";

type StyledComponentProps = {
  as?: "h1" | "h3" | "h2" | false;
};

const Headings = styled.h1<StyledComponentProps>`
  color: var(--cl-white);
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 3.6px;
  }

  ${(props) =>
    props.as === "h1" &&
    css`
      font-weight: 400;
      line-height: 25px;

      @media (min-width: 768px) {
        line-height: 28px;
      }

      @media (min-width: 1280px) {
        font-size: 2rem;
        letter-spacing: 4px;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 10rem;
      line-height: 100px;
      letter-spacing: -2.5px;

      @media (min-width: 768px) {
        font-size: 17.5rem;
        line-height: 175px;
        letter-spacing: -4.375px;
      }
      @media (min-width: 1024px) {
        font-size: 13.5rem;
        line-height: 135px;
      }
      @media (min-width: 1280px) {
        font-size: 20rem;
        line-height: 200px;
        letter-spacing: -5px;
      }
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      line-height: 28px;

      @media (min-width: 1280px) {
        font-size: 2.4rem;
        letter-spacing: 4.8px;
      }
    `}
`;

export default Headings;
