const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
    .option('city',{ //-- command
        describe:'City name to find weather info',
        demandOption:false, //is it required? YES
        type: 'String'
    })
    .help()
    .argv;

function getWeatherData(city){ 
    
    const weatherData = {
        'new york': {
        temperature: 72,
        conditions: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 8
        },
    'london': {
    temperature: 60,
    conditions: 'Rainy',
    humidity: 80,
    windSpeed: 12
    },
    'tokyo': {
    temperature: 80,
    conditions: 'Sunny',
    humidity: 40,
    windSpeed: 5
    },
    'sydney': {
    temperature: 85,
    conditions: 'Clear',
    humidity: 35,
    windSpeed: 10
    }
    };

    return weatherData[city] || "Data is not available";

   }

function styleWeatherData(city,weatherData){
    console.log(`Today's Weather in ${city}!`);

    if (weatherData.temperature <= 60){
        console.log(chalk.blue(`It's ${weatherData.temperature} degrees out. It's Cold!!!`));
    }else if(weatherData.temperature >= 85){
        console.log(chalk.red(`It's ${weatherData.temperature} degrees out. It's very hot out there!!`));
    }else{
        console.log(chalk.green(`It's ${weatherData.temperature} degrees out. It's a nice day!`));
    }

    console.log(chalk.italic.magenta(`The conditions in ${city} will be ${weatherData.conditions}.`));

    console.log(chalk.white(`The humidity in ${city} is ${weatherData.humidity}.`));
    console.log(chalk.bgCyan.yellow(`The windspeed is currently ${weatherData.windSpeed}. `));
}

function main(){

    const city = argv.city;

    console.log(chalk.dim(`Fetching weather data for ${city}...`));
    const weatherData = getWeatherData(city);

    styleWeatherData(city,weatherData);

}

main();