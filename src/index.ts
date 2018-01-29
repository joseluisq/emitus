interface EventListeners {
  [key: string]: any
}

export interface Emitus {
  on (eventName: string, listener: EmitusListener): void
  off (eventName: string, listener?: EmitusListener): void
  emit (eventName: string, args?: any): void
}

export type EmitusListener = (eventName?: string, args?: any) => void

export function emitus (): Emitus {
  const events: EventListeners = Object.create(null)

  return {
    on (eventName: string, listener: EmitusListener): void {
      (events[eventName] || (events[eventName] = [])).push(listener)
    },

    off (eventName: string, listener?: EmitusListener): void {
      if (events[eventName]) {
        events[eventName].splice(events[eventName].indexOf(listener), 1)
      }
    },

    emit (eventName: string, args?: any): void {
      (events[eventName] || []).map((listener: EmitusListener) => {
        if (listener && typeof listener === 'function') {
          listener(eventName, args)
        }
      })
    }
  }
}
