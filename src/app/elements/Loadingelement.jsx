"use client";
import Lottie from "lottie-react";
import loandingAnimation from "../../../public/animation/loading.json";

export default function Loadingelement() {
  return (
    <div className="h-[calc(100vh-128px)] flex justify-center items-center">
      <Lottie className="w-60 h-60" animationData={loandingAnimation} />
    </div>
  );
}
