const http = require(`http`);
const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Andreas Rohumäe, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Andreas Rohumäe, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna أœlikoolis</a> ning ei sislda tأµsiseltvأµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res) {
res.writeHead(200, {"Content-type": "text/html"})
res.write(pageHead)
    res.write(pageBody)
res.write(pageFoot)
res.write(`Veeb läkski käima!`)
return res.end();
}).listen(5033);