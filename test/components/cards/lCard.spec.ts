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
    expect(card.exists()).toBe(true)
  })

  it('check props value default forceShowSlot', () => {
    expect(card.props().forceShowSlot).toBe(false)
  })

  it('check props value default forceShowSlot', () => {
    expect(card.props().forceShowSlot).toBe(false)
  })

  it('check computed show Slot default falsy', () => {
    expect(card.vm.showSlot).toBe(false)
  })

  it('check computed show Slot default truthy', async () => {
    card.setProps({forceShowSlot : true})
    await card.vm.$nextTick()
    expect(card.vm.showSlot).toBe(true)
  })

  it('check if adds LCard--withoutShadow when hasShadow is true', async () => {
    card.setProps({hasShadow : true})
    await card.vm.$nextTick()
    const classes = card.findComponent({name:'VCard'}).classes()
    expect(classes).not.toContain('LCard--withoutShadow')
  })

  it('check if adds LCard--withoutShadow when hasShadow is true', async () => {
    card.setProps({hasShadow : false})
    await card.vm.$nextTick()
    const classes = card.findComponent({name:'VCard'}).classes()
    expect(classes).toContain('LCard--withoutShadow')
  })

  it('check if adds header and divider when has Title and Description', async () => {
    card.setProps({title: 'Titulo teste', description: 'Teste'})
    await card.vm.$nextTick()
    expect(card.find('.LCard__header').exists()).toBe(true)
    expect(card.findAllComponents({name:'VDivider'}).exists()).toBe(true)
  })

  it('check if removes header and divider when has not Title and Description', async () => {
    card.setProps({title: null, description: null})
    await card.vm.$nextTick()
    expect(card.find('.LCard__header').exists()).toBe(false)
    expect(card.findAllComponents({name:'VDivider'}).exists()).toBe(false)
  })
})
