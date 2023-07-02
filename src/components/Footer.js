import { Link } from "react-router-dom";

export const Footer = () => {
  return (
<footer className="bg-white shadow p-4 dark:bg-gray-900">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">FilmHaven™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/bluecanaryyy/" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
        </li>
        <li>
            <a href="https://www.linkedin.com/in/kalialor/" target="_blank" className="mr-4 hover:underline md:mr-6" rel="noreferrer">LinkedIn</a>
        </li>
        <li>
            <a href="https://www.youtube.com/channel/UCW_a7APcM4aWHlsDTdKMzOA" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Youtube</a>
        </li>
        <li>
            <a href="https://github.com/kalialor" target="_blank" className="hover:underline" rel="noreferrer">Github</a>
        </li>
    </ul>
    </div>
</footer>


  )
}
