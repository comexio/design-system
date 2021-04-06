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

  it('check doesnt show ".LCard--shadow" when props true', async () => {
    card.setProps({hasShadow : true})
    await card.vm.$nextTick()
    expect(card.find('.LCard--shadow').exists()).toBe(false)
  })

  it('check shows ".LCard--shadow" when props false', async () => {
    card.setProps({hasShadow : false})
    await card.vm.$nextTick()
    expect(card.find('.LCard--shadow').exists()).toBe(true)
  })

  it('check shows header and divider when has Title and Description', async () => {
    card.setProps({title: 'Titulo teste', description: 'Teste'})
    await card.vm.$nextTick()
    expect(card.find('.LCard__header').exists()).toBe(true)
    expect(card.findAllComponents({name:'VDivider'}).exists()).toBe(true)
  })

  it('check doenst show header and divider when hasnt Title and Description', async () => {
    card.setProps({title: null, description: null})
    await card.vm.$nextTick()
    expect(card.find('.LCard__header').exists()).toBe(false)
    expect(card.findAllComponents({name:'VDivider'}).exists()).toBe(false)
  })
})
