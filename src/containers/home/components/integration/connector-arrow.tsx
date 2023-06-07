export default function ConnectorArrow({
  left,
  right,
  top,
  bottom,
  center,
  activeColor,
}: ConnectorArrowProps) {
  if (top && left) {
    return (
      <span
        className={`absolute w-[26.5%] h-[calc(100%-0.43rem)] border-2 border-l-0 border-b-0 rounded-tr-xl -right-[26.5%] top-1/2 border-${activeColor} hidden lg:block`}
      >
        <span
          className={`absolute w-full h-5 border-2 border-r-0 border-t-0 rounded-bl-xl -right-full top-full border-${activeColor}`}
        ></span>
      </span>
    );
  } else if (center && left) {
    return (
      <span
        className={`w-[51.5%] h-0.5 bg-${activeColor} z-[9] absolute -right-[51.5%] hidden lg:block`}
      ></span>
    );
  } else if (bottom && left) {
    return (
      <span
        className={`absolute w-[26.5%] h-[calc(100%-0.43rem)] border-2 border-l-0 border-t-0 rounded-br-xl -right-[26.5%] bottom-1/2 border-${activeColor} hidden lg:block`}
      >
        <span
          className={`absolute w-full h-5 border-2 border-r-0 border-b-0 rounded-tl-xl -right-full bottom-full border-${activeColor}`}
        ></span>
      </span>
    );
  } else if (top && right) {
    return (
      <span
        className={`absolute w-[26.5%] h-[calc(100%-0.43rem)] border-2 border-r-0 border-b-0 rounded-tl-xl -left-[26.5%] top-1/2 border-${activeColor} hidden lg:block`}
      >
        <span
          className={`absolute w-full h-5 border-2 border-l-0 border-t-0 rounded-br-xl -left-full top-full border-${activeColor}`}
        ></span>
      </span>
    );
  } else if (center && right) {
    return (
      <span
        className={`w-[51.5%] z-[9] h-0.5 absolute -left-[51.5%] bg-${activeColor} hidden lg:block`}
      ></span>
    );
  } else if (bottom && right) {
    return (
      <span
        className={`absolute w-[26.5%] h-[calc(100%-0.43rem)] border-2 border-r-0 border-t-0 rounded-bl-xl -left-[26.5%] bottom-1/2 border-${activeColor} hidden lg:block`}
      >
        <span
          className={`absolute w-full h-5 border-2 border-l-0 border-b-0 rounded-tr-xl -left-full bottom-full border-${activeColor}`}
        ></span>
      </span>
    );
  }

  return (
    <span className="absolute w-[26.5%] h-[calc(100%-0.43rem)] border-2 border-r-0 border-t-0 rounded-bl-xl -left-[26.5%] bottom-1/2">
      <span className="absolute w-full h-5 border-2 border-l-0 border-b-0 rounded-tr-xl -left-full bottom-full"></span>
      <span className="bg-violet-500"></span>
      <span className="bg-violet-300"></span>
      <span className="border-violet-300"></span>
    </span>
  );
}

export interface ConnectorArrowProps {
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  center?: boolean;
  activeColor?: string;
}
