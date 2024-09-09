import { fetchCategories } from "@/lib/data";
import HeaderDash from "@/ui/HeaderDash";
import CreateProductForm from "@/ui/products/create-form";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default withPageAuthRequired(async function Page() {
    const categories = await fetchCategories();
    return (
        <div>
            <HeaderDash />
            <div className="h-[180px] px-[22px] md:px-[40px] lg:px-[132px] bg-white flex flex-col md:flex-row gap-5 md:gap-1 justify-center md:justify-between flex-wrap items-start md:items-center">
                <div>
                    <h1 className="text-[40px] font-semibold">Crear Producto</h1>
                    <p className="text-base text-[#666666]">Formulario de registro de productos</p>
                </div>
                    <Link href={'/products'} className="text-blue-500 font-normal text-sm hover:text-blue-600 flex gap-2 items-center">
                    <ArrowLeftIcon className="size-4" />
                        Volver a la lista de productos
                    </Link>
            </div>
            <div className="px-[22px] md:px-[40px] lg:px-[132px] min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <CreateProductForm categories={categories} />
                    <div></div>
                </div>
            </div>
        </div>
    )
}, { returnTo: "/products/create" });