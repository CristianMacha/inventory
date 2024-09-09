import { fetchTotalProducts } from "@/lib/data";

export default async function CardWrapper() {
    const totalProducts = await fetchTotalProducts()

    return (
        <div className="flex flex-row gap-3">
            <Card title="Products" description="durante el ultimo año" value={totalProducts} />
        </div>
    )
}

export function Card({ title, description, value }: { title: string, description: string, value: number }) {
    return (
        <div className="px-8 py-6 bg-white rounded-md border w-[200px] h-[200px] flex flex-col justify-between gap-4">
            <div>
                <h2 className="text-lg font-medium">{title}</h2>
                <p className="text-sm font-normal text-[#878787]">{description}</p>
            </div>
            <h3 className="text-6xl font-semibold">{value}</h3>
        </div>
    )
}