<template>
  <div id="main-header">
    <div class="container">
      <span class="sutong" @click="sutongClick">半夏半暖半微凉</span>

      <!-- 导航栏 -->
      <ul class="top-nav">
        <li class="nav-list" v-for="(item,index) in navlist" :key="index"
          @click="navListClick(item.path)"
        >
          <div class="iconImg">
            <img style="width: 100%;" :src="item.iconpath">
          </div>
          <span class="nav-list-item">
            {{item.name}}
          </span>
        </li>
      </ul>

      <!-- 用户栏 -->
      <div class="user-info"></div>

      <!-- 搜索框 -->
      <div class="top-search"></div>

      <!-- music播放小插件 -->
      <div class="music-container"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navlist: [
          {
            name: '我的主页',
            path: '/index',
            iconpath: require('imgs/navlist/index.svg')
          },
          {
            name: '时间线',
            path: '/timeline',
            iconpath: require('imgs/navlist/timeline.svg')
          },
          {
            name: '分类',
            path: '/category',
            iconpath: require('imgs/navlist/category.svg')
          },
          {
            name: '标签',
            path: '/tag',
            iconpath: require('imgs/navlist/tag.svg')
          },
          {
            name: '关于我',
            path: '/about',
            iconpath: require('imgs/navlist/about.svg')
          },
          {
            name: '留言板',
            path: '/messageboard',
            iconpath: require('imgs/navlist/messageboard.svg')
          }
        ]
      }
    },
    methods: {
      navListClick(path) {
        this.$router.push({path: '/main' + path})
      },
      sutongClick() {
        this.$router.push({path: '/main/sutong' })
      }
    }
  }
</script>

<style lang="less" scoped>
  
  #main-header {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    background-color: #1f1f1f;

    .container {
      display: flex;
      /* align-items: center;
      justify-content: center; */
      width: 1280px;
      height: 41px;

      .sutong {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 4px;
        width: 205px;
        font-size: 15px;
        font-weight: 600;
        color: #59909f;
        cursor: pointer;
      }

      .top-nav {
        
        display: flex;
        cursor: pointer;

        .nav-list {
          display: flex;
          align-items: center;
          justify-content: center;
          
          .iconImg {
            width: 16px;
            margin: 2px 2px 0 0;
          }

          .nav-list-item {
            width: 66px;
            font-size: 12px;
            color: #bfbfbf;
            /* background-color: pink; */
          }
        }
      }
    }

  }
</style>