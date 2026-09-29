import logoImg from "../../assets/img/dc-logo.png";

export default function Logo() {
  return (
    <img
      className="inline-block m-4" 
      src={logoImg} 
      alt="dc logo"
      width={50}
    />
  );
}