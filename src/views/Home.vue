<style lang="scss" scoped>
.home{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
.wrapper{
  position: relative;
  transition: transform 1s cubic-bezier(0.86,0,0.07,1);
}
.page {
  position: relative;
  overflow: hidden;
  height: 100vh;
}
// 介绍页
.introductioninfo{
  position: absolute;
  top: 24vh;
  left: 50vw;
  transform: translate3d(-50%,0,0);
  width: 100vw;
  max-width: 1200px;
  text-align: center;
  h2{
    font-family: fz;
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin-bottom: 0.8333rem;
    color: #dfdfdf;
    font-weight: normal;
  }
  p{
    font-family: MicrosoftYaHei;
    font-size: 0.3125rem;
    color: #979797;
    margin-bottom: 0.4167rem;
    line-height: 0.5833rem;
    padding: 0.4rem;
    &:last-of-type{
      margin-bottom: 0px;
    }
  }
}
.more{
  position: absolute;
  cursor: pointer;
  font-size: 0.3125rem;
  bottom: 5vh;
  left: 50vw;
  height: 0.9375rem;
  user-select:none;
  .icon{
    position: absolute;
    top: 0.6rem;
    width: 100%;
    text-align: center;
  }
}
// 作品展示页
.works-show{
  max-width: 1400px;
  margin: 0 auto;
}
.worksnav{
  margin-top: 1.9583rem;
  height: 0.6667rem;
  display: flex;
  align-items: center;
  li{
    position: relative;
    padding: 0 0.5208rem;
    line-height: 0.6667rem;
    font-size: 14px;
    color: #aaaaaa;
    cursor: pointer;
    &:last-of-type::after{
      display: none;
    }
    &::after{
      content: "";
      position: absolute;
      right: 0px;
      top: 0.2083rem;
      width: 1px;
      height: 0.2917rem;
      background: #dbdbdb;
    }
    &.active{
      background: #42b8f1;
      color: #ffffff;
    }
  }
}
.workcontant{
  .workimg{
  }
}
// 图文页
.graphic{
  max-width: 29.1667rem;
  margin: 0 auto;
  padding-top: 1.3333rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left{
    width: 19.2292rem;
    height: 11.5rem;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .right{
    .rightbox{
      width: 9.3333rem;
      height: 5.5208rem;
      &:first-of-type{
        margin-bottom: 0.4583rem;
      }
    }
  }
}
// 文章页
.article{
  padding-top: 1.3333rem;
  box-sizing: border-box;
  background: #f6f6f6;
  h3{
    text-align: center;
    color: #2e2e2e;
    font-size: 0.75rem;
    margin-top: 7vh;
    font-weight: normal;
    font-family: fz;
  }
}
.showme{
  padding-top: 1.3333rem;
  box-sizing: border-box;
  background: #f6f6f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2e2e2e;
  font-size: 1.25rem;
  font-family: fz;
}
</style>


<template>
  <div class="home">
    <myheader></myheader>
    <div class="wrapper" @mousewheel="onmousewheel" :style="{transform:wrapper3d}" ref="wrapper">
      <div class="page index">
        <div>
          <img src="../common/images/index-bg.jpg" alt="">
        </div>
      </div>
      <div class="page introduction">
        <div>
          <img src="../common/images/index-bg.jpg" alt="">
        </div>
        <div class="introductioninfo">
          <h2>关于zmy的简介，这里有故事</h2>
          <p>杨青，女，一个80后草根女站长！09年入行。一直潜心研究web前端技术，一边工作一边积累经验，分享一些个人博客模板，以及SEO优化等心得。我入行早，大家也亲切的叫我“青姐”。</p>
          <p>SEO奋斗了将近两年时间，个人博客网站百度排名也从之前的30页后，排到了第一页。期间有很多的不容易，但是都没有放弃过。入了这一行 ，就深深的喜欢上它。我喜欢一句话“冥冥中该来则来，无处可逃”。</p>
          <p>近几年我也发现个人博客排前几页的也有很多是我做过的模板，感谢各位站长的欣赏，我仔细看过他们的网站。他们在我原模板的基础上有修改，而且他们做的原创内容都是值得一读的。有时候甚至排名都超过了我个人博客网站的排名。</p>
        </div>
        <div class="more">
          MORE
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-you"></use>
          </svg>
        </div>
      </div>
      <div class="page works-show">
        <ul class="worksnav">
          <li class="active">全部</li>
          <li>集团企业</li>
          <li>品牌官网</li>
          <li>营销网站</li>
          <li>英文网站</li>
          <li>手机网站</li>
          <li>APP</li>
          <li>册宣传</li>
          <li>宣传海报</li>
        </ul>
        <ul class="workcontant">
          <li>
            <div class="workimg">

            </div>
            <h5>集团企业类网站/智能家居</h5>
            <p>企业官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
          </li>
        </ul>
      </div>
      <div class="page graphic">
        <div class="left">
          <img src="../common/images/img.png" alt="">
        </div>
        <div class="right">
          <div class="rightbox">
            <img src="../common/images/img1.png" alt="">
          </div>
          <div class="rightbox">
            <img src="../common/images/img1.png" alt="">
          </div>
        </div>
      </div>
      <div class="page article">
        <h3>早上九点的上海滩......	号外！号外！</h3>
        <div class="articlecontant">
          <div class="left"></div>
          <div class="right">

          </div>
        </div>
      </div>
      <div class="page showme">一切只为更好的展示自己</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import myheader from '@/components/myheader.vue'
export default {
  data(){
    return{
      wrapperY:0,
      continuous:false
    }
  },
  components: {
    myheader
  },
  methods:{
    onmousewheel(e){
      if(e.wheelDeltaY>0){
        if(this.wrapperY == 0||this.continuous) return false
        this.continuous = true
        this.wrapperY = this.wrapperY+100
        this.$refs.wrapper.addEventListener('transitionend', ()=>{
          this.continuous = false
        });
      }else {
        if(this.wrapperY <= -500||this.continuous) return false
        this.continuous = true
        this.wrapperY = this.wrapperY-100
        this.$refs.wrapper.addEventListener('transitionend', ()=>{
          this.continuous = false
        });
      }
    },
  },
  computed:{
    wrapper3d(){
      return `translate3d(0,${this.wrapperY}vh,0)`
    }
  }
}
</script>
