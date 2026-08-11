// ============================================================================
// components/AnimalLikeButton.tsx   →   a like button for the ViewAnimalCard
// ============================================================================
// Generates a star that can be pressed to indicate when an animal is liked. Only operates when user is signed in to their account
// when pressed, adds the animal id to a table on supabase corresponding to the user's id. Or removes the animal id from that table
// also checks the user's current favourites so it can auto fill in stars if they already have been pressed
// ----------------------------------------------------------------------------

"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { createClient } from "@/lib/client";

type AnimalLikeButtonProps = {
  animalId: number;
  className?: string;
};

const AnimalLikeButton = ({
  animalId,
  className = "",
}: AnimalLikeButtonProps) => {
  const [favourite, setFavourite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkFavourite = async () => {
      const supabase = createClient();

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("favourites")
        .select("animal_id")
        .eq("user_id", user.id)
        .eq("animal_id", animalId)
        .maybeSingle();

      if (error) {
        console.error("Error checking favourite:", error.message);
        setLoading(false);
        return;
      }

      setFavourite(data !== null);
      setLoading(false);
    };

    checkFavourite();
  }, [animalId]);

  const toggleFavourite = async () => {
    const supabase = createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      window.location.href = "/login";
      return;
    }

    if (favourite) {
      const { error } = await supabase
        .from("favourites")
        .delete()
        .eq("user_id", user.id)
        .eq("animal_id", animalId);

      if (error) {
        console.error("Error removing favourite:", error.message);
        return;
      }

      setFavourite(false);
    } else {
      const { error } = await supabase.from("favourites").insert({
        user_id: user.id,
        animal_id: animalId,
      });

      if (error) {
        console.error("Error adding favourite:", error.message);
        return;
      }

      setFavourite(true);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavourite();
      }}
      className={`${className} cursor-pointer ${favourite ? "text-red-700" : "text-gray-400"}`}
    >
      <Star fill={favourite ? "currentColor" : "none"} />
    </button>
  );
};

export default AnimalLikeButton;
