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
    font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
`;

export const TableContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  overflow-x: auto;
  margin-top: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

export const TableHeader = styled.thead`
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
`;

export const TableHeaderCell = styled.th`
  padding: ${({ theme }) => theme.spacing(2)};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${({ theme }) => theme.colors.background.default};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light}20;
  }
`;

export const TableCell = styled.td`
  padding: ${({ theme }) => theme.spacing(2)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  color: ${({ theme }) => theme.colors.text.primary};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(3)};
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-top: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;

  @media ${({ theme }) => theme.mediaQuery.mobileM} {
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    margin-top: ${({ theme }) => theme.spacing(4)};
    flex-wrap: nowrap;
  }
`;

export const PaginationButton = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.common.white};
  border: none;
  border-radius: ${({ theme }) => theme.shape.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.secondary.light};
    cursor: not-allowed;
  }

  @media ${({ theme }) => theme.mediaQuery.mobileL} {
    padding: ${({ theme }) => theme.spacing(2)} ${({ theme }) => theme.spacing(3)};
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;
