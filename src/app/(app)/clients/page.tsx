import { prisma } from '@/lib/db'

export default async function Page() {
  const clients = await prisma.client.findMany({
    select: { id: true, name: true, email: true, phone: true },
    orderBy: { name: 'asc' },
  })

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-sm rounded-md border border-gray-200 bg-background p-2"
        />
      </div>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id} className="border-t">
              <td className="p-2">{client.name}</td>
              <td className="p-2">{client.email ?? '-'}</td>
              <td className="p-2">{client.phone ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
