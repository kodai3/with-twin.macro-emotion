import styled from '@emotion/styled'
import tw, { css } from 'twin.macro'


export const basicTwStyles = tw`
  bg-white
  text-blue-400
  border
  border-solid
  border-green-400
  transition-all
  ease-linear
  my-12
  py-4
  px-2
  text-xl	
`

export const basicStyles = css`
  ${basicTwStyles}
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
`

const hoverTwStyles = tw`hover:text-white hover:bg-gray-300 border hover:border-blue-300`

export const hoverStyles = css`
  ${hoverTwStyles}
  &:hover {
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
`
export const Animated = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  ${tw`animate-bounce`};
`
