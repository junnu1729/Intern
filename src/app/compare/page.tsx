"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { colleges } from "@/data/colleges";

export default function ComparePage() {
const [college1, setCollege1] = useState(colleges[0]);
const [college2, setCollege2] = useState(colleges[1]);

const router = useRouter();
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
const user = localStorage.getItem("loggedInUser");

 
if (!user) {
  router.push("/login");
} else {
  setIsLoading(false);
}
 

}, [router]);

if (isLoading) {
return ( <div className="min-h-screen flex items-center justify-center"> <p className="text-xl font-semibold">
Loading... </p> </div>
);
}

return ( <main className="min-h-screen bg-gray-50">
{/* Your existing JSX starts here */} </main>
);
}

 

 

