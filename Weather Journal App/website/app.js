
// create new date
let d = new Date();
const newDate = (d.getMonth()) + '/' + d.getDate() + '/' + d.getFullYear();


/* Global Variables */
const baseurl = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apikey = '&appid=c639966b2c03bf5179f91c5d15bde7cb&units=metric';
const generate = document.getElementById('generate');





const getData = async (url = '') => {
	// collect zip that the clint  wiil insert 
	let zip = document.getElementById("zip").value;
	clint_feeling = document.getElementById("feelings").value;

	// wait the weathr data get from api
	const req_2 = await fetch(baseurl + zip + apikey)
	try {
		// 
		const req = await req_2.json();
		tempr = req.main.temp;

	}
	catch (error) {
		//  handle the errors
		console.log("error", error);
	}
};



// send collected data to the server ,receive a path and a data object
const postData = async (url = '/allD', data = { temp: tempr, date: newDate, feel: clint_feeling }) => {

	const response = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		const newData = await response.json();
		console.log(newData)

		return newData;

	} catch (error) {
		console.log("error", error);
	}
};

//update ui dynamicly
const updateUI = async (url = '') => {
	const req_2 = await fetch('/get');
	try {
		// 
		const allData = await req_2.json();
		// Update UI
		document.getElementById('date').innerHTML = 'date:' + allData.date;
		document.getElementById('temp').innerHTML = 'temprture :' + allData.temp;
		document.getElementById('content').innerHTML = 'your feeling:' + allData.feel;

	}
	catch (error) {
		// to  handle the errors
		console.log("error", error);
	}
};
// get all  data from the user

generate.addEventListener('click', async => {

	getData().then(postData).then(updateUI)

});


