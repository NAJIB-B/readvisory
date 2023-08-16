import Image from 'next/image';
const Button = (props) => {
  const { icon, text, buttonStyle, textStyle, action } = props;
  return (
    <button className={`flex flex-row items-center ${buttonStyle}`} onClick={action}>
      <p className={`${textStyle}`}>{text}</p>
      {icon ? <Image src={icon} alt="button icon"></Image> : null}
    </button>
  );
};

export default Button;
