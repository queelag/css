import { FlexStyle } from 'react-native'
import { Style } from '../definitions/types'

const Position: Style<FlexStyle> = {
  psa: {
    position: 'absolute'
  },
  psf: {
    position: 'fixed' as any
  },
  psr: {
    position: 'relative'
  },
  pss: {
    position: 'sticky' as any
  },
  b: {
    bottom: 0
  },
  bp: {
    bottom: '%'
  },
  l: {
    left: 0
  },
  lp: {
    left: '%'
  },
  r: {
    right: 0
  },
  rp: {
    right: '%'
  },
  t: {
    top: 0
  },
  tp: {
    top: '%'
  }
}

export default Position
