//import { Navbar } from "@components/Navbar";

const RootLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <div className="md:pl-20 pt-16 h-full">
        <main>
        {children}
        </main>
      </div>
    )
  }
 
export default RootLayout;
