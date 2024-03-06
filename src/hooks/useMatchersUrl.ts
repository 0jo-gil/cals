'use client';

import { useParams, usePathname, useSearchParams } from "next/navigation";

export const useMatchersUrl = (url: string) => {
    const pathname = usePathname() as null | string;
    const query = useSearchParams().toString();

    let pathnameWithQuery;

    if (query) {
        pathnameWithQuery = `${pathname}?${query}`;
    } else {
        pathnameWithQuery = pathname;
    }

    return pathnameWithQuery ? pathnameWithQuery.includes(url) : false;
}
