import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.6);
`;

export const Modal = styled.div`
  display: block;
  padding: 32px;
  max-width: 80%;
  max-height: auto;
  min-width: 300px;
  position: fixed;
  z-index: 1000 !important;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 4px;
  margin: 0px 0;
`;

export const Close = styled.div`
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 8px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalContent = styled.div`
  display: flex;
`;

export const Label = styled.div`
  font-family: Fira Code;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 26px;
  margin-right: 8px;
`;



export const Input = styled.input`
  height: 40px;
  width: 100%;
  min-width: 280px;
  max-width: 1fr;
  border-radius: 4px;
  border: 1px solid rgba(228, 228, 228, 0.6);
  padding-left: 8px;
  padding-right: 8px;
  &:focus {
    border: 2px solid $just-grey;
  }
  &:hover {
    box-shadow: 0px 0px 8px #e4e4e4;
  }
`;




