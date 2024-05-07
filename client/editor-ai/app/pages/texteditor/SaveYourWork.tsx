"use client";
// component for saving documents based on figma
// not used because unclear how the user would interact with it based of high fildelity frames
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type modalTypes = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
