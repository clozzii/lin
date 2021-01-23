<template>
  <div class="sutong w">
    <section class="post-list">
      <section class="content">
        <div class="article-entry">
          <!-- 插图 -->
          <p class="img">
            <img src="~imgs/sutong/sutong.jpg" alt="">
          </p>
          <!-- 文本 -->
          <p class="content-content">
              一直都在和你说的幸福 <br>
              所以你要相信<br>
              所以我们要坚持<br>
              总有一天，一定会实现的。哪怕它并不容易，但一定会实现的对吗？<br>
              我们并不是因为幸福太过简单而才去追求幸福的。<br>
          </p>
        </div>
        <!-- 底部标签 -->
        <div class="article-tags"></div>
      </section>
    </section>
  </div>
</template>

<style lang="less" scoped>
  .sutong {
    width: 600px;
    max-width: 600px;
    margin-top: 201px;
    padding: 20px 10px;
    /* background-color: rgba(255, 255, 255, 0.699); */
    border-bottom: 1px rgb(46, 48, 49) solid;
    border-radius: 5px;

    .post-list {
      .post {
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
          border-radius: 5px;
          /* margin-right: 116px; */
          /* margin: 0 -7%; */
        }
      }
      .content-content {
        color: #fff;
        font-size: 14px;
        margin-bottom: 0;
        /* margin-left: 35px; */
        /* width: 66%; */
      }
    }
  }
</style>