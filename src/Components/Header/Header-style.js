import styled from 'styled-components';

export const HeaderWrapper = styled.header`
   background-color: grey;
   width: 100%;
   padding: 15px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const MyGallery = styled.h1`
   color: white;
   margin-left: 15px;
   margin-block-start: 0;
   margin-block-end: 0;

   @media (max-width: 700px){
      font-size: 16px;
    }
`;

export const Input = styled.input`
   border: none;
   outline: none;
   padding: 10px 5px;
   width: 50%;

   @media (max-width: 700px){
      width: 40%;
   }
`;

export const ButtonsWrapper =styled.div`
 display: flex;
 margin-right: 15px;

 @media (max-width: 700px){
   flex-direction: column;
 }
`;

export const LoginBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
`;

export const SignUpBtn = styled.button``;
