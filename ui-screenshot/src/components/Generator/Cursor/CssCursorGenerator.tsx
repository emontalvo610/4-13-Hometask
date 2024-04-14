"use client";
import { useState } from "react";
import PreviewBox from "../Box/PreviewBox";
import { hexToRgb, rgbToHex } from "@/utils/HexToRGB";
import { copyToClipboard } from "@/utils/CopyToClipBoard";

const CURSOR_OPTIONS = [
  "alias",
  "all-scroll",
  "auto",
  "cell",
  "context-menu",
  "col-resize",
  "copy",
  "crosshair",
  "default",
  "e-resize",
  "ew-resize",
  "grab",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nesw-resize",
  "no-drop",
  "none",
  "not-allowed",
  "pointer",
  "progress",
  "initial",
  "zoom-in",
  "w-resize",
  "zoom-out",
  "text",
  "sw-resize",
  "s-resize",
  "wait",
];

export const CssCursorGenerator = () => {
  const [cursor, setCursor] = useState("initial");

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(cursor);
    setCopied(success);
    if (success) {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className="flex gap-4" style={{ cursor }}>
      <div className="flex-grow-0 flex-shrink-0 w-1/3">
        <div className="border-b-4 border-l border-r border-gray-300">
          <h4 className="text-18px bg-[#158cba] text-white py-[10px] px-[15px]">
            Cursor Options
          </h4>
          <div className="p-[7px] text-[#555555]">
            <div className="border border-grey-30 p-4">
              {CURSOR_OPTIONS.map((cur: string) => (
                <div
                  key={cur}
                  className="py-[10px] px-[15px] border-2 border-b border-t border-gray-600 hover:bg-[#ffe1b3] text-red-600"
                  onMouseEnter={() => setCursor(cur)}
                >
                  {cur}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow-0 flex-shrink-0 w-2/3 flex items-center justify-start flex-col">
        <div className="w-[700px] max-w-full mt-[100px] mb-[10px] bg-[#eee] p-[15px] text-[20px] rounded-8 min-h-[60px] ">
          <div>cursor: {cursor};</div>
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
