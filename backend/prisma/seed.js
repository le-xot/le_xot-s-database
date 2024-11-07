const { PrismaClient } = require('@prisma/client')
require('dotenv').config()
const process = require('node:process')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function seed() {
  const hashedPassword = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 10)
  await prisma.user.upsert(
    {
      where: { username: 'admin' },
      update: { },
      create: {
        username: 'admin',
        password: hashedPassword,
        role: 'ADMIN',
      },
    },
  )
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
