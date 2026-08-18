import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const events = [
  {
    title: "AI & Machine Learning Hackathon",
    club: "Coding Club",
    date: "21 AUG",
  },
  {
    title: "RoboWars 2026",
    club: "Robotics Club",
    date: "24 AUG",
  },
  {
    title: "Campus Cultural Night",
    club: "Cultural Club",
    date: "27 AUG",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      <Sidebar />

      <div className="md:pl-64">
        <Topbar />

        <main className="p-6 md:p-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#6c63ff]">
              Monday, August 18, 2026
            </p>

            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              Good evening, Vishal 👋
            </h1>

            <p className="mt-2 text-gray-500">
              Here’s what’s happening across your campus.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["24", "Events attended"],
                ["4", "Clubs joined"],
                ["12", "Achievements"],
                ["82%", "Activity score"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-gray-500">{label}</p>

                  <p className="mt-2 text-3xl font-extrabold">
                    {value}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-emerald-600">
                    ↑ 8% this month
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
              <section className="rounded-2xl border border-gray-200 bg-white">
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
                  <h2 className="font-bold">Upcoming events</h2>

                  <a
                    href="/events"
                    className="text-xs font-semibold text-[#6c63ff]"
                  >
                    View all →
                  </a>
                </div>

                <div className="divide-y divide-gray-100 px-6">
                  {events.map((event) => (
                    <div
                      key={event.title}
                      className="flex items-center gap-4 py-5"
                    >
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#f1efff] text-center text-[10px] font-bold text-[#6259e8]">
                        {event.date}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-bold">
                          {event.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {event.club} · Main Auditorium
                        </p>
                      </div>

                      <button className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold hover:bg-gray-50">
                        Register
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-bold">My engagement</h2>

                  <span className="text-xs text-gray-400">
                    Last 6 months
                  </span>
                </div>

                <div className="mt-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-400">
                        Participation
                      </p>

                      <p className="mt-1 text-3xl font-extrabold">
                        82%
                      </p>
                    </div>

                    <span className="text-xs font-bold text-emerald-600">
                      +18.4%
                    </span>
                  </div>

                  <div className="mt-8 flex h-36 items-end gap-3">
                    {[42, 58, 51, 75, 68, 92].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-[#d9d6ff]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-bold">Recommended for you</h2>

                <span className="text-xs text-gray-400">
                  Based on your activity
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  "Generative AI Workshop",
                  "Startup Pitch Night",
                  "Robotics Club Open House",
                ].map((title) => (
                  <div
                    key={title}
                    className="rounded-xl bg-gray-50 p-5"
                  >
                    <div className="text-xl">✦</div>

                    <h3 className="mt-4 text-sm font-bold">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      Recommended based on your previous campus
                      activity.
                    </p>

                    <button className="mt-4 text-xs font-bold text-[#6c63ff]">
                      View event →
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}