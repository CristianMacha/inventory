import { db } from "@vercel/postgres";
import {
    categories,
    products,
    registrations,
    typeRegistrations,
} from "../../../lib/placeholder-data";

const client = await db.connect();

async function seedCategories() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
        id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name            VARCHAR(80) NOT NULL,
        description     TEXT NULL,
        active          BOOLEAN DEFAULT TRUE
        );
    `;

    const insertCategories = await Promise.all(
        categories.map(
            async (category) => client.sql`
                INSERT INTO categories (id, name, description, active)
                VALUES (${category.id}, ${category.name}, ${category.description}, ${category.active})
                ON CONFLICT (id) DO NOTHING;
            `
        )
    );

    return insertCategories;
}

async function seedTypeRegistrations() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS type_registrations (
        id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name            VARCHAR(80) NOT NULL,
        description     TEXT NULL,
        active          BOOLEAN DEFAULT TRUE
        );
    `;

    const insertTypeRegistrations = await Promise.all(
        typeRegistrations.map(
            async (typeRegistration) => client.sql`
                INSERT INTO type_registrations (id, name, description, active)
                VALUES (${typeRegistration.id}, ${typeRegistration.name}, ${typeRegistration.description}, ${typeRegistration.active})
                ON CONFLICT (id) DO NOTHING;
            `
        )
    );

    return insertTypeRegistrations;
}

async function seedProducts() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS products (
        id              UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name            VARCHAR(80) NOT NULL,
        description     TEXT NULL,
        stock           INT DEFAULT 0,
        retail_price    DECIMAL(10, 2) DEFAULT 0,
        wholesale_price DECIMAL(10, 2) DEFAULT 0,
        active          BOOLEAN DEFAULT TRUE,
        created_by      VARCHAR(80) NOT NULL,
        updated_by      VARCHAR(80) NOT NULL,
        created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        category_id     UUID NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(id)
        );
    `;

    const insertProducts = await Promise.all(
        products.map(
            async (product) => client.sql`
                INSERT INTO products (id, name, description, stock, retail_price, wholesale_price, active, created_by, updated_by, category_id)
                VALUES (${product.id}, ${product.name}, ${product.description}, ${product.stock}, ${product.retailPrice.toFixed(2)}, ${product.wholesalePrice.toFixed(2)}, ${product.active}, ${product.createdBy}, ${product.updatedBy}, ${product.categoryId})
                ON CONFLICT (id) DO NOTHING;
            `
        )
    );

    return insertProducts;
}

async function seedRegistrations() {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS registrations (
        id                   UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        description          TEXT NULL,
        quantity             INT DEFAULT 0,
        active               BOOLEAN DEFAULT TRUE,
        created_by           VARCHAR(80) NOT NULL,
        updated_by           VARCHAR(80) NOT NULL,
        created_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at           TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        type_registration_id UUID NOT NULL,
        product_id           UUID NOT NULL,
        FOREIGN KEY (type_registration_id) REFERENCES type_registrations(id),
        FOREIGN KEY (product_id) REFERENCES products(id)
        );
    `;

    const insertRegistrations = await Promise.all(
        registrations.map(
            async (registration) => client.sql`
                INSERT INTO registrations (id, description, quantity, active, created_by, updated_by, type_registration_id, product_id)
                VALUES (${registration.id}, ${registration.description}, ${registration.quantity}, ${registration.active}, ${registration.createdBy}, ${registration.updatedBy}, ${registration.typeRegistrationId}, ${registration.productId})
                ON CONFLICT (id) DO NOTHING;
            `
        )
    );

    return insertRegistrations;
}

export async function GET() {
    // return Response.json({
    //   message:
    //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
    // });

    try {
        await client.sql`BEGIN`;
        await seedCategories();
        await seedTypeRegistrations();
        await seedProducts();
        await seedRegistrations();
        await client.sql`COMMIT`;

        return Response.json({ message: "Database seeded successfully" });
    } catch (error) {
        await client.sql`ROLLBACK`;
        return Response.json({ error }, { status: 500 });
    }
}
