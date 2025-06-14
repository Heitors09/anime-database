import Link from "next/link";

export default function Explore() {
  return (
    <section className="w-full py-16 px-8">
    <div className="max-w-3xl mx-auto text-center text-white">
      <h2 className="text-3xl font-bold mb-6">Explore Your Next Favorite Anime</h2>
      <p className="text-lg mb-8">
        Explore our extensive anime collection and find out where to officially watch your favorite series.
        Use our smart search or get personalized recommendations through our AI to find the perfect
        anime for you.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/catalog?page=1" className="bg-white text-[#0a0a0a] px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
          Explore Catalog
        </Link>
        <button className="bg-[#242424] text-white px-6 py-3 rounded-md font-medium hover:bg-[#363636] transition-colors">
          AI Recommendations
        </button>
      </div>
    </div>
  </section>
  )
}