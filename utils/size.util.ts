interface InputHeight {
  large?: boolean;
  small?: boolean;
  custom?: string;
}

const INPUT_HEIGHT = {
  large: '40',
  small: '25',
  default: '35'
}

export function getInputHeight ({ large, small, custom }: InputHeight): string {
    if (large) {
      return INPUT_HEIGHT.large
    }

    if (small) {
      return INPUT_HEIGHT.small
    }

    if (custom) {
      return custom
    }

    return INPUT_HEIGHT.default
}
