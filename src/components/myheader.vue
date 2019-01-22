<style lang="scss" scoped>
.header{
  position: fixed;
  z-index: 1;
  height: 1.3333rem;
  width: 100%;
  background: #323436;
  .headerinfo{
    max-width: 1400px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
}
.logo{
  width: 2.6458rem;
  height: 0.8333rem;
  img{
    width: 100%;
    height: 100%;
  }
}
.nav{
  flex: 1;
  text-align: center;
  margin-right: 2.6458rem;
  span{
    font-size: 0.2917rem;
    color: #848484;
    margin: 0 0.4167rem;
    cursor: pointer;
  }
}
</style>


<template>
  <div class="header">
    <div class="headerinfo">
      <div class="logo">
        <img src="../common/images/logo.png">
      </div>
      <nav class="nav">
        <span>首页</span>
        <span>简介</span>
        <span>快讯</span>
        <span>产品</span>
        <span>时间轴</span>
        <span>留言</span>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
