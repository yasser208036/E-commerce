"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Categories from "../components/Categories_list";

export default function Categories_icon() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div onClick={() => setOpen(true)}>
        <RxHamburgerMenu />
      </div>
      {open && <Categories />}
    </>
  );
}
