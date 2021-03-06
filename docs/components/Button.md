#  Button 按钮

### 概述

常用按钮样式组件，提供2种尺寸，5种状态颜色和2种形状，支持自定义颜色。

```html
<w-button type="primary" @click.native="doClick">主要</w-button>
<w-button size="large" type="primary"></w-button>
```

### Demo

```html
<template>
  <div>
    <div class="paragraph">
      <h3>按钮</h3>
      <w-button type="primary">主要</w-button>
      <w-button type="danger">危险</w-button>
      <w-button type="warning">警告</w-button>
      <w-button type="light">空</w-button>
      <w-button type="disabled" disabled>禁用</w-button>
    </div>
    <div class="paragraph">
      <h3>尺寸</h3>
      <w-button size="large" type="primary">主要</w-button>
      <w-button size="large" type="danger">危险</w-button>
      <w-button size="large" type="warning">警告</w-button>
      <w-button size="large" type="light" disabled>空</w-button>
      <w-button size="large" type="disabled" disabled>禁用</w-button>
    </div>
    <div class="paragraph">
      <h3>自定义颜色</h3>
      <w-button size="large" bgcolor="#000" color="#FFF">自定义</w-button>
    </div>
    <div class="paragraph">
      <h3>形状</h3>
      <w-button size="large" shape="circle" type="primary">自定义</w-button>
    </div>
    <div class="paragraph">
      <h3>按钮组 primary</h3>
        <w-button-group type="primary" :border="true"  :items="btnGroup1" v-model="btnGroup1Value">
        </w-button-group>
    </div>

    <div class="paragraph">
      <h3>按钮组 danger large</h3>
        <w-button-group type="danger" size="large" :items="btnGroup2" v-model="btnGroup2Value">
        </w-button-group>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <w-button-group type="danger" shape="circle" :items="btnGroup3" v-model="btnGroup3Value">
        </w-button-group>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <w-button-group type="warning" :border="true" :items="btnGroup3" v-model="btnGroup3Value">
        </w-button-group>
    </div>

    <div class="paragraph">
      <h3>按钮组 circle</h3>
        <w-button-group type="light" shape="circle" :items="btnGroup3" v-model="btnGroup3Value">
        </w-button-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Button from 'packages/button'
import ButtonGroup from 'packages/button-group'

export default {
  components: {
    'w-button': Button,
    'w-button-group': ButtonGroup
  },
  data () {
    return {
      btnGroup1: [
        {
          name: '商品',
          value: 'product'
        },
        {
          name: '详情',
          value: 'detail'
        },
        {
          name: '评价',
          value: 'rate'
        }
      ],
      btnGroup1Value: 'product',
      btnGroup2: [
        {
          name: '左',
          value: 'left'
        },
        {
          name: '中',
          value: 'center'
        },
        {
          name: '右',
          value: 'right'
        }
      ],
      btnGroup2Value: 'center',
      btnGroup3: [
        {
          name: '左',
          value: 'left'
        },
        {
          name: '中',
          value: 'center'
        },
        {
          name: '右',
          value: 'right'
        }
      ],
      btnGroup3Value: 'right'
    }
  }
}
</script>


<style lang="less">
  .paragraph{
    padding: 10px;
    border: 1px #f0f0f0 solid;
    border-radius: 4px;
    margin-bottom: 0.2rem;

    h3{
      border-bottom: 1px #f0f0f0 solid;
      padding-bottom: 10px;
      margin-bottom: 10px;
    }
  }
</style>

```

###  Button 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| type          | 按钮类型         | String   | primary, danger, warning, light, disabled           |  primary  |
| size          | 按钮大小	       | String   | small, large  |    small   |
| bgcolor       | 按钮背景颜色	    | String    |            |           |
| color         | 按钮字体颜色	    | String   |            |  true |
| disabled      | 是否禁用	       | Boolean    |            |  false  |
| shape         | 形状（分为直角square和大圆角circle）      | String  | square, circle | square |


###  ButtonGroup 属性介绍 Attributes

| 参数           | 说明            | 类型       | 可选值      |   默认值   |
|---------------|-----------------|-----------|------------|-----------|
| type          | 按钮类型         | String   | primary, danger, warning, hollow, disabled           |  primary  |
| size          | 按钮大小	       | String   | small, large  |    small   |
| bgcolor       | 按钮背景颜色	    | String    |            |           |
| color         | 按钮字体颜色	    | String   |            |  true |
| disabled      | 是否禁用	       | Boolean    |            |  false  |
| shape         | 形状（分为直角square和大圆角circle）      | String  | square, circle | square |