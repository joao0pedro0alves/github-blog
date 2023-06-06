import styled, { css } from 'styled-components'

export const FONT_WEIGHTS = {
  regular: '400',
  bold: '700',
}

export const FONT_SIZES = {
  xs: '0.75rem' /** 12 */,
  sm: '0.875rem' /** 14px */,
  md: '1rem' /** 16px */,
  lg: '1.125rem' /** 18px */,
  xl: '1.25rem' /** 20px */,
  '2xl': '1.5rem' /** 24px */,
} as const

export const TEXT_COLORS = {
  'base-title': 'base-title',
  'base-subtitle': 'base-subtitle',
  'base-text': 'base-text',
  'base-span': 'base-span',
  'base-label': 'base-label',
  primary: 'primary',
} as const

interface TextContainerProps {
  weight: keyof typeof FONT_WEIGHTS
  size: keyof typeof FONT_SIZES
  variant: keyof typeof TEXT_COLORS
}

export const TextContainer = styled.div<TextContainerProps>`
  ${(props) => {
    return css`
      font-size: ${FONT_SIZES[props.size]};
      font-weight: ${FONT_WEIGHTS[props.weight]};
      color: ${props.theme[TEXT_COLORS[props.variant]]};
    `
  }}
`
