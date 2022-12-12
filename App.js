import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isRunning || isPaused) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, isPaused, seconds]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  

  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  const style = StyleSheet.create({
    container: {
      marginTop: 50
    },
    startButton: {
      
    }
  });

  return (
    <View style={style.container}>
      <Text >{seconds} seconds</Text>
      <Button title="Start" onPress={handleStart} />
      <Button title="Stop" onPress={handleStop} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );



};

export default Timer;
