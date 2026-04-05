const API_URL = process.env.NEXT_PUBLIC_API_URL!;


export async function api<T>(
    path: string,
    options?: RequestInit
): Promise<T> {
    
    const res = await fetch(
        `${API_URL}${path}`, 
        {
            credentials: "include",

            headers: {
                "Content-Type": "application/json",
                ...options?.headers,
            },

            ...options,
        },
    );

    const result = await res.json();

    if (!res.ok || result.success === false) {
      throw new Error(result.message || `API Error: ${res.status}`);
    }

    return result.data;
}

// todo: use same of types for error response in backend and forntend make a package