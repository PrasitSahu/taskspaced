"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export enum Role {
  client = "client",
  freelancer = "freelancer",
}

const ChooseRole = () => {
  const [value, setValue] = useState<Role>();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Signup</title>
      </Head>
      <div className="max-w-md min-w-[20rem] p-6 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=""></div>
        <div className="flex flex-col gap-3">
          <Image
            src={"/j.jpg"}
            width={260}
            height={260}
            alt="role"
            className="rounded-full border border-gray-400 object-cover md:w-56 md:h-56 w-44 h-44  self-center"
          />
          <Select onValueChange={(val: Role) => setValue(val)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your role"></SelectValue>
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectLabel>choose what you are</SelectLabel>
                <SelectItem value={Role.client}>client</SelectItem>
                <SelectItem value={Role.freelancer}>freelancer</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
          <Button
            variant={"default"}
            disabled={!value}
            onClick={() => {
              if (value) {
                router.push(`/auth/signup/${value}`);
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChooseRole;
