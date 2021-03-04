import express from 'express';
import petientRouter from './routes/patients';
import diagonoseRouter from './routes/diagnose'
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/patients', petientRouter);
app.use('/api/diagonose', diagonoseRouter);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});