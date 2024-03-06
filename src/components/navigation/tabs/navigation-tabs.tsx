import Link from "next/link";

interface Props {
    tabList: Record<string, any>[];
}

const NavigationTabItem = ({tab}: { tab: Record<string, any> }) => {
    return (
        <Link href={tab.href}>
            {tab.icon && <tab.icon/>}
            <span>{tab.name}</span>
        </Link>
    )
}

export const NavigationTabs = ({tabList}: Props) => {
    return (
        <nav>
            {
                tabList?.map((tab, index) => (
                    <NavigationTabItem key={index} tab={tab}/>
                ))
            }
        </nav>
    )
}