import export default function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Home</h2>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold">Example Post</h3>
          <div className="mt-3 bg-gray-200 w-full h-64 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}
