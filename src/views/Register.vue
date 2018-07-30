<template>
  <section class="register-view">
    <template v-if="isComplete">
      <h1>注册成功</h1>
      <form action="" method="post">
        <p>请复制一下token进行登录</p>
        <div class="form-item">
          <label for=""><strong>token</strong>
          <input v-model="token" name="token" type="text" placeholder="token"></label>
        </div>
        <div class="form-submit">
          <router-link :to="{name : 'LoginView'}" class="submit" tag="button">去登录</router-link>
        </div>
      </form>
    </template>
    <template v-else>
      <h1>欢迎加入豆瓣</h1>
      <div class="form-content">
        <form action="" method="post" @submit.prevent="onSubmit();">
          <div class="form-item">
            <input v-model="email" type="email" name="email" placeholder="手机号/邮箱">
          </div>
          <div class="form-item">
            <input v-model="pass" type="password" placeholder="密码(最少6位)">
          </div>
          <div class="form-item">
            <input v-model="name" type="text" placeholder="昵称">
          </div>
          <div class="opt-area">
            <button type="submit" class="submit" :disabled="isDisabled" :class="{disabled : isDisabled}">{{registerState}}</button>
          </div>
        </form>
        <div class="footer">
            <p>点击「下一步」代表你已阅读并同意<a href="https://www.douban.com/about/agreement">用户协议</a></p>
            <a class="open-app">下载豆瓣App</a>
        </div>
      </div>
    </template>
  </section>
</template>
<script>
    export default{
      name : 'register-view',
      data(){
        return{
          isComplete : false,
          isDisabled : false,
          registerState : '下一步',
          err : '',
          pass : '',
          email:'',
          name : ''
        }
      },
      methods : {
        beforeSubmit:function(){
          this.isDisabled  = true;
          this.registerState = '正在提交...';
        },
        onSuccess : function(res){
          this.isComplete = true;
          this.token = res.data.token;
        },
        onError:function(err){
          this.error = err;
          this.registerState = '下一步';
          this.isDisabled = false;
        },
        onSubmit:function(){
          this.beforeSubmit();
          this.$store.dispatch({
            type : 'register',
            email : this.email,
            pass :  this.pass,
            name : this.name
          }).then(res=>{
            this.onSuccess(res);
          }).catch(err=>{
            this.onError(err);
          })
        }
      },
      beforeRouteEnter (to, from, next) {
        next(vm=>{
          if(vm.$store.getters.currentUser.email){
            vm.$router.push({name : 'StatucView'})
          }else{
            next();
          }
        })
      }
    }
</script>
