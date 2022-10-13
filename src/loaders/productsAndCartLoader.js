import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getShoppingCart();
    const previousCart = [];
    for (const id in savedCart) {
        const addedCart = products.find(product => product.id === id);
        if (addedCart) {
            const quantity = savedCart[id];
            addedCart.quantity = quantity;
            previousCart.push(addedCart);
        }
    }

    return { products, previousCart };
}