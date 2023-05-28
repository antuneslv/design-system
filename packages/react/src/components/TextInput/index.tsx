import { ComponentProps, forwardRef, ElementRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputType = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputType>(
  ({ prefix, ...props }: TextInputType, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
