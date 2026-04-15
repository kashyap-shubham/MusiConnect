export async function api<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const res = await fetch(

    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      ...options,
    }
  )
  
  /*
  handle empty response (204)
  */
  if (res.status === 204) {

    return null as T

  }

  const result = await res.json()


  /*
  error handling
  */
  if (!res.ok || result.success === false) {
    throw new Error(
      result?.message
      || result?.error
      || `API Error: ${res.status}`

    )
  }

  return result.data

}