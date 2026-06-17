const MSISDN_UAT = "26658685782"
const BASE_URL_PROD = "https://b7e9-41-191-207-34.ngrok-free.app/";
const CURRENT_ENV = "UAT";

export const airhuntAPI = {

  checkCustomerExists: ( ) => {

    if (CURRENT_ENV == "UAT") {
      return new Promise((resolve, reject) => {
        my.request({
          url: BASE_URL_PROD+ 'api/v1/accounts/customers/list/by-msisdn',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            msisdn: MSISDN_UAT
          },
          success: (result) => {
            console.log(result); 
            resolve(result.data);
          },
          fail: (error) => {
            resolve(error.data);
          }
        });
      });

    } else {
      return new Promise((resolve, reject) => {

        my.call("makeRequest", {
          "payload": JSON.stringify({
            "msisdn": "msisdn",
            "proxiedRequest": {
              "needsIdentity": false,
              "needsPIN": false,
              "requestInfo": {
                "httpMethod": "POST",
                "payload": JSON.stringify({
                  "action": 'G',
                  "eventId": ENVENT_ID,
                  "msisdn": "msisdn",
                  "miniAppTxId": MINI_APP_ID,
                  "thirdPartyRef": inputValue
                }),
                "headers": {
                  "Content-Type": "application/json"
                }
              }
            }
          }),
          "replaceParams": [
            "msisdn"
          ],
          "url": BASE_URL_PROD,
          success: (result) => {
            console.log(result);
            resolve(JSON.parse(result.proxiedResponse.data.content));
          },
          fail: (error) => {
            console.log(error);
            reject(error);
          }
        });
      });
    }
  },

  createCustomer: ( ) => {

    if (CURRENT_ENV == "UAT") {
      return new Promise((resolve, reject) => {
        my.request({
          url: BASE_URL_PROD+ 'api/v1/accounts/create/customers',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          data: {
            msisdn: MSISDN_UAT
          },
          success: (result) => {
            console.log(result); 
            resolve(result.data);
          },
          fail: (error) => {
            resolve(error.data);
          }
        });
      });

    } else {
      return new Promise((resolve, reject) => {

        my.call("makeRequest", {
          "payload": JSON.stringify({
            "msisdn": "msisdn",
            "proxiedRequest": {
              "needsIdentity": false,
              "needsPIN": false,
              "requestInfo": {
                "httpMethod": "POST",
                "payload": JSON.stringify({
                  "action": 'G',
                  "eventId": ENVENT_ID,
                  "msisdn": "msisdn",
                  "miniAppTxId": MINI_APP_ID,
                  "thirdPartyRef": inputValue
                }),
                "headers": {
                  "Content-Type": "application/json"
                }
              }
            }
          }),
          "replaceParams": [
            "msisdn"
          ],
          "url": BASE_URL_PROD,
          success: (result) => {
            console.log(result);
            resolve(JSON.parse(result.proxiedResponse.data.content));
          },
          fail: (error) => {
            console.log(error);
            reject(error);
          }
        });
      });
    }
  },

}