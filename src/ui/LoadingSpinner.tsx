import { keyframes, styled } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  border: 4px solid #f3f3f3; /* Light gray border */
  border-top: 4px solid #3498db; /* Blue border for the spinner */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite; /* Rotate the spinner */
  position: absolute;
  top: 0;
  right: 50%;
  transform: translate(0, -50%);
`;

export default LoadingSpinner;
