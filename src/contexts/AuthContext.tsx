"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextType {
    userId: number | null;
    setUserId: (id: number | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        if (storedUserId) {
            setUserId(Number(storedUserId));
        }
    }, []);

    useEffect(() => {
        if (userId !== null) {
            localStorage.setItem("userId", String(userId));
        } else {
            localStorage.removeItem("userId");
        }
    }, [userId]);

    const logout = () => {
        setUserId(null);
        localStorage.removeItem("userId");
    };

    return (
        <AuthContext.Provider value={{ userId, setUserId, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
