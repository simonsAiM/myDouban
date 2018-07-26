import axios from 'axios'

const state ={
    events : [],
    temp : [],
    skip : 0,
    eventItem : {}
}

const mutations = {
    loadMore(state,payload){
        state.skip +=3;
        state.events = state.events.concat(payload.res)
    },
    getSingleEvent(state,payload){
        state.eventItem = payload.res;
    }
}

const actions={
    loadMore({commit,state}){
        return new Promise((resolve,reject)=>{
            axios.get('/api/event/list?loc=108288&start='+state.skip+'&count=3'
                ).then(res=>{
                    commit({
                        type : 'loadMore',
                        res : res.data.events
                    })
                    resolve(res);
                }).catch(err=>{
                    reject(err);
                })
        })
    },
    getSingleEvent({commit,state},payload){
        return new Promise((resolve,reject)=>{
            axios({
                url:'/api/event'+payload.id
            }).then(res=>{
                commit({
                    type : 'getSingleEvent',
                    res : res.body
                })
                resolve(res);
            }).catche(err=>{
                reject(err);
            })
        })
    }
}

export default{
    state,
    mutations,
    actions
}