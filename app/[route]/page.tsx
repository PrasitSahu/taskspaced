import Header from "./Header";
import Jobpage from "./jobPage";

export enum Route {
  jobs = "find-jobs",
  contracts = "contracts",
  chats = "chats",
}

interface Props {
  params: { route: Route };
}

const HomePage = ({ params: { route } }: Props) => {
  return (
    <>
      <Header route={route}></Header>
      {route === Route.jobs && <Jobpage />}
    </>
  );
};

export default HomePage;
