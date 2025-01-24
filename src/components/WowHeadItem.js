import React from 'react';

export default function WowHeadItem({children, id}) {
    //var url = "https://www.wowhead.com/item=" + id;
    var url = "https://undermine.exchange/#us-area-52/" + id;
    var item = "item=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="item" target="_blank"  data-wh-rename-link="true"></a>

  );
}
