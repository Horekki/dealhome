import { Container, FlatImage, Title } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation";

// export default async function FlatPage({ params: { id } }: { params: { id: string } }) {
export default async function FlatPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const flat = await prisma.flat.findFirst({ where: { id: Number(id) } });

    if (!flat) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <FlatImage imageUrl={flat.imageUrl} />

                <div className="w-[490px] bg-[#f7f6f5] p-7">
                    <Title text={flat.name} size="md" className="font-extrabold mb-1" />

                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus ratione accusantium quidem, rem perspiciatis molestias maiores tempore at blanditiis aut, culpa fuga laborum repellat iure. Vel expedita reiciendis pariatur.</p>

                </div>
            </div>
        </Container>
    );
}