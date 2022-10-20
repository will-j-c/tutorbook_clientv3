import FilledButton from '../utils/buttons/FilledButton';
import OutlinedButton from '../utils/buttons/OutlinedButton';
import SideNav from './SideNav';
import { useState } from 'react';

function PageNavbar() {
  const isAuthenticated = false;
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    //
  };
  const isSignedInRight = isAuthenticated ? (
    <FilledButton label="Logout" action={handleLogout} />
  ) : (
    <>
      <FilledButton label="Sign Up" linkTo={'/register'}/>
      <OutlinedButton label="Login" linkTo={'/login'} />
    </>
  );

  const [open, setOpen] = useState(false);

  return (
    <header aria-label="Site Header" className="bg-primary">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex gap-2 items-center">
          <img src="/logo.png" className="object-contain h-6 w-6" alt="Logo" />
          <h5 className="text-secondaryTitleText font-bold transition text-sm hover:text-titleText-500/75">
            TutorBook
          </h5>
        </div>
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Site Nav" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <a
                  className="text-titleText font-bold transition text-sm hover:text-titleText/75"
                  href="/">
                  Browse Tutors
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4 hidden md:block">{isSignedInRight}</div>

            <button
              className="block rounded p-2.5 text-titleText transition hover:text-gray-600/75 md:hidden"
              onClick={handleClick}>
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <SideNav open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default PageNavbar;