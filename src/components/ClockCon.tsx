import { styled } from "styled-components";
import flex from "../ui/Flex";
import Clock from "./Clock";

const StyledClockCon = styled.section`
  ${flex}
  gap:4.8rem;
  align-items: flex-start;
  grid-row: 2/3;
  align-self: flex-end;

  @media (min-width: 768px) {
    gap: 8rem;
  }
`;

function ClockCon() {
  return (
    <StyledClockCon>
      <Clock />
    </StyledClockCon>
  );
}

export default ClockCon;
