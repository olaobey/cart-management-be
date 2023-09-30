import { Cart, CartItem } from './cart.model';
export declare class CartService {
    private carts;
    createCart(): Cart;
    addItemToCart(cartId: string, item: CartItem): Cart;
    modifyItemQuantity(cartId: string, itemId: string, quantity: number): Cart;
    deleteItemFromCart(cartId: string, itemId: string): Cart;
}
