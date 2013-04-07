var page = require('webpage').create();

var test_url = 'http://ipservice.163.com/isFromMainland';

page.open(test_url, function (status) {
    if (status !== 'success') {
        console.error('Failed in opening page...');
        phantom.exit(1);
    } else {
        if (page.content.indexOf('true') === -1) {
            console.log("Proxy didn't work well...");
            phantom.exit(2);
        } else {
            phantom.exit(0);
        }
    }
});
