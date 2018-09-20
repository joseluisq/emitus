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

export function emitus (): Emitus {
  const events: [string, Function][] = []

  return {
    on<T> (eventName: string, listener: EmitusListener<T>) {
      if (eventName && listener) events.push([ eventName, listener ])
    },

    off<T> (eventName: string, listener: EmitusListener<T>) {
      for (let i = 0; i < events.length; i++) {
        if (eventName === events[i][0] && listener === events[i][1]) events.splice(i, 1)
      }
    },

    emit<T> (eventName: string, arg?: T) {
      for (let i = 0; i < events.length; i++) {
        if (eventName && eventName === events[i][0]) events[i][1](eventName, arg || null)
      }
    }
  }
}
