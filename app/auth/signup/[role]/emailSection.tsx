"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { EyeClosedIcon, EyeIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Role } from "../page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";

interface Props {
  className?: string;
  onChange?: (view: boolean) => void;
  role: Role;
}

enum Gender {
  male = "male",
  famale = "female",
  others = "others",
}

const EmailSection = ({ className, onChange, role }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [isEmailView, setEmailView] = useState<boolean>(true);

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [cPassword, setCPassword] = useState<string>();
  const [emailValidity, setEmailValidity] = useState<boolean>(false);
  const [gender, setGender] = useState<Gender>();

  useEffect(() => {
    onChange?.(isEmailView);
  }, [isEmailView]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await axios.put(`${location.origin}/auth`, {
      email,
      password,
      role,
      gender,
    });

    if (res.status === 201) {
      redirect("/auth/login");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <Select onValueChange={(val: Gender) => setGender(val)} required>
          <SelectTrigger>
            <SelectValue placeholder="Select your gender"></SelectValue>
          </SelectTrigger>
          <SelectGroup>
            <SelectContent>
              <SelectItem value={Gender.male}>{Gender.male}</SelectItem>
              <SelectItem value={Gender.famale}>{Gender.famale}</SelectItem>
              <SelectItem value={Gender.others}>{Gender.others}</SelectItem>
            </SelectContent>
          </SelectGroup>
        </Select>
        <div className="flex flex-row -space-x-8 items-center">
          <Input
            type={show ? "text" : "password"}
            minLength={8}
            maxLength={32}
            placeholder="Enter a password"
            required
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            pattern="/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
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
        <Input
          type={show ? "text" : "password"}
          placeholder="Confirm your password"
          required
          value={cPassword}
          onChange={(e) => setCPassword(e.currentTarget.value)}
        />
        <Button
          type="submit"
          disabled={!cPassword || password !== cPassword || !gender}
        >
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
