export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-300 p-5 text-black dark:bg-[#121212] ">
      <div className=" flex w-full max-w-screen-sm flex-col gap-5 rounded-2xl bg-white p-5 shadow-lg dark:bg-gray-600 dark:text-white ">
        {["Nico", "Me", "You", "Yourself"].map((person, index) => (
          <div
            key={index}
            className="flex items-center gap-5 rounded-xl p-2.5 odd:bg-gray-500 even:bg-slate-100"
          >
            <div className="size-10 rounded-full bg-blue-400" />
            <span className=" text-lg font-medium">{person}</span>
            <div className=" flex size-6 animate-ping items-center justify-center rounded-full bg-red-500">
              <span>{index}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
