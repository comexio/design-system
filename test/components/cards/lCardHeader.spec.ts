import { mount, Wrapper } from '@vue/test-utils'
// @ts-ignore
import { initSetupComponent } from '~/test/utils.setup'
// @ts-ignore
import LCardHeader from '~/src/components/cards/LCardHeader.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    title: 'Titulo Cabeçalho Card'
  }
}

describe('LCardHeader component', () => {
  let cardHeader: Wrapper<LCardHeader>

  beforeAll(() => {
    cardHeader = mount(LCardHeader, {
      ...defaultParams
    })
  })

  it('component exists', () => {
    expect(cardHeader.exists()).toBeTruthy()
  })

  it('component LCardHeader without description', async () => {
    const description = () => cardHeader.find('.LCardHeader__subtitle')

    await cardHeader.vm.$nextTick()

    expect(description().exists()).toBeFalsy()
  })

  it('component LCardHeader has description', async () => {
    cardHeader.setProps({ description: 'Descrição cabeçalho Card' })
    const description = () => cardHeader.find('.LCardHeader__subtitle')

    await cardHeader.vm.$nextTick()

    expect(description().exists()).toBeTruthy()
    expect(description().text()).toBe('Descrição cabeçalho Card')
  })
})
