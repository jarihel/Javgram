
import styled from 'styled-components'
// selecto anidado & que hace referencia al selector anterior (button)
export const Button = styled.button`
display:flex;
align-items: center;
padding-top: 8px;
& svg {
margin-right:4px;
}
`
