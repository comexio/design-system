import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
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

describe('LCardHeader component rendering items when generateId props is true', () => {
  let cardHeader: Wrapper<LCardHeader>

  beforeAll(() => {
    cardHeader = mount(LCardHeader, {
      ...defaultParams,
      propsData: {
        title: 'Titulo Cabeçalho Card',
        generateId: true,
        image: 'imgpath'
      }
    })
  })

  it('should return slugged id with prefix when using idToSlug method', async () => {
    const expansionHeadersWithId = () => cardHeader.findAll('#cardHeader-titulo-cabecalho-card')
    await cardHeader.vm.$nextTick()

    expect(expansionHeadersWithId().length).toBe(1)
  })

  it('should return slugged id with prefix when using idToSlug method for image component', async () => {
    const imageInHeaderWithId = () => cardHeader.findAll('#cardHeader-image-titulo-cabecalho-card')
    await cardHeader.vm.$nextTick()

    expect(imageInHeaderWithId().length).toBe(1)
  })
})
