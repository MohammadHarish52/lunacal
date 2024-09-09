import { Button } from "./ui/button";

interface MobileNavbarProps {
  isOpen: boolean;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function MobileNavbar({
  isOpen,
  activeTab,
  setActiveTab,
  setIsMenuOpen,
}: MobileNavbarProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden mb-4 flex flex-col space-y-2 bg-black p-4 rounded-lg">
      <Button
        variant="ghost"
        onClick={() => {
          setActiveTab("about");
          setIsMenuOpen(false);
        }}
        className={
          activeTab === "about" ? "bg-[rgba(40,41,47,1)] text-white" : ""
        }
      >
        About Me
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          setActiveTab("experiences");
          setIsMenuOpen(false);
        }}
        className={
          activeTab === "experiences" ? "bg-[rgba(40,41,47,1)] text-white" : ""
        }
      >
        Experiences
      </Button>
      <Button
        variant="ghost"
        onClick={() => {
          setActiveTab("recommended");
          setIsMenuOpen(false);
        }}
        className={
          activeTab === "recommended" ? "bg-[rgba(40,41,47,1)] text-white" : ""
        }
      >
        Recommended
      </Button>
    </div>
  );
}
