import { fastify } from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Mastery AI  '
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running!')
})