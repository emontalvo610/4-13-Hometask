interface PreviewTextProps {
  textShadow: string;
}

export default function PreviewText({ textShadow }: PreviewTextProps) {
  return (
    <div
      className="w-[700px] h-[100px] m-[50px] border-[4px] border-gray-300 text-[50px] text-center shadow-lg rounded-[20px] font-bold"
      style={{ textShadow }}
    >
      This text is the Preview Text
    </div>
  );
}
