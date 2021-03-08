import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LModal from '~/src/components/modal/LModal.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

describe('LModal component', () => {
  addElemWithDataAppToBody()

  let modal: Wrapper<LModal>

  beforeAll(() => {
    modal = mount(LModal, {
      ...defaultParams,
    })
    modal.setProps({dialog: true})
  })

  it('rendering as confirmational modal (default)', () => {
    expect(modal.props('modalType')).toEqual({confirmational: true})
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

  it('Clear button event emitted', async () => {
    modal.setProps({clearButton: true})
    await modal.vm.$nextTick()

    modal.find('.modal__button--clear').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().clear).toBeTruthy()
  })

  it('rendering as informational modal', async () => {
    modal.setProps({ modalType: {informational: true}})
    await modal.vm.$nextTick()

    expect(modal.props('modalType')).toEqual({informational: true})
    expect(modal.find('.modal__title__button').exists()).toBe(true)
  })

  it('informational modal events emitted', async () => {
    modal.find('.modal__title__button').trigger('click')
    await modal.vm.$nextTick()
    expect(modal.emitted().close).toBeTruthy()
  })

  it('emit event on click outside', async () => {
    const close = jest.fn()
    modal.vm.$on('close', close)
    expect(close).not.toHaveBeenCalled()

    const dialog = () => modal.findComponent({ name: 'v-dialog' })
    dialog().vm.onClickOutside(new Event('click'))
    await modal.vm.$nextTick()

    expect(close).toHaveBeenCalledTimes(1)
  })
})
