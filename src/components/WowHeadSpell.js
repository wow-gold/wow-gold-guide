import React from 'react';

export default function WowHeadZone({children, id}) {
    var url = "https://www.wowhead.com/spell=" + id;
    var item = "spell=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="item" target="_blank"  data-wh-rename-link="true"></a>

  );
}
