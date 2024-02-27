import { useQuery } from "@tanstack/react-query";
import { getUserTimezone } from "../services/apiUserTimezon";
import { styled } from "styled-components";
import Headings from "../ui/Headings";
import flex from "../ui/Flex";
import Greeding from "./Greeding";
import Time from "./Time";
import { getLocation } from "../services/apiUserLocation";

const StyledClock = styled.div`
  ${flex}
  gap:1.6rem;
  align-items: flex-start;
`;

function Clock() {
  const { data: timezone } = useQuery({
    queryKey: ["timezone"],
    queryFn: getUserTimezone,
  });

  const { data: location } = useQuery({
    queryKey: ["location"],
    queryFn: () => getLocation(timezone.client_ip),
  });

  return (
    <StyledClock>
      <Greeding />
      <Time />
      <Headings>
        IN {location?.data ? location?.data?.location?.city?.name : "Galaxy"},{" "}
        {location?.data
          ? location?.data?.location?.country?.alpha2
          : "Far far away"}
      </Headings>
    </StyledClock>
  );
}

export default Clock;
