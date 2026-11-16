interface LogoProps {
  size?: "sm" | "md" | "lg";
  withWordmark?: boolean;
  className?: string;
  light?: boolean;
}

const sizeMap = {
  sm: { symbol: "h-8", wordmark: "h-5" },
  md: { symbol: "h-24 md:h-28", wordmark: "h-6 md:h-7" },
  lg: { symbol: "h-40 md:h-56", wordmark: "h-8 md:h-10" },
};

export default function Logo({ size = "sm", withWordmark = true, className = "", light = true }: LogoProps) {
  const s = sizeMap[size];
  const imgFilter = light
    ? { filter: 'brightness(0) invert(1)' }
    : { filter: 'brightness(0)' };
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://static.readdy.ai/image/1f0e5235180676805691159140764033/13ff5f5251d8b487818be846af4f8c27.png"
        alt="FLESH"
        className={`${s.symbol} w-auto object-contain select-none`}
        style={imgFilter}
        draggable={false}
      />
      {withWordmark && (
        <img
          src="https://static.readdy.ai/image/1f0e5235180676805691159140764033/5541ce89141bbee401e1ec933ddfe832.png"
          alt="Flesh"
          className={`${s.wordmark} w-auto object-contain select-none`}
          style={imgFilter}
          draggable={false}
        />
      )}
    </div>
  );
}