const targetUrl = "https://gw-app.beantechyun.com/app-api/api/v1.0/complaintsComments/getCollectCount";
const modifiedDataValue = 99999;

if ($request.url === targetUrl) {
    var bodyObj = JSON.parse($response.body);
    bodyObj.data.data = modifiedDataValue;
    $done({ body: JSON.stringify(bodyObj) });
} else {
    $done({});
}
