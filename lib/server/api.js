var express = require('express');
var subapp = express();

// frameNumber is zero based
function getNextTwoBalls(frameNumber, frameN1, frameN2) {
  if (frameNumber === 9) {
    return { ballOne: null, ballTwo: null };
  }

  if (frameNumber === 8 || frameN1.ballOne !== 10) {
    return { ballOne: frameN1.ballOne, ballTwo: frameN1.ballTwo }
  }

  return { ballOne: frameN1.ballOne, ballTwo: frameN2.ballOne}
}

function getScore(frames) {
  finalFrames = getSanitizedFrames(frames);

  var score = 0;
  for (var i = 0; i < 10; i++) {
    var frameTotal = 0;
    var frame = finalFrames[i];
    var frameN1 = finalFrames[i + 1];
    var frameN2 = finalFrames[i + 2];

    if (i === 9) {
      frameTotal = frame.ballOne + frame.ballTwo + frame.ballThree;
    } else if (frame.ballOne === 10) {
      var nextTwoBalls = getNextTwoBalls(i, frameN1, frameN2);
      frameTotal = 10 + nextTwoBalls.ballOne + nextTwoBalls.ballTwo;
    } else if ((frame.ballOne + frame.ballTwo) === 10) {
      var nextTwoBalls = getNextTwoBalls(i, frameN1, frameN2);
      frameTotal = 10 + nextTwoBalls.ballOne;
    } else {
      frameTotal = frame.ballOne + frame.ballTwo;
    }

    score = score + frameTotal;
  }

  return score;
}

function getSanitizedFrames(frames) {
  var finalFrames = [];
  for (var i = 0; i < 10; i++) {
    var frame = frames[i];
    var ballOne = 0;
    var ballTwo = 0;
    var ballThree = 0;
    if (frame !== undefined) {
      ballOne = frame.ballOne || 0;
      ballTwo = frame.ballTwo || 0;
      ballThree = frame.ballThree || 0;
    }
    finalFrames[i] = { ballOne: ballOne, ballTwo: ballTwo, ballThree: ballThree };
  }

  return finalFrames;
}

/**
 * JSON API
 */

subapp.post('/score', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.body.frames === undefined) {
    return res
      .status('400')
      .end(JSON.stringify({ message: 'frames must be set'}));
  }

  var frames = req.body.frames;
  var score = getScore(frames);

  return res
    .status('200')
    .send(JSON.stringify({ score: score }));
});

module.exports = subapp;
