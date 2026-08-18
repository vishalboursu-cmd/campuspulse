export default function Topbar() {
  return (
    <header className="flex h-18 items-center justify-between border-b border-gray-200 bg-white px-6 md:px-8">
      <div className="hidden w-80 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-400 sm:block">
        ⌕ &nbsp; Search clubs, events...
      </div>

      <div className="ml-auto flex items-center gap-3">
        <button className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50">
          ♧
        </button>

        <button className="rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm hover:bg-gray-50">
          ✓
        </button>

        <div className="grid h-9 w-9 place-items-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
          VS
        </div>
      </div>
    </header>
  );
}