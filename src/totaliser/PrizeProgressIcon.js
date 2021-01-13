import React from "react";

export default function PrizeProgressIcon({ data }) {
  const { levelNumber, levelComplete, levelProgress, levelMaxScore } = data;

  const progressFraction = levelProgress / levelMaxScore;

  return (
    <svg viewBox="0 0 34.341 39.868" width="100">
      <g id="layer5">
        <g id="PROGRESS">
          {levelProgress <= 0 && (
            <rect x={1} y={31} width={32} height={8} fill={"#ccc"} />
          )}
          <rect
            x={1}
            y={31}
            width={32 * progressFraction}
            height={8}
            fill={"#5fd35f"}
          />
        </g>
      </g>
      <g id="layer7" display="inline" transform="translate(-102.298 -153.206)">
        <g id="MASKING">
          <path
            fill="#fff"
            fillOpacity="1"
            fillRule="nonzero"
            stroke="none"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2"
            d="M394.387 691.814c-2.676 0-4.717 2.7-4.717 5.838v26.239c0 3.139 2.041 5.838 4.717 5.838h117.326c2.675 0 4.719-2.7 4.719-5.838v-26.239c0-3.139-2.044-5.838-4.72-5.838zm1.96 3.776H508.97c1.956 0 3.53 1.804 3.53 4.045v22.654c0 2.24-1.574 4.045-3.53 4.045H396.348c-1.956 0-3.53-1.804-3.53-4.045v-22.654c0-2.241 1.574-4.045 3.53-4.045z"
            baselineShift="baseline"
            clipRule="nonzero"
            color="#000"
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
            paintOrder="markers fill stroke"
            shapeRendering="auto"
            stopColor="#000"
            textAnchor="start"
            textDecoration="none"
            textRendering="auto"
            transform="scale(.26458)"
            vectorEffect="none"
            visibility="visible"
            wordSpacing="normal"
            writingMode="lr-tb"
          ></path>
        </g>
      </g>
      <g id="layer1" display="inline" transform="translate(-102.298 -153.206)">
        <g id="OUTLINE">
          <path
            id="path900"
            fill="none"
            stroke="#000"
            strokeDasharray="none"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeWidth="0.529"
            d="M104.87 184.042h29.867c.519 0 .937.477.937 1.07v5.994c0 .593-.418 1.07-.937 1.07H104.87c-.518 0-.936-.477-.936-1.07v-5.994c0-.593.418-1.07.936-1.07z"
            color="#000"
            overflow="visible"
            paintOrder="markers fill stroke"
            stopColor="#000"
          ></path>
        </g>
      </g>

      {/* SEE PRIZE TEXT */}
      {levelComplete && (
        <g transform="translate(-102.298 -153.206)">
          <g id="PRIZE">
            <text>
              <tspan
                x="119.759"
                y="190.428"
                textAnchor="middle"
                stroke="none"
                fontFamily="Alegreya Sans SC"
                fontSize="7"
                fontStretch="normal"
                fontStyle="italic"
                fontVariant="normal"
                fontWeight="800"
              >
                See Prize
              </tspan>
            </text>
          </g>
        </g>
      )}

      <g id="layer3" display="inline" transform="translate(-102.298 -153.206)">
        <g
          id="g1120"
          fillOpacity="1"
          strokeDasharray="none"
          strokeMiterlimit="4"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <ellipse
            id="circle8882"
            cx="119.577"
            cy="168.016"
            fill="#fff"
            stroke="#000"
            strokeLinejoin="miter"
            strokeWidth="0.529"
            overflow="visible"
            rx="14.543"
            ry="14.546"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="circle8884"
            cx="119.577"
            cy="168.016"
            fill="#ffe680"
            stroke="none"
            strokeLinejoin="miter"
            strokeWidth="0.529"
            overflow="visible"
            rx="12.381"
            ry="12.384"
            stopColor="#000"
          ></ellipse>
          <ellipse
            id="ellipse8886"
            cx="119.577"
            cy="166.53"
            fill="#fea"
            stroke="none"
            strokeLinejoin="miter"
            strokeWidth="0.529"
            overflow="visible"
            rx="12.381"
            ry="10.898"
            stopColor="#000"
          ></ellipse>
          <path
            id="path8896"
            fill="#ff9701"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.32"
            d="M134.37 233.211c-2.85 2.085-11.357-7.828-14.889-7.817-3.531.012-11.975 9.98-14.839 7.913-2.863-2.066 3.936-13.221 2.834-16.576-1.102-3.355-13.192-8.305-12.111-11.667 1.08-3.363 13.79-.343 16.64-2.428 2.85-2.085 3.822-15.112 7.354-15.124 3.531-.011 4.587 13.01 7.45 15.076 2.865 2.067 15.555-1.035 16.657 2.32 1.102 3.356-10.955 8.383-12.036 11.746-1.08 3.362 5.79 14.472 2.94 16.557z"
            overflow="visible"
            stopColor="#000"
            transform="matrix(.402 0 0 .39954 71.853 82.651)"
          ></path>
          <path
            id="path8898"
            fill="#ffd101"
            stroke="none"
            strokeLinejoin="miter"
            strokeWidth="5.465"
            d="M134.37 233.211c-2.794 2.045-11.43-8.84-14.892-8.828-3.463.01-12.028 10.95-14.836 8.924-2.807-2.026 4.875-13.602 3.795-16.892-1.08-3.29-14.132-8.055-13.072-11.351 1.06-3.297 14.443.433 17.238-1.612 2.794-2.044 3.293-15.929 6.756-15.94 3.463-.01 4.051 13.87 6.859 15.897 2.808 2.026 16.167-1.79 17.248 1.5 1.08 3.29-11.94 8.139-12.999 11.435-1.06 3.297 6.698 14.823 3.904 16.867z"
            overflow="visible"
            stopColor="#000"
            transform="matrix(.29139 0 0 .28961 85.064 106.044)"
          ></path>
          <path
            id="path8903"
            fill="#fff"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.529"
            d="M111.496 164.084c-2.222 1.048-2.45-.657-1.317-2.128 1.106-1.436 1.261-1.722 2.567-1.722 2.735.388-.3 3.674-1.25 3.85z"
            overflow="visible"
            stopColor="#000"
          ></path>
          <path
            id="path8905"
            fill="#fff"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.529"
            d="M113.785 159.814c-.928.438-1.023-.274-.55-.888.461-.6.526-.72 1.071-.72 1.142.163-.125 1.535-.521 1.608z"
            overflow="visible"
            stopColor="#000"
          ></path>
          <ellipse
            id="circle8911"
            cx="119.577"
            cy="168.016"
            fill="none"
            stroke="#000"
            strokeLinejoin="miter"
            strokeWidth="0.529"
            overflow="visible"
            rx="12.381"
            ry="12.384"
            stopColor="#000"
          ></ellipse>
        </g>
      </g>

      {/* LOCK ICON */}
      {!levelComplete && (
        <g transform="translate(-102.298 -153.206)">
          <g id="LOCK" strokeMiterlimit="4" strokeWidth="0.529">
            <ellipse
              id="circle8923"
              cx="119.577"
              cy="168.016"
              fill="#fff"
              fillOpacity="1"
              stroke="#000"
              strokeLinejoin="miter"
              overflow="visible"
              rx="14.543"
              ry="14.546"
              stopColor="#000"
            />
            <ellipse
              id="circle8925"
              cx="119.577"
              cy="168.016"
              fill="#e6e6e6"
              fillOpacity="1"
              stroke="none"
              strokeLinejoin="miter"
              overflow="visible"
              rx="12.381"
              ry="12.384"
              stopColor="#000"
            ></ellipse>
            <ellipse
              id="ellipse8927"
              cx="119.577"
              cy="166.53"
              fill="#f2f2f2"
              fillOpacity="1"
              stroke="none"
              strokeLinejoin="miter"
              overflow="visible"
              rx="12.381"
              ry="10.898"
              stopColor="#000"
            ></ellipse>
            <path
              id="path8929"
              fill="#fff"
              fillOpacity="1"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M111.496 164.084c-2.222 1.048-2.45-.657-1.317-2.128 1.106-1.436 1.261-1.722 2.567-1.722 2.735.388-.301 3.674-1.25 3.85z"
              overflow="visible"
              stopColor="#000"
            ></path>
            <path
              id="path8931"
              fill="#fff"
              fillOpacity="1"
              stroke="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M113.785 159.814c-.928.438-1.023-.274-.55-.888.461-.6.526-.72 1.071-.72 1.142.163-.125 1.535-.521 1.608z"
              overflow="visible"
              stopColor="#000"
            ></path>
            <ellipse
              id="circle8937"
              cx="119.577"
              cy="168.016"
              fill="none"
              fillOpacity="1"
              stroke="#000"
              strokeLinejoin="miter"
              overflow="visible"
              rx="12.381"
              ry="12.384"
              stopColor="#000"
            ></ellipse>
            <path
              id="path8939"
              fill="#ccc"
              d="M119.513 159.475c-2.837 0-5.182 2.342-5.182 5.295v5.15c0 .329.241.596.539.596h9.286c.298 0 .539-.267.539-.596v-5.15c0-2.953-2.345-5.295-5.182-5.295zm0 1.67c2.07.032 3.515 1.371 3.515 3.625v4.553h-7.03v-4.553c0-2.254 1.356-3.659 3.515-3.625z"
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
              fillOpacity="1"
              fillRule="nonzero"
              stroke="#000"
              strokeDashoffset="0"
              strokeLinecap="butt"
              strokeLinejoin="round"
              strokeOpacity="1"
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
              id="rect8943"
              width="13.201"
              height="10.119"
              x="112.838"
              y="166.456"
              fill="gray"
              stroke="#000"
              strokeLinejoin="round"
              overflow="visible"
              rx="3.888"
              ry="4.69"
              stopColor="#000"
            ></rect>
            <ellipse
              id="ellipse8945"
              cx="119.438"
              cy="170.375"
              fill="#000"
              stroke="#000"
              strokeLinejoin="round"
              overflow="visible"
              rx="1.305"
              ry="1.347"
              stopColor="#000"
            ></ellipse>
            <path
              id="path8947"
              fill="#000"
              stroke="#000"
              strokeLinejoin="round"
              d="M119.156 170.71l-.702 3.293h1.968l-.733-3.32z"
              overflow="visible"
              stopColor="#000"
            ></path>
          </g>
        </g>
      )}

      <g id="layer6" display="inline" transform="translate(-102.298 -153.206)">
        <g
          id="NUMBER"
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeWidth="0.529"
          color="#000"
          paintOrder="markers fill stroke"
        >
          <circle
            id="ellipse8955"
            cx="107.42"
            cy="177.006"
            r="5.122"
            fill="#000"
            overflow="visible"
            stopColor="#000"
          ></circle>
          <text
            id="text8959"
            x="107.45"
            y="179.947"
            style={{
              lineHeight: "125%",
              InkscapeFontSpecification: "DFPOP1-W9",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
              WebkitTextAlign: "center",
              textAlign: "center"
            }}
            fill="#fff"
            fontFamily="DFPOP1-W9"
            fontSize="9.519"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="400"
            letterSpacing="-1.13"
            overflow="visible"
            stopColor="#000"
            textAnchor="middle"
            writingMode="lr-tb"
            xmlSpace="preserve"
          >
            <tspan
              x="106.885"
              y="179.947"
              fill="#fff"
              stroke="none"
              strokeWidth="0.529"
              fontFamily="Alegreya Sans SC"
              fontSize="11.289"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="700"
            >
              {levelNumber}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}
