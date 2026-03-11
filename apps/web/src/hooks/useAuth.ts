"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/auth.service";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    }

    loadUser();
  }, []);

  return { user, loading };
}