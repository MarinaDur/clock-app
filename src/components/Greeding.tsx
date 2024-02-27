import { styled } from "styled-components";
import flex from "../ui/Flex";
import Headings from "../ui/Headings";
import { useTime } from "../context/TimeContext";

interface StyledIconConProps {
  $time: string;
}

const StyledGreeding = styled.div`
  ${flex}
  flex-direction: row;
  gap: 1.6rem;
`;

const StyledIconCon = styled.div<StyledIconConProps>`
  width: 24px;
  height: 24px;
  background: ${(props) => `url("./desktop/icon-${props.$time}.svg")`};
`;

function Greeding() {
  const { whatTime } = useTime();
  return (
    <StyledGreeding>
      <StyledIconCon
        $time={
          whatTime === "morning" || whatTime === "afternoon" ? "sun" : "moon"
        }
      />
      <Headings as="h1">Good {whatTime}</Headings>
    </StyledGreeding>
  );
}

export default Greeding;
