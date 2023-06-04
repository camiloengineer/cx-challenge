import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Prices from "components/Prices";
import { PRODUCTS } from "data/data";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";

const AccountOrder = () => {

  const navigate = useNavigate();

  const renderProductItem = (product: any, index: number) => {
    const { image, name } = product;
    return (
      <div key={index} className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
        <div className="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <form 
             onSubmit={(e) => {
              e.preventDefault();
              navigate("/detalle-compra");
            }}
        className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between ">
              <div>
                <h3 className="text-base font-medium line-clamp-1">{name}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span>{"1 Unidad"}</span>
                </p>
              </div>
              <Prices className="mt-0.5 ml-2" />
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-500 dark:text-slate-400 flex items-center">
              <span className="hidden sm:inline-block">ELECTROMIAMI123</span>
            </p>

            <div className="flex">
              <ButtonSecondary
              sizeClass="py-2.5 px-4 sm:px-6"
              fontSize="text-sm font-medium"
            >
              Detalle de compra
            </ButtonSecondary>
            </div>
          </div>
        </form>
      </div>
    );
  };

  const renderOrder = () => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
          <div>
            <p className="text-lg font-semibold">Llegó el 15 de mayo</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              <span>Pedido: 7010194</span>
              <span className="mx-2">·</span>
              <span className="capitalize text-green-600">entregado</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <Link
                to="/mis-compras"
                className="text-sm font-medium text-indigo-600 dark:text-primary-500 "
              >
                Agregar al carrito
              </Link>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
          {[PRODUCTS[0]].map(renderProductItem)}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>Mis Compras</title>
      </Helmet>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl font-semibold">Mis compras</h2>
          {renderOrder()}
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountOrder;
