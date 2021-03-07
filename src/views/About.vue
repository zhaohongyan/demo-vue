<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <span>count: {{ count }}</span>
      <button @click="add">add 10</button>
    </p>
    <p>
      <span>asyncCount: {{ asyncCount }}</span>
      <button @click="addAsync">add 20</button>
    </p>
    <span>doneTodosCount: {{ doneTodosCount }}</span>
    <ul id="example-1">
      <li v-for="item in doneTodos" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { INCREMENT, INCREMENT_ASYNC } from "../mutation-types";

export default {
  data: function () {
    return {
      data: "",
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    asyncCount() {
      return this.$store.state.asyncCount;
    },
    doneTodos() {
      return this.$store.getters.doneTodos; // -> [{ id: 1, text: '...', done: true }]
    },
    doneTodosCount() {
      return this.$store.getters.doneTodosCount;
    },
  },
  methods: {
    add: function () {
      this.$store.commit(INCREMENT, { amount: 10 });

      // this.$store.commit({
      //   type: "increment",
      //   amount: 10,
      // });
    },
    addAsync: function () {
      // 以载荷形式分发
      this.$store.dispatch(INCREMENT_ASYNC, {
        amount: 20,
      });

      // 以对象形式分发
      // store.dispatch({
      //   type: 'incrementAsync',
      //   amount: 10
      // })
    },
  },
};
</script>
