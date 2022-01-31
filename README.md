# JSON_Stream


This is basic node js application to stream very-very large json file. This can be helpful where we want to send large json file from one server to another server. Consider an example where we have an array of blob (image in base64) of size in lakhs, there instead of sending this json data using api, we can simple stream it to minimize ram utilization for server and network load at any particular instant.


In server page, we have two functions

1. streamPaused : This function will continuous stream every one element of json array without pausing.
2. streamContinuous : This function will pause for 1 second after streaming every one element of json array.

For Starting the app.
1. npm i
2. node server
