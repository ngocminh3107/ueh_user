
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
    <div className={`p-5 flex row 2xl:gap-[172px] w-full  ${plus.className}`  }>
        <div className="">
            <NavDashboard />
        </div>
      {children}
    </div>
  )
}