<template>
  <div
    :class="classTips"
    v-if="tips != ''"
    :style="{ 'border-radius': radius + 'px' }"
  >
    <slot>{{ tips }}</slot>
  </div>
</template>
<script>
export default {
  name: "mm-toast",
  data() {
    return {
      preClass: "mm-toast"
    };
  },
  computed: {
    classTips() {
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
