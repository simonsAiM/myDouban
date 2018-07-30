import Vue from 'vue'
import Vuex from 'vuex'

import activities from "./modules/activities"
import movie from './modules/movie'
import book from './modules/book'
import user from './modules/user'

Vue.use(Vuex)


/* new Vuex.store  报错 __WEBPACK_IMPORTED_MODULE_1_vuex__.a.store is not a constructor
    store首字母一定要大写
*/
export default new Vuex.Store({
    modules : {
        activities,
        movie,
        book,
        user
    }
})