import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const company = await prisma.company.create({
    data: {
      name: 'FS-Contracting N.V.',
    },
  })

  await prisma.client.createMany({
    data: [
      { name: 'Acme Corp', email: 'acme@example.com', phone: '555-1234', companyId: company.id },
      { name: 'Globex LLC', email: 'globex@example.com', phone: '555-5678', companyId: company.id },
      { name: 'Initech', email: 'initech@example.com', phone: '555-9012', companyId: company.id },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
