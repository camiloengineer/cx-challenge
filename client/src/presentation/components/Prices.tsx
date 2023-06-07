import React, { FC } from "react";

export interface PricesProps {
  className?: string;
  price?: number;
  currency?: string;
  contentClass?: string;
}

const Prices: FC<PricesProps> = ({
  className = "",
  price = 30000,
  currency = "ARS",
  contentClass = "py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium",
}) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
  }).format(price);

  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center border-2 border-green-500 rounded-lg ${contentClass}`}
      >
        <span className="text-green-600 !leading-none">{formattedPrice}</span>
      </div>
    </div>
  );
};

export default Prices;
