import React from "react";

export default function ProgressBandSvg({
  bandMax,
  bandColour = "#5d4fc0",
  bandProgress,
  bandTarget,
  bandComplete
}) {
  const blankColour = "#ccc";
  const cols = 25;
  const rows = 3;

  const { h, s, l } = hexToHSL(bandColour);
  const lightColour = hslToString({ h, s, l: l + 20 });

  const squares = [];
  let count = 0;
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      squares.push(
        <rect
          key={count}
          width="4"
          height="4"
          x={c * 4.2}
          y={r * 4.2}
          fill={count < bandProgress ? bandColour : blankColour}
          stroke="#000"
          strokeWidth="0.4"
          rx="0.8"
          ry="0.8"
        />
      );

      count++;
    }
  }

  return (
    <svg viewBox="0 0 163 15">
      {/* STAR ICON */}
      <g
        id="star"
        fillOpacity="1"
        strokeDasharray="none"
        strokeMiterlimit="4"
        color="#000"
        paintOrder="markers fill stroke"
        transform="translate(-23 -62.3)"
      >
        <ellipse
          id="circle7175"
          cx="172.908"
          cy="69.888"
          fill="#fff"
          stroke="#000"
          strokeLinejoin="miter"
          strokeWidth="0.529"
          overflow="visible"
          rx="7.144"
          ry="7.142"
          stopColor="#000"
        />
        <ellipse
          id="circle7177"
          cx="172.908"
          cy="69.888"
          fill={lightColour}
          stroke="#000"
          strokeLinejoin="miter"
          strokeWidth="0.529"
          overflow="visible"
          rx="6.082"
          ry="6.08"
          stopColor="#000"
        />
        <path
          id="path7179"
          fill={bandColour}
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.689"
          d="M134.37 233.211c-2.85 2.085-11.357-7.828-14.889-7.817-3.531.012-11.975 9.98-14.839 7.913-2.863-2.066 3.936-13.221 2.834-16.576-1.102-3.355-13.192-8.305-12.111-11.667 1.08-3.363 13.79-.343 16.64-2.428 2.85-2.085 3.822-15.112 7.354-15.124 3.531-.011 4.587 13.01 7.45 15.076 2.865 2.067 15.555-1.035 16.657 2.32 1.102 3.356-10.955 8.383-12.036 11.746-1.08 3.362 5.79 14.472 2.94 16.557z"
          overflow="visible"
          stopColor="#000"
          transform="matrix(.19747 0 0 .19618 149.466 27.974)"
        />
        <path
          id="path7181"
          fill={lightColour}
          stroke={bandColour}
          strokeWidth="4"
          strokeLinejoin="miter"
          d="M134.37 233.211c-2.794 2.045-11.43-8.84-14.892-8.828-3.463.01-12.028 10.95-14.836 8.924-2.807-2.026 4.875-13.602 3.795-16.892-1.08-3.29-14.132-8.055-13.072-11.351 1.06-3.297 14.443.433 17.238-1.612 2.794-2.044 3.293-15.929 6.756-15.94 3.463-.01 4.051 13.87 6.859 15.897 2.808 2.026 16.167-1.79 17.248 1.5 1.08 3.29-11.94 8.139-12.999 11.435-1.06 3.297 6.698 14.823 3.904 16.867z"
          overflow="visible"
          stopColor="#000"
          transform="matrix(.14314 0 0 .1422 155.955 39.46)"
        />
      </g>

      {/* LOCK ICON */}
      {!bandComplete && (
        <g
          id="lock"
          strokeWidth="0.529"
          transform="matrix(1 0 0 1 -23.2 -46.66)"
        >
          <ellipse
            id="ellipse7488"
            cx="173.196"
            cy="54.221"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeLinejoin="miter"
            overflow="visible"
            rx="7.144"
            ry="7.145"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse7490"
            cx="173.196"
            cy="54.221"
            fill="#e6e6e6"
            fillOpacity="1"
            stroke="none"
            strokeLinejoin="miter"
            overflow="visible"
            rx="6.082"
            ry="6.083"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse7492"
            cx="173.196"
            cy="53.491"
            fill="#f2f2f2"
            fillOpacity="1"
            stroke="none"
            strokeLinejoin="miter"
            overflow="visible"
            rx="6.082"
            ry="5.353"
            stopColor="#000"
          ></ellipse>
          <path
            id="path7494"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M169.227 52.29c-1.092.515-1.204-.323-.647-1.046.543-.705.62-.846 1.26-.846 1.344.191-.147 1.805-.613 1.892z"
            overflow="visible"
            stopColor="#000"
          ></path>
          <path
            id="path7496"
            fill="#fff"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M170.35 50.192c-.455.215-.502-.134-.27-.436.227-.294.26-.353.527-.353.56.08-.062.753-.256.79z"
            overflow="visible"
            stopColor="#000"
          ></path>
          <ellipse
            id="ellipse7502"
            cx="173.196"
            cy="54.221"
            fill="none"
            fillOpacity="1"
            stroke="#000"
            strokeLinejoin="miter"
            overflow="visible"
            rx="6.082"
            ry="6.083"
            stopColor="#000"
          ></ellipse>
          <path
            style={{
              lineHeight: "normal",
              fontVariantLigatures: "normal",
              fontVariantPosition: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantAlternates: "normal",
              fontVariantEastAsian: "normal",
              fontFeatureSettings: "normal",
              fontVariationSettings: "normal",
              WebkitTextIndent: "0",
              textIndent: "0",
              WebkitTextAlign: "start",
              textAlign: "start",
              WebkitTextDecorationLine: "none",
              textDecorationLine: "none",
              WebkitTextDecorationStyle: "solid",
              textDecorationStyle: "solid",
              WebkitTextDecorationColor: "#000",
              textDecorationColor: "#000",
              WebkitTextTransform: "none",
              textTransform: "none",
              WebkitTextOrientation: "mixed",
              textOrientation: "mixed",
              whiteSpace: "normal",
              shapePadding: "0",
              shapeMargin: "0",
              inlineSize: "0",
              isolation: "auto",
              mixBlendMode: "normal",
              solidColor: "#000",
              solidOpacity: "1"
            }}
            id="path7504"
            fill="#ccc"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="#000"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeOpacity="1"
            d="M173.165 50.026c-1.394 0-2.546 1.15-2.546 2.6v2.53c0 .162.119.293.265.293h4.561c.147 0 .265-.131.265-.293v-2.53c0-1.45-1.152-2.6-2.545-2.6zm0 .82c1.016.016 1.726.674 1.726 1.78v2.237h-3.453v-2.237c0-1.106.666-1.797 1.727-1.78z"
            baselineShift="baseline"
            clipRule="nonzero"
            colorInterpolation="sRGB"
            colorInterpolationFilters="linearRGB"
            colorRendering="auto"
            direction="ltr"
            display="inline"
            dominantBaseline="auto"
            fontFamily="sans-serif"
            fontSize="medium"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="400"
            imageRendering="auto"
            letterSpacing="normal"
            overflow="visible"
            shapeRendering="auto"
            stopColor="#000"
            textAnchor="start"
            textDecoration="none"
            textRendering="auto"
            vectorEffect="none"
            visibility="visible"
            wordSpacing="normal"
            writingMode="lr-tb"
          ></path>
          <rect
            id="rect7508"
            width="6.484"
            height="4.971"
            x="169.886"
            y="53.455"
            fill="gray"
            stroke="#000"
            strokeLinejoin="round"
            overflow="visible"
            rx="3.888"
            ry="4.691"
            stopColor="#000"
          ></rect>
          <ellipse
            id="ellipse7510"
            cx="173.128"
            cy="55.38"
            fill="#000"
            stroke="#000"
            strokeLinejoin="round"
            overflow="visible"
            rx="0.641"
            ry="0.661"
            stopColor="#000"
          ></ellipse>
          <path
            id="path7512"
            fill="#000"
            stroke="#000"
            strokeLinejoin="round"
            d="M172.99 55.544l-.345 1.618h.966l-.36-1.631z"
            overflow="visible"
            stopColor="#000"
          ></path>
        </g>
      )}

      {/* COLOUR TAB */}
      <g id="colourTab" transform="translate(-17.455 -62.337)">
        <rect
          width="5.4"
          height="12.5"
          x="46.887"
          y="63.209"
          fill={bandColour}
          stroke="#000"
          strokeWidth="0.4"
          rx="0.8"
          ry="0.8"
        ></rect>
      </g>

      {/* PROGRESS TEXT */}
      <text
        x="173.776"
        y="295.477"
        fill="#000"
        color="#000"
        fontFamily="Arial Black"
        overflow="visible"
        transform="matrix(1.04496 0 0 .95697 -170.172 -272.022)"
        fontSize="9.602"
      >
        <tspan x="188" y="295.477">
          <tspan textAnchor="end">{bandTarget}</tspan>
        </tspan>
      </text>

      {/* SQUARES */}
      <g transform={`translate(36, 1)`}>{squares}</g>
    </svg>
  );
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length === 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length === 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

function hslToString({ h, s, l }) {
  return `hsl(${h}, ${s}%, ${l}%)`;
}
