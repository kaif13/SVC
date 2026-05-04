import { useState } from "react";

const ResultsPage = () => {
  const [rollSearch, setRollSearch] = useState("");

  const handleOpenResultSheet = () => {
    const roll = rollSearch.trim();
    if (!roll) {
      return;
    }
    const url = `${window.location.origin}${window.location.pathname}?roll=${encodeURIComponent(
      roll,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-2xl sm:px-10">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-700">
            Swami Vivekanand College
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Result Lookup
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Enter your roll number below and open the official-looking result
            sheet in a new window.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <label className="block text-sm font-semibold text-slate-700">
            Roll Number
          </label>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="text"
              placeholder="Enter roll number"
              value={rollSearch}
              onChange={(e) => setRollSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
            />
            <button
              type="button"
              onClick={handleOpenResultSheet}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
            >
              Open Result
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            If the roll number is valid, the printable mark sheet will open in a
            new tab.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 shadow-sm sm:p-8">
          <h2 className="text-lg font-semibold text-slate-900">Instructions</h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
            <li>• Use the exact roll number provided by the college.</li>
            <li>
              • The result sheet opens as a printable certificate-style page.
            </li>
            <li>
              • Click the print button on the result page to download or print
              the document.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
