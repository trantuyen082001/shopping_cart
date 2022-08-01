export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  titlte: string;
  amount: number;
};

export const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch(`https://fakestoreapi.com/products`)).json();
