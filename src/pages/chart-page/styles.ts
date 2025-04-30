import styled from "styled-components";

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.default};
  min-height: 100vh;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(4)};
    max-width: 1200px;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  text-align: center;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    font-size: ${({ theme }) => theme.typography.fontSize["3xl"]};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ChartWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  height: 300px;
  width: 100%;

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    height: 350px;
    padding: ${({ theme }) => theme.spacing(3)};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    height: 400px;
    padding: ${({ theme }) => theme.spacing(4)};
  }

  @media ${({ theme }) => theme.mediaQuery.desktop} {
    height: 500px;
  }
`;
