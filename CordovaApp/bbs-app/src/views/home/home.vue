<template>
  <div class="home">
    <NavBar fixed title="跟进记录" />
    <div class="list">
      <PullRefresh v-model="downLoading" @refresh="onRefresh">
        <List v-model="upLoading" :finished="finished" @load="onLoad" finished-text="你已触到我的底线~">
          <ul class="wrapper">
            <li @click="showDetail" v-for="(item, index) in listData" :key="index" class="item">
              <div class="header">
                <span class="title">安吉林省</span>
                <span class="user">
                  <Icon size="24" name="contact" />嘟嘟嘟
                </span>
              </div>
              <div class="content">跟进详情：今天跟进客户买了苹果、牛肉、火锅火锅火锅烤肉烤肉烤肉烤肉……</div>
              <div class="footer">
                <div class="tag">
                  <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">数侦-云捕</Tag>
                  <Tag class="tag-item" color="#FFF2E8" size="large" text-color="#FF6666">阶段</Tag>
                </div>
                <div class="time">2019-08-05 23:40:20</div>
              </div>
            </li>
          </ul>
        </List>
      </PullRefresh>
    </div>
  </div>
</template>

<script>
import { List, Icon, Tag, PullRefresh, Toast, NavBar } from 'vant'

export default {
  data() {
    return {
      listData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      upLoading: false,
      finished: false,
      downLoading: false
    }
  },
  components: {
    List, Icon, Tag, PullRefresh, NavBar
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        for (let index = 0; index < 20; index++) {
          this.listData.push(this.listData.length + 1)
        }
        this.upLoading = false
      }, 1000);
    },
    onRefresh() {
      setTimeout(() => {
        Toast.success('刷新成功')
        this.downLoading = false
      }, 1000);
    },
    showDetail() {
      this.$router.push('detail/123')
    }
  }
}

</script>
<style lang='scss' scoped>
.home {
  .list {
    margin-top: 46px;
    .wrapper {
      padding: 0 10px;
      .item {
        padding: 20px 0;
        font-size: 16px;
        border-bottom: 1px solid #e7e7e7;
        .header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          .title {
            font-weight: 700;
            font-size: #333;
          }
          .user {
            display: flex;
            align-items: center;
            color: #888;
          }
        }
        .content {
          margin-bottom: 6px;
          font-size: 16px;
          line-height: 1.4em;
          color: #666;
        }
        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 16px;
          color: #666;
          .tag {
            .tag-item {
              padding: 0.2em 1em;
              margin-right: 10px;
              border: 1px solid #ff6666;
            }
          }
        }
      }
    }
  }
}
</style>