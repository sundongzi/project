<template>
  <div class="idss-login">
    <div class="idss-login__panel">
      <div class="idss-login__logo">
        
        <i class="iconfont icon-logo logo"></i>
      </div>
      <div class="idss-login__error" v-show="isError">
        <span class="txt">{{ errorMsg.message }}</span>
        <i @click="closeErrowMessage" class="iconfont icon-close icon"></i>
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
        <el-form-item prop="userName" :error="loginFormError.userName">
          <el-input ref="userName" placeholder="用户名" v-model="loginForm.userName" auto-complete="off" :maxlength="10"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd" :error="loginFormError.userPwd">
          <el-input placeholder="密码" type="password" v-model="loginForm.userPwd" auto-complete="off" :maxlength="18"></el-input>
        </el-form-item>
        <el-form-item prop="authCode" :error="loginFormError.authCode" class="idss-login__auth-code" @keydown.enter.native="submitForm">
          <el-input placeholder="验证码" v-model="loginForm.authCode" :maxlength="4"></el-input>
          <span class="img-span" @click="changeCode">
            <img :src="reqAuthCode" width="70%" height="30px" alt="authCode" />
          </span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import '../../../static/login-bg.jpg'
export default {
  data () {
    return {
      loginForm: {
        userName: '',
        userPwd: '',
        authCode: ''
      },
      loginRules: {
        userName: [
          { required: true, message: '用户名不能为空' }
        ],
        userPwd: [
          { required: true, message: '密码不能为空' }
        ],
        authCode: [
          { required: true, message: '验证码不能为空' }
        ]
      },
      loginFormError: {},
      currentTime: new Date().getTime(),
      isError: false,
      errorMsg: {}
    }
  },
  computed: {
    reqAuthCode () {
      return `api/code?t=${this.currentTime}`
    }
  },
  methods: {
    // 提交表单
    submitForm () {
      let that = this
      this.$refs['loginForm'].validate(async (valid) => {
        if (valid) {
          let data = {
            'userName': this.loginForm.userName,
            'userPwd': this.loginForm.userPwd,
            'authCode': this.loginForm.authCode
          }
          Object.values(this.loginForm)
          let successData = await that.http({
            method: 'post',
            url: '/api/login',
            data: data
          })
          const { status, message } = successData.data
          const { token } = successData.data.content.data
          if (status === 'success') {
            this.$store.commit('base/isLogin$$', 'success')
            this.$store.commit('base/userName$$', this.loginForm.userName)
            this.$store.commit('base/token$$', token)
            let { redirect = '/' } = this.$route.query
            this.$router.push({ path: redirect })
          } else if (status === 'error' && message && message.length) {
            this.isError = true
            this.errorMsg = message[0]
            let errorMsg = {}
            message.map((msgItem) => {
              msgItem.item.map((item) => {
                errorMsg[item] = ' '
              })
            })
            this.$nextTick(() => {
              this.loginFormError = errorMsg
            })
          }
        }
      })
    },

    // 验证码生成处理
    changeCode () {
      this.currentTime = new Date().getTime()
    },

    // 初始化时获取用户名输入框焦点
    getFocus () {
      this.$refs['userName'].focus()
    },

    // 错误信息关闭处理
    closeErrowMessage () {
      this.isError = false
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.getFocus()
    })
  }
}
</script>

<style>
.idss-login {
  display: flex;
  align-content: center;
  justify-content: center;
  background-image: url(../../../static/login-bg.jpg);
  background-size: cover;
  height: 100%;
  overflow: hidden;

  /* panne -- 动画处理 */
  & .idss-login__panel {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 280px;
    color: #fff;
    animation-name: login-panel-animate;
    animation-duration: 600ms;
    animation-timing-function: ease-out;
  }

  /* logo */
  & .idss-login__logo {
    margin-bottom: 30px;
    text-align: center;
    font-size: 24px;
    &>.logo {
      font-size: 44px;
    }
  }

  /* element样式覆盖 */
  & .el-input__inner {
    background-color: rgba(255, 255, 255, 0.8);
    &:focus {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  & .el-button--primary {
    width: 100%
  }

  /* 验证码 */
  & .idss-login__auth-code {
    postion: relative;
    & .img-span {
      position: absolute;
      right: 1px;
      top: 1px;
      bottom: 2px;
      display: inline-block;
      background-color: #fff;
      border-radius: 0 4px 4px 0;
      & img {
        margin-left: 15%;
        margin-top: 3px;
      }
    }
  }

  /* 错误提示 */
  & .idss-login__error {
    display: flex;
    background: rgb(224, 78, 78);
    line-height: 36px;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 0px 1rem;
    border-radius: 4px;

    & .txt {
      display: inline-block;
      width: 100%;
      color: #fff;
    }
    & .icon {
      cursor: pointer;
    }
  }
}

@keyframes login-panel-animate {
  0% {
    margin-top: -500px;
  }
  40% {
    margin-top: 50px;
  }
}
</style>
