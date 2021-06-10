
window.onscroll = function() {
    let el=document.getElementsByClassName("loadFromBottom");
    for(let i=0;i<el.length;i++)
    {
        if(elementInViewport2(el[i])==true){
            console.log("In viewpoint");
            if(el[i].classList.contains("loadedFromBottom")==false){
                
                    el[i].classList.add("loadedFromBottom");
                    el[i].classList.remove("loadFromBottom");
                
                
            }
            
        }
    }
    let el2=document.getElementsByClassName("loadFromLeft");
    for(let i=0;i<el2.length;i++)
    {
        if(elementInViewport2(el2[i])==true){
            console.log("In viewpoint");
            if(el2[i].classList.contains("loadedFromLeft")==false){
                
                    el2[i].classList.add("loadedFromLeft");
                    el2[i].classList.remove("loadFromLeft");
               
                
            }
            
        }
    }
    let el3=document.getElementsByClassName("loadFromRight");
    for(let i=0;i<el3.length;i++)
    {
        if(elementInViewport2(el3[i])==true){
            console.log("In viewpoint");
            if(el3[i].classList.contains("loadedFromRight")==false){
                
                    el3[i].classList.add("loadedFromRight");
                    el3[i].classList.remove("loadFromRight");
                
                
            }
            
        }
    }
    
   
    // let el2=document.getElementById("about");
    // if(elementInViewport2(el2)==true){
    //     console.log("In viewpoint");
    //     if(el2.classList.contains("loadcontent")==false){
    //         el2.classList.add("loadcontent");
    //     }
    // }

    // let el3=document.getElementsByClassName("creation-content-image");
    // if(elementInViewport2(el3[0])==true)
    // {
    //     for(let i=0;i<el3.length;i++)
    //     {
    //         setTimeout(()=>{
    //             el3[i].classList.add("loadcontent2");
    //         },(i*200))
            
    //     }
    // }
   
};



function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }


