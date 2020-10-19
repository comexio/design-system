import { mount, Wrapper } from '@vue/test-utils'
import { initSetupComponent } from '~/test/utils.setup'
import LCheckbox from '~/src/components/inputs/LCheckbox.vue'

const setupDefault = initSetupComponent()
const defaultParams = {
  ...setupDefault
}

const fakeOptions = ['um', 'dois', 'tres']
const fakeObjectOptions = [{
  value: 'um',
  text: 'Um'
}, {
  value: 'dois',
  text: 'Dois'
}]

describe('LCheckbox component', () => {
  let checkbox: Wrapper<LCheckbox>

  beforeAll(() => {
    checkbox = mount(LCheckbox, {
      ...defaultParams,
    })
  })

  it('render component without data', () => {
    expect(checkbox.exists()).toBe(true)
  })

  it('render options', async () => {
    checkbox.setProps({ options: fakeOptions })
    const inputs = () => checkbox.findAll('.v-input')

    await checkbox.vm.$nextTick()

    expect(inputs().length).toBe(3)
  })

  it('select item', async () => {
    const inputs = () => checkbox.findAll('.v-input')

    inputs().at(0).find('input').trigger('click')

    await checkbox.vm.$nextTick()

    expect(checkbox.emitted().input[0]).toEqual(['um'])
  })

  it('render array of object options', async () => {
    checkbox.setProps({ options: fakeObjectOptions })
    const inputs = () => checkbox.findAll('.v-input')

    await checkbox.vm.$nextTick()

    expect(inputs().length).toBe(2)

    const label = () => inputs().at(0)

    expect(label().text()).toBe('__translation__')
  })
})
