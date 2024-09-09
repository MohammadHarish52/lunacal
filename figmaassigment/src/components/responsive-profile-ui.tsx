import { ProfileCard } from "./ProfileCard";
import { GalleryCard } from "./GalleryCard";

export function ResponsiveProfileUi() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-300 bg-gradient-to-b from-[#373E44] via-[#191B1F] to-[#191B1F] shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)] p-4">
      <div className="flex flex-col lg:flex-row">
        <div className="hidden lg:block lg:w-1/2 bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066] relative mr-4 rounded-2xl border border-white shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md bg-opacity-20 bg-white/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white animate-jitter">
              Empty div yo
            </span>
          </div>
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <ProfileCard />
          <div className="w-full sm:w-[612px] h-[4px] mx-auto rounded-tl-[2.46px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]"></div>
          </div>
          <GalleryCard />
          <div className="w-full sm:w-[612px] h-[4px] mx-auto rounded-tl-[2.46px] bg-gradient-to-b from-[rgba(40,40,40,0.1)] to-[rgba(248,248,248,0.1)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.33)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
