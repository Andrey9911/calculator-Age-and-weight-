
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
        rezult: {
            rez: 0,
            rez2: 0,
            rez3: 0
        },
        z: 0,
        year_bir: 0,
        isDate: true,
        
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
                    if(rez > 150){
                        this.not = false
                        this.isActive = true

                        this.warning = 'некоректные данные'
                    }
                    else if(rez < 85 || rez > 120) this.z = 3

                    else if(rez < 90 || rez > 110) this.z = 2

                    else if(rez > 90 || rez < 110) this.z = 1

                    
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
            },
            goDate(e){
                let year = new Date()
                let rez_next
                year_bir = new Date(this.year_bir)
                this.rezult.rez = year.getFullYear() - year_bir.getFullYear()
                let yearN = new Date(year_bir.setFullYear(year.getFullYear() + 1))
                
                
                // console.log(year_bir.getFullYear())
                //console.log(nextYear)

                rez_next = Math.abs(yearN.getTime() - year.getTime()) 
                rez_next =  Math.ceil(rez_next / (1000 * 3600 * 24))
                this.rezult.rez2 = rez_next
                this.rezult.rez3 = 365  - rez_next
                //this.rezult.rez2 = 
                // console.log(year_bir.getFullYear())
                // console.log(year.getFullYear())

               
                // console.log(yearN.getFullYear())
                // console.log(Boolean(year_bir.setFullYear(year.getFullYear) <= year.getFullYear()))

                year_bir2 = new Date(this.year_bir)

                // console.log(year_bir2.getFullYear())

                

                
                console.log(Boolean((year_bir2.getFullYear() <= year.getFullYear()) && (year_bir2.getMonth() <= year.getMonth()) && (year_bir2.getDay() <= year.getDay())))

                if(year_bir2.getFullYear() <= year.getFullYear()){
                    if((((year_bir2.getMonth() + 1) <= (year.getMonth() + 1)) && (year_bir2.getDate() <= year.getDate())) || year_bir2.getFullYear() <= year.getFullYear()){

                            this.not = true
                            this.isActive = false
 
                            if(this.rezult.rez3 == 0) this.isDate = false
                            else this.isDate = true
                            
                                                    }
                        else{
                            this.not = false
                            this.isActive = true
                            return this.warning = this.w + 'не допустимая дата!'
                        }
                }
                else{
                    this.not = false
                    this.isActive = true
                    return this.warning = this.w + 'не допустимая дата!'
                }
                
                // console.log(rez_next)

                
            }
        }
})

