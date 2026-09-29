import jumbotronImg from "../../assets/img/jumbotron.jpg";

export default function Jumbotron() {
  return (
    <div className="w-full h-80 overflow-hidden">
      <img 
        src={jumbotronImg} 
        alt="jumbotron"
        className="w-full h-full object-cover object-top" 
      />
    </div>
  );
}
