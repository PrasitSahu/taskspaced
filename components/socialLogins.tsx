import { Button } from "./ui/button";

interface Provider {
  name: string;
  element: React.ReactNode;
}

interface Props {
  providers: Provider[];
}

const SocialLogins = ({ providers }: Props) => {
  return (
    <div className="social_logins flex flex-col">
      {providers.map((provider, index) => (
        <Button variant={"outline"} key={index}>
          {provider.element} Continue with{" "}
          {provider.name.charAt(0).toUpperCase() + provider.name.substring(1)}
        </Button>
      ))}
    </div>
  );
};

export default SocialLogins;
