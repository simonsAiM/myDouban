import axios from 'axios'

const state={
    novel :[],
    reality :[],
    travel :[],
    bookTags : [

    ],
    bookTypes : [

    ]
}


const mutations = {
    getBook(state,payload){
        switch(payload.tag){
            case 'novel':
                state.novel = payload.res;
                break
            case 'reality':
                state.reality = payload.res;
                break
            case 'travel':
                state.travel = payload.res;
                break
            default:
                state.novel = payload.res;
        }
    }
}

const actions = {
    getBookes({commit}){
        return new Promise((resolve,reject)=>{
            axios.get('/api/bookes/search/?q=虚构类&count=8').then((res)=>{
                commit({
                    type : 'getBook',
                    tag : 'novel',
                    res : res.data.books
                })
                resolve(res)
            }).catch(err=>{
                console.log(err);
                reject(err);
            })

            axios.get('/api/bookes/search/?q=非虚构类count=8').then(res=>{
                commit({
                    type : 'getBook',
                    tag : 'reality',
                    res : res.data.books
                })
                resolve(res);
            }).catch(err=>{
                console.log(err);
                reject(err);
            })

            axios.get('/api/bookes/search/q=旅行类?count=8').then(res=>{
                commit({
                    type : 'getBook',
                    tag : 'travel',
                    res : res.data.books
                })
                resolve(res);
            }).catch(err=>{
                console.log(err);
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