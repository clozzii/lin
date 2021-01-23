<template>
  <div class="index w">
    <section class="post-list">
      <article class="post">
        <!-- 标题 -->
        <h2 class="title">
          <a href="#">
            「Pixiv名畫師賞」最终回
          </a>
        </h2>
        <!-- 日期 -->
        <time>
          Nov 30, 2017
        </time>
      </article>
      <!-- 内容 -->
      <section class="content">
        <div class="article-entry">
          <!-- 插图 -->
          <p class="img">
            <img src="~imgs/index/QQ图片20210123160325.png" alt="">
          </p>
          <!-- 文本 -->
          <p class="content-content">
            <!-- 完结。感谢一直关注的各位（有吗？）。 -->
            <!-- 星星发光，是为了让每个人有一天都能够找到属于自己的星星。 ——《小王子》 -->
            "We’ve all got both light and darkness inside us. What matters is the part we choose to act on. That’s who we really are." 每个人心中都有阳光和阴暗的一面。重要的是我们选择成为什么，那才是真正的我们。 ——小天狼星布莱克《哈利波特》
          </p>
        </div>
        <!-- 底部标签 -->
        <div class="article-tags"></div>
      </section>
    </section>
  </div>
</template>

<style lang="less" scoped>
  .index {
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    width: 600px;
    max-width: 600px;
    margin-top: 222px;
    padding: 20px 10px;
    /* background-color: rgba(255, 255, 255, 0.699); */
    border-bottom: 1px rgb(46, 48, 49) solid;
    border-radius: 5px;

    .post-list {
      /* background-color: pink; */
      .post {
        /* display: flex; 
        justify-content: center;
        align-items: center; */
        .title {
          display: flex; 
          justify-content: center;
          margin-top: -12px;

          a {
            font-weight: 300;
            color: #fff;
          }
        }
        time {
          display: block;
          text-align: center;
          color: #fff;
          font-size: 11px;
          margin: 2px 0 3px 0;
        }
      }
    }
  }
  .content {
    .article-entry {
      .img {
        display: flex; 
        justify-content: center;
        /* background-color: pink; */
        img {
          display: block;
          width: 66%;
          /* margin: 0 -7%; */
        }
      }
      .content-content {
        color: #fff;
        font-size: 14px;
        margin-bottom: 0;
        /* width: 66%; */
      }
    }
  }
</style>