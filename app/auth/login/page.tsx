"use client";

import FormSocialSeparator from "@/components/formSocialSeparator";
import SocialLogins from "@/components/socialLogins";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import EmailSection from "./emailSection";
import { useState } from "react";

const LoginPage = () => {
  const [view, setView] = useState<boolean>(true);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-6 text-center max-w-sm min-w-[18rem]">
      <div className={`${view ? "flex" : "hidden"} flex-col gap-2`}>
        <h1 className="text-3xl">SignIn</h1>
        <p>Enter your email below to signin to your account</p>
      </div>
      <EmailSection onChange={(view) => setView(view)} />
      <div className={`${view ? "flex" : "hidden"} flex-col space-y-4`}>
        <FormSocialSeparator />
        <SocialLogins
          providers={[
            {
              name: "google",
              element: <SiGoogle />,
            },
          ]}
        />
        <div
          className={`${
            view ? "flex" : "hidden"
          } md:flex-row flex-col gap-2 justify-center`}
        >
          <p>Don&apos;t have one already?</p>
          <Link href={"/auth/signup"} className="text-blue-500">
            Create new
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
