// src/lib/api.ts

const API_BASE_URL = "http://localhost:3001/api";

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  });

  if (!res.ok) {
    const error = await res.json();
    console.error("API Error:", error);
    throw new Error(error?.message || "API request failed");
  }

  return res.json();
}