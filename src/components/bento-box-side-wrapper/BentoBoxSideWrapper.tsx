interface BentoBoxSideWrapperProps {
  children?: React.ReactNode;
  className?: string;
  side: BentoBoxSide;
}

type BentoBoxSide = "left" | "right";

const BentoBoxSideWrapper: React.FC<BentoBoxSideWrapperProps> = ({
  children,
  className = "",
  side,
}) => {
  const commonClasses = "flex h-[100%] flex-col overflow-y-hidden sm:w-full";

  return (
    <div
      id={`${side}-bento-box`}
      className={`${commonClasses} ${side === "left" ? "sm:pt-6 md:w-[40%] md:pt-0" : "rounded-3xl text-2xl font-bold sm:pb-6 md:w-[60%] md:pb-0"} ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoBoxSideWrapper;
