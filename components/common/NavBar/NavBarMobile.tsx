import React, { FC } from "react";
import Link from "next/link";

import { motion } from "framer-motion";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import {menus} from './data/mobileMenus';
import Button from '../Btns/Button/Button';

interface Props {
  isOpen?: boolean;
}

const NavBarMobile: FC<Props> = ({ isOpen }) => {
  return (
    <motion.section className="bg-white lg:hidden">
      {menus.map((menu: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; subMenus: any[]; }) => (
        <Disclosure>
          {({ open }) => (
            <div className="border-t border-mobile-menu-border pt-4 mb-4 mt-4">
              <Disclosure.Button className="flex w-full justify-between pl-8 pr-9">
                <button type="button" className="text-font-black font-bold">
                  {menu.name}
                </button>
                <ChevronUpIcon
                  className={`ml-2 w-5 ${open ? "transform rotate-180" : ""}`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                {menu.subMenus.map((submenu, index: number) => (
                  <Disclosure.Panel className="gap-2 text-gray-5 pl-8 pr-9 first:mt-1 mt-2">
                    <Link href={`/${submenu}`}>
                      <a className="hover:text-primary-default">{submenu}</a>
                    </Link>
                  </Disclosure.Panel>
                ))}
              </Transition>
            </div>
          )}
        </Disclosure>
      ))}
      <Button
        onClick={() => console.log("//TODO:")}
        customStyle="w-full bg-primary-default py-3 rounded-lg text-primary hover:bg-primary-dark"
      >
        Sign in
      </Button>
    </motion.section>
  );
};

export default NavBarMobile;
