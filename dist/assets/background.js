chrome.runtime.onInstalled.addListener(async t=>{if(t.reason==="install"&&(chrome.storage.sync.set({presentModal:!0,toggleState:!0,toggleNavState:!0,toggleHomeFeedState:!0,toggleHomeFeedStateLives:!1,toggleHomeFeedStatePremieres:!1,toggleSubscriptionFeedState:!0,toggleSubscriptionFeedStateLives:!1,toggleSubscriptionFeedStatePremieres:!1,toggleTrendingFeedState:!0,toggleSearchState:!1,toggleRecommendedState:!1,toggleTabState:!0,toggleHomeTabState:!0,toggleTurboState:!1,toggleRegularState:!1,toggleNotificationState:!1}).catch(()=>{console.log("[STORAGE] Could not set storage item")}),chrome.tabs.query({url:["https://www.youtube.com/*","https://m.youtube.com/*"]},function(s){s.forEach(o=>{chrome.tabs.reload(o.id)})}),chrome.action.setBadgeBackgroundColor({color:"#ed5a64"}),chrome.action.setBadgeText({text:"1"})),t.reason==="update"){const s=["toggleState","toggleNavState","toggleHomeFeedState","toggleHomeFeedStateLives","toggleHomeFeedStatePremieres","toggleSubscriptionFeedState","toggleSubscriptionFeedStateLives","toggleSubscriptionFeedStatePremieres","toggleTrendingFeedState","toggleSearchState","toggleRecommendedState","toggleTabState","toggleHomeTabState","toggleTurboState","toggleRegularState","toggleNotificationState"],o=await chrome.storage.sync.get(s);for(const e of s)(!(e in o)||o[e]===void 0)&&await chrome.storage.sync.set({[e]:!1});chrome.storage.sync.set({presentModal:!0}).catch(()=>{console.log("[STORAGE] Could not set storage item")}),chrome.action.setBadgeBackgroundColor({color:"#ed5a64"}),chrome.action.setBadgeText({text:"1"})}setInterval(async()=>{const{premiumKey:s}=await chrome.storage.sync.get(["premiumKey"]),o=["toggleHomeFeedStateLives","toggleHomeFeedStatePremieres","toggleSubscriptionFeedStateLives","toggleSubscriptionFeedStatePremieres","toggleSearchState","toggleRecommendedState","toggleRegularState","toggleNotificationState"];if(s)fetch("https://creatordiscord.xyz/api/hys_activate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({premiumKey:s})}).then(e=>e.json()).then(async e=>{if(e.error){for(const r of o)await chrome.storage.sync.set({[r]:!1});chrome.storage.sync.remove("premiumKey")}});else{for(const e of o)await chrome.storage.sync.set({[e]:!1});chrome.storage.sync.remove("premiumKey")}},21600*1e3)});function m(){return chrome.runtime.id?chrome.storage.sync.get(["toggleState","toggleNavState","toggleHomeFeedState","toggleHomeFeedStateLives","toggleHomeFeedStatePremieres","toggleSubscriptionFeedState","toggleSubscriptionFeedStateLives","toggleSubscriptionFeedStatePremieres","toggleTrendingFeedState","toggleSearchState","toggleRecommendedState","toggleTabState","toggleHomeTabState","toggleTurboState","toggleRegularState","toggleNotificationState","blockList","premiumKey"]):location.reload()}function c(t,s){chrome.scripting.insertCSS({files:s,target:{tabId:t}}).catch(o=>{console.log("Error inserting styles",o)})}function n(t,s){chrome.scripting.removeCSS({files:s,target:{tabId:t}}).catch(o=>{console.log("Error removing styles",o)})}function P(t){chrome.scripting.removeCSS({files:["channel_shorts_tab.css","channel_shorts_unhide.css","assets/home_lives.css","assets/home_premieres.css","assets/home_shorts.css","assets/home_tab_shorts.css","assets/navigation_button.css","assets/notification_shorts.css","assets/recommended_shorts.css","assets/search_shorts.css","assets/subscriptions_feed_fix.css","assets/subscriptions_lives.css","assets/subscriptions_premieres.css","assets/subscriptions_shorts.css","assets/subscriptions_shorts_list.css","assets/trending_shorts.css"],target:{tabId:t}}).catch(s=>{console.log("Error removing styles",s)}),chrome.scripting.executeScript({function:()=>{let s=0;function o(){if(s>=25){s=0;return}const e=document.querySelectorAll(".tab-content"),r=Array.from(e).filter(i=>i.textContent.replace(/\s/g,"").replace(/\n/g,"")==="Shorts");r.length>0?(r.forEach(i=>{i.parentNode.style.display="inline-flex"}),s=0):(s++,setTimeout(o,100))}o()},target:{tabId:t}}).catch(s=>{console.log("Error executing script",s)})}chrome.runtime.onMessage.addListener(async function(t,s,o){if(t.checkStates){const e=await m();chrome.tabs.query({url:["https://www.youtube.com/*","https://m.youtube.com/*"]},function(r){r.forEach(i=>{t.checkStates==="toggleState"&&R(i,i.id,e.toggleState),t.checkStates==="toggleNavState"&&h(i,i.id,e.toggleNavState),t.checkStates==="toggleHomeFeedState"&&S(i,i.id,e.toggleHomeFeedState),t.checkStates==="toggleHomeFeedStateLives"&&e.premiumKey&&p(i,i.id,e.toggleHomeFeedStateLives),t.checkStates==="toggleHomeFeedStatePremieres"&&e.premiumKey&&d(i,i.id,e.toggleHomeFeedStatePremieres),t.checkStates==="toggleSubscriptionFeedState"&&y(i,i.id,e.toggleSubscriptionFeedState),t.checkStates==="toggleSubscriptionFeedStateLives"&&e.premiumKey&&w(i,i.id,e.toggleSubscriptionFeedStateLives),t.checkStates==="toggleSubscriptionFeedStatePremieres"&&e.premiumKey&&F(i,i.id,e.toggleSubscriptionFeedStatePremieres),t.checkStates==="toggleTrendingFeedState"&&v(i,i.id,e.toggleTrendingFeedState),t.checkStates==="toggleSearchState"&&e.premiumKey&&_(i,i.id,e.toggleSearchState),t.checkStates==="toggleRecommendedState"&&e.premiumKey&&T(i,i.id,e.toggleRecommendedState),t.checkStates==="toggleNotificationState"&&e.premiumKey&&k(i,i.id,e.toggleNotificationState),t.checkStates==="toggleTabState"&&L(i,i.id,e.toggleTabState),t.checkStates==="toggleHomeTabState"&&H(i,i.id,e.toggleHomeTabState),t.checkStates==="toggleRegularState"&&e.premiumKey&&K(i,i.id,e.toggleRegularState)})})}if(t.blockList){const e=await m();e.premiumKey&&chrome.tabs.query({url:["https://www.youtube.com/*","https://m.youtube.com/*"]},function(r){r.forEach(i=>{t.blockList==="add"&&u(i.id,"add",e.blockList),t.blockList.action==="remove"&&u(i.id,"remove",t.blockList.channelName),t.blockList==="clear"&&u(i.id,"clear",e.blockList)})})}});chrome.tabs.onUpdated.addListener(async function(t,s,o){if(chrome.runtime.id&&(o.url.startsWith("https://www.youtube.com/")||o.url.startsWith("https://m.youtube.com/"))){const e=await m();if(!e.toggleState||s.status!=="loading")return;h(o,t,e.toggleNavState),S(o,t,e.toggleHomeFeedState),e.premiumKey&&p(o,t,e.toggleHomeFeedStateLives),e.premiumKey&&d(o,t,e.toggleHomeFeedStatePremieres),y(o,t,e.toggleSubscriptionFeedState),e.premiumKey&&w(o,t,e.toggleSubscriptionFeedStateLives),e.premiumKey&&F(o,t,e.toggleSubscriptionFeedStatePremieres),v(o,t,e.toggleTrendingFeedState),e.premiumKey&&_(o,t,e.toggleSearchState),e.premiumKey&&T(o,t,e.toggleRecommendedState),e.premiumKey&&k(o,t,e.toggleNotificationState),L(o,t,e.toggleTabState),H(o,t,e.toggleHomeTabState),e.premiumKey&&K(o,t,e.toggleRegularState),e.blockList&&e.blockList.length>0&&e.premiumKey&&u(t,"add",e.blockList)}});async function R(t,s,o){if(o){const e=await m();e.toggleNavState&&h(t,s,e.toggleNavState),e.toggleHomeFeedState&&S(t,s,e.toggleHomeFeedState),e.toggleHomeFeedStateLives&&e.premiumKey&&p(t,s,e.toggleHomeFeedStateLives),e.toggleHomeFeedStatePremieres&&e.premiumKey&&d(t,s,e.toggleHomeFeedStatePremieres),e.toggleSubscriptionFeedState&&y(t,s,e.toggleSubscriptionFeedState),e.toggleSubscriptionFeedStateLives&&e.premiumKey&&w(t,s,e.toggleSubscriptionFeedStateLives),e.toggleSubscriptionFeedStatePremieres&&e.premiumKey&&F(t,s,e.toggleSubscriptionFeedStatePremieres),e.toggleTrendingFeedState&&v(t,s,e.toggleTrendingFeedState),e.toggleSearchState&&e.premiumKey&&_(t,s,e.toggleSearchState),e.toggleRecommendedState&&e.premiumKey&&T(t,s,e.toggleRecommendedState),e.toggleNotificationState&&e.premiumKey&&k(t,s,e.toggleNotificationState),e.toggleTabState&&L(t,s,e.toggleTabState),e.toggleHomeTabState&&H(t,s,e.toggleHomeTabState),e.toggleRegularState&&e.premiumKey&&K(t,s,e.toggleRegularState),e.blockList&&e.blockList.length>0&&e.premiumKey&&u(s,"add",e.blockList)}o||P(s)}const E=["https://www.youtube.com/","https://www.youtube.com/?app=desktop","https://m.youtube.com/"],f=["https://www.youtube.com/feed/subscriptions","https://www.youtube.com/feed/subscriptions?app=desktop","https://m.youtube.com/feed/subscriptions","https://www.youtube.com/feed/subscriptions?flow=1"],N=["https://www.youtube.com/feed/trending","https://www.youtube.com/gaming","https://m.youtube.com/feed/explore","https://m.youtube.com/feed/trending"],x=["https://www.youtube.com/channel/","https://www.youtube.com/@","https://www.youtube.com/user/","https://www.youtube.com/c/","https://m.youtube.com/channel/","https://m.youtube.com/@","https://m.youtube.com/user/","https://m.youtube.com/c/"];function u(t,s,o){s==="add"&&o.forEach(e=>{chrome.scripting.insertCSS({css:`
            ytd-rich-item-renderer:has(a[href*="/@${e}"]) {
                display: none !important;
            }
            ytd-shelf-renderer:has(a[href*="/@${e}"]) {
                display: none !important;
            }
            ytd-video-renderer:has(a[href*="/@${e}"]) {
                display: none !important;
            }
            `,target:{tabId:t}}).catch(r=>{console.log("Error inserting styles",r)})}),s==="remove"&&chrome.scripting.insertCSS({css:`
            ytd-rich-item-renderer:has(a[href*="/@${o}"]) {
                display: inline-flex !important;
            }
            ytd-shelf-renderer:has(a[href*="/@${o}"]) {
                display: inline-flex !important;
            }
            ytd-video-renderer:has(a[href*="/@${o}"]) {
                display: inline-flex !important;
            }
            `,target:{tabId:t}}).catch(e=>{console.log("Error inserting styles",e)}),s==="clear"&&o.forEach(e=>{chrome.scripting.insertCSS({css:`
                ytd-rich-item-renderer:has(a[href*="/@${e}"]) {
                    display: inline-flex !important;
                }
                ytd-shelf-renderer:has(a[href*="/@${e}"]) {
                    display: inline-flex !important;
                }
                ytd-video-renderer:has(a[href*="/@${e}"]) {
                    display: inline-flex !important;
                }
            `,target:{tabId:t}}).catch(r=>{console.log("Error inserting styles",r)})})}function h(t,s,o){if(t.url.startsWith("https://www.youtube.com/")||t.url.startsWith("https://m.youtube.com/")){const e=["assets/navigation_button.css"];o&&c(s,e),o||n(s,e)}}function S(t,s,o){if(E.includes(t.url)){const e=["assets/home_shorts.css"];o&&c(s,e),o||n(s,e)}}function p(t,s,o){if(t.url==="https://www.youtube.com/"){const e=["assets/home_lives.css"];o&&c(s,e),o||n(s,e)}}function d(t,s,o){if(t.url==="https://www.youtube.com/"){const e=["assets/home_premieres.css"];o&&c(s,e),o||n(s,e)}}function y(t,s,o){if(f.includes(t.url)){const e=["assets/subscriptions_shorts.css","assets/subscriptions_shorts_list.css","assets/subscriptions_feed_fix.css"];o&&c(s,e),o||n(s,e)}if(t.url==="https://www.youtube.com/feed/subscriptions?flow=2"){const e=["assets/subscriptions_shorts_list.css"];o&&c(s,e),o||n(s,e)}}function w(t,s,o){if(f.includes(t.url)){const e=["assets/subscriptions_lives.css","assets/subscriptions_feed_fix.css"];o&&c(s,e),o||n(s,e)}}function F(t,s,o){if(f.includes(t.url)){const e=["assets/subscriptions_premieres.css","assets/subscriptions_feed_fix.css"];o&&c(s,e),o||n(s,e)}}function v(t,s,o){if(N.some(e=>t.url.startsWith(e))){const e=["assets/trending_shorts.css"];o&&c(s,e),o||n(s,e)}}function _(t,s,o){if(t.url.startsWith("https://www.youtube.com/results")||t.url.startsWith("https://m.youtube.com/results")){const e=["assets/search_shorts.css"];o&&c(s,e),o||n(s,e)}}function T(t,s,o){if(t.url.startsWith("https://www.youtube.com/watch")){const e=["assets/recommended_shorts.css"];o&&c(s,e),o||n(s,e)}}function k(t,s,o){if(t.url.startsWith("https://www.youtube.com/")){const e=["assets/notification_shorts.css"];o&&c(s,e),o||n(s,e)}}function H(t,s,o){if(x.some(e=>t.url.startsWith(e))){const e=["assets/home_tab_shorts.css"];o&&c(s,e),o||n(s,e)}}function L(t,s,o){if(x.some(e=>t.url.startsWith(e))){const e=["assets/channel_shorts_tab.css"];o?(chrome.scripting.executeScript({function:()=>{let r=0;function i(){if(r>=25){r=0;return}const g=document.querySelectorAll(".tab-content"),a=Array.from(g).filter(l=>l.textContent.replace(/\s/g,"").replace(/\n/g,"")==="Shorts");a.length>0?(a.forEach(l=>{l.parentNode.style.display="none"}),r=0):(r++,setTimeout(i,100))}i()},target:{tabId:s}}).catch(r=>{console.log("Error executing script",r)}),c(s,e)):(setTimeout(()=>{c(s,["assets/channel_shorts_unhide.css"])},500),chrome.scripting.executeScript({function:()=>{let r=0;function i(){if(r>=25){r=0;return}const g=document.querySelectorAll(".tab-content"),a=Array.from(g).filter(l=>l.textContent.replace(/\s/g,"").replace(/\n/g,"")==="Shorts");a.length>0?(a.forEach(l=>{l.parentNode.style.display="inline-flex"}),r=0):(r++,setTimeout(i,100))}i()},target:{tabId:s}}).catch(r=>{console.log("Error executing script",r)}),n(s,e))}}function K(t,s,o){if(t.url.startsWith("https://www.youtube.com/shorts/")||t.url.startsWith("https://m.youtube.com/shorts/")){let r=function(g){const a=/\/shorts\/([^/]+)/,l=g.match(a);return l?l[1]:null};var e=r;const i=r(t.url);if(i&&o){const g=`https://youtube.com/watch?v=${i}`;chrome.tabs.update(s,{url:g})}}}