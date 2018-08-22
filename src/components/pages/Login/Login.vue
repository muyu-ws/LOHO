<template>
    <div class="app-login">
        <app-login-header></app-login-header>
        <app-home-logo></app-home-logo>
        <form @submit.prevent="submit">
        <label>手机号</label>
        <ui-input type="text" v-model="phone" placeholder="请输入手机号">
            <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
        </ui-input>
        <label>验证码</label>
        <ui-input type="text" placeholder="请输入验证码" v-model="code"></ui-input>
        <button type="submit" class="submit">登陆</button>
    </form>
        
        <app-home-nav></app-home-nav>
    </div>
</template>

<script>

import AppHomeNav from '../Home/HomeNav'
import AppHomeLogo from '../Home/HomeLogo'
import AppLoginHeader from './LoginHeader'
export default {
    name:'AppLogin',
    components:{
        AppHomeNav,
        AppLoginHeader,
        AppHomeLogo
    },
    data(){
        return {
            phone:'',
            code:''
        }
    },
    computed: {
        isPhone() {
            var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(this.phone)) {
                return false;
            } else {
                return true;
            }
        }
    },
    methods: {
        submit() {
            if (!this.code) return false;
            this.$store.dispatch('action_login', {
                code: this.code, phone: this.phone,
                success: (user_state) => {
                    console.log('登陆成功')
                    //存cookie

                    for (const key in user_state) {
                        if (user_state.hasOwnProperty(key)) {
                            const element = user_state[key];
                            this.$cookies.set(key,element,"7d","/"); 
                        }
                    }

                    this.$router.push('/marker')
                },
                fail: () => {
                   console.log('短信验证码错误')
                }
            })
        },
        sendCode() { //发送验证码了
            this.$http.post(this.server_config.mz+'/v4/api/code?__t=' + Date.now(), {
                mobile: this.phone,
                type: "2"
            }).then(res => {
                if (res.data.status === 0) {
                    console.log('验证码发送成功')
                }
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .app-login{
        overflow-x: auto;
        margin-bottom:0.6rem; 
        margin-top:0.56rem;
        text-align: center;

        form{
            padding: 0.15rem;

            label{
                padding-left: 0.15rem;
                margin-top: 0.15rem;
                display: block;
                text-align: left;
            }
            
            .submit{
                width:1.63rem ;
                 background: rgb(241, 50, 16);
                 color: #fff;
                 border:none;
                 border-radius: 0.36rem;
                 margin-top:0.45rem ;
                 padding:8px 12px;
                font-size: 0.15rem;
                outline: none;
              
            }
            .send-code{
                width:0.95rem;
                position: absolute;
                right:5px;
                top:15px;
                background: #29a097;
                color: #fff;
                height:0.3rem;
                line-height: 0.3rem;
                text-align: center;
                border-radius: 3px;
                cursor: pointer;
            }
        }
    }
</style>
