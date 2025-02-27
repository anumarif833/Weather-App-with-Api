import  express  from "express";
import cors from "cors"
import path from "path"
const app = express();
app.use(cors())

const port = process.env.PORT || 3000;
// 192.168.0.101: 3000
app.get('/', (req, res) =>{
    res.send("Server is ready" + new dete().toLocaleString());
});

  const __dirname = path.resolve()

// Weather App

app.get('/weather/:cityName', (req, res) => {
    console.log("Weather App"); 
    let weatherData ={
      karachi:{
        city :"karachi",
        tempInC: 26,
        humidity: 56,
        high: 32,
        low: 23
      },
      lahore:{
        city :"lahore",
        tempInC: 28,
        humidity: 56,
        high: 32,
        low: 23
      }
    }  
    let userInputCity = req.params.cityName.toLowerCase();
    let weatherDataToSend = weatherData[userInputCity];
    if(weatherDataToSend){
      res.send(weatherDataToSend);
    }else{
      res.status(404).send(`Data for ${req.params.cityName} not found`);
    }
  })
  app.use(express.static(path.join(__dirname, 'public')))
  


app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`);
   }
);