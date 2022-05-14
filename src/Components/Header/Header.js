import React from 'react';
import { ButtonsWrapper, HeaderWrapper, Input, LoginBtn, MyGallery, SignUpBtn } from './Header-style';

const Header = ({searchText, handleSearch}) => {
    return (
        <HeaderWrapper>
            <MyGallery>My Gallery</MyGallery>
            <Input
              placeholder='photoes, people, groups'
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <ButtonsWrapper>
                <LoginBtn>Log In</LoginBtn>
                <SignUpBtn>Sign Up</SignUpBtn>
            </ButtonsWrapper>
        </HeaderWrapper>
    )
}

export default Header;