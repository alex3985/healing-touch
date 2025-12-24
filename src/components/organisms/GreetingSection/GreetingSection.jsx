import GreetingContent from "@/components/molecules/GreetingSection/GreetingContent";
import Container from "@/components/atoms/Layout/Container";
import person1 from "@/assets/image/Greeting-Image/Person-1.jpg";
import person2 from "@/assets/image/Greeting-Image/Person-2.jpg";

export default function GreetingSection() {
  return (
    <section
      className="
        relative w-full bg-white overflow-hidden
        min-h-[1026px] pb-[40px]
        lg:min-h-0 lg:py-[90px] lg:pb-0
        2xl:py-0 2xl:h-[900px]
      "
    >
      <Container className="h-full px-[30px] lg:px-[40px] 3xl:px-[80px]">
        <div
          className="
            flex flex-col items-center
            gap-[24px] md:gap-[32px] lg:gap-[40px] xl:gap-[60px] 2xl:gap-[70px]
            lg:flex-row lg:justify-center lg:items-center
            2xl:items-start
          "
        >
          {/* TEXT */}
          <div
            className="
              order-2 lg:order-1
              w-full max-w-[368px]
              mx-auto
              flex flex-col items-center
              lg:items-start lg:mx-0 lg:max-w-none
              lg:w-[520px] xl:w-[600px] 2xl:w-[641px]
              mt-0
              2xl:mt-[214px]
            "
          >
            <GreetingContent />
          </div>

          {/* PHOTOS */}
          <div
            className="
              order-1 lg:order-2
              w-full max-w-[368px]
              mx-auto flex justify-center
              pt-[40px]
              lg:pt-0 lg:mx-0 lg:max-w-none
              lg:w-[520px] xl:w-[640px] 2xl:w-[729px]
              2xl:pt-[108px]
            "
          >
            {/* <2xl: scalable group (NO radius changes) */}
            <div className="relative w-full aspect-[729/685] 2xl:hidden">
              {/* MAIN */}
              <img
                src={person1}
                alt="Main"
                loading="lazy"
                className="
                  absolute object-cover
                  left-[0%] top-[0%]
                  w-[57.34%] h-[87.30%]
                  rounded-[50px]
                "
              />

              {/* SECOND */}
              <img
                src={person2}
                alt="Secondary"
                loading="lazy"
                className="
                  absolute object-cover z-[3]
                  left-[52.54%] top-[27.74%]
                  w-[47.46%] h-[72.26%]
                  rounded-[40px]
                  border-[5.05px] border-white
                  backdrop-blur-[16.714px]
                "
              />
            </div>

            {/* 2xl (1920×900): original unchanged */}
            <div className="hidden 2xl:block relative w-[729px] h-[685px]">
              <img
                src={person1}
                alt="Main"
                loading="lazy"
                className="
                  absolute
                  top-0 left-0
                  w-[418px] h-[598px]
                  rounded-[100px]
                  object-cover
                "
              />

              <img
                src={person2}
                alt="Secondary"
                loading="lazy"
                className="
                  absolute
                  top-[190px] left-[383px]
                  w-[346px] h-[495px]
                  rounded-[80px]
                  border-[10px] border-white
                  backdrop-blur-[33px]
                  object-cover
                  z-[3]
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}