import { Controller, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CartService } from './cart.service';
import { Cart, CartItem } from './cart.model';

@Controller('api/v1')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('/createCart')
  createCart(): Cart {
    return this.cartService.createCart();
  }

  @Post('/addItem/:cartId')
  addItemToCart(@Param('cartId') cartId: string, @Body() item: CartItem): Cart {
    return this.cartService.addItemToCart(cartId, item);
  }

  @Put('/modifyItem/:cartId')
  modifyItemQuantity(
    @Param('cartId') cartId: string,
    @Body('itemId') itemId: string,
    @Body('quantity') quantity: number,
  ): Cart {
    return this.cartService.modifyItemQuantity(cartId, itemId, quantity);
  }

  @Delete('/deleteItem/:cartId')
  deleteItemFromCart(
    @Param('cartId') cartId: string,
    @Body('itemId') itemId: string,
  ): Cart {
    return this.cartService.deleteItemFromCart(cartId, itemId);
  }
}
