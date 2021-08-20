window.addEventListener('load',()=>{
  let long;
  let lat;
  let temperaturedescription=document.querySelector('.temperature-description');
  let temperaturedegree=document.querySelector('.degree');
  let locationTimezone=document.querySelector('.location-timezone');
  if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(position =>{
     long=position.coords.longitude;
     lat=position.coords.latitude;
     const api ='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=Api_key';
     fetch(api)
     .then(Response =>{
         return Response.json(); 
     })
     .then(data=>{
         console.log(data);
         var tempvalue=data['main']['temp'];
         var time=data['name'];
         var descvalue=data['weather'][0]['description'];
         temperaturedegree.textContent=tempvalue;
         temperaturedescription.textContent=descvalue;
         locationTimezone.textContent=time;
     }) 
    
    
    });
  

  }   
      
});       
      
                                    


                        

                      