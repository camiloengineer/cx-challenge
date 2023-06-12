import React, {FC} from "react";
import Logo from "application/components/Logo/Logo";
import SocialsList1 from "application/components/SocialsList1/SocialsList1";
import { CustomLink } from "infrastructure/data/types";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const currentPath = "/";

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Acerca de",
    menus: [
      { href: currentPath, label: "Mercado Libre" },
      { href: currentPath, label: "Investor relations" },
      { href: currentPath, label: "Tendencias" },
      { href: currentPath, label: "Sustentabilidad" },
    ],
  },
  {
    id: "1",
    title: "Otros sitios",
    menus: [
      { href: currentPath, label: "Developers" },
      { href: currentPath, label: "Mercado Pago" },
      { href: currentPath, label: "Mercado Shops" },
      { href: currentPath, label: "Mercado Envíos" },
    ],
  },
  {
    id: "2",
    title: "Ayuda",
    menus: [
      { href: currentPath, label: "Comprar" },
      { href: currentPath, label: "Vender" },
      { href: currentPath, label: "Resolución de problemas" },
      { href: currentPath, label: "Centro de Seguridad" },
    ],
  },
  {
    id: "4",
    title: "Redes sociales",
    menus: [
      { href: currentPath, label: "Facebook" },
      { href: currentPath, label: "Youtube" },
      { href: currentPath, label: "Telegram" },
      { href: currentPath, label: "Twitter" },
    ],
  },
];

const Footer: FC = () => {

  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
                rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-20 lg:pt-28 lg:pb-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <Logo />
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-2 lg:space-x-0 lg:flex-col lg:space-y-3 lg:items-start" />
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
      </div>
    </div>
  );
};

export default Footer;
