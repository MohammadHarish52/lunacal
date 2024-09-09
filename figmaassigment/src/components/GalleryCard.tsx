import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import imageFile from "../assets/image3.png";

export function GalleryCard() {
  const [images, setImages] = useState([imageFile, imageFile, imageFile]);

  const cardStyle = "bg-[#363C43] shadow-[5.67px_5.67px_3.78px_0px_#00000066]";

  const addImage = () => {
    setImages([...images, imageFile]);
  };

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
      <CardContent className="p-4 md:p-6 ml-10">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-16 relative">
          <h3 className="w-[149px] h-[62px] mb-4 sm:mb-0 bg-[#171717] rounded-[20px] shadow-[inset_0px_4px_10px_2px_rgba(0,0,0,0.25)] flex items-center justify-center text-lg font-semibold text-white">
            Gallery
          </h3>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-[131.32px] h-[46px] bg-[#FFFFFF08] text-gray-300 hover:bg-[#363940] rounded-[104px] rotate-180 shadow-[0px_3.26px_3.26px_0px_#FFFFFF26_inset,0px_0px_48.91px_0px_#FFFFFF0D_inset,9px_10px_7.1px_0px_#00000066,-0.5px_-0.5px_6.9px_0px_#FFFFFF40]"
              onClick={addImage}
            >
              <span className="rotate-180">+ ADD IMAGE</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] text-gray-300 hover:bg-[#363940] rounded-full"
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                boxShadow:
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
              }}
            >
              <HiArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-[45px] h-[45px] text-gray-300 hover:bg-[#363940] rounded-full"
              style={{
                background:
                  "linear-gradient(139.14deg, #303439 12.4%, #161718 94.96%)",
                boxShadow:
                  "4px 5px 30px 5px #101213, -5px -3px 30px -10px #96BEE7",
              }}
            >
              <HiArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-square bg-gray-700 rounded-2xl overflow-hidden"
            >
              <img
                src={img}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
