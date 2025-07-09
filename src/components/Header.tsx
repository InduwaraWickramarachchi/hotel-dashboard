import { signOut } from 'next-auth/react';
import { FC } from 'react';

interface HeaderProps {
  title: string;
  welcomeMsg: string;
}

const Header: FC<HeaderProps> = ({ title, welcomeMsg }) => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#d3b53ccb] to-amber-400 p-8">
      <div className="flex w-full items-center justify-between text-lg text-white">
        <h2>{title}</h2>
        <div className="px-4">{welcomeMsg}</div>
      </div>
      <button
        className="inline cursor-pointer rounded-lg bg-amber-100 px-8 py-3 text-amber-600 shadow-md transition-all duration-200 hover:bg-amber-200 active:translate-y-[1px] active:shadow-inner"
        onClick={() => signOut({ callbackUrl: 'http://localhost:3200/login' })}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
