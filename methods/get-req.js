module.exports = function (req, res) {
    let baseUrl= req.url.substring(0, req.url.lastIndexOf('/') +1);
    console.log(baseUrl);
    let id = req.url.split('/');
    console.log(id);
  if(req.url === '/api/flight'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(req.flight));
    res.end();
}else{
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify({title: 'Not Found', message: 'Route not found'}));
    res.end();
}
}