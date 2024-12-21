"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
  onChange?: (view: boolean) => void;
}

const EmailSection = ({ className, onChange }: Props) => {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const [isEmailView, setEmailView] = useState<boolean>(true);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [emailValidity, setEmailValidity] = useState<boolean>(false);
  const [passwordValidity, setPasswordValidity] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = await axios.post(`${location.origin}/auth`, {
      email,
      password,
    });

    if (res.status === 202) {
      router.push("/home");
    }
  }

  useEffect(() => {
    onChange?.(isEmailView);
  }, [isEmailView]);

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)}>
      <div className={`${isEmailView ? "flex" : "hidden"} flex-col gap-3`}>
        <Input
          type="email"
          className=""
          placeholder="username@example.com"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.currentTarget.value);
            setEmailValidity(e.currentTarget.validity.valid);
          }}
          pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
        />
        <Button
          onClick={() => {
            setEmailView(!isEmailView);
          }}
          disabled={!emailValidity}
          type="button"
        >
          Continue with Email
        </Button>
      </div>
      <div
        className={`password-section ${
          !isEmailView ? "flex" : "hidden"
        } flex-col gap-3 ${className}`}
      >
        <div className="flex flex-row -space-x-8 items-center">
          <Input
            type={show ? "text" : "password"}
            minLength={8}
            maxLength={32}
            placeholder="Enter a password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.currentTarget.value);
              setPasswordValidity(e.currentTarget.validity.valid);
            }}
          />
          <Button
            variant={"ghost"}
            className="p-0 h-auto hover:bg-transparent"
            onClick={() => setShow(!show)}
            type="button"
          >
            {show ? <EyeIcon /> : <EyeClosedIcon />}
          </Button>
        </div>

        <Button type="submit" disabled={!passwordValidity}>
          Sign In
        </Button>
        <Button
          variant={"outline"}
          onClick={() => {
            setEmailView(!isEmailView);
          }}
        >
          &lt; Go Back
        </Button>
      </div>
    </form>
  );
};

export default EmailSection;
