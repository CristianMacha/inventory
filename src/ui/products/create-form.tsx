'use client'
import { createProduct, State } from "@/lib/actions";
import { Category } from "@/lib/definitions";
import { useFormState } from "react-dom";

export default function CreateProductForm({ categories }: { categories: Category[] }) {
    const initialState: State = { message: null, errors: {}};
    const [state, formAction] = useFormState(createProduct, initialState);

    return (
        <form action={formAction} className="flex flex-col gap-3">
            <div className="flex flex-col">
                <label htmlFor="name">Nombre</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Nombre del producto"
                    defaultValue=""
                    className="px-3 py-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="description">Descripción</label>
                <textarea 
                    id="description"
                    name="description" 
                    placeholder="Descripción del producto" 
                    className="px-3 py-2 border rounded-md" />
            </div>
            <div className="flex flex-col">
                <label htmlFor="category">Categoria</label>
                <select 
                    id="category" 
                    name="categoryId"
                    defaultValue=""
                    className="px-3 py-2 border rounded-md">
                        <option value="" disabled>
                Select a categoria
              </option>
                    {
                        categories.map((category) => (
                            <option 
                                key={category.id} 
                                value={category.id}>
                                    {category.name}
                                    </option>
                        ))
                    }
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col">
                    <label htmlFor="retailPrice">Precio al por menor</label>
                    <input 
                        type="number" 
                        id="retailPrice" 
                        name="retailPrice"
                        placeholder="89.00" 
                        className="px-3 py-2 border rounded-md" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="wholesalePrice">Precio al por mayor</label>
                    <input 
                        type="number" 
                        id="wholesalePrice"
                        name="wholesalePrice" 
                        placeholder="99.00" 
                        className="px-3 py-2 border rounded-md" />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-1">
                <button type="button" className="px-4 py-2 rounded-md border">Cancelar</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-gray-900 text-gray-50 hover:bg-gray-800">Guardar</button>
            </div>
        </form>
    )
}