import axios from 'axios';
import { defineStore } from 'pinia'
import { ElMessage } from 'element-plus'

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 0,
    posts: []
  }),
  actions: {
    increment() {
      // `this` is the store instance
      this.counter++
    },

    async getPosts () {
      try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        console.log(data.slice(0, 5), 'RES');
        const res = data.slice(0, 5);
        this.posts = res;

        ElMessage({
          message: 'Data success received!',
          type: 'success',
        })

      } catch (e) {
        ElMessage.error(e)
        return e;
      }
    }
  },
})