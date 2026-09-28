import Logo from "../Logo";


export default function Header() {
  return (

    <header className="flex items-center justify-around">
     <Logo />
      <ul className="flex gap-3 text uppercase ">
        <li><a href="">Characters</a></li>
        <li><a href="">Comics</a></li>
        <li><a href="">Movies</a></li>
        <li><a href="">Tv</a></li>
        <li><a href="">Games</a></li>
        <li><a href="">Collectibles</a></li>
        <li><a href="">Videos</a></li>
        <li><a href="">Fans</a></li>
        <li><a href="">News</a></li>
        <li><a href="">Shop</a></li>
      </ul>

    </header>
  )
}
