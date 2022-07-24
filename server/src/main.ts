import createServer from './server';
import { disconnectFromDatabase,connectToDatabase } from './utils/database';
import logger from './utils/logger';



const PORT = process.env.PORT || 4000;

const app = createServer()

const server = app.listen(PORT, async () => {
  await connectToDatabase()
  logger.info(`App is on port ${PORT}`);
})

//gracefulShutdown
const signals = ["SIGTERM", "SIGINT"]
function gracefulShutdown(signal: string) { 
  process.on(signal, async () => {
    console.log('Closing server');
    server.close()
    await disconnectFromDatabase();
    process.exit(0)//exiting no error
  })
}
for (let i = 0; i < signals.length; i++){
  gracefulShutdown(signals[i])
}