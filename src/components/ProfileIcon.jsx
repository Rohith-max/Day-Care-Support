import React from "react";

const ProfileIcon = ({ width = 32, height = 32, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#D8D8D8"
      />
      <mask
        id="mask0_354_12602"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_354_12602)">
        <rect
          x="-1.45459"
          y="-2.91016"
          width="36.3636"
          height="37.8182"
          fill="url(#pattern0_354_12602)"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_354_12602"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_354_12602" transform="scale(0.000666667)" />
        </pattern>
        <image
          id="image0_354_12602"
          width="1500"
          height="1500"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABdwAAAXcCAYAAAA4NUxkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVXRFWHRGaWxlAEQ6XENvbWlzc2lvblxJbGxpeWluIFN0dWRpb1wyMC4gM0QgQXZhdGFyIFBhY2sgVjJcM0QgQXZhdGFyIFBhY2sgVjIgLSBNYWluLmJsZW5k7P35iwAAABh0RVh0RGF0ZQAyMDIyLzEwLzA4IDEwOjQ1OjE56lb9dAAAABB0RVh0VGltZQAwMDowMDowNzowNXZ52mIAAAAJdEVYdEZyYW1lADE3M2HciP4AAAARdEVYdENhbWVyYQBDYW1lcmEuMDI2voyuXgAAACN0RVh0U2NlbmUAYTE0LiBXYW5pdGEgS2FjYW1hdGEgS3VuY2lyIDI23koUAAAAE3RFWHRSZW5kZXJUaW1lADAxOjEzLjgzeEUIGQAAAB50RVh0Y3ljbGVzLlZpZXcgTGF5ZXIuc2FtcGxlcwAxMDAwX8TMxQAAACV0RVh0Y3ljbGVzLlZpZXcgTGF5ZXIudG90YWxfdGltZQAwMToxMy4zNunKENsAAAAmdEVYdGN5Y2xlcy5WaWV3IExheWVyLnJlbmRlcl90aW1lADAxOjEyLjc5HCxZ8AAAAC90RVh0Y3ljbGVzLlZpZXcgTGF5ZXIuc3luY2hyb25pemF0aW9uX3RpbWUAMDA6MDAuNTeZcZROAAAgAElEQVR4AaTTC5JkR5Jk2a79b3pSInCAC0lRM4+cR2TBLPxTR1f2//t///n+7//+b+C/vpcuyB8s5w9Wx7cu//Lpg/unC+t7Z2uy26dPvl51Hu1C79XTg/Xw3dv35PSh7svbG3pF3JZ70I8HZfou79Lkoexrf/t6G+W8+ad77eE2u7XfdTfbPh/y5q6mz+/9jduyV8RtyPadalfuW7Y+7t2N/MGffP62YnuX7s2dc/N1q18ebXI6G7fXTbzYzXbLvdEen/ZtZ+f3vd/Yt3f0vAe3f+U+bcpfaHu/5f62e23uTreax7dPL+Kyc8/XGx/Ed6a3HBzPt/u9ZT6hfLer6dYfTaZcBvKaHc0nd/lb21n3bF28fX41f4O+e2det83dt1O8Ntq3QWu+XA5uz5t23PLw6r00us2iPVgPH2++fdN+mesf2UE5/Ce3zK/yf/751JXtmzgP2inik5lPt0h/oWx93H4zvEHfK8cf7Ib89r/de8MOfd/73X1fvdffYPvl266PX+9Uw/9ko9s/6f0k3/9GHOp769K31wwOZTduv/dkX19zw3vrXPq33NWx90Kda3s6l06Dcr2rje730nWbm6yPfuVozQ5vpxm6vCyULepUk792aHr7ttONnd3e3ui9s/b35r716O3Zf+HO7o1vPW/vXHe8IcNzd4On426m/Mrxv3UnN98r99v9/e+VuTR7L5zO9V067adoV/51b11+8OKT5/Gr7b3e8pD3Qu+MrwN19k3f+GnLBtzduet1S5Zfr1wOys99cdo3tAc/5cfjN7+1T97OdpP3TbNf1B1t91/ep/7ekX1tbV1f73Xv3tw0aKO3HJT5hLvfv2nv9G5vd3p7u/nubL853kYZyP/XPcf+Cb7wXwN/ha6N5sqnIo//NfOv/wO2U67TDRqU3xnvfMJ2Lv7Tbbnrb6LBZvu3eb9Yf3M5u/xrXxbK6tKLzezc5V2Z2aO3453Lk9N1w5feLZm+w9+e+9rfno2i3tZ2t/fw3t+6/N3p2zvjjauztWa31zfkLk1vo6wupA+2g/PdsHkZ2Izc1rZ++TvjvnC0/dmE45c3T4eyc9OKuFy3Ls1OsZ3u0bemy9/YPA4ne/Fqe0+nmfIr385k/arj7"
        />
      </defs>
    </svg>
  );
};

export default ProfileIcon;
