import Link from "next/link";

const navigation = [
  { label: "Overview", href: "/dashboard", icon: "⌂" },
  { label: "Events", href: "/events", icon: "◫" },
  { label: "Clubs", href: "/clubs", icon: "♟" },
  { label: "My Registrations", href: "/registrations", icon: "▣" },
  { label: "Achievements", href: "/achievements", icon: "★" },
  { label: "Analytics", href: "/analytics", icon: "▥" },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col bg-[#10131b] px-4 py-6 text-white md:flex">
      <Link href="/" className="flex items-center gap-3 px-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#6c63ff] font-bold">
          ✦
        </div>

        <span className="text-lg font-extrabold">
          CampusPulse
        </span>
      </Link>

      <p className="mb-3 mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">
        Workspace
      </p>

      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-400 transition hover:bg-[#202431] hover:text-white"
          >
            <span className="w-5 text-center">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-gray-800 pt-5">
        <div className="flex items-center gap-3 px-3">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
            VS
          </div>

          <div>
            <p className="text-sm font-semibold">Vishal S.</p>
            <p className="text-xs text-gray-500">CSE · Year 3</p>
          </div>
        </div>
      </div>
    </aside>
  );
}