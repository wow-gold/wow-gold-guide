/*
    * This file is used to set up the wowhead tooltips for the site. It is included in the site's docusaurus.config.js file.
*/

// This sets up the wowhead tooltips for the site with our default settings.
// See https://www.wowhead.com/tooltips for more information.
const whTooltips = { colorLinks: true, iconizeLinks: true, renameLinks: false, iconSize: 'small', test: false };


// This will ensure the tooltips are updated when the ready state changes. The routeDidUpdate.js 
// handles the route changes on the page. By triggering this a few times at various intervals we 
// wind up in a state where the tooltips work consistently in most navigation cases.
document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        window.$WowheadPower.refreshLinks();
    }
});