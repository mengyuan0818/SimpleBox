
<!-- 医生护士简介信息卡片 -->

<template>
  <div class="doctor-card">
    <el-image class="image" :src="$withBase('/doctor.png')" fit="cover"></el-image>
    <p class="doctor">
      {{ data.doctorName}} {{ data.doctorLevel }}
    </p>
    <p class="doctor-department over-hidden">{{ data.deptName }}</p>
    <!-- 擅长 -->
    <p class="advantage over-hidden-three">{{ '擅长：' + data.specialty }}</p>
    <!-- 状态 -->
    <p v-if="showState" :class="{'state-flag': true, 'state-full': data.state === '0' }">
      {{ data.state === '1' ? '可预约' : '已约满' }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'doctorCard',
  props: {
    showState: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      data: {
        id: '123',
        state: '1',
        doctorName: '邓靖宇',
        doctorLevel: '主任医师',
        deptName: '胃部肿瘤科',
        specialty: '医学心理科行政主任，主任医师，医学博士，南京大学医学院副教授，担任中华师，医学博士，南京大学医学院副教'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.doctor-card {
  width: 260px;
  height: 260px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  box-sizing: border-box;
  position: relative;
}
.doctor-card .image {
  height: 96px;
  width: 96px;
  border-radius: 50%;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
  display: block;
  position: static;
  margin: 6px auto;
}
.doctor-card .doctor {
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  color: #1289ac;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.doctor-card .doctor .doctor-name,
.doctor-card .doctor .doctor-rank {
  flex: 1;
  text-align: center;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: right;
}
.doctor-card .doctor .doctor-rank {
  text-align: left;
}
.doctor-card .doctor-department {
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  font-weight: 500;
  color: #1289ac;
  text-align: center;
  margin: 0;
}
.doctor-card .advantage {
  margin: 6px 0;
  font-size: 15px;
  line-height: 20px;
}
.doctor-card .state-flag {
  color: #09cd29;
  height: 22px;
  line-height: 22px;
  font-size: 16px;
  position: absolute;
  right: 0;
  top: 36px;
  background-color: #e2f9e6;
  padding: 0 4px;
  box-sizing: border-box;
  border-radius: 4px 0 0 4px;
}
.doctor-card .state-full {
  color: #999999;
  background-color: #f2f2f2;
}
.over-hidden {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.over-hidden-three {
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>