"use client";
import { useState } from "react";
import PreviewBox from "./PreviewBox";
import { hexToRgb, rgbToHex } from "@/utils/HexToRGB";
import { copyToClipboard } from "@/utils/CopyToClipBoard";

export const BoxShadowGenerator = () => {
  const [horizontalLength, setHorizontalLength] = useState(10);
  const [verticalLength, setVerticalLength] = useState(10);
  const [blurRadius, setBlurRadius] = useState(5);
  const [spreadRadius, setSpreadRadius] = useState(0);
  const [shadowColor, setShadowColor] = useState([0, 0, 0]);
  const [shadowOpacity, setShadowOpacity] = useState(0.75);
  const [isInset, setIsInset] = useState(false);

  const [copied, setCopied] = useState(false);

  const boxShadow = `${horizontalLength}px ${verticalLength}px ${blurRadius}px ${spreadRadius}px rgba(${
    shadowColor[0]
  }, ${shadowColor[1]}, ${shadowColor[2]}
  , ${shadowOpacity})${isInset ? " inset" : ""}`;

  const handleCopy = async () => {
    const success = await copyToClipboard(boxShadow);
    setCopied(success);
    if (success) {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  const toggleInset = () => setIsInset(!isInset);

  return (
    <div className="flex gap-4">
      <div className="flex-grow-0 flex-shrink-0 w-1/3">
        <div className="border-b-4 border-l border-r border-gray-300">
          <h4 className="text-18px bg-[#158cba] text-white py-[10px] px-[15px]">
            Box Shadow Options
          </h4>
          <div className="p-[7px] text-[#555555]">
            <div className="border border-grey-30 p-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Horizontal Shadow Length
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {horizontalLength}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="-200"
                  max="200"
                  value={horizontalLength}
                  onChange={(e) =>
                    setHorizontalLength(parseInt(e.target.value))
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
                    {verticalLength}px
                  </label>
                </div>
                <input
                  type="range"
                  id="verticalLength"
                  min="-200"
                  max="200"
                  value={verticalLength}
                  onChange={(e) => setVerticalLength(parseInt(e.target.value))}
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
                <div className="flex justify-between">
                  <label htmlFor="spreadRadius" className="block mb-2">
                    Spread Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {spreadRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="spreadRadius"
                  min="-200"
                  max="200"
                  value={spreadRadius}
                  onChange={(e) => setSpreadRadius(parseInt(e.target.value))}
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

              <div className="mb-4 flex items-center">
                <button
                  type="button"
                  onClick={toggleInset}
                  className={`${
                    !isInset
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } px-4 py-2 rounded-md`}
                >
                  {!isInset ? "Inset" : "Outset"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-2/3 flex items-center justify-center flex-col">
        <PreviewBox boxShadow={boxShadow} />
        <div className="w-[700px] max-w-full mt-[100px] mb-[10px] bg-[#eee] p-[15px] text-[20px] rounded-8 min-h-[60px] ">
          <div>box-shadow: {boxShadow};</div>
          <div>-webkit-box-shadow: {boxShadow};</div>
          <div>-moz-box-shadow: {boxShadow};</div>
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
