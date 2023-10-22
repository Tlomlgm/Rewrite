/*
#JavDB

[rewrite_local]
^https:\/\/(api\.yijingluowangluo\.xyz|jdforrepam\.com)\/api\/v1\/movies\/\w+\/play\? url script-request-header https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/JavDB.js

[mitm]
hostname = jdforrepam.com

*/

const url = $request.url;
let header = $request.headers;

if (url.includes("/api/v1/movies/") && url.includes("/play?")) {
  header.authorization =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTc1NDMwLCJ1c2VybmFtZSI6IndlaWd1YW5naHQifQ.lyfGvtZcz0SjiKNx-k9Aoe_UgcMyxwG4Xqq3lzvbIao";
  $done({ headers: header });
} else {
  $done({});
}
