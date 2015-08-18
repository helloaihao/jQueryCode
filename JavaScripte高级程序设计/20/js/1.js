var book = {
	title: "Professional JavaScript",
	authors: "Nicholas C. Zakas",
	edition: 3,
	year: 2011
};

var jsonText = JSON.stringify(book);


alert(jsonText);

var bookCopy = JSON.parse(jsonText);

for(i in bookCopy) {
	alert(i+" : "+bookCopy[i]);
}