export default function CollectionsPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center mt-48 bg-[#121212]">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-24 h-24 border-4 border-white border-t-transparent rounded-full animate-spin"/>
        
        <h1 className="text-4xl font-bold text-white mb-2">
          Collections
        </h1>

        <div className="flex flex-col items-center space-y-3">
          <p className="text-zinc-400 text-lg">
            This page is under development
          </p>
          <p className="text-zinc-500 text-sm">
            Soon you'll be able to create and manage your favorite anime collections
          </p>
        </div>

        <div className="flex items-center gap-2 text-zinc-600 mt-8 text-sm">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"/>
          Working on it...
        </div>
      </div>
    </div>
  )
}