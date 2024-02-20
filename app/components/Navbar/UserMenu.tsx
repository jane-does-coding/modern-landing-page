import { IoPersonCircleOutline } from "react-icons/io5";
import React, { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import { RiMenuFill } from "react-icons/ri";

const UserMenu = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="z-[20] bg-gray-200/50 flex flex-row items-center justify-center rounded-full cursor-pointer w-[3rem] h-[3rem] transition hover:bg-gray-200"
        >
          <RiMenuFill size={22} />
        </div>
      </div>
      <div
        className={`absolute  rounded-xl shadow-md w-[40vw] md:w-[20vw] bg-gray-50 overflow-hidden right-0 top-12 text-sm transition-all flex flex-col dark:bg-slate-700 
          ${
            isOpen
              ? "opacity-100 translate-x-0 translate-y-0"
              : "opacity-0 translate-x-[2rem] translate-y-[-2rem]"
          }
        `}
        style={{ backdropFilter: "blur(10px) !important" }}
      >
        {currentUser ? (
          <>
            <MenuItem
              label="Explore"
              onClick={() => router.push("/reservations")}
            />
            <MenuItem label="My Stacks" onClick={() => router.push("/trips")} />
            <MenuItem
              label="My Favorites"
              onClick={() => router.push("/favorites")}
            />
            <MenuItem
              label="My Profile"
              onClick={() => router.push("/properties")}
            />
            <hr />
            <MenuItem label="Logout" onClick={() => {}} />
          </>
        ) : (
          <>
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="Sign up" onClick={() => {}} />
          </>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
