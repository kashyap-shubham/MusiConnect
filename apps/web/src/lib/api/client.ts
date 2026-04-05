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
        }
    )

    if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
}

// todo: use same of types for error response in backend and forntend make a package