import Image from "next/image";

interface EllipseHeroProps {
  className?: string;
  imageSrc?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function EllipseHero({ 
  className = '', 
  imageSrc = '/group.png',
  size = 'lg' 
}: EllipseHeroProps) {
  const sizeMap = {
    sm: 'min(50vw, 300px)',
    md: 'min(60vw, 400px)',
    lg: 'min(70vw, 500px)',
  };

  const dimensions = sizeMap[size];

  return (
    <div className={`relative ${className}`}>
      {/* Ellipse gradient background */}
      <div 
        className="ellipse-gradient-bg absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: dimensions,
          height: dimensions,
          opacity: 0.3,
        }}
      />
      
      {/* Ellipse border gradient */}
      <div 
        className="ellipse-gradient-border absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: `calc(${dimensions} + 40px)`,
          height: `calc(${dimensions} + 40px)`,
          opacity: 0.2,
        }}
      />
      
      {/* Main circle with image */}
      <div 
        className="relative rounded-full overflow-hidden"
        style={{
          width: dimensions,
          height: dimensions,
          border: '3px solid rgba(200, 240, 49, 0.3)',
          boxShadow: '0 0 80px rgba(200, 240, 49, 0.15)',
        }}
      >
        <Image
          src={imageSrc}
          alt="Team collaboration"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}