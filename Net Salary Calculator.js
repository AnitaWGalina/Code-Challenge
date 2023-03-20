function computeNetSalary(basicsalary ,rateoftax, nssfdeductions){

    let rateoftax;
    
    
    
    if (basicsalary<= 24000){
        rateoftax = ('10% of basicsalary');
        
    
    }
    
    else if (basicsalary >= 24001 && basicsalary <= 32333){
        rateoftax = ('25% of basicsalary');
        
    }
    
    else {
        rateoftax = ('30% of basicsalary');
       
    }
    
    }
    
    
    
    
    let nssfdeductions;
    
    if (basicsalary>0 && basicsalary <=6000){
        nssfdeductions=360
    }
    else if (basicsalary >=6001 && basicsalary>= 18000){
        nssfdeductions=540
    }
    else {
        nssfdeductions=1080
    }
    
    
    
    let totalDeductions;
    totalDeductions=rateoftax+nhifdeductions
    
    let netSalary;
    netSalary = gross_salary-totalDeductions
    console.log(netSalary);
    
    
    
    
    
    
    
    
    
    