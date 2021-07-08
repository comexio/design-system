import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LModal from '~/src/components/modal/LModal.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

describe('LModal component', () => {
  addElemWithDataAppToBody()
  const spyCloseModal = jest.spyOn(LModal.methods, 'closeModal')

  let modal: Wrapper<LModal>

  beforeAll(() => {
    modal = mount(LModal, {
      ...defaultParams,
    })
    modal.setProps({ dialog: true })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('rendering as confirmational modal (default)', () => {
    expect(modal.props('modalType')).toEqual({ confirmational: true })
    expect(modal.find('.modal__button--confirm').exists()).toBe(true)
    expect(modal.find('.modal__button--cancel').exists()).toBe(true)
  })

  it('confirmational modal events emitted', async () => {
    modal.find('.modal__button--confirm').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().confirm).toBeTruthy()

    modal.find('.modal__button--cancel').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().close).toBeTruthy()
  })

  it('check if the cancel button does not exist', async () => {
    modal.setProps({ cancelButton: false })
    await modal.vm.$nextTick()
    expect(modal.find('.modal__button--cancel').exists()).toBeFalsy()
  })

  it('Clear button event emitted', async () => {
    modal.setProps({ clearButton: true })
    await modal.vm.$nextTick()

    modal.find('.modal__button--clear').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().clear).toBeTruthy()
  })

  it('rendering as informational modal', async () => {
    modal.setProps({ modalType: { informational: true } })
    await modal.vm.$nextTick()

    expect(modal.props('modalType')).toEqual({ informational: true })
    expect(modal.find('.modal__title__button').exists()).toBe(true)
  })

  it('informational modal events emitted', async () => {
    modal.find('.modal__title__button').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().close).toBeTruthy()
  })

  it('emit event on click outside', async () => {
    const dialog = () => modal.findComponent({ name: 'v-dialog' })
    dialog().vm.$emit('click:outside')
    await modal.vm.$nextTick()

    expect(spyCloseModal).toHaveBeenCalledTimes(1)
    expect(modal.emitted().close).toBeTruthy()
  })

  it('doesnt emit event on click outside when closeOnOutsideClick is false', async () => {
    modal.setProps({ closeOnOutsideClick: false })
    await modal.vm.$nextTick()

    const dialog = () => modal.findComponent({ name: 'v-dialog' })
    dialog().vm.$emit('click:outside')
    await modal.vm.$nextTick()

    expect(spyCloseModal).toHaveBeenCalledTimes(0)
  })
})

describe('LModal component variant', () => {
  addElemWithDataAppToBody()

  let modal: Wrapper<LModal>

  beforeAll(() => {
    modal = mount(LModal, {
      ...defaultParams,
      propsData: {
        dialog: true,
        cancelButton: false,
        confirmButton: false,
        clearButton: false
      }
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('variant without divider', async () => {
    await modal.vm.$nextTick()
    expect(modal.find('.v-divider').exists()).toBe(false)
  })
})
