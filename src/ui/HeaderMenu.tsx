'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
    const routes = [
        { id: 1, url: '/', name: 'Descripción general' },
        { id: 2, url: '/products', name: 'Productos' }
    ]
    const pathname = usePathname();
    return (
        <div className="px-2 md:px-6 border-b-[0.5px] sticky top-0 bg-white z-10">
            <div className="flex flex-row">
                {
                    routes.map((route) => (
                        <Link
                            key={route.id}
                            href={route.url}
                            className={`${pathname === route.url || (route.url !== '/' && pathname.startsWith(route.url)) ? 'menu-item-active' : 'menu-item'}`}>
                            {route.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}