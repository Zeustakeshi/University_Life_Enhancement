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
      style={{
        height: "32px",
        fontSize: "32px",
        color: "rgb(255, 186, 0)",
        backgroundColor: "transparent",
      }}
    >
      <path
        d="M22.423 8.703L11.608.1a.55.55 0 00-.295-.1.575.575 0 00-.297.1L.202 8.704A.548.548 0 000 9.132V24.05c0 .275.237.527.496.527h7.301c.26 0 .496-.252.496-.527v-6.025c0-.862.312-1.669.878-2.27a2.92 2.92 0 012.142-.932 2.92 2.92 0 012.14.932c.567.601.88 1.408.88 2.27v6.025c0 .275.236.527.495.527h7.301c.26 0 .496-.252.496-.527V9.132a.553.553 0 00-.202-.428"
        fill="currentColor"
      ></path>
    </svg>
  );
};
export const IcBellOuline: React.FC<IconProps> = ({
  width = "1.3rem",
  height = "1.3rem",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-type="monochrome"
      viewBox="0 0 15.706 19.271"
      width={width}
      height={height}
      fill="none"
      id="BellOutline-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        d="M13.033 7.739l-.03 8.149H2.705l-.03-8.148c0-2.953 2.226-5.181 5.179-5.183 2.952.002 5.18 2.23 5.18 5.182zm-3.775 9.296c-.194.635-.75 1.066-1.404 1.067-.654-.001-1.21-.432-1.404-1.067zm5.88-1.147h-.947l-.01-8.17c0-3.381-2.409-6-5.746-6.277V.568c0-.37-.292-.566-.582-.568-.288.002-.58.198-.58.568v.873c-3.337.276-5.746 2.896-5.746 6.277l-.01 8.17H.568c-.373 0-.568.293-.568.584 0 .29.195.584.568.584H5.26a2.642 2.642 0 002.593 2.215 2.641 2.641 0 002.593-2.215h4.692c.373 0 .568-.294.568-.584s-.195-.584-.568-.584z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
export const IcChat: React.FC<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-type="monochrome"
      viewBox="0 0 18 22"
      width={width}
      height={height}
      fill="none"
      id="Chat-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 4)">
          <ellipse
            cx="7.5"
            cy="5.692"
            fill="currentColor"
            rx="1"
            ry="1.004"
          ></ellipse>
          <ellipse
            cx="4.239"
            cy="5.692"
            fill="currentColor"
            rx="1"
            ry="1.004"
          ></ellipse>
          <ellipse
            cx="10.761"
            cy="5.692"
            fill="currentColor"
            rx="1"
            ry="1.004"
          ></ellipse>
          <path
            stroke="currentColor"
            d="M9.986 14.611l.835-3.728H13.5a1 1 0 001-1V1.5a1 1 0 00-1-1h-12a1 1 0 00-1 1v8.384a1 1 0 001 1l5.706-.001 2.78 3.728z"
          ></path>
        </g>
        <path
          stroke="#FFF"
          stroke-width="0.1"
          d="M1 1h16v20H1z"
          opacity="0.01"
        ></path>
      </g>
    </svg>
  );
};
export const IcNotification: React.FC<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 59 16"
      width={width}
      height={height}
      fill="none"
      id="Ellipsis-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        d="M0 7.7c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S12 0 7.7 0 0 3.5 0 7.7m21.7 0c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S33.7 0 29.5 0s-7.8 3.5-7.8 7.7m21.8 0c0 4.3 3.5 7.7 7.7 7.7s7.7-3.5 7.7-7.7S55.5 0 51.2 0s-7.7 3.5-7.7 7.7"
        fill="currentColor"
      ></path>
    </svg>
  );
};
export const IcAccount: React.FC<IconProps> = ({
  width = "1.5rem",
  height = "1.5rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
      fill="none"
      id="UserOutline-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <g fill="none" stroke="currentColor">
        <circle cx="15" cy="15" r="14.4"></circle>
        <circle cx="15" cy="12" r="4.5"></circle>
        <path d="M25.442 24.63c-1.453-4.536-5.579-7.807-10.442-7.807-4.932 0-9.106 3.365-10.502 8"></path>
      </g>
    </svg>
  );
};
export const IcEdit: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={width}
      height={height}
      fill="none"
      id="Edit-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        d="M18.3 6.34l4.9 4.9M6.6 28.04l21.1-21.2-5.3-5.2-21.1 21.2v5.2h5.3z"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      ></path>
    </svg>
  );
};

export const IcHeartOuline: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      fill="none"
      id="HeartOutline-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        d="M13.8 4C6.5 4 2 10.5 2 15.8c0 11.5 12.9 22.2 22 29 9.1-6.8 22-17.5 22-29C46 10.5 41.5 4 34.2 4c-4.1 0-7.6 3.3-10.2 6.4C21.4 7.3 17.9 4 13.8 4"
      ></path>
    </svg>
  );
};
export const IcHeartOutlineJob: React.FC<IconProps> = ({
  width = "1rem",
  height = "1rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={width}
      height={height}
      fill="none"
      id="HeartOutline-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#A30214",
        backgroundColor: "transparent",
      }}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        d="M13.8 4C6.5 4 2 10.5 2 15.8c0 11.5 12.9 22.2 22 29 9.1-6.8 22-17.5 22-29C46 10.5 41.5 4 34.2 4c-4.1 0-7.6 3.3-10.2 6.4C21.4 7.3 17.9 4 13.8 4"
      ></path>
    </svg>
  );
};

export const IcLocation: React.FC<IconProps> = ({
  width = "0.7rem",
  height = "0.7rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29 37"
      width={width}
      height={height}
      fill="none"
      id="Location-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        fill="currentColor"
        d="M14.3.4C6.4.4 0 6.7 0 14.5c0 3.8 1.5 7.4 4 10.1l10.3 11.8 10.3-11.8c2.5-2.7 4-6.3 4-10.1C28.6 6.7 22.2.4 14.3.4m0 2.2c6.7 0 12.1 5.4 12.1 12 0 3.1-1.3 6.3-3.4 8.7l-8.7 9.9-8.7-9.9c-2.2-2.4-3.4-5.6-3.4-8.7 0-6.7 5.4-12 12.1-12"
      ></path>
      <path
        fill="currentColor"
        d="M14.3 19.9c-3.1 0-5.6-2.5-5.6-5.5s2.5-5.5 5.6-5.5c3.1 0 5.6 2.5 5.6 5.5 0 3.1-2.5 5.5-5.6 5.5"
      ></path>
    </svg>
  );
};
export const IcCompany: React.FC<IconProps> = ({
  width = "0.7rem",
  height = "0.7rem",
}) => {
  return (
    <svg
      data-type="monochrome"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 23 25"
      width={width}
      height={height}
      fill="none"
      id="HouseOutline-monochrome"
      style={{
        height: "32px",
        fontSize: "32px",
        color: "#000000",
        backgroundColor: "transparent",
      }}
    >
      <path
        fill="currentColor"
        d="M21.188 23.142h-5.42v-5.115c0-1.23-.45-2.386-1.27-3.255a4.34 4.34 0 00-3.186-1.384 4.34 4.34 0 00-3.186 1.384 4.719 4.719 0 00-1.27 3.255v5.115h-5.42V9.559L11.313 1.7l9.876 7.858v13.583zm1.235-14.437L11.608.101A.55.55 0 0011.313 0a.575.575 0 00-.297.1L.202 8.706A.548.548 0 000 9.134v14.918c0 .275.236.526.496.526h7.3c.26 0 .497-.25.497-.526v-6.025c0-.863.312-1.669.878-2.27a2.92 2.92 0 012.141-.933 2.92 2.92 0 012.141.933c.567.601.879 1.407.879 2.27v6.025c0 .275.236.526.496.526h7.3c.26 0 .496-.25.496-.526V9.134a.552.552 0 00-.201-.429z"
      ></path>
    </svg>
  );
};
