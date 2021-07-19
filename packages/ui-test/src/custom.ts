import { CustomTheme } from "lib";

export const customTheme: CustomTheme = {
  colors: {
    primary: "#52A7CC",
    secondary: "#FABB7C",
    background: "#F6EFE3",
    error: "red",
    warn: "orange",
  },
  button: {
    primary: {
      borderRadius: "6px",
      color: "#fff",
      background: "primary",
      fontSize: "22px",
      fontWeight: 900,
      padding: "10px 20px",
      cursor: "pointer",
    },
    secondary: {
      borderRadius: "6px",
      color: "#fff",
      background: "secondary",
      fontSize: "22px",
      fontWeight: 900,
      padding: "10px 20px",
      cursor: "pointer",
    },
    flat: {
      color: "primary",
      fontSize: "22px",
      padding: "12px 20px",
    },
    flatSecondary: {
      color: "secondary",
      fontSize: "22px",
      padding: "12px 20px",
    },
    error: {
      borderRadius: "6px",
      color: "#fff",
      background: "error",
      fontSize: "22px",
      fontWeight: 900,
      padding: "10px 20px",
      cursor: "pointer",
    },
    warn: {
      borderRadius: "6px",
      color: "#fff",
      background: "warn",
      fontSize: "22px",
      fontWeight: 900,
      padding: "10px 20px",
      cursor: "pointer",
    },
  },
  text: {
    h1: {
      fontSize: "4rem",
      fontWeight: 900,
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 900,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 700,
    },
    p: {
      fontSize: "1.2rem",
      fontWeight: 300,
      letterSpacing: "-0.5px",
    },
  },
  icon: {
    xl: {
      width: "40px",
      height: "40px",
    },
    l: {
      width: "32px",
      height: "32px",
    },
    m: {
      width: "28px",
      height: "28px",
    },
  },
};

export const customIcons = {
  leftArrow: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd">
      <g fill="#111" fill-rule="nonzero">
          <g>
              <path d="M8.224 4.226L8.542 14.485 18.803 14.805 18.647 19.803 3.692 19.337 3.226 4.382z" transform="translate(-24.000000, -53.000000) translate(24.000000, 53.000000) translate(11.014321, 12.014321) rotate(45.000000) translate(-11.014321, -12.014321)"/>
          </g>
      </g>
  </g>
</svg>
`,
};
