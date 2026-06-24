"use client";

import Link from "next/link";

type CollegeProps = {
  id: number;
  name: string;
  location: string;
  fees: number;
  rating: number;
};

export default function CollegeCard({
  id,
  name,
  location,
  fees,
  rating,
}: CollegeProps) {
  const saveCollege = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const savedColleges = JSON.parse(
      localStorage.getItem("savedColleges") || "[]"
    );

    const alreadySaved = savedColleges.some(
      (college: any) => college.id === id
    );

    if (alreadySaved) {
      alert("College already saved!");
      return;
    }

    savedColleges.push({
      id,
      name,
      location,
      fees,
      rating,
    });

    localStorage.setItem(
      "savedColleges",
      JSON.stringify(savedColleges)
    );

    alert("College saved successfully!");
  };

  return (
    <Link href={`/college/${id}`}>
      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
        <div className="h-40 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
          <h2 className="text-white text-2xl font-bold text-center px-4">
            {name}
          </h2>
        </div>

        <div className="p-5">
          <div className="flex justify-between items-center mb-4">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
              ⭐ {rating}
            </span>

            <span className="text-gray-500 text-sm">
              📍 {location}
            </span>
          </div>

          <div className="border-t pt-4">
            <p className="text-gray-500 text-sm">
              Annual Fees
            </p>

            <p className="text-2xl font-bold text-blue-600">
              ₹{fees.toLocaleString()}
            </p>
          </div>

          <button
            type="button"
            className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            View Details
          </button>

          <button
            type="button"
            onClick={saveCollege}
            className="mt-3 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            ❤️ Save College
          </button>
        </div>
      </div>
    </Link>
  );
}