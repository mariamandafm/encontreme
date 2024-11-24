import { ReactNode, SelectHTMLAttributes } from "react";

interface FormInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
    children: ReactNode;
    title: string;
}

export default function Select({ children, title, ...props }: FormInputProps) {
    return (
        <>
            <label className="font-medium">{title}</label>
            <div className="w-full mt-2">
                <select className="w-full h-11 bg-box rounded-md border-0 px-3 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-secondaryBlue" {...props}>
                    {children}
                </select>
            </div>
        </>
    )
}