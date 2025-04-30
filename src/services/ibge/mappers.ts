import { Ibge } from "./dto";

// Transforma a resposta complexa da API do IBGE em dados estruturados de PIB
// Extrai e correlaciona as métricas
// Converte unidades
export const mapIbgeResponseToPibData = (
  data: Ibge.Response[]
): Ibge.ProcessedData[] => {
  // Identificação dos conjuntos de dados
  const pibTotal = data.find((item) =>
    item.variavel.includes("PIB - valores correntes")
  );
  const pibPerCapita = data.find((item) =>
    item.variavel.includes("PIB per capita - valores correntes")
  );
  const population = data.find(
    (item) => item.variavel.includes("População residente") // não necessário
  );

  // Validação
  if (!pibTotal || !pibPerCapita || !population) {
    throw new Error("Dados incompletos da API do IBGE");
  }

  // Extração dos anos disponíveis
  const years = Object.keys(pibTotal.resultados[0].series[0].serie);

  // Transformação e correlação dos dados
  return years.map((year) => ({
    year,
    totalPib:
      parseFloat(pibTotal.resultados[0].series[0].serie[year]) * 1_000_000, // Conversão de milhões para unidade
    pibPerCapita: parseFloat(pibPerCapita.resultados[0].series[0].serie[year]), // Valor já em R$ por habitante
    population:
      parseFloat(population.resultados[0].series[0].serie[year]) * 1_000, // Conversão de milhares para unidade
  }));
};
