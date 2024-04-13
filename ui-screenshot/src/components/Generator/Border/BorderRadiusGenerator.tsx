"use client";
import { useState } from "react";
import PreviewBox from "../Box/PreviewBox";
import { hexToRgb, rgbToHex } from "@/utils/HexToRGB";
import { copyToClipboard } from "@/utils/CopyToClipBoard";
import PreviewBorder from "./PreviewBorder";

export const BorderRadiusGenerator = () => {
  const [allCornerRadius, setAllCornerRadius] = useState(10);
  const [topLeftRadius, setTopLeftRadius] = useState(10);
  const [topRightRadius, setTopRightRadius] = useState(10);
  const [bottomRightRadius, setBottomRightRadius] = useState(10);
  const [bottomLeftRadius, setBottomLeftRadius] = useState(10);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderColor, setBorderColor] = useState("#804b44");
  const [bgColor, setBgColor] = useState("#158cba");
  const [isGenerateBG, setIsGenerateBG] = useState(false);

  const [copied, setCopied] = useState(false);

  const borderRadius = `${topLeftRadius}px ${topRightRadius}px ${bottomRightRadius}px ${bottomLeftRadius}px`;

  const border = `${borderWidth}px ${borderStyle} ${borderColor} `;
  const backgroundColor = bgColor;

  const handleCopy = async () => {
    const success = await copyToClipboard(
      borderRadius + border + backgroundColor
    );
    setCopied(success);
    if (success) {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  const toggleInset = () => setIsGenerateBG(!isGenerateBG);

  return (
    <div className="flex gap-4">
      <div className="flex-grow-0 flex-shrink-0 w-1/3">
        <div className="border-b-4 border-l border-r border-gray-300">
          <h4 className="text-18px bg-[#158cba] text-white py-[10px] px-[15px]">
            Border Radius Options
          </h4>
          <div className="p-[7px] text-[#555555]">
            <div className="border border-grey-30 p-4">
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    All Corner Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {allCornerRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={allCornerRadius}
                  onChange={(e) => {
                    setAllCornerRadius(parseInt(e.target.value));
                    setTopLeftRadius(parseInt(e.target.value));
                    setTopRightRadius(parseInt(e.target.value));
                    setBottomLeftRadius(parseInt(e.target.value));
                    setBottomRightRadius(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Top Left Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {topLeftRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={topLeftRadius}
                  onChange={(e) => {
                    setTopLeftRadius(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Top Right Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {topRightRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={topRightRadius}
                  onChange={(e) => {
                    setTopRightRadius(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Bottom Right Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {bottomRightRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={bottomRightRadius}
                  onChange={(e) => {
                    setBottomRightRadius(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Bottom Left Radius
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {bottomLeftRadius}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={bottomLeftRadius}
                  onChange={(e) => {
                    setBottomLeftRadius(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <div className="flex justify-between">
                  <label htmlFor="horizontalLength" className="block mb-2">
                    Border Width
                  </label>
                  <label className="text-[#158cba] font-bold text-base">
                    {borderWidth}px
                  </label>
                </div>

                <input
                  type="range"
                  id="horizontalLength"
                  min="0"
                  max="200"
                  value={borderWidth}
                  onChange={(e) => {
                    setBorderWidth(parseInt(e.target.value));
                  }}
                  className="w-full"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="shadowColor" className="block mb-2">
                  Border Color
                </label>
                <div className="flex flex-row-reverse items-center gap-2">
                  <input
                    type="color"
                    id="shadowColor"
                    value={borderColor}
                    onChange={(e) => setBorderColor(e.target.value)}
                    className="max-w-[40%] h-10 border-solid border-[5px] border-gray-300 rounded-md"
                  />
                  <label>{borderColor} </label>
                </div>
              </div>

              <div className="mb-4 flex justify-between">
                <label htmlFor="shadowColor" className="block mb-2">
                  Border Style
                </label>
                <select
                  value={borderStyle}
                  onChange={(e) => setBorderStyle(e.target.value)}
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="shadowColor" className="block mb-2">
                  Background Color
                </label>
                <div className="flex flex-row-reverse items-center gap-2">
                  <input
                    type="color"
                    id="shadowColor"
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    className="max-w-[40%] h-10 border-solid border-[5px] border-gray-300 rounded-md"
                  />
                  <label>{bgColor} </label>
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <button
                  type="button"
                  onClick={toggleInset}
                  className={`${
                    !isGenerateBG
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } px-4 py-2 rounded-md`}
                >
                  {!isGenerateBG ? "GenerateBG" : "NotGenerateBG"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-2/3 flex items-center justify-center flex-col">
        <PreviewBorder
          borderRadius={borderRadius}
          border={border}
          backgroundColor={backgroundColor}
        />
        <div className="w-[700px] max-w-full mt-[100px] mb-[10px] bg-[#eee] p-[15px] text-[20px] rounded-8 min-h-[60px] ">
          <div>box-radius: {borderRadius};</div>
          <div>-webkit-box-radius: {borderRadius};</div>
          <div>-moz-box-radius: {borderRadius};</div>
          <div>border: {border}</div>
          {isGenerateBG && <div>background: {bgColor}</div>}
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
