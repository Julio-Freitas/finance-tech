export const formatedPriceTo = (price: number) => {
  return new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
  }).format(price ?? 0);
};
