import { metadata } from "@/app/layout";
import FormSocialSeparator from "@/components/formSocialSeparator";
import SocialLogins from "@/components/socialLogins";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import Link from "next/link";

const LoginPage = () => {
  metadata.title = "Login";
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-center max-w-sm min-w-[18rem]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">SignIn</h1>
        <p>Enter your email below to signin to your account</p>
      </div>
      <form action="">
        <div className="form_container">
          <div className="flex flex-col gap-3">
            <Input type="email" placeholder="username@example.com" />
            <Button>Continue with Email</Button>
          </div>
        </div>
      </form>
      <FormSocialSeparator />
      <SocialLogins
        providers={[
          {
            name: "google",
            element: <SiGoogle />,
          },
        ]}
      />
      <div className="flex md:flex-row flex-col gap-2 justify-center">
        <p>Don&apos;t have one already?</p>
        <Link href={"/auth/signup"} className="text-blue-500">
          Create new
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
