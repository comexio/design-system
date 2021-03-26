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

  it('check props value default forceShowSlot', () => {
    expect(card.props().forceShowSlot).toBeFalsy()
  })

  it('check computed show Slot default falsy', () => {
    expect(card.vm.showSlot).toBeFalsy()
  })

  it('check computed show Slot default truthy', async () => {
    card.setProps({forceShowSlot : true})
    await card.vm.$nextTick()
    expect(card.vm.showSlot).toBeTruthy()
  })
})
