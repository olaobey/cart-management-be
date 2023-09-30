"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const common_1 = require("@nestjs/common");
const cart_service_1 = require("./cart.service");
let CartController = class CartController {
    constructor(cartService) {
        this.cartService = cartService;
    }
    createCart() {
        return this.cartService.createCart();
    }
    addItemToCart(cartId, item) {
        return this.cartService.addItemToCart(cartId, item);
    }
    modifyItemQuantity(cartId, itemId, quantity) {
        return this.cartService.modifyItemQuantity(cartId, itemId, quantity);
    }
    deleteItemFromCart(cartId, itemId) {
        return this.cartService.deleteItemFromCart(cartId, itemId);
    }
};
exports.CartController = CartController;
__decorate([
    (0, common_1.Post)('/createCart'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], CartController.prototype, "createCart", null);
__decorate([
    (0, common_1.Post)('/addItem/:cartId'),
    __param(0, (0, common_1.Param)('cartId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], CartController.prototype, "addItemToCart", null);
__decorate([
    (0, common_1.Put)('/modifyItem/:cartId'),
    __param(0, (0, common_1.Param)('cartId')),
    __param(1, (0, common_1.Body)('itemId')),
    __param(2, (0, common_1.Body)('quantity')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", Object)
], CartController.prototype, "modifyItemQuantity", null);
__decorate([
    (0, common_1.Delete)('/deleteItem/:cartId'),
    __param(0, (0, common_1.Param)('cartId')),
    __param(1, (0, common_1.Body)('itemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], CartController.prototype, "deleteItemFromCart", null);
exports.CartController = CartController = __decorate([
    (0, common_1.Controller)('api/v1'),
    __metadata("design:paramtypes", [cart_service_1.CartService])
], CartController);
//# sourceMappingURL=cart.controller.js.map