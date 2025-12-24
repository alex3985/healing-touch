import { useCallback, useEffect, useRef, useState } from "react";
import ServicesHeader from "@/components/molecules/ServicesSection/ServicesHeader";
import ServiceCard from "@/components/molecules/ServicesSection/ServiceCard";
import ServicesDots from "@/components/molecules/ServicesSection/ServicesDots";
import ServicesArrows from "@/components/molecules/ServicesSection/ServicesArrows";

import servicesData from "@/data/services.json";

export default function ServicesSection() {
  const cards = servicesData;
  const total = cards.length;

  const viewportRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [cardsPerView, setCardsPerView] = useState(1);
  const [index, setIndex] = useState(0);
  const [isLaptop, setIsLaptop] = useState(false);

  // ---------- Визначення cardsPerView та breakpoint для ноутбуків ----------
  useEffect(() => {
    const updateCardsPerView = () => {
      const w = window.innerWidth;
      
      // Ноутбуки та більше (lg+ = 1024px+)
      if (w >= 1024) {
        setIsLaptop(true);
        setCardsPerView(3);
      } 
      // Планшети (md до lg = 768px - 1023px)
      else if (w >= 768) {
        setIsLaptop(false);
        setCardsPerView(2);
      } 
      // Телефони (до 768px)
      else {
        setIsLaptop(false);
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // ---------- Корекція index при зміні cardsPerView ----------
  useEffect(() => {
    const maxIndex = Math.max(0, total - cardsPerView);
    setIndex((currentIndex) => {
      // Округлюємо вниз до кратного cardsPerView
      const adjustedIndex = Math.floor(currentIndex / cardsPerView) * cardsPerView;
      return Math.min(adjustedIndex, maxIndex);
    });
  }, [cardsPerView, total]);

  // ---------- DOTS логіка ----------
  const totalGroups = Math.ceil(total / cardsPerView);
  const activeIndex = Math.min(
    Math.floor(index / cardsPerView),
    totalGroups - 1
  );

  const onDotClick = (dotIndex) => {
    const target = dotIndex * cardsPerView;
    const maxIndex = Math.max(0, total - cardsPerView);
    const finalIndex = Math.min(target, maxIndex);
    setIndex(finalIndex);
    
    // Прокручуємо до відповідної картки при кліку на dot
    if (scrollContainerRef.current && !isLaptop) {
      const cardElement = scrollContainerRef.current.children[finalIndex];
      if (cardElement) {
        cardElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
      }
    }
  };

  // ---------- ARROWS (тільки на ноутбуках) ----------
  const onPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - cardsPerView));
  }, [cardsPerView]);

  const onNext = useCallback(() => {
    const maxIndex = Math.max(0, total - cardsPerView);
    setIndex((i) => Math.min(maxIndex, i + cardsPerView));
  }, [cardsPerView, total]);

  // ---------- Scroll-snap для swipe (touch пристрої) ----------
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isLaptop) return;

    let scrollTimeout;
    const handleScroll = () => {
      if (isScrollingRef.current) return; // Ігноруємо програмний скрол
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const firstCard = container.children[0];
        if (!firstCard) return;
        
        const cardWidth = firstCard.offsetWidth;
        const gap = 20;
        const scrollWidth = cardWidth + gap;
        
        // Визначаємо найближчу картку
        const nearestIndex = Math.round(scrollLeft / scrollWidth);
        const newIndex = Math.min(Math.max(0, nearestIndex), total - 1);
        
        if (newIndex !== index) {
          setIndex(newIndex);
        }
      }, 150);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isLaptop, index, total]);

  // ---------- Синхронізація scroll з index (для програмного скролу через dots/arrows) ----------
  const isScrollingRef = useRef(false);
  
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || isLaptop || isScrollingRef.current) return;

    const cardElement = container.children[index];
    if (cardElement) {
      isScrollingRef.current = true;
      const scrollLeft = cardElement.offsetLeft - container.offsetLeft;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 500);
    }
  }, [index, isLaptop]);

  return (
    <section
      id="services"
      className="
        relative w-full bg-white
        overflow-hidden
        h-auto
      "
    >
      {/* Контейнер з safe padding */}
      <div className="relative mx-auto w-full max-w-[1440px] px-[30px] lg:px-[40px] 2xl:px-0">
        <ServicesHeader />

        {/* Блок карток з правильним центруванням */}
        <div
          ref={viewportRef}
          className="
            relative
            mt-[30px] md:mt-[40px] lg:mt-[50px] 2xl:mt-[60px]
            w-full
          "
        >
          {/* Wrapper для карток + стрілок (ноутбуки) */}
          <div className="relative w-full flex items-center gap-[20px] lg:gap-[20px]">
            {/* Стрілка вліво (тільки ноутбуки) */}
            {isLaptop && (
              <div className="hidden lg:flex shrink-0 items-center justify-center w-[50px]">
                <ServicesArrows
                  index={index}
                  total={total}
                  cardsPerView={cardsPerView}
                  onPrev={onPrev}
                  onNext={onNext}
                  direction="left"
                />
              </div>
            )}

            {/* Контейнер карток */}
            <div
              ref={scrollContainerRef}
              className={`
                relative
                flex
                ${isLaptop ? 'justify-center flex-1' : 'overflow-x-auto snap-x snap-mandatory scrollbar-hide'}
                items-start
                gap-[20px] lg:gap-[30px]
                ${isLaptop ? 'min-w-0' : 'w-full'}
                ${isLaptop ? '' : 'scroll-smooth'}
              `}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch',
              }}
            >
              {isLaptop ? (
                // На ноутбуках показуємо тільки visibleCards
                cards.slice(index, index + cardsPerView).map((card, i) => (
                  <div key={`card-${index + i}-${card.title}`}>
                    <ServiceCard
                      img={card.img}
                      title={card.title}
                      text={card.text}
                      boldText={card.boldText}
                    />
                  </div>
                ))
              ) : (
                // На touch пристроях показуємо всі картки для scroll-snap
                cards.map((card, i) => (
                  <div
                    key={`card-${i}-${card.title}`}
                    className="snap-start shrink-0"
                  >
                    <ServiceCard
                      img={card.img}
                      title={card.title}
                      text={card.text}
                      boldText={card.boldText}
                    />
                  </div>
                ))
              )}
            </div>

            {/* Стрілка вправо (тільки ноутбуки) */}
            {isLaptop && (
              <div className="hidden lg:flex shrink-0 items-center justify-center w-[50px]">
                <ServicesArrows
                  index={index}
                  total={total}
                  cardsPerView={cardsPerView}
                  onPrev={onPrev}
                  onNext={onNext}
                  direction="right"
                />
              </div>
            )}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-[30px] md:mt-[35px] lg:mt-[38px] 2xl:mt-[40px] pb-[30px] md:pb-[35px] 2xl:pb-[39.5px]">
          <ServicesDots
            activeIndex={activeIndex}
            totalGroups={totalGroups}
            onDotClick={onDotClick}
          />
        </div>
      </div>
    </section>
  );
}
