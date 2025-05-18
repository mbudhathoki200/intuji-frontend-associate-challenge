import { LucideProps } from "lucide-react";
import React from "react";

export default function RightArrow({
  props,
  isWhite,
}: {
  props?: LucideProps;
  isWhite?: boolean;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M14.4302 5.93005L20.5002 12.0001L14.4302 18.0701"
        stroke={isWhite ? "#fff" : "#0D163A"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0098 12H20.3298"
        stroke={isWhite ? "#fff" : "#0D163A"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 12H6.97"
        stroke={isWhite ? "#fff" : "#0D163A"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
