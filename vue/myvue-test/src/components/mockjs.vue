<template>
  <div></div>
</template>

<script>
const Mock = require("mockjs");
import { Random } from "mockjs";
export default {
  methods: {
    test() {
      Mock.Random.extend({});
    }
  }
};
</script>

<style lang="less" scoped></style>
