import { useQuery } from "@tanstack/react-query";
import { styled } from "styled-components";
import flex from "../ui/Flex";
import Paragraph from "../ui/Paragraph";
import Svg from "../ui/Svg";
import transition from "../ui/Transition";
import { useTime } from "../context/TimeContext";
import { getQuote } from "../services/apiQuotes";
import { useState } from "react";
import LoadingSpinner from "../ui/LoadingSpinner";

interface StyledQuotesProps {
  $isExpand: boolean;
}

const StyledQuotes = styled.section<StyledQuotesProps>`
  ${flex}
  gap: .8rem;
  grid-row: 1/2;
  align-self: flex-start;
  align-items: flex-start;
  height: ${(props) => (props.$isExpand ? "0" : "200px")};
  overflow: hidden;
  position: relative;
  ${transition}

  @media (min-width: 768px) {
    gap: 1.3rem;
  }
`;

const StyledNewQuoteCon = styled.div`
  ${flex}
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;

const StyledRefreshBtn = styled.button`
  background: transparent;
  border: none;
  &:focus {
    border: none;
    outline: none;
  }
`;

function Quotes() {
  const { isExpand } = useTime();
  const [isLoader, setIsLoader] = useState(false);

  const { data: quote, refetch } = useQuery({
    queryKey: ["quotes"],
    queryFn: getQuote,
  });

  const handleClick = () => {
    setIsLoader(true);
    refetch().then(() => {
      setIsLoader(false);
    });
  };

  return (
    <StyledQuotes $isExpand={isExpand}>
      {isLoader ? (
        <LoadingSpinner />
      ) : (
        <>
          <StyledNewQuoteCon>
            <Paragraph $size="x-small">"{quote?.content}"</Paragraph>

            <StyledRefreshBtn onClick={handleClick}>
              <Svg
                width="18"
                height="18"
                d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
                fillRule="nonzero"
              />
            </StyledRefreshBtn>
          </StyledNewQuoteCon>
          <Paragraph $type="name" $size="x-small">
            {quote?.author}
          </Paragraph>
        </>
      )}
    </StyledQuotes>
  );
}

export default Quotes;
