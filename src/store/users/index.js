let id = 0;
export default {
  namespaced: true,
  state: {
    users: [
      {
        id: "adsfsdf",
        name: "meet",
        email: "meet@gmail.com",
        mobile: "7069794804",
        birthDate: "1997-12-20",
      },
      {
        id: "4ssfg",
        name: "mit",
        email: "abc@gmail.com",
        mobile: "8888887788",
        birthDate: "1997-11-20",
      },
    ],
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {
    addUser(state, payload) {
      state.users.unshift({ ...payload, id: ++id });
    },
    editUser(state, payload) {
      const index = state.users.findIndex((user) => user.id === payload.id);
      state.users.splice(index, 1, { ...payload });
    },
    deleteUser(state, id) {
      const index = state.users.findIndex((user) => user.id === id);
      state.users.splice(index, 1);
    },
  },
  actions: {
    async addUser({ commit }, payload) {
      const user = await new Promise((res) => {
        setTimeout(() => {
          res(payload);
        }, 1000);
      });
      commit("addUser", user);
    },
    async editUser({ commit }, payload) {
      const user = await new Promise((res) => {
        setTimeout(() => {
          res(payload);
        }, 1000);
      });
      commit("editUser", user);
    },
    async deleteUser({ commit }, payload) {
      const user = await new Promise((res) => {
        setTimeout(() => {
          res(payload);
        }, 1000);
      });
      commit("deleteUser", user.id);
    },
  },
};
