import * as S from "./styles";
import { ChartBar, Table } from "@styled-icons/fa-solid";

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <S.NavItem to="/table">
          {({ isActive }) => (
            <S.NavLinkStyled $active={isActive}>
              <Table size={18} />
              Tabela
            </S.NavLinkStyled>
          )}
        </S.NavItem>
        <S.NavItem to="/chart">
          {({ isActive }) => (
            <S.NavLinkStyled $active={isActive}>
              <ChartBar size={18} />
              Gráfico
            </S.NavLinkStyled>
          )}
        </S.NavItem>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
