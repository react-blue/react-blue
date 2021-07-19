import { CSSInterpolation } from "@emotion/serialize";
import { CustomTheme } from "@react.blue/ui";

const colors = {
  primary: "#009DE9",
  secondary: "#006190",
  text: "#212121",
  background: "#F6EFE3",
};

const commonButton: CSSInterpolation = {
  height: "40px",
  padding: "10px 24px",
  boxSizing: "border-box",

  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "-0.25px",

  cursor: "pointer",
};

export const customTheme: CustomTheme = {
  colors,
  button: {
    primary: {
      ...commonButton,
      backgroundColor: colors.primary,
      color: "white",
      "&:hover": {
        backgroundColor: "#0074AC",
      },
      "&.active": {
        backgroundColor: "#006190",
      },
    },
    secondary: {
      ...commonButton,
      color: "primary",
      background: "white",
      border: "1px solid #009DE9",
      "&:hover": {
        backgroundColor: "#009DE9",
        color: "white",
      },
      "&.active": {
        backgroundColor: "#006190",
        color: "white",
      },
    },
    tertiary: {
      ...commonButton,
      color: "text",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.12)",
      },
      "&.active": {
        backgroundColor: "rgba(0, 0, 0, 0.26)",
      },
    },
  },
  text: {
    peta: {
      fontSize: "76px",
      fontWeight: 700,
      lineHeight: "82px",
    },
    tera: {
      fontSize: "54px",
      fontWeight: 700,
      lineHeight: "64px",
    },
    giga: {
      fontSize: "36px",
      fontWeight: 400,
      lineHeight: "45px",
    },
    mega: {
      fontSize: "28px",
      fontWeight: 400,
      lineHeight: "35px",
    },
    kilo: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: "34px",
    },
    hecto: {
      fontSize: "20px",
      fontWeight: 400,
      lineHeight: "30px",
    },
    deca: {
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
    },
    base: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    },
  },
  input: {},
  box: {},
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
