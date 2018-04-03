'use strict';
window.onload = function(){
    const items = Array.from(document.querySelectorAll('[data-time]'))

    // filtering items
    const ecmaElements = items.filter( item=>item.textContent.startsWith('ECMA6') )
    console.log( ecmaElements )

    // getting time array
    const timeArray = items.map( item=>item.getAttribute('data-time') )
    console.log( timeArray )

    // getting seconds array
    const secondArray = items.map( item=>item.getAttribute('data-time').split(':')[1] )
    console.log( secondArray )

    // total time
    const totalTime = items.reduce( ( sum, item ) => {
        const arr = item.getAttribute('data-time').split(':');
        const min = parseInt( arr[0] )
        const sec = parseInt( arr[1] )
        
        return min*60+sec
    } , 0 )
    console.log( totalTime )

    var library = [
    { prof: 'Asaad Saad', course: 'WAP', courseID: 'CS452' },
    { prof: 'Rakesh Shrestha', course: 'WAA', courseID: 'CS545' },
    { prof: 'Steve Nolle', course: 'SWE', courseID: 'CS425' }
    ]

    // sort 
    const sortedArr = library.sort( (a, b)=>{
        const courseA = a.course.toUpperCase()
        const courseB = b.course.toUpperCase()

        if(courseA<courseB) return -1

            if(courseA>courseB) return 1

        // name is equal
    return 0
})
    console.log(sortedArr)


    // calculate BMI
    class CalculateBMI{
        constructor(height, weight){
            this.height = height
            this.weight = weight
        }

        calculateBMI() {
            var BMI = (this.weight / (this.height * this.height)) * 703
            
            return Math.round(BMI * Math.pow(10, 2)) / Math.pow(10, 2);
        }

        validate(){
            return !isNaN(parseFloat(this.height)) && !isNaN(parseFloat(this.weight))
        }
    }

    const button = document.getElementById('calculate')
    const output = document.getElementById('output')
    // when button click
    button.onclick = function(e){

        const height = document.getElementsByName('height')[0].value
        const weight = document.getElementsByName('weight')[0].value

        const calculator = new CalculateBMI(height, weight)
        if( calculator.validate() === false ){
            output.innerHTML = '<p>'+'Please insert valid height and weight!'+'</p>'
            return;
        }

        output.innerHTML = 'The result is: ' + calculator.calculateBMI()
    }


    // filter exercise
    const number = [3, 62, 234, 7, 23, 74, 23, 76, 92]
    const aboveSeventy = number.filter(number=>number>70)
    console.log(aboveSeventy)
    
    // inheritance excercise
    function Person(name){
        this.name = name
    }
    
    let TeacherA = new Person('Asaad');
    let TeacherB = new Person('Xing');
    
    Person.prototype.teach = function(subject){
        console.log( this.name + ' is now teaching ' + subject )
    }
    TeacherA.teach('WAP');
    TeacherB.teach('MWA');
    
    // banned words
    String.prototype.filter = function(arrStr){
        let ret = this;
        for(let str of arrStr){
            ret = ret.replace(str, '***')
        }
        return ret
    }
    
    console.log("This house is nice!".filter(['house', 'nice']))
    
    // array bubble sort
    Array.prototype.bubbleSort = function(){
     let items = this

     const length = items.length
     for (let i = 0; i < length; i++) {
      for (let j = 0; j < (length - i - 1); j++) {
       if (items[j] > items[j + 1]) {
        [ items[j], items[j+1] ] = [ items[j+1], items[j] ]
    }
}
}

console.log( items )
}

let numArr = [6, 4, 0, 3, -2, 1]

numArr.bubbleSort();
};