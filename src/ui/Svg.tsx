import { styled } from "styled-components";

type SvgProps = {
  width: string;
  height: string;
  d: string;
  fillRule: "inherit" | "nonzero" | "evenodd" | undefined;
};

const StyledSvg = styled.svg`
  fill: var(--cl-white);
  opacity: 0.5;
  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

function Svg({ width, height, d, fillRule }: SvgProps) {
  return (
    <StyledSvg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fillRule={fillRule}
    >
      <path d={d} />
    </StyledSvg>
  );
}

export default Svg;
