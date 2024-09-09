import { sql } from "@vercel/postgres";
import { Category, ProductList } from "./definitions";

export async function fetchTotalProducts() {
    try {
        const data = await sql`
            SELECT COUNT(*) FROM products;
        `;

        return data.rows[0].count;
    } catch (error) {
        throw new Error("Failed to fetch total products");
    }
}

const ITEMS_PER_PAGE = 6;
export async function fetchProductList(query: string, currentPage: number) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const products = await sql<ProductList>`
            SELECT 
                products.id,
                products.name,
                products.stock,
                products.retail_price,
                products.wholesale_price,
                categories.name AS category
            FROM products
            INNER JOIN categories ON products.category_id = categories.id
            WHERE 
                products.name ILIKE ${`%${query}%`} OR
                categories.name ILIKE ${`%${query}%`} OR
                products.stock::text ILIKE ${`%${query}%`} OR
                products.retail_price::text ILIKE ${`%${query}%`} OR
                products.wholesale_price::text ILIKE ${`%${query}%`}
            ORDER BY products.updated_at DESC
            LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset};
        `;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        return products.rows;
    } catch (error) {
        throw new Error("Failed to fetch products list");
    }
}

export async function fetchProductListPages(query: string) {
    try {
        const data = await sql`
            SELECT COUNT(*) FROM products
            INNER JOIN categories ON products.category_id = categories.id
            WHERE 
                products.name ILIKE ${`%${query}%`} OR
                categories.name ILIKE ${`%${query}%`} OR
                products.stock::text ILIKE ${`%${query}%`} OR
                products.retail_price::text ILIKE ${`%${query}%`} OR
                products.wholesale_price::text ILIKE ${`%${query}%`};
        `;

        const totalPages = Math.ceil(data.rows[0].count / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        throw new Error("Failed to fetch total pages");
    }
}


export async function fetchCategories() {
    try {
        const data = await sql<Category>`
            SELECT * FROM categories
            WHERE active = TRUE;
        `;

        return data.rows;
    } catch (error) {
        throw new Error("Failed to fetch categories");
    }
}