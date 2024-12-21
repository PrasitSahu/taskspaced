"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  onClick: () => void;
  label: string;
  btnLabel: string;
}

export default function Sonner({ title, onClick, label, btnLabel }: Props) {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast(`${label}`, {
          action: {
            label: `${btnLabel}`,
            onClick: () => onClick(),
          },
        })
      }
    >
      Show Toast
    </Button>
  );
}
