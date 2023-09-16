/*************************************

Reddit 过滤推广, 关 NSFW 提示
[rewrite_local]
^https?:\/\/gql\.reddit\.com url script-response-body https://raw.githubusercontent.com/Tlomlgm/Rewrite/main/Reddit-AD.js
[mitm]

hostname = gql.reddit.com

*************************************/

let modified;
let body;
let Tlomlgm;
try {
  body = JSON.parse($response.body.replace(/\"isNsfw\"/gi, '"_isNsfw"'));
  Tlomlgm = body;
  if (Tlomlgm?.data?.subredditInfoByName?.elements?.edges) {
    Tlomlgm.data.subredditInfoByName.elements.edges =
      Tlomlgm.data.subredditInfoByName.elements.edges.filter(
        i => i?.node?.__typename !== 'AdPost'
      );
    modified = true;
  } else if (Tlomlgm?.data?.home?.elements?.edges) {
    Tlomlgm.data.home.elements.edges = Tlomlgm.data.home.elements.edges.filter(
      i => i?.node?.__typename !== 'AdPost'
    );
    modified = true;
  } else if (Tlomlgm?.data?.homeV3?.elements?.edges) {
    Tlomlgm.data.homeV3.elements.edges = Tlomlgm.data.homeV3.elements.edges.filter(
      i => !i?.node?.cells?.some(j => j?.__typename === 'AdMetadataCell')
    );
    modified = true;
  } else if ($response.body.includes('"isNsfw"')) {
    modified = true;
  }
} catch (e) {
  console.log(e);
} finally {
  $done(modified ? { body: JSON.stringify(Tlomlgm) } : {});
}
