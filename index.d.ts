export type EmitusListener<T = any> = (eventName: string, arg: T) => void

export interface Emitus {
  /**
   * Adds an event listener
   *
   * @param eventName string
   * @param listener EmitusListener
   */
  on<T = any> (eventName: string, listener: EmitusListener<T>): void

  /**
   * Removes a registered event listener
   *
   * @param eventName string
   * @param listener EmitusListener
   */
  off<T = any> (eventName: string, listener: EmitusListener<T>): void

  /**
   * Emits a registered event listener
   *
   * @param eventName string
   * @param listener EmitusListener
   */
  emit<T = any> (eventName: string, arg?: T): void
}

export declare function emitus (): Emitus
