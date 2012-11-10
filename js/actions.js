// JavaScript Document
function docReady() {
		document.addEventListener("deviceready", function(){
	/*		//acciones
			//grabar info en bd comun
			window.localStorage.setItem("active",true);
			//recuperar info de campo
			window.localStorage.getItem("active");
			//recuperar nombre de campo
			window.localStorage.key(0);
			//eliminar campo
			window.localStorage.removeItem("active");
			// zapear bd comun y local
			window.localStorage.clear(); */

			if(window.localStorage.getItem("active")){
				alert(window.localStorage.getItem("active"));
				document.addEventListener("resume",function(){
					window.localStorage.setItem("puntos",window.localStorage.getItem("puntos")+1);
				},false);
			} else {
				window.localStorage.setItem("active",true);
				window.localStorage.setItem("puntos",0);
			}
			
		document.addEventListener("online", function(){
			alert(navigator.network.connection.type);
			if(navigator.network.connection.type=="3g"){
				navigator.geolocation.getCurrentPosition(function(position){
					datosgeo.innerHTML="latitud:"+position.coords.latitude+"<br />"+"longitud:"+position.coords.longitude;					
				}, function(err){
					alert(err.code);
				});
			}
		},false);
	},false);
}
