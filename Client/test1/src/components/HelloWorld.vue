<template>
  <div class="hello">
    <h1>Todo List</h1>
    <b-form-group label="Todo List:">
      <div v-for="(item, index) in todo" :key="index" class="d-flex justify-content-center align-items-center">
        {{ item }}
        <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted"
          unchecked-value="not_accepted">
        </b-form-checkbox>
      </div>

    </b-form-group>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      selected: [], // Must be an array reference!
      todo: ['a', 'b', 'c', 'd'],
      options: [
        { text: 'Orange', value: 'orange' },
        { text: 'Apple', value: 'apple' },
        { text: 'Pineapple', value: 'pineapple' },
        { text: 'Grape', value: 'grape' }
      ],
      status: [],
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const response = await axios.get('http://localhost:6969/todos/list')
      console.log(response);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
