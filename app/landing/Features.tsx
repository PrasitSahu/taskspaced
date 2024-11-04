import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section>
      <div className="container px-5 py-16 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font">
            Master Cleanse Reliac Heirloom
          </h1>
        </div>

        <div className="flex flex-wrap">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </section>
  );
};

export default Features;
