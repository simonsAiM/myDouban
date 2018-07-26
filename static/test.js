/* promise新建后就会立即执行 */
const promise = new Promise(function(resolve,reject){
    if(''){
        resolve(value)
    }else{
        reject(error)
    }
});

promise.then(function(value){

},function(error){

})