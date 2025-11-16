export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Welcome to Our Sports Club
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Connecting athletes, families, and fans. Explore our teams, read the latest club information, and access important documents all in one place.
            </p>
            <div className="flex gap-3">
              <a href="/teams" className="inline-flex items-center px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">Browse Teams</a>
              <a href="/documents" className="inline-flex items-center px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">Club Documents</a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 border border-gray-200" />
          </div>
        </div>
      </section>
    </main>
  )
}
