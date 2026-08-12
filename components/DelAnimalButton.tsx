// Admin-only delete button. Calls delete on the species rest endpoint. It is rendered on the AnimalsGrid when the user is an Admin.

"use client";

import { useRouter } from "next/navigation";

export default function DelAnimalButton({ id }: { id: number }) {
  const router = useRouter();

  async function remove() {
    if (!confirm("Delete this animal?")) return;
    await fetch(`/api/species/${id}`, { method: "DELETE" });
    router.refresh();
  }

  return (
    <button
      onClick={remove}
      className="text-xs bg-red-100 hover:bg-red-200 text-red-900 px-2 py-1 rounded cursor-pointer"
    >
      Delete
    </button>
  );
}
