'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );

  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

  // 準備承載 *網頁內容* 的 HTML 元素

  let cardNameInput = Html('input')
    .setClass('input');

    document.getElementById("cardNameInput").placeholder = "帳號";

  let cardNameP = Html('p')
    .setClass('control')
    .appendChild(cardNameInput.node);

  let cardNameLabel = Html('label')
    .setClass('control-label')
    .setAttribute('innerHTML','姓名：');

  let cardName = Html('div')
    .setClass('h-field')
    .appendChild(cardNameLabel.node)
    .appendChild(cardNameP.node);

  let cardHpInput = Html('input')
    .setClass('input');

  let cardHpP = Html('p')
    .setClass('control')
    .appendChild(cardHpInput.node);

  let cardHpLabel = Html('label')
    .setClass('control-label')
    .setAttribute('placeholder','10')
    .setAttribute('innerHTML','血量：');

  let cardHp = Html('div')
    .setClass('h-field')
    .appendChild(cardHpLabel.node)
    .appendChild(cardHpP.node);

  let cardApInput = Html('input')
    .setClass('input');

  let cardApP = Html('p')
    .setClass('control')
    .appendChild(cardApInput.node);

  let cardApLabel = Html('label')
    .setClass('control-label')
    .setAttribute('placeholder','1')
    .setAttribute('innerHTML','攻擊力：');

  let cardAp = Html('div')
    .setClass('h-field')
    .appendChild(cardApLabel.node)
    .appendChild(cardApP.node);

  let cardDpInput = Html('input')
    .setClass('input');

  let cardDpP = Html('p')
    .setClass('control')
    .appendChild(cardDpInput.node);

  let cardDpLabel = Html('label')
    .setClass('control-label')
    .setAttribute('placeholder','0')
    .setAttribute('innerHTML','防禦力：');

  let cardDp = Html('div')
    .setClass('h-field')

    .appendChild(cardDpLabel.node)
    .appendChild(cardDpP.node);


  let cardPane = Html('div')
    .setClass('pane')
    .appendChild(cardName.node)
    .appendChild(cardHp.node)
    .appendChild(cardAp.node)
    .appendChild(cardDp.node);

  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(cardPane.node);

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
