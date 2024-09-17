import Image from "next/image";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Grid from "./components/Grid";
export default function Home() {
  return (
    <>
      <Hero/>
      <Experience/>
      <Grid/>
    </>
  );
}
