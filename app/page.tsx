import type { Metadata } from "next";
import { C0Lab } from "./C0Lab";

export const metadata: Metadata = {
  title: "Cø / N* — Phenomenal Presence Lab",
  description:
    "An interactive explanation of the N* network-dynamics model of minimal phenomenal consciousness.",
};

export default function Home() {
  return <C0Lab />;
}
