export interface Cart {
  id: string;
  items: CartItem[];
}

export interface CartItem {
  id: string;
  quantity: number;
}
