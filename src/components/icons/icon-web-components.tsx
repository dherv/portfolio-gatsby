import React, { FC } from "react";

const IconWebComponents: FC<Props> = () => (
  <svg width="32px" height="32px" viewBox="0 0 64 64">
    <title>Web Components</title>
    <defs>
      <linearGradient
        x1="61.1"
        y1="32"
        y2="32"
        id="A"
        x2="159"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2a3b8f" offset="0%" />
        <stop stopColor="#29abe2" offset="100%" />
      </linearGradient>
      <linearGradient
        x1="159"
        y1="99.6"
        x2="61"
        y2="99.6"
        id="B"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#b4d44e" offset="0%" />
        <stop stopColor="#e7f716" offset="100%" />
      </linearGradient>
    </defs>
    <g
      transform="matrix(.399501 0 0 .399501 -.1598 5.652934)"
      fillRule="evenodd"
    >
      <path d="M160.6 65.9l-17.4 29.3-24.4-29.7 24.4-28.9z" fill="#166da5" />
      <path d="M141.3 100.2l-26.5-31.7-15.9 26.6 24.7 36.1z" fill="#8fdb69" />
      <path d="M141 31.4l-26.2 31.8-15.9-26.6L123.6.9z" fill="#166da5" />
      <path
        d="M61.1 31.4H141L123.4.7H78.7zm53.7 31.9H159l-15.9-26.8H98.8"
        opacity=".95"
        fill="url(#A)"
      />
      <path
        d="M141.3 100.3H61l17.6 30.5h45zm-26.5-31.9H159l-15.9 26.8H98.8"
        opacity=".95"
        fill="url(#B)"
      />
      <path
        d="M78.6 130.8L41 65.8 79.1.8H37.9L.4 65.8l37.5 65z"
        fill="#010101"
      />
    </g>
  </svg>
);

interface Props {}

export default IconWebComponents;
