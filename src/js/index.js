window.onload = () => {
  // cast.receiver.logger.setLevelValue(0);
  cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);
  window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();
  console.log('Starting Receiver Manager');

  // handler for the 'ready' event
  castReceiverManager.onReady = (event) => {
    console.log(`Received Ready event: ${JSON.stringify(event.data)}`);
    window.castReceiverManager.setApplicationState('Application status is ready...');
  };

  // handler for 'senderconnected' event
  castReceiverManager.onSenderConnected = (event) => {
    console.log(`Received Sender Connected event: ${event.data}`);
    console.log(window.castReceiverManager.getSender(event.data).userAgent);
    const logo = '<svg class="logo" id="viewer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.58 135.56"><path class="a" d="M418,46.07h9.1l29,43.47,29-43.47h9.1v79.65h-9V61.21l-29,42.67h-.46l-29-42.56v64.4H418Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M510.86,108.66v-.23C510.86,95.8,521.1,89.2,536,89.2a61.63,61.63,0,0,1,18,2.5V89.88C554,79.41,547.61,74,536.58,74a40.93,40.93,0,0,0-17.86,4.21L516.09,71c6.49-3,12.74-5,21.39-5,8.31,0,14.79,2.28,19,6.49s6.14,9.79,6.14,17.29v36H554V117c-4.1,5.23-10.81,10-21.16,10C521.78,127,510.86,120.72,510.86,108.66Zm43.24-4.55V98.64a60.5,60.5,0,0,0-17.18-2.5c-10.92,0-17.18,4.78-17.18,11.83v.23c0,7.4,6.83,11.72,14.79,11.72C545.34,119.92,554.1,113.43,554.1,104.1Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M598.92,95.8,576.74,66.9h10l17.41,22.76L621.57,66.9h9.79l-22.3,28.67,23.21,30.15H622.14l-18.21-24-18.32,24h-9.79Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M567.24,130.87h8.61a6.19,6.19,0,0,1,4.58,1.51,3.68,3.68,0,0,1,1.08,2.71v0a3.88,3.88,0,0,1-2.59,3.74c2,.67,3.33,1.82,3.33,4.1v0c0,2.88-2.35,4.63-6.35,4.63h-8.65Zm7.46,6.69c1.41,0,2.21-.48,2.21-1.46v0c0-.91-.72-1.44-2.11-1.44h-3v2.95Zm.67,6.35c1.42,0,2.23-.55,2.23-1.53v0c0-.91-.72-1.51-2.28-1.51h-3.55v3.09Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M584.38,130.87h13.5v4H589v2.54H597V141H589v2.66h9v4H584.38Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M604.46,134.94h-5v-4.08h14.72v4.08h-5v12.71h-4.65Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M619.83,130.75h4.48l7.14,16.9h-5l-1.22-3h-6.47l-1.2,3h-4.89ZM623.9,141,622,136.26,620.14,141Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M103,115l5.14-6.09c7.66,6.93,15,10.39,25.19,10.39,9.87,0,16.37-5.25,16.37-12.49v-.21c0-6.82-3.67-10.71-19.1-14-16.9-3.67-24.66-9.13-24.66-21.2v-.21c0-11.54,10.18-20,24.14-20,10.71,0,18.37,3,25.82,9L151,66.64c-6.82-5.56-13.64-8-21.2-8-9.55,0-15.64,5.25-15.64,11.86v.21c0,6.93,3.78,10.81,19.94,14.27,16.37,3.57,23.93,9.55,23.93,20.78V106c0,12.59-10.5,20.78-25.08,20.78C121.34,126.77,111.79,122.89,103,115Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M173.81,50.68H183V59.6h-9.24Zm.53,20.78h8.08v54.26h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M201.2,49.11h8.08V102l29.28-30.54h10.08l-22.77,23.3,23.51,31h-9.66L220.3,100.43l-11,11.13v14.17H201.2Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M260.91,49.11H269v31.8c3.57-5.88,9.24-10.6,18.58-10.6,13.12,0,20.78,8.82,20.78,21.73v33.69h-8.08V94c0-10.08-5.46-16.37-15-16.37-9.34,0-16.27,6.82-16.27,17v31.07h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M325.77,50.68H335V59.6h-9.24Zm.53,20.78h8.08v54.26h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M35.35,61.18a10.63,10.63,0,0,1,1.72-1,6.83,6.83,0,0,1,1.62-.56q.61-.1.51.21a5.48,5.48,0,0,1-1.54,1.33,39,39,0,0,1-5.59,3.15,21.3,21.3,0,0,1-6.36,1.87,13.4,13.4,0,0,1-6.18-.62,9.78,9.78,0,0,1-5-4.25,11.87,11.87,0,0,1-1.67-4.51,15.49,15.49,0,0,1,0-4.95,17.58,17.58,0,0,1,1.54-4.82,16.51,16.51,0,0,1,2.87-4.18,32.81,32.81,0,0,1,3.1-2.59,25.91,25.91,0,0,1,3.92-2.41,19.3,19.3,0,0,1,4.36-1.56,11.58,11.58,0,0,1,4.46-.15A13.58,13.58,0,0,1,37,37.58,14.27,14.27,0,0,1,40.19,40a12.68,12.68,0,0,1,2.28,3.08,9,9,0,0,1,1,3.36q0,2-.23,4.33t-.59,4.43q-.26,3.59-.59,7.18t-.59,7.15q-.26,3.56-.38,7.15t0,7.18q0,2.82.26,5.66a11.55,11.55,0,0,0,1.79,5.25A6.82,6.82,0,0,0,44,96.37a2.34,2.34,0,0,0,1.44,1.05,1.22,1.22,0,0,0,.77.31c.34,0,.6.05.77.05s.26-.14.28-.1a.13.13,0,0,1,0,.13.25.25,0,0,1-.15.1c-.07,0-.1,0-.1-.13a10.5,10.5,0,0,1,2-1.23,10.93,10.93,0,0,1,2.28-.77c.27-.07.4-.05.38.05a1.13,1.13,0,0,1-.21.41,5.33,5.33,0,0,1-.41.51.72.72,0,0,0-.23.41q-1.18.77-2.36,1.46a25,25,0,0,1-2.31,1.2q-.87.46-1.9.92a7.82,7.82,0,0,1-2.05.62,4.89,4.89,0,0,1-2-.1,3.23,3.23,0,0,1-1.69-1.13,7.27,7.27,0,0,1-1.41-2,11.2,11.2,0,0,1-.82-2.25,15.44,15.44,0,0,1-.38-2.36c-.07-.8-.1-1.56-.1-2.28a56.27,56.27,0,0,1-.49-7q0-3.54.15-7.1t.51-7.1q.33-3.54.64-7,.15-1.79.49-3.79t.49-4a35.87,35.87,0,0,0,.08-4,13.49,13.49,0,0,0-.69-3.82,10.36,10.36,0,0,0-5.38-6.07,9.28,9.28,0,0,0-2-.95,11.2,11.2,0,0,0-2.51-.59,8.16,8.16,0,0,0-2.51.08,3.17,3.17,0,0,0-1.92,1.1,14.41,14.41,0,0,0-3,4.74,14.66,14.66,0,0,0-1.1,5.51,15.88,15.88,0,0,0,.23,2.61,12.39,12.39,0,0,0,.77,2.69,10.47,10.47,0,0,0,1.41,2.43A7.67,7.67,0,0,0,23,60.77a12.19,12.19,0,0,0,6.18,2.13A9.88,9.88,0,0,0,35.35,61.18ZM53.85,50.11q-.26,0-.05-.26a4.35,4.35,0,0,1,.56-.56q.41-.36,1-.82T57,47.19a3.6,3.6,0,0,1,2.2-.77q5.08,0,10.2-.36t10.25-.67q5.13-.31,10.23-.31a71.54,71.54,0,0,1,10.12.72l.15.15c.07.07,0,.1-.15.1a16.1,16.1,0,0,1-4.38,6.51,33.18,33.18,0,0,1-7.07,5,53.22,53.22,0,0,1-8.36,3.54,78.9,78.9,0,0,1-8.28,2.26q-.62.15-.31-.23a6.13,6.13,0,0,1,.95-.9q.64-.51,1.31-1a2.6,2.6,0,0,1,.82-.46,34.91,34.91,0,0,1,3.74-1.85,21.63,21.63,0,0,1,4.23-1.31A16.3,16.3,0,0,1,87,57.34a11.3,11.3,0,0,1,4.18,1.13,15.11,15.11,0,0,1,7.69,11.89,15.43,15.43,0,0,1-.62,7.28,13.44,13.44,0,0,1-4.46,6.2,36.19,36.19,0,0,1-4.13,3.43,35.37,35.37,0,0,1-4.84,2.92,28.27,28.27,0,0,1-5.33,2,21.85,21.85,0,0,1-5.69.74,22.33,22.33,0,0,1-15.12-4.9,24.18,24.18,0,0,1-5.07-5.56,31.47,31.47,0,0,1-3.38-6.74,33.7,33.7,0,0,1-1.74-7.28,29.48,29.48,0,0,1-.05-7.15A42.9,42.9,0,0,1,51,50.55a40.17,40.17,0,0,1,5.25-9.71,42.16,42.16,0,0,1,8-8.2A47.78,47.78,0,0,1,75,26.33,63.06,63.06,0,0,1,85.69,23.2a43.06,43.06,0,0,1,11-.82A32.3,32.3,0,0,1,107,24.66a22.15,22.15,0,0,1,8.53,6.18q.26.31-.44.95a11.45,11.45,0,0,1-1.72,1.28,13.42,13.42,0,0,1-2,1.05q-1,.41-1.31.15a23.43,23.43,0,0,0-5.82-4.56,29.05,29.05,0,0,0-7-2.79,36.23,36.23,0,0,0-7.77-1.08,39.51,39.51,0,0,0-7.92.54,35.84,35.84,0,0,0-7.54,2.15,30.28,30.28,0,0,0-6.61,3.69,28.64,28.64,0,0,0-4.64,4.43,32.94,32.94,0,0,0-3.54,5.18,36.78,36.78,0,0,0-2.54,5.69A41.46,41.46,0,0,0,55,53.44a57,57,0,0,0-.92,5.87,34.19,34.19,0,0,0-.1,5.92,30.6,30.6,0,0,0,1,5.84,24.8,24.8,0,0,0,2.31,5.64A37.39,37.39,0,0,0,60.72,81a29.32,29.32,0,0,0,4.33,3.87,25.59,25.59,0,0,0,5.18,2.92,18.25,18.25,0,0,0,6,1.38,21.44,21.44,0,0,0,6-.33,16.1,16.1,0,0,0,5.15-2,12.78,12.78,0,0,0,3.79-3.49,11,11,0,0,0,1.92-4.87,14.38,14.38,0,0,0,0-4.84,17.65,17.65,0,0,0-4.41-9.1,12,12,0,0,0-4-2.9,11,11,0,0,0-5-.87,13.5,13.5,0,0,0-5.84,1.82,15.34,15.34,0,0,1,1.38-1.41q.72-.64,1.33-1.15,1.59-.51,3.31-1T83.28,58q1.69-.59,3.23-1.26a19.11,19.11,0,0,0,2.87-1.54,16.44,16.44,0,0,0,3-2.31,8.36,8.36,0,0,0,1.92-2.77c.1-.24-.17-.45-.82-.64A14.44,14.44,0,0,0,91.25,49q-1.26-.15-2.46-.23t-1.51-.08q-4.15-.1-8.33.1t-8.36.49l-8.36.54Q58.06,50.11,53.85,50.11Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M114.75,32.27a2.75,2.75,0,0,1-1.08,1.44q-.87.67-1.64,1.18-.67.31-1.18.51a2.77,2.77,0,0,1-.72.18q-.31,0-.2-.33a22.8,22.8,0,0,1,4-7.64,31.73,31.73,0,0,1,6.46-6.07A43.72,43.72,0,0,1,128.57,17a58.74,58.74,0,0,1,9.15-3.05,64.78,64.78,0,0,1,9.4-1.59,58.72,58.72,0,0,1,8.95-.18q2.87.1,6,.49a40.27,40.27,0,0,1,6.07,1.23,30.39,30.39,0,0,1,5.69,2.26,20.15,20.15,0,0,1,4.82,3.46,12.55,12.55,0,0,1,2.84,4.64,13.31,13.31,0,0,1,.64,5A17.48,17.48,0,0,1,181,34.3a27.26,27.26,0,0,1-2.38,4.84,7.63,7.63,0,0,1-1.51,1.41,14,14,0,0,1-2,1.2,1.57,1.57,0,0,0-.49.13c-.22.09-.43.15-.62.21a.46.46,0,0,1-.44-.05c-.1-.08-.07-.28.1-.59A28.1,28.1,0,0,0,175.88,37a16.86,16.86,0,0,0,1.1-4.61,12.14,12.14,0,0,0-.46-4.56,12,12,0,0,0-2.46-4.36,19.57,19.57,0,0,0-4.13-3.15,31,31,0,0,0-4.82-2.23,38.63,38.63,0,0,0-5.2-1.49q-2.67-.56-5.28-1-3.59-.31-7.56-.26a57.75,57.75,0,0,0-8,.67,53,53,0,0,0-7.87,1.82,33,33,0,0,0-7.1,3.15,23.75,23.75,0,0,0-5.69,4.72A18.46,18.46,0,0,0,114.75,32.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M364.65,72.9h-7.83l1.71-6.34h22.85l-1.68,6.34h-7.83l-5.29,19.76h-7.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M376.54,83.75A11.9,11.9,0,0,1,388.39,72c6.19,0,9.92,4.06,9.92,9.36a11.92,11.92,0,0,1-11.89,11.74C380.27,93.15,376.54,89.08,376.54,83.75Zm15-2.09a3.41,3.41,0,0,0-3.5-3.73c-2.8,0-4.7,2.94-4.7,5.55a3.42,3.42,0,0,0,3.5,3.76C389.62,87.26,391.52,84.31,391.52,81.66Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M352.52,104.7h-7.83l1.71-6.34h22.85l-1.68,6.34h-7.83l-5.29,19.76h-7.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M372.09,97.24h7.08l-2.5,9.36a8.15,8.15,0,0,1,5.78-2.76c3.65,0,5.85,2.31,5.85,6a14.91,14.91,0,0,1-.6,3.62l-2.91,11h-7.08l2.83-10.55a6.64,6.64,0,0,0,.22-1.64,2,2,0,0,0-2.24-2.12c-2,0-3.13,1.34-3.76,3.65l-2.87,10.66h-7.08Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M400.49,119.64a7,7,0,0,0,4.29-1.6l3.28,3.88a12.13,12.13,0,0,1-8.24,3c-6,0-9.62-3.5-9.62-8.95a12.11,12.11,0,0,1,12.11-12.15c6,0,8.57,4,8.57,8.35a12.15,12.15,0,0,1-.78,4.14H396.72C396.87,118.34,398.06,119.64,400.49,119.64Zm3.91-6.93a3.45,3.45,0,0,0,.19-1.08,2.5,2.5,0,0,0-2.76-2.57,5,5,0,0,0-4.62,3.65Z" transform="translate(-12.69 -12.08)"></path></svg>';
    document.querySelector('.viewer-wrapper').innerHTML += logo;
  };

  // handler for 'senderdisconnected' event
  castReceiverManager.onSenderDisconnected = (event) => {
    console.log(`Received Sender Disconnected event: ${event.data}`);
    if (window.castReceiverManager.getSenders().length === 0) {
      window.close();
    }
  };

  // handler for 'systemvolumechanged' event
  castReceiverManager.onSystemVolumeChanged = (event) => {
    console.log(`Received System Volume Changed event: ${event.data.level} ${
      event.data.muted}`);
  };

  // create a CastMessageBus to handle messages for a custom namespace
  window.messageBus =
    window.castReceiverManager.getCastMessageBus('urn:x-cast:com.khalis.cast.sttm.gurbani', cast.receiver.CastMessageBus.MessageType.JSON);

  // handler for the CastMessageBus message event
  window.messageBus.onMessage = (event) => {
    console.log(`Message [${event.senderId}]: ${event.data}`);
    // display the message from the sender
    displayText(event.data);
    // inform all senders on the CastMessageBus of the incoming message event
    // sender message listener will be invoked
    window.messageBus.send(event.senderId, event.data);
  };

  // initialize the CastReceiverManager with an application status message
  window.castReceiverManager.start({ statusText: 'Application is starting' });
  console.log('Receiver Manager started');
};

// utility function to display the text message in the input field
function displayText(json) {
  console.log('inside display text fn');
  console.log(json);
  const logo = '<svg class="logo" id="viewer-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 619.58 135.56"><path class="a" d="M418,46.07h9.1l29,43.47,29-43.47h9.1v79.65h-9V61.21l-29,42.67h-.46l-29-42.56v64.4H418Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M510.86,108.66v-.23C510.86,95.8,521.1,89.2,536,89.2a61.63,61.63,0,0,1,18,2.5V89.88C554,79.41,547.61,74,536.58,74a40.93,40.93,0,0,0-17.86,4.21L516.09,71c6.49-3,12.74-5,21.39-5,8.31,0,14.79,2.28,19,6.49s6.14,9.79,6.14,17.29v36H554V117c-4.1,5.23-10.81,10-21.16,10C521.78,127,510.86,120.72,510.86,108.66Zm43.24-4.55V98.64a60.5,60.5,0,0,0-17.18-2.5c-10.92,0-17.18,4.78-17.18,11.83v.23c0,7.4,6.83,11.72,14.79,11.72C545.34,119.92,554.1,113.43,554.1,104.1Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M598.92,95.8,576.74,66.9h10l17.41,22.76L621.57,66.9h9.79l-22.3,28.67,23.21,30.15H622.14l-18.21-24-18.32,24h-9.79Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M567.24,130.87h8.61a6.19,6.19,0,0,1,4.58,1.51,3.68,3.68,0,0,1,1.08,2.71v0a3.88,3.88,0,0,1-2.59,3.74c2,.67,3.33,1.82,3.33,4.1v0c0,2.88-2.35,4.63-6.35,4.63h-8.65Zm7.46,6.69c1.41,0,2.21-.48,2.21-1.46v0c0-.91-.72-1.44-2.11-1.44h-3v2.95Zm.67,6.35c1.42,0,2.23-.55,2.23-1.53v0c0-.91-.72-1.51-2.28-1.51h-3.55v3.09Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M584.38,130.87h13.5v4H589v2.54H597V141H589v2.66h9v4H584.38Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M604.46,134.94h-5v-4.08h14.72v4.08h-5v12.71h-4.65Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M619.83,130.75h4.48l7.14,16.9h-5l-1.22-3h-6.47l-1.2,3h-4.89ZM623.9,141,622,136.26,620.14,141Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M103,115l5.14-6.09c7.66,6.93,15,10.39,25.19,10.39,9.87,0,16.37-5.25,16.37-12.49v-.21c0-6.82-3.67-10.71-19.1-14-16.9-3.67-24.66-9.13-24.66-21.2v-.21c0-11.54,10.18-20,24.14-20,10.71,0,18.37,3,25.82,9L151,66.64c-6.82-5.56-13.64-8-21.2-8-9.55,0-15.64,5.25-15.64,11.86v.21c0,6.93,3.78,10.81,19.94,14.27,16.37,3.57,23.93,9.55,23.93,20.78V106c0,12.59-10.5,20.78-25.08,20.78C121.34,126.77,111.79,122.89,103,115Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M173.81,50.68H183V59.6h-9.24Zm.53,20.78h8.08v54.26h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M201.2,49.11h8.08V102l29.28-30.54h10.08l-22.77,23.3,23.51,31h-9.66L220.3,100.43l-11,11.13v14.17H201.2Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M260.91,49.11H269v31.8c3.57-5.88,9.24-10.6,18.58-10.6,13.12,0,20.78,8.82,20.78,21.73v33.69h-8.08V94c0-10.08-5.46-16.37-15-16.37-9.34,0-16.27,6.82-16.27,17v31.07h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="c" d="M325.77,50.68H335V59.6h-9.24Zm.53,20.78h8.08v54.26h-8.08Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M35.35,61.18a10.63,10.63,0,0,1,1.72-1,6.83,6.83,0,0,1,1.62-.56q.61-.1.51.21a5.48,5.48,0,0,1-1.54,1.33,39,39,0,0,1-5.59,3.15,21.3,21.3,0,0,1-6.36,1.87,13.4,13.4,0,0,1-6.18-.62,9.78,9.78,0,0,1-5-4.25,11.87,11.87,0,0,1-1.67-4.51,15.49,15.49,0,0,1,0-4.95,17.58,17.58,0,0,1,1.54-4.82,16.51,16.51,0,0,1,2.87-4.18,32.81,32.81,0,0,1,3.1-2.59,25.91,25.91,0,0,1,3.92-2.41,19.3,19.3,0,0,1,4.36-1.56,11.58,11.58,0,0,1,4.46-.15A13.58,13.58,0,0,1,37,37.58,14.27,14.27,0,0,1,40.19,40a12.68,12.68,0,0,1,2.28,3.08,9,9,0,0,1,1,3.36q0,2-.23,4.33t-.59,4.43q-.26,3.59-.59,7.18t-.59,7.15q-.26,3.56-.38,7.15t0,7.18q0,2.82.26,5.66a11.55,11.55,0,0,0,1.79,5.25A6.82,6.82,0,0,0,44,96.37a2.34,2.34,0,0,0,1.44,1.05,1.22,1.22,0,0,0,.77.31c.34,0,.6.05.77.05s.26-.14.28-.1a.13.13,0,0,1,0,.13.25.25,0,0,1-.15.1c-.07,0-.1,0-.1-.13a10.5,10.5,0,0,1,2-1.23,10.93,10.93,0,0,1,2.28-.77c.27-.07.4-.05.38.05a1.13,1.13,0,0,1-.21.41,5.33,5.33,0,0,1-.41.51.72.72,0,0,0-.23.41q-1.18.77-2.36,1.46a25,25,0,0,1-2.31,1.2q-.87.46-1.9.92a7.82,7.82,0,0,1-2.05.62,4.89,4.89,0,0,1-2-.1,3.23,3.23,0,0,1-1.69-1.13,7.27,7.27,0,0,1-1.41-2,11.2,11.2,0,0,1-.82-2.25,15.44,15.44,0,0,1-.38-2.36c-.07-.8-.1-1.56-.1-2.28a56.27,56.27,0,0,1-.49-7q0-3.54.15-7.1t.51-7.1q.33-3.54.64-7,.15-1.79.49-3.79t.49-4a35.87,35.87,0,0,0,.08-4,13.49,13.49,0,0,0-.69-3.82,10.36,10.36,0,0,0-5.38-6.07,9.28,9.28,0,0,0-2-.95,11.2,11.2,0,0,0-2.51-.59,8.16,8.16,0,0,0-2.51.08,3.17,3.17,0,0,0-1.92,1.1,14.41,14.41,0,0,0-3,4.74,14.66,14.66,0,0,0-1.1,5.51,15.88,15.88,0,0,0,.23,2.61,12.39,12.39,0,0,0,.77,2.69,10.47,10.47,0,0,0,1.41,2.43A7.67,7.67,0,0,0,23,60.77a12.19,12.19,0,0,0,6.18,2.13A9.88,9.88,0,0,0,35.35,61.18ZM53.85,50.11q-.26,0-.05-.26a4.35,4.35,0,0,1,.56-.56q.41-.36,1-.82T57,47.19a3.6,3.6,0,0,1,2.2-.77q5.08,0,10.2-.36t10.25-.67q5.13-.31,10.23-.31a71.54,71.54,0,0,1,10.12.72l.15.15c.07.07,0,.1-.15.1a16.1,16.1,0,0,1-4.38,6.51,33.18,33.18,0,0,1-7.07,5,53.22,53.22,0,0,1-8.36,3.54,78.9,78.9,0,0,1-8.28,2.26q-.62.15-.31-.23a6.13,6.13,0,0,1,.95-.9q.64-.51,1.31-1a2.6,2.6,0,0,1,.82-.46,34.91,34.91,0,0,1,3.74-1.85,21.63,21.63,0,0,1,4.23-1.31A16.3,16.3,0,0,1,87,57.34a11.3,11.3,0,0,1,4.18,1.13,15.11,15.11,0,0,1,7.69,11.89,15.43,15.43,0,0,1-.62,7.28,13.44,13.44,0,0,1-4.46,6.2,36.19,36.19,0,0,1-4.13,3.43,35.37,35.37,0,0,1-4.84,2.92,28.27,28.27,0,0,1-5.33,2,21.85,21.85,0,0,1-5.69.74,22.33,22.33,0,0,1-15.12-4.9,24.18,24.18,0,0,1-5.07-5.56,31.47,31.47,0,0,1-3.38-6.74,33.7,33.7,0,0,1-1.74-7.28,29.48,29.48,0,0,1-.05-7.15A42.9,42.9,0,0,1,51,50.55a40.17,40.17,0,0,1,5.25-9.71,42.16,42.16,0,0,1,8-8.2A47.78,47.78,0,0,1,75,26.33,63.06,63.06,0,0,1,85.69,23.2a43.06,43.06,0,0,1,11-.82A32.3,32.3,0,0,1,107,24.66a22.15,22.15,0,0,1,8.53,6.18q.26.31-.44.95a11.45,11.45,0,0,1-1.72,1.28,13.42,13.42,0,0,1-2,1.05q-1,.41-1.31.15a23.43,23.43,0,0,0-5.82-4.56,29.05,29.05,0,0,0-7-2.79,36.23,36.23,0,0,0-7.77-1.08,39.51,39.51,0,0,0-7.92.54,35.84,35.84,0,0,0-7.54,2.15,30.28,30.28,0,0,0-6.61,3.69,28.64,28.64,0,0,0-4.64,4.43,32.94,32.94,0,0,0-3.54,5.18,36.78,36.78,0,0,0-2.54,5.69A41.46,41.46,0,0,0,55,53.44a57,57,0,0,0-.92,5.87,34.19,34.19,0,0,0-.1,5.92,30.6,30.6,0,0,0,1,5.84,24.8,24.8,0,0,0,2.31,5.64A37.39,37.39,0,0,0,60.72,81a29.32,29.32,0,0,0,4.33,3.87,25.59,25.59,0,0,0,5.18,2.92,18.25,18.25,0,0,0,6,1.38,21.44,21.44,0,0,0,6-.33,16.1,16.1,0,0,0,5.15-2,12.78,12.78,0,0,0,3.79-3.49,11,11,0,0,0,1.92-4.87,14.38,14.38,0,0,0,0-4.84,17.65,17.65,0,0,0-4.41-9.1,12,12,0,0,0-4-2.9,11,11,0,0,0-5-.87,13.5,13.5,0,0,0-5.84,1.82,15.34,15.34,0,0,1,1.38-1.41q.72-.64,1.33-1.15,1.59-.51,3.31-1T83.28,58q1.69-.59,3.23-1.26a19.11,19.11,0,0,0,2.87-1.54,16.44,16.44,0,0,0,3-2.31,8.36,8.36,0,0,0,1.92-2.77c.1-.24-.17-.45-.82-.64A14.44,14.44,0,0,0,91.25,49q-1.26-.15-2.46-.23t-1.51-.08q-4.15-.1-8.33.1t-8.36.49l-8.36.54Q58.06,50.11,53.85,50.11Z" transform="translate(-12.69 -12.08)"></path><path class="a" d="M114.75,32.27a2.75,2.75,0,0,1-1.08,1.44q-.87.67-1.64,1.18-.67.31-1.18.51a2.77,2.77,0,0,1-.72.18q-.31,0-.2-.33a22.8,22.8,0,0,1,4-7.64,31.73,31.73,0,0,1,6.46-6.07A43.72,43.72,0,0,1,128.57,17a58.74,58.74,0,0,1,9.15-3.05,64.78,64.78,0,0,1,9.4-1.59,58.72,58.72,0,0,1,8.95-.18q2.87.1,6,.49a40.27,40.27,0,0,1,6.07,1.23,30.39,30.39,0,0,1,5.69,2.26,20.15,20.15,0,0,1,4.82,3.46,12.55,12.55,0,0,1,2.84,4.64,13.31,13.31,0,0,1,.64,5A17.48,17.48,0,0,1,181,34.3a27.26,27.26,0,0,1-2.38,4.84,7.63,7.63,0,0,1-1.51,1.41,14,14,0,0,1-2,1.2,1.57,1.57,0,0,0-.49.13c-.22.09-.43.15-.62.21a.46.46,0,0,1-.44-.05c-.1-.08-.07-.28.1-.59A28.1,28.1,0,0,0,175.88,37a16.86,16.86,0,0,0,1.1-4.61,12.14,12.14,0,0,0-.46-4.56,12,12,0,0,0-2.46-4.36,19.57,19.57,0,0,0-4.13-3.15,31,31,0,0,0-4.82-2.23,38.63,38.63,0,0,0-5.2-1.49q-2.67-.56-5.28-1-3.59-.31-7.56-.26a57.75,57.75,0,0,0-8,.67,53,53,0,0,0-7.87,1.82,33,33,0,0,0-7.1,3.15,23.75,23.75,0,0,0-5.69,4.72A18.46,18.46,0,0,0,114.75,32.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M364.65,72.9h-7.83l1.71-6.34h22.85l-1.68,6.34h-7.83l-5.29,19.76h-7.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M376.54,83.75A11.9,11.9,0,0,1,388.39,72c6.19,0,9.92,4.06,9.92,9.36a11.92,11.92,0,0,1-11.89,11.74C380.27,93.15,376.54,89.08,376.54,83.75Zm15-2.09a3.41,3.41,0,0,0-3.5-3.73c-2.8,0-4.7,2.94-4.7,5.55a3.42,3.42,0,0,0,3.5,3.76C389.62,87.26,391.52,84.31,391.52,81.66Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M352.52,104.7h-7.83l1.71-6.34h22.85l-1.68,6.34h-7.83l-5.29,19.76h-7.27Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M372.09,97.24h7.08l-2.5,9.36a8.15,8.15,0,0,1,5.78-2.76c3.65,0,5.85,2.31,5.85,6a14.91,14.91,0,0,1-.6,3.62l-2.91,11h-7.08l2.83-10.55a6.64,6.64,0,0,0,.22-1.64,2,2,0,0,0-2.24-2.12c-2,0-3.13,1.34-3.76,3.65l-2.87,10.66h-7.08Z" transform="translate(-12.69 -12.08)"></path><path class="b" d="M400.49,119.64a7,7,0,0,0,4.29-1.6l3.28,3.88a12.13,12.13,0,0,1-8.24,3c-6,0-9.62-3.5-9.62-8.95a12.11,12.11,0,0,1,12.11-12.15c6,0,8.57,4,8.57,8.35a12.15,12.15,0,0,1-.78,4.14H396.72C396.87,118.34,398.06,119.64,400.49,119.64Zm3.91-6.93a3.45,3.45,0,0,0,.19-1.08,2.5,2.5,0,0,0-2.76-2.57,5,5,0,0,0-4.62,3.65Z" transform="translate(-12.69 -12.08)"></path></svg>';

  document.querySelector('.viewer-wrapper').innerHTML = `${JSON.parse(json)}`;
  document.querySelector('.viewer-wrapper').innerHTML += logo;

  // Debug info
  // document.querySelector('.debug-info').style.display = 'block';
  // document.querySelector('.debug-info').innerHTML = `${json}`;
}
