window.onload=function(){
    var result=document.getElementById('resultInner')
    var numbers=document.querySelectorAll('.number')
    var selectedOperator=''
    var leftPart='';
    var rightPart='';
    for(let i=0;i<numbers.length;i++){
        numbers[i].addEventListener('click',function(){
            
            result.innerHTML+=numbers[i].value
            



            if(selectedOperator==''){
                
                leftPart+=numbers[i].value
                
            
            }
            else if(selectedOperator!=''){
                rightPart+=numbers[i].value
                
            }
        },false);
    }



    var operators=document.querySelectorAll('.operator')
    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener('click',function(){
            selectedOperator=operators[i].value
            result.innerHTML+=operators[i].value
        },false);
    }


    let equal=document.getElementById('equation')
    equal.addEventListener('click',function(){
        if(selectedOperator=='+'){
            result.innerHTML=parseInt(leftPart)+parseInt(rightPart)
        }
        else if(selectedOperator=='-'){
            result.innerHTML=parseInt(leftPart)-parseInt(rightPart)
        }
        else if(selectedOperator=='/'){
            result.innerHTML=parseInt(leftPart)/parseInt(rightPart)
        }
        else if(selectedOperator=='*'){
            result.innerHTML=parseInt(leftPart)*parseInt(rightPart)
        }
       
    },false)

   var deleteBtn=document.getElementById('delete')
    deleteBtn.addEventListener('click',function(){
       selectedOperator='';
       leftPart='';
       rightPart='';
       result.innerHTML='';

    },false)
}