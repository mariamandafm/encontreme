import { ReactNode, TextareaHTMLAttributes } from "react";

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    children: ReactNode;
}

export default function TextArea({ children, ...props }: FormTextAreaProps) {
    return (
        <>
            <label className="font-medium">{children}</label>
            <textarea className="mt-2 w-full h-28 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" {...props} />
        </>
    )
}