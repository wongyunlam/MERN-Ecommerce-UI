import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column', padding: '0' })}
`;

function Categories() {
    return (
        <Container>
            {categories.map((el) => (
                <CategoryItem el={el} key={el.id} />
            ))}
        </Container>
    );
}

export default Categories;
