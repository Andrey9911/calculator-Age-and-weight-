
const app = new Vue({
    
    el: '#app',
    data:{
        age: 'age',
        weight: 'weight',
        bb: 10,
        w: '',
        h: '',
        warning: '',
        isActive: false,
        isDrag: 'none',
        not: true,
        rez: 0,
        z: 0,
        
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
        },
        getw_h(e){
            this.w = e.path[2][0].value
            this.h = e.path[2][1].value
            // console.log(this.w)
            // console.log(e.path[2][1].value)
        },
        go(){
            
            if(this.h !== '' || this.h !== ''){
                if(isNaN(this.w) && isNaN(this.h)){
                    this.not = false
                    this.isActive = true

                    return this.warning = 'не число'}
                else if(isNaN(this.w)){
                    this.not = false
                    this.isActive = true
                     return this.warning = this.w + ' не число'}
                else if(isNaN(this.h)) {
                    this.not = false
                    this.isActive = true
                    return this.warning = this.h + ' не число'}
               else{
                    this.not = true
                    this.isActive = false
                    this.warning = ''
                    this.rez = this.h - this.w
                    rez = this.rez
                    console.log(rez)
                    if(rez < 85 || rez > 120) this.z = 3

                    else if(rez < 90 || rez > 110) this.z = 2

                    else this.z = 1
                }
                // console.log(typeof(h))
                
                
                // document.querySelector('#warning_content').classList.remove('notActive')
                // document.querySelector('#warning_content').classList.add('active')
            }else{
                this.warning = 'пустые поля!'

                this.not = false
                this.isActive = true
                
            }
            // checkPassword(this.w,this.h,this.isActive ,this.notActive)
            // console.log(act)
            
            
            },
            drag(e){
                this.isDrag = 'block'
                console.log(e)
                //get.stargDrag()
            },
            notDrag(e){
                this.isDrag = 'none'
                // e.target.style.opasity = this.isDrag + 'px'
            }
        }
})