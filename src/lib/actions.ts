"use server";

import { z } from "zod";
import { getSession, Session } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProductFormSchema = z.object({
    name: z
        .string({
            invalid_type_error: "El nombre del producto es necesario",
        })
        .min(3),
    description: z.string().max(255, { message: "La descripción es muy larga" }),
    retailPrice: z.coerce
        .number()
        .gt(0, { message: "El precio al por menor debe ser mayor a 0" }),
    wholesalePrice: z.coerce
        .number()
        .gt(0, { message: "El precio al por mayor debe ser mayor a 0" }),
    createdBy: z.string().min(3).max(80),
    updatedBy: z.string().min(3).max(80),
    updatedAt: z.string(),
    categoryId: z.string({ invalid_type_error: "La categoría es necesaria" }),
});

const CreateProduct = ProductFormSchema.omit({
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
});
const UpdateProduct = ProductFormSchema.omit({
    updatedAt: true,
    createdBy: true,
    updatedBy: true,
});

export type State = {
    errors?: {
        name?: string[];
        description?: string[];
        retailPrice?: string[];
        wholesalePrice?: string[];
        categoryId?: string[];
    };
    message?: string | null;
};

export async function createProduct(prevState: State, formData: FormData) {
    const validatedFields = CreateProduct.safeParse({
        name: formData.get("name"),
        description: formData.get("description"),
        retailPrice: formData.get("retailPrice"),
        wholesalePrice: formData.get("wholesalePrice"),
        categoryId: formData.get("categoryId"),
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors);
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing Fields. Failed to Create Invoice.",
        };
    }

    const { name, description, retailPrice, wholesalePrice, categoryId } =
        validatedFields.data;

    try {
        const { user } = (await getSession()) as Session;
        await sql`
        INSERT INTO products (name, description, retail_price, wholesale_price, category_id, created_by, updated_by)
        VALUES (${name}, ${description}, ${retailPrice}, ${wholesalePrice}, ${categoryId}, ${user.sub}, ${user.sub})
        `
    } catch (error) {
        return {
            message: "Failed to create product",
        };
    }

    revalidatePath("/products");
    redirect("/products");
}
