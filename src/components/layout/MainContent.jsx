import Jumbotron from "../image/jumbotron";

export default function MainContent() {
  return (
    <main>
      <section>
        <Jumbotron />
        <h1>Current series</h1>
        <button>Load more</button>
      </section>
    </main>
  );
}

