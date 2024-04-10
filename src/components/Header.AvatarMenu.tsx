/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';

import HeaderAvatarMenuArray from '../helpers/Header.AvatarMenu';

const HeaderAvatarMenu = () => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-0 focus:ring-neutral-400">
          <span className="sr-only">Open user menu</span>
          <div
            className="size-8 rounded-full bg-gray-700 bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
            <span className="sr-only">User Name</span>
          </div>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1">
        <Menu.Items className="absolute right-0 top-[35px] z-10 mt-2 w-48">
          <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
            {HeaderAvatarMenuArray.MenuItems.map((item) => (
              <Menu.Item key={item.key}>
                {({ active }) => (
                  <div
                    onClick={() => navigate(item.route)}
                    className={classNames(
                      active && 'bg-gray-100',
                      'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                    )}>
                    {item.title}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default HeaderAvatarMenu;
