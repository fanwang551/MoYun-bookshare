<template>
    <side-bar>
        <el-col :span="12">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">Friend</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">System</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-menu"></i>
                <span slot="title">Recommendations</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </side-bar>    
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
