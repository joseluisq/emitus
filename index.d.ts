export type EmitusListener = (eventName?: string, args?: any) => void

export interface Emitus {
  on (eventName: string, listener: EmitusListener): void
  off (eventName: string, listener?: EmitusListener): void
  emit (eventName: string, args?: any): void
}

export function emitus (): Emitus
