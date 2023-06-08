export const formatPrice = (price: number, currency: string): string => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency,
    }).format(price);
  };