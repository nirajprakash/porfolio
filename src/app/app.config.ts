
export class ConfigAPI{

	  /* {
        "id": "104",
        "companyName": "Intugine",
        "appName": "Ble Navigation Demo App",
        "appType":"android",
        "detail":"This is research oriented app, used for location detection of the mobile while navigating in those area where more than 3 BluetoothLEs are present.",
        "features": [
            "Bluetooth low energy"
            ],
        "images":[],       
        "hasVideo":false,   
        "colorPrimary":"#1561BD",
        "colorPrimaryLight":"#a3c9f6",
        "colorPrimaryDark": "#1257aa",
        "wall":"/assets/img/intugine_ble.jpg",
        "year": "2017",
        "logo":"/assets/img/intugine_logo.png",
        "link":"https://intugine.com/"
    },*/
	public static get API_ENDPOINT(): string {
	// 'http://192.168.1.101:9123/'
	// 'http://192.168.0.26:9123/'
	//'http://www.fancymonk.com:9123/'
	//'https://www.fancymonk.com:9123/'
	return  'http://thedroid.io:8000/api/'; 
	}
}