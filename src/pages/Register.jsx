import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url('https://img.freepik.com/free-photo/charming-woman-with-bags-using-phone_23-2147962202.jpg?t=st=1657443429~exp=1657444029~hmac=9ad211a016487dbd501783871385bc34895e2fe9b24b92496d6e8d1151310227&w=1800')
            center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;
    ${mobile({ width: '75%' })}
`;
const Title = styled.h1`
    font-style: 24px;
    font-weight: 300;
`;
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
`;
const Agreement = styled.span`
    font-style: 12px;
    margin: 20px 0;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    cursor: pointer;
    color: white;
`;

function Register() {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE A ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="lastname" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirmPassword" />
                    <Agreement>
                        By creating an account, I consent to the processing of
                        my personal data in acccordance with the{' '}
                        <strong>PRIVACY POLICY</strong>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Register;
