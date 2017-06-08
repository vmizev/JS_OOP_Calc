
function Calc() {
	this.methods = {
		"+": function(arg1, arg2) { return arg1 + arg2; },
		"-": function(arg1, arg2) { return arg1 - arg2; },
		"*": function(arg1, arg2) { return arg1 * arg2; },
		"/": function(arg1, arg2) { return arg1 / arg2; }
	};
	this._result = 0;
}

Calc.prototype.hello = function () {
	alert("Привет, я старенький калькулятор");
};

Calc.prototype.init = function () {
	this.hello();
	
	this._firstVal = prompt("Введите первое число", 0);
	this._secondVal = prompt("Введите второе число", 0);
	this._operator = prompt("Введите оператор", "+");
	
	this.canCalc = false;
	
	if (this.validate(this._firstVal)&&this.validate(this._secondVal)) {
		this.canCalc = true;
		this._firstVal = +this._firstVal;
		this._secondVal = +this._secondVal;
	}
	
	this.canCalc ? this.calculate() : alert("Вы ввели не чиcловое значение");
};

Calc.prototype.validate = function (n) {
	return !isNaN(parseFloat(n));
};

Calc.prototype.calculate = function () {
	if (this.methods[this._operator]) {
		this._result = this.methods[this._operator](this._firstVal, this._secondVal);
	} else {
		alert('Упс, что-то пошло не так в вычислении');
	}
	alert(`Результат: ${this._result}`);

};

function CalcEngineer() {
	Calc.apply(this, arguments);
	this.methods["pi"] = function () {return Math.PI.toFixed(5)};
	this.methods["**"] = function (arg) {return arg * arg};
}

CalcEngineer.prototype = Object.create(Calc.prototype);
CalcEngineer.prototype.constructor = CalcEngineer;

CalcEngineer.prototype.addNewMethod = function (name, func) {
	this.methods[name] = func;
};

var calc = new Calc();
//calc.init();

var calcEngineer = new CalcEngineer();

calcEngineer.addNewMethod("+150", function(a, b){return a + b + 150});
console.log(calcEngineer.methods);

calcEngineer.init();