import React from 'react';

export default function WowHeadZone({children, id}) {
    var url = "https://www.wowhead.com/zone=" + id;
    var item = "zone=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="zone" target="_blank"  data-wh-rename-link="true"></a>

  );
}
