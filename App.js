import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TouchableOpacity } from 'react-native';

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
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#000'
      
    },
    sizeofText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
      
    },
    styleButton: {
      borderRadius: 10
    },
    buttonTextStart: {
      color: '#90EE90',
      borderWidth: 1,
      borderRadius: 100,
      borderColor: '#33a532',
      fontSize: 20,
      padding: 10,
      left: 100,
      top: 50,
      fontWeight: 'bold',
      backgroundColor: '#33a532',
      
      
    },
    buttonTextStop: {
      color: '#FFCCCB',
      borderWidth: 1,
      borderRadius: 100,
      borderColor: '#bb1e10',
      fontSize: 20,
      padding: 10,
      right: 100,
      fontWeight: 'bold',
      backgroundColor: '#bb1e10'
      
    },

    buttonReset: {
      color: '#D3D3D3',
      borderWidth: 1,
      borderRadius: 100,
      borderColor: '#5A5A5A',
      fontSize: 20,
      padding: 10,
      right: 100,
      fontWeight: 'bold',
      backgroundColor: '#5A5A5A',
      left: 0
    }


    

  });

  return (
    <View style={style.container}>
      <Text style={style.sizeofText}>{seconds} seconds</Text>
      <TouchableOpacity style={style.styleButton} onPress={handleStart}><Text style={style.buttonTextStart}>Start</Text></TouchableOpacity>
      <TouchableOpacity style={style.styleButton} onPress={handleStop}><Text style={style.buttonTextStop}>Stop</Text></TouchableOpacity>
      <TouchableOpacity style={style.styleButton} onPress={handleReset}><Text style={style.buttonReset}>Reset</Text></TouchableOpacity>
     
      
      
    </View>
  );



};

export default Timer;
