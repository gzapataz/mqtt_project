/*
 * Lee sensor de LUZ LDR por el pin analogo A0 y envia las lecturas a un servidor Node JS por medio de 
 * HTTP REST via tarjeta WIFI ESP8266 via comandos AT 
 * 
 */

#include <SoftwareSerial.h>
#include <HttpClient.h>


#define RX 3
#define TX 2
String AP = "Gab Net";       
String PASS = "Gabcom2012"; 
String HOST = "10.0.1.24";
String PORT = "8080";
String field = "field1";
int countTrueCommand;
int countTimeCommand; 
boolean found = false; 
String valSensor;
SoftwareSerial esp8266(RX,TX); 

//Sensor de LUZ

const long A = 1000;     //Resistencia en oscuridad en KΩ
const int B = 15;        //Resistencia a la luz (10 Lux) en KΩ
const int Rc = 10;       //Resistencia calibracion en KΩ
const int LDRPin = A0;   //Pin del LDR
int V;
int ilum;
  
void setup() {
  Serial.begin(115200);
  esp8266.begin(115200);
  sendCommand("AT",5,"OK");
  sendCommand("AT+RST", 5, "OK");
  sendCommand("AT+CWMODE=1",5,"OK");
  sendCommand("AT+CWJAP=\""+ AP +"\",\""+ PASS +"\"",20,"OK");
}
void loop() {
 valSensor = getSensorData();
 String getAux = "GET /light?val=" + valSensor;
 String getData = getAux + " HTTP/1.1\r\nHost: shotlu.usrs0.com\r\n\r\n";
 sendCommand("AT+CIPSTART=\"TCP\",\""+ HOST +"\","+ PORT,15,"OK");
 sendCommand("AT+CIPSEND=" +String(getData.length() + 0),1,"OK");
 esp8266.print(getData);
 delay(1500);countTrueCommand++;
 sendCommand("AT+CIPCLOSE",5,"OK");
}
String getSensorData(){
    V = analogRead(LDRPin);         
    ilum = ((long)V*A*10)/((long)B*Rc*(1024-V));    //usar si LDR entre A0 y Vcc (como en el esquema anterior)
    return String(ilum);   
  //return "1883"; // Replace with 
}
void sendCommand(String command, int maxTime, char readReplay[]) {
  Serial.print(countTrueCommand);
  Serial.print(". at command => ");
  Serial.print(command);
  Serial.print(" ");
  while(countTimeCommand < (maxTime*1))
  {
    esp8266.println(command);//at+cipsend
    if(esp8266.find(readReplay))//ok
    {
      found = true;
      break;
    }
  
    countTimeCommand++;
  }
  
  if(found == true)
  {
    Serial.println("OYI");
    countTrueCommand++;
    countTimeCommand = 0;
  }
  
  if(found == false)
  {
    Serial.println("Fail");
    countTrueCommand = 0;
    countTimeCommand = 0;
  }
  
  found = false;
 }
