import {
    Facebook,
    Instagram,
    Twitter,
    WhatsApp,
    Public,
    Room,
    Phone,
    Email,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

// #region styled-components
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: 'column' })}
`;
const Logo = styled.h1``;
const Desc = styled.div`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;

    ${mobile({ display: 'none' })}
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`;
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;
// #endreiogn

function Footer() {
    return (
        <Container>
            <Left>
                <Logo>LAMA. </Logo>
                <Desc>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="#3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="#E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="#55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="#25D366">
                        <WhatsApp />
                    </SocialIcon>
                    <SocialIcon color="#075E54">
                        <Public />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: '10px' }} />
                    Rm 2915, 29F, Ching Chak House, Ching Ho Est., Sheung Shui,
                    N.T., Hong Kong
                </ContactItem>
                <ContactItem>
                    <Phone style={{ marginRight: '10px' }} />
                    +852 9481 5183
                </ContactItem>
                <ContactItem>
                    <Email style={{ marginRight: '10px' }} />
                    jayylw@protonmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
}

export default Footer;
