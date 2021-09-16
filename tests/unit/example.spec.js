import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import storeConfig from './mocks/store-config'
import Navbar from '@/components/Navbar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
const store = new Vuex.Store(storeConfig)


describe('Tests de Vuex', () => {
  const opinion = { nombrePersona: 'pedro', tituloJuego: 'hola', opinionPersona: 'buen juego' }

  it('comprobar el ingreso de una nueva opinión', () => {
    store.commit('Guardar_opinion', opinion)
    expect(store.state.opiniones).toHaveLength(1)
  })

  it('edición de opinión y comprueba modificacion', () => {
    store.dispatch('editarOpinion', opinion.id)
    expect(store.state.opiniones[0]).not.toEqual([opinion])
  })

})

describe('Navbar.vue', () => {
  const wrapper = mount(Navbar)
  it('que se encuentre la palabra “Administración”', () => {
    let pruebaAdministracion = wrapper.find('li.admi')
    expect(pruebaAdministracion.text()).toEqual('Administracion')
  })

  it('comprobar longitud del título del componente navbar “Games Opinion”', () => {
    let titulo = wrapper.find('a.titulo')
    expect(titulo.text()).toHaveLength(13)
  })

})
