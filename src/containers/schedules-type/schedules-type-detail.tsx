'use client';

import { NavigationTabs } from "@/components/navigation/tabs/navigation-tabs"

const TAB = [
    { name: '스케쥴 설정', href: 'type=setting' },
    { name: '시간', href: 'type=time' },
]

export const SchedulesTypeDetail = () => {
    return (
        <div>
            <NavigationTabs tabList={TAB} />
        </div>
    )
}