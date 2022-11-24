import {Server} from './server'

export interface Web {
    nombre: string;
    consumoCPU?: number;
    consumoRAM?: number;
    consumoGPU?: number;
    consumoHDD?: number;
    version?: number;
    servidor: Server | null;
}
