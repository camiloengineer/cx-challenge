import { ComponentType } from "react";

export interface LocationStates {
  "/"?: {};
  "/mi-perfil"?: {};
  "/mis-compras"?: {};
  "/detalle-compra"?: {};
  "/pagina-no-encontrada"?: {};
}

export type PathName = keyof LocationStates;

export interface Page {
  path: PathName;
  component: ComponentType<Object>;
}
