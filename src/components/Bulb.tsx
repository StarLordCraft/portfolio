import Image from "next/image";
export default function Bulb() {
  return (
    <div
      className="absolute -left-36 xl:-left-44 -bottom-12 xl:-bottom-28 rotate-12 xl:rotate-45
        mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px]
        xl:w-[260px]"
    >
      <Image
        src={"/bulb.png"}
        alt=""
        width={260}
        height={200}
        className="h-full w-full hidden dark:flex"
      />
    </div>
  );
}
