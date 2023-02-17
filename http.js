const http = require('http')
const server = http.createServer((request, response)=> {
      
      console.log(request.url)

      if (request.url === '/'){
            response.write('<h1>Welcome to the server</h1>')
            return response.end()
      }

      if(request.url === '/users/cool'){
            response.write('<h1>Eres genial</h1>')
            return response.end()
      }
      response.write(`
      <h1>Not found</h1>
      <p>Esta pagina no se encontro</p>
      <a href="/">Volver a la página principal</a>
      `)
      response.end()

})

server.listen(3000)
