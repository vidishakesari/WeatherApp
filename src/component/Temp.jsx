import React, { useEffect, useState }  from "react";
import "./css/Style.css";

const Temp = () =>{
  
  const[city,setcity]=useState();
  const[search,setsearch]=useState();
  const[data,setdata]=useState([]);
  // const[TempInfo,setTempInfo]=useState();
  

  const currdate = new Date();
  const dateget = currdate.getDate();

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const currentdata = new Date();
  const currentDay =  weekday[currentdata.getDay()];
  // console.log(currentDay);

  const monthly =["January","February","March","April","May","June","July","August","September","October","November","December"];

  const currentMonth = new Date();
  const currMonth = monthly[currentMonth.getMonth()];

   const curmonth = new Date();
   const currmnth = curmonth.getMonth() + 1;
   
   const curryear = new Date();
   const curyear = curryear.getFullYear();

   const d = new Date();
   const hour = d.getHours();

   const d1 = new Date();
   const minutes = d1.getMinutes();

   const d2= new Date();
   const seconds = d2.getSeconds();
    
    
  

    const fetchApi = async () =>{
      try{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=9d3c93936dac76fc0eb2dabc3ddb76a6&units=metric`;

      const res = await fetch(url);

       const resjson = await res.json(); 

      //  const { temp, humidity, pressure } = resjson.main;

      //  const {main: weathermood} = resjson.weather[0];

      //  const{speed,deg}= resjson.wind;

      //  const weatherdata = {
         
      //   temp,
      //   pressure,
      //   humidity,
      //   weathermood,
      //   speed,
      //   deg,
      //  };

      //  setTempInfo(weatherdata);
      //   console.log(TempInfo); 

        setdata(resjson.weather);

      //  console.log(data);
          setcity(resjson.main);

      }catch (error){
        console.log(error);
      }
    };

      useEffect(()=>{  

          fetchApi();

  }, [search]);

  

  

    return(
        <>
           <div className="box">
             <div className="inputsearch">
                <input type="text" className="inputsearch1" placeholder='Enter state or country name' onChange={(event) => setsearch(event.target.value)} value={search}/>
                  
                    </div>

                    

              {!city ? (<p className="p1set">Data no found</p>)  : ( 
               <div className="info ">

               
               
                 {data.map((val,index)=>{

                  return(<>
                    
                     <p className="p3set" key={val.index}>

                     {val.main } 
                    {val.description  }
                      
                    <p> <i className="fa-solid fa-cloud-rain"></i></p>
                    
                      </p>   

                   </>)
                    })}

              <div className="animated"><i className="fa-solid fa-street-view iconsetS "></i></div>
                 <h1 className="infoset">{search}</h1>


                 
               <p className="setweather">
               {city.temp}° Cel
                 </p>
                 <p className="pset"> Min : {city.temp_min}° Cel |  Max : {city.temp_max}° Cel  </p>
                 <p className="pset">{currentDay} | {currMonth} | {dateget}\{currmnth}\{curyear}</p>
                 
                 <p className="p1set">{hour}:{minutes}:{seconds}{ hour<=11.59 ?(<p >AM</p>):(<p >PM</p>)}</p>

                 {/* <div>{new Date().toLocalestring()}</div> */}

                 
                 <div className = "wave -one"></div>
                 <div className = "wave -two"></div>
                 <div className = "wave -three"></div>
                  </div>
              
            
           
              )
           
           } 

           

</div>
              
        </>
    )
}
export default Temp;


