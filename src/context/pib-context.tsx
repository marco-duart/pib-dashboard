import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";
import { fetchPibData } from "../services/ibge";
import { fetchExchangeRates } from "../services/central-bank";
import { Ibge, CentralBank } from "../services";

// Tipagens
interface PibContextType {
  pibData: Ibge.ProcessedData[];
  exchangeRates: CentralBank.AnnualAverageExchangeRate[];
  loading: boolean;
  error: string | null;
  usdData: Ibge.ProcessedData[];
}

const PibContext = createContext<PibContextType | undefined>(undefined);

// Componente que gerencia estado global e serve dados
export const PibProvider = ({ children }: { children: ReactNode }) => {
  // Estados separados por dados, loading, erro
  const [pibData, setPibData] = useState<Ibge.ProcessedData[]>([]);
  const [exchangeRates, setExchangeRates] = useState<
    CentralBank.AnnualAverageExchangeRate[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [pibResponse, exchangeResponse] = await Promise.all([
          fetchPibData(),
          fetchExchangeRates(),
        ]);

        setPibData(pibResponse);
        setExchangeRates(exchangeResponse);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Converte os valores de PIB para USD apenas quando pibData ou exchangeRates mudam
  const usdData = useMemo(() => {
    return pibData.map((item) => {
      const rate =
        exchangeRates.find((rate) => rate.year === item.year)?.averageRate || 1;
      return {
        ...item,
        totalPib: item.totalPib / rate, // Conversão para dólar
        pibPerCapita: item.pibPerCapita / rate,
      };
    });
  }, [pibData, exchangeRates]);

  const value = {
    pibData,
    exchangeRates,
    loading,
    error,
    usdData,
  };

  return <PibContext.Provider value={value}>{children}</PibContext.Provider>;
};

export const usePibContext = () => {
  const context = useContext(PibContext);
  if (!context) {
    throw new Error("usePibContext deve ser usado dentro de um PibProvider");
  }
  return context;
};
