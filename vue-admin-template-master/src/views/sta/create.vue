<template>
  <div>
    <el-form-item label="日期">
      <el-date-picker v-model="day" placeholder="请选择需要统计的日期" value-format="yyyy-MM-dd" type="date"/>
    </el-form-item>
    <el-button :disabled="btnDisabled" type="primary" @click="create()">生成</el-button>
  </div>
</template>

<script>
import staApi from '@/api/sta'
export default {
  date() {
    return { day: '', btnDisabled: false }
  },
  created() {

  },
  methods: {
    create() {
      staApi.createStaData(this.day).then(response => {
        this.btnDisabled = true
        this.$message({
          type: 'success',
          message: '生成成功'
        })
        this.$router.push({ path: '/sta/show' })
      })
    }
  }
}
</script>

<style>

</style>
