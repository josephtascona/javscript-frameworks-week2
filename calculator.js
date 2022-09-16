const http = require('http');

// url lib to parse address params
const url = require('url');

// accounting lib from npm for currency format
const accounting = require('accounting');

// start web server & listen for http request events
http.createServer((req, res) => {
    res.writeHead(200);
    res.write('<h1>Tax Calculator</h1>');

    // use url lib to parse url param
    const query = url.parse(req.url, true).query;
        
    // store url param "subtotal" in a local var
    let subTotal = query.subTotal;
    res.write(`<p>Sub Total ${accounting.formatMoney(subTotal)}</p>`);

    // calc and display tax
    let tax = subTotal * 0.13;
    res.write(`<p>Tax ${accounting.formatMoney(tax)}</p>`);

    let total = parseFloat(subTotal) + parseFloat(tax);
    res.write(`<p>Total ${accounting.formatMoney(total)}</p>`);

    res.end();
}).listen(3000)

console.log('Server running on port 3000');