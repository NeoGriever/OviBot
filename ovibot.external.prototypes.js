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
  HTMLElement.prototype.addCat = function (clickable = false, clickevent = null) {
    if(clickable === true) {
      let cat = main.tools.createElement(`div`, `catbox clickableStyled`);
      cat.addEventListener(`click`, clickevent, true);
      this.in(cat);
      return cat;
    } else {
      let cat = main.tools.createElement(`div`, `catbox ${clickable}`, clickevent);
      this.in(cat);
      return cat;
    }
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
