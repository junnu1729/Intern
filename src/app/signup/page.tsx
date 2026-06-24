"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const signup = () => {
        if (!email || !password) {
            alert("Please fill all fields");
            return;
        }


        localStorage.setItem(
            "user",
            JSON.stringify({
                email,
                password,
            })
        );

        alert("Account created successfully!");

        router.push("/login");


    };

    return (<div className="max-w-md mx-auto mt-20 bg-white p-8 rounded-2xl shadow-lg"> <h1 className="text-3xl font-bold mb-6 text-center">
        Create Account </h1>


        <input
            type="email"
            placeholder="Enter Email"
            className="w-full border p-3 rounded-lg mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Enter Password"
            className="w-full border p-3 rounded-lg mb-6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />

        <button
            onClick={signup}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
            Create Account
        </button>
    </div>


    );
}
