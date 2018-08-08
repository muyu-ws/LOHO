<template>
    <div class="app-marker-free">
        <div class="content">
             <ul class="ul-list">
            <li><i class="fa fa-chevron-left" @click="$router.go(-1)"></i></li>
            <li>体验店</li>
            <li><i class="fa"></i></li>
            <router-link tag="li" exact :to="{name :'login'}"><i class="fa fa-user-o"></i></router-link>
            </ul>
        </div>
       
        <form @submit.prevent="submit">
            <label>城市</label>
            <ui-input type="text" v-model="city" >
            </ui-input>
            <label>门店</label>
            <ui-input type="text" v-model="catName" placeholder="请输入店铺名称">
            </ui-input>
        <label>手机号</label>
        <ui-input type="text" v-model="phone" placeholder="请输入手机号">
            <button type="button" @click="sendCode" v-if="isPhone" class="send-code">发送验证码</button>
        </ui-input>
        <label>验证码</label>
        <ui-input type="text" placeholder="请输入验证码" v-model="code"></ui-input>
        <button type="submit" class="submit">登陆</button>
    </form>
        
        <app-home-nav></app-home-nav>
        <app-home-foter></app-home-foter>
    </div>
</template>

<script>
import AppHomeNav from "../Home/HomeNav";
import AppHomeFoter from "../Home/HomeFoter";
export default {
  name: "app-marker-free",
  components: {
    AppHomeNav,
    AppHomeFoter
  },
  data() {
    return {
      phone: "",
      code: "",
      id: "",
      city:'',
      catName:'',

    };
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
      this.$store.dispatch("action_login", {
        code: this.code,
        phone: this.phone,
        success: user_state => {
          console.log("登陆成功");
          //存cookie

          for (const key in user_state) {
            if (user_state.hasOwnProperty(key)) {
              const element = user_state[key];
              this.$cookies.set(key, element, "7d", "/");
            }
          }

          this.$router.push("/marker");
        },
        fail: () => {
          console.log("短信验证码错误");
        }
      });
    },
    sendCode() {
      //发送验证码了
      this.$http
        .post("/mz/v4/api/code?__t=" + Date.now(), {
          mobile: this.phone,
          type: "2"
        })
        .then(res => {
          if (res.data.status === 0) {
            console.log("验证码发送成功");
          }
        });
    },
   getPopular() {
      this.$http.get(`/lh/store/${this.id}`).then(res => {
        this.catName = res;
         console.log(this.catName);
      });
    },
  },
   created() {
        this.getPopular();
        console.log(this.$route.query.id);
        this.id = this.$route.query.id;
        
  },
 
};
</script>
<style lang="scss" scoped>
.app-marker-free {
  margin-bottom: 0.6rem;
  text-align: center;

  .content {
    z-index: 10;
    position: fixed;
    top: 0;
    width: 100%;
    height: 0.55rem;
    background: #fff;
    border-top: 1px #ccc solid;
    display: flex;

    .ul-list {
      width: 100%;
      height: 0.55rem;
      border-bottom: 1px solid #ccc;
      /* overflow: hidden; */
      li {
        height: 100%;
        text-align: center;
        line-height: 0.55rem;

        i {
          font-size: 0.26rem;
        }
      }
      li:nth-child(1) {
        width: 25%;
        float: left;
        text-align: left;
        padding-left: 0.13rem;
      }
      li:nth-child(2) {
        width: 50%;
        float: left;
        img {
          width: 100%;
          height: 100%;
        }
      }
      li:nth-child(3) {
        width: 12%;
        float: left;
      }
      li:nth-child(4) {
        width: 12%;
        float: left;
      }
    }
  }

  form {
    padding: 0.15rem;
    width: 100%;
    margin-top: 0.6rem;

    label {
      padding-left: 0.15rem;
      margin-top: 0.15rem;
      display: block;
      text-align: left;
    }

    .submit {
      width: 1.63rem;
      background: rgb(241, 50, 16);
      color: #fff;
      border: none;
      border-radius: 0.36rem;
      margin-top: 0.45rem;
      padding: 8px 12px;
      font-size: 0.15rem;
      outline: none;
    }
    .send-code {
      width: 0.95rem;
      position: absolute;
      right: 5px;
      top: 15px;
      background: #29a097;
      color: #fff;
      height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      border-radius: 3px;
      cursor: pointer;
    }
  }
}
</style>
