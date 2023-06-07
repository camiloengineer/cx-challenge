import React, { FC } from "react";
import NcImage from "presentation/shared/NcImage/NcImage";
import rightImgDemo from "presentation/images/kid.png";
import ButtonPrimary from "presentation/shared/Button/ButtonPrimary";
import Logo from "presentation/shared/Logo/Logo";
import backgroundLineSvg from "presentation/images/Moon.svg";

export interface SectionPromo2Props {
  className?: string;
}

const SectionPromo: FC<SectionPromo2Props> = ({ className = "lg:pt-10" }) => {
  return (
    <div className={`nc-SectionPromo2 ${className}`}>
      <div className="relative flex flex-col lg:flex-row lg:justify-end bg-yellow-50 dark:bg-slate-800 rounded-2xl sm:rounded-[40px] p-4 pb-0 sm:p-5 sm:pb-0 lg:p-24">
        <div className="absolute inset-0">
          <img
            className="absolute w-full h-full object-contain dark:opacity-5"
            src={backgroundLineSvg}
            alt="backgroundLineSvg"
          />
        </div>

        <div className="lg:w-[45%] max-w-lg relative">
          <Logo className="w-28" />
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl mt-6 sm:mt-10 !leading-[1.13] tracking-tight">
            Oferta especial <br />
            en productos para niños
          </h2>
          <span className="block mt-6 text-slate-500 dark:text-slate-400">
          La moda es una manifestación de estilo y creatividad.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary
              href="/"
              className="dark:bg-slate-200 dark:text-slate-900"
            >
              Descubre más
            </ButtonPrimary>
          </div>
        </div>

        <NcImage
          containerClassName="relative block lg:absolute lg:left-0 lg:bottom-0 mt-10 lg:mt-0 max-w-xl lg:max-w-[calc(55%-40px)]"
          src={rightImgDemo}
        />
      </div>
    </div>
  );
};

export default SectionPromo;
