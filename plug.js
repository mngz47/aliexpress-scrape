var product;

function setScrape(id){
	var ff = new FormData();
	ff.append('ali_id',id);
	
	//product = sendform(':3000',ff);
	
	return sendform_2(':3000',ff);
}

function getAliProductTitle(){
	var tt;

product.then(res => {
  res.map(function(pp) {
	tt = pp.title;
	});	
});  
	
	
	return tt;  
}

function getAliProductDescription(){
var dd;
	
product.then(res => { 
  res.map(function(pp) {
	dd = pp.description;
	});
});  
	return dd;
}

function getAliProductFeedback(){
 var cc = '';
 
product.then(res => {
  res.map(function(ppp) {
	
	  var ff = ppp.feedback;
	  
	  for(var a=0;a<ff.length;a++){
		  
	var pp = ppp.feedback[a].photos;
	  var photos = '';
	  
	  for(var aa=0;aa<pp.length;aa++){
		photos+= '<img src="'+pp[aa]+'" />';
	  }
		cc +=  ppp.feedback[a].displayName+'('+ppp.feedback[a].rating+'<small>Star Rating</small>)<br>: '+ppp.feedback[a].content+' <br>'+photos+';;';
	  }
	  
	
	});
});  

return cc;
}
