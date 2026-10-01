import Jumbotron from "../image/Jumbotron";
import ComicsList from "../sections/ComicsList";
import Button from "../sections/Button";

export default function MainContent() {
  return (
    <main>
      <section className="bg-black">
        <Jumbotron />
        
     
        <div className="relative container mx-auto">
         <Button className="absolute top-0 -translate-y-1/2 left-8 px-6">
           Current Series
         </Button>
          <ComicsList />
          <div className="flex justify-center pb-8">
            <Button className="px-8">
              Load more
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

