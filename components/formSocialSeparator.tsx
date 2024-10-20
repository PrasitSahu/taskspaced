import { Separator } from "@radix-ui/react-separator";

const FormSocialSeparator = () => {
  return (
    <div className="flex flex-row items-center gap-3">
      <Separator
        orientation="horizontal"
        className="w-auto h-[0.1px] bg-foreground flex-[1]"
      />
      <p className="text-xs">OR CONTINUE WITH</p>
      <Separator
        orientation="horizontal"
        className="w-auto h-[0.1px] bg-foreground flex-[1]"
      />
    </div>
  );
};

export default FormSocialSeparator;
