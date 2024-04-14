"use client";
import { useState } from "react";
import { hexToRgb, rgbToHex } from "@/utils/HexToRGB";
import { copyToClipboard } from "@/utils/CopyToClipBoard";
import PreviewText from "./PreviewText";

export const TextShadowGenerator = () => {
  const [horizontalShadowLength, setHorizontalShadowLength] = useState(10);
  const [verticalShadowLength, setVerticalShadowLength] = useState(10);
  const [blurRadius, setBlurRadius] = useState(5);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState([0, 0, 0]);
  const [shadowOpacity, setShadowOpacity] = useState(0.75);
  const [copied, setCopied] = useState(false);

  const textShadow = `rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, ${shadowOpacity}) ${horizontalShadowLength}px ${verticalShadowLength}px ${blurRadius}px`;

  const handleCopy = async () => {
    const success = await copyToClipboard(textShadow);
    setCopied(success);
    if (success) {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className="flex gap-4">
      <div className="flex-grow-0 flex-shrink-0 w-1/3">
        <div className="border-b-4 border-l border-r border-gray-300">
          <h4 className="text-18px bg-[#158cba] text-white py-[10px] px-[15px]">
            Text Shadow Options
          </h4>
          <div className="p-[7px] text-[#555555]">
            <div className="border border-grey-30 p-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Horizontal Shadow Length
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {horizontalShadowLength}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalShadowLength"
                  min="-200"
                  max="200"
                  value={horizontalShadowLength}
                  onChange={(e) =>
                    setHorizontalShadowLength(parseInt(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="verticalLength" className="block mb-2">
                    Vertical Shadow Length
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {verticalShadowLength}px
                  </label>
                </div>
                <input
                  type="range"
                  id="verticalLength"
                  min="-200"
                  max="200"
                  value={verticalShadowLength}
                  onChange={(e) =>
                    setVerticalShadowLength(parseInt(e.target.value))
                  }
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="blurRadius" className="block mb-2">
                    Blur Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {blurRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="blurRadius"
                  min="0"
                  max="400"
                  value={blurRadius}
                  onChange={(e) => setBlurRadius(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="shadowColor" className="block mb-2">
                  Shadow Color
                </label>
                <div className="flex flex-row-reverse items-center gap-2">
                  <input
                    type="color"
                    id="shadowColor"
                    value={rgbToHex(shadowColor)}
                    onChange={(e) => setShadowColor(hexToRgb(e.target.value))}
                    className="max-w-[40%] h-10 border-solid border-[5px] border-gray-300 rounded-md"
                  />
                  <label>
                    rgb: ({shadowColor[0]} {shadowColor[1]} {shadowColor[2]})
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="shadowOpacity" className="block mb-2">
                    Shadow Color Opacity
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {shadowOpacity}
                  </label>
                </div>

                <input
                  type="range"
                  id="shadowOpacity"
                  min="0"
                  max="1"
                  step="0.01"
                  value={shadowOpacity}
                  onChange={(e) => setShadowOpacity(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-2/3 flex items-center justify-center flex-col">
        <PreviewText textShadow={textShadow} />
        <div className="w-[700px] max-w-full mt-[100px] mb-[10px] bg-[#eee] p-[15px] text-[20px] rounded-8 min-h-[60px] ">
          <div>text-shadow: {textShadow};</div>
        </div>
        <button
          className="text-[#ffffff] bg-[#75caeb] p-[9px] rounded-[10px]"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};
