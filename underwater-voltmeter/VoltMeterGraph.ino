//The screen used in this file is the following:
//https://www.velleman.eu/downloads/29/vma412_a4v02.pdf
//other screens will probably need adjustments of the libraries and pins, use at your own risk
//(c) Jonathan Schneider, Code licensed under MIT, drawing method inspired by GLUE_Demo_320x240.ino

//Setup of the libraries
#include <Adafruit_GFX.h>
#include <UTFTGLUE.h> 
UTFTGLUE myGLCD(0x7783,A3,A2,A1,A0,A4);

// configurint the analog pin to read from. Be sure the voltage is lower than 5V and not negative, otherwise your Arduino might break!
#define READER_PIN A5

#define WHITE   0xFFFF

#if !defined(BigFont)
extern uint8_t BigFont[]
#endif

// Algorithm Configuration variables:
int oneSecPixels = 48; //48 pixel will show exactly 5 seconds (total) on the screen, 96 pixel will show 2.5 seconds and so on. 240 means the whole screen shows 1 second
bool isShowingOnlyPoints = false; //if set to true, only shows a single pixel at a measurement time, otherwise extends a line of the last measurement horizontally

//global variables used throughout the algorithm
int onePixelMSTime = 1000/oneSecPixels;
int yBuf[240]; //a buffer of y-positions of pixels to move the diagram to the left
int voltageBuf[240]; // a buffer of voltages to calculate the moving average and maximum voltage
unsigned long prevLoopMillis = 0; //a clock time to account for the slow display refresh rate
float maxVoltageLastSec = 0; //the number-value of the maximum voltage that changes in the bottom right of the display
float avgVoltageLastSec = 0; //the number-value of the average voltage that changes in the bottom right of the display

void setup()
{
  for (int i=0; i<239; i++)
  {
    yBuf[i] = 256; //pixel position
  }
  pinMode(A0, OUTPUT);
  digitalWrite(A0, HIGH);
  
// Setup the LCD
  myGLCD.InitLCD();
  myGLCD.setFont(BigFont);
  myGLCD.clrScr();
  myGLCD.setRotation(0);
  myGLCD.setBackColor(0, 0, 0);
  //max and avg of the previous second
  myGLCD.setColor(0, 0, 240);
  myGLCD.fillRect(0, 256, 239, 259);
  myGLCD.setColor(200, 200, 200);
  myGLCD.print("max/s", LEFT, 260);
  myGLCD.print("avg/s", LEFT, 275);
  myGLCD.print("latest", LEFT, 290);
  //Serial.begin(9600);
  //Serial.println(F("TFT LCD test"));
  myGLCD.writeFastHLine(0, 51, 239, WHITE);
  myGLCD.writeFastHLine(0, 102, 239, WHITE);
  myGLCD.writeFastHLine(0, 153, 239, WHITE);
  myGLCD.writeFastHLine(0, 204, 239, WHITE);
  
  //seconds indicator
  myGLCD.writeFastVLine(240-oneSecPixels, 0, 256, WHITE);
}

void loop() {
  int x, y;
  unsigned long millisNow = millis();
  unsigned long loopDiff = millisNow - prevLoopMillis;
  if(loopDiff < onePixelMSTime){
    delay(onePixelMSTime*0.5);
    prevLoopMillis = millisNow;
    //Serial.println("skipping");
    return;
  }
  int offset = loopDiff / onePixelMSTime;
  //Serial.println(offset);
  int sensorValue = analogRead(READER_PIN);
  addReadingToBuffer(sensorValue, offset);
  calcMaxAvg();
  float voltage = sensorValue * (5.0 / 1023.0);
  yBuf[239] = 256-sensorValue/4;
  //Serial.println(yBuf[238]);
  for (int i=1; i<(239); i++) 
  {
    if ((yBuf[i]==51) || (yBuf[i]==102) || (yBuf[i]==153) || (yBuf[i]==204) || (i==240-oneSecPixels))
      myGLCD.setColor(255,255,255);
    else
      myGLCD.setColor(0,0,0);
    myGLCD.drawPixel(i,yBuf[i]);
    //overdrawing the single old pixel is done, draw the new:
    if((i+offset) > 239){
      if(isShowingOnlyPoints)
        yBuf[i] = 256;
      else
        yBuf[i] = yBuf[239];
      continue;
    }
    yBuf[i] = yBuf[i+offset];
    myGLCD.setColor(0,255,255);
    myGLCD.drawPixel(i,yBuf[i]);
  }

  //text printing
  String max_str = String(maxVoltageLastSec);
  String avg_str = String(avgVoltageLastSec);
  String volt_str = String(voltage);

  myGLCD.setColor(200, 200, 200);
  myGLCD.print(max_str, RIGHT, 260);
  myGLCD.print(avg_str, RIGHT, 275);
  myGLCD.print(volt_str, RIGHT, 290);

  unsigned long b = millis();
  unsigned long diff = b-millisNow;
  //Serial.println(diff);

  
  /*digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);   */
  prevLoopMillis = millisNow;
}

void addReadingToBuffer(int reading, int offset) {
  for (int i=0; i<238; i++)
  {
    if((i + offset) >238){
      voltageBuf[i] = voltageBuf[239];
      continue;
    }
    voltageBuf[i] = voltageBuf[i+offset];
  }
  voltageBuf[239] = reading;
}

void calcMaxAvg() {
  int locMax = 0;
  int elemSum = 0;
  int elemCount = 0;
  for (int i=240-oneSecPixels; i<240; i++)
  {
    int voltageBufElem = voltageBuf[i];
    if(voltageBufElem == -1){
      continue;
    }
    if(voltageBufElem > locMax){
      locMax = voltageBufElem;
    }
    elemSum += voltageBufElem;
    elemCount++;
  }
  //Serial.println(locMax);
  maxVoltageLastSec = locMax * (5.0 / 1023.0);
  avgVoltageLastSec = (elemSum/elemCount) * (5.0 / 1023.0);
}