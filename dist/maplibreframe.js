(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.Calculation = require('./src/maplibreframe.js')

},{"./src/maplibreframe.js":2}],2:[function(require,module,exports){
// @author: jinghaohu
// @date: 2015-12-15
// @description: 计算类


// 计算类包含加减乘除 以及取余 以及取整 以及取绝对值 以及取最大值 以及取最小值 以及取平方根 以及取立方根 以及取

function Calculation(a,b){
    this.a = a;
    this.b = b;
};

// 加法
Calculation.prototype.add = function(){
    return this.a + this.b;
}

// 减法
Calculation.prototype.sub = function(){
    return this.a - this.b;
}

// 乘法
Calculation.prototype.mul = function(){
    return this.a * this.b;
}

// 除法
Calculation.prototype.div = function(){
    return this.a / this.b;
}

// 取余
Calculation.prototype.mod = function(){
    return this.a % this.b;
}

// 取整
Calculation.prototype.int = function(){
    return parseInt(this.a);
}

// 取绝对值
Calculation.prototype.abs = function(){
    return Math.abs(this.a);
}

// 取最大值
Calculation.prototype.max = function(){
    return Math.max(this.a,this.b);
}

// 取最小值
Calculation.prototype.min = function(){
    return Math.min(this.a,this.b);
}

// 取平方根
Calculation.prototype.sqrt = function(){
    return Math.sqrt(this.a);
}

// 取立方根
Calculation.prototype.cbrt = function(){
    return Math.cbrt(this.a);
}

// 取n次方
Calculation.prototype.pow = function(){
    return Math.pow(this.a,this.b);
}

module.exports = exports = Calculation;
},{}]},{},[1]);
