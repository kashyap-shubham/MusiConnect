export async function api<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      ...options,

      credentials: "include", // IMPORTANT

      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    }
  );

  const result = await res.json();

  if (!res.ok || result.success === false) {
    throw new Error(result.message || `API Error: ${res.status}`);
  }

  return result.data;
}