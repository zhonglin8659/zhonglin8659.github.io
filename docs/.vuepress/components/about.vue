<template>
  <div class="about">
    <ul class="aboutNav">
      <li v-for="item in nav" @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#0567f1;color:#fff;' : ''" class="aboutNavItem">
        {{ item.title }}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'me'">
        <ul class="colors">
          <li class="midnightblue">思考中</li>
          <li class="slateblue">思考中</li>
          <li class="blue">思考中</li>
          <li class="deepskyblue">思考中</li>
          <li class="cornflowerblues">思考中</li>
          <li class="lightskyblue">思考中</li>
          <li class="wuwangcaoblue">思考中</li>
        </ul>
      </div>
      <div v-show="cur === 'tech'">
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>运维</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>网络</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>javascript</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>vue</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>硬件</span></li>
        </ul>
      </div>
      <div v-show="cur === 'work'">
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
      </div>
      <div v-show="cur === 'orange'">
        <a href="https://photo.smallsunnyfox.com/" target="_blank" style="text-decoration:none;">🍊🍊</a>
      </div>
      <div v-show="cur === 'book'">
        我在看的
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>第七天 - 余华</span></li>
        </ul>
        我喜欢的
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
        2022
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
        2021
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
      </div>
      <div v-show="cur === 'tv'">
        2022
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
        2021
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
      </div>
      <div v-show="cur === 'movie'">
        我喜欢的
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
      </div>
      <div v-show="cur === 'game'">
        游戏
        <ul>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
          <li><img src="https://sugarys.oss-cn-beijing.aliyuncs.com/staticresources/star.png"><span>思考中</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: '关于我', code: 'me' },
        { title: '技能', code: 'tech' },
        { title: '工作', code: 'work' },
        { title: '思考中', code: 'orange' },
        { title: '书', code: 'book' },
        { title: '剧', code: 'tv' },
        { title: '电影', code: 'movie' },
        { title: '游戏', code: 'game' }
      ],
      cur: 'me'
    }
  },
  methods: {
    showNav(code) {
      this.cur = code
    }
  }
}
</script>
