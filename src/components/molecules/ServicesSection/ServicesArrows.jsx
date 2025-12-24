import ServiceArrow from "@/components/atoms/ServicesSection/ServiceArrow";

export default function ServicesArrows({ index, total, cardsPerView, onPrev, onNext, direction }) {
  const canGoPrev = index > 0;
  const canGoNext = index + cardsPerView < total;

  if (direction === "left") {
    return (
      <ServiceArrow 
        direction="right" 
        disabled={!canGoPrev} 
        onClick={onPrev} 
      />
    );
  }

  if (direction === "right") {
    return (
      <ServiceArrow 
        direction="left" 
        disabled={!canGoNext} 
        onClick={onNext} 
      />
    );
  }

  return null;
}