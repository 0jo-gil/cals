import {cn} from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

function PageLayout(
    {children, className}: Props
) {
    return (
        <div className={cn(`w-full md:p-0 ${className}`)}>
            {children}
        </div>
    )
}

export default PageLayout;
