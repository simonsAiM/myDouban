import axios from 'axios'

const state={
    novel :[],
    reality :[],
    travel :[],
    bookTags : [
        {
            title : '晓波看书',
            href: 'https://m.douban.com/doulist/10372',
            color:'#CC3344'
        },{
            title : '村上春树周边',
            href: 'https://m.douban.com/doulist/105583',
            color:'#3BA94D'
        },{
            title : '我凭名字认定了你',
            href: 'https://m.douban.com/doulist/99294',
            color:'#4F9DED'
        },{
            title : '不可饶恕的女人们',
            href: 'https://m.douban.com/doulist/35573',
            color:'#FF4055'
        },{
            line : true
        },{
            title : '爱欲书',
            href: 'https://m.douban.com/doulist/380088147',
            color:'#42BD56'
        },{
            title : '他们还写侦探小说',
            href: 'https://m.douban.com/doulist/645579',
            color:'#FFAC2D'
        },{
            title : '人生识字始忧患',
            href: 'https://m.douban.com/doulist/192653',
            color:'#FFC46C'
        },{
            title : '詩歌書店',
            href: 'https://m.douban.com/doulist/89925',
            color:'#2384E8'
        }
    ],
    bookTypes : [
        {
            title : '小说',
            href : '/api/book/novel'
        },{
            title : '爱情',
            href : '/api/book/love'
        },{
            title : '历史',
            href : '/api/book/history'
        },{
            title : '外国文学',
            href : '/api/book/foreign'
        },{
            title : '青春',
            href : '/api/book/youth'
        },{
            title : '励志',
            href : '/api/book/motivation'
        },{
            title : '随笔',
            href : '/api/book/essay'
        },{
            title : '传记',
            href : '/api/book/bio'
        },{
            title : '推理',
            href : '/api/book/detective'
        },{
            title : '旅行',
            href : '/api/book/travel'
        },{
            title : '奇幻',
            href : '/api/book/fantasy'
        },{
            title : '经管',
            href : '/api/book/business'
        }
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
    getBook({commit}){
        return new Promise((resolve,reject)=>{
            axios.get('/api/book/search?tag=novel&count=8').then((res)=>{
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

            axios.get('/api/book/search?tag=reality&count=8').then(res=>{
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

            axios.get('/api/book/search?tag=travel&count=8').then(res=>{
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