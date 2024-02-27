import { styled } from "styled-components";
import flex from "./Flex";
import Paragraph from "./Paragraph";

interface StyledDetailsTextProps {
  textS: string;
  textL: string;
}

const StyledDetailsText = styled.div`
  ${flex}
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

function DetailsText({ textS, textL }: StyledDetailsTextProps) {
  return (
    <StyledDetailsText>
      <Paragraph $size="small">{textS}</Paragraph>
      <Paragraph $size="large">{textL}</Paragraph>
    </StyledDetailsText>
  );
}

export default DetailsText;
