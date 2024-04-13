interface PreviewBoxProps {
  boxShadow: string;
}

export default function PreviewBox({ boxShadow }: PreviewBoxProps) {
  return (
    <div
      className="bg-[#158cba] w-[400px] h-[250px] mx-auto overflow-visible border-0"
      style={{ boxShadow }}
    >
      Preview
    </div>
  );
}
