import Link from "next/link";
import { colleges } from "@/data/colleges";

export default async function CollegePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = colleges.find(
    (c) => c.id === Number(id)
  );

  if (!college) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-red-500">
          College Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="inline-block mb-6 bg-white/20 px-4 py-2 rounded-lg"
          >
            ← Back to Colleges
          </Link>

          <h1 className="text-5xl font-bold">
            {college.name}
          </h1>

          <p className="mt-4 text-xl text-blue-100">
            📍 {college.location}
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Annual Fees
            </h3>

            <p className="text-3xl font-bold text-blue-600">
              ₹{college.fees.toLocaleString()}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Rating
            </h3>

            <p className="text-3xl font-bold text-yellow-500">
              ⭐ {college.rating}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-gray-500">
              Placement Rate
            </h3>

            <p className="text-3xl font-bold text-green-600">
              {college.placements}
            </p>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white p-8 rounded-2xl shadow mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p className="text-gray-700 leading-8">
            {college.overview}
          </p>
        </div>

        {/* Courses */}
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-3xl font-bold mb-6">
            Popular Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {college.courses?.map(
              (course: string) => (
                <div
                  key={course}
                  className="border rounded-xl p-4 hover:bg-blue-50 transition"
                >
                  <h3 className="font-semibold">
                    {course}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}