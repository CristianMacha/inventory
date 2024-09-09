export type ProductList = {
    id: string;
    name: string;
    stock: number;
    retail_price: number;
    wholesale_price: number;
    category: string;
};

export type Category = {
    id: string;
    name: string;
    description: string;
    active: boolean;
}