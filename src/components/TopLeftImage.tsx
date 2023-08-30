import Image from "next/image";
export default function TopLeftImage() {
  return (
    <section className="absolute left-0 top-0">
      <div
        className="hidden dark:block mix-blend-color-dodge
            z-10 w-[200px] xl:w-[400px]">
        <Image
          src="/top-left-img.png"
          alt=""
          width={400}
          height={400}
        />
      </div>
      <div className="blur w-[200px] xl:w-[400px] dark:hidden"></div>
    </section>
  );
}
