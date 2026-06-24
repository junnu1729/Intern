"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CollegeCard from "@/components/CollegeCard";

export default function SavedPage() {
const router = useRouter();

const [savedColleges, setSavedColleges] =
useState<any[]>([]);

useEffect(() => {
const user = localStorage.getItem("loggedInUser");

if (!user) {
  router.push("/login");
  return;
}

const saved = JSON.parse(
  localStorage.getItem("savedColleges") || "[]"
);

setSavedColleges(saved);


}, [router]);

const removeCollege = (id: number) => {
const updated = savedColleges.filter(
(college) => college.id !== id
);


setSavedColleges(updated);

localStorage.setItem(
  "savedColleges",
  JSON.stringify(updated)
);


};

return ( <main className="max-w-7xl mx-auto px-6 py-10"> <h1 className="text-4xl font-bold mb-8">
Saved Colleges </h1>


  {savedColleges.length === 0 ? (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-semibold">
        No Saved Colleges Yet
      </h2>

      <p className="text-gray-500 mt-2">
        Save colleges from the home page to see them here.
      </p>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {savedColleges.map((college) => (
        <div key={college.id}>
          <CollegeCard
            id={college.id}
            name={college.name}
            location={college.location}
            fees={college.fees}
            rating={college.rating}
          />

          <button
            onClick={() =>
              removeCollege(college.id)
            }
            className="mt-3 w-full border border-blue-600 text-blue-600 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium"
          >
            💙 Remove from Saved
          </button>
        </div>
      ))}
    </div>
  )}
</main>

);
}
