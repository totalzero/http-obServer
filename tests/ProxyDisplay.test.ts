import ProxyDisplay from "../src/proxy/ProxyDisplay";

const proxyDisplay: ProxyDisplay = new ProxyDisplay();
const req = {headers: {"accept-language": "pl-pl"},
url: "example.com",
statusCode: 200,
statusMessage: "ok"}

test('showing nothink when ProxyDisplay.displayRequest() with loglevel = 0', () => {
  const spyLog = jest.spyOn(console, 'log');
  
  proxyDisplay.setLogLevel(0);
  proxyDisplay.displayRequest(req);
  expect(spyLog).not;
})

test ('showing request received from ProxyDisplay.displayRequest with level 1', () => {
    const spyLog = jest.spyOn(console, 'log');  
proxyDisplay.setLogLevel(1);
proxyDisplay.displayRequest(req);
expect(spyLog).toHaveBeenCalledWith("request received");
});
   
test('showing url from ProxyDisplay.displayRequest() with level 2', () => {
    let storage = "";
console.log = (data:any) => {storage += data;}
proxyDisplay.setLogLevel(2);
proxyDisplay.displayRequest(req);
expect(storage).toContain("example.com");
});

test('showing headers from ProxyDisplay.displayRequest() with level3', () => {
    let storage = "";
console.log = (data:any) => {storage += data;}
proxyDisplay.setLogLevel(3);
proxyDisplay.displayRequest(req);
expect(storage).toContain("accept-language");
});

//DisplayResponse


test('showing nothink when ProxyDisplay.displayResponse() with loglevel = 0', () => {
    const spyLog = jest.spyOn(console, 'log');
    
    proxyDisplay.setLogLevel(0);
    proxyDisplay.displayRequest(req);
    expect(spyLog).not;
  })
  
  test ('showing sending response from ProxyDisplay.displayRequest with level 1', () => {
      const spyLog = jest.spyOn(console, 'log');  
  proxyDisplay.setLogLevel(1);
  proxyDisplay.displayResponse(req);
  expect(spyLog).toHaveBeenCalledWith("sending response");
  });
     
  test('showing url from ProxyDisplay.displayResponse() with level 2', () => {
      let storage = "";
  console.log = (data:any) => {storage += data;}
  proxyDisplay.setLogLevel(2);
  proxyDisplay.displayResponse(req);
  expect(storage).toContain("example.com");
  });
  
  test('showing headers from ProxyDisplay.displayResponse() with level3', () => {
      let storage = "";
  console.log = (data:any) => {storage += data;}
  proxyDisplay.setLogLevel(3);
  proxyDisplay.displayResponse(req);
  expect(storage).toContain("accept-language");
  });
  
  