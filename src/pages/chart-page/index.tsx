import { usePibContext } from "../../context/pib-context";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import * as S from "./styles";
import LoadingSpinner from "../../components/loading-spinner";
import toast from "react-hot-toast";
import { useTheme } from "styled-components";

// Apenas os plugins necessários são importados
ChartJS.register(
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartPage = () => {
  // Extração das propriedades necessárias do contexto
  const { usdData, loading, error } = usePibContext();
  const theme = useTheme();

  if (loading) return <LoadingSpinner />;
  if (error) toast.error(error);

  // Garantindo valores positivos para escala logarítmica, porém a api não retornou nada específico para esse caso no momento
  const safeUsdData = usdData.map((item) => ({
    year: item.year,
    totalPib: item.totalPib > 0 ? item.totalPib : 0.01,
    pibPerCapita: item.pibPerCapita > 0 ? item.pibPerCapita : 0.01,
  }));

  const chartData = {
    labels: safeUsdData.map((item) => item.year),
    datasets: [
      {
        label: "PIB Total (USD)",
        data: safeUsdData.map((item) => item.totalPib),
        borderColor: theme.colors.primary.main,
        backgroundColor: `${theme.colors.primary.light}33`,
        tension: 0.1,
      },
      {
        label: "PIB per Capita (USD)",
        data: safeUsdData.map((item) => item.pibPerCapita),
        borderColor: theme.colors.secondary.main,
        backgroundColor: `${theme.colors.secondary.light}33`,
        tension: 0.1,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Legenda visível
        labels: {
          color: theme.colors.text.primary,
        },
      },
      title: {
        display: true,
        text: "Evolução do PIB Brasileiro em Dólares",
        color: theme.colors.text.primary,
        font: {
          size: 18,
          weight: "bold",
          family: theme.typography.fontFamily,
        },
      },
      tooltip: {
        backgroundColor: theme.colors.primary.dark,
        titleColor: theme.colors.common.white,
        bodyColor: theme.colors.common.white,
        callbacks: {
          label: (context) => {
            // Formatação dos valores nos tooltips
            const label = context.dataset.label || "";
            const value = context.parsed.y.toLocaleString("pt-BR", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 2, // Precisão
            });
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      y: {
        type: "logarithmic", // Para visualizar crescimento exponencial, permitindo visualização do grafico com diferenças exorbitantes (total e per capita)
        ticks: {
          color: theme.colors.text.secondary,
          callback: function (value: string | number) {
            // Formatação de eixo Y em USD
            if (typeof value === "number") {
              return value.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              });
            }
            return value;
          },
        },
        // Filtro para mostrar apenas marcas logarítmicas inteiras
        afterBuildTicks: (axis) => {
          axis.ticks = axis.ticks.filter((tick) =>
            Number.isInteger(Math.log10(tick.value))
          );
        },
        grid: {
          color: theme.colors.divider,
        },
      },
      x: {
        ticks: {
          color: theme.colors.text.secondary,
        },
        grid: {
          color: theme.colors.divider,
        },
      },
    },
  };

  return (
    <S.Container>
      <S.Title>Evolução do PIB Brasileiro</S.Title>
      <S.ChartWrapper>
        {/* Configurações */}
        <Line data={chartData} options={options} />
      </S.ChartWrapper>
    </S.Container>
  );
};

export default ChartPage;
