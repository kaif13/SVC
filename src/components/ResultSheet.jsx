import { collegeData, results } from "../data/collegeData";

const courseSubjects = {
  "B.Sc. Computer Science": [
    {
      code: "CS101",
      title: "Programming Fundamentals",
      te: 70,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 95,
      credit: 4,
    },
    {
      code: "CS102",
      title: "Data Structures",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "CS103",
      title: "Computer Networks",
      te: 65,
      tca: 22,
      pe: 0,
      pca: 0,
      total: 87,
      credit: 4,
    },
    {
      code: "CS104",
      title: "Database Management",
      te: 72,
      tca: 23,
      pe: 0,
      pca: 0,
      total: 95,
      credit: 4,
    },
    {
      code: "CS105",
      title: "Web Design Lab",
      te: 0,
      tca: 0,
      pe: 24,
      pca: 24,
      total: 48,
      credit: 2,
    },
  ],
  "B.Sc. Physics": [
    {
      code: "PH101",
      title: "Mechanics",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "PH102",
      title: "Electromagnetism",
      te: 65,
      tca: 22,
      pe: 0,
      pca: 0,
      total: 87,
      credit: 4,
    },
    {
      code: "PH103",
      title: "Modern Physics",
      te: 70,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 95,
      credit: 4,
    },
    {
      code: "PH104",
      title: "Optics",
      te: 66,
      tca: 22,
      pe: 0,
      pca: 0,
      total: 88,
      credit: 4,
    },
    {
      code: "PH105",
      title: "Physics Lab",
      te: 0,
      tca: 0,
      pe: 22,
      pca: 21,
      total: 43,
      credit: 2,
    },
  ],
  "B.A. English": [
    {
      code: "EN101",
      title: "English Literature",
      te: 72,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 97,
      credit: 4,
    },
    {
      code: "EN102",
      title: "Communication Skills",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "EN103",
      title: "Cultural Studies",
      te: 66,
      tca: 23,
      pe: 0,
      pca: 0,
      total: 89,
      credit: 4,
    },
    {
      code: "EN104",
      title: "Creative Writing",
      te: 70,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 94,
      credit: 4,
    },
    {
      code: "EN105",
      title: "English Lab",
      te: 0,
      tca: 0,
      pe: 23,
      pca: 22,
      total: 45,
      credit: 2,
    },
  ],
  "B.A. History": [
    {
      code: "HI101",
      title: "History of India",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "HI102",
      title: "World History",
      te: 66,
      tca: 23,
      pe: 0,
      pca: 0,
      total: 89,
      credit: 4,
    },
    {
      code: "HI103",
      title: "Modern Civilizations",
      te: 70,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 95,
      credit: 4,
    },
    {
      code: "HI104",
      title: "Indian Culture",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "HI105",
      title: "History Lab",
      te: 0,
      tca: 0,
      pe: 22,
      pca: 21,
      total: 43,
      credit: 2,
    },
  ],
  "B.Com.": [
    {
      code: "BC101",
      title: "Financial Accounting",
      te: 72,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 97,
      credit: 4,
    },
    {
      code: "BC102",
      title: "Business Law",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "BC103",
      title: "Economics",
      te: 70,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 94,
      credit: 4,
    },
    {
      code: "BC104",
      title: "Marketing",
      te: 66,
      tca: 23,
      pe: 0,
      pca: 0,
      total: 89,
      credit: 4,
    },
    {
      code: "BC105",
      title: "Commerce Lab",
      te: 0,
      tca: 0,
      pe: 23,
      pca: 22,
      total: 45,
      credit: 2,
    },
  ],
  default: [
    {
      code: "XX101",
      title: "Core Subject 1",
      te: 70,
      tca: 25,
      pe: 0,
      pca: 0,
      total: 95,
      credit: 4,
    },
    {
      code: "XX102",
      title: "Core Subject 2",
      te: 68,
      tca: 24,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "XX103",
      title: "Core Subject 3",
      te: 65,
      tca: 22,
      pe: 0,
      pca: 0,
      total: 87,
      credit: 4,
    },
    {
      code: "XX104",
      title: "Core Subject 4",
      te: 69,
      tca: 23,
      pe: 0,
      pca: 0,
      total: 92,
      credit: 4,
    },
    {
      code: "XX105",
      title: "Lab / Practical",
      te: 0,
      tca: 0,
      pe: 22,
      pca: 22,
      total: 44,
      credit: 2,
    },
  ],
};

const gradePoints = {
  "A+": "10.00",
  A: "9.00",
  "B+": "8.00",
  B: "7.00",
};

const ResultSheet = ({ rollNumber }) => {
  const result = results.find(
    (item) => item.rollNumber.toLowerCase() === rollNumber.toLowerCase(),
  );

  if (!result) {
    return (
      <div className="min-h-screen bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-bold text-slate-900">
            Result Not Found
          </h1>
          <p className="mt-4 text-slate-600">
            We could not find a result for roll number{" "}
            <strong>{rollNumber}</strong>. Please check the number and try
            again.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700"
          >
            Back to Portal
          </a>
        </div>
      </div>
    );
  }

  const studentDetails =
    courseSubjects[result.course] || courseSubjects.default;
  const totalMarks = studentDetails.reduce((sum, row) => sum + row.total, 0);
  const totalCredit = studentDetails.reduce((sum, row) => sum + row.credit, 0);
  const sgpa = gradePoints[result.grade] || "7.50";

  return (
    <div className="min-h-screen bg-slate-100 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] sm:p-10">
        <div className="overflow-hidden rounded-[1.75rem] border border-emerald-700 bg-white shadow-lg">
          <div className="bg-emerald-700 px-8 py-8 text-center text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-emerald-100">
              Swami Vivekanand College
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Statement of Marks
            </h1>
            <p className="mt-3 text-base uppercase tracking-[0.3em] text-emerald-200">
              Semester Examination 2024-25
            </p>
          </div>

          <div className="border-b border-slate-200 px-8 py-8 sm:px-12 sm:py-10">
            <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  {collegeData.name}
                </p>
                <p className="mt-3 max-w-2xl text-lg font-semibold text-slate-900">
                  {collegeData.tagline}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">
                  {collegeData.location}
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  {collegeData.contact.email}
                </p>
              </div>
            </div>
          </div>

          <div className="px-8 py-10 sm:px-12">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Student Details
                </h2>
                <div className="mt-6 grid gap-4 text-sm text-slate-700 sm:grid-cols-2">
                  <div>
                    <p className="text-slate-500">Name</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {result.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Roll No.</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {result.rollNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Course</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {result.course}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Semester</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      {result.semester}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Enrollment No.</p>
                    <p className="mt-1 font-semibold text-slate-900">
                      24010188{rollNumber.slice(-1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-500">Exam Session</p>
                    <p className="mt-1 font-semibold text-slate-900">2024-25</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-base font-semibold uppercase tracking-[0.2em] text-slate-700">
                  Result Summary
                </h2>
                <div className="mt-6 grid gap-4 text-sm text-slate-700">
                  <div className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4">
                    <span className="text-slate-500">Status</span>
                    <span className="font-semibold text-emerald-700">
                      {result.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4">
                    <span className="text-slate-500">Grade</span>
                    <span className="font-semibold text-slate-900">
                      {result.grade}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4">
                    <span className="text-slate-500">SGPA</span>
                    <span className="font-semibold text-slate-900">{sgpa}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 p-4">
                    <span className="text-slate-500">Total Marks</span>
                    <span className="font-semibold text-slate-900">
                      {totalMarks} / 500
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-slate-200">
              <div className="bg-slate-100 px-6 py-4 text-sm uppercase tracking-[0.22em] text-slate-500">
                Subject-wise Details
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm text-slate-700">
                  <thead>
                    <tr className="border-b border-slate-200 bg-white">
                      <th className="px-6 py-4 font-medium text-slate-900">
                        Subject Code
                      </th>
                      <th className="px-6 py-4 font-medium text-slate-900">
                        Subject
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        TE
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        TCA
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        PE
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        PCA
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        Total
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        Credit
                      </th>
                      <th className="px-4 py-4 text-center font-medium text-slate-900">
                        Grade
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {studentDetails.map((subject) => (
                      <tr key={subject.code}>
                        <td className="px-6 py-4 font-semibold text-slate-900">
                          {subject.code}
                        </td>
                        <td className="px-6 py-4">{subject.title}</td>
                        <td className="px-4 py-4 text-center">
                          {subject.te || "--"}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {subject.tca || "--"}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {subject.pe || "--"}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {subject.pca || "--"}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {subject.total}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {subject.credit}
                        </td>
                        <td className="px-4 py-4 text-center">
                          {result.grade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-slate-50 text-sm text-slate-700">
                    <tr className="font-semibold text-slate-900">
                      <td className="px-6 py-4" colSpan={2}>
                        Total
                      </td>
                      <td className="px-4 py-4 text-center" colSpan={4}></td>
                      <td className="px-4 py-4 text-center">{totalMarks}</td>
                      <td className="px-4 py-4 text-center">{totalCredit}</td>
                      <td className="px-4 py-4 text-center">{result.grade}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Note</p>
                <p className="mt-3 leading-7">
                  This document is generated for preview only. Official
                  certificates will be issued by the college authorities.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">Registrar</p>
                <p className="mt-6 text-sm text-slate-600">Signature</p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">
                  Controller of Exams
                </p>
                <p className="mt-6 text-sm text-slate-600">Signature</p>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
              >
                Download / Print
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
              >
                Back to Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultSheet;
