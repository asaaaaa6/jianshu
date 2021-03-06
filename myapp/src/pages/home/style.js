import styled from 'styled-components'

// overflow:hidden在浮动元素的父元素使用，可以产生BFC，使父元素被子元素撑大
// float:left实现div自动缩小
export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        width:625px;
        height:270px;
    }
`;
export const HomeRight = styled.div`
    width:280px;
    float:right;
`;
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-10px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    background:#f7f7f7;
    height:32px;
    margin-left:18px;
    padding-right:10px;
    line-height:32px;
    font-size:14px;
    float:left;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    margin-bottom:10px;
    .topic-pic{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;

    }
`;

// List组件样式
export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .pic{
        display:block;
        width:150px;
        height:100px;
        float:right;
        border-radius:10px;
        margin-top:10px;
    }
`;
export const ListInfo = styled.div`
    width:460px;
    padding-right:15px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
        margin:0;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;
        margin:8px 0;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
    margin-bottom: 5px;
`;
export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;
export const LoadMore = styled.div`
    width:100%;
    height:40px;
    margin:30px 0;
    line-height:40px;
    background:#a5a5a5;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor: pointer;
`;
// 回到顶部
export const BackTop = styled.div`
    position:fixed;
    right:100px;
    bottom:100px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    border: 1px solid #ccc;
    font-size:14px;
`