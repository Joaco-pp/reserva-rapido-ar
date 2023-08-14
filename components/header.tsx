import Link from "next/link"
import menuLiks from "./menuLinks"

export default function Header(){
  return(
    <header className='sm:h-1/6 h-8 border-b-4 border-b-grey-500 items-center justify-center flex'>
      <nav> 
        <ul className="flex list-none gap-12 sm: ">
          {
            menuLiks.map(({path, name}) => (
              <li key={path}>
                <Link href={path as string}>
                  {name}
                </Link>
              </li>
            )
            )}
        </ul>
      </nav>
    </header>
  )
}