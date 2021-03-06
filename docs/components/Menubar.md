#  Menubar 菜单条

### 概述

+ 复合组件，需要同menubar-item一起使用

### Demo

```html
<template>
  <w-menubar>
    <w-menubar-item title="外卖" link="/waimai">
      <i slot="icon" class=""></i>
      <span slot="badge">3</span>
    </w-menubar-item>
    <w-menubar-item title="发现" link="/found"></w-menubar-item>
    <w-menubar-item title="订单" :dot="true" link="/order"></w-menubar-item>
    <w-menubar-item title="我的" link="/mine"></w-menubar-item>
  </w-menubar>
</template>

<script>
    import Menubar from 'packages/menubar'
    import MenubarItem from 'packages/menubar-item'

    export default {
      components: {
        'w-menubar': Menubar,
        'w-menubar-item': MenubarItem
      }
    }
</script>

```

###  Menubar 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| activeColor   | 激活menu颜色      | String     |            |          |


###  MenubarItem 属性介绍 props

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| link          | 链接             | String    |            |           |
| title         | 标题             | String    |            |           |
| active        | 是否激活          | Boolean   |            |           |
| dot           | 是否显示小红点     | Boolean   |            |           |

###  MenubarItem 插槽介绍 slot

| 参数           | 说明            | 说明       |
|---------------|-----------------|-----------|
| icon          | 菜单图标         |     |
| badge         | 肩标            |     |