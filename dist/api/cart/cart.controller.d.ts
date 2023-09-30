import { CartService } from './cart.service';
import { Cart, CartItem } from './cart.model';
export declare class CartController {
    private readonly cartService;
    constructor(cartService: CartService);
    createCart(): Cart;
    addItemToCart(cartId: string, item: CartItem): Cart;
    modifyItemQuantity(cartId: string, itemId: string, quantity: number): Cart;
    deleteItemFromCart(cartId: string, itemId: string): Cart;
}
