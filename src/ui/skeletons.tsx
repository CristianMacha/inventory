const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function ProductListSkeleton() {
    return (
        <div className="flex flex-col gap-2">
            <ProductlistItemSkeleton />
            <ProductlistItemSkeleton />
            <ProductlistItemSkeleton />
            <ProductlistItemSkeleton />
            <ProductlistItemSkeleton />
            <ProductlistItemSkeleton />
        </div>
    )
}

export function ProductlistItemSkeleton() {
    return (
        <div className="bg-white border rounded-md p-4 flex flex-col md:flex-row justify-between gap-3">
            <div className="flex-1 border-r-0 md:border-r">
                <div className="flex flex-col gap-1 h-[48px]">
                    <h2 className={`${shimmer} relative h-6 w-[230px] bg-gray-100`}></h2>
                    <div className="flex flex-row gap-2">
                        <span className={`${shimmer} relative h-5 w-[74px] bg-gray-100`}></span>
                        <span className={`${shimmer} relative h-5 w-[75px] bg-gray-100`}></span>
                        <span className={`${shimmer} relative h-5 w-[97px] bg-gray-100`}></span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-3">
                <div>
                    <span className="text-gray-400 text-sm font-medium">Precio al por menor</span>
                    <h3 className={`${shimmer} relative h-6 w-[140px] bg-gray-100`}></h3>
                </div>
                <div>
                    <span className="text-gray-400 text-sm font-medium">Precio al por mayor</span>
                    <h3 className={`${shimmer} relative h-6 w-[140px] bg-gray-100`}></h3>
                </div>
            </div>
        </div>
    )
}

export function CardWrapperSkeleton() {
    return (
        <div className="flex flex-row gap-3">
            <CardSkeleton />
        </div>
    )
}

export function CardSkeleton() {
    return (
        <div className="px-8 py-6 bg-white rounded-md border h-[200px] w-[200px] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-1">
                <h2 className={`${shimmer} relative h-6 w-[100px] bg-gray-100`}></h2>
                <p className={`${shimmer} relative h-5 w-[140px] bg-gray-100`}></p>
            </div>
            <h3 className={`${shimmer} relative h-12 w-[100px] bg-gray-100`}></h3>
        </div>
    )
}