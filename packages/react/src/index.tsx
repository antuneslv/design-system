import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$md',
  padding: '$4',
  border: 0,
  color: '$gray100',
  fontWeight: '$bold',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$ignite500',
  },
})
