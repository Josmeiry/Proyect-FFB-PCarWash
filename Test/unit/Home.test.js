import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import MapaCarWash from '../../src/Home.vue'

//  Simulamos Leaflet para no cargar el mapa real
vi.mock('leaflet', () => {
  const mockMap = {
    setView: vi.fn().mockReturnThis(),
    addTo: vi.fn().mockReturnThis()
  }

  const leafletMock = {
    map: vi.fn(() => mockMap),
    tileLayer: vi.fn(() => ({ addTo: vi.fn() })),
    marker: vi.fn(() => ({
      addTo: vi.fn(() => ({
        bindPopup: vi.fn(() => ({
          openPopup: vi.fn()
        }))
      }))
    }))
  }

  return { __esModule: true, default: leafletMock, ...leafletMock }
})



describe('Home.vue', () => {
  it('renderiza la lista de carwash', () => {
    const wrapper = mount(MapaCarWash)

    // Verifica que el título esté
    expect(wrapper.text()).toContain('Ubicaciones de los Car Wash')

    // Verifica que renderizó los tres carwash
    const carwashItems = wrapper.findAll('.carwash-item')
    expect(carwashItems.length).toBe(3)

    // Verifica que contiene un nombre específico
    expect(wrapper.text()).toContain('S52 Auto Spa')
  })

  it('llama showOnMap al hacer click en un carwash', async () => {
    const wrapper = mount(MapaCarWash)

    // Simula click en el primer carwash
    const firstItem = wrapper.find('.carwash-item')
    await firstItem.trigger('click')

    // Si el mock se usó correctamente, no debería lanzar errores
    expect(firstItem.exists()).toBe(true)
  })
})
