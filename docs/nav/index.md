---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>



<br />

::: tip
<!-- 该导航由 [maomao](https://github.com/maomao1996) 开发，如有引用、借鉴的请保留版权声明：<https://github.com/maomao1996/vitepress-nav-template> -->
"我们并不是为了变强而战斗，而是为了守护重要的东西。" - 漩涡鸣人 <br />[「私たちは強くなるために戦っているのではなく、大切なものを守るために戦っているんだ。」- うずまきナルト]
:::
