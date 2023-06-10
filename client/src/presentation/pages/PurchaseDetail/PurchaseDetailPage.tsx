import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { RootState } from "adapters/store";

import Prices from "presentation/sections/Prices";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";
import ShippingAddress from "./ShippingAddress";
import ButtonPrimary from "presentation/components/Button/ButtonPrimary";
import Spinner from "presentation/components/Spinner/Spinner";
import { formatPrice } from "infrastructure/utils/currency.utils";

const PurchaseDetailPage = () => {
  const product = useSelector((state: RootState) => state.selectedPurchase);

  const renderProduct = () => {
    return (
      <div className="relative flex py-7 first:pt-0 last:pb-0">
        <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={product?.image}
            alt={product?.title}
            className="h-full w-full object-contain object-center"
          />
        </div>

        <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div className="flex-[1.5] ">
                <h3 className="text-base font-semibold">
                  <Link to="/product-detail">{product?.title}</Link>
                </h3>
                <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex items-center space-x-1.5">
                    <span>Pedido: { product.purchaseId }</span>
                  </div>
                </div>

                <div className="mt-3 flex justify-between w-full sm:hidden relative">
                  <select
                    name="qty"
                    id="qty"
                    className="form-select text-sm rounded-md py-1 border-slate-200 dark:border-slate-700 relative z-10 dark:bg-slate-800 "
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                  </select>
                  <Prices
                    contentClass="py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full"
                    price={product?.cost?.total}
                    currency={product?.cost?.currency}
                  />
                </div>
              </div>

              <div className="hidden flex-1 sm:flex justify-end">
                <Prices
                  price={product?.cost?.total}
                  currency={product?.cost?.currency}
                  className="mt-0.5"
                />
              </div>
            </div>
          </div>

          <div className="flex pt-4 items-end justify-between text-sm">
            <div className="hidden sm:block text-center relative">
              {product?.amount}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderLeft = () => {
    return (
      <div className="space-y-8">
        <div id="ShippingAddress" className="scroll-mt-24">
          <ShippingAddress arrivalDate={product?.date} />
        </div>

        <div id="PaymentMethod" className="scroll-mt-24">
          <PaymentMethod />
        </div>

        <div id="ContactInfo" className="scroll-mt-24">
          <ContactInfo sellerName={product?.seller?.nickname} />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-PurchaseDetailPage">
      <Helmet>
        <title>Detalle de compra</title>
      </Helmet>

      <main className="container py-16 lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Detalle de compra
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-400">
            <Link to={"/"} className="">
              Inicio
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <Link to={"/mis-compras"} className="">
              Mis compras
            </Link>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Detalle de compra</span>
          </div>
        </div>

        {Object.keys(product).length === 0 ? (
          <Spinner text="Cargando detalle de compra..." />
        ) : (
          <div className="flex flex-col lg:flex-row">
            <div className="flex-1">{renderLeft()}</div>

            <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>

            <div className="w-full lg:w-[36%] ">
              <h3 className="text-lg font-semibold">Detalle de pago</h3>
              <div className="mt-8 divide-y divide-slate-200/70 dark:divide-slate-700 ">
                {renderProduct()}
              </div>

              <div className="mt-10 pt-6 text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-slate-700 ">
                <div className="mt-4 flex justify-between py-2.5">
                  <span>Producto</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    {formatPrice(
                      product?.cost?.total || 0,
                      product?.cost?.currency || "ARS"
                    )}
                  </span>
                </div>
                <div className="flex justify-between py-2.5">
                  <span>Envío</span>
                  <span className="font-semibold text-green-600">Gratis</span>
                </div>
                <div className="flex justify-between font-semibold text-slate-900 dark:text-slate-200 text-base pt-4">
                  <span>Total</span>
                  <span>
                    {formatPrice(
                      product?.cost?.total || 0,
                      product?.cost?.currency || "ARS"
                    )}
                  </span>
                </div>
              </div>
              <ButtonPrimary className="mt-8 w-full">
                Volver a comprar
              </ButtonPrimary>
              <div className="mt-5 text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center">
                <p className="block relative pl-5">
                  <svg
                    className="w-4 h-4 absolute -left-1 top-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 8V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9945 16H12.0035"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <Link
                    to="/detalle-compra"
                    className="text-indigo-600 dark:text-primary-500"
                  >
                    Ayuda con la compra
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PurchaseDetailPage;
