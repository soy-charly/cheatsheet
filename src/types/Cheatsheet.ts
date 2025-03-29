import { JSX } from "react";

export interface Cheatsheet {
  id: string;
  title: string;
  description: string;
  content: JSX.Element; // Aquí definimos que 'content' será un JSX.Element (componente de React)
}
