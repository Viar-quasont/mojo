import Link from "next/link";

export default function Reassurance() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#b6d5b6" }}
    >
      <div className="w-full max-w-4xl text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          It&apos;s okay, no worries.
        </h1>

        <p className="mt-12 text-2xl md:text-3xl text-slate-900 leading-relaxed">
          I know you tried to push yourself to reach out,
          <br />
          and even if you couldn&apos;t, that&apos;s okay too.
          <br />
          Don&apos;t feel bad for feeling this way
          <br />
          or be hard on yourself.
        </p>

        <h2 className="mt-12 text-4xl font-bold text-slate-900">
          Things will get better :)
        </h2>

        <Link
          href="/Secret"
          className="inline-block mt-16 px-10 py-5 rounded-full bg-white text-slate-900 text-xl font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Continue 
        </Link>

      </div>
    </main>
  );
}