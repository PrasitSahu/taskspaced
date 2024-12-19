import { metadata } from "@/app/layout";
import FormSocialSeparator from "@/components/formSocialSeparator";
import SocialLogins from "@/components/socialLogins";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import { Role } from "../page";
import EmailSection from "./emailSection";

interface Props {
  params: { role: Role };
}

const SignupPage = ({ params: { role } }: Props) => {
  metadata.title = `Signup | ${role}`;
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-center max-w-sm min-w-[18rem]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl">Create an Account</h1>
        <p>Enter your credentials below to create an account</p>
      </div>
        <EmailSection />
      <FormSocialSeparator />
      <SocialLogins
        providers={[
          {
            name: "google",
            element: <SiGoogle />,
          },
        ]}
      />
      <p>
        By clicking continue, you agree to our Terms of Service and Privacy
        Policy.
      </p>
    </div>
  );
};

export default SignupPage;
