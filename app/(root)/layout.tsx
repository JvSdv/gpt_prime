import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import prismadb from "@/lib/prismadb";

const RootLayout = async({
    children,
  }: {
    children: React.ReactNode
  }) => {
    const categories = await prismadb.category.findMany();
    return (
      <div className="h-full">
        <Navbar categories={categories} />
        <div className="hidden md:flex mt-16 flex-col fixed inset-y-0">
          <Sidebar categories={categories} />
        </div>
        <main className="md:pl-64 pt-16">
          {children}
        </main>
      </div>
    )
  }
 
export default RootLayout;
