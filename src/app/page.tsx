"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import CollegeCard from "@/components/CollegeCard";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import { colleges } from "@/data/colleges";

export default function Home() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

useEffect(() => {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    router.push("/login");
  }
}, [router]);

  const collegesPerPage = 10;

  const filteredColleges = colleges.filter((college) => {
    return (
      college.name.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || college.location === location) &&
      college.rating >= rating
    );
  });

  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;

  const currentColleges = filteredColleges.slice(
    indexOfFirstCollege,
    indexOfLastCollege
  );

  const totalPages = Math.ceil(
    filteredColleges.length / collegesPerPage
  );

  return (<main className="min-h-screen bg-gray-50"> <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16"> <div className="max-w-7xl mx-auto px-6 text-center"> <h1 className="text-5xl md:text-6xl font-bold">
    Discover Your Dream College </h1>

    ```
    <p className="mt-4 text-lg text-blue-100">
      Search, compare and explore top engineering colleges across India.
    </p>

    <Link
      href="/compare"
      className="inline-block mt-8 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
    >
      Compare Colleges
    </Link>
  </div>
  </section>

    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-4">
          <FilterPanel
            location={location}
            setLocation={setLocation}
            rating={rating}
            setRating={setRating}
          />
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Top Engineering Colleges
        </h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
          {filteredColleges.length} Colleges Found
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {currentColleges.map((college) => (
          <CollegeCard
            key={college.id}
            id={college.id}
            name={college.name}
            location={college.location}
            fees={college.fees}
            rating={college.rating}
          />
        ))}
      </div>

      {filteredColleges.length > 0 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.max(prev - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            ← Previous
          </button>

          <span className="font-semibold text-lg">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
          >
            Next →
          </button>
        </div>
      )}

      {filteredColleges.length === 0 && (
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-700">
            No Colleges Found
          </h3>

          <p className="text-gray-500 mt-2">
            Try changing your search or filter criteria.
          </p>
        </div>
      )}
    </section>
  </main>


);
}
