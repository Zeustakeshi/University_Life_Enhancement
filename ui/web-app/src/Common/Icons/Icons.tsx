//https://icon-sets.iconify.design/

interface IconProps {
  width?: string;
  height?: string;
  color?: string;
}

export const IcHouse: React.FC<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-type="monochrome"
      viewBox="0 0 22.625 24.577"
      width={width}
      height={height}
      fill="none"
      id="House-monochrome"
      style={{ height: "32px", fontSize: "32px", color: "rgb(255, 186, 0)", backgroundColor: "transparent" }}
    >
      <path
        d="M22.423 8.703L11.608.1a.55.55 0 00-.295-.1.575.575 0 00-.297.1L.202 8.704A.548.548 0 000 9.132V24.05c0 .275.237.527.496.527h7.301c.26 0 .496-.252.496-.527v-6.025c0-.862.312-1.669.878-2.27a2.92 2.92 0 012.142-.932 2.92 2.92 0 012.14.932c.567.601.88 1.408.88 2.27v6.025c0 .275.236.527.495.527h7.301c.26 0 .496-.252.496-.527V9.132a.553.553 0 00-.202-.428"
        fill="currentColor"
      ></path>
    </svg>
  );
};