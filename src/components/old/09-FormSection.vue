<script setup lang="ts">

</script>

<template>
<div class="form-section">
  <div class="header-container">
    <h1 class="header-text">Сделай шаг навстречу приключениям</h1>
  </div>
  <div class="form-container">
    <div class="left-container">
    <el-form :model="form" label-width="auto" style="max-width: 600px; border: 1px solid black; padding: 20px;">
      <el-form-item label="Activity name">
        <el-input />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select  placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
              type="date"
              placeholder="Pick a date"
              style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
              placeholder="Pick a time"
              style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch  />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group >
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group>
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="right-container">
      <el-image
          src="https://picsum.photos/536/354"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
.header-text {
  font-size: 4rem;
  text-align: center;
}
.form-section {
  width: 100%;
  height: 100vh;
}
.form-container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
el-form {
  border: 1px solid black;
}
.el-image {
  border-radius: 20px;
}
</style>