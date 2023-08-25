---
layoutClass: nav-layout
outline: [2, 3, 4]
---

<script setup>
import NavLinks from './components/NavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 前端导航

<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

<br />

::: tip
"我们并不是为了变强而战斗，而是为了守护重要的东西。" - 漩涡鸣人 <br />[「私たちは強くなるために戦っているのではなく、大切なものを守るために戦っているんだ。」- うずまきナルト]
:::
