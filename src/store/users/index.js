let id = 0;
export default {
  namespaced: true,
  state: {
    users: [
      {
        id: "adsfsdf",
        name: "meet",
        email: "meetvaghasiya2012@gmail.com",
        mobile: "7069794804",
        birthDate: "20-12-1997",
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
  },
  actions: {
    async addUser({ commit }, payload) {
      const user = await new Promise((res) => {
        setTimeout(() => {
          res(payload);
        }, 1000);

        // console.log(user, "user after return promise");
      });
      commit("addUser", user);
    },
  },
};
