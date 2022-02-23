import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent, addElemWithDataAppToBody } from '~/test/utils.setup'
import LDropdownCheckbox from '~/src/components/inputs/LDropdownCheckbox.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const itemsFake = [{
  value: 'armador',
  label: 'Armador'
}, {
  value: 'exporterCity',
  label: 'Cidade do Exportador'
}, {
  value: 'dateSent',
  label: 'Data do Embarque'
}, {
  value: 'exporterState',
  label: 'Estado do Exportador'
}]

describe('lDropdownCheckbox component', () => {
  addElemWithDataAppToBody()
  let dropdownCheckbox: Wrapper<LDropdownCheckbox>

  beforeAll(() => {
    dropdownCheckbox = mount(LDropdownCheckbox, {
      ...defaultParams,
    })
  })

  it('render component without data', () => {
    expect(dropdownCheckbox.exists()).toBe(true)
  })

  it('open menu on click', async () => {
    const button = () => dropdownCheckbox.find('.LButtonSelect')
    const menu = () => dropdownCheckbox.findComponent({ name: 'v-menu' })
    button().trigger('click')

    await dropdownCheckbox.vm.$nextTick()

    expect(menu().vm.isActive).toBe(true)
  })

  it('find item', async () => {
    dropdownCheckbox.setProps({ items: itemsFake })
    const item = () => dropdownCheckbox.find('.LCheckboxList__group__list .LCheckboxList__group__item')

    await dropdownCheckbox.vm.$nextTick()

    item().find('.v-label').trigger('click')

    await dropdownCheckbox.vm.$nextTick()

    expect(dropdownCheckbox.emitted().updatedItems).toBeTruthy()
  })
})


describe('lDropdownCheckbox component with slot', () => {
  addElemWithDataAppToBody()
  let dropdownCheckbox: Wrapper<LDropdownCheckbox>

  beforeAll(() => {
    dropdownCheckbox = mount(LDropdownCheckbox, {
      ...defaultParams,
      scopedSlots: {
        actions: '<p>Foo Actions</p>'
      }
    })
  })

  it('renders component with slot', async () => {
    const button = () => dropdownCheckbox.find('.LButtonSelect')
    const menu = () => dropdownCheckbox.findComponent({ name: 'v-menu' })
    const actions = dropdownCheckbox.find('.LDropdownCheckbox__menu__actions')

    button().trigger('click')
    await dropdownCheckbox.vm.$nextTick()

    expect(menu().vm.isActive).toBe(true)
    expect(actions.text()).toBe('Foo Actions')
  })
})
