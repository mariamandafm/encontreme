"use client"
import { useSidebar } from "../contexts/SideBarContext"

export default function OpacityBackgroundButton() {
    const { sideBar, setSideBarValue } = useSidebar();

    if (!sideBar) {
        return null;
    }

    return (
        <button onClick={() => setSideBarValue(!sideBar)} className="w-full h-full bg-black opacity-20 z-[10] absolute"></button>
    )
}