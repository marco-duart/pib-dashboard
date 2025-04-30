import { CentralBank } from "./dto";

// Mapper para transformação dos dados brutos
// Recebe array de respostas da API no formato CentralBank.Response
// Retorna array de dados processados no formato CentralBank.ProcessedData
export const mapCentralBankResponse = (
  data: CentralBank.Response[]
): CentralBank.ProcessedData[] => {
  // Mapeia cada item do array de entrada
  return data.map((item) => ({
    // Conversão da string de data para objeto Date
    date: new Date(item.data),

    // Extração do ano a partir da string de data
    // Split divide pela barra e pegamos o terceiro elemento (índice 2)
    year: item.data.split("/")[2],

    // Conversão do valor string para número float
    // Remove possíveis vírgulas decimais (formato brasileiro)
    value: parseFloat(item.valor),
  }));
};

// Função para cálculo das médias anuais, pois a api do Banco Central retorna oa valores de cada mês
export const calculateAnnualAverages = (
  data: CentralBank.ProcessedData[]
): CentralBank.AnnualAverageExchangeRate[] => {
  // Cria array de anos únicos usando Set para eliminar duplicatas
  // Spread operator converte o Set de volta para array
  const years = [...new Set(data.map((item) => item.year))];

  // Para cada ano único, calcula a média
  return years.map((year) => {
    // Filtra os dados apenas para o ano atual
    const yearlyData = data.filter((item) => item.year === year);

    // Cálculo da média:
    const average =
      yearlyData.reduce((sum, item) => sum + item.value, 0) / yearlyData.length;

    // Retorna objeto formatado
    return {
      year,
      averageRate: parseFloat(average.toFixed(4)),
    };
  });
};
