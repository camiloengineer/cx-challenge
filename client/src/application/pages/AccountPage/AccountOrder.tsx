import React, { FC, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "application/reducers";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

import { fetchUserPurchases } from "application/reducers/userPurchases.reducer";
import { setSelectedPurchase, clearSelectedPurchase } from "application/reducers/purchase.reducer";
import Prices from "application/sections/Prices";
import ButtonSecondary from "application/components/Button/ButtonSecondary";
import CommonLayout from "./CommonLayout";
import { UserPurchaseResponse } from "domain/entities/userPurchases.model";
import { authManager } from "infrastructure/utils/auth.utils";
import Pagination from "application/components/Pagination/Pagination";
import Spinner from "application/components/Spinner/Spinner";

interface AccountOrderProps {}

const AccountOrder: FC<AccountOrderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();
  const isMounted = useRef(false);

  const limit = 3;
  const user = useSelector((state: RootState) => state.user);
  const [userId, ] = useState(user?.id ?? 1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { expireSession } = authManager();

  const handlePaginationChange = async (selectedPage: number) => {
    setLoading(true);
    setPage(selectedPage);
    const action = await dispatch(fetchUserPurchases({ userId, limit, page }));
    dispatch(clearSelectedPurchase());
    setLoading(false);
    if (!action.payload) {
      await logout();
    }
  };

  const userPurchases = useSelector((state: RootState) => state.userPurchases);

  const logout = async () => {
    await expireSession();
    navigate("/");
  };
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const action = await dispatch(fetchUserPurchases({ userId, limit, page }));
      dispatch(clearSelectedPurchase());
      setLoading(false);
      if (!action.payload) {
        await logout();
      }
    };

    const timer = setTimeout(() => {
      if (!isMounted.current) {
        fetchData();
        isMounted.current = true;
      }
    });

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [dispatch, page]);
  

  const handleDetailClick = async (product: UserPurchaseResponse) => {
    navigate("/detalle-compra");
    const action = await dispatch(setSelectedPurchase(product));
    if (!action.payload) {
      await logout();
    }
  };

  const renderProductItem = (product: UserPurchaseResponse, index: number) => {
    return (
      <div
        className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden z-0"
        key={index}
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 sm:p-8 bg-slate-50 dark:bg-slate-500/5">
          <div>
            <p className="text-lg font-semibold">{product.date}</p>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1.5 sm:mt-2">
              <span>Pedido: {product.purchaseId}</span>
              <span className="mx-2">·</span>
              <span className="capitalize text-green-600">entregado</span>
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <Link
              to="/mis-compras"
              className="text-sm font-medium text-indigo-600 dark:text-primary-500"
            >
              Agregar al carrito
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-700 p-2 sm:p-8 divide-y divide-y-slate-200 dark:divide-slate-700">
          <div className="flex py-4 sm:py-7 last:pb-0 first:pt-0">
            <div className="h-24 w-16 sm:w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div
              className="ml-4 flex flex-1 flex-col"
            >
              <div>
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-base font-medium line-clamp-1">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      <span>{product.amount}</span>
                    </p>
                  </div>
                  <Prices
                    className="mt-0.5 ml-2"
                    price={product.cost.total}
                    currency={product.cost.currency}
                  />
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-gray-500 dark:text-slate-400 flex items-center">
                  <span className="hidden sm:inline-block">
                    {product.seller.nickname}
                  </span>
                </p>

                <div className="flex">
                  <ButtonSecondary
                    sizeClass="py-2.5 px-4 sm:px-6"
                    fontSize="text-sm font-medium"
                    onClick={() => handleDetailClick(product)}
                  >
                    Detalle de compra
                  </ButtonSecondary>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const totalItems = userPurchases?.total ?? 0;
  const totalPages = Math.ceil(totalItems / limit);

  const paginationItems = Array.from(Array(totalPages), (_, index) => ({
    label: (index + 1).toString(),
    href: "#",
  }));

  return (
    <div>
      <Helmet>
        <title>Mis Compras</title>
      </Helmet>
      <CommonLayout>
        <div className="space-y-10 sm:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">Mis compras</h2>
          {loading ? (
            <Spinner text="Cargando mis compras..." />
          ) : (
            userPurchases?.data?.map(renderProductItem)
          )}
        </div>
        <div className="flex flex-col mt-12 md:mt-20 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
          <Pagination
            onPageChange={handlePaginationChange}
            paginationItems={paginationItems}
            activePage={page}
          />
        </div>
      </CommonLayout>
    </div>
  );
};

export default AccountOrder;
