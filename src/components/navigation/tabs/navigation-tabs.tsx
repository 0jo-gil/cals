import Link from "next/link";
import { useMatchersUrl } from "@/hooks";
import { usePathname } from "next/navigation";

interface Props {
    tabList: Record<string, any>[];
}

const NavigationTabItem = ({ tab }: { tab: Record<string, any> }) => {
    const pathname = usePathname() as null | string;
    return (
        <Link
            className={`${useMatchersUrl(tab.href) ? "bg-emphasis text-emphasis" : "hover:bg-subtle hover:text-emphasis text-default"}`}
            href={`${pathname}?${tab.href}`}>
            {tab.icon && <tab.icon />}
            <span>{tab.name}</span>
        </Link>
    )
}

export const NavigationTabs = ({ tabList }: Props) => {
    return (
        <nav>
            {
                tabList?.map((tab, index) => (
                    <NavigationTabItem key={index} tab={tab} />
                ))
            }
        </nav>
    )
}
