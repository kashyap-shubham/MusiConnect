export interface PaginationQuery {
    page?: string;
    limit?: string;
}

export interface PaginationResult {
    skip: number;
    take: number;
    page: number;
    limit: number;
}


export function getPagination(
    query: PaginationQuery, 
    defaultLimit = 20,
    maxLimit = 50
): PaginationResult {

    const page = Math.max(Number(query.page) || 1, 1);

    const limit = Math.min(Math.max(Number(query.limit) || defaultLimit, 1), maxLimit);

    const skip = (page - 1) * limit;

    return {
        page,
        limit,
        skip,
        take: limit
    };
}