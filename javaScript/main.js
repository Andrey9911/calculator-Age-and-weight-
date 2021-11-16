const app = new Vue({
    el: '#app',
    data:{
        age: 'age',
        weight: 'weight',
        bb: '1px solid #8a2be2',
        //active: true
    },
    methods:{
        
        link(par){
            console.log(par + '/' + par + '.html')
            document.location.href = '../' + par + '/' + par + '.html'
            
        },
        lineHover(e){
            console.log(e.path[1].lastChild.style)
            setTimeout(() => {
                e.target.style.cursor = 'pointer'
                e.path[1].lastChild.style.animation = '0.3s linehover ease-in'
            })
            e.path[1].lastChild.style.animation = ''
        },
        str(e){
            console.log(e)
            document.location.href = '../main/index.html'
        }
    }
})