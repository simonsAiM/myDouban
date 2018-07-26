import axios from 'axios'

function getUrl(str,count){
    if(typeof str != 'string') return ;
    return '/api/movie/'+string+'?count='+count;
}

const state = {
    hotMovies : [],
    newMovies : [],
    topMovies : [],
    movieTags : [
        {
            title : '同时入选IMDB250和豆瓣电影250的电影',
            href : 'https://m.douban.com/doulist/968362',
            color : '#3BA94D'
        },{
            title : '带你进入不正常的世界',
            href : 'https://m.douban.com/doulist/16002/',
            color : '#FF4055'
        },{
            title: '用电【影】来祭奠逝去的岁月',
            href: 'https://m.douban.com/doulist/190343',
            color: '#4F9DED'
        },
        {
            title: '女孩们的故事【电影】',
            href: 'https://m.douban.com/doulist/1125971',
            color: '#FFC46C'
        },
        {
            line: true
        },
        {
            title:'使用App【找电影】功能',
            href :'https://www.douban.com/doubanapp/dispatch?from=mdouban&download=1&model=B&copy=1&page=movie&channel=card_find_movie&uri=%2Fmovie%2Ftag',
            color:'#3BA94D'
        },
        {
            title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
            href: 'https://m.douban.com/doulist/4253902',
            color: '#2384E8'
        },
        {
            title: '美国生活面面观',
            href: 'https://m.douban.com/doulist/121326',
            color: '#3BA94D'
        },
        {
            title: '2015终极期待',
            href: 'https://m.douban.com/doulist/37479562',
            color: '#42BD56'
        },
        {
            title: '经典韩国电影——收集100部',
            href: 'https://m.douban.com/doulist/458087',
            color:'#FFAC2D'
            // color: '#CC3344'
        }
    ],
    movieTypes :[
        {
            title : '经典',
            href : '/api/movie/classic'
        },{
            title : '冷门佳片',
            href : '/api/movie/underrated'
        },{
            title : '豆瓣高分',
            href : '/api/movie/underrated'
        },{
            title : '动作',
            href : '/api/movie/action'
        },{
            title : '喜剧',
            href : '/api/movie/comedy'
        },{
            title : '爱情',
            href : '/api/movie/love'
        },{
            title : '悬疑',
            href : '/api/movie/mystery'
        },{
            title : '恐怖',
            href : '/api/movie/horror'
        },{
            title : '科幻',
            href : '/api/movie/scifi'
        },{
            title : '治愈',
            href : '/api/movie/sweet'
        },{
            title : '文艺',
            href : '/api/movie/artfilm'
        },{
            title : '成长',
            href : '/api/movie/youth'
        },{
            title : '动画',
            href : '/api/movie/animation'
        },{
            title : '华语',
            href : '/api/movie/chinese'
        },{
            title : '欧美',
            href : '/api/movie/western'
        },{
            title : '韩国',
            href : '/api/movie/Korean'
        },{
            title : '日本',
            href : '/api/movie/japanese'
        },{
            // title : '',
            // href : ''
        }
    ]
}
const mutations = {
    getMovies(state,payload){
        switch(payload.tag){
            case 'hoeMovies':
                state.hotMovies = payload.res;
                break
            case 'newMovies':
                state.newMovies = payload.res;
                break
            case 'topMovies':
                state.topMovies = payload.res;
                break
            default :
                state.hotMovies = payload.res
        }
    }
}

const actions = {
    getMovies({commit}){
        return new Promise((resolve,reject)=>{
            // 热门电影
            axios.get('/api/movie/in_theaters?count=8')
                .then(res=>{
                    commit({
                        type : 'getMovies',
                        tag : 'hotMovies',
                        res : res.data.subjects
                    })
                    resolve(res);
                }).catch(err=>{
                    console.log(err)
                    reject(err);
                })
            
            // 即将上映
            axios.get('/api/movie/coming_soon?count=8')
                .then(res=>{
                    commit({
                        type : 'getMovies',
                        tag : 'newMovies',
                        res : res.data.subjects
                    })
                    resolve(res);
                })
                .catch(err=>{
                    console.log(err);
                })
            // 豆瓣top250
            axios.get('/api/movie/top250?count=8')
                .then(res=>{
                    commit({
                        type : 'getMovies',
                        tag : 'topMovies',
                        res : res.data.subjects
                    })
                    resolve(res);
                })
                .catch(err=>{
                    console.log(err);
                    reject();
                })
        })
    }
}


export default{
    state,
    mutations,
    actions
}