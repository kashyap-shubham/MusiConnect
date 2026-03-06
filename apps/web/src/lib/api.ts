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
    cache: "no-store",
  });

  if (!res.ok) {
    const errorBody = await res.json();
    console.error("API Error:", errorBody);

    throw new Error(errorBody?.message || `API Error: ${res.status}`);
  }

  return res.json();
}