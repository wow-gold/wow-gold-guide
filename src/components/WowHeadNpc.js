import React from 'react';

export default function WowHeadZone({children, id}) {
    var url = "https://www.wowhead.com/npc=" + id;
    var item = "npc=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="npc" target="_blank"  data-wh-rename-link="true"></a>

  );
}
