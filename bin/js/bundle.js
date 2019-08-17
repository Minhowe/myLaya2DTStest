var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
//创建舞台，默认背景色是黑色的
Laya.init(600, 300);
var txt = new Laya.Text();
//设置文本内容
txt.text = "Hello Layabox";
//设置文本颜色
txt.color = "#FF0000";
//设置文字的大小单位是像素
txt.fontSize = 66;
//设置字体描边
txt.stroke = 5; //描边为5像素
txt.strokeColor = "#FFFFFF";
//设置为粗体
txt.bold = true;
//设置文本的显示起点位置x，y
txt.pos(60, 100);
//设置舞台背景色
Laya.stage.bgColor = "#23238E";
//将文本内容添加到舞台
Laya.stage.addChild(txt);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9MYXlhQWlySURFLmFwcC9Db250ZW50cy9SZXNvdXJjZXMvYXBwL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvSGVsbG9MYXlhYm94LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNWQSxnQkFBZ0I7QUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDcEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsUUFBUTtBQUNSLEdBQUcsQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0FBQzNCLFFBQVE7QUFDUixHQUFHLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUN0QixjQUFjO0FBQ2QsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbEIsUUFBUTtBQUNSLEdBQUcsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUEsUUFBUTtBQUNyQixHQUFHLENBQUMsV0FBVyxHQUFFLFNBQVMsQ0FBQztBQUMzQixPQUFPO0FBQ1AsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsZ0JBQWdCO0FBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFNBQVM7QUFDVCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUE7QUFDOUIsWUFBWTtBQUNaLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxuKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8v5Yib5bu66Iie5Y+w77yM6buY6K6k6IOM5pmv6Imy5piv6buR6Imy55qEXG5MYXlhLmluaXQoNjAwLCAzMDApO1xudmFyIHR4dCA9IG5ldyBMYXlhLlRleHQoKTtcbi8v6K6+572u5paH5pys5YaF5a65XG50eHQudGV4dCA9IFwiSGVsbG8gTGF5YWJveFwiO1xuLy/orr7nva7mlofmnKzpopzoibJcbnR4dC5jb2xvciA9IFwiI0ZGMDAwMFwiO1xuLy/orr7nva7mloflrZfnmoTlpKflsI/ljZXkvY3mmK/lg4/ntKBcbnR4dC5mb250U2l6ZSA9IDY2O1xuLy/orr7nva7lrZfkvZPmj4/ovrlcbnR4dC5zdHJva2U9NTsvL+aPj+i+ueS4ujXlg4/ntKBcbnR4dC5zdHJva2VDb2xvciA9XCIjRkZGRkZGXCI7XG4vL+iuvue9ruS4uueyl+S9k1xudHh0LmJvbGQgPSB0cnVlO1xuLy/orr7nva7mlofmnKznmoTmmL7npLrotbfngrnkvY3nva5477yMeVxudHh0LnBvcyg2MCwgMTAwKTtcbi8v6K6+572u6Iie5Y+w6IOM5pmv6ImyXG5MYXlhLnN0YWdlLmJnQ29sb3IgPSBcIiMyMzIzOEVcIlxuLy/lsIbmlofmnKzlhoXlrrnmt7vliqDliLDoiJ7lj7BcbkxheWEuc3RhZ2UuYWRkQ2hpbGQodHh0KTsiXX0=
