class ShoppingCart {
    itemsArray = []
    constructor(cart) {
        this.cart = cart
    }
    getItems() {
        return this.itemsArray
    }
    addItem(itemName, quantity, price) {
        return this.itemsArray.push(
            {
                name: itemName,
                quantity: quantity,
                pricePerUnit: price
            })
    }
    clear() {
        return this.itemsArray = []
    }
    total() {
        return this.itemsArray.reduce((totalPrice, currentItem) => totalPrice + (currentItem.pricePerUnit * currentItem.quantity), 0)
    }
}

module.exports = ShoppingCart