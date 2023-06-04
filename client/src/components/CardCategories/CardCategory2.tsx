import React, { FC } from "react";
import { Link } from "react-router-dom";

import NcImage from "shared/NcImage/NcImage";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import { CATS_DISCOVER } from "components/DiscoverMoreSlider";

export interface CardCategory2Props {
  className?: string;
  featuredImage?: string;
  name?: string;
  desc?: string;
  color?: string;
}

const CardCategory2: FC<CardCategory2Props> = ({
  className = "",
  featuredImage = CATS_DISCOVER[2].featuredImage,
  name = CATS_DISCOVER[2].name,
  desc = CATS_DISCOVER[2].desc,
  color = CATS_DISCOVER[2].color,
}) => {
  return (
    <Link
      to={"/"}
      className={`nc-CardCategory3 block ${className}`}
      data-nc-id="CardCategory3"
    >
      <div
        className={`relative w-full aspect-w-16 aspect-h-11 sm:aspect-h-9 h-0 rounded-2xl overflow-hidden group ${color}`}
      >
        <div>
          <NcImage
            src={featuredImage}
            containerClassName="absolute inset-5 sm:inset-8"
            className="absolute right-0 w-1/2 max-w-[260px] h-full object-contain drop-shadow-xl"
          />
        </div>
        <span className="opacity-0 group-hover:opacity-40 absolute inset-0 bg-black/10 transition-opacity"></span>

        <div>
          <div className="absolute inset-5 sm:inset-8 flex flex-col">
            <div className="max-w-xs">
              <span className={`block mb-2 text-sm text-slate-700`}>
                {name}
              </span>
              {desc && (
                <h2
                  className={`text-xl md:text-2xl text-slate-900 font-semibold`}
                  dangerouslySetInnerHTML={{ __html: desc }}
                ></h2>
              )}
            </div>
            <div className="mt-auto">
              <ButtonSecondary
                sizeClass="py-3 px-4 sm:py-3.5 sm:px-6"
                fontSize="text-sm font-medium"
                className="nc-shadow-lg"
              >
                Mostrarme todo
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory2;