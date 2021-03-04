import express from 'express';
import DiagonoseService from '../services/diagonoseServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(DiagonoseService.getNonSensitiveEntries());
});

export default router;