export interface Emitus {
    on(eventName: string, listener: EmitusListener): void;
    off(eventName: string, listener?: EmitusListener): void;
    emit(eventName: string, args?: any): void;
}
export declare type EmitusListener<Args = any> = (eventName?: string, args?: Args) => void;
export declare function emitus(): Emitus;
