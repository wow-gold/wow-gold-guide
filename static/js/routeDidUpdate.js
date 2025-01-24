// This runs at the end of every page load and will ensure that all wowhead links are properly 
// iconized and linked to the wowhead article for that item.
export function onRouteDidUpdate({location, previousLocation}) {
    window.$WowheadPower.refreshLinks(); 
  }

