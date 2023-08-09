//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let revmovedArticles = [];
for(let i = 0;i<touristSpots.length;i++){
	if(touristSpots[i].substring(0,2)=='A '){
	revmovedArticles[i] = touristSpots[i].substring(2);
		}
	else if(touristSpots[i].substring(0,2)=='An'){
	revmovedArticles[i] = touristSpots[i].substring(3);
		}
	else if(touristSpots[i].substring(0,3)=='The'){
	revmovedArticles[i] = touristSpots[i].substring(4);
		}
	else{
	revmovedArticles[i] = touristSpots[i];
	}
}
revmovedArticles.sort((a,b)=>a.localeCompare(b));
for(let i =0;i<revmovedArticles.length;i++){
	touristSpots[i] = revmovedArticles[i];
}