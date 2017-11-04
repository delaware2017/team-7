window.total = function() {
    var inputs = document.getElementsByTagId('score'),
        result = document.getElementById('totalScore'),
        sum = 0;            
    
    for(var i=0; i<inputs.length; i++) {
        var ip = inputs[i];
    
        if (ip.name && ip.name.indexOf("totalScore") < 0) {
            sum += parseInt(ip.value) || 0;
        }
    
    }
    
    result.value = sum;
}
