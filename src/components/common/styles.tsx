import styled, { css } from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.paper};
  border-bottom: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 56px;

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    height: 64px;
  }
`;

export const NavItem = styled(RouterNavLink)`
  text-decoration: none;
`;

export const NavLinkStyled = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.shape.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.2s ease;

  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.colors.primary.light};
      color: ${theme.colors.primary.main};
      font-weight: ${theme.typography.fontWeight.bold};
    `};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light}40;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(2)};

  @media ${({ theme }) => theme.mediaQuery.tablet} {
    padding: ${({ theme }) => theme.spacing(4)};
  }
`;
