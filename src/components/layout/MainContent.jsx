import Jumbotron from "../image/Jumbotron";
import ComicsList from "../sections/ComicsList";

export default function MainContent() {
  return (
    <main>
      <section className="static bg-black">
        <Jumbotron />
        
        <button className=" absolute right-70 bottom-76 bg-blue-500 text-white uppercase p-2 ">Current Series </button>
         <ComicsList/>
        <button>Load more</button>
      </section>
    </main>
  );
}

