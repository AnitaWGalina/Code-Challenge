const calculate = () =>{

    let percentage = (totalgrades/400) *100;
        
    
    if (perecentage>79){
        console.log("Grade : A");
    }
    else if (percentage  >= 69 && percentage <= 79){
        console.log("Grade: B");
    }
    else if (percentage >= 49 && percentage <=59){
        console.log("Grade: C");
    }
    else if (percentage >= 40 && percentage <=49){
        console.log("Grade: D");
    } 
    else {
        console.log("Grade: E");
    }
    
    }