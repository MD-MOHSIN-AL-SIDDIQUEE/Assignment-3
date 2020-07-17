//Assignment no. 1

function feetToMile(feet){
    
    mile=feet*.000189 //1feet=.000189 mile
    actualMile=mile.toFixed(5)
    if(feet<0){
        return "distance cannot be negative"
    }else{
        return actualMile;
    }
    
}
var feet=10000;
result=feetToMile(feet);
console.log(feet,"feet=",result,"mile")


//Assignment no 2

function woodCalculator(chair,table,khat){
 
        woodForchair=chair*1//wood requeird for every chair=1 cft  
        woodForTable=table*3 //wood requeird for every table=3 cft
        woodForKhat=khat*5 //wood requeird for every khat=5cft
   
    if(chair<0||table<0||khat<0){
        return "one/more negative value is defined.please input pssitive value" 
    }else{
        sum=woodForchair+woodForTable+woodForKhat;
        return sum;
    }
    
         
}
var chair=12;
var table=3;
var khat=5;
result=woodCalculator(chair,table,khat);
console.log("total wood requird(cft)=",result);


//Assignment no.3
function  brickCalculator(building){
    
    sum1=0;
    sum2=0;
    sum3=0;
    
    if(building>0){
    
        if(building>=10){
            n1=10;
        }
        if(building<10){
            n1=building;
        }
       
        for(i=1;i<=n1;i++){
         sum1=sum1+15*1000  //total number of brick upto 10 storeyed
        }
    }
    
    if(building>10){
    
        if(building>=20){
            n2=20;
        }
        if(building<20){
            n2=building;
        }
       
        for(i=11;i<=n2;i++){
         sum2=sum2+12*1000  //total number of brick from 10 to 20 storeyed
        }      
    }
    
    if(building>20){
        
        for(i=21;i<=building;i++){
         sum3=sum3+10*1000  //total number of brick above 20 storeyed
        }   
    }
    
    if(building<0){
        return("building cannot be negative")
    }
    else{
        return(sum1+sum2+sum3)
    }
    }
    
    var building=25;//storeyed
    var result=brickCalculator(building)
    console.log("Total amount of brick=",result)


//assignment No. 4

    function tinyFriend(){

    min=friendName[0].length

    for(i=0;i<friendName.length;i++){
       
        if(friendName[i]==undefined){
               tinyfriend= ("In "+i+"th position empty array is defiend")
           } else{

       element=friendName[i].length;

        if(element<min){
           min=element;
           tinyfriend=friendName[i]
       }
       }
       }
       
       return (tinyfriend)
       }
       
  var   friendName=["rahim","karima","jami","mahandra","ju"]
       result=tinyFriend(friendName)
       console.log("The smallest name is=",result)
       