import React from 'react';

export default function WowHeadItem({children, id}) {
    var url = "https://www.wowhead.com/item=" + id;
    var goldUrl = "https://undermine.exchange/#us-area-52/" + id;
    var item = "item=" + id;
  return (
    <span>
<a href={url}  data-wowhead={item} data-game="wow" data-type="item" target="_blank"  data-wh-rename-link="true"></a>
<a href={goldUrl} target="_blank"><img src="/img/coin-32.png" alt="Gold" style={{width: 11, height: 11, marginLeft:7}}></img></a>
</span>
  );
}
