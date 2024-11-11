const { PrismaClient } = require('@prisma/client')
require('dotenv').config()
const fs = require('node:fs')
const path = require('node:path')
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

  const gamesPath = path.join(__dirname, 'game.json')
  const moviesPath = path.join(__dirname, 'movie.json')

  const games = JSON.parse(fs.readFileSync(gamesPath, 'utf8'))
  const movies = JSON.parse(fs.readFileSync(moviesPath, 'utf8'))

  for (const movie of movies) {
    try {
      await prisma.video.create({
        data: {
          title: movie.title,
          status: movie.status,
          genre: movie.genre,
          grade: movie.grade,
          person: { connectOrCreate: { where: { name: movie.person }, create: { name: movie.person } } },
        },
      })
    } catch (e) {
      console.log(movie)
      throw e
    }
  }

  for (const game of games) {
    try {
      await prisma.game.create({
        data: {
          title: game.title,
          status: game.status,
          grade: game.grade,
          person: { connectOrCreate: { where: { name: game.person }, create: { name: game.person } } },
        },
      })
    } catch (e) {
      console.log(game)
      throw e
    }
  }
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
