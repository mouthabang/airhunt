export const mokhatloApi = {

  getGroups: () => {
    return new Promise((resolve, reject) => {
      my.call("makeRequest", {
        replaceParams: ["pin", "msisdn"],
        configOptions: '{"useCachedPin": true }',
        isAsync: true,
        payload: {
          "pin": "pin",
          "msisdn": "msisdn"
        },
        url: "/gsl/groups",
        success: (res) => {
          console.log(res);
          resolve(res);
        },
        fail: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });

  },

  getGroupInfo: (groupId) => {
    return new Promise((resolve, reject) => {
      my.call("makeRequest", {
        replaceParams: ["pin", "msisdn", "currency", "accountType"],
        configOptions: '{"useCachedPin": true }',
        isAsync: true,
        payload: {
          "pin": "pin",
          "msisdn": "msisdn",
          "currency": "currency",
          "accountType": "accountType",
          "groupId": groupId
        },
        url: "/gsl/groups/details",
        success: (res) => {
          console.log(res);
          resolve(res);
        },
        fail: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });

  },

  checkAndConfirm: (groupId, amount, transactionType) => {
    return new Promise((resolve, reject) => {
      my.call("makeRequest", {
        replaceParams: ["pin", "msisdn", "currency"],
        configOptions: '{"useCachedPin": true }',
        isAsync: true,
        payload: {
          "pin": "pin",
          "msisdn": "msisdn",
          "currency": "currency",
          "transactionType": transactionType,
          "groupId": groupId,
          "amount": amount
        },
        url: "/gsl/check-and-confirm",
        success: (res) => {
          console.log(res);
          resolve(res);
        },
        fail: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });

  },

  transaction: (groupId, amount, transactionType) => {
    return new Promise((resolve, reject) => {
      my.call("makeRequest", {
        replaceParams: ["pin", "msisdn", "currency"],
        configOptions: '{"useCachedPin": true }',
        isAsync: true,
        payload: {
          "pin": "pin",
          "msisdn": "msisdn",
          "currency": "currency",
          "transactionType": transactionType,
          "groupId": groupId,
          "amount": amount
        },
        url: "/gsl/transaction",
        success: (res) => {
          console.log(res);
          resolve(res);
        },
        fail: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });
  },

  
  customerBalance: () => {
    return new Promise((resolve, reject) => {
      my.call("makeRequest", {
        replaceParams: ["pin", "msisdn", "currency"],
        configOptions: '{"useCachedPin": true }',
        isAsync: true,
        payload: {
          "pin": "pin",
          "msisdn": "26659017966"
        },
        url: "/customerBalance",
        success: (res) => {
          console.log(res);
          resolve(res);
        },
        fail: (error) => {
          console.log(error);
          reject(error);
        },
      });
    });
  },
  requestCustomerKyc(scopes) {

    return new Promise((resolve, reject) => {
      my.call("userScopes", {
        scopes: scopes,
        success: function (res) {
          console.log(res);
          resolve(res);
        },
        fail: function (err) {
          console.log(err);
          reject(err);
        }
      });
    });
  }


}