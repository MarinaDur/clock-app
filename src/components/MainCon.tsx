import { styled } from "styled-components";
import Main from "./Main";
import flex from "../ui/Flex";
import DetailsCon from "./DetailsCon";
import { useTime } from "../context/TimeContext";

interface StyledMainConProps {
  $time: string;
}

const StyledMainCon = styled.main<StyledMainConProps>`
  height: 100vh;
  width: 100%;
  background: ${(
    props
  ) => `linear-gradient(hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.4)),
   url("./mobile/bg-image-${props.$time}.jpg") no-repeat center`};
  background-size: cover;
  ${flex}

  @media (min-width: 768px) {
    background: ${(
      props
    ) => `linear-gradient(hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.4)),
   url("./tablet/bg-image-${props.$time}.jpg") no-repeat center`};
    background-size: cover;
  }

  @media (min-width: 1024px) {
    background: ${(
      props
    ) => `linear-gradient(hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.4)),
   url("./desktop/bg-image-${props.$time}.jpg") no-repeat center`};
    background-size: 110% 110%;
  }
`;

function MainCon() {
  const { whatTime } = useTime();

  return (
    <StyledMainCon
      $time={
        whatTime === "morning" || whatTime === "afternoon"
          ? "daytime"
          : "nighttime"
      }
    >
      <Main />
      <DetailsCon />
    </StyledMainCon>
  );
}

export default MainCon;
