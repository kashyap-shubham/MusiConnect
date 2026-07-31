import Navbar from "@/components/landing/Navbar";

export default async function LandingLayout({
    children
}: {
    children: React.ReactNode;
}) {
    
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}