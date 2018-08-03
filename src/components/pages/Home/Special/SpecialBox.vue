<template>
    <div class="app-home-special-box">
        <div class="title">
            <h2>{{data.title.word}}</h2>
            <a :href="data.more.url">更多></a>
        </div>
        <div class="title-img">
            <img :src="data.img.pic" alt="">
        </div>
        <ul class="ul-list">
            <li class="list-left fl">
                <span>{{data.show[0].tag}}</span>
                <p>{{data.show[0].tag_en}}</p>
                <img :src="data.show[0].pic" alt="">
            </li>
            <li  class="list-right fr">
                <span>{{data.show[1].tag}}</span>
                <p>{{data.show[1].tag_en}}</p>
                <img :src="data.show[1].pic" alt="">
            </li>
            <li class="list-right fr">
                <span>{{data.show[2].tag}}</span>
                <p>{{data.show[2].tag_en}}</p>
                <img :src="data.show[2].pic" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'app-home-special-box',
    props:['data']
}
</script>

<style lang="scss" scoped>
    .app-home-special-box{
        margin-top:0.1rem;
        height:4.11rem;
        .title-img{
            height: 1rem;
            width:100%;
            img{
                height: 100%;
                width:100%;
            }
        }
        .title{
         display: flex;
         width:100%;
         flex-direction: row;
         height:0.42rem;
         justify-content:space-between;
         background-color: #fff;
         text-align: center;

         h2{
             line-height: 0.22rem;
             font-size: 0.16rem;
            font-weight: 700;
             padding: 0.1rem;
         }
         a{
             line-height: 0.22rem;
             padding: 0.1rem;
             color:rgb(236, 13, 13);
         }
     }
        .ul-list{
            width:100% ;
            
            // display: flex;
            // flex-wrap: wrap;

            .list-left{
                width: 50%;
                height: 2.67rem;
                padding:0.5rem 0.12rem;
                border-right:1px solid #ccc;
                border-bottom:1px solid #ccc;
                background: #fff;
                flex-wrap: wrap;
                flex-flow: column;
                align-items: center;
                justify-content: space-between;
                display: flex;

                img{
                    width: 100%;
                    height: 0.65rem;
                }

                 span{
                    height: 40px;
                    line-height: 20px;
                    width: 110%;
                    text-align: center;

                }
                p{
                    line-height: 0.12rem;
                    font-size: 0.14rem;
                    height: 0.52rem;
                    width: 100%;
                    text-align: center;
                    padding: 0 0.15rem;
                    color: #ccc;
                }
            }
             .list-right{
                width: 50%;
                height: 1.21rem;
                padding: 0.12rem;
                border-bottom:1px solid #ccc;
                height: 1.335rem;
                flex-wrap: wrap;
                flex-flow: column;
                align-items: center;
                justify-content: space-between;
                display: flex;
                background: #fff;
                img{
                    width: 100%;
                    height: 0.65rem;
                }
                span{
                    height: 40px;
                    line-height: 20px;
                    width: 110%;
                    text-align: center;

                }
                p{
                    line-height: 0.12rem;
                    font-size: 0.14rem;
                    height: 0.52rem;
                    width: 100%;
                    text-align: center;
                    padding: 0 0.15rem;
                    color: #ccc;
                }
            }
        }
    }
</style>
