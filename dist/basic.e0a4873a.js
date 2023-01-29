// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/basic.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var submitYearButton = document.getElementById("submit-data");
var jsonQueryPopulation = {
  "query": [{
    "code": "Alue",
    "selection": {
      "filter": "item",
      "values": ["SSS", "KU020", "KU005", "KU009", "KU010", "KU016", "KU018", "KU019", "KU035", "KU043", "KU046", "KU047", "KU049", "KU050", "KU051", "KU052", "KU060", "KU061", "KU062", "KU065", "KU069", "KU071", "KU072", "KU074", "KU075", "KU076", "KU077", "KU078", "KU079", "KU081", "KU082", "KU086", "KU111", "KU090", "KU091", "KU097", "KU098", "KU102", "KU103", "KU105", "KU106", "KU108", "KU109", "KU139", "KU140", "KU142", "KU143", "KU145", "KU146", "KU153", "KU148", "KU149", "KU151", "KU152", "KU165", "KU167", "KU169", "KU170", "KU171", "KU172", "KU176", "KU177", "KU178", "KU179", "KU181", "KU182", "KU186", "KU202", "KU204", "KU205", "KU208", "KU211", "KU213", "KU214", "KU216", "KU217", "KU218", "KU224", "KU226", "KU230", "KU231", "KU232", "KU233", "KU235", "KU236", "KU239", "KU240", "KU320", "KU241", "KU322", "KU244", "KU245", "KU249", "KU250", "KU256", "KU257", "KU260", "KU261", "KU263", "KU265", "KU271", "KU272", "KU273", "KU275", "KU276", "KU280", "KU284", "KU285", "KU286", "KU287", "KU288", "KU290", "KU291", "KU295", "KU297", "KU300", "KU301", "KU304", "KU305", "KU312", "KU316", "KU317", "KU318", "KU398", "KU399", "KU400", "KU407", "KU402", "KU403", "KU405", "KU408", "KU410", "KU416", "KU417", "KU418", "KU420", "KU421", "KU422", "KU423", "KU425", "KU426", "KU444", "KU430", "KU433", "KU434", "KU435", "KU436", "KU438", "KU440", "KU441", "KU475", "KU478", "KU480", "KU481", "KU483", "KU484", "KU489", "KU491", "KU494", "KU495", "KU498", "KU499", "KU500", "KU503", "KU504", "KU505", "KU508", "KU507", "KU529", "KU531", "KU535", "KU536", "KU538", "KU541", "KU543", "KU545", "KU560", "KU561", "KU562", "KU563", "KU564", "KU309", "KU576", "KU577", "KU578", "KU445", "KU580", "KU581", "KU599", "KU583", "KU854", "KU584", "KU588", "KU592", "KU593", "KU595", "KU598", "KU601", "KU604", "KU607", "KU608", "KU609", "KU611", "KU638", "KU614", "KU615", "KU616", "KU619", "KU620", "KU623", "KU624", "KU625", "KU626", "KU630", "KU631", "KU635", "KU636", "KU678", "KU710", "KU680", "KU681", "KU683", "KU684", "KU686", "KU687", "KU689", "KU691", "KU694", "KU697", "KU698", "KU700", "KU702", "KU704", "KU707", "KU729", "KU732", "KU734", "KU736", "KU790", "KU738", "KU739", "KU740", "KU742", "KU743", "KU746", "KU747", "KU748", "KU791", "KU749", "KU751", "KU753", "KU755", "KU758", "KU759", "KU761", "KU762", "KU765", "KU766", "KU768", "KU771", "KU777", "KU778", "KU781", "KU783", "KU831", "KU832", "KU833", "KU834", "KU837", "KU844", "KU845", "KU846", "KU848", "KU849", "KU850", "KU851", "KU853", "KU857", "KU858", "KU859", "KU886", "KU887", "KU889", "KU890", "KU892", "KU893", "KU895", "KU785", "KU905", "KU908", "KU092", "KU915", "KU918", "KU921", "KU922", "KU924", "KU925", "KU927", "KU931", "KU934", "KU935", "KU936", "KU941", "KU946", "KU976", "KU977", "KU980", "KU981", "KU989", "KU992"]
    }
  }, {
    "code": "Pääasiallinen toiminta",
    "selection": {
      "filter": "item",
      "values": ["SSS"]
    }
  }, {
    "code": "Ikä",
    "selection": {
      "filter": "item",
      "values": ["SSS"]
    }
  }, {
    "code": "Vuosi",
    "selection": {
      "filter": "item",
      "values": ["2020"]
    }
  }],
  "response": {
    "format": "json-stat2"
  }
};
var jsonQueryEmployment = {
  "query": [{
    "code": "Alue",
    "selection": {
      "filter": "item",
      "values": ["SSS", "KU020", "KU005", "KU009", "KU010", "KU016", "KU018", "KU019", "KU035", "KU043", "KU046", "KU047", "KU049", "KU050", "KU051", "KU052", "KU060", "KU061", "KU062", "KU065", "KU069", "KU071", "KU072", "KU074", "KU075", "KU076", "KU077", "KU078", "KU079", "KU081", "KU082", "KU086", "KU111", "KU090", "KU091", "KU097", "KU098", "KU102", "KU103", "KU105", "KU106", "KU108", "KU109", "KU139", "KU140", "KU142", "KU143", "KU145", "KU146", "KU153", "KU148", "KU149", "KU151", "KU152", "KU165", "KU167", "KU169", "KU170", "KU171", "KU172", "KU176", "KU177", "KU178", "KU179", "KU181", "KU182", "KU186", "KU202", "KU204", "KU205", "KU208", "KU211", "KU213", "KU214", "KU216", "KU217", "KU218", "KU224", "KU226", "KU230", "KU231", "KU232", "KU233", "KU235", "KU236", "KU239", "KU240", "KU320", "KU241", "KU322", "KU244", "KU245", "KU249", "KU250", "KU256", "KU257", "KU260", "KU261", "KU263", "KU265", "KU271", "KU272", "KU273", "KU275", "KU276", "KU280", "KU284", "KU285", "KU286", "KU287", "KU288", "KU290", "KU291", "KU295", "KU297", "KU300", "KU301", "KU304", "KU305", "KU312", "KU316", "KU317", "KU318", "KU398", "KU399", "KU400", "KU407", "KU402", "KU403", "KU405", "KU408", "KU410", "KU416", "KU417", "KU418", "KU420", "KU421", "KU422", "KU423", "KU425", "KU426", "KU444", "KU430", "KU433", "KU434", "KU435", "KU436", "KU438", "KU440", "KU441", "KU475", "KU478", "KU480", "KU481", "KU483", "KU484", "KU489", "KU491", "KU494", "KU495", "KU498", "KU499", "KU500", "KU503", "KU504", "KU505", "KU508", "KU507", "KU529", "KU531", "KU535", "KU536", "KU538", "KU541", "KU543", "KU545", "KU560", "KU561", "KU562", "KU563", "KU564", "KU309", "KU576", "KU577", "KU578", "KU445", "KU580", "KU581", "KU599", "KU583", "KU854", "KU584", "KU588", "KU592", "KU593", "KU595", "KU598", "KU601", "KU604", "KU607", "KU608", "KU609", "KU611", "KU638", "KU614", "KU615", "KU616", "KU619", "KU620", "KU623", "KU624", "KU625", "KU626", "KU630", "KU631", "KU635", "KU636", "KU678", "KU710", "KU680", "KU681", "KU683", "KU684", "KU686", "KU687", "KU689", "KU691", "KU694", "KU697", "KU698", "KU700", "KU702", "KU704", "KU707", "KU729", "KU732", "KU734", "KU736", "KU790", "KU738", "KU739", "KU740", "KU742", "KU743", "KU746", "KU747", "KU748", "KU791", "KU749", "KU751", "KU753", "KU755", "KU758", "KU759", "KU761", "KU762", "KU765", "KU766", "KU768", "KU771", "KU777", "KU778", "KU781", "KU783", "KU831", "KU832", "KU833", "KU834", "KU837", "KU844", "KU845", "KU846", "KU848", "KU849", "KU850", "KU851", "KU853", "KU857", "KU858", "KU859", "KU886", "KU887", "KU889", "KU890", "KU892", "KU893", "KU895", "KU785", "KU905", "KU908", "KU092", "KU915", "KU918", "KU921", "KU922", "KU924", "KU925", "KU927", "KU931", "KU934", "KU935", "KU936", "KU941", "KU946", "KU976", "KU977", "KU980", "KU981", "KU989", "KU992"]
    }
  }, {
    "code": "Pendelöinti",
    "selection": {
      "filter": "item",
      "values": ["SSS"]
    }
  }, {
    "code": "Koulutusaste",
    "selection": {
      "filter": "item",
      "values": ["SSS"]
    }
  }, {
    "code": "Ikä",
    "selection": {
      "filter": "item",
      "values": ["SSS"]
    }
  }, {
    "code": "Vuosi",
    "selection": {
      "filter": "item",
      "values": ["2020"]
    }
  }],
  "response": {
    "format": "json-stat2"
  }
};
submitYearButton.addEventListener("click", function (event) {
  event.preventDefault();
  var e = document.getElementById("selectBtn");
  var buttonSelectedValue = e.options[e.selectedIndex].text;
  jsonQueryPopulation.query[3].selection.values = [buttonSelectedValue];
  jsonQueryEmployment.query[4].selection.values = [buttonSelectedValue];
  fetchData();
});
var fetchData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var url, res, municipalityAreaData, url2, res2, url3, res3, populationData, employmentData;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "https://geo.stat.fi/geoserver/wfs?service=WFS&version=2.0.0&request=GetFeature&typeName=tilastointialueet:kunta4500k&outputFormat=json&srsName=EPSG:4326";
            _context.next = 3;
            return fetch(url);
          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();
          case 6:
            municipalityAreaData = _context.sent;
            url2 = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/tyokay/statfin_tyokay_pxt_115b.px";
            _context.next = 10;
            return fetch(url2, {
              method: "POST",
              body: JSON.stringify(jsonQueryPopulation)
            });
          case 10:
            res2 = _context.sent;
            if (res2.ok) {
              _context.next = 13;
              break;
            }
            return _context.abrupt("return");
          case 13:
            url3 = "https://statfin.stat.fi:443/PxWeb/api/v1/en/StatFin/tyokay/statfin_tyokay_pxt_115n.px";
            _context.next = 16;
            return fetch(url3, {
              method: "POST",
              body: JSON.stringify(jsonQueryEmployment)
            });
          case 16:
            res3 = _context.sent;
            if (res3.ok) {
              _context.next = 19;
              break;
            }
            return _context.abrupt("return");
          case 19:
            _context.next = 21;
            return res2.json();
          case 21:
            populationData = _context.sent;
            _context.next = 24;
            return res3.json();
          case 24:
            employmentData = _context.sent;
            //console.log(Object.values(populationData.dimension.Alue.category.label))
            //tulos = {municipalityAreaData, populationData, employmentData}

            //return tulos
            initMap(municipalityAreaData, populationData, employmentData);
          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function fetchData() {
    return _ref.apply(this, arguments);
  };
}();
var initMap = function initMap(municipalityAreaData, populationData, employmentData) {
  var containerDiv = document.getElementById("mapcontainer");
  var element = document.getElementById("map");
  element.remove();
  var newDiv = document.createElement("div");
  newDiv.setAttribute("id", "map");
  containerDiv.appendChild(newDiv);
  var map = L.map("map", {
    minZoom: -3
  });
  //console.log(populationData)
  // basic map of municipalities
  var geoJson = L.geoJSON(municipalityAreaData, {}).addTo(map);

  // colored based on employment rate
  var geoJson2 = L.geoJSON(municipalityAreaData, {
    onEachFeature: function onEachFeature(feature, layer) {
      var name = feature.properties.kunta;
      var actualName = feature.properties.nimi;
      //console.log(name)

      var populationValue = 1;
      var employmentValue = 1;
      var kuntanimi = "KU" + name;
      //console.log(kuntanimi)
      var indeksi = populationData.dimension.Alue.category.index[kuntanimi];

      //console.log(populationData.dimension.Alue.category.index[kuntanimi])
      //console.log(populationData.value[indeksi])

      populationValue = populationData.value[indeksi];
      employmentValue = employmentData.value[indeksi];
      employmentProcent = employmentValue / populationValue * 100;
      var hue = employmentProcent * 1.7;
      employmentProcent = employmentProcent.toFixed(2);
      if (hue > 120) {
        hue = 120;
      }
      layer.bindTooltip("Name: " + actualName);
      layer.bindPopup("<ul>\n                    <li>Employment rate: ".concat(employmentProcent, "%</li>\n                    <li>Population: ").concat(populationValue, "</li>\n                </ul>"));
      //console.log(employmentProcent)
      //console.log(actualName)
      layer.setStyle({
        color: "hsl(".concat(hue, ", 75%, 50%)")
      });
    }
  }).addTo(map);
  var osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap"
  }).addTo(map);
  var baseMaps = {
    "OpenStreetMap": osm
  };
  var overlayMaps = {
    "Municipalities": geoJson,
    "data": geoJson2
  };
  var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
  map.fitBounds(geoJson.getBounds());
};

/*let testifunktio = async () => {
  allDataArray  = await fetchData();
  let e = document.getElementById("selectBtn")
  var buttonSelectedValue = e.options[e.selectedIndex].text
  initMap(allDataArray.municipalityAreaData, allDataArray.populationData, allDataArray.employmentData, buttonSelectedValue)
  console.log(allDataArray)
  console.log("asd?")
}

testifunktio()*/

var e = document.getElementById("selectBtn");
var buttonSelectedValue = e.options[e.selectedIndex].text;
fetchData();
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61603" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/basic.js"], null)
//# sourceMappingURL=/basic.e0a4873a.js.map