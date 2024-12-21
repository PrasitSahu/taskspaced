import { AppSidebar } from "@/components/app-sidebar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Metadata } from "next";
const metadata: Metadata = {
  title: "home",
};

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="absolute right-8 top-4 flex flex-row">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
