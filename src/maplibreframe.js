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