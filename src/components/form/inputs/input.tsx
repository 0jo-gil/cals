import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"


type InputType = { 
    label?: string

} & React.InputHTMLAttributes<HTMLInputElement> 

export const InputLeading = ({
    label,
    ...props
}: InputType) => {
    return (
        <div className={cn(`grid w-full items-center gap-1.5`)}>
            {label && <Label htmlFor={props?.name}>{ label}</Label>}
            <Input {...props} />
        </div>
    )
}