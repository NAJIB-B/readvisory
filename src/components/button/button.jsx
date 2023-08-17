import Image from 'next/image';
const Button = (props) => {
  const { icon, text, buttonStyle, textStyle, action, iconWidth, iconHeight } =
    props;
  return (
    <button
      className={`flex flex-row items-center gap-2 ${buttonStyle}`}
      onClick={action}
    >
      <span className={`${textStyle}`}>{text}</span>
      {icon ? (
        <Image
          src={icon}
          alt="button icon"
          width={iconWidth}
          height={iconHeight}
        ></Image>
      ) : null}
    </button>
  );
};

export default Button;
