import { screen, waitFor } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '~/test/utils.setup.testingLibrary'
import LLinearChartLine from '~/src/components/charts/LLinearChartLine.vue'

import { mockData, mockTranslationLine } from './mocks'

interface LineData {
  label?: String;
  description?: String;
  resultContent?: String;
  toolTipContent?: String;
  percentage?: String | Number;
  quantity?: String | Number;
  total?: String | Number;
  value?: String | Number;
}

interface TranslationData {
  value?: String;
  records?: String;
  seeMore?: String;
}

interface Props {
  data: LineData;
  index?: Number;
  color?: String;
  lastItem?: Boolean;
  isExpanded?: Boolean;
  isExpandable?: Boolean;
  isTagChart?: Boolean;
  translationLine?: TranslationData;
  valueSymbol?: String;
  itemsWithoutDetails?: Array<String>;
  labelMaxLength?: Number;
  descriptionMaxLength?: Number;
  applyCursorPointer?: Boolean;
  showToolTip?: Boolean;
}

const render = (props?: Props) => {
  return renderComponent(LLinearChartLine, { props })
}

// TODO: Migrar restante dos testes para a testing library
describe('LLinearChartLine', () => {
  it('renders description', () => {
    render({ data: mockData })

    expect(screen.getByText('FOO DESCRIPTION')).toBeInTheDocument()
  })

  it('truncates description and shows tooltip', async () => {
    render({ data: mockData, descriptionMaxLength: 3 })

    const description = screen.getByText('FOO...')

    expect(description).toBeInTheDocument()
    expect(screen.queryByTestId('description-tooltip')).not.toBeInTheDocument()

    userEvent.hover(description)

    await waitFor(() => {
      expect(screen.getByTestId('description-tooltip'))
        .toHaveTextContent('FOO DESCRIPTION')
    })
  })

  it('renders translation and plain text from translationLine', () => {
    render({ data: mockData, translationLine: mockTranslationLine })

    expect(screen.getByText('Peso: 3.208')).toBeInTheDocument()
    expect(screen.getByText('Foo Records: 81')).toBeInTheDocument()
  })

  it('renders result content', () => {
    render({ data: { ...mockData, resultContent: 'FOO RESULT CONTENT' } })

    expect(screen.getByText('FOO RESULT CONTENT')).toBeInTheDocument()
  })
})
