import HeaderDash from "@/ui/HeaderDash"
import HeaderMenu from "@/ui/HeaderMenu"
import { Suspense } from "react"
import CardWrapper from "./cards"
import { CardWrapperSkeleton } from "./skeletons"

export default function Overview() {
    return (
        <div>
            <HeaderDash />
            <HeaderMenu />
            <div className="min-h-screen bg-[#fafafa] py-6">
                <div className="px-[22px] md:px-12">
                    <Suspense fallback={<CardWrapperSkeleton />}>
                        <CardWrapper />
                    </Suspense>
                </div>
            </div>
        </div>
    )
}