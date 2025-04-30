import styled, { keyframes } from "styled-components";
import { Spinner as SpinnerBase } from "@styled-icons/fa-solid/Spinner";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    gap: ${({ theme }) => theme.spacing(4)};
  }
`;

export const SpinnerIcon = styled(SpinnerBase)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.primary.main};
  animation: ${spin} 1s linear infinite;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    width: ${({ theme }) => theme.spacing(8)};
    height: ${({ theme }) => theme.spacing(8)};
  }
`;

export const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize.lg};
  }
`;
