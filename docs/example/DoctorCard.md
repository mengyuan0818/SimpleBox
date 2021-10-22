---
title: "组件 DoctorCard"
sidebar: true
sidebarDepth: 1
next: false
prev: false
---

### DoctorCard 医生简介卡片
*--展示医生和护士的简介信息，以及预约状态*
### 基础用法
> 已经做了文字溢出处理

<div>
  <DoctorCard />
</div>

::: details 点击查看代码
```html
<DoctorCard :data='doctorData' />
```
```js
doctorData: {
  id: '123',
  state: '1',
  doctorName: '邓靖宇',
  doctorLevel: '主任医师',
  deptName: '胃部肿瘤科',
  specialty: '医学心理科行政主任，主任医师，医学博士，南京大学医学院副教授，担任中华师，医学博士，南京大学医学院副教'
  // ...
}
```

:::
### 显示可预约状态 :tada:
> 通过给`showState`设置为`true`来展示预约状态

<div>
  <DoctorCard :showState='true' />
</div>

::: details 点击查看代码
```html
<DoctorCard :data='doctorData' :showState='true' />
```
```js
doctorData: {
  id: '123',
  state: '1',
  doctorName: '邓靖宇',
  doctorLevel: '主任医师',
  deptName: '胃部肿瘤科',
  specialty: '医学心理科行政主任，主任医师，医学博士，南京大学医学院副教授，担任中华师，医学博士，南京大学医学院副教'
  // ...
}
```
:::

Attributes

| 参数      |       说明       |  类型   | 可选值 | 默认值 |
| --------- | :--------------: | :-----: | :----: | :----: |
| data      |        -         | Object  |   -    |   -    |
| showState | 是否展示预约状态 | Boolean |   -    | false  |

Events
| 事件  | 说明  | 回调参数 |
| :---: | :---: | :------: |
| click |   -   |   data   |
