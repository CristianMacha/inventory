import { Metadata } from "next"
import Link from "next/link"
import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { Suspense } from 'react';

import HeaderDash from "@/ui/HeaderDash"
import HeaderMenu from "@/ui/HeaderMenu"
import Search from "@/ui/search"
import ProductList from "@/ui/products/list"
import { fetchProductListPages } from "@/lib/data"
import Pagination from "@/ui/pagination"
import { ProductListSkeleton } from "@/ui/skeletons";

export const metadata: Metadata = {
    title: "Productos",
    description: "Administra los productos de tu tienda",
}

export default withPageAuthRequired(async function Products({ searchParams }: { searchParams?: { query?: string, page?: string } }) {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;

    const totalPages = await fetchProductListPages(query);
    return (
        <div>
            <HeaderDash />
            <HeaderMenu />
            <div className="h-[120px] px-[22px] md:px-[40px] lg:px-[132px] border-b-[0.5px] bg-white flex flex-col md:flex-row gap-1 md:gap-3 justify-center md:justify-between flex-wrap items-start md:items-center">
                <h1 className="text-3xl font-semibold">Productos</h1>
                <div className="w-full md:w-auto">
                    <div className="h-10 flex justify-center">
                        <Link href={'/products/create'} className="px-4 h-10 border rounded-md flex items-center bg-gray-900 text-gray-50 hover:bg-gray-800 w-full">
                            <span className="w-full text-center md:text-start">Agregar Producto</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-[#fafafa] py-4 md:py-6 px-[22px] md:px-[40px] lg:px-[132px]">
                <div className="flex flex-col gap-6">
                    <Search placeholder="Buscar productos" />
                    <Suspense key={query + currentPage} fallback={<ProductListSkeleton />} >
                        <ProductList query={query} currentPage={currentPage} />
                    </Suspense>
                    <div className="flex w-full justify-center">
                        <Pagination totalPages={totalPages} />
                    </div>
                </div>
            </div>
        </div>
    )
}, { returnTo: "/products" })