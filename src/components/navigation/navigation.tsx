import Link from "next/link";
import {PropsWithChildren} from "react";

export type NavigationItemType = {
    name: string;
    href: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    child?: NavigationItemType[];
}

const NAVIGATION_LIST: NavigationItemType[] = [
    {
        name: '스케쥴 타입',
        href: '/schedules-type',
    },
    {
        name: '예약',
        href: '/reservations',
    },
    {
        name: '팀',
        href: '/teams',
    }
];

const NavigationItem: React.FC<{
    item: NavigationItemType;
}> = ({
          item
      }) => {
    return (
        <>
            <Link
                href={item.href}
                className="todesktop:py-[7px] text-default group flex items-center rounded-md px-2 py-1.5 text-sm font-medium transition"
            >
                {item.icon && <item.icon/>}
                <span>{item.name}</span>
            </Link>
        </>
    )

}

export const Navigation = () => {
    return (
        <Sidebar>
            <nav>
                {NAVIGATION_LIST.map((item, index) => (
                    <NavigationItem key={index} item={item}/>
                ))}
            </nav>
        </Sidebar>
    )
}

const Sidebar = ({children}: PropsWithChildren) => {

    return (
        <div className="relative h-dvh">
            <aside
                className="todesktop:!bg-transparent bg-muted border-muted fixed left-0 hidden h-full max-h-screen w-14 flex-col overflow-y-auto overflow-x-hidden border-r md:sticky md:flex lg:w-56 lg:px-3"
            >
                {children}
            </aside>
        </div>
    )
}
