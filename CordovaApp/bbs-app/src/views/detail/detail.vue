<template>
  <div class="detail">
    <NavBar left-arrow @click-left="onClickLeft" left-text="返回" title="查看跟进记录">
      <div class="right" slot="right">
        <Icon size="20" color="#666" name="contact" />
        <span class="user">滴滴滴</span>
      </div>
    </NavBar>
    <div class="content">
      <div class="header">
        <div class="title">吉林省安吉拉贡嘎局</div>
        <div class="time">2019-08-05 23:40:20</div>
      </div>
      <div class="tag">
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">数侦-云捕</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">阶段</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">当面拜访</Tag>
        <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">市场BD</Tag>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, Icon, Tag } from 'vant'

export default {
  components: {
    NavBar, Icon, Tag
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    }
  }
}

</script>
<style lang='scss' scoped>
.detail {
  .right {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #666;
    .user {
      margin-left: 4px;
    }
  }
  .content {
    padding: 0 10px;
    .header {
      display: flex;
      justify-content: space-between;
      margin: 26px 0;
      .title {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .time {
        color: #666;
      }
    }
    .tag {
      display: flex;
      justify-content: space-around;
      .tag-item {
        padding: 0.2em 1em;
        margin-right: 10px;
        border: 1px solid #ff6666;
      }
    }
  }
}
</style>