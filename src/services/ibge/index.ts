import axios from "axios";
import { Ibge } from "./dto";
import { mapIbgeResponseToPibData } from "./mappers";
import { IBGE_API_URL } from "../../constants/endpoints";

// Serviço para obtenção de dados de PIB do IBGE

export const fetchPibData = async (): Promise<Ibge.ProcessedData[]> => {
  try {
    // Obtenção dos dados brutos
    const response = await axios.get<Ibge.Response[]>(IBGE_API_URL);

    // Conversão para o formato usado (incluíndo a conversão da unidade)
    return mapIbgeResponseToPibData(response.data);
  } catch (error) {
    throw new Error(
      `Failed to fetch IBGE data: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
};
