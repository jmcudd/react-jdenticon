export default function Jdenticon({
  value,
  size,
  style,
  config,
  className,
}: {
  value: string;
  size?: string;
  style?: React.CSSProperties;
  className?: string;
  config?: import("jdenticon").JdenticonConfig;
}): JSX.Element;
