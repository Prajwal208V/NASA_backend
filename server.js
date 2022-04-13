const http=require('http');//node http server
const  app=require('./src/app');

const server = http.createServer(app);

const PORT = process.env.PORT || 8000;//server administrator can specify which port it should run on as an environmental variable,which we can access by calling the built in 'process' module.to get the environment specifically the port variable.
server.listen(PORT,()=>{
    console.log(`listening on ${PORT}...`);
});

