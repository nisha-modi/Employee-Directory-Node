const okta = require("@okta/okta-sdk-nodejs");


const client = new okta.Client({
    orgUrl: "{https://dev-514000.okta.com}",
    token: "{00gFjMekZamByEgiYZlKkYntn5-2gy5wicwbn71XW3}"
});


module.exports = { client };