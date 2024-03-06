'use client';

import { NavigationTabs } from "@/components/navigation/tabs/navigation-tabs";

const TAB = [
    { name: 'upcoming', href: 'type=upcoming' },
    { name: 'unconfirmed', href: 'type=unconfirmed' },
    { name: 'past', href: 'type=past' },
    { name: 'canceled', href: 'type=canceled' },
]

export const ReservationsListing = () => {
    return (
        <div>
            <NavigationTabs tabList={TAB} />
        </div>
    )
}
