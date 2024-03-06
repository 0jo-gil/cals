import {NavigationTabs} from "@/components/navigation/tabs/navigation-tabs";

const TAB = [
    {name: 'upcoming', href: '/reservations?type=upcoming'},
    {name: 'unconfirmed', href: '/reservations?type=unconfirmed'},
    {name: 'past', href: '/reservations?type=past'},
    {name: 'canceled', href: '/reservations?type=canceled'},
]

export const ReservationsListing = () => {
    return (
        <div>
            <NavigationTabs tabList={TAB}/>
        </div>
    )
}
