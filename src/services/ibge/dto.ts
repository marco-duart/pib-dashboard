export namespace Ibge {
  export interface Response {
    id: string;
    variavel: string;
    unidade: string;
    resultados: {
      classificacoes: any[];
      series: {
        localidade: {
          id: string;
          nivel: {
            id: string;
            nome: string;
          };
          nome: string;
        };
        serie: Record<string, string>;
      }[];
    }[];
  }

  export interface ProcessedData {
    year: string;
    totalPib: number;
    pibPerCapita: number;
    population?: number;
  }
}
