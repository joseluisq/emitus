export interface Emitus {
  on (eventName: string, listener: EmitusListener): void
  off (eventName: string, listener?: EmitusListener): void
  emit (eventName: string, args?: any): void
}

export type EmitusListener = (eventName?: string, args?: any) => void

export function emitus (): Emitus {
  const events: any[] = []

  return {
    on (eventName: string, listener: EmitusListener): void {
      events.push([ eventName, listener ])
    },

    off (eventName: string, listener?: EmitusListener): void {
      for (let i = 0; i < events.length; i++) {
        const event = events[i]

        if (event[0] === eventName && event[1] === listener) {
          events.splice(i, 1)
          break
        }
      }
    },

    emit (eventName: string, args?: any): void {
      for (let i = 0; i < events.length; i++) {
        const event = events[i]

        if (event[0] === eventName) {
          event[1](eventName, args)
          break
        }
      }
    }
  }
}
