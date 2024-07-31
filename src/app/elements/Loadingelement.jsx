"use client";
import Lottie from "lottie-react";
import loandingAnimation from "../../../public/animation/loading.json";

export default function Loadingelement() {
  return (
    <div className="h-[calc(100vh-136px)] flex justify-center items-center">
      <div className="animate-spin spiner"></div>
    </div>
  );
}
