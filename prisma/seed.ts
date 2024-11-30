import { prisma } from "./prisma-client";
import { hashSync } from 'bcrypt';
import { categories, facilities } from "./constants";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User Test",
                email: "user@test.ru",
                password: hashSync("111111", 10),
                role: "USER",
                verified: new Date(),
            },
            {
                fullName: "Admin Admin",
                email: "admin@test.ru",
                password: hashSync("111111", 10),
                verified: new Date(),
                role: "ADMIN",
            }
        ]
    });

    await prisma.category.createMany({
        data: categories,
    });

    await prisma.facility.createMany({
        data: facilities,
    })

    const flat1 = await prisma.flat.create({
        data: {
            name: 'Многокомнатрая избушка',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 1000,

            rooms: 4,
            metro: true,
            repair: 'Normal',

            phone: '8 (800) 555-35-35',
            address: 'г. Москва, ул. Ленина, д. 10, кв. 1',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(0, 5),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    const flat2 = await prisma.flat.create({
        data: {
            name: 'Маломерка для маленьких',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 5000,

            rooms: 3,
            metro: false,
            repair: 'Poor',

            phone: '8 (800) 555-35-35',
            address: 'г. Минск, ул. Ленина, д. 15, кв. 2',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(5, 10),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    const flat3 = await prisma.flat.create({
        data: {
            name: 'Квартира для студентов',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 50000,

            rooms: 2,
            metro: true,
            repair: 'Good',

            phone: '8 (800) 555-35-35',
            address: 'г. Питер, ул. Ленина, д. 100, кв. 6',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(10, 15),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    const flat4 = await prisma.flat.create({
        data: {
            name: 'Домик на дереве',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 6000,

            rooms: 3,
            metro: false,
            repair: 'Good',

            phone: '8 (800) 555-35-35',
            address: 'г. Питер, ул. Ленина, д. 100, кв. 6',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(10, 15),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    const flat5 = await prisma.flat.create({
        data: {
            name: 'Квартира Антона',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 50000,

            rooms: 1,
            metro: true,
            repair: 'Normal',

            phone: '8 (800) 555-35-35',
            address: 'г. Питер, ул. Ленина, д. 100, кв. 6',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(10, 15),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    const flat6 = await prisma.flat.create({
        data: {
            name: 'Общежитие БГУИР',
            imageUrl: 'https://avatars.mds.yandex.net/i?id=dfa66914531b1f425d25a542eab460a2_l-4589571-images-thumbs&n=13',
            price: 50000,

            rooms: 4,
            metro: false,
            repair: 'Poor',

            phone: '8 (800) 555-35-35',
            address: 'г. Питер, ул. Ленина, д. 100, кв. 6',
            categoryId: 1,
            facilities: {
                connect: facilities.slice(10, 15),
                // connect: [{id: 1}, {id: 2}],
            }
        },
    })

    await prisma.liked.createMany({
        data: [
            {
                userId: 1,
                token: '111111',
            },
            {
                userId: 2,
                token: '222222',
            }
        ]
    })

    await prisma.likedItem.create({
        data: {
            flatId: 1,
            likedId: 1,
            facilities: {
                connect: [{ id: 1 }, { id: 2 }, { id: 3 }]
            },
        },
    })
    // await prisma.flat.createMany({
    //     data: flats,
    // })
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Facility" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Flat" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Liked" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "LikedItem" RESTART IDENTITY CASCADE`;
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });