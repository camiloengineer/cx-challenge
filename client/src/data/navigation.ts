import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

const currentPath = "/";

export const MEGAMENU_TEMPLATES: NavItemType[] = [
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Vehículos",
    children: [
      { id: ncNanoId(), href: currentPath, name: "Autos usados" },
      { id: ncNanoId(), href: currentPath, name: "Camionetas 4X4", isNew: true },
      { id: ncNanoId(), href: currentPath, name: "Autos Automáticos" },
      { id: ncNanoId(), href: currentPath, name: "Autos deportivos", isNew: true },
      { id: ncNanoId(), href: currentPath, name: "Motos" },
    ],
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Inmuebles",
    children: [
      { id: ncNanoId(), href: currentPath, name: "Invierte proyectos" },
      { id: ncNanoId(), href: currentPath, name: "Arriendo online" },
      { id: ncNanoId(), href: currentPath, name: "Propiedades usadas" },
      { id: ncNanoId(), href: currentPath, name: "Publicar mi propiedad" },
      { id: ncNanoId(), href: currentPath, name: "Hogar y construcción" },
      { id: ncNanoId(), href: currentPath, name: "Mudanzas" },
    ],
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Tecnología",
    children: [
      { id: ncNanoId(), href: currentPath, name: "Celulares y telefonía" },
      { id: ncNanoId(), href: currentPath, name: "Computación" },
      { id: ncNanoId(), href: currentPath, name: "Electrónica" },
      { id: ncNanoId(), href: currentPath, name: "Consolas y vídeojuegos" },
      { id: ncNanoId(), href: currentPath, name: "Cámaras y accesorios" },
      { id: ncNanoId(), href: currentPath, name: "Subscription" },
    ],
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Supermercado",
    children: [
      { id: ncNanoId(), href: currentPath, name: "Despensa" },
      { id: ncNanoId(), href: currentPath, name: "Bebidas" },
      { id: ncNanoId(), href: currentPath, name: "Bebés" },
      { id: ncNanoId(), href: currentPath, name: "Limpieza" },
      { id: ncNanoId(), href: currentPath, name: "Cuidado personal" },
      { id: ncNanoId(), href: currentPath, name: "Mascotas" },
    ],
  },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Ofertas",
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Novedades",
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Moda",
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Vender",
  },
  {
    id: ncNanoId(),
    href: currentPath,
    name: "Categorías",
    type: "megaMenu",
    children: MEGAMENU_TEMPLATES,
  },
];
