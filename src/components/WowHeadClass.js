import React from 'react';

export default function WowHeadClass({children, id}) {
    var url = "https://www.wowhead.com/class=" + id;
    var item = "class=" + id;
  return (
    
<a href={url}  data-wowhead={item} data-game="wow" data-type="class" target="_blank"  data-wh-rename-link="true">{children}</a>

  );
}
