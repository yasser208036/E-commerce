"use client";

import { useState } from "react";

export default function Closing() {
  const [close, setClose] = useState(true);
  return (
    <div
      className="absolute z-30 right-0 mr-2"
      onClick={() => {
        setClose(false);
      }}
    >
      ❌
    </div>
  );
}
