"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/");
    router.refresh();
  }

  return (
    <main className="bg-red-50 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-md">
        <h2 className="text-green-400 text-3xl font-bold">Log in</h2>
        <form
          onSubmit={handleLogin}
          className="mt-8 gap-3 justify-between flex flex-col"
        >
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="border-2 border-green-200 rounded-md"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <br />
            <input
              className="border-2 border-green-200 rounded-md"
              type="password"
              id="pass"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit"
              className="bg-green-300 px-2 py-1 rounded-lg hover:bg-green-400 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
