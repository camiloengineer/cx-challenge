import { ComponentType, LazyExoticComponent } from "react";

export interface LocationStates {
  /* eslint-disable */
  "/"?: {};
  "/mi-perfil"?: {};
  "/mis-compras"?: {};
  "/detalle-compra"?: {};
  "/pagina-no-encontrada"?: {};
  /* eslint-enable */
}
export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: LazyExoticComponent<ComponentType<any>>;
  isPrivate: boolean;
}
