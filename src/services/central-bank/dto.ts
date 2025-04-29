export namespace CentralBank {
  export interface Response {
    data: string;
    valor: string;
  }

  export interface ProcessedData {
    date: Date;
    year: string;
    value: number;
  }

  export interface AnnualAverageExchangeRate {
    year: string;
    averageRate: number;
  }
}
