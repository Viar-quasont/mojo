import Link from "next/link";

export default function Secret() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#b6d5b6" }}
    >
      <div className="w-full max-w-5xl text-center">

        <p className="text-2xl md:text-3xl italic text-black leading-relaxed">
          During any part of this process if you feel confused and don&apos;t know what to do,
          <br />
          just look for this button
        </p>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            aria-label="Secret button"
            className="w-32 h-32 text-white text-2xl"
            style={{
              backgroundColor: "#6b3f32",
              clipPath:
                "polygon(50% 92%, 10% 48%, 5% 34%, 9% 19%, 23% 9%, 39% 11%, 50% 27%, 61% 11%, 77% 9%, 91% 19%, 95% 34%, 90% 48%)",
            }}
          >
            :)
          </button>
        </div>

        <Link
          href="/mojo"
          className="inline-block mt-10 text-2xl text-blue-600 underline hover:text-blue-800"
        >
          Continue :)
        </Link>

      </div>
    </main>
  );
}