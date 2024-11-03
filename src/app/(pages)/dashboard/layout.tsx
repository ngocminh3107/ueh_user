
import { Plus_Jakarta_Sans } from "next/font/google";
import NavDashboard from "@/components/navAdmin"
export const plus = Plus_Jakarta_Sans({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});


export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div className={`p-5 flex row bg-[#F0F5F9]  ${plus.className}`}>
            <div className="">
                <NavDashboard />
            </div>
            <div className="w-full px-[172px]">
                {children}
            </div>

        </div>
    )
}