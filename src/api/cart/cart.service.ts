import { Injectable, NotFoundException } from '@nestjs/common';
import { Cart, CartItem } from './cart.model';
import { v4 as uuidV4 } from 'uuid';

export class CartService {
  private carts: Cart[] = [];

  createCart(): Cart {
    const cart: Cart = {
      id: uuidV4(),
      items: [],
    };
    this.carts.push(cart);
    return cart;
  }

  addItemToCart(cartId: string, item: CartItem): Cart {
    const cart = this.carts.find((cart) => cart.id === cartId);
    if (!cart) {
      throw new NotFoundException(`Cart with "${cartId}" do not exist`);
    }
    const newItem: CartItem = {
      id: uuidV4(),
      quantity: item.quantity,
    };
    const existingItem = cart.items.find((item) => item.id === newItem.id);

    if (existingItem) {
      existingItem.quantity += newItem.quantity;
    } else {
      cart.items.push(newItem);
    }

    return cart;
  }

  modifyItemQuantity(cartId: string, itemId: string, quantity: number): Cart {
    const cart = this.carts.find((cart) => cart.id === cartId);
    if (!cart) {
      throw new NotFoundException(`Cart with "${cartId}" do not exist`);
    }

    const item = cart.items.find((item) => item.id === itemId);
    if (!item) {
      throw new NotFoundException(`Item with "${itemId}" do not exist`);
    }

    item.quantity = quantity;
    return cart;
  }

  deleteItemFromCart(cartId: string, itemId: string): Cart {
    const cart = this.carts.find((cart) => cart.id === cartId);
    if (!cart) {
      throw new NotFoundException(`Cart with "${cartId}" do not exist`);
    }

    const initialLength = cart.items.length;
    cart.items = cart.items.filter((item) => item.id !== itemId);

    // Check if any item was removed
    if (cart.items.length !== initialLength) {
      return cart
    }

    return undefined;
  }
}
