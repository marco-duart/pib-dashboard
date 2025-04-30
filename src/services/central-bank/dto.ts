export namespace CentralBank {
  // Tipagens para os dados de câmbio do Banco Central
  export interface Response {
    data: string;
    valor: string;
  } // Resposta bruta da API
  export interface ProcessedData {
    date: Date;
    year: string;
    value: number;
  } // Dados tratados
  export interface AnnualAverageExchangeRate {
    year: string;
    averageRate: number;
  } // Médias anuais
}
