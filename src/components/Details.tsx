import { styled } from "styled-components";
import conWidth from "../ui/ConWidth";
import flex from "../ui/Flex";
import DetailsText from "../ui/DetailsText";
import { useQuery } from "@tanstack/react-query";
import { getUserTimezone } from "../services/apiUserTimezon";

const StyledDetails = styled.div`
  ${conWidth}
  ${flex}
  gap: 1.6rem;
  /* height: 256px; */
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8.1rem;
  }
`;

const StyledDetailsCon = styled.div`
  ${flex}
  gap: 1.6rem;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 4.9rem;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 2.5rem;
  }
`;

function Details() {
  const { data: timezone } = useQuery({
    queryKey: ["timezone"],
    queryFn: getUserTimezone,
    refetchInterval: 5 * 60 * 60 * 1000,
  });

  return (
    <StyledDetails>
      <StyledDetailsCon>
        <DetailsText textS="CURRENT TIMEZONE" textL={timezone?.timezone} />
        <DetailsText textS="Day of the year" textL={timezone?.day_of_year} />
      </StyledDetailsCon>
      <StyledDetailsCon>
        <DetailsText textS="Day of the week" textL={timezone?.day_of_week} />
        <DetailsText textS="Week number" textL={timezone?.week_number} />
      </StyledDetailsCon>
    </StyledDetails>
  );
}

export default Details;
