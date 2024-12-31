"use client"
import { Navbar } from "@/components/shared/navbar/navbar";
import { useProtectedLayout } from "@/hooks/use-protected-layout";

export default function ProtectedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const {
        isValidating
    } = useProtectedLayout()

    if(isValidating) return;

    return (
        <main
        className="flex flex-col"
        >
            <Navbar />
            {children}
        </main>
    );
}
