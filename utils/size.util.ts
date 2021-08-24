interface HeightVariation {
  large?: boolean;
  small?: boolean;
  custom?: string;
}

const BUTTON_HEIGHT = {
  large: '45',
  small: '35',
  default: '40'
}

const INPUT_HEIGHT = {
  large: '40',
  small: '25',
  default: '35'
}

function getElementHeight (elementHeight: Record<string, string>, heightOption: HeightVariation): string {
  if (heightOption.large) {
    return elementHeight.large
  }
  
  if (heightOption.small) {
    return elementHeight.small
  }

  if (heightOption.custom) {
    return heightOption.custom
  }

  return elementHeight.default
}

export function getInputHeight (heightOption: HeightVariation): string {
  return getElementHeight(INPUT_HEIGHT, heightOption)
}

export function getButtonHeight (heightOption: HeightVariation): string {
  return getElementHeight(BUTTON_HEIGHT, heightOption)
}
