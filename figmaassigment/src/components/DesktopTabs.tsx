import { TabsList, TabsTrigger } from "./ui/tabs";

export default function DesktopTabs() {
  return (
    <TabsList className="hidden lg:flex mb-8 p-2 overflow-visible relative justify-center sm:flex-nowrap bg-[#171717]">
      <TabsTrigger
        value="about"
        className="flex-1 min-w-[120px] mb-2 sm:mb-0 data-[state=active]:bg-[rgba(40,41,47,1)] data-[state=active]:text-white data-[state=active]:shadow-[13.49px_16.87px_67.47px_8.43px_#000000,-8.43px_-16.87px_50.6px_-16.87px_#000000] data-[state=active]:z-10"
      >
        About Me
      </TabsTrigger>
      <TabsTrigger
        value="experiences"
        className="flex-1 min-w-[120px] mb-2 sm:mb-0 data-[state=active]:bg-[rgba(40,41,47,1)] data-[state=active]:text-white data-[state=active]:shadow-[13.49px_16.87px_67.47px_8.43px_#000000,-8.43px_-16.87px_50.6px_-16.87px_#000000] data-[state=active]:z-10"
      >
        Experiences
      </TabsTrigger>
      <TabsTrigger
        value="recommended"
        className="flex-1 data-[state=active]:bg-[rgba(40,41,47,1)] data-[state=active]:text-white data-[state=active]:shadow-[13.49px_16.87px_67.47px_8.43px_#000000,-8.43px_-16.87px_50.6px_-16.87px_#000000] data-[state=active]:z-10"
      >
        Recommended
      </TabsTrigger>
    </TabsList>
  );
}
