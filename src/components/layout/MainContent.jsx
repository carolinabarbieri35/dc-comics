import Jumbotron from "../image/Jumbotron";
import ComicsList from "../sections/ComicsList";

export default function MainContent() {
  return (
    <main>
      <section className="bg-black">
        <Jumbotron />
        
     
        <div className="relative container mx-auto">
          <button className="absolute top-0 -translate-y-1/2 left-8 bg-blue-500 text-white uppercase font-bold px-6 py-2">
            Current Series
          </button>
          <ComicsList />
          <div className="flex justify-center pb-8">
            <button className="bg-blue-500 text-white uppercase font-bold px-8 py-2">
              Load more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

