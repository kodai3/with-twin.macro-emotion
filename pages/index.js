import 'twin.macro'
import { Animated, basicStyles, Combined } from '../shared/styles'

const Home = () => (
  <div tw="py-12 px-8 bg-purple-100" >
    <div css={basicStyles}>Cool Styles</div>
    <Combined>
      With <code>:hover</code>.
    </Combined>
    <Animated >Let's bounce.</Animated>
  </div>
)

export default Home
