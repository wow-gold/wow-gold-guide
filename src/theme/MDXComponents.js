import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import WowHeadItem from '@site/src/components/WowHeadItem';
import WowHeadZone from '@site/src/components/WowHeadZone';
import WowHeadSpell from '@site/src/components/WowHeadSpell';
import WowHeadNpc from '@site/src/components/WowHeadNpc';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  WowHeadItem,
  WowHeadZone,
  WowHeadSpell,
  WowHeadNpc
};