import { describe, it, expect } from "vitest";
import { calculateAnnualAverages } from "../../src/services/central-bank/mappers";

describe("Mapper: calculateAnnualAverages", () => {
  it("deve calcular médias anuais corretamente", () => {
    const testData = [
      { date: new Date("2023-01-01"), year: "2023", value: 5.0 },
      { date: new Date("2023-02-01"), year: "2023", value: 5.5 },
      { date: new Date("2022-01-01"), year: "2022", value: 4.0 },
    ];

    const result = calculateAnnualAverages(testData);

    expect(result).toEqual([
      { year: "2023", averageRate: 5.25 },
      { year: "2022", averageRate: 4.0 },
    ]);
  });

  it("deve retornar array vazio para dados vazios", () => {
    const result = calculateAnnualAverages([]);
    expect(result).toEqual([]);
  });
});
