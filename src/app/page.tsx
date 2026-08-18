"use client";

import { useState } from "react";

const events = [
  {
    day: "21",
    month: "AUG",
    title: "AI & Machine Learning Hackathon",
    club: "Coding Club",
    details: "10:00 AM · Main Auditorium",
    type: "Hackathon",
  },
  {
    day: "24",
    month: "AUG",
    title: "RoboWars 2026",
    club: "Robotics Club",
    details: "9:30 AM · Innovation Lab",
    type: "Competition",
  },
  {
    day: "27",
    month: "AUG",
    title: "Campus Cultural Night",
    club: "Cultural Club",
    details: "6:00 PM · Open Arena",
    type: "Cultural",
  },
  {
    day: "29",
    month: "AUG",
    title: "Building with Next.js",
    club: "Web Dev Club",
    details: "2:00 PM · Lab 3",
    type: "Workshop",
  },
];

const clubs = [
  { name: "Robotics Club", members: 126, score: 92 },
  { name: "Coding Club", members: 214, score: 87 },
  { name: "IEEE Student Branch", members: 168, score: 79 },
  { name: "Cultural Club", members: 302, score: 68 },
  { name: "Sports Committee", members: 480, score: 61 },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [registered, setRegistered] = useState(false);
  const [message, setMessage] = useState("");

  function showMessage(text: string) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2200);
  }

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-[#151821]">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 hidden h-screen w-64 bg-[#10131b] p-5 text-gray-400 lg:block">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-500 text-white">
            ✦
          </div>

          <span className="text-xl font-bold text-white">
            CampusPulse
          </span>
        </div>

        <p className="mb-3 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          Workspace
        </p>

        <nav className="space-y-1">
          {[
            "Overview",
            "Events",
            "Clubs",
            "My Registrations",
            "Achievements",
            "Analytics",
          ].map((item) => (
            <button
              key={item}
              onClick={() => {
                setActiveTab(item);
                showMessage(`${item} module selected`);
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                activeTab === item
                  ? "bg-[#202431] text-white"
                  : "hover:bg-[#1b1f29] hover:text-white"
              }`}
            >
              <span className="w-5 text-center">
                {item === "Overview"
                  ? "⌂"
                  : item === "Events"
                    ? "◫"
                    : item === "Clubs"
                      ? "♟"
                      : item === "Achievements"
                        ? "★"
                        : item === "Analytics"
                          ? "▥"
                          : "▣"}
              </span>

              {item}
            </button>
          ))}
        </nav>

        <p className="mb-3 mt-8 px-2 text-[10px] font-bold uppercase tracking-widest text-gray-600">
          Account
        </p>

        <button
          onClick={() => showMessage("Settings selected")}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm hover:bg-[#1b1f29] hover:text-white"
        >
          ⚙
          Settings
        </button>

        <div className="absolute bottom-6 left-5 right-5 border-t border-gray-800 pt-5">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
              VS
            </div>

            <div>
              <p className="text-xs font-bold text-white">
                Vishal S.
              </p>
              <p className="text-[10px]">
                CSE · Year 3
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-64">
        {/* Topbar */}
        <header className="flex h-20 items-center justify-between border-b bg-white px-5 lg:px-8">
          <div className="hidden w-80 rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-400 md:block">
            ⌕ &nbsp; Search clubs, events...
          </div>

          <div className="ml-auto flex items-center gap-3">
            <button
              onClick={() =>
                showMessage("You have 3 new notifications")
              }
              className="rounded-lg border bg-white px-3 py-2 hover:bg-gray-50"
            >
              ♧
            </button>

            <div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
              VS
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1500px] p-5 lg:p-8">
          {/* Hero */}
          <section className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Monday, August 17, 2026
              </p>

              <h1 className="mt-1 text-3xl font-extrabold tracking-tight">
                Good evening, Vishal 👋
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Here&apos;s what&apos;s happening across your campus.
              </p>
            </div>

            <button
              onClick={() => showMessage("Opening event explorer...")}
              className="hidden rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 sm:block"
            >
              ＋ Explore events
            </button>
          </section>

          {/* Stats */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["▣", "Events attended", "24", "+4 this month"],
              ["♟", "Clubs joined", "4", "+1 this semester"],
              ["★", "Achievements", "12", "+3 this year"],
              ["↗", "Activity score", "82%", "↑ 8% vs last month"],
            ].map(([icon, label, value, change]) => (
              <div
                key={label}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <div className="flex justify-between text-xs text-gray-500">
                  <span>
                    {icon} &nbsp;{label}
                  </span>
                  <span>•••</span>
                </div>

                <div className="mt-2 text-3xl font-extrabold">
                  {value}
                </div>

                <p className="mt-1 text-[11px] font-bold text-emerald-600">
                  {change}
                </p>
              </div>
            ))}
          </section>

          {/* Events + Engagement */}
          <section className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-sm font-bold">
                  Upcoming events
                </h2>

                <button className="text-xs text-gray-500 hover:text-indigo-600">
                  View calendar →
                </button>
              </div>

              <div className="px-5">
                {events.map((event, index) => (
                  <div
                    key={event.title}
                    className="flex items-center gap-3 border-b py-4 last:border-0"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
                      <div className="text-center">
                        <div className="text-[9px] font-bold">
                          {event.month}
                        </div>
                        <div className="text-lg font-extrabold">
                          {event.day}
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">
                        {event.title}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {event.club} · {event.details}
                      </p>
                    </div>

                    <span className="hidden rounded-full bg-gray-100 px-2 py-1 text-[10px] text-gray-600 sm:block">
                      {event.type}
                    </span>

                    {index === 0 && (
                      <button
                        onClick={() => {
                          setRegistered(!registered);
                          showMessage(
                            registered
                              ? "Registration cancelled"
                              : "Successfully registered!"
                          );
                        }}
                        className="rounded-lg border px-2.5 py-1.5 text-[11px] font-bold hover:bg-gray-50"
                      >
                        {registered ? "Registered" : "Register"}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement */}
            <div className="rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-sm font-bold">
                  My engagement
                </h2>

                <span className="text-xs text-gray-400">
                  Last 6 months
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
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

                <div className="mt-8 flex h-40 items-end gap-3 border-b">
                  {[42, 58, 51, 75, 68, 92].map((height, index) => (
                    <div
                      key={index}
                      className={`flex-1 rounded-t-md ${
                        index === 5
                          ? "bg-indigo-500"
                          : "bg-indigo-100"
                      }`}
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-gray-400">
                  {["Mar", "Apr", "May", "Jun", "Jul", "Aug"].map(
                    (month) => (
                      <span key={month}>{month}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Clubs */}
          <section className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
            <div className="rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-sm font-bold">
                  Most active clubs
                </h2>

                <span className="text-xs text-gray-400">
                  This semester
                </span>
              </div>

              <div className="px-5">
                {clubs.map((club, index) => (
                  <div
                    key={club.name}
                    className="flex items-center gap-3 border-b py-3 last:border-0"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-lg bg-gray-100 text-sm">
                      ★
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-bold">
                        {index + 1}. {club.name}
                      </p>

                      <p className="text-[11px] text-gray-400">
                        {club.members} members
                      </p>
                    </div>

                    <div className="hidden w-24 overflow-hidden rounded-full bg-gray-100 sm:block">
                      <div
                        className="h-1.5 rounded-full bg-indigo-500"
                        style={{ width: `${club.score}%` }}
                      />
                    </div>

                    <span className="text-xs font-bold">
                      {club.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="rounded-2xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-5 py-4">
                <h2 className="text-sm font-bold">
                  Quick actions
                </h2>

                <span className="text-xs text-gray-400">
                  Shortcuts
                </span>
              </div>

              <div className="grid gap-2 p-5">
                {[
                  "Browse events",
                  "Discover clubs",
                  "View certificates",
                ].map((action) => (
                  <button
                    key={action}
                    onClick={() => showMessage(`${action} opened`)}
                    className="rounded-lg border px-4 py-3 text-left text-xs font-bold hover:bg-gray-50"
                  >
                    {action}
                    <span className="float-right">→</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Recommendations */}
          <section className="mt-7">
            <h2 className="text-lg font-bold">
              Recommended for you
              <span className="ml-2 text-xs font-normal text-gray-400">
                · based on your activity
              </span>
            </h2>

            <div className="mt-3 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: "✦",
                  title: "Generative AI Workshop",
                  text: "You’ve attended 3 AI events recently. This hands-on session matches your interests.",
                },
                {
                  icon: "↗",
                  title: "Startup Pitch Night",
                  text: "Popular with CSE students who participate in hackathons and innovation events.",
                },
                {
                  icon: "♟",
                  title: "Robotics Club Open House",
                  text: "Explore a new club and meet the team behind RoboWars 2026.",
                },
              ].map((recommendation) => (
                <div
                  key={recommendation.title}
                  className="rounded-2xl border bg-white p-5 shadow-sm"
                >
                  <div className="text-xl">
                    {recommendation.icon}
                  </div>

                  <h3 className="mt-4 text-sm font-bold">
                    {recommendation.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {recommendation.text}
                  </p>

                  <button
                    onClick={() =>
                      showMessage(
                        `${recommendation.title} selected`
                      )
                    }
                    className="mt-4 rounded-lg border px-3 py-2 text-xs font-bold hover:bg-gray-50"
                  >
                    View event →
                  </button>
                </div>
              ))}
            </div>
          </section>

          <p className="mt-7 text-[10px] text-gray-400">
            CampusPulse · College Activity Intelligence · v0.1
          </p>
        </div>
      </main>

      {/* Toast */}
      {message && (
        <div className="fixed bottom-6 right-6 rounded-lg bg-[#151821] px-4 py-3 text-xs font-medium text-white shadow-xl">
          {message}
        </div>
      )}
    </div>
  );
}