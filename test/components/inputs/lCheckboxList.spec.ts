import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LCheckboxList from '~/src/components/inputs/LCheckboxList.vue'

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

describe('selectNamed component', () => {
  let checkboxList: Wrapper<LCheckboxList>

  beforeAll(() => {
    checkboxList = mount(LCheckboxList, {
      ...defaultParams,
    })
  })

  it('render component without data', () => {
    expect(checkboxList.exists()).toBe(true)
  })

  it('select all is empty', async () => {
    const selectAllItem = () => checkboxList.find('.LCheckboxList__group__item--selectAll')

    selectAllItem().find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected.length).toBe(0)
  })

  it('component render items', async () => {
    checkboxList.setProps({ items: itemsFake })
    const list = () => checkboxList.findAll('.LCheckboxList__group__list .LCheckboxList__group__item')

    await checkboxList.vm.$nextTick()

    expect(list().length).toBe(4)
  })

  it('select first item', async () => {
    const list = () => checkboxList.findAll('.LCheckboxList__group__list .LCheckboxList__group__item')
    const firstItem = () => list().at(0)

    firstItem().find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected).toEqual(['armador'])
  })

  it('toggle select all items', async () => {
    const selectAllItem = () => checkboxList.find('.LCheckboxList__group__item--selectAll')
    selectAllItem().find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected.length).toBe(4)

    selectAllItem().find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected.length).toBe(0)
  })

  it('search for item', async () => {
    const input = () => checkboxList.find('.LCheckboxList__input')
    const list = () => checkboxList.findAll('.LCheckboxList__group__list .LCheckboxList__group__item')
    list().at(0).find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected.length).toBe(1)
    input().vm.$emit('input', 'Cidade')

    await checkboxList.vm.$nextTick()

    expect(list().length).toBe(1)
    list().at(0).find('.v-label').trigger('click')

    await checkboxList.vm.$nextTick()

    expect(checkboxList.vm.selected.length).toBe(2)

    input().vm.$emit('input', '')

    await checkboxList.vm.$nextTick()

    expect(list().length).toBe(4)
    expect(checkboxList.vm.selected.length).toBe(2)
  })
})
