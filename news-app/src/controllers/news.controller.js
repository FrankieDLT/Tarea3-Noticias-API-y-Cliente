const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
    
    /*getAll(req,res){
       // const query = req.query.q || '';
       // const domains = req.query.s ? '&domains=' + req.query.s : '';
        //if(query) {
        //console.log('Query Params: ',req.query.test);
       const url = `${apiUrl}/everything?q=bitcoin&apiKey=${apiKey}`;
        // const url = `${apiUrl}/everything?q=${query}&sortBy=publishedAt${domains}&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Failure')
            res.end();
        });
   // }

    }*/

    getAll(req,res){
        const query = req.query.q || '';
        const fuentes = req.query.s ? '&domains=' + req.query.s : '';
         if(query) {
         //console.log('Query Params: ',req.query.test);
        //const url = `${apiUrl}/everything?q=bitcoin&apiKey=${apiKey}`;
          const url = `${apiUrl}/everything?q=${query}&sortBy=publishedAt${fuentes}&apiKey=${apiKey}`;
         axios.get(url).then(response => {
             res.send(response.data.articles);
         }).catch(err => {
             res.send('Failure')
             res.end();
         });
     } else{
          /* const url = `${apiUrl}/everything?q=bitcoin&apiKey=${apiKey}`;
              axios.get(url).then(response => {
                 res.send(response.data.articles);
             }).catch(err => {
                 res.send('Failure')
                 res.end();
             });*/

             res.send('Failure')
             res.end();
     }
 
     }

    getAllTitulares(req,res){
        const country = req.query.q || 'mx';
        const url = `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            console.log(err.statusCode);
            res.send('Failure')
            res.end();
        });
        
    }

    getAllFuentes(req,res){
        const url = `${apiUrl}/sources?apiKey=${apiKey}`;
        axios.get(url).then(response => {
            res.send(response.data.sources);
        }).catch(err => {
            res.send('Failure')
            res.end();
        });
        
    }

    
    //Nuevos metodo controlador, nueva ruta, Cliente: metood servicio apuntar a cada endpoint

    getById(req,res){
        res.send('Traer noticia ' + req.params.noticiaID);
    }
}
module.exports = new News();