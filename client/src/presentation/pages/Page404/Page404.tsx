import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

import ButtonPrimary from "presentation/components/Button/ButtonPrimary";
import NcImage from "presentation/components/NcImage/NcImage";
import I404Png from "presentation/images/404.png";

const Page404: FC = () => (
  <div className="nc-Page404">
    <Helmet>
      <title>Página no encontrada</title>
    </Helmet>
    <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
      {/* HEADER */}
      <header className="text-center max-w-2xl mx-auto space-y-2">
        <NcImage src={I404Png} />
        <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
        Por favor, comprueba si la página existe o inicia sesión para continuar. ¡Gracias por entender!
        </span>
        <div className="pt-8">
          <ButtonPrimary href="/">Volver al inicio</ButtonPrimary>
        </div>
      </header>
    </div>
  </div>
);

export default Page404;
