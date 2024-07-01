/* eslint-disable no-unused-vars */

import {
   ModalBackground,
   ModalContainer,
   HeaderContainer,
   CloseButton,
   Content
} from './ModalStyles'

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

export default function Modal({ isOpen, onClose, children, width, minHeight, title }) {
   return (
      <ModalBackground>
         <ModalContainer width={width} minHeight={minHeight}>
            <HeaderContainer>
               <h2>{title}</h2>
               <CloseButton onClick={onClose}>
                  <CloseOutlinedIcon style={{ width: 35, height: 35 }} />
               </CloseButton>
            </HeaderContainer>
            <Content>{children}</Content>
         </ModalContainer>
      </ModalBackground>
   )
}
