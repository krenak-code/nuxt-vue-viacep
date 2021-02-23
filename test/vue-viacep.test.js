import { addViaCep, bootstrapVueContext, compositeConfiguration, customWrapper } from '~/test/fixture/utils'
import Mounted from '~/test/fixture/pages/mounted'

describe('plugin is defined', () => {
  let vueCtx = null

  beforeEach(() => {
    vueCtx = bootstrapVueContext(compositeConfiguration(addViaCep))
  })

  afterEach(() => {
    vueCtx.teardownVueContext()
  })

  test('init', () => {
    const wrapper = customWrapper(Mounted, vueCtx)
    expect(wrapper.vm).toBeTruthy()
    expect(wrapper.vm.$viaCep.buscarCep).toBeTruthy()
  })
})
