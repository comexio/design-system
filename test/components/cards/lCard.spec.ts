import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LCard from '~/src/components/cards/LCard.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault,
  propsData: {
    title: 'Titulo do Card'
  }
}

describe('LCard component', () => {
  let card: Wrapper<LCard>

  beforeAll(() => {
    card = mount(LCard, {
      ...defaultParams
    })
  })

  it('component lCard exists', () => {
    expect(card.exists()).toBeTruthy()
  })

  it('component lCard without description', async () => {
    const description = () => card.find('.LCardWithoutDescription')

    await card.vm.$nextTick()

    expect(description().exists()).toBeTruthy()
  })

  it('component lCard has description', async () => {
    card.setProps({ description: 'Descricao do Card' })
    const description = () => card.find('.LCardWithoutDescription')

    await card.vm.$nextTick()

    expect(description().exists()).toBeFalsy()
  })
})
