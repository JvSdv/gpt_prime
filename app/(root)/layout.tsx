import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

const RootLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div className="h-full">
        <Navbar />
        <div className="hidden md:flex mt-16 flex-col fixed inset-y-0">
          <Sidebar />
        </div>
        <main className="md:pl-64 pt-16">
          {children}
        </main>
      </div>
    )
  }
 
export default RootLayout;
