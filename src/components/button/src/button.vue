<template>
  <button :class="classBtn" :disabled="isDisabled" :style="{'width':width+'px','height':height+'px','border-radius':radius+'px'}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "mm-button", //name重要性，使用组件时的名称 <mm-button></mm-button>
  data() {
    return {
      preClass: "mm-btn" //默认的class名称
    };
  },
  props: {
    //禁用状态
    isDisabled: Boolean,
    //类型
    type: {
      type: String,
      default: "default", //'default',success','warning','error'
      validator(val) {
        let types = ["default", "success", "warning", "error"];
        return types.includes(val) || !val;
      }
    },
    //尺寸
    width: {
      type: String,
      default: "80"
    },
    height: {
      type: String,
      default: "30"
    },
    //形状
    radius: {
      type: String,
      default: "0"
    }
  },
  computed: {
    //定义多个className
    classBtn() {
      let { preClass, type } = this;
      let className = [
        `${preClass}`,
        {
          [`${preClass}-${type}`]: !!type
        }
      ];
      return className;
    }
  }
};
</script>
