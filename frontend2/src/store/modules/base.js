const state = {
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    // auth
    connect:false,
    credential: {},
  }

const mutations= {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    sidebarMinimize(state) {
      let sidenav_show = document.querySelector("#app");
      if (state.isPinned) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    updateCredential(state, payload){
      state.credential = payload
    }
  }
const actions= {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
    update_Credential({ commit }, payload){
      commit("updateCredential",payload)
    }
  }
const getters= {
  credential: state => state.credential
}

// like ask by best practice, constances name are write in UPPER_SNAKE_CASE
const BASE_MODULE = {
  state,
  mutations,
  actions,
  getters,
};

export default BASE_MODULE;
