$( document ).ready(function() {
    $('.ui.form')
    .form({
      fields: {
        x     : 'empty',
        y   : 'empty',
        z : 'empty'
      }
    },{
        onFailure: function() {
            // prevent form submission (doesn't work)
            console.log("fail")
            return false;
        },
         onSuccess:function(event,fields){
            // prevent form submission
            // api / ajax call
            console.log("succ");
          return false;
        }
    });
  
    console.log("hi");

    function getLightFormInputs(){
        var $inputs = $('#lighForm :input');
        
        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        
        return values;
    }


    $("#showTop").on('click', function(e){
        e.preventDefault();
        let values = getLightFormInputs();
        console.log("test front", values)
        showTop(values.color, parseFloat(values.x), parseFloat(values.y), parseFloat(values.z), parseFloat(values.houseWidth), 
            parseFloat(values.houseHeight), parseFloat(values.houseDepth), parseFloat(values.roofHeight));
    });
    $("#showSide").on('click', function(e){
        e.preventDefault();
        let values = getLightFormInputs();
        console.log("test front", values)
        showSide(values.color, parseFloat(values.x), parseFloat(values.y), parseFloat(values.z), parseFloat(values.houseWidth), 
            parseFloat(values.houseHeight), parseFloat(values.houseDepth), parseFloat(values.roofHeight));
    });

    $("#showFront").on('click', function(e){
        e.preventDefault();
        let values = getLightFormInputs();
        console.log("test front", values)
        showFront(values.color, parseFloat(values.x), parseFloat(values.y), parseFloat(values.z), parseFloat(values.houseWidth), 
            parseFloat(values.houseHeight), parseFloat(values.houseDepth), parseFloat(values.roofHeight));
    });

    
    $("#lightForm").on('submit', function(e){
        console.log(e)
        console.log(e.findElement())
        e.preventDefault();
        var $inputs = $('#lighForm :input');
        
        // not sure if you wanted this, but I thought I'd add it.
        // get an associative array of just the values.
        var values = {};
        $inputs.each(function() {
            values[this.name] = $(this).val();
        });
        
        console.log("test testclick", values)
        setLight(0xEEEEEE, values.x, values.y, values.z);
    })
});