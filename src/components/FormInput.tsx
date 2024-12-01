import { InputHTMLAttributes, ReactNode } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    children: ReactNode;
}

export default function Input({ children, ...props }: FormInputProps) {
    return (
        <>
            <label className="font-medium">{children}</label>
            <input className="outline-black mt-2 w-full h-11 bg-box rounded-md border-0 p-3 text-gray-900 focus:ring-1 focus:ring-inset focus:ring-secondaryBlue" {...props} />
        </>
    )
}