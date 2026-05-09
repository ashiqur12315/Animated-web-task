export const AnimatedText = ({
  text,
  className = "",
}) => {
  return (
    <div
      className={`
        relative
        overflow-hidden
        h-[28px]
        cursor-pointer
        ${className}
      `}
    >
      <div
        className="
          flex
          flex-col
          transition-transform
          duration-300
          ease-out
          hover:-translate-y-1/2
        "
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default AnimatedText;