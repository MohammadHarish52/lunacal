import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import { HiMenu, HiX } from "react-icons/hi";
import MobileNavbar from "./MobileNavbar";
import DesktopTabs from "./DesktopTabs";

export function ProfileCard() {
  const [activeTab, setActiveTab] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cardStyle = "bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066]";

  return (
    <Card className={`${cardStyle} relative`}>
      <div className="absolute left-4 top-0 bottom-0 w-[25px] h-[160px] flex flex-col items-center justify-between">
        <div className="w-6 h-6 flex items-center justify-center mt-4">
          <img src="/question.png" alt="Question mark" className="w-6 h-6" />
        </div>
        <div className="w-6 h-[30.69px] flex items-center justify-center mb-4">
          <img
            src="/grid.png"
            alt="Grid"
            className="w-6 h-[30.69px] rounded-tl-[2.33px]"
          />
        </div>
      </div>
      <div className="absolute w-[8px] h-[64px] right-4 top-[90px] rounded-lg bg-gradient-to-b from-[#888989] to-[#4A4E54] shadow-[4px_4px_4.9px_0px_rgba(0,0,0,0.25)]"></div>
      <CardContent className="p-4 md:p-6 ml-10">
        <div className="lg:hidden mb-4 flex justify-end">
          <Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </Button>
        </div>
        <MobileNavbar
          isOpen={isMenuOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full mb-16 overflow-visible"
        >
          <DesktopTabs />
          <TabsContent
            value="about"
            className="font-plus-jakarta-sans text-[20px] font-normal leading-[25.2px] text-left text-[#969696]"
          >
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <br />
            <br />I was born and raised in Albany, NY & have been living in
            Santa Carla for the past 10 years my wife Tiffany and my 4 year old
            twin daughters - Emma and Ella. Both of them are just starting
            school so my calender is usually blocked between 9-10 AM. This is
            a...
          </TabsContent>
          <TabsContent
            value="experiences"
            className="font-plus-jakarta-sans text-[16px] sm:text-[20px] font-normal leading-[22px] sm:leading-[25.2px] text-left text-[#969696]"
          >
            As a frontend developer, I've built responsive interfaces using
            HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS.
            I enjoy transforming designs into functional web apps while ensuring
            performance and compatibility. Staying updated with frameworks like
            Remix and leveraging TypeScript helps me deliver seamless user
            experiences efficiently.
          </TabsContent>
          <TabsContent
            value="recommended"
            className="font-plus-jakarta-sans text-[16px] sm:text-[20px] font-normal leading-[22px] sm:leading-[25.2px] text-left text-[#969696]"
          >
            If you're looking for something exciting and immersive, I highly
            recommend watching **One Piece** and **Berserk**. **One Piece**
            offers an incredible, long-running adventure filled with rich
            characters, world-building, and an ever-evolving storyline. It's
            perfect if you love grand journeys and thrilling battles.
            **Berserk**, on the other hand, is darker, with a gripping, mature
            narrative and stunning art, blending epic fantasy with deep
            emotional themes. Both are unforgettable experiences for anime fans!
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
