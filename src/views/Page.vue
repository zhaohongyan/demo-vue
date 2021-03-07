<template>
  <div class="page">
    this is my page
    <Input
      v-model="value"
      placeholder="Enter something..."
      style="width: 300px"
    />

    <Select v-model="model1" style="width: 200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{
        item.label
      }}</Option>
    </Select>

    <Button>查询</Button>
  </div>
</template>

<script>
import { Input, Select, Button } from "view-design";
export default {
  name: "Page",
  components: [Input, Select, Button],
  data() {
    return {
      cityList: [
        {
          value: "New York",
          label: "New York",
        },
        {
          value: "London",
          label: "London",
        },
        {
          value: "Sydney",
          label: "Sydney",
        },
        {
          value: "Ottawa",
          label: "Ottawa",
        },
        {
          value: "Paris",
          label: "Paris",
        },
        {
          value: "Canberra",
          label: "Canberra",
        },
      ],
      value: "",
      model1: "",
    };
  },
};
</script>
