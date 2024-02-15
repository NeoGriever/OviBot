Object.prototype.assimilate = function(obj2) {
  function combineObjects(obj1, obj2) {
    let result = {};
    Object.keys(obj1).forEach(key => {
      if (obj1.hasOwnProperty(key)) {
        result[key] = obj1[key];
      }
    });
    Object.keys(obj2).forEach(key => {
      if (obj2.hasOwnProperty(key)) {
        if (obj1.hasOwnProperty(key) && typeof obj1[key] === 'object' && obj1[key] !== null && typeof obj2[key] === 'object' && obj2[key] !== null) {
          result[key] = combineObjects(obj1[key], obj2[key]);
        } else if (!obj1.hasOwnProperty(key)) {
          result[key] = obj2[key];
        }
      }
    });
    return result;
  }
  return combineObjects(this, obj2);
};
Date.prototype.quickDate = function() {
  let day = this.getDate();
  let month = this.getMonth() + 1;
  return `${(day>9)?day:`0${day}`}.${(month>9)?month:`0${month}`}.${this.getFullYear()}`;
};
RegExp.prototype.execOnce = function (str) {
  const result = this.exec(str);
  this.lastIndex = 0;
  return result;
};
RegExp.prototype.reset = function () {
  this.lastIndex = 0;
};
HTMLElement.prototype.toTop = function () {
  var parent = this.parentNode;
  if (parent.firstChild !== this) {
    parent.insertBefore(this, parent.firstChild);
  }
};
HTMLElement.prototype.clear = function () {
  let child = this.lastElementChild;
  while (child) {
    this.removeChild(child);
    child = this.lastElementChild;
  }
};
HTMLElement.prototype.to = function (target) {
  target.appendChild(this);
  return this;
};
HTMLElement.prototype.in = function (target) {
  this.appendChild(target);
  return this;
};
HTMLElement.prototype.inner = function (v) {
  if(typeof v !== `undefined`) {
    this.childNodes[0].data = v;
  }
  return(this.childNodes[0].data);
};
HTMLElement.prototype.css = function (data) {
  for(let n in data) this.style[n] = data[n];
  return this;
}
String.prototype.conv = function() {
    return this;
};
String.prototype.toText = function() {
  return this.replace(/<[^>]*>/g, '');
};
String.prototype.toTimestamp = function() {
  const utcTimeString = this.replace('CET', '+01:00');
  const date = new Date(utcTimeString);
  return date.getTime();
}
String.prototype.cvr = function(pad = 3) {
  const hoch = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '+': '⁺', '-': '⁻', '=': '⁼' };
  const tief = { '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄', '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉', '+': '₊', '-': '₋', '=': '₌' };
  const map = this.charAt(0) === '-' ? hoch : tief;
  let result = Array.from(this).map(char => map[char] || char).join('');
  if (this.charAt(0) !== '-') {
    result = '₊' + result;
  }
  let r_0 = result[0];
  let r_1 = result.substr(1);
  r_1 = r_1.padStart(pad, map[`0`]);
  return `${r_0}${r_1}`;
};

const external_included_config = {
  previewAmount: 4,
  defaults: {
    tabSideBarHack: `
      #menu {
        transform: rotate(-90deg) translateX(-175px) translateY(-384px) scale(0.7) scalex(-1);
        position: fixed;
        width: 730px;
      }
      #menu .tabs.left {
        position: relative;
        left: 80px;
      }
      #menu .tabs .current {
        box-shadow: 0px 0px 15px orange;
      }
      #menu .tabs li a {
        transform: scalex(-1) rotate(90deg);
        border-bottom: 5px solid #80b3d4;
        border-radius: 10px 0 0 10px;
      }
    `,
    darkModeStyle: `
      div.ovipet_mainbox {
        background-color:#303030 !important;
        border-color: #3b6080 !important;
        color: #eee !important
      }
      .ovipets_dialogue, .catbox, .button, .progressbar, .trackbar {
        background-color:rgba(66, 66, 66, 0.45) !important;
        border-color: #3b6080 !important;
        backdrop-filter: blur(5px);
        border-width: 2px !important;
        padding:4px;
        color: #eee !important
      }
      .progressbar, .trackbar {
        border-radius:3px !important;
        padding:0px;
      }
      .trackbar .progress , .progressbar .progress {
        height:100% !important;
        box-shadow:none !important;
        border-top: 0px !important;
        border-radius:3px !important;
      }
      div.hidecontents > div:first-child {
        color: #eee !important
      }
      *::not(.noinv), .button, input[type="checkbox"] + label.button {
        color:rgba(30, 30, 30, 1) !important;
        background-color:rgba(220, 220, 220, 0.45) !important;
        border-color: rgba(196, 159, 127, 1) !important;
        box-shadow: 2px 2px 3px 0px rgba(255, 255, 255, 0.5);
        filter: invert(100%);
      }
      input[type="checkbox"]:checked + label.button , .checkedstyled {
        color:rgba(30, 30, 30, 1) !important;
        background-color:rgba(220, 180, 220, 0.45) !important;
        border-color: rgba(196, 159, 127, 1) !important;
        box-shadow: inset 16px 16px 25px -12px rgba(255, 255, 255, 0.3);
        filter: invert(100%);
      }
      .button.disabled, .disabled , .disabled * {
        border-color: rgba(125, 125, 125, 1) !important;
        color:rgba(125, 125, 125, 1) !important;
      }
      option {
        background:#303030 !important;
        color: white;
      }
    `,
    nameGeneratorTypes: [
      {name: `Gemischt (Kurz) [Standard]`, value: `mixed/short/`},
      {name: `Gemischt (Mittel)`, value: `mixed/medium/`},
      {name: `Menschen (Kurz)`, value: `human/short/`},
      {name: `Menschen (Mittel)`, value: `human/medium/`},
      {name: `Elfen (Kurz)`, value: `elf/short/`},
      {name: `Elfen (Mittel)`, value: `elf/medium/`},
      {name: `Zwerge (Kurz)`, value: `dwarf/short/`},
      {name: `Zwerge (Mittel)`, value: `dwarf/medium/`},
      {name: `Barbar (Kurz)`, value: `barbarian/short/`},
      {name: `Barbar (Mittel)`, value: `barbarian/medium/`},
      {name: `Ork (Kurz)`, value: `orc/short/`},
      {name: `Ork (Mittel)`, value: `orc/medium/`},
      {name: `Böse (Kurz)`, value: `evil/short/`},
      {name: `Böse (Mittel)`, value: `evil/medium/`},
      {name: `Asiatisch (Kurz)`, value: `asian/short/`},
      {name: `Asiatisch (Mittel)`, value: `asian/medium/`},
      {name: `Arabisch (Kurz)`, value: `arabic/short/`},
      {name: `Arabisch (Mittel)`, value: `arabic/medium/`},
      {name: `Surnames (Kurz)`, value: `surnames/short/`},
      {name: `Surnames (Mittel)`, value: `surnames/medium/`},
      {name: `Sience-Fiction (Kurz)`, value: `sf/short/`},
      {name: `Sience-Fiction (Mittel)`, value: `sf/medium/`},
      {name: `Reptilien (Kurz)`, value: `reptilian/short/`},
      {name: `Reptilien (Mittel)`, value: `reptilian/medium/`},
      {name: `Rattenmann (Kurz)`, value: `ratman/short/`},
      {name: `Rattenmann (Mittel)`, value: `ratman/medium/`},
      {name: `Dämonen (Kurz)`, value: `demon/short/`},
      {name: `Dämonen (Mittel)`, value: `demon/medium/`},
      {name: `Drachen (Kurz)`, value: `dragon/short/`},
      {name: `Drachen (Mittel)`, value: `dragon/medium/`},
      {name: `Hobbit`, value: `human/short/`},
      {name: `Baby-Namen`, value: `enames/short/`},
      {name: `Superhelden/Superbösewicht`, value: `super/short/`}
    ],
    soundnames: {
      "-": `Deaktiviert`,
      cry: `Pathetic Cry`,
      please: `Please don't hurt me`,
      mornin: `Good Morning. Nice day for fishing ain't it! Hu ha!`,
      icq: `ICQ-Benachrichtigungs-Sound`,
      uhoh: `Uh Oh - How unfortunate`,
    },
    blacklistEditor: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+cLFAMrGX9jm7MAAANZSURBVEjHjZVNaFxVFMd/577J2EnzVUvERkugxCYmUSFNUmxSVNSFKIJoLGrBgIJLo+BCFLStm1JRK9USJBBKSym4ELKpdFHQlRprRaURm6FENFINkzSZDE3m3b+Lec68ySQZz+Y9OPf+7vn433uMMnOAqG6GopWJtQ7qeFLbq1A8X/Fz4bcISLCFHEKtHGWKRaxim6IgjR7dwVsqB4CDnTTb3bppo8zgooiifUXeP7qmkyRLB0eZe5aSep9+sgR6Bx87WLH99frFniUseRMAj/IlzpGkmU/tHEGpIAhZI7CAYeR5goMqq1sC4AJuj96gli7G/Ey9gXhGpwAX+Jf1ArIzwVgYAn/hywuciKrTTR/jtBO4V5Yew2OnFjnMVf+4XrPjwOvhrCbAKkqbKIabtuPaj/ErjQi0bDcEg3zjT4Ldz6AmKhsT74KRwDDa6MdjLHLerjOth1wPpk772tYVxxohIaZtEslblhvWoHto02lgB/daIwvVAbBLvcjS7oSthB/Qa0NkgFs5okPPjZxVdUCaSdCf5MO9esRe1GSU4bzGz/bF9bE+wNjFHrBtJNRPSg8wEOVWQ6322u/Va5C274BZQpvSj+yP+S7bFeo3Bxjooi4CeA6eP3dBhjxmBVcY2tPVIvCuyb/NbQjOAJhdt6P8vfErUVmDVWZYLq435lgluj32PwAQ0EhTCaC8BYVHQIj4PdwIIMsrX2yXs9UCzGq021oZJGkJ+U0AJq1wM5bCKhJ0+DfVyxIBt/MRLfywIUBOTWwrAhLCzDo0TtqGuQq0McLDTILDVwAElrdZViLAgp1WhqQ/Yb/ZmLYqI4KtfAba7ZJagcJrVobQLbSrS13qUrc62ALq5j6OqYlRGwoOaFQNHKNDnesLST6jV2OyALiLOdKpn3ItfCjxXmoiV8e82rlcCXD0MWdBGTLPPkBZBRnVSDaflRP+v9jjgFW7pAfpr2hsigbuDFp1iHfNccTN8QfbbbqgTosUNsywGwKl1tFFSp9whQmaaj+H5SEyPMUOe165eBdydPov1urMorpqJwPm+Xg5afA9Ixqwl5SLDRwHzdpXmjYV5qm1A2plFmixaxzWt0lC8jFA1Zns6tSjdrApu+SzNYSbXLAKC/DFKVn4BuQj37/V7GC4GVmyZQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0xMS0yMFQwMzo0MzowNyswMDowMHDeeqoAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMTEtMjBUMDM6NDM6MDcrMDA6MDABg8IWAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTExLTIwVDAzOjQzOjI1KzAwOjAwgyz1nQAAAABJRU5ErkJggg==`,
    hiddenEggCatcher: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TpaIVBzuISMlQneyiIo6likWwUNoKrTqYvPQPmjQkKS6OgmvBwZ/FqoOLs64OroIg+APi6uKk6CIl3pcUWsR44fE+zrvn8N59gNCsMtXsiQGqZhnpRFzM5VfFwCsGEIYPAsISM/VkZjELz/q6p06quyjP8u77swaVgskAn0gcY7phEW8Qz25aOud94hArSwrxOfGkQRckfuS67PIb55LDAs8MGdn0PHGIWCx1sdzFrGyoxDPEEUXVKF/Iuaxw3uKsVuusfU/+wmBBW8lwndYYElhCEimIkFFHBVVYiNKukWIiTedxD/+o40+RSyZXBYwcC6hBheT4wf/g92zN4vSUmxSMA70vtv0xDgR2gVbDtr+Pbbt1AvifgSut4681gblP0hsdLXIEDG0DF9cdTd4DLneAkSddMiRH8tMSikXg/Yy+KQ8M3wL9a+7c2uc4fQCyNKvlG+DgEJgoUfa6x7v7uuf2b097fj90a3KnqKs63AAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cLHgEDN5LRDNwAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAB70lEQVRYw8XXu2tUURAG8B++gquFkGggvuoFG2Njs7HcRGyMYCVioY3gq7EQrLRR/wBJG9EiGOyUNKJBVES2SBFECx+dpogQokKKtRnhsu4u97F796vunHNm5puZc+6cQ3aMJr6voIkPuJnDls0Z1o5jHpN4GGNr2Io/eIqP+oQaNrCC8ymCWsKlXpO4ipEU6ypYiNLMFHW6p4DuTJC4ldfANNZxpACJR0FiOqvijthgS5HSvKiEjTXsz6o8gWpGnW1xGmqJsSp+4YkSMIQv+N4S8e0oRS3tbi+S9sOxdxZaSrGCxTTnvRkkiuB62LmYGLuWJguzwX64B+V4HbZ2hzwc8mw3pTN5jkwHVCPi+4mxx0Fiu5LwIBz++4OeDFLHyyIwEQ6nQt4V8p12i+/hRh9IHGqRl/Gi3cKvmCshK3PhC2xKTBzAagkEVsPXfwQGgi2J7zoaJfndGGTQb/B+UCWoRK9otCNQw0+c6iOBqeiYzzq10lQdqwAWw8dQt1bcKNiOO+FEmk5b6VPko/iGT1l87OwRoUqk/jeOplUaS+yHvQWc7wsbTVzIqnwuWmneBnU67obrYSsXxnEwIR+L0nQr21m8jaiXw0ZPMBJGm3gXL5+xxPzLxPxnXM74+E2FOu7iFX60vBuex0WjnsXgX5rpacbjSjD+AAAAAElFTkSuQmCC`,
    loginDelayColors: [`#bbd5ea`, `#b8d3e8`, `#b2cee6`, `#accae4`, `#a3c5e1`, `#97bddb`, `#8eb6d8`],
    widescreenFix: `
    body {
      margin: 25px;
      width: CALC(100% - 150px);
      margin-top: 75px;
      min-width:730px;
      margin-left: 50px;
    }
    #header {
      position:fixed !important;
      box-sizing: border-box;
      width: CALC(100% - 150px);
      min-width:730px;
      height:60px;
    }
    #src_pets #sub_profile #pet {
      text-align:center;
    }
    #src_pets #sub_profile #pet .pet {
      position:inherit;
    }
    #sub_calendar #calendar .calendar_box {
      margin: 0px;
      width: 96px;
      height: 96px;
    }
    #sub_calendar #calendar li {
      width: 100px;
      padding-bottom: 100px;
    }
    .cover {
      pointer-events: none;
      border:0px !important;
    }
    `,
    widescreenModuleFix: `div.ovipet_mainbox:not(.open) {top: 5px;height:60px !important;}`,
    petBackgroundFix: `#src_pets #sub_profile #pet .cover.large {height: 100%;top: 0px;}`,
    scrollableTabsFix: `.ui-tabs .ui-tabs-nav {max-height:150px !important;overflow-y: scroll !important;background-position:top;}`,
  },
  justifyTabs: `
    .ui-tabs-nav {display: flex;justify-content: space-between;flex-wrap: wrap;}
    .ui-tabs ul.ui-tabs-nav.ui-helper-clearfix::before, .ui-tabs ul.ui-tabs-nav.ui-helper-clearfix::after {display: none !important;}
    .ui-dialog.ui-widget.ui-draggable.ui-resizable > .ui-dialog .ui-dialog-content {overflow: inherit;}
    .ui-dialog.ui-widget.ui-draggable.ui-resizable > div.ui-dialog-titlebar .ui-helper-clearfix::before, .ui-helper-clearfix::after {display: table !important;}
  `,
  tabStyles: [
    {
      name: "Standard",
      css: ``
    },
    {
      name: "Schädel-Style",
      css: `
      .ui-tabs .ui-tabs-active {
        padding-bottom: 0px !important;
        margin-bottom:-20px !important;
        position:relative !important;
        top:-13px !important;
        height:40.6px !important;
        background-color:red !important;
      }
      li.ui-tabs-tab {
        height: 27.6px !important;
        padding-bottom:0px !important;
        box-shadow: 0px 0px 6px black, 0px -5px 4px rgba(0, 0, 0, 0.6);
        background-image: url(data:image/png;base64,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) !important;
          background-position: right !important;
          margin-bottom:-7px !important;
        }
        li.ui-tabs-tab a span p {
          font-family: Segoe UI !important;
          color:black !important;
          text-shadow: 0px 0px 5px white, 0px 0px 5px white;
          font-size:12px !important;
          line-height: 0.6;
        }
        `
      },
    {
      name: "Einhorn-Style",
      css: `
      .ui-tabs .ui-tabs-active {
        background-color:purple !important;
        color:white !important;
        backdrop-filter: blur(2px) grayscale(70%) brightness(25%);
        transition:backdrop-filter 600ms;
      }
      li.ui-tabs-tab {
        height: 27.6px !important;
        padding-bottom:0px !important;
        box-shadow: 0px 0px 6px black, 0px -5px 4px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px) grayscale(0%) brightness(130%);
        transition:backdrop-filter 600ms;
      }

      li.ui-tabs-tab:nth-child(9n+1) { background: hsla(  0, 60%, 85%, 0.3) !important; } /* Pastellrot */
      li.ui-tabs-tab:nth-child(9n+2) { background: hsla( 40, 60%, 85%, 0.3) !important; } /* Pastellorange */
      li.ui-tabs-tab:nth-child(9n+3) { background: hsla( 80, 60%, 85%, 0.3) !important; } /* Pastellgelb */
      li.ui-tabs-tab:nth-child(9n+4) { background: hsla(120, 60%, 85%, 0.3) !important; } /* Pastellgrün */
      li.ui-tabs-tab:nth-child(9n+5) { background: hsla(160, 60%, 85%, 0.3) !important; } /* Pastelltürkis */
      li.ui-tabs-tab:nth-child(9n+6) { background: hsla(200, 60%, 85%, 0.3) !important; } /* Pastellhellblau */
      li.ui-tabs-tab:nth-child(9n+7) { background: hsla(240, 60%, 85%, 0.3) !important; } /* Pastellblau */
      li.ui-tabs-tab:nth-child(9n+8) { background: hsla(280, 60%, 85%, 0.3) !important; } /* Pastelllila */
      li.ui-tabs-tab:nth-child(9n+9) { background: hsla(320, 60%, 85%, 0.3) !important; } /* Pastellrosa */

      li.ui-tabs-tab a span p , li.ui-tabs-tab a span{
        font-family: Segoe UI !important;
        color:rgba(0, 0, 0, 0.6) !important;
        font-size:18px !important;
        line-height: 0.6;
        text-shadow: 0px 0px 5px white;
      }

      .ui-widget-header {
        background: #5c9ccc url("https://wallpapers.com/images/hd/unicorn-art-hk8vqjf1p62dje0j.jpg") 50% 50% no-repeat !important;
        background-size: cover !important;
      }

      .ui-section-title , .ui-progressbar-title , .ui-dialog-title {
        text-shadow: 0px 0px 3px black, 0px 0px 4px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black, 0px 0px 5px black;
        background-color: rgba(0, 0, 0, 0.3) !important;
        display:block;
        margin-left: 5%;
        margin-right:5%;
        border-radius: 10px;
        backdrop-filter: blur(4px) grayscale(0%) brightness(130%);
      }
      `
    },
    {
      name: "Einhorn-Style (Regenbogen)",
      css: `
      ul.ui-tabs-nav {
        text-align:center;
      }
      .ui-tabs .ui-tabs-active {
        background-color:purple !important;
        color:white !important;
        backdrop-filter: blur(2px) grayscale(70%) brightness(25%);
        transition:backdrop-filter 600ms;
      }
      li.ui-tabs-tab {
        height: 27.6px !important;
        padding-bottom:0px !important;
        box-shadow: 0px 0px 6px black, 0px -5px 4px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px) grayscale(0%) brightness(130%);
        transition:backdrop-filter 600ms;
        width: CALC(50% - 8px) !important;
        display:inline-block;
        float:none !important;
      }

      li.ui-tabs-tab:nth-child(9n+1) { background: hsla(  0, 60%, 65%, 0.8) !important; } /* Pastellrot */
      li.ui-tabs-tab:nth-child(9n+2) { background: hsla( 40, 60%, 65%, 0.8) !important; } /* Pastellorange */
      li.ui-tabs-tab:nth-child(9n+3) { background: hsla( 80, 60%, 65%, 0.8) !important; } /* Pastellgelb */
      li.ui-tabs-tab:nth-child(9n+4) { background: hsla(120, 60%, 65%, 0.8) !important; } /* Pastellgrün */
      li.ui-tabs-tab:nth-child(9n+5) { background: hsla(160, 60%, 65%, 0.8) !important; } /* Pastelltürkis */
      li.ui-tabs-tab:nth-child(9n+6) { background: hsla(200, 60%, 65%, 0.8) !important; } /* Pastellhellblau */
      li.ui-tabs-tab:nth-child(9n+7) { background: hsla(240, 60%, 65%, 0.8) !important; } /* Pastellblau */
      li.ui-tabs-tab:nth-child(9n+8) { background: hsla(280, 60%, 65%, 0.8) !important; } /* Pastelllila */
      li.ui-tabs-tab:nth-child(9n+9) { background: hsla(320, 60%, 65%, 0.8) !important; } /* Pastellrosa */

      li.ui-tabs-tab a span p {
        font-family: Segoe UI !important;
        color:rgba(0, 0, 0, 0.6) !important;
        font-size:18px !important;
        line-height: 0.6;
      }

      .ui-widget-header {
        background: #5c9ccc url("https://wallpapers.com/images/hd/unicorn-art-hk8vqjf1p62dje0j.jpg") 50% 50% no-repeat !important;
        background-size: cover !important;
      }
      `
    },
    {
      name: "Einhorn-Style (Bunt)",
      css: `
      ul.ui-tabs-nav {
      }
      .ui-tabs .ui-tabs-active {
        background-color:purple !important;
        color:white !important;
        backdrop-filter: blur(2px) grayscale(70%) brightness(25%);
        transition:backdrop-filter 600ms;
      }
      li.ui-tabs-tab {
        height: 27.6px !important;
        padding-bottom:0px !important;
        box-shadow: 0px 0px 6px black, 0px -5px 4px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px) grayscale(0%) brightness(130%);
        transition:backdrop-filter 600ms;
      }

      li.ui-tabs-tab:nth-child(9n+1) { background: hsla(  0, 60%, 65%, 0.8) !important; } /* Pastellrot */
      li.ui-tabs-tab:nth-child(9n+2) { background: hsla( 40, 60%, 65%, 0.8) !important; } /* Pastellorange */
      li.ui-tabs-tab:nth-child(9n+3) { background: hsla( 80, 60%, 65%, 0.8) !important; } /* Pastellgelb */
      li.ui-tabs-tab:nth-child(9n+4) { background: hsla(120, 60%, 65%, 0.8) !important; } /* Pastellgrün */
      li.ui-tabs-tab:nth-child(9n+5) { background: hsla(160, 60%, 65%, 0.8) !important; } /* Pastelltürkis */
      li.ui-tabs-tab:nth-child(9n+6) { background: hsla(200, 60%, 65%, 0.8) !important; } /* Pastellhellblau */
      li.ui-tabs-tab:nth-child(9n+7) { background: hsla(240, 60%, 65%, 0.8) !important; } /* Pastellblau */
      li.ui-tabs-tab:nth-child(9n+8) { background: hsla(280, 60%, 65%, 0.8) !important; } /* Pastelllila */
      li.ui-tabs-tab:nth-child(9n+9) { background: hsla(320, 60%, 65%, 0.8) !important; } /* Pastellrosa */

      li.ui-tabs-tab a span p {
        font-family: Segoe UI !important;
        color:rgba(0, 0, 0, 0.6) !important;
        font-size:18px !important;
        line-height: 0.6;
      }

      .ui-widget-header {
        background: #5c9ccc url("https://wallpapers.com/images/hd/unicorn-art-hk8vqjf1p62dje0j.jpg") 50% 50% no-repeat !important;
        background-size: cover !important;
      }
      `
    },
    {
      name: "Glas-Style",
      css: `
      .ui-tabs-nav {
        text-align:center;
      }
      .ui-tabs .ui-tabs-active {
        backdrop-filter: blur(2px) grayscale(70%) brightness(25%);
        transition:backdrop-filter 600ms;
      }
      li.ui-tabs-tab {
        height: 27.6px !important;
        padding-bottom:0px !important;
        background: hsla(240, 60%, 85%, 0.3) !important;
        box-shadow: 0px 0px 6px black, 0px -5px 4px rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px) grayscale(0%) brightness(130%);
        transition:backdrop-filter 600ms;
        margin-left:5px !important;
        margin-right:5px !important;
        float:none !important;
        display:inline-block !important;
        border: 1px solid white !important;
        border-bottom:0px !important;
      }

      li.ui-tabs-tab a span p {
        font-family: Segoe UI !important;
        color:rgba(0, 0, 0, 0.6) !important;
        font-size:18px !important;
        line-height: 0.6;
      }

      .ui-widget-header {
        background: #5c9ccc url("https://moewalls.com/wp-content/uploads/2023/10/forest-pond-rainy-day-thumb.jpg") 50% 50% no-repeat !important;
        background-size: cover !important;
      }
      `
    },
  ],
  debug: false,
  regex: {
    pet: {
      owner: /profile&amp;usr=(\d+)&amp;pet=\d+" class = "pet/gi,
      name: /ui:section .*?title = "(.*?)" id = "profile"/gi,
      gender: /\/\/icons\/([fe]*male)\.png" title = "/gi,
      feed: /ui:progressbar value = "(\d+)" title/gi,
      colors: /rgb: \((\d*), (\d*), (\d*)\)/gi,
      mutations: /species=(\d+)\&amp;mutation=(\d+)|species=(\d+)\&mutation=(\d+)/gi,
      species: /<ui:i><div class = "attr"><p>Spe[c|z]ies<\/p><\/div><div class = "value"><p>(.*?)<\/p><\/div><\/ui:i>/gi, // /div class = "value"><p>(.*?)<\/p>.*?"attr.*?<div/gi,
      hatched: /(\d{4}-\d{2}-\d{2})/gi,
      adoptable: /\/\/icons\/house\.png/gi
    },
    mutations: /mutation=([\d]*)[^"]*" title[^"]*"([^\\]*)\\" width/g,
    colors: /RGB: \(([\d]{1,3}), ([\d]{1,3}), ([\d]{1,3})\)/g,
    friends: /<ui\:i><a href = \\".*?\/(.*?)\\.*?src = \\".*?\/\?(.*?)\\(.*?)i>/gi,
    eggs: /arrow_refresh.*?PetID\[\]\' value = \'(\d+)\' style.*?usr=(\d+)/gi,
    eggsall: /\?src=pets&amp;sub=profile&amp;usr=(\d+)&amp;pet=(\d+)\\\"/gi,
    unnamed: /img=pet&amp;pet=(\d*)&amp;modified=\d*&amp;size=120\\/gi,
    enclosures: /enclosure = &quot;(\d*)&quot;&gt;(.*?)&lt;.*?usr=(\d*)/gi,
    enclosurePet: /house.*?lazy.*?usr=(\d+)&amp;pet=(\d+)/gi,
    enclosurePets: /\?src=pets&amp;sub=profile&amp;usr=(\d+)&amp;pet=(\d+)\\" class/gi,
    enclosurePetsOnly: /usr=(\d+)&amp;pet=(\d+)[\\]*" class = [\\]*"pet[\\]*"><img src = [\\]*"[\\]*\/[\\]*\/im\d\.ovipets\.com[\\]*\/\?img=pet&amp;pet=\d+&amp;modified=\d+&amp;size=(120|150)/gi,
    ninjaPosts: /<ui:i>.*?img=user&amp;usr=(\d+).*?title = \\"(.*?)\\".*?age.*?title = '(.*?)'>.*?parsed_txt'>.*?<\\\/div><\\\/div><\\\/ui:i>/gi,
  },
  renamerRules: [
    '${custom}',
    '${isPure} ${species} ${gender}',
    '${isPure} ${species} ${genderFull}',
    '${rng}',
    '${Farben.Augen.1}',
    '${Farben.Augen.2}',
    '${Farben.Körper.1}',
    '${Farben.Körper.2}',
    '${Farben.Extras.1}',
    '${Farben.Extras.2}',
    '${Farben.Federn.1}',
    '${Farben.Federn.2}',
    '${Farben.Schuppen.1}',
    '${Farben.Schuppen.2}',
    '${Farben.Flossen.1}',
    '${Farben.Flossen.2}',
    '${pet.species} ${rng}',
  ],
  namerVars: [
    {code: `$\{rng}`, desc: `Zufälliger Name`},
    {code: `$\{species}`, desc: `Spezies`},
    {code: `$\{gender}`, desc: `Buchstabe für Geschlecht`},
    {code: `$\{genderFull}`, desc: `Geschlecht ausgeschrieben`},
    {code: `$\{isPure}`, desc: `"PURE", wenn es ein Pure ist`},
    {code: `$\{officialPure}`, desc: `Pure-Erkennung. Gibt "OPURE" zurück`},
    {code: `$\{inofficialPure}`, desc: `Inoffizielle Pure-Erkennung. Gibt "UPURE" zurück`},
    {code: `$\{isGem}`, desc: `"GEM", wenn ein Gem enthalten ist`},
    {code: `$\{gemName}`, desc: `Gibt den Namen des Gem-Sets zurück`},
    {code: `$\{gemName2}`, desc: `Gibt die Namen der erkannten Gem-Sets zurück`},
    {code: `$\{hat("11CCFF")?"JA":"NEIN"}`, desc: `Prüft, ob ein Farbwert vorhanden ist. (#11CCFF geht auch)`},
    {code: `$\{hatched}`, desc: `Schlüpf-Datum im Format YYYY-MM-DD`},
    {code: `$\{pet.id}`, desc: `Die ID des Pets`},
    {code: `$\{Farben.Augen.1}`, desc: `Erste Farbe der Augen`},
    {code: `$\{Farben.Augen.2}`, desc: `Zweite Farbe der Augen`},
    {code: `$\{Farben.Körper.1}`, desc: `Erste Farbe der Körper`},
    {code: `$\{Farben.Körper.2}`, desc: `Zweite Farbe der Körper`},
    {code: `$\{Farben.Extras.1}`, desc: `Erste Farbe der Extras`},
    {code: `$\{Farben.Extras.2}`, desc: `Zweite Farbe der Extras`},
    {code: `$\{Farben.Federn.1}`, desc: `Erste Farbe der Federn`},
    {code: `$\{Farben.Federn.2}`, desc: `Zweite Farbe der Federn`},
    {code: `$\{Farben.Schuppen.1}`, desc: `Erste Farbe der Schuppen`},
    {code: `$\{Farben.Schuppen.2}`, desc: `Zweite Farbe der Schuppen`},
    {code: `$\{Farben.Flossen.1}`, desc: `Erste Farbe der Flossen`},
    {code: `$\{Farben.Flossen.2}`, desc: `Zweite Farbe der Flossen`},
    {code: `$\{pet.name}`, desc: `Gibt den vorherigen Pet-Namen zurück`},
  ],
};
