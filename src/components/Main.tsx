import { useQuery } from "@tanstack/react-query";
import { getUserTimezone } from "../services/apiUserTimezon";
import { styled } from "styled-components";
import Quotes from "./Quotes";
import ClockCon from "./ClockCon";
import conWidth from "../ui/ConWidth";
import { useTime } from "../context/TimeContext";
import transition from "../ui/Transition";
import Button from "../ui/Button";
import LoadingSpinner from "../ui/LoadingSpinner";

interface StyledMainProps {
  $isExpand: boolean;
}

const StyledMain = styled.div<StyledMainProps>`
  height: ${(props) => (props.$isExpand ? "calc(100% - 40%)" : "100%")};
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr auto;
  padding: 3.2rem 0 4rem;
  /* gap: 4.8rem; */

  ${transition}
  ${conWidth}

  @media (min-width: 768px) {
    padding: 8rem 0 6.4rem;
    /* gap: 8rem; */
  }

  @media (min-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 2fr 1fr;
    gap: 0;
  }
`;

function Main() {
  const { isLoading } = useQuery({
    queryKey: ["timezone"],
    queryFn: getUserTimezone,
  });
  const { isExpand, handleExpandButton } = useTime();

  return (
    <StyledMain $isExpand={isExpand}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Quotes />
          <ClockCon />
          <Button handleClick={handleExpandButton} />
        </>
      )}
    </StyledMain>
  );
}

export default Main;
