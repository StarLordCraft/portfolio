import Image from "next/image";

export default function Circles() {
  return (
    <div
      className="w-[200px] xl:w-[300px] absolute -right-24 -bottom-20
        dark:-right-16 dark:-bottom-2 dark:mix-blend-color-dodge
         animate-pulse duration-76
         z-10"
    >
      <Image
        src={"/circles.png"}
        alt=""
        width={200}
        height={200}
        className="h-full w-full hidden dark:flex"
      />

      <Image
        src={"/lightCircles.png"}
        alt=""
        width={200}
        height={200}
        className="h-full w-full flex dark:hidden"
      />
    </div>
  );
}
