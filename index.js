/**
 * Created by jianghui on 2018/4/11.
 */
var app = new Vue({
    el:'#app',
    data:{
        list:[
            {
                id:1,
                name:'iphone7',
                price:6188,
                count:1
            },
            {
                id:2,
                name:'ipad pro',
                price:5888,
                count:1
            },
            {
                id:3,
                name:'macbook pro',
                price:21488,
                count:1
            }
        ]

    },
    computed:{
        totalPrice: function () {
            var total = 0;
            for(let i=0;i<this.list.length;i++){
                let item = this.list[i];
                total += item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',')
        }

    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count ===1) return;
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        handleRemove:function (index) {
            this.list.splice(index,1);
        },
        test:function () {
            setTimeout(function () {
               console.log('timeout')
            },0)
            var promise = new Promise(function (resolve, reject) {
                console.log('promise start')
                for(let i=0;i<100;i++){
                    i===99&&resolve()
                }
                console.log('promise end')
            });
            promise.then(function () {
                console.log('promise then')
            })
            console.log('test end');
        }
    }
})