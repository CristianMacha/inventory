import { fetchProductList } from "@/lib/data";
import type { ProductList } from "@/lib/definitions";
import { ClipboardIcon } from "@heroicons/react/24/solid";

export default async function ProductList({ query, currentPage }: { query: string, currentPage: number }) {
    const products = await fetchProductList(query, currentPage);

    return (
        <div className="flex flex-col gap-2">
            {products.map((product) => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </div>
    )
}

export function ProductListItem({ product }: { product: ProductList }) {
    return (
        <div className="bg-white border rounded-md p-4 flex flex-col md:flex-row justify-between gap-3">
            <div className="flex-1 border-r-0 md:border-r">
                <h2 className="text-base font-semibold md:font-medium text-gray-800">{product.name}</h2>
                <div className="flex flex-row gap-2 overflow-x-auto">
                    {
                        product.stock > 0 ? (
                            <span className="text-sm font-normal px-2 bg-green-200 rounded-full text-gray-800 whitespace-nowrap">en stock</span>
                        ) : (
                            <span className="text-sm font-normal px-2 bg-red-200 rounded-full text-gray-800 whitespace-nowrap">agotado</span>
                        )
                    }
                    <span className="text-gray-400 text-sm whitespace-nowrap">{product.category}</span>
                    <span className="text-gray-400 text-sm flex gap-1 items-center whitespace-nowrap">
                        <ClipboardIcon className=" w-[14px] h-[14px]" />
                        {product.stock} en stock
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div>
                    <span className="text-gray-400 text-sm font-medium">Precio al por menor</span>
                    <h3 className="text-base font-semibold text-gray-800">${product.retail_price}</h3>
                </div>
                <div>
                    <span className="text-gray-400 text-sm font-medium">Precio al por mayor</span>
                    <h3 className="text-base font-semibold text-gray-800">${product.wholesale_price}</h3>
                </div>
            </div>
        </div>
    )
}