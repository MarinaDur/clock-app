import { styled } from "styled-components";
import flex from "../ui/Flex";
import { useTime } from "../context/TimeContext";
import Details from "./Details";
import transition from "../ui/Transition";

interface StyledDetailsConProps {
  $isExpand: boolean;
}

const StyledDetailsCon = styled.section<StyledDetailsConProps>`
  background: var(--cl-gray);
  backdrop-filter: blur(20.387113571166992px);
  width: 100%;
  overflow: hidden;
  height: ${(props) => (props.$isExpand ? "40%" : "0")};
  ${flex}
  justify-content: center;
  ${transition}
`;

function DetailsCon() {
  const { isExpand } = useTime();

  return (
    <StyledDetailsCon $isExpand={isExpand}>
      <Details />
    </StyledDetailsCon>
  );
}

export default DetailsCon;
