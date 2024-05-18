const { PrismaClient } = require('@prisma/client/edge');
import { withAccelerate } from '@prisma/extension-accelerate'

const prisma = new PrismaClient().$extends(withAccelerate())

async function main() {
    const user = await prisma.user.create({
        data: {
            name: User,
            email: email,
            password: password,
            role: "Librarian"
        },
    })
    console.log(user)
}

main ()
    .catch(e =>{
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })