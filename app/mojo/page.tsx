export default function Mojo() {
  return (
    <main
      className="min-h-screen flex items-center justify-center p-6"
      style={{ backgroundColor: "#b6d5b6" }}
    >
      <div className="w-full max-w-5xl flex items-center justify-center gap-16">

        <div className="max-w-xl text-center">
          <p className="text-4xl md:text-5xl italic text-slate-900 leading-relaxed">
            I am mojo your not
            <br />
            human friend whose sole
            <br />
            existence is to help u :)
            <br />
            So dont hesitate to ever
            <br />
            reach out
          </p>

          <a
            href="/mojo/choices"
            className="inline-block mt-8 text-xl text-slate-900 font-semibold hover:underline"
          >
            Continue :)
          </a>
        </div>

        <div className="relative">
          <div
            className="absolute -top-20 left-1/2 -translate-x-1/2 px-8 py-5 rounded-2xl text-4xl"
            style={{
              backgroundColor: "#fff8e8",
              color: "#ff7667",
            }}
          >
            Hi!
          </div>

          <img
            src="/images/mojo.png"
            alt="Mojo"
            className="w-80 h-auto"
          />
        </div>

      </div>
    </main>
  );
}