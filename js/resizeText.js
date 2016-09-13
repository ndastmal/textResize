

(function ($) {
    
    $.fn.sizeText = function () {
        var biggerText = document.getElementsByClassName("increaseText");
        var smallerText = document.getElementsByClassName("decreaseText");
        var ogText = document.getElementsByClassName("originalText");


        var ogFontSizeArray = new Array;
        var sizeArray = document.getElementsByTagName("*");        
        for (var i =0; i < sizeArray.length; i++){
             var keepSize = sizeArray[i];
             var style = window.getComputedStyle(keepSize, null).getPropertyValue('font-size');
             var fontSize = parseFloat(style); 
             ogFontSizeArray[i] = fontSize;
        }
        
        return this.each(function () {
            
            $(biggerText).click(function(event){    
                
                var elemen = document.getElementsByTagName("*");

                for (var i =0; i < elemen.length; i++){
                    var elemen2 = elemen[i];
                    if ($(elemen2).hasClass('resizeText')){

                        var style = window.getComputedStyle(elemen2, null).getPropertyValue('font-size');
                        var fontSize = parseFloat(style); 
                        elemen2.style.fontSize = (fontSize + 1) + 'px';
                    }
                }
            });
            
            $(smallerText).click(function(event){    
                window.console.log('stuff man');
           
                var elemen = document.getElementsByTagName("*");
                 
                for (var i =0; i < elemen.length; i++){
                    var elemen2 = elemen[i];
                    if ($(elemen2).hasClass('resizeText')){
                        window.console.log(elemen2);
                
                        var style = window.getComputedStyle(elemen2, null).getPropertyValue('font-size');
                        var fontSize = parseFloat(style); 

                        elemen2.style.fontSize = (fontSize - 1) + 'px';
                    }
                }
            });
            $(ogText).click(function(event){    
                    window.console.log('stuff man');

                    var elemen = document.getElementsByTagName("*");

                    for (var i =0; i < elemen.length; i++){
                       elemen[i].style.fontSize =   ogFontSizeArray[i] + 'px';                     
                   }
                });   
        });
    }
}(jQuery));