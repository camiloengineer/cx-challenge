import React, { FC, useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";

import { userCredentials } from "infrastructure/config/mock/data";
import Logo from "presentation/shared/Logo/Logo";
import MenuBar from "presentation/shared/MenuBar/MenuBar";
import AvatarDropdown from "./AvatarDropdown";
import Navigation from "presentation/shared/Navigation/Navigation";
import CartDropdown from "./CartDropdown";
import ButtonPrimary from "presentation/shared/Button/ButtonPrimary";
import SwitchDarkMode from "presentation/shared/SwitchDarkMode/SwitchDarkMode";
import { loginUser } from "adapters/store/user";
import { authManager } from "infrastructure/utils/auth.utils";

export interface HeaderProps {
  onAuthToggle: () => Promise<boolean>;
  showLogin: boolean;
}

const Header: FC<HeaderProps> = ({ onAuthToggle, showLogin }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const { isAuth, getAuthToken } = authManager();

  useEffect(() => {
    const timer = setTimeout( async () => {
      if (!isMounted.current) {
        await automaticLogin();
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout( async () => {
      const isAuthenticated = await isAuth();
      if (showLogin && !isAuthenticated) {
        await automaticLogin();
      }
    });

    return () => {
      clearTimeout(timer);
    };
  }, [showLogin])
  

  const handleAuthToggle = async () => {
    const isAuthenticated = await getAuthToken();
      if (isAuthenticated){
        const toggle = await onAuthToggle();
        if (toggle) {
          navigate("/mi-perfil");
        } else {
          navigate("/");
        }
      }
  };

  const automaticLogin = async () => {
    setLoading(true);
    await dispatch(loginUser(userCredentials));
    setLoading(false);
    isMounted.current = true;
  };

  const renderMagnifyingGlassIcon = () => {
    return (
      <svg
        width={22}
        height={22}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  const renderSearchForm = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className="flex-1 py-2 text-slate-900 dark:text-slate-100"
      >
        <div className="bg-slate-50 dark:bg-slate-800 flex items-center space-x-1.5 px-5 h-full rounded">
          {renderMagnifyingGlassIcon()}
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, marcas y más..."
            className="border-none bg-transparent focus:outline-none focus:ring-0 w-full text-base"
            autoFocus
          />
          <button type="button" onClick={() => setShowSearchForm(false)}>
            <XMarkIcon className="w-5 h-5" />
          </button>
        </div>
        <input type="submit" hidden value="" />
      </form>
    );
  };

  const renderContent = () => {
    return (
      <div className="h-20 flex justify-between">
        <div className="flex items-center lg:hidden flex-1 w-auto max-w-[4rem]">
          <MenuBar />
        </div>

        <div className="lg:flex-1 flex items-center">
          <Logo className="flex-shrink-0" />
        </div>

        <div className="flex-[2] hidden lg:flex justify-center">
          {showSearchForm ? renderSearchForm() : <Navigation />}
        </div>

        <div className="flex-1 flex items-center justify-end text-slate-700 dark:text-slate-100">
          {!showSearchForm && (
            <button
              className="hidden lg:flex w-10 h-10 sm:w-12 sm:h-12 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none items-center justify-center"
              onClick={() => setShowSearchForm(!showSearchForm)}
            >
              {renderMagnifyingGlassIcon()}
            </button>
          )}
          <span className="hidden lg:flex">
            <SwitchDarkMode />
          </span>
          {!showLogin && !loading ? (
            <>
              <AvatarDropdown onClose={handleAuthToggle} />
              <CartDropdown />
            </>
          ) : (
            <>
              <div className="px-1" />
              <ButtonPrimary
                className="whitespace-nowrap"
                loading={loading}
                onClick={handleAuthToggle}
              >
                <span>{loading ? 'Cargando la sesión...' : 'Acceder a mi cuenta'}</span>
              </ButtonPrimary>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="nc-HeaderLogged sticky top-0 w-full z-40">
    <div className="nc-MainNav2Logged relative z-10 bg-yellow-300 bg-white dark:bg-neutral-900 border-b border-slate-100 dark:border-slate-700">
      <div className="container">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Header;
