export default function SearchTypeSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-full animate-pulse h-32 bg-zinc-800 rounded-md" />
        ))}
      </div>
    </div>
  )
}