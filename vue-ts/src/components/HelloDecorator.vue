<template>
  <div>
    {{count}}
  </div>
</template>
<script lang="ts">
import {Component,Prop,Vue} from 'vue-property-decorator';

@Component
export default class HelloDecorator extends Vue {
  count: number = 123 // 类属性相当于以前的 data

  add() { // 类方法就是以前的方法
    this.count + 1
  }

  // 获取计算属性
  get total(): number {
    return this.count + 1
  }

  // 设置计算属性
  set total(param:number) {
    this.count = param
  }
}
</script>
