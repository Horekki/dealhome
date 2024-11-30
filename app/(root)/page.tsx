import { Container, Filters, FlatsGroupList, Title, TopBar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { prisma } from "@/prisma/prisma-client";

// export default function Home() {
export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      flats: {
        include: {
          facilities: true,
        }
      }
    }
  })

  // console.log(categories[0].flats);

  return <>

    <Container className="mt-10">
      <Title text="Аренда квартир" size="lg" className="font-extrabold" />
    </Container>
    <TopBar />

    <Container className="mt-10 pb-14">
      <div className="flex gap-[80px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>

        {/* Список товаров */}
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            {
              categories.map((category) => (
                category.flats.length > 0 && (
                  <FlatsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.flats}
                  />
                )
              ))
            }
            {/* <FlatsGroupList
              title={"Квартиры в аренду"}
              items={[
                {
                  id: 1,
                  name: "Квартира",
                  price: 1000,
                  imageUrl: "https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13"
                },
              ]}
              categoryId={1}
            /> */}
            {/* <FlatCard id={0} name={"Квартира"} price={1000} imageUrl={"https://static.realt.by/thumb/c/430x374/ef82c4ff84bc29639191357d72d9d1b7/1t/h/r2001310dh1t/1e750c9b86.jpg"} /> */}
          </div>
        </div>

      </div>
    </Container>


    <div className="h-[50vh]"></div>
    <Button variant={"default"}>Корзина</Button>
    <Button variant={"destructive"}>Корзина</Button>
    <Button variant={"outline"}>Корзина</Button>
    <Button variant={"secondary"}>Корзина</Button>
    <Button variant={"ghost"}>Корзина</Button>
    <Button variant={"link"}>Корзина</Button>
    <div className="h-[80vh]"></div>
  </>;
}
