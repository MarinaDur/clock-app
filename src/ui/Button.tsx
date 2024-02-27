import { styled } from "styled-components";
import { MouseEventHandler } from "react";
import flex from "./Flex";
import Paragraph from "./Paragraph";
import transition from "./Transition";
import { useTime } from "../context/TimeContext";

interface ButtonProps {
  handleClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

interface StyledArrowConProps {
  $isExpand: boolean;
}

const StyledButton = styled.button`
  ${flex}
  border-radius: 28px;
  padding: 0.3rem 0.4rem 0.4rem 1.7rem;
  background: var(--cl-white);
  flex-direction: row;
  justify-content: space-between;
  gap: 1.5rem;
  width: 115px;
  border: none;
  margin-top: 2rem;

  &:focus {
    border: none;
    outline: none;
    offset: none;
  }

  @media (min-width: 768px) {
    padding: 0.8rem 0.8rem 0.7rem 2.1rem;
    width: 155px;
    margin-top: 3rem;
  }

  @media (min-width: 1024px) {
    grid-column: 2/3;
    grid-row: 2/3;
    align-self: flex-end;
    justify-self: right;
  }
`;

const StyledArrowCon = styled.div<StyledArrowConProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--cl-off-black) url("./desktop/icon-arrow-down.svg") no-repeat
    center center;
  transform: ${(props) => (props.$isExpand ? "rotate(180deg)" : "0")};
  background-size: 12px 8px;
  background-position: 50% 55%;
  ${transition}
  cursor: pointer;

  &:hover {
    background-color: var(--cl-hover);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    background-size: 15px 11px;
  }
`;

function Button({ handleClick }: ButtonProps) {
  const { isExpand } = useTime();

  return (
    <StyledButton onClick={handleClick}>
      <Paragraph $type="btn">{isExpand ? "LESS" : "MORE"}</Paragraph>
      <StyledArrowCon $isExpand={isExpand} />
    </StyledButton>
  );
}

export default Button;
