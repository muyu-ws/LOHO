<template>
    <div class="app-home-foter">
        <h4>已经到底了</h4>
        <div>
            <ul >
                <router-link tag="li" class="free" :to="{name:'marker'}"><i class="fa fa-map-marker"> </i>  欢迎免费到店试戴</router-link>
                <li class="hpone">
                    <span>预约热线：400-887-1920</span>
                    <span>（服务时间9：00 - 23：00）</span>
                </li>
            </ul>
            <img src="../../../assets/1.png" alt="">
        </div>
    </div>
</template>


<script>




export default {
  name: 'AppHomeFoter',
  
}
</script>
// lang=scss 表示写的是scss代码
<style scoped lang = "scss">
    .app-home-foter{
        ul{
            display: flex;
            justify-content: space-between;
            height: 0.76rem;
            background: rgb(26, 25, 25);
            border-bottom:2px solid #000;
            color: #fff;
            font-size: 0.14rem;

            .free{
                width: 50%;
                height: 0.76rem;
                text-align: center;
                line-height: 0.76rem;
                border-right:2px solid #000;
                box-sizing: border-box;

                i{
                    color: red;
                    font-size: 0.2rem;
                }
            }
            .hpone{
                width: 50%;
                height: 0.76rem;
                text-align: center;
                
                display: flex;
                justify-content: space-around;
                flex-direction: column;
                padding: 0.1rem 0;
            }
        }
        h4{
            height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>