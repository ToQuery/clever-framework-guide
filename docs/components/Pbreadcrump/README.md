---
sidebar: auto
---

# breadcrump面包屑

>基于[iview breadcrump](https://www.iviewui.com/components/breadcrumb)进行的简单封装。

## 使用

- `router`定义时需要写入`meta`

```js
{
  path: '/path',
  name: 'name',
  component: () => import(...),
  meta: { // 不写，这级将没有面包屑导航
    title: 'title', // 面包屑text
    disabled: true // 当前面包屑菜单是否禁止导航
  },
  children: []
}
```

- 入口页定义使用

```js
<template>
  <div class="loan-monitor router-body">
    <PBreadcrump></PBreadcrump>
    <div class="loan-monitor-body">
      <router-view ></router-view>
    </div>
  </div>
</template>
<script>
import {PBreadcrump} from '@bairong/jax-core';
export default {
  name: 'Component',
  components: {
    PBreadcrump
  }
}
</script>

```

## LOG

`PBreadcrump`根据`router-meta`获取当前页及父级页的meta, 生成层级导航