import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import Announcements from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({ flexDirection: 'column', padding: '20px' })}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;

    ${mobile({ height: '40vh' })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;

    ${mobile({ padding: '20px' })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0;
`;
const Price = styled.div`
    font-weight: 100;
    font-size: 40px;
`;
const FilterContainer = styled.div`
    margin: 30px 0;
    width: 50%;
    display: flex;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    margin: 0 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${mobile({ width: '100%' })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;
const Button = styled.button`
    padding: 15px;
    background-color: white;
    border: 2px solid teal;
    margin: 30px 0;
    cursor: pointer;
    font-weight: 500;
`;

function Product() {
    return (
        <Container>
            <Navbar />
            <Announcements />

            <Wrapper>
                <ImgContainer>
                    <Image src="https://images.stockx.com/images/Bandai-Gundam-RG-1-144-STRIKE-FREEDOM-GUNDAM-TITANIUM-FINISH-Model-Kit-Action-Figure-V.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>ZGMF-X10A フリーダムガンダム</Title>
                    <Desc>
                        `フリーダムガンダム (FREEDOM GUNDAM)
                        は、テレビアニメ『機動戦士ガンダムSEED』シリーズに登場する、モビルスーツ(MS)に分類される架空の有人式人型ロボット兵器のひとつであり、番組後半から登場する新主役機である[1]。プロダクションコードはFREEDOM[2]、型式番号はZGMF-X10A（ゼット・ジー・エム・エフ・エックス・ワン・オー・エー本項では、続篇『機動戦士ガンダムSEED
                        DESTINY』に登場する、フリーダムガンダムの後継機であるストライクフリーダムガンダムについても解説する。
                    </Desc>
                    <Price> $ 20B</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkBlue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ cursor: 'pointer' }} />
                            <Amount>1</Amount>
                            <Add style={{ cursor: 'pointer' }} />
                        </AmountContainer>

                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    );
}

export default Product;
