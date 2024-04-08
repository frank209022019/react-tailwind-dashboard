/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import React, { Fragment } from 'react';

import { Popover, Transition } from '@headlessui/react';
import classNames from 'classnames';

interface IPopover {
  icon: JSX.Element;
  title: string;
  message: string;
  iconSize?: number;
}

const HeaderPopover = ({ icon, title, message, iconSize = 22 }: IPopover) => {
  return (
    <>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open && 'bg-gray-200',
                'p-1.5 rounded inline-flex items-center text-gray-600 hover:text-opacity-100 focus:outline-none'
              )}>
              {React.cloneElement(icon, { size: iconSize })}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <Popover.Panel className="absolute right-0 z-10 mt-2.5 w-60">
                <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                  <strong className="text-gray-700 font-md">{title}</strong>
                  <hr />
                  <div className="py-1 text-sm">{message}</div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};

export default HeaderPopover;
