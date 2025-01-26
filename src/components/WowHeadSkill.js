import React from 'react';

export default function WowHeadSkill({children, id}) {
    var url = "https://www.wowhead.com/skill=" + id;
    var item = "skill=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="item" target="_blank"  data-wh-rename-link="true">{children}</a>

  );
}
