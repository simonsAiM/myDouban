<template>
    <div class="login-view">
        <h1>
            <a href="javascript:history.go(-1)">取消</a> 登录豆瓣</h1>
        <form action="">
            <div class="account"><input type="text" placeholder="手机号码/邮箱"></div>
            <div class="psd"><input type="password" placeholder="密码"></div>
            <div class="login-submit"><input type="submit" value="登录" /></div>
        </form>
        <div class="footer">
            <div class="register">
                <router-link :to="{ name : 'Register'}">登录注册</router-link>
                <span>找回密码</span>
            </div>
        </div>
        <div class="login-3rd">
            <p class="login-3rd-hd">第三方登录</p>
            <div class="login-3rd-bd">
                <a href="" class="link-3rd-wb" title="用微博登录">Weibo</a>
                <a href="" class="link-3rd-wx" title="用微信登录">Wechat</a>
            </div>
        </div>
    </div>
</template>
<script>

</script>
