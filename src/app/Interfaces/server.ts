import { Web } from "./web";

export interface Server {
    id: number;
    nombre: string;
    ip: string;
    estado: string; 
    web?: Web;
}
