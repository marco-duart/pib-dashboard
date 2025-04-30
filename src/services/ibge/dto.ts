export namespace Ibge {
  // Tipagens para os dados do PIB do IBGE
  export interface Response {
    id: string;
    variavel: string;
    unidade: string;
    resultados: {
      classificacoes: any[];
      series: {
        localidade: {
          id: string;
          nome: string;
        };
        serie: Record<string, string>;
      }[];
    }[];
  } // Resposta bruta da API

  export interface ProcessedData {
    year: string;
    totalPib: number;
    pibPerCapita: number;
    population?: number;
  } // Dados tratados
}
