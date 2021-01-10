import styled, { css } from 'styled-components'
import { slideBottom } from '../../styles/animations'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  /* props de estilos */
  ${props => props.fixed && css`
  
    ${slideBottom({ time: '1s', from: '-25%', to: '0px', type: 'ease' })}
    background-color: #fff;
    border-radius:40px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 480px;
    padding: 10px;
    position: fixed;
    right: 0;
    top: 0px;
    transform: scale(.7);
    z-index: 1;
  

  `}

`
export const Item = styled.li`
  padding: 0 8px;
`
