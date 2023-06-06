import { ReactNode } from 'react'
import { AnyStyledComponent } from 'styled-components'
import { FONT_WEIGHTS, FONT_SIZES, TEXT_COLORS, TextContainer } from './styles'

interface TextProps {
  children: ReactNode
  component?: string

  weight?: keyof typeof FONT_WEIGHTS
  size?: keyof typeof FONT_SIZES
  variant?: keyof typeof TEXT_COLORS
}

export function Text({
  children,
  component = 'div',
  weight = 'regular',
  size = 'md',
  variant = 'base-text',
}: TextProps) {
  return (
    <TextContainer
      variant={variant}
      weight={weight}
      size={size}
      as={component as AnyStyledComponent}
    >
      {children}
    </TextContainer>
  )
}
