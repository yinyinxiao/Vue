var vm=new Vue({
    el: '#app',
    data: {
        todolist: [{thing: "吃饭", checked: false}, {thing: "睡觉", checked: false}, {
            thing: "唱歌",
            checked: false
        }, {thing: "学习", checked: false}],
        todo: '',
        something:'',
        hash:''
    },
    computed: {
        total() {
            return this.todolist.filter(item=>!item.checked).length;
        },
        filterTodo(){
            if(this.hash==='total'){
                return this.todolist;
            }
            if(this.hash==='finished')
                return this.todolist.filter(item=>item.checked)
            if(this.hash==='unfinished')
                return this.todolist.filter(item=>!item.checked);
            return this.todolist;
        }
    },
    directives: {
        focus(el, bindings) {
            console.log(bindings)
            if(bindings.value)
                 el.focus();

        }
    },
    methods: {
        getLine(value) {
            return value ? 'lineH' : '';
        },
        remove(el) {
            this.todolist = this.todolist.filter(item => item !== el)
        },
        getTodo(el) {
            this.todo = el;
        },
        blur() {
            this.todo = '';
        },
        addThing(val){
            this.todolist.push({thing:val,checked:false});
        }
    },
    created() {
        this.todolist = JSON.parse(localStorage.getItem('data')) || this.todolist;
        this.hash=window.location.hash.slice(2)||'total';
        window.addEventListener('hashchange',()=>{
            this.hash=window.location.hash.slice(2);
        },false);
        },
    watch:{
        todolist:{
            handler(){
                localStorage.setItem('data',JSON.stringify(this.todolist));
            },
            deep:true
        }
    }

});