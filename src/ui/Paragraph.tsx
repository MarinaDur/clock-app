import { styled, css } from "styled-components";

interface ParagraphProps {
  $type?: "btn" | "name";
  $size?: "x-small" | "small" | "medium" | "large";
}

const Paragraph = styled.p<ParagraphProps>`
  color: var(--cl-off-black);

  ${(props) =>
    props.$size === "x-small" &&
    css<ParagraphProps>`
      color: var(--cl-white);
      font-size: 1.2rem;
      font-weight: ${(props) => (props.$type === "name" ? "700" : "400")};
      line-height: 22px;

      @media (min-width: 768px) {
        font-size: 1.8rem;
        line-height: 28px;
      }
    `}
  ${(props) =>
    props.$size === "small" &&
    css`
      font-size: 1rem;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 2px;
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 1.3rem;
        letter-spacing: 2.6px;
      }
      @media (min-width: 1280px) {
        font-size: 1.5rem;
        letter-spacing: 3px;
      }
    `}

  ${(props) =>
    props.$size === "medium" &&
    css`
      font-size: 1.5rem;
      font-weight: 300;
      line-height: 2.5;
      color: var(--cl-white);
      text-transform: uppercase;

      @media (min-width: 768px) {
        font-size: 3.2rem;
      }
      @media (min-width: 1280px) {
        font-size: 4rem;
      }
    `}

  ${(props) =>
    props.$size === "large" &&
    css`
      text-align: right;
      font-size: 2rem;
      font-weight: 700;
      text-transform: capitalize;

      @media (min-width: 768px) {
        font-size: 4rem;
      }
      @media (min-width: 1280px) {
        font-size: 5.6rem;
      }
    `}

  ${(props) =>
    props.$type === "btn" &&
    css`
      color: var(--cl-black)
      font-size: 1.2rem;
      line-height: 14px;
      letter-spacing: 3.75px;
      font-weight: 700;
      text-transform: uppercase;

      @media(min-width: 768px){
        font-size: 1.6rem;
        line-height: 28px; 
        letter-spacing: 5px;
      }
    `}
`;

export default Paragraph;
