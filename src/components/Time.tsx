import { useQuery } from "@tanstack/react-query";
import { getUserTimezone } from "../services/apiUserTimezon";
import { styled } from "styled-components";
import flex from "../ui/Flex";
import Headings from "../ui/Headings";
import Paragraph from "../ui/Paragraph";
import { useTime } from "../context/TimeContext";

const StyledTime = styled.div`
  ${flex}
  flex-direction: row;
  align-items: flex-end;
  gap: 2rem;
`;

function Time() {
  const { data } = useQuery({
    queryKey: ["timezone"],
    queryFn: getUserTimezone,
  });
  const { formattedTime } = useTime();

  return (
    <StyledTime>
      <Headings as="h2">{formattedTime}</Headings>
      <Paragraph $size="medium">{data?.abbreviation}</Paragraph>
    </StyledTime>
  );
}

export default Time;
