import { getSession, Session } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";

export default async function HeaderDash() {
    const { user } = await getSession() as Session;
    return (
        <div className="px-2 md:px-6 py-3 md:py-4 flex flex-row justify-between gap-3 items-center">
            <Link href={'/'} className="flex flex-row gap-2 items-center">
                <Image src={user.picture} width={20} height={20} alt={user.name} className="rounded-full w-5 h-5" />
                <div className="text-sm font-medium">Hola, {user.name}</div>
            </Link>
            <div className="flex">
                <div className="min-h-[30px] rounded-md border px-3 py-2">
                    <a
                        href="/api/auth/logout"
                        className="text-sm text-[#666666] hover:text-[#171717] hover:bg-gray-100 whitespace-nowrap flex gap-1 items-center">
                        <span className="hidden md:block">Cerrar sesión</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}