"use client";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();
  return (
    <main className="bg-red-50 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-[90%] max-w-md">
        <h2 className="text-green-400 text-3xl font-bold">Log in</h2>

        <form action="" className="mt-8 gap-3 justify-between flex flex-col">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              className="border-2 border-green-200 rounded-md"
              type="text"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <br />
            <input
              className="border-2 border-green-200 rounded-md"
              type="text"
              id="pass"
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
