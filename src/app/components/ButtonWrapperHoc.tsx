"use client";
import Link from "next/link";
import React from "react";

const ButtonWrapperHoc = ({ child, id }: { child: any; id: any }) => {
  return <Link href={`/characters/${id}`}>{child}</Link>;
};

export default ButtonWrapperHoc;
