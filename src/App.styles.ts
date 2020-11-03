import  styled, { createGlobalStyle } from 'styled-components'
import BGImage from './images/quiz-backg.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height:10%
}

body {
    background-image : url(${BGImage});
    background-size:cover;
    margin:0;
    padding: 0 20px;
    display:flex;
    justify-content: center;

}

*{
    box-sizing:border-box;

}
`;

export const Wrapper = styled.div`
display : flex;
flex-direction:column;
align-items:center;

>p {
    color:red;
    font-size:2rem;
    margin:0;
}

h1{
    background-image:linear-gradient(360deg, #fff, blue);
    background-size:100%;
    background-clip:text;
    filter:drop-shadow(5px 12px #008583)
    font-size:70px;
    tect-align:center;
    font-weight:400;


}
`