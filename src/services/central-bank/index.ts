import axios from "axios";
import { CentralBank } from "./dto";
import { mapCentralBankResponse, calculateAnnualAverages } from "./mappers";
import { CENTRAL_BANK_API_URL } from "../../constants/endpoints";

// Serviço para obtenção de taxas de câmbio médias anuais, api do Banco Central

export const fetchExchangeRates = async (): Promise<
  CentralBank.AnnualAverageExchangeRate[]
> => {
  try {
    // Obtenção dos dados brutos
    const response = await axios.get<CentralBank.Response[]>(
      CENTRAL_BANK_API_URL
    );

    // Mapeamento inicial
    const processedData = mapCentralBankResponse(response.data);

    // Agregação do valor de acordo com o dolar do ano específico
    return calculateAnnualAverages(processedData);
  } catch (error) {
    throw new Error(
      `Failed to fetch Central Bank data: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
};
