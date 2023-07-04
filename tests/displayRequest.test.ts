import displayRequest from "../src/proxy/logging/displayRequest";

test('show request received from displayRequest with level0', () => {
  let storage = ""
  const log = (data: any) => {storage += data}
  console.log = log;
  displayRequest({headers: {"accept-language": "pl-pl"}}).level0();
  expect(storage).toContain("request received");
  
})