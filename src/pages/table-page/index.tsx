import { useState, useRef, useEffect, useCallback } from "react";
import { usePibContext } from "../../context/pib-context";
import * as S from "./styles";
import LoadingSpinner from "../../components/loading-spinner";
import toast from "react-hot-toast";

// Define o incremento de linhas para carregamento por rolagem infinita
const ROWS_PER_PAGE = 10;

const TablePage = () => {
  // Extração de dados do contexto
  const { usdData, loading, error } = usePibContext();

  // Controle de "Paginação" da rolagem infinita
  const [currentPage, setCurrentPage] = useState(1);

  // Referências para Intersection Observer, default para scroll infinito
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Fatia o array completo conforme a página atual
  const paginatedData = usdData.slice(0, currentPage * ROWS_PER_PAGE);

  const loadMore = useCallback(() => {
    if (paginatedData.length < usdData.length) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [paginatedData.length, usdData.length]);

  useEffect(() => {
    if (!sentinelRef.current) return;

    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loadMore();
      }
    });

    observerRef.current.observe(sentinelRef.current);

    return () => observerRef.current?.disconnect();
  }, [loadMore]);

  // Retorno antecipado
  if (loading) return <LoadingSpinner />;
  if (error) {
    toast.error(error);
    return null;
  }

  return (
    <S.Container>
      <S.Title>Tabela de PIB em Dólares</S.Title>

      <S.TableContainer>
        <S.StyledTable>
          <S.TableHeader>
            <tr>
              <S.TableHeaderCell>Ano</S.TableHeaderCell>
              <S.TableHeaderCell>PIB Total (USD)</S.TableHeaderCell>
              <S.TableHeaderCell>PIB per Capita (USD)</S.TableHeaderCell>
              <S.TableHeaderCell>População</S.TableHeaderCell>
            </tr>
          </S.TableHeader>

          <tbody>
            {paginatedData.map((item) => (
              <S.TableRow key={item.year}>
                <S.TableCell>{item.year}</S.TableCell>
                <S.TableCell>
                  {/* Formatação monetária padrão brasileiro */}
                  {item.totalPib.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2,
                  })}
                </S.TableCell>
                <S.TableCell>
                  {item.pibPerCapita.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "USD",
                    maximumFractionDigits: 2,
                  })}
                </S.TableCell>
                <S.TableCell>
                  {/* Plus para ficar completinho */}
                  {item.population?.toLocaleString("pt-BR") ?? "N/A"}
                </S.TableCell>
              </S.TableRow>
            ))}
          </tbody>
        </S.StyledTable>
      </S.TableContainer>

      {/* Div invisível que triggera o carregamento quando visível */}
      <div ref={sentinelRef} style={{ height: "20px" }} />
    </S.Container>
  );
};

export default TablePage;
