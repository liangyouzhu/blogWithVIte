---
layout: home
layoutClass: 'm-home-layout'

hero:
  image:
    src: /logo.png
    alt: 火之意志
  name: 前端弹药库
  text: 
  tagline: 基于 VitePress 的个人前端导航页面模板

  actions:
    - text: 一些好玩的
      link: /fun/
    - text: 前端导航
      link: /nav/
      theme: alt
features:
  - icon: 🚀
    title: 前端武器库
    details: 整理前端常用知识点<small>（面试八股文）</small><br />如有异议按你的理解为主，不接受反驳
    link: /fun/
    linkText: 前端常用知识
  - icon: 🛸
    title: 源码阅读
    details: 了解各种库的实现原理<br />学习其中的小技巧和冷知识
    link: /fun/
    linkText: 源码阅读
  - icon: ⭐
    title: Workflow
    details: 在工作中学到的一切<small>（常用库/工具/奇淫技巧等）</small><br />配合 CV 大法来更好的摸鱼
    link: /fun/
    linkText: 常用工具库
  - icon: 🎃
    title: 提效工具
    details: 工欲善其事，必先利其器<br />记录开发和日常使用中所用到的软件、插件、扩展等
    link: /fun/
    linkText: 提效工具
  - icon: 🎧
    title: 踩坑记录
    details: 那些年我们踩过的坑<br />总有一些让你意想不到的问题
    link: /fun/
    linkText: 踩坑记录
  - icon: 💻
    title: 吾志所向，一往无前。
    details: '<small class="bottom-small">一个想躺平的小开发</small>'
    link: /fun/
---


<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1); 
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
