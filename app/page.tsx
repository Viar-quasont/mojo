import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#b6d5b6" }}
    >
      <div className="w-full max-w-4xl text-center">

        <div className="text-7xl mb-8">
          🐝
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          You&apos;re not feeling okay,
          <br />
          but you don&apos;t want to bother anyone?
        </h1>

        <Link
          href="/reassurance"
          className="inline-block mt-16 px-10 py-5 rounded-full bg-white text-slate-900 text-xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Continue :)
        </Link>

      </div>
    </main>
  );
}