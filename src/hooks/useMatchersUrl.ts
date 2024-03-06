'use client';

import {usePathname} from "next/navigation";

export const useMatchersUrl = (url: string) => {
    const pathname = usePathname() as null | string;
    const searchParams = new URLSearchParams(window.location.search);
    const query = searchParams.toString();

    let pathnameWithQuery;

    if (query) {
        pathnameWithQuery = `${pathname}?${query}`;
    } else {
        pathnameWithQuery = pathname;
    }

    return pathnameWithQuery ? pathnameWithQuery.includes(url) : false;
}
