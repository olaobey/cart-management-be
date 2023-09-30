"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
class CartService {
    constructor() {
        this.carts = [];
    }
    createCart() {
        const cart = {
            id: (0, uuid_1.v4)(),
            items: [],
        };
        this.carts.push(cart);
        return cart;
    }
    addItemToCart(cartId, item) {
        const cart = this.carts.find((cart) => cart.id === cartId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart with "${cartId}" do not exist`);
        }
        const newItem = {
            id: (0, uuid_1.v4)(),
            quantity: item.quantity,
        };
        const existingItem = cart.items.find((item) => item.id === newItem.id);
        if (existingItem) {
            existingItem.quantity += newItem.quantity;
        }
        else {
            cart.items.push(newItem);
        }
        return cart;
    }
    modifyItemQuantity(cartId, itemId, quantity) {
        const cart = this.carts.find((cart) => cart.id === cartId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart with "${cartId}" do not exist`);
        }
        const item = cart.items.find((item) => item.id === itemId);
        if (!item) {
            throw new common_1.NotFoundException(`Item with "${itemId}" do not exist`);
        }
        item.quantity = quantity;
        return cart;
    }
    deleteItemFromCart(cartId, itemId) {
        const cart = this.carts.find((cart) => cart.id === cartId);
        if (!cart) {
            throw new common_1.NotFoundException(`Cart with "${cartId}" do not exist`);
        }
        const initialLength = cart.items.length;
        cart.items = cart.items.filter((item) => item.id !== itemId);
        if (cart.items.length !== initialLength) {
            return cart;
        }
        return undefined;
    }
}
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map