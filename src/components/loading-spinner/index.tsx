import * as S from "./styles";

const LoadingSpinner = () => {
  return (
    <S.Container>
      <S.SpinnerIcon />
      <S.LoadingText>Carregando dados...</S.LoadingText>
    </S.Container>
  );
};

export default LoadingSpinner;
