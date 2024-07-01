import styled from 'styled-components'

export const ModalBackground = styled.div`
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: #11111136;
   z-index: 1000;
`

export const ModalContainer = styled.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: ${(props) => props.theme.colors.white};
   width: ${(props) => props.width || '1200px'};
   min-height: 300px;
   max-height: ${(props) => props.maxHeigth || '700px'};
   overflow: auto;
   border-radius: 5px;
   padding: 20px 30px;
`

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

export const CloseButton = styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   font-size: 20px;
   font-weight: bold;
   color: ${(props) => props.theme.colors.primary};
   display: flex;
   align-items: flex-end;

   :hover {
      color: ${(props) => props.theme.colors.hoverPrimary};
   }
`

export const Content = styled.div``
