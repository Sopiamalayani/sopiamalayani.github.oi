function insert(num){
  			document.form.hasil.value = document.form.hasil.value+num;
  		}
  		function c(){
  			document.form.hasil.value = "";
  		}
  		
  		function Del(){
  			var x = document.form.hasil.value;
  			document.form.hasil.value = x.substring(0, x.length-1)
  		}

      function equal(){
  const exp = document.form.hasil.value;
  if(exp){
    document.form.hasil.value = eval(exp);
  }
}
