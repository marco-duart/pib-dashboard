import { Outlet } from "react-router-dom";
import * as S from "./styles";

import Header from "./header";

const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.LayoutContainer>
  );
};

export default DefaultLayout;
