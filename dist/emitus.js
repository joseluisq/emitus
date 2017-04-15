module.exports=function(n){void 0===n&&(n={});var i={};return Object.assign({on:function(n,o){(i[n]||(i[n]=[])).push(o)},off:function(n,o){void 0===o&&(o=null),i[n]&&i[n].splice(i[n].indexOf(o),1)},emit:function(n,o){var t=this;void 0===o&&(o=[]),(i[n]||[]).map(function(n){n&&"function"==typeof n&&n.apply(t,o)})}},n)};
//# sourceMappingURL=emitus.js.map
