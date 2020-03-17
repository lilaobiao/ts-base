<template>
  <div>
    {{count}}
  </div>
</template>
<script lang="ts">
import {Component,Prop,Watch,Vue} from 'vue-property-decorator';

interface Person {
  name:string,
  age:number
}

@Component({})
export default class HelloPropWatch extends Vue {
  // @Prop(String)
  // propA:string;

  // @Prop([String,Number])
  // propB:string|number;

  // @Prop({
  //   type: String, // type: [String , Number]
  //   default: 'InProcess', // 一般为String或Number
  //   //如果是对象或数组的话。默认值从一个工厂函数中返回
  //   // defatult: () => {
  //   //     return ['a','b']
  //   // }
  //   required: true,
  //   validator: (value) => {
  //     return [
  //       'InProcess',
  //       'Settled'
  //     ].indexOf(value) !== -1
  //   }
  // })
  // propC:string;

  child:Person = {
    name:'',
    age:0
  };


  @Watch('child')
  onChildChanged(val: string, oldVal: string) {}

  @Watch('person', { immediate: true, deep: true })
  onPersonChanged1(val: Person, oldVal: Person) {}

  // @Watch('person')
  // onPersonChanged2(val: Person, oldVal: Person) {}
}
</script>
