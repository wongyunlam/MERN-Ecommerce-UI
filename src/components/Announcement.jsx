import styled from 'styled-components';

// #region styled-components
const Container = styled.div`
    height: 30px;
    background-color: peachpuff;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;
// #endregion

function Announcements() {
    return (
        <Container>Super Beal! Free Shippiing on Orders Over $50 </Container>
    );
}

export default Announcements;
