'use strict';

const express = require('express');
const router = express.Router();
const Candidate = require('../models/candidate');
const path = require('path');
const statusMap = require('../constants/status-map');

router.get('/', async (req, res) => {
  try {
    const candidates = await Candidate.find({}).exec();
    res.status(200).json({ candidates });
  } catch(error) {
    res.status(500).json({ error });
  }
});

router.get('/:candidateId', async (req, res) => {
  try {
    const { candidateId } = req.params;
    const candidate = await Candidate.findById(candidateId).exec();
    res.status(200).json({ candidate });
  } catch(error) {
    res.status(500).json({ error });
  }
});

router.post('/', (req, res) => {
  const candidateObj = req.body;
  const newCandidate = new Candidate(candidateObj);
  newCandidate.save((error, candidate) => {
    if (error) {
      res.status(500).json({ error });
      throw error;
    }
    const message = `Successfully created a new candidate with id: ${candidate._id}`;
    res.status(200).json({ message, candidate });
  });
});

router.put('/:candidateId/status', async (req, res) => {
  try {
    const { candidateId, newStatus } = req.params;
    const updatedCandidate = await Candidate.findByIdAndUpdate(candidateId, { status: req.body.status }).exec();
    res.status(200).json({ candidate: updatedCandidate });
  } catch (error) {
    res.status(500).json({ error });
  }
});

module.exports = router;
