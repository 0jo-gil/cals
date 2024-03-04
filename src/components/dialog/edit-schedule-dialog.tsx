'use client'

import { cn } from "@/lib/utils"
import { Editor } from "../editor"
import { Input } from "../form/inputs"
import { Dialog, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "../ui/dialog"

export const EditScheduleDialog = () => {
    return (
        <Dialog>
            <DialogTrigger>Edit</DialogTrigger>

            <DialogContent>
                <DialogTitle>Edit Schedule</DialogTitle>

                <DialogDescription>
                    <div className={cn(cn(`grid w-full gap-5`))}>
                        <Input name="title" label='제목' placeholder="회의" />
                        
                        <Editor
                            height="200px"
                            excludedToolbarItems={["blockType"]}
                            placeholder="텍스트"
                        />
                    </div>
                </DialogDescription>
            </DialogContent>
        </Dialog>
    )
}