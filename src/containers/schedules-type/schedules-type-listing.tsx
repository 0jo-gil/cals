import {EditScheduleDialog} from "@/components/dialog/edit-schedule-dialog";

const dummy = [
    {id: 1, title: '회의', description: '회의입니다.'},
    {id: 2, title: '휴가', description: '휴가입니다.'},
    {id: 3, title: '출장', description: '출장입니다.'},
]

export const ScheduleTypeList = ({data}: { data: any }) => {
    return (
        <div className="bg-default border-subtle mb-16 flex overflow-hidden rounded-md border">
            <ul className="divide-subtle !static w-full divide-y" data-testid="event-types">
                {
                    data?.map((item: any) => (
                        <li key={item.id}>
                            <div className="hover:bg-muted flex w-full items-center justify-between transition">
                                <div
                                    className="group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export const SchedulesTypeListing = () => {
    return (
        <div>
            <div className={'flex w-full justify-between'}>
                <h1>스케쥴 타입 설정</h1>
                <EditScheduleDialog/>
            </div>
            <ScheduleTypeList data={dummy}/>
        </div>
    )
}
