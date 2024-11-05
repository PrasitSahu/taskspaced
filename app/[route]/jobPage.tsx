import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Jobpage = () => {
  return (
    <div className="flex flex-row px-36 gap-10 mt-10">
      <aside className="flex-1 bg-primary-foreground rounded-xl p-8 flex flex-col gap-4 border light:border-foreground">
        <p className="font-bold text-2xl">Filter</p>
        <div className="w-full flex flex-col gap-3">
          <p className="font-semibold text-xl">Location</p>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select your Location"></SelectValue>
            </SelectTrigger>
            <SelectGroup>
              <SelectContent>
                <SelectLabel>choose your location</SelectLabel>
                <SelectItem value={"India"}>India</SelectItem>
                <SelectItem value={"USA"}>USA</SelectItem>
              </SelectContent>
            </SelectGroup>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-3">
          <p className="font-semibold text-xl">Availability</p>
          <div className="flex flex-row gap-2 items-center">
            <Input type="checkbox" className="w-4" id="freelance" />
            <label htmlFor="freelance">Freelance / Contract</label>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Input type="checkbox" className="w-4" id="fulltime" />
            <label htmlFor="fulltime">Fulltime</label>
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-semibold text-xl">Salary range</p>
            <Input type="range" />
          </div>
          <div className="w-full flex flex-col gap-3">
            <p className="font-semibold text-xl">Specialities</p>
            <div className="flex flex-row gap-2 items-center">
              <Input type="checkbox" className="w-4" id="frontend" />
              <label htmlFor="frontend">Frontend</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Input type="checkbox" className="w-4" id="backend" />
              <label htmlFor="backend">Backend</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Input type="checkbox" className="w-4" id="database" />
              <label htmlFor="database">Database Engineer</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Input type="checkbox" className="w-4" id="fullstack" />
              <label htmlFor="fullstack">Fullstack</label>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex flex-col flex-[2.5]">
        <div className="flex items-center p-4 bg-background rounded-lg shadow-md dark:shadow-primary-foreground gap-3">
          <Input
            type="search"
            placeholder="Search by Title, Company or jobs keyword..."
            className="flex-grow p-5 border bg-primary-foreground rounded-l-lg focus:outline-none"
          />
          <Button className="px-5 py-5">Find</Button>
        </div>
        <div className="cards"></div>
      </div>
    </div>
  );
};

export default Jobpage;
