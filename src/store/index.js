import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state'
import mutations from './mutations'
export default new Vuex.Store({
	state: state,
	actions:{
		changeCity(ctx, city) {
			ctx.commit('changeCity', city)
		}
	},
	mutations: mutations,
	getters: { //类似于计算属性
		doubleCity (state){
			return state.city
			// return state.city + ' ' + state.city
		}
	}
})
