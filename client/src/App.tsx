import React from "react";
import MyRouter from "routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mercado Libre Chile</title>
        <meta name="description" content="Mercado Libre" />
      </Helmet>

      {/* MAIN APP */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;

