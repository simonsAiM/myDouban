import axios from 'axios'
import qs from  'qs'
/*let axiosInst = axios.create({
    headers : {
        'content-type':'application/x-www-form-urlencoded'
    }
});

let data = qs.stringify({
    'email' : state.login_emial,
    'token' : state.login_token
})*/

const state = {
    login_email : '',
    login_token : '',
    login_name : '',
    temp_email : '',
    temp_token : '',
    temp_name : ''
};

const getters = {
    currentUser:state=>{
        return {
            email : state.login_email,
            token : state.login_token,
            name : state.login_name
        }
    }
}
const mutations ={
    updateData(state,payload){
        switch(payload.name){
            case 'email':
                state.temp_email = payload.value;
                break;
            case 'name':
                state.temp_name = payload.value
                break
            case 'token':
                state.temp_token = payload.value
                break
            default:
                console.log("Error : Don't directly mutate vuex store")
        }
    },
    getLocalUer(state){
        state.login_email = localStorage.getItem('email');
        state.login_token = localStorage.getItem('token');
        state.login_name = localStorage.getItem('name');
    },

    setUser(state,payload){
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        state.login_email = '';
        state.login_token = '';
        state.login_name = '';
    }
};


const actions = {
    login({commit},payload){
        return new Promise((XPathNSResolver,reject)=>{
            axios.get('https://douban.herokuapp.com/user/'+payload.email)
                .then(res=>{
                    commit({
                        type : 'setUser',
                        email : res.data.email,
                        token : res.data.token,
                        name : res.data.name
                    })
                    resolve(res);
                })
                .catch(err=>{
                    console.log(err);
                    reject(err);
                })
        })
    },
    register({commit},payload){
        return new Promise((reslove,reject)=>{
            axios.post("https://douban.herokuapp.com/user/",{
                email : payload.email,
                token : payload.token,
                name : payload.name
            }).then(res=>{
                resolve(res);
            }).catch(err=>{
                reject(err);
            })
        })
    }
}


export default{
    state,
    mutations,
    getters,
    actions
}