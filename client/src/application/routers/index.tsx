import React, { ComponentType, FC, lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "application/components/Footer/Footer";
import Header from "application/sections/Header/Header";
import { authManager } from "infrastructure/utils/auth.utils";

export const pages: Page[] = [
  {
    path: "/",
    component: lazy(() => import("application/pages/PageHome/PageHome")),
    isPrivate: false,
  },
  {
    path: "/mi-perfil",
    component: lazy(() => import("application/pages/AccountPage/AccountPage")),
    isPrivate: true,
  },
  {
    path: "/mis-compras",
    component: lazy(
      () => import("application/pages/AccountPage/AccountOrder")
    ),
    isPrivate: true,
  },
  {
    path: "/detalle-compra",
    component: lazy(
      () => import("application/pages/PurchaseDetail/PurchaseDetailPage")
    ),
    isPrivate: true,
  },
  {
    path: "/pagina-no-encontrada",
    component: lazy(() => import("application/pages/Page404/Page404")),
    isPrivate: false,
  },
];

// eslint-disable-next-line
interface PrivateRouteProps<T = {}> {
  element: ComponentType<T>;
  isPrivate: boolean;
  onAuthToggle: () => Promise<boolean>;
  showLogin: boolean;
}

const PrivateRoute: FC<PrivateRouteProps<any>> = ({
  element: Element,
  isPrivate,
  onAuthToggle,
  showLogin,
}) => {
  const [isReady, setIsReady] = useState(false);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const { isAuth } = authManager();

  useEffect(() => {
    const waitAuth = async () => {
      try {
        const isAuthenticated = await isAuth();
        setAuthenticated(isAuthenticated);
        setIsReady(true);
      } catch (error) {
        console.error(error);
      }
    };

    waitAuth();
  }, [isAuth, isPrivate]);

  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (isReady) {
        setShowError(isPrivate && !authenticated);
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [isReady, isPrivate, authenticated]);

  if (!isReady) {
    return null;
  }

  if (showError) {
    return <Navigate to="/pagina-no-encontrada" replace />;
  }

  return <Element {...{ onAuthToggle, showLogin }} />;
};

const MyRoutes = () => {
  const { isAuth, loginAuth, logoutAuth } = authManager();
  const [showLogin, setShowLogin] = useState<boolean>(false);

  const handleAuthToggle = async () => {
    if (showLogin) {
      await loginAuth();
    } else {
      await logoutAuth();
    }
    setShowLogin(!showLogin);
    return showLogin;
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuthenticated = await isAuth();
      setShowLogin(!isAuthenticated);
    };

    checkAuthentication();
  }, [isAuth]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header onAuthToggle={handleAuthToggle} showLogin={showLogin} />
      <Routes>
        {pages.map(({ component: Component, path, isPrivate }, index) => (
          <Route
            key={index}
            element={
              <Suspense fallback={null}>
                <PrivateRoute
                  element={Component}
                  isPrivate={isPrivate}
                  onAuthToggle={handleAuthToggle}
                  showLogin={showLogin}
                />
              </Suspense>
            }
            path={path}
          />
        ))}
        <Route
          path="*"
          element={<Navigate to="/pagina-no-encontrada" replace />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default MyRoutes;
