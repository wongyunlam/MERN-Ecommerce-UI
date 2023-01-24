import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

// #region styled-components
const Container = styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: '10px 0' })}
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;
const Input = styled.input`
    border: none;
    ${mobile({ width: '50px' })}
`;
const Logo = styled.h1`
    font-weight: bold;
    text-decoration: none;

    ${mobile({ fontSize: '24px' })}
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: '2', justifyContent: 'center' })}
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;
const BaseStyleLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;
// #endregion

function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: 'gray', fontSize: '16px' }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        <BaseStyleLink to="/home">Déjà vu.</BaseStyleLink>
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>
                        <BaseStyleLink to="/register">REGISTER</BaseStyleLink>
                    </MenuItem>
                    <MenuItem>
                        <BaseStyleLink to="/login">SIGN IN</BaseStyleLink>
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent="69" color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Navbar;
