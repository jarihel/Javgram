
import { keyframes, css } from 'styled-components'
/* FADE IN */
const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }
    to {
        filter:blur(0);
        opacity:1;
    }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${fadeInKeyframes} ${time} ${type};`

/* SLIDE IN */
const slideKeyframes = (from, to) => {
  return keyframes`
    from {
      top:${from};
    }
    to {
        top:${to};
    }
    `
}
export const slideBottom = ({ time = '1s', type = 'cubic-bezier(.18,.89,.32,1.28)', from, to } = {}) =>
  css` animation: ${time} ${slideKeyframes(from, to)} ${type}, ${time} ${fadeInKeyframes} ${type} ;`

/* SLIDE IN 2 */
const slide2Keyframes = keyframes`
    from {
      transform: translate3d(0,-100px,0);
    }
    to {
        transform: translate3d(0,0,0) ;
    }
    `
export const slide2Bottom = ({ time = '1s', type = 'ease' } = {}) =>
  css` animation: ${time} ${slide2Keyframes} ${type} forwards;`
