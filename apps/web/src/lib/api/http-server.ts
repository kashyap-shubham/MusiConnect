
export async function serverApi<T>(
    path: string,
    cookie: string,
    options?: RequestInit
): Promise<T> {

    const res = await fetch(
        `${process.env.API_URL}${path}`,
        {
            cache: "no-store",
            headers: {
                cookie,
                "Content-Type": "application/json",
                ...(options?.headers || {}),
            },
            ...options,
        }
    )

    // handle empty response
    if (res.status === 204) {
        return null as T;
    }

    let result: any = null;

    try {
        result = await res.json();
    } catch {
        result = null;
    }

    // unified error handling
    if (!res.ok || result?.success === false) {
        throw new Error(result?.message || result?.error);
    }

    return result.data
}