import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import LoadingSpinner from "../components/loading-spinner";
import DefaultLayout from "../components/common/default-layout";
import ChartPage from "../pages/chart-page";
import TablePage from "../pages/table-page";

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Layout compartilhado por todas as rotas */}
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/table" element={<TablePage />} />
            <Route path="/chart" element={<ChartPage />} />
            {/* Rota padrão redireciona para tabela */}
            <Route index element={<TablePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
