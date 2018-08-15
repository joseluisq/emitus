export interface Emitus {
  on (eventName: string, listener: EmitusListener): void
  off (eventName: string, listener?: EmitusListener): void
  emit (eventName: string, args?: any): void
}

export type EmitusListener<Args = any> = (eventName?: string, args?: Args) => void

export function emitus (): Emitus {
  const events: any[] = []

  return {
    on (eventName: string, listener: EmitusListener): void {
      if (eventName && listener) {
        events.push([ eventName, listener ])
      }
    },

    off (eventName: string, listener: EmitusListener): void {
      for (let i = 0; i < events.length; i++) {
        if (eventName === events[i][0] && listener === events[i][1]) {
          events.splice(i, 1)
        }
      }
    },

    emit (eventName: string, args?: any): void {
      for (let i = 0; i < events.length; i++) {
        if (eventName && eventName === events[i][0]) {
          events[i][1](eventName, args)
        }
      }
    }
  }
}
