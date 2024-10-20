import ThemeToggle from "@/components/themeToogle";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <div className="absolute top-[2rem] right-[2rem]">
        <ThemeToggle />
      </div>
      {children}
    </>
  );
};

export default AuthLayout;
