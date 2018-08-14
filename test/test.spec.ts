import { emitus, Emitus, EmitusListener } from '../src'

describe('Emitus', () => {
  let e: Emitus

  beforeEach(() => {
    e = emitus()
  })

  describe('api', () => {
    it('should be a function', () => {
      expect(typeof emitus).toBe('function')
    })

    it('should return an object', () => {
      expect(typeof e).toBe('object')
    })

    it('should contain an `on` function', () => {
      expect(typeof e.on).toBe('function')
    })

    it('should contain an `off` function', () => {
      expect(typeof e.off).toBe('function')
    })

    it('should contain an `emit` function', () => {
      expect(typeof e.emit).toBe('function')
    })
  })

  describe('on', () => {
    let onSpy: jasmine.Spy
    const onEvent: EmitusListener = () => console.log()

    beforeEach(() => {
      onSpy = spyOn(e, 'on')

      e.on('click', onEvent)
      e.on('doubleclick', onEvent)
    })

    it('should be a function', () => {
      expect(typeof e.on).toBe('function')
    })

    it('should be called', () => {
      expect(e.on).toHaveBeenCalled()
    })

    it('should track all the arguments of its calls', () => {
      expect(e.on).toHaveBeenCalledWith('click', onEvent)
      expect(e.on).toHaveBeenCalledWith('doubleclick', onEvent)
    })

    it('should contain the given arguments (`click` event)', () => {
      const [ type, args ] = onSpy.calls.argsFor(0)

      expect(type).toBe('click')
      expect(args).toEqual(onEvent)
    })

    it('should contain the given arguments (`doubleclick` event)', () => {
      const [ type, args ] = onSpy.calls.argsFor(1)

      expect(type).toBe('doubleclick')
      expect(args).toEqual(onEvent)
    })
  })

  describe('off', () => {
    let offSpy: jasmine.Spy
    const onEvent: EmitusListener = () => console.log()

    beforeEach(() => {
      offSpy = spyOn(e, 'off')

      e.on('mouseover', onEvent)
      e.on('mouseout', onEvent)

      e.off('mouseover', onEvent)
      e.off('mouseout', onEvent)
    })

    it('should be a function', () => {
      expect(typeof e.off).toBe('function')
    })

    it('should be called', () => {
      expect(e.off).toHaveBeenCalled()
    })

    it('should track all the arguments of its calls', () => {
      expect(e.off).toHaveBeenCalledWith('mouseover', onEvent)
      expect(e.off).toHaveBeenCalledWith('mouseout', onEvent)
    })

    it('should contain the given arguments (`mouseover` event)', () => {
      const [ type, args ] = offSpy.calls.argsFor(0)

      expect(type).toBe('mouseover')
      expect(args).toEqual(onEvent)
    })

    it('should contain the given arguments (`mouseout` event)', () => {
      const [ type, args ] = offSpy.calls.argsFor(1)

      expect(type).toBe('mouseout')
      expect(args).toEqual(onEvent)
    })
  })

  describe('emit', () => {
    let emitSpy: jasmine.Spy

    beforeEach(() => {
      emitSpy = spyOn(e, 'emit')

      e.on('keyup', () => console.log())
      e.on('keydown', () => console.log())

      e.emit('keyup', { a: 1, b: 2 })
      e.emit('keydown', { c: 3, d: 4 })
    })

    it('should be a function', () => {
      expect(typeof e.emit).toBe('function')
    })

    it('should be called', () => {
      expect(e.emit).toHaveBeenCalled()
    })

    it('should track all the arguments of its calls', () => {
      expect(e.emit).toHaveBeenCalledWith('keyup', { a: 1, b: 2 })
    })

    it('should contain the given arguments (`keyup` event)', () => {
      const [ type, args ] = emitSpy.calls.argsFor(0)

      expect(type).toBe('keyup')
      expect(args).toEqual({ a: 1, b: 2 })
    })

    it('should contain the given arguments (`keydown` event)', () => {
      const [ type, args ] = emitSpy.calls.argsFor(1)

      expect(type).toBe('keydown')
      expect(args).toEqual({ c: 3, d: 4 })
    })
  })
})
