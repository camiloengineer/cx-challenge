import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";
import Page404 from "containers/Page404/Page404";
import AccountPage from "containers/AccountPage/AccountPage";
import AccountOrder from "containers/AccountPage/AccountOrder";
import PurchaseDetailPage from "containers/PurchaseDetail/PurchaseDetailPage";
import Header from "components/Header/Header";

export const pages: Page[] = [
  { path: "/", component: PageHome },
  { path: "/mi-perfil", component: AccountPage },
  { path: "/mis-compras", component: AccountOrder },
  { path: "/detalle-compra", component: PurchaseDetailPage },
  { path: "/pagina-no-encontrada", component: Page404 },
];

const MyRoutes = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        {pages.map(({ component: Component, path }, index) => {
          return <Route key={index} element={<Component />} path={path} />;
        })}
        <Route path="*" element={<Navigate to="/pagina-no-encontrada" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
