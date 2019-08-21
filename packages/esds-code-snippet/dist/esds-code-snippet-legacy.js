'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime_1 = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;

        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
            return Promise.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function stop() {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function complete(record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
});

var prism = createCommonjsModule(function (module) {
  /* **********************************************
       Begin prism-core.js
  ********************************************** */
  var _self = typeof window !== 'undefined' ? window // if in browser
  : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
  : {} // if in node js
  ;
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   * MIT license http://www.opensource.org/licenses/mit-license.php/
   * @author Lea Verou http://lea.verou.me
   */


  var Prism = function (_self) {
    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;
    var _ = {
      manual: _self.Prism && _self.Prism.manual,
      disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
      util: {
        encode: function encode(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
          } else if (Array.isArray(tokens)) {
            return tokens.map(_.util.encode);
          } else {
            return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
          }
        },
        type: function type(o) {
          return Object.prototype.toString.call(o).slice(8, -1);
        },
        objId: function objId(obj) {
          if (!obj['__id']) {
            Object.defineProperty(obj, '__id', {
              value: ++uniqueId
            });
          }

          return obj['__id'];
        },
        // Deep clone a language definition (e.g. to extend it)
        clone: function deepClone(o, visited) {
          var clone,
              id,
              type = _.util.type(o);

          visited = visited || {};

          switch (type) {
            case 'Object':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone = {};
              visited[id] = clone;

              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = deepClone(o[key], visited);
                }
              }

              return clone;

            case 'Array':
              id = _.util.objId(o);

              if (visited[id]) {
                return visited[id];
              }

              clone = [];
              visited[id] = clone;
              o.forEach(function (v, i) {
                clone[i] = deepClone(v, visited);
              });
              return clone;

            default:
              return o;
          }
        }
      },
      languages: {
        extend: function extend(id, redef) {
          var lang = _.util.clone(_.languages[id]);

          for (var key in redef) {
            lang[key] = redef[key];
          }

          return lang;
        },

        /**
         * Insert a token before another token in a language literal
         * As this needs to recreate the object (we cannot actually insert before keys in object literals),
         * we cannot just provide an object, we need an object and a key.
         * @param inside The key (or language id) of the parent
         * @param before The key to insert before.
         * @param insert Object with the key/value pairs to insert
         * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
         */
        insertBefore: function insertBefore(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          var ret = {};

          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              } // Do not insert token which also occur in insert. See #1525


              if (!insert.hasOwnProperty(token)) {
                ret[token] = grammar[token];
              }
            }
          }

          var old = root[inside];
          root[inside] = ret; // Update references in other language definitions

          _.languages.DFS(_.languages, function (key, value) {
            if (value === old && key != inside) {
              this[key] = ret;
            }
          });

          return ret;
        },
        // Traverse a language definition with Depth First Search
        DFS: function DFS(o, callback, type, visited) {
          visited = visited || {};
          var objId = _.util.objId;

          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);

              var property = o[i],
                  propertyType = _.util.type(property);

              if (propertyType === 'Object' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, null, visited);
              } else if (propertyType === 'Array' && !visited[objId(property)]) {
                visited[objId(property)] = true;
                DFS(property, callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function highlightAll(async, callback) {
        _.highlightAllUnder(document, async, callback);
      },
      highlightAllUnder: function highlightAllUnder(container, async, callback) {
        var env = {
          callback: callback,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };

        _.hooks.run('before-highlightall', env);

        var elements = container.querySelectorAll(env.selector);

        for (var i = 0, element; element = elements[i++];) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function highlightElement(element, async, callback) {
        // Find language
        var language = 'none',
            grammar,
            parent = element;

        while (parent && !lang.test(parent.className)) {
          parent = parent.parentNode;
        }

        if (parent) {
          language = (parent.className.match(lang) || [, 'none'])[1].toLowerCase();
          grammar = _.languages[language];
        } // Set language on the element, if not present


        element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

        if (element.parentNode) {
          // Set language on the parent, for styling
          parent = element.parentNode;

          if (/pre/i.test(parent.nodeName)) {
            parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
          }
        }

        var code = element.textContent;
        var env = {
          element: element,
          language: language,
          grammar: grammar,
          code: code
        };

        var insertHighlightedCode = function insertHighlightedCode(highlightedCode) {
          env.highlightedCode = highlightedCode;

          _.hooks.run('before-insert', env);

          env.element.innerHTML = env.highlightedCode;

          _.hooks.run('after-highlight', env);

          _.hooks.run('complete', env);

          callback && callback.call(env.element);
        };

        _.hooks.run('before-sanity-check', env);

        if (!env.code) {
          _.hooks.run('complete', env);

          return;
        }

        _.hooks.run('before-highlight', env);

        if (!env.grammar) {
          insertHighlightedCode(_.util.encode(env.code));
          return;
        }

        if (async && _self.Worker) {
          var worker = new Worker(_.filename);

          worker.onmessage = function (evt) {
            insertHighlightedCode(evt.data);
          };

          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        }
      },
      highlight: function highlight(text, grammar, language) {
        var env = {
          code: text,
          grammar: grammar,
          language: language
        };

        _.hooks.run('before-tokenize', env);

        env.tokens = _.tokenize(env.code, env.grammar);

        _.hooks.run('after-tokenize', env);

        return Token.stringify(_.util.encode(env.tokens), env.language);
      },
      matchGrammar: function matchGrammar(text, strarr, grammar, index, startPos, oneshot, target) {
        for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }

          if (token == target) {
            return;
          }

          var patterns = grammar[token];
          patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

          for (var j = 0; j < patterns.length; ++j) {
            var pattern = patterns[j],
                inside = pattern.inside,
                lookbehind = !!pattern.lookbehind,
                greedy = !!pattern.greedy,
                lookbehindLength = 0,
                alias = pattern.alias;

            if (greedy && !pattern.pattern.global) {
              // Without the global flag, lastIndex won't work
              var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
              pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
            }

            pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

            for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
              var str = strarr[i];

              if (strarr.length > text.length) {
                // Something went terribly wrong, ABORT, ABORT!
                return;
              }

              if (str instanceof Token) {
                continue;
              }

              if (greedy && i != strarr.length - 1) {
                pattern.lastIndex = pos;
                var match = pattern.exec(text);

                if (!match) {
                  break;
                }

                var from = match.index + (lookbehind ? match[1].length : 0),
                    to = match.index + match[0].length,
                    k = i,
                    p = pos;

                for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                  p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                  if (from >= p) {
                    ++i;
                    pos = p;
                  }
                } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


                if (strarr[i] instanceof Token) {
                  continue;
                } // Number of tokens to delete and replace with the new match


                delNum = k - i;
                str = text.slice(pos, p);
                match.index -= pos;
              } else {
                pattern.lastIndex = 0;
                var match = pattern.exec(str),
                    delNum = 1;
              }

              if (!match) {
                if (oneshot) {
                  break;
                }

                continue;
              }

              if (lookbehind) {
                lookbehindLength = match[1] ? match[1].length : 0;
              }

              var from = match.index + lookbehindLength,
                  match = match[0].slice(lookbehindLength),
                  to = from + match.length,
                  before = str.slice(0, from),
                  after = str.slice(to);
              var args = [i, delNum];

              if (before) {
                ++i;
                pos += before.length;
                args.push(before);
              }

              var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
              args.push(wrapped);

              if (after) {
                args.push(after);
              }

              Array.prototype.splice.apply(strarr, args);
              if (delNum != 1) _.matchGrammar(text, strarr, grammar, i, pos, true, token);
              if (oneshot) break;
            }
          }
        }
      },
      tokenize: function tokenize(text, grammar) {
        var strarr = [text];
        var rest = grammar.rest;

        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }

          delete grammar.rest;
        }

        _.matchGrammar(text, strarr, grammar, 0, 0, false);

        return strarr;
      },
      hooks: {
        all: {},
        add: function add(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function run(name, env) {
          var callbacks = _.hooks.all[name];

          if (!callbacks || !callbacks.length) {
            return;
          }

          for (var i = 0, callback; callback = callbacks[i++];) {
            callback(env);
          }
        }
      },
      Token: Token
    };
    _self.Prism = _;

    function Token(type, content, alias, matchedStr, greedy) {
      this.type = type;
      this.content = content;
      this.alias = alias; // Copy of the full string this token was created from

      this.length = (matchedStr || "").length | 0;
      this.greedy = !!greedy;
    }

    Token.stringify = function (o, language) {
      if (typeof o == 'string') {
        return o;
      }

      if (Array.isArray(o)) {
        return o.map(function (element) {
          return Token.stringify(element, language);
        }).join('');
      }

      var env = {
        type: o.type,
        content: Token.stringify(o.content, language),
        tag: 'span',
        classes: ['token', o.type],
        attributes: {},
        language: language
      };

      if (o.alias) {
        var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
        Array.prototype.push.apply(env.classes, aliases);
      }

      _.hooks.run('wrap', env);

      var attributes = Object.keys(env.attributes).map(function (name) {
        return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
      }).join(' ');
      return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
    };

    if (!_self.document) {
      if (!_self.addEventListener) {
        // in Node.js
        return _;
      }

      if (!_.disableWorkerMessageHandler) {
        // In worker
        _self.addEventListener('message', function (evt) {
          var message = JSON.parse(evt.data),
              lang = message.language,
              code = message.code,
              immediateClose = message.immediateClose;

          _self.postMessage(_.highlight(code, _.languages[lang], lang));

          if (immediateClose) {
            _self.close();
          }
        }, false);
      }

      return _;
    } //Get current script and highlight


    var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

    if (script) {
      _.filename = script.src;

      if (!_.manual && !script.hasAttribute('data-manual')) {
        if (document.readyState !== "loading") {
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(_.highlightAll);
          } else {
            window.setTimeout(_.highlightAll, 16);
          }
        } else {
          document.addEventListener('DOMContentLoaded', _.highlightAll);
        }
      }
    }

    return _;
  }(_self);

  if ( module.exports) {
    module.exports = Prism;
  } // hack for components to work correctly in node.js


  if (typeof commonjsGlobal !== 'undefined') {
    commonjsGlobal.Prism = Prism;
  }
  /* **********************************************
       Begin prism-markup.js
  ********************************************** */


  Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': /<!DOCTYPE[\s\S]+?>/i,
    'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
    'tag': {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        'tag': {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            'punctuation': /^<\/?/,
            'namespace': /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            'punctuation': [/^=/, {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }]
          }
        },
        'punctuation': /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            'namespace': /^[^\s>\/:]+:/
          }
        }
      }
    },
    'entity': /&#?[\da-z]{1,8};/i
  };
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

  Prism.hooks.add('wrap', function (env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
  });
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {};
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      };
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      };
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      };
      var def = {};
      def[tagName] = {
        pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
        lookbehind: true,
        greedy: true,
        inside: inside
      };
      Prism.languages.insertBefore('markup', 'cdata', def);
    }
  });
  Prism.languages.xml = Prism.languages.extend('markup', {});
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  /* **********************************************
       Begin prism-css.js
  ********************************************** */

  (function (Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
    Prism.languages.css = {
      'comment': /\/\*[\s\S]*?\*\//,
      'atrule': {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          'rule': /@[\w-]+/ // See rest below

        }
      },
      'url': {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          'function': /^url/i,
          'punctuation': /^\(|\)$/
        }
      },
      'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
      'string': {
        pattern: string,
        greedy: true
      },
      'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      'important': /!important\b/i,
      'function': /[-a-z0-9]+(?=\()/i,
      'punctuation': /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;

    if (markup) {
      markup.tag.addInlined('style', 'css');
      Prism.languages.insertBefore('inside', 'attr-value', {
        'style-attr': {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            'attr-name': {
              pattern: /^\s*style/i,
              inside: markup.tag.inside
            },
            'punctuation': /^\s*=\s*['"]|['"]\s*$/,
            'attr-value': {
              pattern: /.+/i,
              inside: Prism.languages.css
            }
          },
          alias: 'language-css'
        }
      }, markup.tag);
    }
  })(Prism);
  /* **********************************************
       Begin prism-clike.js
  ********************************************** */


  Prism.languages.clike = {
    'comment': [{
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }],
    'string': {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(?:true|false)\b/,
    'function': /\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
  };
  /* **********************************************
       Begin prism-javascript.js
  ********************************************** */

  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [Prism.languages.clike['class-name'], {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: true
    }],
    'keyword': [{
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true
    }, {
      pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }],
    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  });
  Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
  Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    'parameter': [{
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: Prism.languages.javascript
    }, {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }, {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  });
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'interpolation': {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        'string': /[\s\S]+/
      }
    }
  });

  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript');
  }

  Prism.languages.js = Prism.languages.javascript;
  /* **********************************************
       Begin prism-file-highlight.js
  ********************************************** */

  (function () {
    if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
      return;
    }
    /**
     * @param {Element} [container=document]
     */


    self.Prism.fileHighlight = function (container) {
      container = container || document;
      var Extensions = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
      };
      Array.prototype.slice.call(container.querySelectorAll('pre[data-src]')).forEach(function (pre) {
        // ignore if already loaded
        if (pre.hasAttribute('data-src-loaded')) {
          return;
        } // load current


        var src = pre.getAttribute('data-src');
        var language,
            parent = pre;
        var lang = /\blang(?:uage)?-([\w-]+)\b/i;

        while (parent && !lang.test(parent.className)) {
          parent = parent.parentNode;
        }

        if (parent) {
          language = (pre.className.match(lang) || [, ''])[1];
        }

        if (!language) {
          var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
          language = Extensions[extension] || extension;
        }

        var code = document.createElement('code');
        code.className = 'language-' + language;
        pre.textContent = '';
        code.textContent = 'Loading…';
        pre.appendChild(code);
        var xhr = new XMLHttpRequest();
        xhr.open('GET', src, true);

        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if (xhr.status < 400 && xhr.responseText) {
              code.textContent = xhr.responseText;
              Prism.highlightElement(code); // mark as loaded

              pre.setAttribute('data-src-loaded', '');
            } else if (xhr.status >= 400) {
              code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
            } else {
              code.textContent = '✖ Error: File does not exist or is empty';
            }
          }
        };

        xhr.send(null);
      });

      if (Prism.plugins.toolbar) {
        Prism.plugins.toolbar.registerButton('download-file', function (env) {
          var pre = env.element.parentNode;

          if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-src') || !pre.hasAttribute('data-download-link')) {
            return;
          }

          var src = pre.getAttribute('data-src');
          var a = document.createElement('a');
          a.textContent = pre.getAttribute('data-download-link-label') || 'Download';
          a.setAttribute('download', '');
          a.href = src;
          return a;
        });
      }
    };

    document.addEventListener('DOMContentLoaded', function () {
      // execute inside handler, for dropping Event as argument
      self.Prism.fileHighlight();
    });
  })();
});

/*jshint node:true */

function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0; // use indent_count as a marker for this.__lines that have preserved indentation

  this.__indent_count = -1;
  this.__alignment_count = 0;
  this.__wrap_point_index = 0;
  this.__wrap_point_character_count = 0;
  this.__wrap_point_indent_count = -1;
  this.__wrap_point_alignment_count = 0;
  this.__items = [];
}

OutputLine.prototype.clone_empty = function () {
  var line = new OutputLine(this.__parent);
  line.set_indent(this.__indent_count, this.__alignment_count);
  return line;
};

OutputLine.prototype.item = function (index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function (pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }

  return false;
};

OutputLine.prototype.set_indent = function (indent, alignment) {
  if (this.is_empty()) {
    this.__indent_count = indent || 0;
    this.__alignment_count = alignment || 0;
    this.__character_count = this.__parent.get_indent_size(this.__indent_count, this.__alignment_count);
  }
};

OutputLine.prototype._set_wrap_point = function () {
  if (this.__parent.wrap_line_length) {
    this.__wrap_point_index = this.__items.length;
    this.__wrap_point_character_count = this.__character_count;
    this.__wrap_point_indent_count = this.__parent.next_line.__indent_count;
    this.__wrap_point_alignment_count = this.__parent.next_line.__alignment_count;
  }
};

OutputLine.prototype._should_wrap = function () {
  return this.__wrap_point_index && this.__character_count > this.__parent.wrap_line_length && this.__wrap_point_character_count > this.__parent.next_line.__character_count;
};

OutputLine.prototype._allow_wrap = function () {
  if (this._should_wrap()) {
    this.__parent.add_new_line();

    var next = this.__parent.current_line;
    next.set_indent(this.__wrap_point_indent_count, this.__wrap_point_alignment_count);
    next.__items = this.__items.slice(this.__wrap_point_index);
    this.__items = this.__items.slice(0, this.__wrap_point_index);
    next.__character_count += this.__character_count - this.__wrap_point_character_count;
    this.__character_count = this.__wrap_point_character_count;

    if (next.__items[0] === " ") {
      next.__items.splice(0, 1);

      next.__character_count -= 1;
    }

    return true;
  }

  return false;
};

OutputLine.prototype.is_empty = function () {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function () {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function (item) {
  this.__items.push(item);

  var last_newline_index = item.lastIndexOf('\n');

  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  } else {
    this.__character_count += item.length;
  }
};

OutputLine.prototype.pop = function () {
  var item = null;

  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }

  return item;
};

OutputLine.prototype._remove_indent = function () {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_size;
  }
};

OutputLine.prototype._remove_wrap_indent = function () {
  if (this.__wrap_point_indent_count > 0) {
    this.__wrap_point_indent_count -= 1;
  }
};

OutputLine.prototype.trim = function () {
  while (this.last() === ' ') {
    this.__items.pop();

    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function () {
  var result = '';

  if (this.is_empty()) {
    if (this.__parent.indent_empty_lines) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
  } else {
    result = this.__parent.get_indent_string(this.__indent_count, this.__alignment_count);
    result += this.__items.join('');
  }

  return result;
};

function IndentStringCache(options, baseIndentString) {
  this.__cache = [''];
  this.__indent_size = options.indent_size;
  this.__indent_string = options.indent_char;

  if (!options.indent_with_tabs) {
    this.__indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  } // Set to null to continue support for auto detection of base indent


  baseIndentString = baseIndentString || '';

  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(this.__indent_string);
  }

  this.__base_string = baseIndentString;
  this.__base_string_length = baseIndentString.length;
}

IndentStringCache.prototype.get_indent_size = function (indent, column) {
  var result = this.__base_string_length;
  column = column || 0;

  if (indent < 0) {
    result = 0;
  }

  result += indent * this.__indent_size;
  result += column;
  return result;
};

IndentStringCache.prototype.get_indent_string = function (indent_level, column) {
  var result = this.__base_string;
  column = column || 0;

  if (indent_level < 0) {
    indent_level = 0;
    result = '';
  }

  column += indent_level * this.__indent_size;

  this.__ensure_cache(column);

  result += this.__cache[column];
  return result;
};

IndentStringCache.prototype.__ensure_cache = function (column) {
  while (column >= this.__cache.length) {
    this.__add_column();
  }
};

IndentStringCache.prototype.__add_column = function () {
  var column = this.__cache.length;
  var indent = 0;
  var result = '';

  if (this.__indent_size && column >= this.__indent_size) {
    indent = Math.floor(column / this.__indent_size);
    column -= indent * this.__indent_size;
    result = new Array(indent + 1).join(this.__indent_string);
  }

  if (column) {
    result += new Array(column + 1).join(' ');
  }

  this.__cache.push(result);
};

function Output(options, baseIndentString) {
  this.__indent_cache = new IndentStringCache(options, baseIndentString);
  this.raw = false;
  this._end_with_newline = options.end_with_newline;
  this.indent_size = options.indent_size;
  this.wrap_line_length = options.wrap_line_length;
  this.indent_empty_lines = options.indent_empty_lines;
  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.next_line = new OutputLine(this);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false; // initialize

  this.__add_outputline();
}

Output.prototype.__add_outputline = function () {
  this.previous_line = this.current_line;
  this.current_line = this.next_line.clone_empty();

  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function () {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function (indent, column) {
  return this.__indent_cache.get_indent_string(indent, column);
};

Output.prototype.get_indent_size = function (indent, column) {
  return this.__indent_cache.get_indent_size(indent, column);
};

Output.prototype.is_empty = function () {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function (force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() || !force_newline && this.just_added_newline()) {
    return false;
  } // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had


  if (!this.raw) {
    this.__add_outputline();
  }

  return true;
};

Output.prototype.get_code = function (eol) {
  this.trim(true); // handle some edge cases where the last tokens
  // has text that ends with newline(s)

  var last_item = this.current_line.pop();

  if (last_item) {
    if (last_item[last_item.length - 1] === '\n') {
      last_item = last_item.replace(/\n+$/g, '');
    }

    this.current_line.push(last_item);
  }

  if (this._end_with_newline) {
    this.__add_outputline();
  }

  var sweet_code = this.__lines.join('\n');

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }

  return sweet_code;
};

Output.prototype.set_wrap_point = function () {
  this.current_line._set_wrap_point();
};

Output.prototype.set_indent = function (indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0; // Next line stores alignment values

  this.next_line.set_indent(indent, alignment); // Never indent your first output indent at the start of the file

  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }

  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function (token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }

  this.current_line.set_indent(-1);
  this.current_line.push(token.whitespace_before);
  this.current_line.push(token.text);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = false;
};

Output.prototype.add_token = function (printable_token) {
  this.__add_space_before_token();

  this.current_line.push(printable_token);
  this.space_before_token = false;
  this.non_breaking_space = false;
  this.previous_token_wrapped = this.current_line._allow_wrap();
};

Output.prototype.__add_space_before_token = function () {
  if (this.space_before_token && !this.just_added_newline()) {
    if (!this.non_breaking_space) {
      this.set_wrap_point();
    }

    this.current_line.push(' ');
  }
};

Output.prototype.remove_indent = function (index) {
  var output_length = this.__lines.length;

  while (index < output_length) {
    this.__lines[index]._remove_indent();

    index++;
  }

  this.current_line._remove_wrap_indent();
};

Output.prototype.trim = function (eat_newlines) {
  eat_newlines = eat_newlines === undefined ? false : eat_newlines;
  this.current_line.trim();

  while (eat_newlines && this.__lines.length > 1 && this.current_line.is_empty()) {
    this.__lines.pop();

    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function () {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function () {
  return this.is_empty() || this.current_line.is_empty() && this.previous_line.is_empty();
};

Output.prototype.ensure_empty_line_above = function (starts_with, ends_with) {
  var index = this.__lines.length - 2;

  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];

    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 && potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));

      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }

    index--;
  }
};

var Output_1 = Output;
var output = {
  Output: Output_1
};

/*jshint node:true */

function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text; // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before

  this.comments_before = null;
  /* inline comment*/
  // this.comments_after =  new TokenStream(); // no new line before and newline after

  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}

var Token_1 = Token;
var token = {
  Token: Token_1
};

var acorn = createCommonjsModule(function (module, exports) {
  // Beautifier is okay without that, so we're using regex
  // permit $ (36) and @ (64). @ is used in ES7 decorators.
  // 65 through 91 are uppercase letters.
  // permit _ (95).
  // 97 through 123 are lowercase letters.

  var baseASCIIidentifierStartChars = "\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a"; // inside an identifier @ is not allowed but 0-9 are.

  var baseASCIIidentifierChars = "\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a"; // Big ugly regular expressions that match characters in the
  // whitespace, identifier, and identifier-start categories. These
  // are only applied when a character is found to actually have a
  // code point above 128.

  var nonASCIIidentifierStartChars = "\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
  var nonASCIIidentifierChars = "\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f"; //var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  //var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

  var identifierStart = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "])";
  var identifierChars = "(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])*";
  exports.identifier = new RegExp(identifierStart + identifierChars, 'g');
  exports.identifierStart = new RegExp(identifierStart);
  exports.identifierMatch = new RegExp("(?:\\\\u[0-9a-fA-F]{4}|[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "])+");
  // Whether a single character denotes a newline.

  exports.newline = /[\n\r\u2028\u2029]/; // Matches a whole line break (where CRLF is considered a single
  // line break). Used to count lines.
  // in javascript, these two differ
  // in python they are the same, different methods are called on them

  exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
  exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');
});
var acorn_1 = acorn.identifier;
var acorn_2 = acorn.identifierStart;
var acorn_3 = acorn.identifierMatch;
var acorn_4 = acorn.newline;
var acorn_5 = acorn.lineBreak;
var acorn_6 = acorn.allLineBreaks;

/*jshint node:true */

function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field); // Support passing the source text back with no change

  this.disabled = this._get_boolean('disabled');
  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');
  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);

  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs', this.indent_char === '\t');

  if (this.indent_with_tabs) {
    this.indent_char = '\t'; // indent_size behavior changed after 1.8.6
    // It used to be that indent_size would be
    // set to 1 for indent_with_tabs. That is no longer needed and
    // actually doesn't make sense - why not use spaces? Further,
    // that might produce unexpected behavior - tabs being used
    // for single-column alignment. So, when indent_with_tabs is true
    // and indent_size is 1, reset indent_size to 4.

    if (this.indent_size === 1) {
      this.indent_size = 4;
    }
  } // Backwards compat with 1.3.x


  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));
  this.indent_empty_lines = this._get_boolean('indent_empty_lines'); // valid templating languages ['django', 'erb', 'handlebars', 'php']
  // For now, 'auto' = all off for javascript, all on for html (and inline javascript).
  // other values ignored

  this.templating = this._get_selection_list('templating', ['auto', 'none', 'django', 'erb', 'handlebars', 'php'], ['auto']);
}

Options.prototype._get_array = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];

  if (_typeof(option_value) === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }

  return result;
};

Options.prototype._get_boolean = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function (name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';

  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }

  return result;
};

Options.prototype._get_number = function (name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);

  if (isNaN(default_value)) {
    default_value = 0;
  }

  var result = parseInt(option_value, 10);

  if (isNaN(result)) {
    result = default_value;
  }

  return result;
};

Options.prototype._get_selection = function (name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);

  if (result.length !== 1) {
    throw new Error("Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};

Options.prototype._get_selection_list = function (name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];

  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);

  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error("Invalid Option Value: The option '" + name + "' can contain only the following values:\n" + selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function (result, selection_list) {
  return result.length && selection_list.length && !result.some(function (item) {
    return selection_list.indexOf(item) === -1;
  });
}; // merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}


function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  } //merge in the per type settings for the childFieldName


  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }

  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }

  return convertedOpts;
}

var Options_1 = Options;
var normalizeOpts = _normalizeOpts;
var mergeOpts = _mergeOpts;
var options = {
  Options: Options_1,
  normalizeOpts: normalizeOpts,
  mergeOpts: mergeOpts
};

var BaseOptions = options.Options;
var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

function Options$1(options) {
  BaseOptions.call(this, options, 'js'); // compatibility, re

  var raw_brace_style = this.raw_options.brace_style || null;

  if (raw_brace_style === "expand-strict") {
    //graceful handling of deprecated option
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") {
    //graceful handling of deprecated option
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== undefined) {
    //graceful handling of deprecated option
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse"; // } else if (!raw_brace_style) { //Nothing exists to set it
    //   raw_brace_style = "collapse";
  } //preserve-inline in delimited string will trigger brace_preserve_inline, everything
  //else is considered a brace_style and the last one only will have an effect


  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option

  this.brace_style = "collapse";

  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }

  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
  this.break_chained_methods = this._get_boolean('break_chained_methods');
  this.space_in_paren = this._get_boolean('space_in_paren');
  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
  this.jslint_happy = this._get_boolean('jslint_happy');
  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
  this.space_after_named_function = this._get_boolean('space_after_named_function');
  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
  this.unescape_strings = this._get_boolean('unescape_strings');
  this.e4x = this._get_boolean('e4x');
  this.comma_first = this._get_boolean('comma_first');
  this.operator_position = this._get_selection('operator_position', validPositionValues); // For testing of beautify preserve:start directive

  this.test_output_raw = this._get_boolean('test_output_raw'); // force this._options.space_after_anon_function to true if this._options.jslint_happy

  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }
}

Options$1.prototype = new BaseOptions();
var Options_1$1 = Options$1;
var options$1 = {
  Options: Options_1$1
};

/*jshint node:true */

var regexp_has_sticky = RegExp.prototype.hasOwnProperty('sticky');

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function () {
  this.__position = 0;
};

InputScanner.prototype.back = function () {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function () {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function () {
  var val = null;

  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }

  return val;
};

InputScanner.prototype.peek = function (index) {
  var val = null;
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }

  return val;
}; // This is a JavaScript only helper function (not in python)
// Javascript doesn't have a match method
// and not all implementation support "sticky" flag.
// If they do not support sticky then both this.match() and this.test() method
// must get the match and check the index of the match.
// If sticky is supported and set, this method will use it.
// Otherwise it will check that global is set, and fall back to the slower method.


InputScanner.prototype.__match = function (pattern, index) {
  pattern.lastIndex = index;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match && !(regexp_has_sticky && pattern.sticky)) {
    if (pattern_match.index !== index) {
      pattern_match = null;
    }
  }

  return pattern_match;
};

InputScanner.prototype.test = function (pattern, index) {
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__input_length) {
    return !!this.__match(pattern, index);
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function (pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  pattern.lastIndex = 0;
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function (pattern) {
  var pattern_match = this.__match(pattern, this.__position);

  if (pattern_match) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }

  return pattern_match;
};

InputScanner.prototype.read = function (starting_pattern, until_pattern, until_after) {
  var val = '';
  var match;

  if (starting_pattern) {
    match = this.match(starting_pattern);

    if (match) {
      val += match[0];
    }
  }

  if (until_pattern && (match || !starting_pattern)) {
    val += this.readUntil(until_pattern, until_after);
  }

  return val;
};

InputScanner.prototype.readUntil = function (pattern, until_after) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);

  if (pattern_match) {
    match_index = pattern_match.index;

    if (until_after) {
      match_index += pattern_match[0].length;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function (pattern) {
  return this.readUntil(pattern, true);
};

InputScanner.prototype.get_regexp = function (pattern, match_from) {
  var result = null;
  var flags = 'g';

  if (match_from && regexp_has_sticky) {
    flags = 'y';
  } // strings are converted to regexp


  if (typeof pattern === "string" && pattern !== '') {
    // result = new RegExp(pattern.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), flags);
    result = new RegExp(pattern, flags);
  } else if (pattern) {
    result = new RegExp(pattern.source, flags);
  }

  return result;
};

InputScanner.prototype.get_literal_regexp = function (literal_string) {
  return RegExp(literal_string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
};
/* css beautifier legacy helpers */


InputScanner.prototype.peekUntilAfter = function (pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function (testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start).toLowerCase() === testVal;
};

var InputScanner_1 = InputScanner;
var inputscanner = {
  InputScanner: InputScanner_1
};

/*jshint node:true */

function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function () {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function () {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function () {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function () {
  var val = null;

  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }

  return val;
};

TokenStream.prototype.peek = function (index) {
  var val = null;
  index = index || 0;
  index += this.__position;

  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }

  return val;
};

TokenStream.prototype.add = function (token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }

  this.__tokens.push(token);

  this.__tokens_length += 1;
};

var TokenStream_1 = TokenStream;
var tokenstream = {
  TokenStream: TokenStream_1
};

/*jshint node:true */

function Pattern(input_scanner, parent) {
  this._input = input_scanner;
  this._starting_pattern = null;
  this._match_pattern = null;
  this._until_pattern = null;
  this._until_after = false;

  if (parent) {
    this._starting_pattern = this._input.get_regexp(parent._starting_pattern, true);
    this._match_pattern = this._input.get_regexp(parent._match_pattern, true);
    this._until_pattern = this._input.get_regexp(parent._until_pattern);
    this._until_after = parent._until_after;
  }
}

Pattern.prototype.read = function () {
  var result = this._input.read(this._starting_pattern);

  if (!this._starting_pattern || result) {
    result += this._input.read(this._match_pattern, this._until_pattern, this._until_after);
  }

  return result;
};

Pattern.prototype.read_match = function () {
  return this._input.match(this._match_pattern);
};

Pattern.prototype.until_after = function (pattern) {
  var result = this._create();

  result._until_after = true;
  result._until_pattern = this._input.get_regexp(pattern);

  result._update();

  return result;
};

Pattern.prototype.until = function (pattern) {
  var result = this._create();

  result._until_after = false;
  result._until_pattern = this._input.get_regexp(pattern);

  result._update();

  return result;
};

Pattern.prototype.starting_with = function (pattern) {
  var result = this._create();

  result._starting_pattern = this._input.get_regexp(pattern, true);

  result._update();

  return result;
};

Pattern.prototype.matching = function (pattern) {
  var result = this._create();

  result._match_pattern = this._input.get_regexp(pattern, true);

  result._update();

  return result;
};

Pattern.prototype._create = function () {
  return new Pattern(this._input, this);
};

Pattern.prototype._update = function () {};

var Pattern_1 = Pattern;
var pattern = {
  Pattern: Pattern_1
};

var Pattern$1 = pattern.Pattern;

function WhitespacePattern(input_scanner, parent) {
  Pattern$1.call(this, input_scanner, parent);

  if (parent) {
    this._line_regexp = this._input.get_regexp(parent._line_regexp);
  } else {
    this.__set_whitespace_patterns('', '');
  }

  this.newline_count = 0;
  this.whitespace_before_token = '';
}

WhitespacePattern.prototype = new Pattern$1();

WhitespacePattern.prototype.__set_whitespace_patterns = function (whitespace_chars, newline_chars) {
  whitespace_chars += '\\t ';
  newline_chars += '\\n\\r';
  this._match_pattern = this._input.get_regexp('[' + whitespace_chars + newline_chars + ']+', true);
  this._newline_regexp = this._input.get_regexp('\\r\\n|[' + newline_chars + ']');
};

WhitespacePattern.prototype.read = function () {
  this.newline_count = 0;
  this.whitespace_before_token = '';

  var resulting_string = this._input.read(this._match_pattern);

  if (resulting_string === ' ') {
    this.whitespace_before_token = ' ';
  } else if (resulting_string) {
    var matches = this.__split(this._newline_regexp, resulting_string);

    this.newline_count = matches.length - 1;
    this.whitespace_before_token = matches[this.newline_count];
  }

  return resulting_string;
};

WhitespacePattern.prototype.matching = function (whitespace_chars, newline_chars) {
  var result = this._create();

  result.__set_whitespace_patterns(whitespace_chars, newline_chars);

  result._update();

  return result;
};

WhitespacePattern.prototype._create = function () {
  return new WhitespacePattern(this._input, this);
};

WhitespacePattern.prototype.__split = function (regexp, input_string) {
  regexp.lastIndex = 0;
  var start_index = 0;
  var result = [];
  var next_match = regexp.exec(input_string);

  while (next_match) {
    result.push(input_string.substring(start_index, next_match.index));
    start_index = next_match.index + next_match[0].length;
    next_match = regexp.exec(input_string);
  }

  if (start_index < input_string.length) {
    result.push(input_string.substring(start_index, input_string.length));
  } else {
    result.push('');
  }

  return result;
};

var WhitespacePattern_1 = WhitespacePattern;
var whitespacepattern = {
  WhitespacePattern: WhitespacePattern_1
};

var InputScanner$1 = inputscanner.InputScanner;
var Token$1 = token.Token;
var TokenStream$1 = tokenstream.TokenStream;
var WhitespacePattern$1 = whitespacepattern.WhitespacePattern;
var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function Tokenizer(input_string, options) {
  this._input = new InputScanner$1(input_string);
  this._options = options || {};
  this.__tokens = null;
  this._patterns = {};
  this._patterns.whitespace = new WhitespacePattern$1(this._input);
};

Tokenizer.prototype.tokenize = function () {
  this._input.restart();

  this.__tokens = new TokenStream$1();

  this._reset();

  var current;
  var previous = new Token$1(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream$1();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);

    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream$1();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);

    previous = current;
  }

  return this.__tokens;
};

Tokenizer.prototype._is_first_token = function () {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function () {};

Tokenizer.prototype._get_next_token = function (previous_token, open_token) {
  // jshint unused:false
  this._readWhitespace();

  var resulting_string = this._input.read(/.+/g);

  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function (current_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function (current_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function (current_token, open_token) {
  // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function (type, text) {
  var token = new Token$1(type, text, this._patterns.whitespace.newline_count, this._patterns.whitespace.whitespace_before_token);
  return token;
};

Tokenizer.prototype._readWhitespace = function () {
  return this._patterns.whitespace.read();
};

var Tokenizer_1 = Tokenizer;
var TOKEN_1 = TOKEN;
var tokenizer = {
  Tokenizer: Tokenizer_1,
  TOKEN: TOKEN_1
};

/*jshint node:true */

function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;
  this.__directives_end_ignore_pattern = new RegExp(start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern, 'g');
}

Directives.prototype.get_directives = function (text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;

  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function (input) {
  return input.readUntilAfter(this.__directives_end_ignore_pattern);
};

var Directives_1 = Directives;
var directives = {
  Directives: Directives_1
};

var Pattern$2 = pattern.Pattern;
var template_names = {
  django: false,
  erb: false,
  handlebars: false,
  php: false
}; // This lets templates appear anywhere we would do a readUntil
// The cost is higher but it is pay to play.

function TemplatablePattern(input_scanner, parent) {
  Pattern$2.call(this, input_scanner, parent);
  this.__template_pattern = null;
  this._disabled = Object.assign({}, template_names);
  this._excluded = Object.assign({}, template_names);

  if (parent) {
    this.__template_pattern = this._input.get_regexp(parent.__template_pattern);
    this._excluded = Object.assign(this._excluded, parent._excluded);
    this._disabled = Object.assign(this._disabled, parent._disabled);
  }

  var pattern = new Pattern$2(input_scanner);
  this.__patterns = {
    handlebars_comment: pattern.starting_with(/{{!--/).until_after(/--}}/),
    handlebars_unescaped: pattern.starting_with(/{{{/).until_after(/}}}/),
    handlebars: pattern.starting_with(/{{/).until_after(/}}/),
    php: pattern.starting_with(/<\?(?:[=]|php)/).until_after(/\?>/),
    erb: pattern.starting_with(/<%[^%]/).until_after(/[^%]%>/),
    // django coflicts with handlebars a bit.
    django: pattern.starting_with(/{%/).until_after(/%}/),
    django_value: pattern.starting_with(/{{/).until_after(/}}/),
    django_comment: pattern.starting_with(/{#/).until_after(/#}/)
  };
}

TemplatablePattern.prototype = new Pattern$2();

TemplatablePattern.prototype._create = function () {
  return new TemplatablePattern(this._input, this);
};

TemplatablePattern.prototype._update = function () {
  this.__set_templated_pattern();
};

TemplatablePattern.prototype.disable = function (language) {
  var result = this._create();

  result._disabled[language] = true;

  result._update();

  return result;
};

TemplatablePattern.prototype.read_options = function (options) {
  var result = this._create();

  for (var language in template_names) {
    result._disabled[language] = options.templating.indexOf(language) === -1;
  }

  result._update();

  return result;
};

TemplatablePattern.prototype.exclude = function (language) {
  var result = this._create();

  result._excluded[language] = true;

  result._update();

  return result;
};

TemplatablePattern.prototype.read = function () {
  var result = '';

  if (this._match_pattern) {
    result = this._input.read(this._starting_pattern);
  } else {
    result = this._input.read(this._starting_pattern, this.__template_pattern);
  }

  var next = this._read_template();

  while (next) {
    if (this._match_pattern) {
      next += this._input.read(this._match_pattern);
    } else {
      next += this._input.readUntil(this.__template_pattern);
    }

    result += next;
    next = this._read_template();
  }

  if (this._until_after) {
    result += this._input.readUntilAfter(this._until_pattern);
  }

  return result;
};

TemplatablePattern.prototype.__set_templated_pattern = function () {
  var items = [];

  if (!this._disabled.php) {
    items.push(this.__patterns.php._starting_pattern.source);
  }

  if (!this._disabled.handlebars) {
    items.push(this.__patterns.handlebars._starting_pattern.source);
  }

  if (!this._disabled.erb) {
    items.push(this.__patterns.erb._starting_pattern.source);
  }

  if (!this._disabled.django) {
    items.push(this.__patterns.django._starting_pattern.source);
    items.push(this.__patterns.django_value._starting_pattern.source);
    items.push(this.__patterns.django_comment._starting_pattern.source);
  }

  if (this._until_pattern) {
    items.push(this._until_pattern.source);
  }

  this.__template_pattern = this._input.get_regexp('(?:' + items.join('|') + ')');
};

TemplatablePattern.prototype._read_template = function () {
  var resulting_string = '';

  var c = this._input.peek();

  if (c === '<') {
    var peek1 = this._input.peek(1); //if we're in a comment, do something special
    // We treat all comments as literals, even more than preformatted tags
    // we just look for the appropriate close tag


    if (!this._disabled.php && !this._excluded.php && peek1 === '?') {
      resulting_string = resulting_string || this.__patterns.php.read();
    }

    if (!this._disabled.erb && !this._excluded.erb && peek1 === '%') {
      resulting_string = resulting_string || this.__patterns.erb.read();
    }
  } else if (c === '{') {
    if (!this._disabled.handlebars && !this._excluded.handlebars) {
      resulting_string = resulting_string || this.__patterns.handlebars_comment.read();
      resulting_string = resulting_string || this.__patterns.handlebars_unescaped.read();
      resulting_string = resulting_string || this.__patterns.handlebars.read();
    }

    if (!this._disabled.django) {
      // django coflicts with handlebars a bit.
      if (!this._excluded.django && !this._excluded.handlebars) {
        resulting_string = resulting_string || this.__patterns.django_value.read();
      }

      if (!this._excluded.django) {
        resulting_string = resulting_string || this.__patterns.django_comment.read();
        resulting_string = resulting_string || this.__patterns.django.read();
      }
    }
  }

  return resulting_string;
};

var TemplatablePattern_1 = TemplatablePattern;
var templatablepattern = {
  TemplatablePattern: TemplatablePattern_1
};

var InputScanner$2 = inputscanner.InputScanner;
var BaseTokenizer = tokenizer.Tokenizer;
var BASETOKEN = tokenizer.TOKEN;
var Directives$1 = directives.Directives;
var Pattern$3 = pattern.Pattern;
var TemplatablePattern$1 = templatablepattern.TemplatablePattern;

function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}

var TOKEN$1 = {
  START_EXPR: 'TK_START_EXPR',
  END_EXPR: 'TK_END_EXPR',
  START_BLOCK: 'TK_START_BLOCK',
  END_BLOCK: 'TK_END_BLOCK',
  WORD: 'TK_WORD',
  RESERVED: 'TK_RESERVED',
  SEMICOLON: 'TK_SEMICOLON',
  STRING: 'TK_STRING',
  EQUALS: 'TK_EQUALS',
  OPERATOR: 'TK_OPERATOR',
  COMMA: 'TK_COMMA',
  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
  COMMENT: 'TK_COMMENT',
  DOT: 'TK_DOT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};
var directives_core = new Directives$1(/\/\*/, /\*\//);
var number_pattern = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/;
var digit = /[0-9]/; // Dot "." must be distinguished from "..." and decimal

var dot_pattern = /[^\d\.]/;
var positionable_operators = (">>> === !== " + "<< && >= ** != == <= >> || " + "< / - + > : & % ? ^ | *").split(' '); // IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
// Also, you must update possitionable operators separately from punct

var punct = ">>>= " + "... >>= <<= === >>> !== **= " + "=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= " + "= ! ? > < : / ^ - + * & % ~ |";
punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
punct = punct.replace(/ /g, '|');
var punct_pattern = new RegExp(punct); // words which should always start on new line.

var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$'); // var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

var in_html_comment;

var Tokenizer$1 = function Tokenizer(input_string, options) {
  BaseTokenizer.call(this, input_string, options);
  this._patterns.whitespace = this._patterns.whitespace.matching(/\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source, /\u2028\u2029/.source);
  var pattern_reader = new Pattern$3(this._input);
  var templatable = new TemplatablePattern$1(this._input).read_options(this._options);
  this.__patterns = {
    template: templatable,
    identifier: templatable.starting_with(acorn.identifier).matching(acorn.identifierMatch),
    number: pattern_reader.matching(number_pattern),
    punct: pattern_reader.matching(punct_pattern),
    // comment ends just before nearest linefeed or end of file
    comment: pattern_reader.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
    //  /* ... */ comment ends with nearest */ or end of file
    block_comment: pattern_reader.starting_with(/\/\*/).until_after(/\*\//),
    html_comment_start: pattern_reader.matching(/<!--/),
    html_comment_end: pattern_reader.matching(/-->/),
    include: pattern_reader.starting_with(/#include/).until_after(acorn.lineBreak),
    shebang: pattern_reader.starting_with(/#!/).until_after(acorn.lineBreak),
    xml: pattern_reader.matching(/[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/),
    single_quote: templatable.until(/['\\\n\r\u2028\u2029]/),
    double_quote: templatable.until(/["\\\n\r\u2028\u2029]/),
    template_text: templatable.until(/[`\\$]/),
    template_expression: templatable.until(/[`}\\]/)
  };
};

Tokenizer$1.prototype = new BaseTokenizer();

Tokenizer$1.prototype._is_comment = function (current_token) {
  return current_token.type === TOKEN$1.COMMENT || current_token.type === TOKEN$1.BLOCK_COMMENT || current_token.type === TOKEN$1.UNKNOWN;
};

Tokenizer$1.prototype._is_opening = function (current_token) {
  return current_token.type === TOKEN$1.START_BLOCK || current_token.type === TOKEN$1.START_EXPR;
};

Tokenizer$1.prototype._is_closing = function (current_token, open_token) {
  return (current_token.type === TOKEN$1.END_BLOCK || current_token.type === TOKEN$1.END_EXPR) && open_token && (current_token.text === ']' && open_token.text === '[' || current_token.text === ')' && open_token.text === '(' || current_token.text === '}' && open_token.text === '{');
};

Tokenizer$1.prototype._reset = function () {
  in_html_comment = false;
};

Tokenizer$1.prototype._get_next_token = function (previous_token, open_token) {
  // jshint unused:false
  var token = null;

  this._readWhitespace();

  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN$1.EOF, '');
  }

  token = token || this._read_string(c);
  token = token || this._read_word(previous_token);
  token = token || this._read_singles(c);
  token = token || this._read_comment(c);
  token = token || this._read_regexp(c, previous_token);
  token = token || this._read_xml(c, previous_token);
  token = token || this._read_non_javascript(c);
  token = token || this._read_punctuation();
  token = token || this._create_token(TOKEN$1.UNKNOWN, this._input.next());
  return token;
};

Tokenizer$1.prototype._read_word = function (previous_token) {
  var resulting_string;
  resulting_string = this.__patterns.identifier.read();

  if (resulting_string !== '') {
    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');

    if (!(previous_token.type === TOKEN$1.DOT || previous_token.type === TOKEN$1.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get')) && reserved_word_pattern.test(resulting_string)) {
      if (resulting_string === 'in' || resulting_string === 'of') {
        // hack for 'in' and 'of' operators
        return this._create_token(TOKEN$1.OPERATOR, resulting_string);
      }

      return this._create_token(TOKEN$1.RESERVED, resulting_string);
    }

    return this._create_token(TOKEN$1.WORD, resulting_string);
  }

  resulting_string = this.__patterns.number.read();

  if (resulting_string !== '') {
    return this._create_token(TOKEN$1.WORD, resulting_string);
  }
};

Tokenizer$1.prototype._read_singles = function (c) {
  var token = null;

  if (c === '(' || c === '[') {
    token = this._create_token(TOKEN$1.START_EXPR, c);
  } else if (c === ')' || c === ']') {
    token = this._create_token(TOKEN$1.END_EXPR, c);
  } else if (c === '{') {
    token = this._create_token(TOKEN$1.START_BLOCK, c);
  } else if (c === '}') {
    token = this._create_token(TOKEN$1.END_BLOCK, c);
  } else if (c === ';') {
    token = this._create_token(TOKEN$1.SEMICOLON, c);
  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
    token = this._create_token(TOKEN$1.DOT, c);
  } else if (c === ',') {
    token = this._create_token(TOKEN$1.COMMA, c);
  }

  if (token) {
    this._input.next();
  }

  return token;
};

Tokenizer$1.prototype._read_punctuation = function () {
  var resulting_string = this.__patterns.punct.read();

  if (resulting_string !== '') {
    if (resulting_string === '=') {
      return this._create_token(TOKEN$1.EQUALS, resulting_string);
    } else {
      return this._create_token(TOKEN$1.OPERATOR, resulting_string);
    }
  }
};

Tokenizer$1.prototype._read_non_javascript = function (c) {
  var resulting_string = '';

  if (c === '#') {
    if (this._is_first_token()) {
      resulting_string = this.__patterns.shebang.read();

      if (resulting_string) {
        return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + '\n');
      }
    } // handles extendscript #includes


    resulting_string = this.__patterns.include.read();

    if (resulting_string) {
      return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + '\n');
    }

    c = this._input.next(); // Spidermonkey-specific sharp variables for circular references. Considered obsolete.

    var sharp = '#';

    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== '#' && c !== '=');

      if (c === '#') ; else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
        sharp += '[]';

        this._input.next();

        this._input.next();
      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
        sharp += '{}';

        this._input.next();

        this._input.next();
      }

      return this._create_token(TOKEN$1.WORD, sharp);
    }

    this._input.back();
  } else if (c === '<' && this._is_first_token()) {
    resulting_string = this.__patterns.html_comment_start.read();

    if (resulting_string) {
      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
        resulting_string += this._input.next();
      }

      in_html_comment = true;
      return this._create_token(TOKEN$1.COMMENT, resulting_string);
    }
  } else if (in_html_comment && c === '-') {
    resulting_string = this.__patterns.html_comment_end.read();

    if (resulting_string) {
      in_html_comment = false;
      return this._create_token(TOKEN$1.COMMENT, resulting_string);
    }
  }

  return null;
};

Tokenizer$1.prototype._read_comment = function (c) {
  var token = null;

  if (c === '/') {
    var comment = '';

    if (this._input.peek(1) === '*') {
      // peek for comment /* ... */
      comment = this.__patterns.block_comment.read();
      var directives = directives_core.get_directives(comment);

      if (directives && directives.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }

      comment = comment.replace(acorn.allLineBreaks, '\n');
      token = this._create_token(TOKEN$1.BLOCK_COMMENT, comment);
      token.directives = directives;
    } else if (this._input.peek(1) === '/') {
      // peek for comment // ...
      comment = this.__patterns.comment.read();
      token = this._create_token(TOKEN$1.COMMENT, comment);
    }
  }

  return token;
};

Tokenizer$1.prototype._read_string = function (c) {
  if (c === '`' || c === "'" || c === '"') {
    var resulting_string = this._input.next();

    this.has_char_escapes = false;

    if (c === '`') {
      resulting_string += this._read_string_recursive('`', true, '${');
    } else {
      resulting_string += this._read_string_recursive(c);
    }

    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }

    resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
    return this._create_token(TOKEN$1.STRING, resulting_string);
  }

  return null;
};

Tokenizer$1.prototype._allow_regexp_or_xml = function (previous_token) {
  // regex and xml can only appear in specific locations during parsing
  return previous_token.type === TOKEN$1.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield']) || previous_token.type === TOKEN$1.END_EXPR && previous_token.text === ')' && previous_token.opened.previous.type === TOKEN$1.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for']) || in_array(previous_token.type, [TOKEN$1.COMMENT, TOKEN$1.START_EXPR, TOKEN$1.START_BLOCK, TOKEN$1.START, TOKEN$1.END_BLOCK, TOKEN$1.OPERATOR, TOKEN$1.EQUALS, TOKEN$1.EOF, TOKEN$1.SEMICOLON, TOKEN$1.COMMA]);
};

Tokenizer$1.prototype._read_regexp = function (c, previous_token) {
  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
    // handle regexp
    //
    var resulting_string = this._input.next();

    var esc = false;
    var in_char_class = false;

    while (this._input.hasNext() && (esc || in_char_class || this._input.peek() !== c) && !this._input.testChar(acorn.newline)) {
      resulting_string += this._input.peek();

      if (!esc) {
        esc = this._input.peek() === '\\';

        if (this._input.peek() === '[') {
          in_char_class = true;
        } else if (this._input.peek() === ']') {
          in_char_class = false;
        }
      } else {
        esc = false;
      }

      this._input.next();
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next(); // regexps may have modifiers /regexp/MOD , so fetch those, too
      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.

      resulting_string += this._input.read(acorn.identifier);
    }

    return this._create_token(TOKEN$1.STRING, resulting_string);
  }

  return null;
};

Tokenizer$1.prototype._read_xml = function (c, previous_token) {
  if (this._options.e4x && c === "<" && this._allow_regexp_or_xml(previous_token)) {
    var xmlStr = '';

    var match = this.__patterns.xml.read_match(); // handle e4x xml literals
    //


    if (match) {
      // Trim root tag to attempt to
      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
      var isCurlyRoot = rootTag.indexOf('{') === 0;
      var depth = 0;

      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = !!match[match.length - 1] || tagName.slice(0, 8) === "![CDATA[";

        if (!isSingletonTag && (tagName === rootTag || isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}'))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }

        xmlStr += match[0];

        if (depth <= 0) {
          break;
        }

        match = this.__patterns.xml.read_match();
      } // if we didn't close correctly, keep unformatted.


      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }

      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
      return this._create_token(TOKEN$1.STRING, xmlStr);
    }
  }

  return null;
};

function unescape_string(s) {
  // You think that a regex would work for this
  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
  //         return String.fromCharCode(parseInt(val, 16));
  //     })
  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
  var out = '',
      escaped = 0;
  var input_scan = new InputScanner$2(s);
  var matched = null;

  while (input_scan.hasNext()) {
    // Keep any whitespace, non-slash characters
    // also keep slash pairs.
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

    if (matched) {
      out += matched[0];
    }

    if (input_scan.peek() === '\\') {
      input_scan.next();

      if (input_scan.peek() === 'x') {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === 'u') {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += '\\';

        if (input_scan.hasNext()) {
          out += input_scan.next();
        }

        continue;
      } // If there's some error decoding, return the original string


      if (!matched) {
        return s;
      }

      escaped = parseInt(matched[1], 16);

      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
        // we bail out on \x7f..\xff,
        // leaving whole string escaped,
        // as it's probably completely binary
        return s;
      } else if (escaped >= 0x00 && escaped < 0x20) {
        // leave 0x00...0x1f escaped
        out += '\\' + matched[0];
        continue;
      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
        // single-quote, apostrophe, backslash - escape these
        out += '\\' + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }

  return out;
} // handle string
//


Tokenizer$1.prototype._read_string_recursive = function (delimiter, allow_unescaped_newlines, start_sub) {
  var current_char;
  var pattern;

  if (delimiter === '\'') {
    pattern = this.__patterns.single_quote;
  } else if (delimiter === '"') {
    pattern = this.__patterns.double_quote;
  } else if (delimiter === '`') {
    pattern = this.__patterns.template_text;
  } else if (delimiter === '}') {
    pattern = this.__patterns.template_expression;
  }

  var resulting_string = pattern.read();
  var next = '';

  while (this._input.hasNext()) {
    next = this._input.next();

    if (next === delimiter || !allow_unescaped_newlines && acorn.newline.test(next)) {
      this._input.back();

      break;
    } else if (next === '\\' && this._input.hasNext()) {
      current_char = this._input.peek();

      if (current_char === 'x' || current_char === 'u') {
        this.has_char_escapes = true;
      } else if (current_char === '\r' && this._input.peek(1) === '\n') {
        this._input.next();
      }

      next += this._input.next();
    } else if (start_sub) {
      if (start_sub === '${' && next === '$' && this._input.peek() === '{') {
        next += this._input.next();
      }

      if (start_sub === next) {
        if (delimiter === '`') {
          next += this._read_string_recursive('}', allow_unescaped_newlines, '`');
        } else {
          next += this._read_string_recursive('`', allow_unescaped_newlines, '${');
        }

        if (this._input.hasNext()) {
          next += this._input.next();
        }
      }
    }

    next += pattern.read();
    resulting_string += next;
  }

  return resulting_string;
};

var Tokenizer_1$1 = Tokenizer$1;
var TOKEN_1$1 = TOKEN$1;
var positionable_operators_1 = positionable_operators.slice();
var line_starters_1 = line_starters.slice();
var tokenizer$1 = {
  Tokenizer: Tokenizer_1$1,
  TOKEN: TOKEN_1$1,
  positionable_operators: positionable_operators_1,
  line_starters: line_starters_1
};

var Output$1 = output.Output;
var Token$2 = token.Token;
var Options$2 = options$1.Options;
var Tokenizer$2 = tokenizer$1.Tokenizer;
var line_starters$1 = tokenizer$1.line_starters;
var positionable_operators$1 = tokenizer$1.positionable_operators;
var TOKEN$2 = tokenizer$1.TOKEN;

function in_array$1(what, arr) {
  return arr.indexOf(what) !== -1;
}

function ltrim(s) {
  return s.replace(/^\s+/g, '');
}

function generateMapFromStrings(list) {
  var result = {};

  for (var x = 0; x < list.length; x++) {
    // make the mapped names underscored instead of dash
    result[list[x].replace(/-/g, '_')] = list[x];
  }

  return result;
}

function reserved_word(token, word) {
  return token && token.type === TOKEN$2.RESERVED && token.text === word;
}

function reserved_array(token, words) {
  return token && token.type === TOKEN$2.RESERVED && in_array$1(token.text, words);
} // Unsure of what they mean, but they work. Worth cleaning up in future.


var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];
var validPositionValues$1 = ['before-newline', 'after-newline', 'preserve-newline']; // Generate map from array

var OPERATOR_POSITION = generateMapFromStrings(validPositionValues$1);
var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];
var MODE = {
  BlockStatement: 'BlockStatement',
  // 'BLOCK'
  Statement: 'Statement',
  // 'STATEMENT'
  ObjectLiteral: 'ObjectLiteral',
  // 'OBJECT',
  ArrayLiteral: 'ArrayLiteral',
  //'[EXPRESSION]',
  ForInitializer: 'ForInitializer',
  //'(FOR-EXPRESSION)',
  Conditional: 'Conditional',
  //'(COND-EXPRESSION)',
  Expression: 'Expression' //'(EXPRESSION)'

};

function remove_redundant_indentation(output, frame) {
  // This implementation is effective but has some issues:
  //     - can cause line wrap to happen too soon due to indent removal
  //           after wrap points are calculated
  // These issues are minor compared to ugly indentation.
  if (frame.multiline_frame || frame.mode === MODE.ForInitializer || frame.mode === MODE.Conditional) {
    return;
  } // remove one indent from each line inside this section


  output.remove_indent(frame.start_line_index);
} // we could use just string.split, but
// IE doesn't like returning empty strings


function split_linebreaks(s) {
  //return s.split(/\x0d\x0a|\x0a/);
  s = s.replace(acorn.allLineBreaks, '\n');
  var out = [],
      idx = s.indexOf("\n");

  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }

  if (s.length) {
    out.push(s);
  }

  return out;
}

function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}

function is_expression(mode) {
  return in_array$1(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}

function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();

    if (line.charAt(0) !== c) {
      return false;
    }
  }

  return true;
}

function each_line_matches_indent(lines, indent) {
  var i = 0,
      len = lines.length,
      line;

  for (; i < len; i++) {
    line = lines[i]; // allow empty lines to pass through

    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }

  return true;
}

function Beautifier(source_text, options) {
  options = options || {};
  this._source_text = source_text || '';
  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;
  this._flag_store = null;
  this._options = new Options$2(options);
}

Beautifier.prototype.create_flags = function (flags_base, mode) {
  var next_indent_level = 0;

  if (flags_base) {
    next_indent_level = flags_base.indentation_level;

    if (!this._output.just_added_newline() && flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }

  var next_flags = {
    mode: mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token$2(TOKEN$2.START_BLOCK, ''),
    // last token text
    last_word: flags_base ? flags_base.last_word : '',
    // last TOKEN.WORD passed
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false,
    // switch(..){ INSIDE HERE }
    in_case: false,
    // we're on the exact line with "case 0:"
    case_body: false,
    // the indented case-action block
    indentation_level: next_indent_level,
    alignment: 0,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};

Beautifier.prototype._reset = function (source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  this._last_last_text = ''; // pre-last token text

  this._output = new Output$1(this._options, baseIndentString); // If testing the ignore directive, start with output disable set to true

  this._output.raw = this._options.test_output_raw; // Stack of parsing/formatting states, including MODE.
  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
  // and formatted output.  This makes the beautifier less accurate than full parsers
  // but also far more tolerant of syntax errors.
  //
  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
  // most full parsers would die, but the beautifier gracefully falls back to
  // MODE.BlockStatement and continues on.

  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer = new Tokenizer$2(source_text, this._options);
  this._tokens = tokenizer.tokenize();
  return source_text;
};

Beautifier.prototype.beautify = function () {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var sweet_code;

  var source_text = this._reset(this._source_text);

  var eol = this._options.eol;

  if (this._options.eol === 'auto') {
    eol = '\n';

    if (source_text && acorn.lineBreak.test(source_text || '')) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }

  var current_token = this._tokens.next();

  while (current_token) {
    this.handle_token(current_token);
    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;
    current_token = this._tokens.next();
  }

  sweet_code = this._output.get_code(eol);
  return sweet_code;
};

Beautifier.prototype.handle_token = function (current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN$2.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN$2.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN$2.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN$2.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN$2.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN$2.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN$2.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN$2.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN$2.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN$2.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN$2.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN$2.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_whitespace_and_comments = function (current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();

    while (comment_token) {
      // The cleanest handling of inline comments is to treat them as though they aren't there.
      // Just continue formatting and the behavior should be logical.
      // Also ignore unknown tokens.  Again, this should result in better behavior.
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }

  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }

    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);

        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }
};

var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

Beautifier.prototype.allow_wrap_or_preserved_newline = function (current_token, force_linewrap) {
  force_linewrap = force_linewrap === undefined ? false : force_linewrap; // Never wrap the first token on a line

  if (this._output.just_added_newline()) {
    return;
  }

  var shouldPreserveOrForce = this._options.preserve_newlines && current_token.newlines || force_linewrap;
  var operatorLogicApplies = in_array$1(this._flags.last_token.text, positionable_operators$1) || in_array$1(current_token.text, positionable_operators$1);

  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = in_array$1(this._flags.last_token.text, positionable_operators$1) && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE) || in_array$1(current_token.text, positionable_operators$1);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }

  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      // These tokens should never have a newline inserted
      // between them and the following expression.
      return;
    }

    this._output.set_wrap_point();
  }
};

Beautifier.prototype.print_newline = function (force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN$2.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
      var next_token = this._tokens.peek();

      while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, 'else')) && !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }

  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.print_token_line_indentation = function (current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation && current_token.newlines && (current_token.text === '[' || is_array(this._flags.mode))) {
      this._output.current_line.set_indent(-1);

      this._output.current_line.push(current_token.whitespace_before);

      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level, this._flags.alignment)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};

Beautifier.prototype.print_token = function (current_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);

    return;
  }

  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN$2.COMMA && this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ',') {
      var popped = this._output.previous_line.pop(); // if the comma was already at the start of the line,
      // pull back onto that line and reprint the indentation


      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);

        this._output.trim(true);

        this._output.current_line.pop();

        this._output.trim();
      } // add the comma in front of the next token


      this.print_token_line_indentation(current_token);

      this._output.add_token(',');

      this._output.space_before_token = true;
    }
  }

  this.print_token_line_indentation(current_token);
  this._output.non_breaking_space = true;

  this._output.add_token(current_token.text);

  if (this._output.previous_token_wrapped) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.indent = function () {
  this._flags.indentation_level += 1;

  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.deindent = function () {
  if (this._flags.indentation_level > 0 && (!this._flags.parent || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;

    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.set_mode = function (mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);

    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }

  this._flags = this.create_flags(this._previous_flags, mode);

  this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
};

Beautifier.prototype.restore_mode = function () {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();

    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }

    this._output.set_indent(this._flags.indentation_level, this._flags.alignment);
  }
};

Beautifier.prototype.start_of_object_property = function () {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ['get', 'set']));
};

Beautifier.prototype.start_of_statement = function (current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN$2.WORD;
  start = start || reserved_word(this._flags.last_token, 'do');
  start = start || !(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, 'else') && !(reserved_word(current_token, 'if') && !current_token.comments_before);
  start = start || this._flags.last_token.type === TOKEN$2.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional);
  start = start || this._flags.last_token.type === TOKEN$2.WORD && this._flags.mode === MODE.BlockStatement && !this._flags.in_case && !(current_token.text === '--' || current_token.text === '++') && this._last_last_text !== 'function' && current_token.type !== TOKEN$2.WORD && current_token.type !== TOKEN$2.RESERVED;
  start = start || this._flags.mode === MODE.ObjectLiteral && (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0 || reserved_array(this._flags.last_token, ['get', 'set']));

  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();
    this.handle_whitespace_and_comments(current_token, true); // Issue #276:
    // If starting a new statement with [if, for, while, do], push to a new line.
    // if (a) if (b) if(c) d(); else e(); else f();

    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token, reserved_array(current_token, ['do', 'for', 'if', 'while']));
    }

    return true;
  }

  return false;
};

Beautifier.prototype.handle_start_expr = function (current_token) {
  // The conditional starts the statement if appropriate.
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_mode = MODE.Expression;

  if (current_token.text === '[') {
    if (this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === ')') {
      // this is array index specifier, break immediately
      // a[x], fn()[x]
      if (reserved_array(this._flags.last_token, line_starters$1)) {
        this._output.space_before_token = true;
      }

      this.print_token(current_token);
      this.set_mode(next_mode);
      this.indent();

      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      return;
    }

    next_mode = MODE.ArrayLiteral;

    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === '[' || this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}')) {
        // ], [ goes to new line
        // }, [ goes to new line
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }

    if (!in_array$1(this._flags.last_token.type, [TOKEN$2.START_EXPR, TOKEN$2.END_EXPR, TOKEN$2.WORD, TOKEN$2.OPERATOR])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      if (this._flags.last_token.text === 'for') {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array$1(this._flags.last_token.text, ['if', 'while'])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array$1(this._flags.last_word, ['await', 'async'])) {
        // Should be a space between await and an IIFE, or async and an arrow function
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
        this._output.space_before_token = false;
      } else if (in_array$1(this._flags.last_token.text, line_starters$1) || this._flags.last_token.text === 'catch') {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      // Support of this kind of newline preservation.
      // a = (b &&
      //     (c || d));
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN$2.WORD) {
      this._output.space_before_token = false; // function name() vs function name ()
      // function* name() vs function* name ()
      // async name() vs async name ()
      // In ES6, you can also define the method properties of an object
      // var obj = {a: function() {}}
      // It can be abbreviated
      // var obj = {a() {}}
      // var obj = { a() {}} vs var obj = { a () {}}
      // var obj = { * a() {}} vs var obj = { * a () {}}

      var peek_back_two = this._tokens.peek(-3);

      if (this._options.space_after_named_function && peek_back_two) {
        // peek starts at next character so -1 is current token
        var peek_back_three = this._tokens.peek(-4);

        if (reserved_array(peek_back_two, ['async', 'function']) || peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function'])) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if (peek_back_two.text === '{' || peek_back_two.text === ',' || peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ',')) {
            this._output.space_before_token = true;
          }
        }
      }
    } else {
      // Support preserving wrapped arrow function expressions
      // a.b('c',
      //     () => d.e
      // )
      this.allow_wrap_or_preserved_newline(current_token);
    } // function() vs function ()
    // yield*() vs yield* ()
    // function*() vs function* ()


    if (this._flags.last_token.type === TOKEN$2.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof') || this._flags.last_token.text === '*' && (in_array$1(this._last_last_text, ['function', 'yield']) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ['{', ',']))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }

  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN$2.COMMA) {
    // do nothing on (( and )( and ][ and ]( and .(
    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }

  this.print_token(current_token);
  this.set_mode(next_mode);

  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  } // In all cases, if we newline while inside an expression it should be indented.


  this.indent();
};

Beautifier.prototype.handle_end_expr = function (current_token) {
  // statements inside expressions are not valid syntax, but...
  // statements must all be closed when their container closes
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);

  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token, current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }

  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN$2.START_EXPR && !this._options.space_in_empty_paren) {
      // () [] no inner space in empty parens like these, ever, ref #320
      this._output.trim();

      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }

  this.deindent();
  this.print_token(current_token);
  this.restore_mode();
  remove_redundant_indentation(this._output, this._previous_flags); // do {} while () // no statement required after

  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;
  }
};

Beautifier.prototype.handle_start_block = function (current_token) {
  this.handle_whitespace_and_comments(current_token); // Check if this is should be treated as a ObjectLiteral

  var next_token = this._tokens.peek();

  var second_token = this._tokens.peek(1);

  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (this._flags.case_body) {
    this.set_mode(MODE.BlockStatement);
  } else if (second_token && (in_array$1(second_token.text, [':', ',']) && in_array$1(next_token.type, [TOKEN$2.STRING, TOKEN$2.WORD, TOKEN$2.RESERVED]) || in_array$1(next_token.text, ['get', 'set', '...']) && in_array$1(second_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]))) {
    // We don't support TypeScript,but we didn't break it for a very long time.
    // We'll try to keep not breaking it.
    if (!in_array$1(this._last_last_text, ['class', 'interface'])) {
      this.set_mode(MODE.ObjectLiteral);
    } else {
      this.set_mode(MODE.BlockStatement);
    }
  } else if (this._flags.last_token.type === TOKEN$2.OPERATOR && this._flags.last_token.text === '=>') {
    // arrow function: (param1, paramN) => { statements }
    this.set_mode(MODE.BlockStatement);
  } else if (in_array$1(this._flags.last_token.type, [TOKEN$2.EQUALS, TOKEN$2.START_EXPR, TOKEN$2.COMMA, TOKEN$2.OPERATOR]) || reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])) {
    // Detecting shorthand function syntax is difficult by scanning forward,
    //     so check the surrounding context.
    // If the block is being returned, imported, export default, passed as arg,
    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }

  var empty_braces = !next_token.comments_before && next_token.text === '}';
  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' && this._flags.last_token.type === TOKEN$2.END_EXPR;

  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
    {
      // search forward for a newline wanted inside this block
      var index = 0;
      var check_token = null;
      this._flags.inline_frame = true;

      do {
        index += 1;
        check_token = this._tokens.peek(index - 1);

        if (check_token.newlines) {
          this._flags.inline_frame = false;
          break;
        }
      } while (check_token.type !== TOKEN$2.EOF && !(check_token.type === TOKEN$2.END_BLOCK && check_token.opened === current_token));
    }

  if ((this._options.brace_style === "expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN$2.OPERATOR && (empty_anonymous_function || this._flags.last_token.type === TOKEN$2.EQUALS || reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else')) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else {
    // collapse || inline_frame
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.COMMA)) {
      if (this._flags.last_token.type === TOKEN$2.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR && this._flags.inline_frame) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }

    if (this._flags.last_token.type !== TOKEN$2.OPERATOR && this._flags.last_token.type !== TOKEN$2.START_EXPR) {
      if (this._flags.last_token.type === TOKEN$2.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }

  this.print_token(current_token);
  this.indent(); // Except for specific cases, open braces are followed by a new line.

  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};

Beautifier.prototype.handle_end_block = function (current_token) {
  // statements must all be closed when their container closes
  this.handle_whitespace_and_comments(current_token);

  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  var empty_braces = this._flags.last_token.type === TOKEN$2.START_BLOCK;

  if (this._flags.inline_frame && !empty_braces) {
    // try inline_frame (only set if this._options.braces-preserve-inline) first
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    // skip {}
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        // we REALLY need a newline here, but newliner would skip that
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;
      } else {
        this.print_newline();
      }
    }
  }

  this.restore_mode();
  this.print_token(current_token);
};

Beautifier.prototype.handle_word = function (current_token) {
  if (current_token.type === TOKEN$2.RESERVED) {
    if (in_array$1(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN$2.WORD;
    } else if (current_token.text === 'import' && this._tokens.peek().text === '(') {
      current_token.type = TOKEN$2.WORD;
    } else if (in_array$1(current_token.text, ['as', 'from']) && !this._flags.import_block) {
      current_token.type = TOKEN$2.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();

      if (next_token.text === ':') {
        current_token.type = TOKEN$2.WORD;
      }
    }
  }

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN$2.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) && (this._flags.last_token.type !== TOKEN$2.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++') && this._flags.last_token.type !== TOKEN$2.EQUALS && (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, 'while')) {
      // do {} ## while ()
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      // do {} should always have while as the next word.
      // if we don't see the expected while, recover
      this.print_newline();
      this._flags.do_block = false;
    }
  } // if may be followed by else, or not
  // Bare/inline ifs are tricky
  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();


  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }

      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }

  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
    this.print_newline();

    if (this._flags.last_token.type !== TOKEN$2.END_BLOCK && (this._flags.case_body || this._options.jslint_happy)) {
      // switch cases following one another
      this.deindent();
    }

    this._flags.case_body = false;
    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }

  if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }

  if (reserved_word(current_token, 'function')) {
    if (in_array$1(this._flags.last_token.text, ['}', ';']) || this._output.just_added_newline() && !(in_array$1(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN$2.OPERATOR)) {
      // make sure there is a nice clean space of at least one blank line
      // before a new function definition
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }

    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD) {
      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) || reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'declare') {
        // accomodates Typescript declare function formatting
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR || this._flags.last_token.text === '=') {
      // foo = function
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) ; else {
      this.print_newline();
    }

    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }

  var prefix = 'NONE';

  if (this._flags.last_token.type === TOKEN$2.END_BLOCK) {
    if (this._previous_flags.inline_frame) {
      prefix = 'SPACE';
    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
      prefix = 'NEWLINE';
    } else {
      if (this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) {
        prefix = 'NEWLINE';
      } else {
        prefix = 'SPACE';
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    // TODO: Should this be for STATEMENT as well?
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN$2.STRING) {
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === '*' && (in_array$1(this._last_last_text, ['function', 'yield']) || this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ['{', ',']))) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this._output.space_before_token = true;
    prefix = 'NEWLINE';
  }

  if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ')') {
    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  }

  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
    if ((!(this._flags.last_token.type === TOKEN$2.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) || this._options.brace_style === "expand" || this._options.brace_style === "end-expand" || this._options.brace_style === "none" && current_token.newlines) && !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);

      var line = this._output.current_line; // If we trimmed and there's something other than a close block before us
      // put a newline back in.  Handles '} // comment' scenario.

      if (line.last() !== '}') {
        this.print_newline();
      }

      this._output.space_before_token = true;
    }
  } else if (prefix === 'NEWLINE') {
    if (reserved_array(this._flags.last_token, special_words)) {
      // no newline between 'return nnn'
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
      // accomodates Typescript declare formatting
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN$2.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN$2.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
        // no need to force newline on 'var': for (var x = 0...)
        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
          // no newline for } else if {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ')') {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
    this.print_newline(); // }, in lists get a newline treatment
  } else if (prefix === 'SPACE') {
    this._output.space_before_token = true;
  }

  if (current_token.previous && (current_token.previous.type === TOKEN$2.WORD || current_token.previous.type === TOKEN$2.RESERVED)) {
    this._output.space_before_token = true;
  }

  this.print_token(current_token);
  this._flags.last_word = current_token.text;

  if (current_token.type === TOKEN$2.RESERVED) {
    if (current_token.text === 'do') {
      this._flags.do_block = true;
    } else if (current_token.text === 'if') {
      this._flags.if_block = true;
    } else if (current_token.text === 'import') {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
      this._flags.import_block = false;
    }
  }
};

Beautifier.prototype.handle_semicolon = function (current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // Semicolon can be the start (and end) of a statement
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_token = this._tokens.peek();

  while (this._flags.mode === MODE.Statement && !(this._flags.if_block && reserved_word(next_token, 'else')) && !this._flags.do_block) {
    this.restore_mode();
  } // hacky but effective for the moment


  if (this._flags.import_block) {
    this._flags.import_block = false;
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_string = function (current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // One difference - strings want at least a space before
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);

    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else {
      this.print_newline();
    }
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_equals = function (current_token) {
  if (this.start_of_statement(current_token)) ; else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.declaration_statement) {
    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
    this._flags.declaration_assignment = true;
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};

Beautifier.prototype.handle_comma = function (current_token) {
  this.handle_whitespace_and_comments(current_token, true);
  this.print_token(current_token);
  this._output.space_before_token = true;

  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      // do not break on comma, for(var a = 1, b = 2)
      this._flags.declaration_assignment = false;
    }

    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      // for comma-first, we want to allow a newline before the comma
      // to turn into a newline after the comma, which we will fixup later
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral || this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }

    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    // EXPR or DO_BLOCK
    // for comma-first, we want to allow a newline before the comma
    // to turn into a newline after the comma, which we will fixup later
    this.allow_wrap_or_preserved_newline(current_token);
  }
};

Beautifier.prototype.handle_operator = function (current_token) {
  var isGeneratorAsterisk = current_token.text === '*' && (reserved_array(this._flags.last_token, ['function', 'yield']) || in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.COMMA, TOKEN$2.END_BLOCK, TOKEN$2.SEMICOLON]));
  var isUnary = in_array$1(current_token.text, ['-', '+']) && (in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.START_EXPR, TOKEN$2.EQUALS, TOKEN$2.OPERATOR]) || in_array$1(this._flags.last_token.text, line_starters$1) || this._flags.last_token.text === ',');

  if (this.start_of_statement(current_token)) ; else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    // "return" had a special handling in TK_WORD. Now we need to return the favor
    this._output.space_before_token = true;
    this.print_token(current_token);
    return;
  } // hack for actionscript's import .*;


  if (current_token.text === '*' && this._flags.last_token.type === TOKEN$2.DOT) {
    this.print_token(current_token);
    return;
  }

  if (current_token.text === '::') {
    // no spaces around exotic namespacing syntax operator
    this.print_token(current_token);
    return;
  } // Allow line wrapping between operators when operator_position is
  //   set to before or preserve


  if (this._flags.last_token.type === TOKEN$2.OPERATOR && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }

  if (current_token.text === ':' && this._flags.in_case) {
    this.print_token(current_token);
    this._flags.in_case = false;
    this._flags.case_body = true;

    if (this._tokens.peek().type !== TOKEN$2.START_BLOCK) {
      this.indent();
      this.print_newline();
    } else {
      this._output.space_before_token = true;
    }

    return;
  }

  var space_before = true;
  var space_after = true;
  var in_ternary = false;

  if (current_token.text === ':') {
    if (this._flags.ternary_depth === 0) {
      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === '?') {
    this._flags.ternary_depth += 1;
  } // let's handle the operator_position option prior to any conflicting logic


  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array$1(current_token.text, positionable_operators$1)) {
    var isColon = current_token.text === ':';
    var isTernaryColon = isColon && in_ternary;
    var isOtherColon = isColon && !in_ternary;

    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        // if the current token is : and it's not a ternary statement then we set space_before to false
        this._output.space_before_token = !isOtherColon;
        this.print_token(current_token);

        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.after_newline:
        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
        //   then print a newline.
        this._output.space_before_token = true;

        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }

        this.print_token(current_token);
        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        } // if we just added a newline, or the current token is : and it's not a ternary statement,
        //   then we set space_before to false


        space_before = !(this._output.just_added_newline() || isOtherColon);
        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }

  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;

    var next_token = this._tokens.peek();

    space_after = next_token && in_array$1(next_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]);
  } else if (current_token.text === '...') {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN$2.START_BLOCK;
    space_after = false;
  } else if (in_array$1(current_token.text, ['--', '++', '!', '~']) || isUnary) {
    // unary operators (and binary +/- pretending to be unary) special cases
    if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }

    space_before = false;
    space_after = false; // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
    // if there is a newline between -- or ++ and anything else we should preserve it.

    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++')) {
      this.print_newline(false, true);
    }

    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
      // for (;; ++i)
      //        ^^^
      space_before = true;
    }

    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR) {
      // a++ + ++b;
      // a - -b
      space_before = in_array$1(current_token.text, ['--', '-', '++', '+']) && in_array$1(this._flags.last_token.text, ['--', '-', '++', '+']); // + and - are not unary when preceeded by -- or ++ operator
      // a-- + b
      // a * +b
      // a - -b

      if (in_array$1(current_token.text, ['+', '-']) && in_array$1(this._flags.last_token.text, ['--', '++'])) {
        space_after = true;
      }
    }

    if ((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame || this._flags.mode === MODE.Statement) && (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
      // { foo; --i }
      // foo(); --bar;
      this.print_newline();
    }
  }

  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};

Beautifier.prototype.handle_block_comment = function (current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);

    if (current_token.directives && current_token.directives.preserve === 'end') {
      // If we're testing the raw output behavior, do not allow a directive to turn it off.
      this._output.raw = this._options.test_output_raw;
    }

    return;
  }

  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);

    if (current_token.directives.preserve === 'start') {
      this._output.raw = true;
    }

    this.print_newline(false, true);
    return;
  } // inline block


  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  } else {
    this.print_block_commment(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.print_block_commment = function (current_token, preserve_statement_flags) {
  var lines = split_linebreaks(current_token.text);
  var j; // iterator for this case

  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length; // block comment starts with a new line

  this.print_newline(false, preserve_statement_flags); // first line always indented

  this.print_token_line_indentation(current_token);

  this._output.add_token(lines[0]);

  this.print_newline(false, preserve_statement_flags);

  if (lines.length > 1) {
    lines = lines.slice(1);
    javadoc = all_lines_start_with(lines, '*');
    starless = each_line_matches_indent(lines, lastIndent);

    if (javadoc) {
      this._flags.alignment = 1;
    }

    for (j = 0; j < lines.length; j++) {
      if (javadoc) {
        // javadoc: reformat and re-indent
        this.print_token_line_indentation(current_token);

        this._output.add_token(ltrim(lines[j]));
      } else if (starless && lines[j]) {
        // starless: re-indent non-empty content, avoiding trim
        this.print_token_line_indentation(current_token);

        this._output.add_token(lines[j].substring(lastIndentLength));
      } else {
        // normal comments output raw
        this._output.current_line.set_indent(-1);

        this._output.add_token(lines[j]);
      } // for comments on their own line or  more than one line, make sure there's a new line after


      this.print_newline(false, preserve_statement_flags);
    }

    this._flags.alignment = 0;
  }
};

Beautifier.prototype.handle_comment = function (current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_dot = function (current_token) {
  if (this.start_of_statement(current_token)) ; else {
    this.handle_whitespace_and_comments(current_token, true);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    // allow preserved newlines before dots in general
    // force newlines on dots after close paren when break_chained - for bar().baz()
    this.allow_wrap_or_preserved_newline(current_token, this._flags.last_token.text === ')' && this._options.break_chained_methods);
  } // Only unindent chained method dot if this dot starts a new line.
  // Otherwise the automatic extra indentation removal will handle the over indent


  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_unknown = function (current_token, preserve_statement_flags) {
  this.print_token(current_token);

  if (current_token.text[current_token.text.length - 1] === '\n') {
    this.print_newline(false, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_eof = function (current_token) {
  // Unwind any open statements
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);
};

var Beautifier_1 = Beautifier;
var beautifier = {
  Beautifier: Beautifier_1
};

var Beautifier$1 = beautifier.Beautifier,
    Options$3 = options$1.Options;

function js_beautify(js_source_text, options) {
  var beautifier = new Beautifier$1(js_source_text, options);
  return beautifier.beautify();
}

var javascript = js_beautify;

var defaultOptions = function defaultOptions() {
  return new Options$3();
};
javascript.defaultOptions = defaultOptions;

var BaseOptions$1 = options.Options;

function Options$4(options) {
  BaseOptions$1.call(this, options, 'css');
  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
  this.newline_between_rules = this._get_boolean('newline_between_rules', true);

  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');

  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;
}

Options$4.prototype = new BaseOptions$1();
var Options_1$2 = Options$4;
var options$2 = {
  Options: Options_1$2
};

var Options$5 = options$2.Options;
var Output$2 = output.Output;
var InputScanner$3 = inputscanner.InputScanner;
var Directives$2 = directives.Directives;
var directives_core$1 = new Directives$2(/\/\*/, /\*\//);
var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g; // tokenizer

var whitespaceChar = /\s/;
var whitespacePattern = /(?:\s|\n)+/g;
var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

function Beautifier$2(source_text, options) {
  this._source_text = source_text || ''; // Allow the setting of language/file-type specific options
  // with inheritance of overall settings

  this._options = new Options$5(options);
  this._ch = null;
  this._input = null; // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule

  this.NESTED_AT_RULE = {
    "@page": true,
    "@font-face": true,
    "@keyframes": true,
    // also in CONDITIONAL_GROUP_RULE below
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.CONDITIONAL_GROUP_RULE = {
    "@media": true,
    "@supports": true,
    "@document": true
  };
}

Beautifier$2.prototype.eatString = function (endChars) {
  var result = '';
  this._ch = this._input.next();

  while (this._ch) {
    result += this._ch;

    if (this._ch === "\\") {
      result += this._input.next();
    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
      break;
    }

    this._ch = this._input.next();
  }

  return result;
}; // Skips any white space in the source text from the current position.
// When allowAtLeastOneNewLine is true, will output new lines for each
// newline character found; if the user has preserve_newlines off, only
// the first newline will be output


Beautifier$2.prototype.eatWhitespace = function (allowAtLeastOneNewLine) {
  var result = whitespaceChar.test(this._input.peek());
  var isFirstNewLine = true;

  while (whitespaceChar.test(this._input.peek())) {
    this._ch = this._input.next();

    if (allowAtLeastOneNewLine && this._ch === '\n') {
      if (this._options.preserve_newlines || isFirstNewLine) {
        isFirstNewLine = false;

        this._output.add_new_line(true);
      }
    }
  }

  return result;
}; // Nested pseudo-class if we are insideRule
// and the next special character found opens
// a new block


Beautifier$2.prototype.foundNestedPseudoClass = function () {
  var openParen = 0;
  var i = 1;

  var ch = this._input.peek(i);

  while (ch) {
    if (ch === "{") {
      return true;
    } else if (ch === '(') {
      // pseudoclasses can contain ()
      openParen += 1;
    } else if (ch === ')') {
      if (openParen === 0) {
        return false;
      }

      openParen -= 1;
    } else if (ch === ";" || ch === "}") {
      return false;
    }

    i++;
    ch = this._input.peek(i);
  }

  return false;
};

Beautifier$2.prototype.print_string = function (output_string) {
  this._output.set_indent(this._indentLevel);

  this._output.non_breaking_space = true;

  this._output.add_token(output_string);
};

Beautifier$2.prototype.preserveSingleSpace = function (isAfterSpace) {
  if (isAfterSpace) {
    this._output.space_before_token = true;
  }
};

Beautifier$2.prototype.indent = function () {
  this._indentLevel++;
};

Beautifier$2.prototype.outdent = function () {
  if (this._indentLevel > 0) {
    this._indentLevel--;
  }
};
/*_____________________--------------------_____________________*/


Beautifier$2.prototype.beautify = function () {
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;

  if (eol === 'auto') {
    eol = '\n';

    if (source_text && lineBreak.test(source_text || '')) {
      eol = source_text.match(lineBreak)[0];
    }
  } // HACK: newline parsing inconsistent. This brute force normalizes the this._input.


  source_text = source_text.replace(allLineBreaks, '\n'); // reset

  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  this._output = new Output$2(this._options, baseIndentString);
  this._input = new InputScanner$3(source_text);
  this._indentLevel = 0;
  this._nestedLevel = 0;
  this._ch = null;
  var parenLevel = 0;
  var insideRule = false; // This is the value side of a property value pair (blue in the following ex)
  // label { content: blue }

  var insidePropertyValue = false;
  var enteringConditionalGroup = false;
  var insideAtExtend = false;
  var insideAtImport = false;
  var topCharacter = this._ch;
  var whitespace;
  var isAfterSpace;
  var previous_ch;

  while (true) {
    whitespace = this._input.read(whitespacePattern);
    isAfterSpace = whitespace !== '';
    previous_ch = topCharacter;
    this._ch = this._input.next();

    if (this._ch === '\\' && this._input.hasNext()) {
      this._ch += this._input.next();
    }

    topCharacter = this._ch;

    if (!this._ch) {
      break;
    } else if (this._ch === '/' && this._input.peek() === '*') {
      // /* css comment */
      // Always start block comments on a new line.
      // This handles scenarios where a block comment immediately
      // follows a property definition on the same line or where
      // minified code is being beautified.
      this._output.add_new_line();

      this._input.back();

      var comment = this._input.read(block_comment_pattern); // Handle ignore directive


      var directives = directives_core$1.get_directives(comment);

      if (directives && directives.ignore === 'start') {
        comment += directives_core$1.readIgnored(this._input);
      }

      this.print_string(comment); // Ensures any new lines following the comment are preserved

      this.eatWhitespace(true); // Block comments are followed by a new line so they don't
      // share a line with other properties

      this._output.add_new_line();
    } else if (this._ch === '/' && this._input.peek() === '/') {
      // // single line comment
      // Preserves the space before a comment
      // on the same line as a rule
      this._output.space_before_token = true;

      this._input.back();

      this.print_string(this._input.read(comment_pattern)); // Ensures any new lines following the comment are preserved

      this.eatWhitespace(true);
    } else if (this._ch === '@') {
      this.preserveSingleSpace(isAfterSpace); // deal with less propery mixins @{...}

      if (this._input.peek() === '{') {
        this.print_string(this._ch + this.eatString('}'));
      } else {
        this.print_string(this._ch); // strip trailing space, if present, for hash property checks

        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

        if (variableOrRule.match(/[ :]$/)) {
          // we have a variable or pseudo-class, add it and insert one space before continuing
          variableOrRule = this.eatString(": ").replace(/\s$/, '');
          this.print_string(variableOrRule);
          this._output.space_before_token = true;
        }

        variableOrRule = variableOrRule.replace(/\s$/, '');

        if (variableOrRule === 'extend') {
          insideAtExtend = true;
        } else if (variableOrRule === 'import') {
          insideAtImport = true;
        } // might be a nesting at-rule


        if (variableOrRule in this.NESTED_AT_RULE) {
          this._nestedLevel += 1;

          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
            enteringConditionalGroup = true;
          } // might be less variable

        } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
          insidePropertyValue = true;
          this.indent();
        }
      }
    } else if (this._ch === '#' && this._input.peek() === '{') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString('}'));
    } else if (this._ch === '{') {
      if (insidePropertyValue) {
        insidePropertyValue = false;
        this.outdent();
      }

      this.indent();
      this._output.space_before_token = true;
      this.print_string(this._ch); // when entering conditional groups, only rulesets are allowed

      if (enteringConditionalGroup) {
        enteringConditionalGroup = false;
        insideRule = this._indentLevel > this._nestedLevel;
      } else {
        // otherwise, declarations are also allowed
        insideRule = this._indentLevel >= this._nestedLevel;
      }

      if (this._options.newline_between_rules && insideRule) {
        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
          this._output.ensure_empty_line_above('/', ',');
        }
      }

      this.eatWhitespace(true);

      this._output.add_new_line();
    } else if (this._ch === '}') {
      this.outdent();

      this._output.add_new_line();

      if (previous_ch === '{') {
        this._output.trim(true);
      }

      insideAtImport = false;
      insideAtExtend = false;

      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }

      this.print_string(this._ch);
      insideRule = false;

      if (this._nestedLevel) {
        this._nestedLevel--;
      }

      this.eatWhitespace(true);

      this._output.add_new_line();

      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
        if (this._input.peek() !== '}') {
          this._output.add_new_line(true);
        }
      }
    } else if (this._ch === ":") {
      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend && parenLevel === 0) {
        // 'property: value' delimiter
        // which could be in a conditional group query
        this.print_string(':');

        if (!insidePropertyValue) {
          insidePropertyValue = true;
          this._output.space_before_token = true;
          this.eatWhitespace(true);
          this.indent();
        }
      } else {
        // sass/less parent reference don't use a space
        // sass nested pseudo-class don't use a space
        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
        if (this._input.lookBack(" ")) {
          this._output.space_before_token = true;
        }

        if (this._input.peek() === ":") {
          // pseudo-element
          this._ch = this._input.next();
          this.print_string("::");
        } else {
          // pseudo-class
          this.print_string(':');
        }
      }
    } else if (this._ch === '"' || this._ch === '\'') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString(this._ch));
      this.eatWhitespace(true);
    } else if (this._ch === ';') {
      if (parenLevel === 0) {
        if (insidePropertyValue) {
          this.outdent();
          insidePropertyValue = false;
        }

        insideAtExtend = false;
        insideAtImport = false;
        this.print_string(this._ch);
        this.eatWhitespace(true); // This maintains single line comments on the same
        // line. Block comments are also affected, but
        // a new line is always output before one inside
        // that section

        if (this._input.peek() !== '/') {
          this._output.add_new_line();
        }
      } else {
        this.print_string(this._ch);
        this.eatWhitespace(true);
        this._output.space_before_token = true;
      }
    } else if (this._ch === '(') {
      // may be a url
      if (this._input.lookBack("url")) {
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
        this._ch = this._input.next();

        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
          this._input.back();
        } else if (this._ch) {
          this.print_string(this._ch + this.eatString(')'));

          if (parenLevel) {
            parenLevel--;
            this.outdent();
          }
        }
      } else {
        this.preserveSingleSpace(isAfterSpace);
        this.print_string(this._ch);
        this.eatWhitespace();
        parenLevel++;
        this.indent();
      }
    } else if (this._ch === ')') {
      if (parenLevel) {
        parenLevel--;
        this.outdent();
      }

      this.print_string(this._ch);
    } else if (this._ch === ',') {
      this.print_string(this._ch);
      this.eatWhitespace(true);

      if (this._options.selector_separator_newline && !insidePropertyValue && parenLevel === 0 && !insideAtImport) {
        this._output.add_new_line();
      } else {
        this._output.space_before_token = true;
      }
    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel === 0) {
      //handle combinator spacing
      if (this._options.space_around_combinator) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
        this._output.space_before_token = true;
      } else {
        this.print_string(this._ch);
        this.eatWhitespace(); // squash extra whitespace

        if (this._ch && whitespaceChar.test(this._ch)) {
          this._ch = '';
        }
      }
    } else if (this._ch === ']') {
      this.print_string(this._ch);
    } else if (this._ch === '[') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    } else if (this._ch === '=') {
      // no whitespace before or after
      this.eatWhitespace();
      this.print_string('=');

      if (whitespaceChar.test(this._ch)) {
        this._ch = '';
      }
    } else if (this._ch === '!' && !this._input.lookBack("\\")) {
      // !important
      this.print_string(' ');
      this.print_string(this._ch);
    } else {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    }
  }

  var sweetCode = this._output.get_code(eol);

  return sweetCode;
};

var Beautifier_1$1 = Beautifier$2;
var beautifier$1 = {
  Beautifier: Beautifier_1$1
};

var Beautifier$3 = beautifier$1.Beautifier,
    Options$6 = options$2.Options;

function css_beautify(source_text, options) {
  var beautifier = new Beautifier$3(source_text, options);
  return beautifier.beautify();
}

var css = css_beautify;

var defaultOptions$1 = function defaultOptions() {
  return new Options$6();
};
css.defaultOptions = defaultOptions$1;

var BaseOptions$2 = options.Options;

function Options$7(options) {
  BaseOptions$2.call(this, options, 'html');

  if (this.templating.length === 1 && this.templating[0] === 'auto') {
    this.templating = ['django', 'erb', 'handlebars', 'php'];
  }

  this.indent_inner_html = this._get_boolean('indent_inner_html');
  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);
  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
  this.wrap_attributes = this._get_selection('wrap_attributes', ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']); // Block vs inline elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements
  // https://www.w3.org/TR/html5/dom.html#phrasing-content

  this.inline = this._get_array('inline', ['a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite', 'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript', 'object', 'output', 'progress', 'q', 'ruby', 's', 'samp',
  /* 'script', */
  'select', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var', 'video', 'wbr', 'text', // obsolete inline tags
  'acronym', 'big', 'strike', 'tt']);
  this.void_elements = this._get_array('void_elements', [// HTLM void elements - aka self-closing tags - aka singletons
  // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr', // NOTE: Optional tags are too complex for a simple list
  // they are hard coded in _do_optional_end_element
  // Doctype and xml elements
  '!doctype', '?xml', // obsolete tags
  // basefont: https://www.computerhope.com/jargon/h/html-basefont-tag.htm
  // isndex: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/isindex
  'basefont', 'isindex']);
  this.unformatted = this._get_array('unformatted', []);
  this.content_unformatted = this._get_array('content_unformatted', ['pre', 'textarea']);
  this.unformatted_content_delimiter = this._get_characters('unformatted_content_delimiter');
  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);
}

Options$7.prototype = new BaseOptions$2();
var Options_1$3 = Options$7;
var options$3 = {
  Options: Options_1$3
};

var BaseTokenizer$1 = tokenizer.Tokenizer;
var BASETOKEN$1 = tokenizer.TOKEN;
var Directives$3 = directives.Directives;
var TemplatablePattern$2 = templatablepattern.TemplatablePattern;
var Pattern$4 = pattern.Pattern;
var TOKEN$3 = {
  TAG_OPEN: 'TK_TAG_OPEN',
  TAG_CLOSE: 'TK_TAG_CLOSE',
  ATTRIBUTE: 'TK_ATTRIBUTE',
  EQUALS: 'TK_EQUALS',
  VALUE: 'TK_VALUE',
  COMMENT: 'TK_COMMENT',
  TEXT: 'TK_TEXT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN$1.START,
  RAW: BASETOKEN$1.RAW,
  EOF: BASETOKEN$1.EOF
};
var directives_core$2 = new Directives$3(/<\!--/, /-->/);

var Tokenizer$3 = function Tokenizer(input_string, options) {
  BaseTokenizer$1.call(this, input_string, options);
  this._current_tag_name = ''; // Words end at whitespace or when a tag starts
  // if we are indenting handlebars, they are considered tags

  var templatable_reader = new TemplatablePattern$2(this._input).read_options(this._options);
  var pattern_reader = new Pattern$4(this._input);
  this.__patterns = {
    word: templatable_reader.until(/[\n\r\t <]/),
    single_quote: templatable_reader.until_after(/'/),
    double_quote: templatable_reader.until_after(/"/),
    attribute: templatable_reader.until(/[\n\r\t =\/>]/),
    element_name: templatable_reader.until(/[\n\r\t >\/]/),
    handlebars_comment: pattern_reader.starting_with(/{{!--/).until_after(/--}}/),
    handlebars: pattern_reader.starting_with(/{{/).until_after(/}}/),
    handlebars_open: pattern_reader.until(/[\n\r\t }]/),
    handlebars_raw_close: pattern_reader.until(/}}/),
    comment: pattern_reader.starting_with(/<!--/).until_after(/-->/),
    cdata: pattern_reader.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
    // https://en.wikipedia.org/wiki/Conditional_comment
    conditional_comment: pattern_reader.starting_with(/<!\[/).until_after(/]>/),
    processing: pattern_reader.starting_with(/<\?/).until_after(/\?>/)
  };

  if (this._options.indent_handlebars) {
    this.__patterns.word = this.__patterns.word.exclude('handlebars');
  }

  this._unformatted_content_delimiter = null;

  if (this._options.unformatted_content_delimiter) {
    var literal_regexp = this._input.get_literal_regexp(this._options.unformatted_content_delimiter);

    this.__patterns.unformatted_content_delimiter = pattern_reader.matching(literal_regexp).until_after(literal_regexp);
  }
};

Tokenizer$3.prototype = new BaseTokenizer$1();

Tokenizer$3.prototype._is_comment = function (current_token) {
  // jshint unused:false
  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer$3.prototype._is_opening = function (current_token) {
  return current_token.type === TOKEN$3.TAG_OPEN;
};

Tokenizer$3.prototype._is_closing = function (current_token, open_token) {
  return current_token.type === TOKEN$3.TAG_CLOSE && open_token && ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<' || current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{');
};

Tokenizer$3.prototype._reset = function () {
  this._current_tag_name = '';
};

Tokenizer$3.prototype._get_next_token = function (previous_token, open_token) {
  // jshint unused:false
  var token = null;

  this._readWhitespace();

  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN$3.EOF, '');
  }

  token = token || this._read_open_handlebars(c, open_token);
  token = token || this._read_attribute(c, previous_token, open_token);
  token = token || this._read_raw_content(c, previous_token, open_token);
  token = token || this._read_close(c, open_token);
  token = token || this._read_content_word(c);
  token = token || this._read_comment_or_cdata(c);
  token = token || this._read_processing(c);
  token = token || this._read_open(c, open_token);
  token = token || this._create_token(TOKEN$3.UNKNOWN, this._input.next());
  return token;
};

Tokenizer$3.prototype._read_comment_or_cdata = function (c) {
  // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1); // We treat all comments as literals, even more than preformatted tags
    // we only look for the appropriate closing marker


    if (peek1 === '!') {
      resulting_string = this.__patterns.comment.read(); // only process directive on html comments

      if (resulting_string) {
        directives = directives_core$2.get_directives(resulting_string);

        if (directives && directives.ignore === 'start') {
          resulting_string += directives_core$2.readIgnored(this._input);
        }
      } else {
        resulting_string = this.__patterns.cdata.read();
      }
    }

    if (resulting_string) {
      token = this._create_token(TOKEN$3.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer$3.prototype._read_processing = function (c) {
  // jshint unused:false
  var token = null;
  var resulting_string = null;
  var directives = null;

  if (c === '<') {
    var peek1 = this._input.peek(1);

    if (peek1 === '!' || peek1 === '?') {
      resulting_string = this.__patterns.conditional_comment.read();
      resulting_string = resulting_string || this.__patterns.processing.read();
    }

    if (resulting_string) {
      token = this._create_token(TOKEN$3.COMMENT, resulting_string);
      token.directives = directives;
    }
  }

  return token;
};

Tokenizer$3.prototype._read_open = function (c, open_token) {
  var resulting_string = null;
  var token = null;

  if (!open_token) {
    if (c === '<') {
      resulting_string = this._input.next();

      if (this._input.peek() === '/') {
        resulting_string += this._input.next();
      }

      resulting_string += this.__patterns.element_name.read();
      token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
    }
  }

  return token;
};

Tokenizer$3.prototype._read_open_handlebars = function (c, open_token) {
  var resulting_string = null;
  var token = null;

  if (!open_token) {
    if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
      if (this._input.peek(2) === '!') {
        resulting_string = this.__patterns.handlebars_comment.read();
        resulting_string = resulting_string || this.__patterns.handlebars.read();
        token = this._create_token(TOKEN$3.COMMENT, resulting_string);
      } else {
        resulting_string = this.__patterns.handlebars_open.read();
        token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
      }
    }
  }

  return token;
};

Tokenizer$3.prototype._read_close = function (c, open_token) {
  var resulting_string = null;
  var token = null;

  if (open_token) {
    if (open_token.text[0] === '<' && (c === '>' || c === '/' && this._input.peek(1) === '>')) {
      resulting_string = this._input.next();

      if (c === '/') {
        //  for close tag "/>"
        resulting_string += this._input.next();
      }

      token = this._create_token(TOKEN$3.TAG_CLOSE, resulting_string);
    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
      this._input.next();

      this._input.next();

      token = this._create_token(TOKEN$3.TAG_CLOSE, '}}');
    }
  }

  return token;
};

Tokenizer$3.prototype._read_attribute = function (c, previous_token, open_token) {
  var token = null;
  var resulting_string = '';

  if (open_token && open_token.text[0] === '<') {
    if (c === '=') {
      token = this._create_token(TOKEN$3.EQUALS, this._input.next());
    } else if (c === '"' || c === "'") {
      var content = this._input.next();

      if (c === '"') {
        content += this.__patterns.double_quote.read();
      } else {
        content += this.__patterns.single_quote.read();
      }

      token = this._create_token(TOKEN$3.VALUE, content);
    } else {
      resulting_string = this.__patterns.attribute.read();

      if (resulting_string) {
        if (previous_token.type === TOKEN$3.EQUALS) {
          token = this._create_token(TOKEN$3.VALUE, resulting_string);
        } else {
          token = this._create_token(TOKEN$3.ATTRIBUTE, resulting_string);
        }
      }
    }
  }

  return token;
};

Tokenizer$3.prototype._is_content_unformatted = function (tag_name) {
  // void_elements have no content and so cannot have unformatted content
  // script and style tags should always be read as unformatted content
  // finally content_unformatted and unformatted element contents are unformatted
  return this._options.void_elements.indexOf(tag_name) === -1 && (this._options.content_unformatted.indexOf(tag_name) !== -1 || this._options.unformatted.indexOf(tag_name) !== -1);
};

Tokenizer$3.prototype._read_raw_content = function (c, previous_token, open_token) {
  // jshint unused:false
  var resulting_string = '';

  if (open_token && open_token.text[0] === '{') {
    resulting_string = this.__patterns.handlebars_raw_close.read();
  } else if (previous_token.type === TOKEN$3.TAG_CLOSE && previous_token.opened.text[0] === '<') {
    var tag_name = previous_token.opened.text.substr(1).toLowerCase();

    if (tag_name === 'script' || tag_name === 'style') {
      // Script and style tags are allowed to have comments wrapping their content
      // or just have regular content.
      var token = this._read_comment_or_cdata(c);

      if (token) {
        token.type = TOKEN$3.TEXT;
        return token;
      }

      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    } else if (this._is_content_unformatted(tag_name)) {
      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    }
  }

  if (resulting_string) {
    return this._create_token(TOKEN$3.TEXT, resulting_string);
  }

  return null;
};

Tokenizer$3.prototype._read_content_word = function (c) {
  var resulting_string = '';

  if (this._options.unformatted_content_delimiter) {
    if (c === this._options.unformatted_content_delimiter[0]) {
      resulting_string = this.__patterns.unformatted_content_delimiter.read();
    }
  }

  if (!resulting_string) {
    resulting_string = this.__patterns.word.read();
  }

  if (resulting_string) {
    return this._create_token(TOKEN$3.TEXT, resulting_string);
  }
};

var Tokenizer_1$2 = Tokenizer$3;
var TOKEN_1$2 = TOKEN$3;
var tokenizer$2 = {
  Tokenizer: Tokenizer_1$2,
  TOKEN: TOKEN_1$2
};

var Options$8 = options$3.Options;
var Output$3 = output.Output;
var Tokenizer$4 = tokenizer$2.Tokenizer;
var TOKEN$4 = tokenizer$2.TOKEN;
var lineBreak$1 = /\r\n|[\r\n]/;
var allLineBreaks$1 = /\r\n|[\r\n]/g;

var Printer = function Printer(options, base_indent_string) {
  //handles input/output and some other printing functions
  this.indent_level = 0;
  this.alignment_size = 0;
  this.max_preserve_newlines = options.max_preserve_newlines;
  this.preserve_newlines = options.preserve_newlines;
  this._output = new Output$3(options, base_indent_string);
};

Printer.prototype.current_line_has_match = function (pattern) {
  return this._output.current_line.has_match(pattern);
};

Printer.prototype.set_space_before_token = function (value, non_breaking) {
  this._output.space_before_token = value;
  this._output.non_breaking_space = non_breaking;
};

Printer.prototype.set_wrap_point = function () {
  this._output.set_indent(this.indent_level, this.alignment_size);

  this._output.set_wrap_point();
};

Printer.prototype.add_raw_token = function (token) {
  this._output.add_raw_token(token);
};

Printer.prototype.print_preserved_newlines = function (raw_token) {
  var newlines = 0;

  if (raw_token.type !== TOKEN$4.TEXT && raw_token.previous.type !== TOKEN$4.TEXT) {
    newlines = raw_token.newlines ? 1 : 0;
  }

  if (this.preserve_newlines) {
    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
  }

  for (var n = 0; n < newlines; n++) {
    this.print_newline(n > 0);
  }

  return newlines !== 0;
};

Printer.prototype.traverse_whitespace = function (raw_token) {
  if (raw_token.whitespace_before || raw_token.newlines) {
    if (!this.print_preserved_newlines(raw_token)) {
      this._output.space_before_token = true;
    }

    return true;
  }

  return false;
};

Printer.prototype.previous_token_wrapped = function () {
  return this._output.previous_token_wrapped;
};

Printer.prototype.print_newline = function (force) {
  this._output.add_new_line(force);
};

Printer.prototype.print_token = function (token) {
  if (token.text) {
    this._output.set_indent(this.indent_level, this.alignment_size);

    this._output.add_token(token.text);
  }
};

Printer.prototype.indent = function () {
  this.indent_level++;
};

Printer.prototype.get_full_indent = function (level) {
  level = this.indent_level + (level || 0);

  if (level < 1) {
    return '';
  }

  return this._output.get_indent_string(level);
};

var get_type_attribute = function get_type_attribute(start_token) {
  var result = null;
  var raw_token = start_token.next; // Search attributes for a type attribute

  while (raw_token.type !== TOKEN$4.EOF && start_token.closed !== raw_token) {
    if (raw_token.type === TOKEN$4.ATTRIBUTE && raw_token.text === 'type') {
      if (raw_token.next && raw_token.next.type === TOKEN$4.EQUALS && raw_token.next.next && raw_token.next.next.type === TOKEN$4.VALUE) {
        result = raw_token.next.next.text;
      }

      break;
    }

    raw_token = raw_token.next;
  }

  return result;
};

var get_custom_beautifier_name = function get_custom_beautifier_name(tag_check, raw_token) {
  var typeAttribute = null;
  var result = null;

  if (!raw_token.closed) {
    return null;
  }

  if (tag_check === 'script') {
    typeAttribute = 'text/javascript';
  } else if (tag_check === 'style') {
    typeAttribute = 'text/css';
  }

  typeAttribute = get_type_attribute(raw_token) || typeAttribute; // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
  // For those without a type attribute use default;

  if (typeAttribute.search('text/css') > -1) {
    result = 'css';
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1) {
    result = 'javascript';
  } else if (typeAttribute.search(/(text|application|dojo)\/(x-)?(html)/) > -1) {
    result = 'html';
  } else if (typeAttribute.search(/test\/null/) > -1) {
    // Test only mime-type for testing the beautifier when null is passed as beautifing function
    result = 'null';
  }

  return result;
};

function in_array$2(what, arr) {
  return arr.indexOf(what) !== -1;
}

function TagFrame(parent, parser_token, indent_level) {
  this.parent = parent || null;
  this.tag = parser_token ? parser_token.tag_name : '';
  this.indent_level = indent_level || 0;
  this.parser_token = parser_token || null;
}

function TagStack(printer) {
  this._printer = printer;
  this._current_frame = null;
}

TagStack.prototype.get_parser_token = function () {
  return this._current_frame ? this._current_frame.parser_token : null;
};

TagStack.prototype.record_tag = function (parser_token) {
  //function to record a tag and its parent in this.tags Object
  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
  this._current_frame = new_frame;
};

TagStack.prototype._try_pop_frame = function (frame) {
  //function to retrieve the opening tag to the corresponding closer
  var parser_token = null;

  if (frame) {
    parser_token = frame.parser_token;
    this._printer.indent_level = frame.indent_level;
    this._current_frame = frame.parent;
  }

  return parser_token;
};

TagStack.prototype._get_frame = function (tag_list, stop_list) {
  //function to retrieve the opening tag to the corresponding closer
  var frame = this._current_frame;

  while (frame) {
    //till we reach '' (the initial value);
    if (tag_list.indexOf(frame.tag) !== -1) {
      //if this is it use it
      break;
    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
      frame = null;
      break;
    }

    frame = frame.parent;
  }

  return frame;
};

TagStack.prototype.try_pop = function (tag, stop_list) {
  //function to retrieve the opening tag to the corresponding closer
  var frame = this._get_frame([tag], stop_list);

  return this._try_pop_frame(frame);
};

TagStack.prototype.indent_to_tag = function (tag_list) {
  var frame = this._get_frame(tag_list);

  if (frame) {
    this._printer.indent_level = frame.indent_level;
  }
};

function Beautifier$4(source_text, options, js_beautify, css_beautify) {
  //Wrapper function to invoke all the necessary constructors and deal with the output.
  this._source_text = source_text || '';
  options = options || {};
  this._js_beautify = js_beautify;
  this._css_beautify = css_beautify;
  this._tag_stack = null; // Allow the setting of language/file-type specific options
  // with inheritance of overall settings

  var optionHtml = new Options$8(options, 'html');
  this._options = optionHtml;
  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
  this._is_wrap_attributes_force_expand_multiline = this._options.wrap_attributes === 'force-expand-multiline';
  this._is_wrap_attributes_force_aligned = this._options.wrap_attributes === 'force-aligned';
  this._is_wrap_attributes_aligned_multiple = this._options.wrap_attributes === 'aligned-multiple';
  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
  this._is_wrap_attributes_preserve_aligned = this._options.wrap_attributes === 'preserve-aligned';
}

Beautifier$4.prototype.beautify = function () {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;

  if (this._options.eol === 'auto') {
    eol = '\n';

    if (source_text && lineBreak$1.test(source_text)) {
      eol = source_text.match(lineBreak$1)[0];
    }
  } // HACK: newline parsing inconsistent. This brute force normalizes the input.


  source_text = source_text.replace(allLineBreaks$1, '\n');
  var baseIndentString = source_text.match(/^[\t ]*/)[0];
  var last_token = {
    text: '',
    type: ''
  };
  var last_tag_token = new TagOpenParserToken();
  var printer = new Printer(this._options, baseIndentString);
  var tokens = new Tokenizer$4(source_text, this._options).tokenize();
  this._tag_stack = new TagStack(printer);
  var parser_token = null;
  var raw_token = tokens.next();

  while (raw_token.type !== TOKEN$4.EOF) {
    if (raw_token.type === TOKEN$4.TAG_OPEN || raw_token.type === TOKEN$4.COMMENT) {
      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
      last_tag_token = parser_token;
    } else if (raw_token.type === TOKEN$4.ATTRIBUTE || raw_token.type === TOKEN$4.EQUALS || raw_token.type === TOKEN$4.VALUE || raw_token.type === TOKEN$4.TEXT && !last_tag_token.tag_complete) {
      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
    } else if (raw_token.type === TOKEN$4.TAG_CLOSE) {
      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
    } else if (raw_token.type === TOKEN$4.TEXT) {
      parser_token = this._handle_text(printer, raw_token, last_tag_token);
    } else {
      // This should never happen, but if it does. Print the raw token
      printer.add_raw_token(raw_token);
    }

    last_token = parser_token;
    raw_token = tokens.next();
  }

  var sweet_code = printer._output.get_code(eol);

  return sweet_code;
};

Beautifier$4.prototype._handle_tag_close = function (printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.alignment_size = 0;
  last_tag_token.tag_complete = true;
  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);

  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    if (last_tag_token.tag_start_char === '<') {
      printer.set_space_before_token(raw_token.text[0] === '/', true); // space before />, no space before >

      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
        printer.print_newline(false);
      }
    }

    printer.print_token(raw_token);
  }

  if (last_tag_token.indent_content && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.indent(); // only indent once per opened tag

    last_tag_token.indent_content = false;
  }

  if (!last_tag_token.is_inline_element && !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.set_wrap_point();
  }

  return parser_token;
};

Beautifier$4.prototype._handle_inside_tag = function (printer, raw_token, last_tag_token, tokens) {
  var wrapped = last_tag_token.has_wrapped_attrs;
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '', true);

  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN$4.TEXT) {
    // For the insides of handlebars allow newlines or a single space between open and contents
    if (printer.print_preserved_newlines(raw_token)) {
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
    } else {
      printer.print_token(raw_token);
    }
  } else {
    if (raw_token.type === TOKEN$4.ATTRIBUTE) {
      printer.set_space_before_token(true);
      last_tag_token.attr_count += 1;
    } else if (raw_token.type === TOKEN$4.EQUALS) {
      //no space before =
      printer.set_space_before_token(false);
    } else if (raw_token.type === TOKEN$4.VALUE && raw_token.previous.type === TOKEN$4.EQUALS) {
      //no space before value
      printer.set_space_before_token(false);
    }

    if (raw_token.type === TOKEN$4.ATTRIBUTE && last_tag_token.tag_start_char === '<') {
      if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
        printer.traverse_whitespace(raw_token);
        wrapped = wrapped || raw_token.newlines !== 0;
      }

      if (this._is_wrap_attributes_force) {
        var force_attr_wrap = last_tag_token.attr_count > 1;

        if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
          var is_only_attribute = true;
          var peek_index = 0;
          var peek_token;

          do {
            peek_token = tokens.peek(peek_index);

            if (peek_token.type === TOKEN$4.ATTRIBUTE) {
              is_only_attribute = false;
              break;
            }

            peek_index += 1;
          } while (peek_index < 4 && peek_token.type !== TOKEN$4.EOF && peek_token.type !== TOKEN$4.TAG_CLOSE);

          force_attr_wrap = !is_only_attribute;
        }

        if (force_attr_wrap) {
          printer.print_newline(false);
          wrapped = true;
        }
      }
    }

    printer.print_token(raw_token);
    wrapped = wrapped || printer.previous_token_wrapped();
    last_tag_token.has_wrapped_attrs = wrapped;
  }

  return parser_token;
};

Beautifier$4.prototype._handle_text = function (printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: 'TK_CONTENT'
  };

  if (last_tag_token.custom_beautifier_name) {
    //check if we need to format javascript
    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    printer.print_token(raw_token);
  }

  return parser_token;
};

Beautifier$4.prototype._print_custom_beatifier_text = function (printer, raw_token, last_tag_token) {
  var local = this;

  if (raw_token.text !== '') {
    var text = raw_token.text,
        _beautifier,
        script_indent_level = 1,
        pre = '',
        post = '';

    if (last_tag_token.custom_beautifier_name === 'javascript' && typeof this._js_beautify === 'function') {
      _beautifier = this._js_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'css' && typeof this._css_beautify === 'function') {
      _beautifier = this._css_beautify;
    } else if (last_tag_token.custom_beautifier_name === 'html') {
      _beautifier = function _beautifier(html_source, options) {
        var beautifier = new Beautifier$4(html_source, options, local._js_beautify, local._css_beautify);
        return beautifier.beautify();
      };
    }

    if (this._options.indent_scripts === "keep") {
      script_indent_level = 0;
    } else if (this._options.indent_scripts === "separate") {
      script_indent_level = -printer.indent_level;
    }

    var indentation = printer.get_full_indent(script_indent_level); // if there is at least one empty line at the end of this text, strip it
    // we'll be adding one back after the text but before the containing tag.

    text = text.replace(/\n[ \t]*$/, ''); // Handle the case where content is wrapped in a comment or cdata.

    if (last_tag_token.custom_beautifier_name !== 'html' && text[0] === '<' && text.match(/^(<!--|<!\[CDATA\[)/)) {
      var matched = /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(text); // if we start to wrap but don't finish, print raw

      if (!matched) {
        printer.add_raw_token(raw_token);
        return;
      }

      pre = indentation + matched[1] + '\n';
      text = matched[4];

      if (matched[5]) {
        post = indentation + matched[5];
      } // if there is at least one empty line at the end of this text, strip it
      // we'll be adding one back after the text but before the containing tag.


      text = text.replace(/\n[ \t]*$/, '');

      if (matched[2] || matched[3].indexOf('\n') !== -1) {
        // if the first line of the non-comment text has spaces
        // use that as the basis for indenting in null case.
        matched = matched[3].match(/[ \t]+$/);

        if (matched) {
          raw_token.whitespace_before = matched[0];
        }
      }
    }

    if (text) {
      if (_beautifier) {
        // call the Beautifier if avaliable
        var Child_options = function Child_options() {
          this.eol = '\n';
        };

        Child_options.prototype = this._options.raw_options;
        var child_options = new Child_options();
        text = _beautifier(indentation + text, child_options);
      } else {
        // simply indent the string otherwise
        var white = raw_token.whitespace_before;

        if (white) {
          text = text.replace(new RegExp('\n(' + white + ')?', 'g'), '\n');
        }

        text = indentation + text.replace(/\n/g, '\n' + indentation);
      }
    }

    if (pre) {
      if (!text) {
        text = pre + post;
      } else {
        text = pre + text + '\n' + post;
      }
    }

    printer.print_newline(false);

    if (text) {
      raw_token.text = text;
      raw_token.whitespace_before = '';
      raw_token.newlines = 0;
      printer.add_raw_token(raw_token);
      printer.print_newline(true);
    }
  }
};

Beautifier$4.prototype._handle_tag_open = function (printer, raw_token, last_tag_token, last_token) {
  var parser_token = this._get_tag_open_token(raw_token);

  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) && raw_token.type === TOKEN$4.TAG_OPEN && raw_token.text.indexOf('</') === 0) {
    // End element tags for unformatted or content_unformatted elements
    // are printed raw to keep any newlines inside them exactly the same.
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);

    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);

    if (!parser_token.is_inline_element) {
      printer.set_wrap_point();
    }

    printer.print_token(raw_token);
  } //indent attributes an auto, forced, aligned or forced-align line-wrap


  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
    parser_token.alignment_size = raw_token.text.length + 1;
  }

  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
    printer.alignment_size = parser_token.alignment_size;
  }

  return parser_token;
};

var TagOpenParserToken = function TagOpenParserToken(parent, raw_token) {
  this.parent = parent || null;
  this.text = '';
  this.type = 'TK_TAG_OPEN';
  this.tag_name = '';
  this.is_inline_element = false;
  this.is_unformatted = false;
  this.is_content_unformatted = false;
  this.is_empty_element = false;
  this.is_start_tag = false;
  this.is_end_tag = false;
  this.indent_content = false;
  this.multiline_content = false;
  this.custom_beautifier_name = null;
  this.start_tag_token = null;
  this.attr_count = 0;
  this.has_wrapped_attrs = false;
  this.alignment_size = 0;
  this.tag_complete = false;
  this.tag_start_char = '';
  this.tag_check = '';

  if (!raw_token) {
    this.tag_complete = true;
  } else {
    var tag_check_match;
    this.tag_start_char = raw_token.text[0];
    this.text = raw_token.text;

    if (this.tag_start_char === '<') {
      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    } else {
      tag_check_match = raw_token.text.match(/^{{[#\^]?([^\s}]+)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    }

    this.tag_check = this.tag_check.toLowerCase();

    if (raw_token.type === TOKEN$4.COMMENT) {
      this.tag_complete = true;
    }

    this.is_start_tag = this.tag_check.charAt(0) !== '/';
    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
    this.is_end_tag = !this.is_start_tag || raw_token.closed && raw_token.closed.text === '/>'; // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.

    this.is_end_tag = this.is_end_tag || this.tag_start_char === '{' && (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(2)));
  }
};

Beautifier$4.prototype._get_tag_open_token = function (raw_token) {
  //function to get a full tag and parse its type
  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);
  parser_token.alignment_size = this._options.wrap_attributes_indent_size;
  parser_token.is_end_tag = parser_token.is_end_tag || in_array$2(parser_token.tag_check, this._options.void_elements);
  parser_token.is_empty_element = parser_token.tag_complete || parser_token.is_start_tag && parser_token.is_end_tag;
  parser_token.is_unformatted = !parser_token.tag_complete && in_array$2(parser_token.tag_check, this._options.unformatted);
  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array$2(parser_token.tag_check, this._options.content_unformatted);
  parser_token.is_inline_element = in_array$2(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === '{';
  return parser_token;
};

Beautifier$4.prototype._set_tag_position = function (printer, raw_token, parser_token, last_tag_token, last_token) {
  if (!parser_token.is_empty_element) {
    if (parser_token.is_end_tag) {
      //this tag is a double tag so check for tag-ending
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
    } else {
      // it's a start-tag
      // check if this tag is starting an element that has optional end element
      // and do an ending needed
      if (this._do_optional_end_element(parser_token)) {
        if (!parser_token.is_inline_element) {
          if (parser_token.parent) {
            parser_token.parent.multiline_content = true;
          }

          printer.print_newline(false);
        }
      }

      this._tag_stack.record_tag(parser_token); //push it on the tag stack


      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') && !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
        parser_token.custom_beautifier_name = get_custom_beautifier_name(parser_token.tag_check, raw_token);
      }
    }
  }

  if (in_array$2(parser_token.tag_check, this._options.extra_liners)) {
    //check if this double needs an extra line
    printer.print_newline(false);

    if (!printer._output.just_added_blankline()) {
      printer.print_newline(true);
    }
  }

  if (parser_token.is_empty_element) {
    //if this tag name is a single tag type (either in the list or has a closing /)
    // if you hit an else case, reset the indent level if you are inside an:
    // 'if', 'unless', or 'each' block.
    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);

      parser_token.indent_content = true; // Don't add a newline if opening {{#if}} tag is on the current line

      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);

      if (!foundIfOnCurrentLine) {
        printer.print_newline(false);
      }
    } // Don't add a newline before elements that should remain where they are.


    if (parser_token.tag_name === '!--' && last_token.type === TOKEN$4.TAG_CLOSE && last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) ; else if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_unformatted || parser_token.is_content_unformatted) {
    if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_end_tag) {
    //this tag is a double tag so check for tag-ending
    if (parser_token.start_tag_token && parser_token.start_tag_token.multiline_content || !(parser_token.is_inline_element || last_tag_token.is_inline_element || last_token.type === TOKEN$4.TAG_CLOSE && parser_token.start_tag_token === last_tag_token || last_token.type === 'TK_CONTENT')) {
      printer.print_newline(false);
    }
  } else {
    // it's a start-tag
    parser_token.indent_content = !parser_token.custom_beautifier_name;

    if (parser_token.tag_start_char === '<') {
      if (parser_token.tag_name === 'html') {
        parser_token.indent_content = this._options.indent_inner_html;
      } else if (parser_token.tag_name === 'head') {
        parser_token.indent_content = this._options.indent_head_inner_html;
      } else if (parser_token.tag_name === 'body') {
        parser_token.indent_content = this._options.indent_body_inner_html;
      }
    }

    if (!parser_token.is_inline_element && last_token.type !== 'TK_CONTENT') {
      if (parser_token.parent) {
        parser_token.parent.multiline_content = true;
      }

      printer.print_newline(false);
    }
  }
}; //To be used for <p> tag special case:
//var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];


Beautifier$4.prototype._do_optional_end_element = function (parser_token) {
  var result = null; // NOTE: cases of "if there is no more content in the parent element"
  // are handled automatically by the beautifier.
  // It assumes parent or ancestor close tag closes all children.
  // https://www.w3.org/TR/html5/syntax.html#optional-tags

  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
    return;
  } else if (parser_token.tag_name === 'body') {
    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
    result = result || this._tag_stack.try_pop('head'); //} else if (parser_token.tag_name === 'body') {
    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.
  } else if (parser_token.tag_name === 'li') {
    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('li', ['ol', 'ul']);
  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
    result = result || this._tag_stack.try_pop('dt', ['dl']);
    result = result || this._tag_stack.try_pop('dd', ['dl']); //} else if (p_closers.indexOf(parser_token.tag_name) !== -1) {
    //TODO: THIS IS A BUG FARM. We are not putting this into 1.8.0 as it is likely to blow up.
    //A p element’s end tag may be omitted if the p element is immediately followed by an address, article, aside, blockquote, details, div, dl, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, main, nav, ol, p, pre, section, table, or ul element, or if there is no more content in the parent element and the parent element is an HTML element that is not an a, audio, del, ins, map, noscript, or video element, or an autonomous custom element.
    //result = result || this._tag_stack.try_pop('p', ['body']);
  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
    result = result || this._tag_stack.try_pop('rp', ['ruby', 'rtc']);
  } else if (parser_token.tag_name === 'optgroup') {
    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('optgroup', ['select']); //result = result || this._tag_stack.try_pop('option', ['select']);
  } else if (parser_token.tag_name === 'option') {
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);
  } else if (parser_token.tag_name === 'colgroup') {
    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
  } else if (parser_token.tag_name === 'thead') {
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']); //} else if (parser_token.tag_name === 'caption') {
    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.
  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('thead', ['table']);
    result = result || this._tag_stack.try_pop('tbody', ['table']); //} else if (parser_token.tag_name === 'tfoot') {
    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.
  } else if (parser_token.tag_name === 'tr') {
    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    result = result || this._tag_stack.try_pop('caption', ['table']);
    result = result || this._tag_stack.try_pop('colgroup', ['table']);
    result = result || this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);
  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
    result = result || this._tag_stack.try_pop('td', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
    result = result || this._tag_stack.try_pop('th', ['table', 'thead', 'tbody', 'tfoot', 'tr']);
  } // Start element omission not handled currently
  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
  // Fix up the parent of the parser token


  parser_token.parent = this._tag_stack.get_parser_token();
  return result;
};

var Beautifier_1$2 = Beautifier$4;
var beautifier$2 = {
  Beautifier: Beautifier_1$2
};

var Beautifier$5 = beautifier$2.Beautifier,
    Options$9 = options$3.Options;

function style_html(html_source, options, js_beautify, css_beautify) {
  var beautifier = new Beautifier$5(html_source, options, js_beautify, css_beautify);
  return beautifier.beautify();
}

var html = style_html;

var defaultOptions$2 = function defaultOptions() {
  return new Options$9();
};
html.defaultOptions = defaultOptions$2;

function style_html$1(html_source, options, js, css$1) {
  js = js || javascript;
  css$1 = css$1 || css;
  return html(html_source, options, js, css$1);
}

style_html$1.defaultOptions = html.defaultOptions;
var js = javascript;
var css$1 = css;
var html$1 = style_html$1;

var minIndent = function minIndent(str) {
  var match = str.match(/^[ \t]*(?=\S)/gm);

  if (!match) {
    return 0;
  } // TODO: Use spread operator when targeting Node.js 6


  return Math.min.apply(Math, match.map(function (x) {
    return x.length;
  }));
};

var stripIndent = function stripIndent(string) {
  var indent = minIndent(string);

  if (indent === 0) {
    return string;
  }

  var regex = new RegExp("^[ \\t]{".concat(indent, "}"), 'gm');
  return string.replace(regex, '');
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var directives$1 = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */

var directive = function directive(f) {
  return function () {
    var d = f.apply(void 0, arguments);
    directives$1.set(d, true);
    return d;
  };
};
var isDirective = function isDirective(o) {
  return typeof o === 'function' && directives$1.has(o);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * True if the custom elements polyfill is in use.
 */
var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */

var removeNodes = function removeNodes(container, start) {
  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  while (start !== end) {
    var n = start.nextSibling;
    container.removeChild(start);
    start = n;
  }
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */

var nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */

var nodeMarker = "<!--".concat(marker, "-->");
var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
/**
 * Suffix appended to all bound attribute names.
 */

var boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */

var Template = function Template(result, element) {
  _classCallCheck(this, Template);

  this.parts = [];
  this.element = element;
  var nodesToRemove = [];
  var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

  var walker = document.createTreeWalker(element.content, 133
  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  , null, false); // Keeps track of the last index associated with a part. We try to delete
  // unnecessary nodes, but we never want to associate two different parts
  // to the same index. They must have a constant node between.

  var lastPartIndex = 0;
  var index = -1;
  var partIndex = 0;
  var strings = result.strings,
      length = result.values.length;

  while (partIndex < length) {
    var node = walker.nextNode();

    if (node === null) {
      // We've exhausted the content inside a nested template element.
      // Because we still have parts (the outer for-loop), we know:
      // - There is a template in the stack
      // - The walker will find a nextNode outside the template
      walker.currentNode = stack.pop();
      continue;
    }

    index++;

    if (node.nodeType === 1
    /* Node.ELEMENT_NODE */
    ) {
        if (node.hasAttributes()) {
          var attributes = node.attributes;
          var _length = attributes.length; // Per
          // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order.
          // In particular, Edge/IE can return them out of order, so we cannot
          // assume a correspondence between part index and attribute index.

          var count = 0;

          for (var i = 0; i < _length; i++) {
            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = strings[partIndex]; // Find the attribute name

            var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
            // All bound attributes have had a suffix added in
            // TemplateResult#getHTML to opt out of special attribute
            // handling. To look up the attribute value we also need to add
            // the suffix.

            var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
            var attributeValue = node.getAttribute(attributeLookupName);
            node.removeAttribute(attributeLookupName);
            var statics = attributeValue.split(markerRegex);
            this.parts.push({
              type: 'attribute',
              index: index,
              name: name,
              strings: statics
            });
            partIndex += statics.length - 1;
          }
        }

        if (node.tagName === 'TEMPLATE') {
          stack.push(node);
          walker.currentNode = node.content;
        }
      } else if (node.nodeType === 3
    /* Node.TEXT_NODE */
    ) {
        var data = node.data;

        if (data.indexOf(marker) >= 0) {
          var parent = node.parentNode;

          var _strings = data.split(markerRegex);

          var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            var insert = void 0;
            var s = _strings[_i];

            if (s === '') {
              insert = createMarker();
            } else {
              var match = lastAttributeNameRegex.exec(s);

              if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
              }

              insert = document.createTextNode(s);
            }

            parent.insertBefore(insert, node);
            this.parts.push({
              type: 'node',
              index: ++index
            });
          } // If there's no text, we must insert a comment to mark our place.
          // Else, we can trust it will stick around after cloning.


          if (_strings[lastIndex] === '') {
            parent.insertBefore(createMarker(), node);
            nodesToRemove.push(node);
          } else {
            node.data = _strings[lastIndex];
          } // We have a part for each match found


          partIndex += lastIndex;
        }
      } else if (node.nodeType === 8
    /* Node.COMMENT_NODE */
    ) {
        if (node.data === marker) {
          var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
          // the following are true:
          //  * We don't have a previousSibling
          //  * The previousSibling is already the start of a previous part

          if (node.previousSibling === null || index === lastPartIndex) {
            index++;

            _parent.insertBefore(createMarker(), node);
          }

          lastPartIndex = index;
          this.parts.push({
            type: 'node',
            index: index
          }); // If we don't have a nextSibling, keep this node so we have an end.
          // Else, we can remove it to save future costs.

          if (node.nextSibling === null) {
            node.data = '';
          } else {
            nodesToRemove.push(node);
            index--;
          }

          partIndex++;
        } else {
          var _i2 = -1;

          while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            // TODO (justinfagnani): consider whether it's even worth it to
            // make bindings in comments work
            this.parts.push({
              type: 'node',
              index: -1
            });
            partIndex++;
          }
        }
      }
  } // Remove text binding nodes after the walk to not disturb the TreeWalker


  for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
    var n = _nodesToRemove[_i3];
    n.parentNode.removeChild(n);
  }
};

var endsWith = function endsWith(str, suffix) {
  var index = str.length - suffix.length;
  return index >= 0 && str.slice(index) === suffix;
};

var isTemplatePartActive = function isTemplatePartActive(part) {
  return part.index !== -1;
}; // Allows `document.createComment('')` to be renamed for a
// small manual size-savings.

var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */

var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */

var TemplateInstance =
/*#__PURE__*/
function () {
  function TemplateInstance(template, processor, options) {
    _classCallCheck(this, TemplateInstance);

    this.__parts = [];
    this.template = template;
    this.processor = processor;
    this.options = options;
  }

  _createClass(TemplateInstance, [{
    key: "update",
    value: function update(values) {
      var i = 0;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.__parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var part = _step.value;

          if (part !== undefined) {
            part.setValue(values[i]);
          }

          i++;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.__parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var _part = _step2.value;

          if (_part !== undefined) {
            _part.commit();
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }, {
    key: "_clone",
    value: function _clone() {
      // There are a number of steps in the lifecycle of a template instance's
      // DOM fragment:
      //  1. Clone - create the instance fragment
      //  2. Adopt - adopt into the main document
      //  3. Process - find part markers and create parts
      //  4. Upgrade - upgrade custom elements
      //  5. Update - set node, attribute, property, etc., values
      //  6. Connect - connect to the document. Optional and outside of this
      //     method.
      //
      // We have a few constraints on the ordering of these steps:
      //  * We need to upgrade before updating, so that property values will pass
      //    through any property setters.
      //  * We would like to process before upgrading so that we're sure that the
      //    cloned fragment is inert and not disturbed by self-modifying DOM.
      //  * We want custom elements to upgrade even in disconnected fragments.
      //
      // Given these constraints, with full custom elements support we would
      // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
      //
      // But Safari dooes not implement CustomElementRegistry#upgrade, so we
      // can not implement that order and still have upgrade-before-update and
      // upgrade disconnected fragments. So we instead sacrifice the
      // process-before-upgrade constraint, since in Custom Elements v1 elements
      // must not modify their light DOM in the constructor. We still have issues
      // when co-existing with CEv0 elements like Polymer 1, and with polyfills
      // that don't strictly adhere to the no-modification rule because shadow
      // DOM, which may be created in the constructor, is emulated by being placed
      // in the light DOM.
      //
      // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
      // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
      // in one step.
      //
      // The Custom Elements v1 polyfill supports upgrade(), so the order when
      // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
      // Connect.
      var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
      var stack = [];
      var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

      var walker = document.createTreeWalker(fragment, 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      , null, false);
      var partIndex = 0;
      var nodeIndex = 0;
      var part;
      var node = walker.nextNode(); // Loop through all the nodes and parts of a template

      while (partIndex < parts.length) {
        part = parts[partIndex];

        if (!isTemplatePartActive(part)) {
          this.__parts.push(undefined);

          partIndex++;
          continue;
        } // Progress the tree walker until we find our next part's node.
        // Note that multiple parts may share the same node (attribute parts
        // on a single element), so this loop may not run at all.


        while (nodeIndex < part.index) {
          nodeIndex++;

          if (node.nodeName === 'TEMPLATE') {
            stack.push(node);
            walker.currentNode = node.content;
          }

          if ((node = walker.nextNode()) === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            node = walker.nextNode();
          }
        } // We've arrived at our part's node.


        if (part.type === 'node') {
          var _part2 = this.processor.handleTextExpression(this.options);

          _part2.insertAfterNode(node.previousSibling);

          this.__parts.push(_part2);
        } else {
          var _this$__parts;

          (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
        }

        partIndex++;
      }

      if (isCEPolyfill) {
        document.adoptNode(fragment);
        customElements.upgrade(fragment);
      }

      return fragment;
    }
  }]);

  return TemplateInstance;
}();

var commentMarker = " ".concat(marker, " ");
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */

var TemplateResult =
/*#__PURE__*/
function () {
  function TemplateResult(strings, values, type, processor) {
    _classCallCheck(this, TemplateResult);

    this.strings = strings;
    this.values = values;
    this.type = type;
    this.processor = processor;
  }
  /**
   * Returns a string of HTML used to create a `<template>` element.
   */


  _createClass(TemplateResult, [{
    key: "getHTML",
    value: function getHTML() {
      var l = this.strings.length - 1;
      var html = '';
      var isCommentBinding = false;

      for (var i = 0; i < l; i++) {
        var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
        // into the template source before it's parsed by the browser's HTML
        // parser. The marker type is based on whether the expression is in an
        // attribute, text, or comment poisition.
        //   * For node-position bindings we insert a comment with the marker
        //     sentinel as its text content, like <!--{{lit-guid}}-->.
        //   * For attribute bindings we insert just the marker sentinel for the
        //     first binding, so that we support unquoted attribute bindings.
        //     Subsequent bindings can use a comment marker because multi-binding
        //     attributes must be quoted.
        //   * For comment bindings we insert just the marker sentinel so we don't
        //     close the comment.
        //
        // The following code scans the template source, but is *not* an HTML
        // parser. We don't need to track the tree structure of the HTML, only
        // whether a binding is inside a comment, and if not, if it appears to be
        // the first binding in an attribute.

        var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
        // comment close. Because <-- can appear in an attribute value there can
        // be false positives.

        isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceeding the
        // expression. This can match "name=value" like structures in text,
        // comments, and attribute values, so there can be false-positives.

        var attributeMatch = lastAttributeNameRegex.exec(s);

        if (attributeMatch === null) {
          // We're only in this branch if we don't have a attribute-like
          // preceeding sequence. For comments, this guards against unusual
          // attribute values like <div foo="<!--${'bar'}">. Cases like
          // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
          // below.
          html += s + (isCommentBinding ? commentMarker : nodeMarker);
        } else {
          // For attributes we use just a marker sentinel, and also append a
          // $lit$ suffix to the name to opt-out of attribute-specific parsing
          // that IE and Edge do for style and certain SVG attributes.
          html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
        }
      }

      html += this.strings[l];
      return html;
    }
  }, {
    key: "getTemplateElement",
    value: function getTemplateElement() {
      var template = document.createElement('template');
      template.innerHTML = this.getHTML();
      return template;
    }
  }]);

  return TemplateResult;
}();

var isPrimitive = function isPrimitive(value) {
  return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
};
var isIterable = function isIterable(value) {
  return Array.isArray(value) || // tslint:disable-next-line:no-any
  !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */

var AttributeCommitter =
/*#__PURE__*/
function () {
  function AttributeCommitter(element, name, strings) {
    _classCallCheck(this, AttributeCommitter);

    this.dirty = true;
    this.element = element;
    this.name = name;
    this.strings = strings;
    this.parts = [];

    for (var i = 0; i < strings.length - 1; i++) {
      this.parts[i] = this._createPart();
    }
  }
  /**
   * Creates a single part. Override this to create a differnt type of part.
   */


  _createClass(AttributeCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new AttributePart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      var strings = this.strings;
      var l = strings.length - 1;
      var text = '';

      for (var i = 0; i < l; i++) {
        text += strings[i];
        var part = this.parts[i];

        if (part !== undefined) {
          var v = part.value;

          if (isPrimitive(v) || !isIterable(v)) {
            text += typeof v === 'string' ? v : String(v);
          } else {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                text += typeof t === 'string' ? t : String(t);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                  _iterator["return"]();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }
        }
      }

      text += strings[l];
      return text;
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false;
        this.element.setAttribute(this.name, this._getValue());
      }
    }
  }]);

  return AttributeCommitter;
}();
/**
 * A Part that controls all or part of an attribute value.
 */

var AttributePart =
/*#__PURE__*/
function () {
  function AttributePart(committer) {
    _classCallCheck(this, AttributePart);

    this.value = undefined;
    this.committer = committer;
  }

  _createClass(AttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
        this.value = value; // If the value is a not a directive, dirty the committer so that it'll
        // call setAttribute. If the value is a directive, it'll dirty the
        // committer if it calls setValue().

        if (!isDirective(value)) {
          this.committer.dirty = true;
        }
      }
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.value)) {
        var directive = this.value;
        this.value = noChange;
        directive(this);
      }

      if (this.value === noChange) {
        return;
      }

      this.committer.commit();
    }
  }]);

  return AttributePart;
}();
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */

var NodePart =
/*#__PURE__*/
function () {
  function NodePart(options) {
    _classCallCheck(this, NodePart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.options = options;
  }
  /**
   * Appends this part into a container.
   *
   * This part must be empty, as its contents are not automatically moved.
   */


  _createClass(NodePart, [{
    key: "appendInto",
    value: function appendInto(container) {
      this.startNode = container.appendChild(createMarker());
      this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterNode",
    value: function insertAfterNode(ref) {
      this.startNode = ref;
      this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "appendIntoPart",
    value: function appendIntoPart(part) {
      part.__insert(this.startNode = createMarker());

      part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */

  }, {
    key: "insertAfterPart",
    value: function insertAfterPart(ref) {
      ref.__insert(this.startNode = createMarker());

      this.endNode = ref.endNode;
      ref.endNode = this.startNode;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      var value = this.__pendingValue;

      if (value === noChange) {
        return;
      }

      if (isPrimitive(value)) {
        if (value !== this.value) {
          this.__commitText(value);
        }
      } else if (value instanceof TemplateResult) {
        this.__commitTemplateResult(value);
      } else if (value instanceof Node) {
        this.__commitNode(value);
      } else if (isIterable(value)) {
        this.__commitIterable(value);
      } else if (value === nothing) {
        this.value = nothing;
        this.clear();
      } else {
        // Fallback, will render the string representation
        this.__commitText(value);
      }
    }
  }, {
    key: "__insert",
    value: function __insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
  }, {
    key: "__commitNode",
    value: function __commitNode(value) {
      if (this.value === value) {
        return;
      }

      this.clear();

      this.__insert(value);

      this.value = value;
    }
  }, {
    key: "__commitText",
    value: function __commitText(value) {
      var node = this.startNode.nextSibling;
      value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
      // it can't be implicitly converted - i.e. it's a symbol.

      var valueAsString = typeof value === 'string' ? value : String(value);

      if (node === this.endNode.previousSibling && node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if this.value is primitive?
          node.data = valueAsString;
        } else {
        this.__commitNode(document.createTextNode(valueAsString));
      }

      this.value = value;
    }
  }, {
    key: "__commitTemplateResult",
    value: function __commitTemplateResult(value) {
      var template = this.options.templateFactory(value);

      if (this.value instanceof TemplateInstance && this.value.template === template) {
        this.value.update(value.values);
      } else {
        // Make sure we propagate the template processor from the TemplateResult
        // so that we use its syntax extension, etc. The template factory comes
        // from the render function options so that it can control template
        // caching and preprocessing.
        var instance = new TemplateInstance(template, value.processor, this.options);

        var fragment = instance._clone();

        instance.update(value.values);

        this.__commitNode(fragment);

        this.value = instance;
      }
    }
  }, {
    key: "__commitIterable",
    value: function __commitIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _value is an array, then the previous render was of an
      // iterable and _value will contain the NodeParts from the previous
      // render. If _value is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this.value)) {
        this.value = [];
        this.clear();
      } // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render


      var itemParts = this.value;
      var partIndex = 0;
      var itemPart;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;
          // Try to reuse an existing part
          itemPart = itemParts[partIndex]; // If no existing part, create a new one

          if (itemPart === undefined) {
            itemPart = new NodePart(this.options);
            itemParts.push(itemPart);

            if (partIndex === 0) {
              itemPart.appendIntoPart(this);
            } else {
              itemPart.insertAfterPart(itemParts[partIndex - 1]);
            }
          }

          itemPart.setValue(item);
          itemPart.commit();
          partIndex++;
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (partIndex < itemParts.length) {
        // Truncate the parts array so _value reflects the current state
        itemParts.length = partIndex;
        this.clear(itemPart && itemPart.endNode);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
      removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
  }]);

  return NodePart;
}();
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */

var BooleanAttributePart =
/*#__PURE__*/
function () {
  function BooleanAttributePart(element, name, strings) {
    _classCallCheck(this, BooleanAttributePart);

    this.value = undefined;
    this.__pendingValue = undefined;

    if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
      throw new Error('Boolean attributes can only contain a single expression');
    }

    this.element = element;
    this.name = name;
    this.strings = strings;
  }

  _createClass(BooleanAttributePart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var value = !!this.__pendingValue;

      if (this.value !== value) {
        if (value) {
          this.element.setAttribute(this.name, '');
        } else {
          this.element.removeAttribute(this.name);
        }

        this.value = value;
      }

      this.__pendingValue = noChange;
    }
  }]);

  return BooleanAttributePart;
}();
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */

var PropertyCommitter =
/*#__PURE__*/
function (_AttributeCommitter) {
  _inherits(PropertyCommitter, _AttributeCommitter);

  function PropertyCommitter(element, name, strings) {
    var _this;

    _classCallCheck(this, PropertyCommitter);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
    _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
    return _this;
  }

  _createClass(PropertyCommitter, [{
    key: "_createPart",
    value: function _createPart() {
      return new PropertyPart(this);
    }
  }, {
    key: "_getValue",
    value: function _getValue() {
      if (this.single) {
        return this.parts[0].value;
      }

      return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
    }
  }, {
    key: "commit",
    value: function commit() {
      if (this.dirty) {
        this.dirty = false; // tslint:disable-next-line:no-any

        this.element[this.name] = this._getValue();
      }
    }
  }]);

  return PropertyCommitter;
}(AttributeCommitter);
var PropertyPart =
/*#__PURE__*/
function (_AttributePart) {
  _inherits(PropertyPart, _AttributePart);

  function PropertyPart() {
    _classCallCheck(this, PropertyPart);

    return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
  }

  return PropertyPart;
}(AttributePart); // Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.

var eventOptionsSupported = false;

try {
  var options$4 = {
    get capture() {
      eventOptionsSupported = true;
      return false;
    }

  }; // tslint:disable-next-line:no-any

  window.addEventListener('test', options$4, options$4); // tslint:disable-next-line:no-any

  window.removeEventListener('test', options$4, options$4);
} catch (_e) {}

var EventPart =
/*#__PURE__*/
function () {
  function EventPart(element, eventName, eventContext) {
    var _this2 = this;

    _classCallCheck(this, EventPart);

    this.value = undefined;
    this.__pendingValue = undefined;
    this.element = element;
    this.eventName = eventName;
    this.eventContext = eventContext;

    this.__boundHandleEvent = function (e) {
      return _this2.handleEvent(e);
    };
  }

  _createClass(EventPart, [{
    key: "setValue",
    value: function setValue(value) {
      this.__pendingValue = value;
    }
  }, {
    key: "commit",
    value: function commit() {
      while (isDirective(this.__pendingValue)) {
        var directive = this.__pendingValue;
        this.__pendingValue = noChange;
        directive(this);
      }

      if (this.__pendingValue === noChange) {
        return;
      }

      var newListener = this.__pendingValue;
      var oldListener = this.value;
      var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
      var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

      if (shouldRemoveListener) {
        this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      if (shouldAddListener) {
        this.__options = getOptions(newListener);
        this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
      }

      this.value = newListener;
      this.__pendingValue = noChange;
    }
  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      if (typeof this.value === 'function') {
        this.value.call(this.eventContext || this.element, event);
      } else {
        this.value.handleEvent(event);
      }
    }
  }]);

  return EventPart;
}(); // We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.

var getOptions = function getOptions(o) {
  return o && (eventOptionsSupported ? {
    capture: o.capture,
    passive: o.passive,
    once: o.once
  } : o.capture);
};

/**
 * Creates Parts when a template is instantiated.
 */

var DefaultTemplateProcessor =
/*#__PURE__*/
function () {
  function DefaultTemplateProcessor() {
    _classCallCheck(this, DefaultTemplateProcessor);
  }

  _createClass(DefaultTemplateProcessor, [{
    key: "handleAttributeExpressions",

    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    value: function handleAttributeExpressions(element, name, strings, options) {
      var prefix = name[0];

      if (prefix === '.') {
        var _committer = new PropertyCommitter(element, name.slice(1), strings);

        return _committer.parts;
      }

      if (prefix === '@') {
        return [new EventPart(element, name.slice(1), options.eventContext)];
      }

      if (prefix === '?') {
        return [new BooleanAttributePart(element, name.slice(1), strings)];
      }

      var committer = new AttributeCommitter(element, name, strings);
      return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */

  }, {
    key: "handleTextExpression",
    value: function handleTextExpression(options) {
      return new NodePart(options);
    }
  }]);

  return DefaultTemplateProcessor;
}();
var defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */

function templateFactory(result) {
  var templateCache = templateCaches.get(result.type);

  if (templateCache === undefined) {
    templateCache = {
      stringsArray: new WeakMap(),
      keyString: new Map()
    };
    templateCaches.set(result.type, templateCache);
  }

  var template = templateCache.stringsArray.get(result.strings);

  if (template !== undefined) {
    return template;
  } // If the TemplateStringsArray is new, generate a key from the strings
  // This key is shared between all templates with identical content


  var key = result.strings.join(marker); // Check if we already have a Template for this key

  template = templateCache.keyString.get(key);

  if (template === undefined) {
    // If we have not seen this key before, create a new Template
    template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

    templateCache.keyString.set(key, template);
  } // Cache all future queries for this TemplateStringsArray


  templateCache.stringsArray.set(result.strings, template);
  return template;
}
var templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */

var render = function render(result, container, options) {
  var part = parts.get(container);

  if (part === undefined) {
    removeNodes(container, container.firstChild);
    parts.set(container, part = new NodePart(Object.assign({
      templateFactory: templateFactory
    }, options)));
    part.appendInto(container);
  }

  part.setValue(result);
  part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time

(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.2');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */

var html$2 = function html(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var walkerNodeFilter = 133
/* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
;
/**
 * Removes the list of nodes from a Template safely. In addition to removing
 * nodes from the Template, the Template part indices are updated to match
 * the mutated Template DOM.
 *
 * As the template is walked the removal state is tracked and
 * part indices are adjusted as needed.
 *
 * div
 *   div#1 (remove) <-- start removing (removing node is div#1)
 *     div
 *       div#2 (remove)  <-- continue removing (removing node is still div#1)
 *         div
 * div <-- stop removing since previous sibling is the removing node (div#1,
 * removed 4 nodes)
 */

function removeNodesFromTemplate(template, nodesToRemove) {
  var content = template.element.content,
      parts = template.parts;
  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var part = parts[partIndex];
  var nodeIndex = -1;
  var removeCount = 0;
  var nodesToRemoveInTemplate = [];
  var currentRemovingNode = null;

  while (walker.nextNode()) {
    nodeIndex++;
    var node = walker.currentNode; // End removal if stepped past the removing node

    if (node.previousSibling === currentRemovingNode) {
      currentRemovingNode = null;
    } // A node to remove was found in the template


    if (nodesToRemove.has(node)) {
      nodesToRemoveInTemplate.push(node); // Track node we're removing

      if (currentRemovingNode === null) {
        currentRemovingNode = node;
      }
    } // When removing, increment count by which to adjust subsequent part indices


    if (currentRemovingNode !== null) {
      removeCount++;
    }

    while (part !== undefined && part.index === nodeIndex) {
      // If part is in a removed node deactivate it by setting index to -1 or
      // adjust the index as needed.
      part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      part = parts[partIndex];
    }
  }

  nodesToRemoveInTemplate.forEach(function (n) {
    return n.parentNode.removeChild(n);
  });
}

var countNodes = function countNodes(node) {
  var count = node.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  ? 0 : 1;
  var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

  while (walker.nextNode()) {
    count++;
  }

  return count;
};

var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
  var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

  for (var i = startIndex + 1; i < parts.length; i++) {
    var part = parts[i];

    if (isTemplatePartActive(part)) {
      return i;
    }
  }

  return -1;
};
/**
 * Inserts the given node into the Template, optionally before the given
 * refNode. In addition to inserting the node into the Template, the Template
 * part indices are updated to match the mutated Template DOM.
 */


function insertNodeIntoTemplate(template, node) {
  var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var content = template.element.content,
      parts = template.parts; // If there's no refNode, then put node at end of template.
  // No part indices need to be shifted in this case.

  if (refNode === null || refNode === undefined) {
    content.appendChild(node);
    return;
  }

  var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
  var partIndex = nextActiveIndexInTemplateParts(parts);
  var insertCount = 0;
  var walkerIndex = -1;

  while (walker.nextNode()) {
    walkerIndex++;
    var walkerNode = walker.currentNode;

    if (walkerNode === refNode) {
      insertCount = countNodes(node);
      refNode.parentNode.insertBefore(node, refNode);
    }

    while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
      // If we've inserted the node, simply adjust all subsequent parts
      if (insertCount > 0) {
        while (partIndex !== -1) {
          parts[partIndex].index += insertCount;
          partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        }

        return;
      }

      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
    }
  }
}

var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
  return "".concat(type, "--").concat(scopeName);
};

var compatibleShadyCSSVersion = true;

if (typeof window.ShadyCSS === 'undefined') {
  compatibleShadyCSSVersion = false;
} else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
  console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
  compatibleShadyCSSVersion = false;
}
/**
 * Template factory which scopes template DOM using ShadyCSS.
 * @param scopeName {string}
 */


var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
  return function (result) {
    var cacheKey = getTemplateCacheKey(result.type, scopeName);
    var templateCache = templateCaches.get(cacheKey);

    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(cacheKey, templateCache);
    }

    var template = templateCache.stringsArray.get(result.strings);

    if (template !== undefined) {
      return template;
    }

    var key = result.strings.join(marker);
    template = templateCache.keyString.get(key);

    if (template === undefined) {
      var element = result.getTemplateElement();

      if (compatibleShadyCSSVersion) {
        window.ShadyCSS.prepareTemplateDom(element, scopeName);
      }

      template = new Template(result, element);
      templateCache.keyString.set(key, template);
    }

    templateCache.stringsArray.set(result.strings, template);
    return template;
  };
};

var TEMPLATE_TYPES = ['html', 'svg'];
/**
 * Removes all style elements from Templates for the given scopeName.
 */

var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
  TEMPLATE_TYPES.forEach(function (type) {
    var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

    if (templates !== undefined) {
      templates.keyString.forEach(function (template) {
        var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

        var styles = new Set();
        Array.from(content.querySelectorAll('style')).forEach(function (s) {
          styles.add(s);
        });
        removeNodesFromTemplate(template, styles);
      });
    }
  });
};

var shadyRenderSet = new Set();
/**
 * For the given scope name, ensures that ShadyCSS style scoping is performed.
 * This is done just once per scope name so the fragment and template cannot
 * be modified.
 * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
 * to be scoped and appended to the document
 * (2) removes style elements from all lit-html Templates for this scope name.
 *
 * Note, <style> elements can only be placed into templates for the
 * initial rendering of the scope. If <style> elements are included in templates
 * dynamically rendered to the scope (after the first scope render), they will
 * not be scoped and the <style> will be left in the template and rendered
 * output.
 */

var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
  shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
  // Template's underlying template element. Otherwise, we create one here
  // to give to ShadyCSS, which still requires one while scoping.

  var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

  var styles = renderedDOM.querySelectorAll('style');
  var length = styles.length; // If there are no styles, skip unnecessary work

  if (length === 0) {
    // Ensure prepareTemplateStyles is called to support adding
    // styles via `prepareAdoptedCssText` since that requires that
    // `prepareTemplateStyles` is called.
    //
    // ShadyCSS will only update styles containing @apply in the template
    // given to `prepareTemplateStyles`. If no lit Template was given,
    // ShadyCSS will not be able to update uses of @apply in any relevant
    // template. However, this is not a problem because we only create the
    // template for the purpose of supporting `prepareAdoptedCssText`,
    // which doesn't support @apply at all.
    window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
    return;
  }

  var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
  // manipulations will not prevent us from being able to fix up template
  // part indices.
  // NOTE: collecting styles is inefficient for browsers but ShadyCSS
  // currently does this anyway. When it does not, this should be changed.

  for (var i = 0; i < length; i++) {
    var _style = styles[i];

    _style.parentNode.removeChild(_style);

    condensedStyle.textContent += _style.textContent;
  } // Remove styles from nested templates in this scope.


  removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
  // `template`.

  var content = templateElement.content;

  if (!!template) {
    insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
  } else {
    content.insertBefore(condensedStyle, content.firstChild);
  } // Note, it's important that ShadyCSS gets the template that `lit-html`
  // will actually render so that it can update the style inside when
  // needed (e.g. @apply native Shadow DOM case).


  window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
  var style = content.querySelector('style');

  if (window.ShadyCSS.nativeShadow && style !== null) {
    // When in native Shadow DOM, ensure the style created by ShadyCSS is
    // included in initially rendered output (`renderedDOM`).
    renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
  } else if (!!template) {
    // When no style is left in the template, parts will be broken as a
    // result. To fix this, we put back the style node ShadyCSS removed
    // and then tell lit to remove that node from the template.
    // There can be no style in the template in 2 cases (1) when Shady DOM
    // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
    // is in use ShadyCSS removes the style if it contains no content.
    // NOTE, ShadyCSS creates its own style so we can safely add/remove
    // `condensedStyle` here.
    content.insertBefore(condensedStyle, content.firstChild);
    var removes = new Set();
    removes.add(condensedStyle);
    removeNodesFromTemplate(template, removes);
  }
};
/**
 * Extension to the standard `render` method which supports rendering
 * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
 * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
 * or when the webcomponentsjs
 * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
 *
 * Adds a `scopeName` option which is used to scope element DOM and stylesheets
 * when native ShadowDOM is unavailable. The `scopeName` will be added to
 * the class attribute of all rendered DOM. In addition, any style elements will
 * be automatically re-written with this `scopeName` selector and moved out
 * of the rendered DOM and into the document `<head>`.
 *
 * It is common to use this render method in conjunction with a custom element
 * which renders a shadowRoot. When this is done, typically the element's
 * `localName` should be used as the `scopeName`.
 *
 * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
 * custom properties (needed only on older browsers like IE11) and a shim for
 * a deprecated feature called `@apply` that supports applying a set of css
 * custom properties to a given location.
 *
 * Usage considerations:
 *
 * * Part values in `<style>` elements are only applied the first time a given
 * `scopeName` renders. Subsequent changes to parts in style elements will have
 * no effect. Because of this, parts in style elements should only be used for
 * values that will never change, for example parts that set scope-wide theme
 * values or parts which render shared style elements.
 *
 * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
 * custom element's `constructor` is not supported. Instead rendering should
 * either done asynchronously, for example at microtask timing (for example
 * `Promise.resolve()`), or be deferred until the first time the element's
 * `connectedCallback` runs.
 *
 * Usage considerations when using shimmed custom properties or `@apply`:
 *
 * * Whenever any dynamic changes are made which affect
 * css custom properties, `ShadyCSS.styleElement(element)` must be called
 * to update the element. There are two cases when this is needed:
 * (1) the element is connected to a new parent, (2) a class is added to the
 * element that causes it to match different custom properties.
 * To address the first case when rendering a custom element, `styleElement`
 * should be called in the element's `connectedCallback`.
 *
 * * Shimmed custom properties may only be defined either for an entire
 * shadowRoot (for example, in a `:host` rule) or via a rule that directly
 * matches an element with a shadowRoot. In other words, instead of flowing from
 * parent to child as do native css custom properties, shimmed custom properties
 * flow only from shadowRoots to nested shadowRoots.
 *
 * * When using `@apply` mixing css shorthand property names with
 * non-shorthand names (for example `border` and `border-width`) is not
 * supported.
 */


var render$1 = function render$1(result, container, options) {
  if (!options || _typeof(options) !== 'object' || !options.scopeName) {
    throw new Error('The `scopeName` option is required.');
  }

  var scopeName = options.scopeName;
  var hasRendered = parts.has(container);
  var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
  /* Node.DOCUMENT_FRAGMENT_NODE */
  && !!container.host; // Handle first render to a scope specially...

  var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
  // fragment that is reused since nested renders can occur synchronously.

  var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
  render(result, renderContainer, Object.assign({
    templateFactory: shadyTemplateFactory(scopeName)
  }, options)); // When performing first scope render,
  // (1) We've rendered into a fragment so that there's a chance to
  // `prepareTemplateStyles` before sub-elements hit the DOM
  // (which might cause them to render based on a common pattern of
  // rendering in a custom element's `connectedCallback`);
  // (2) Scope the template with ShadyCSS one time only for this scope.
  // (3) Render the fragment into the container and make sure the
  // container knows its `part` is the one we just rendered. This ensures
  // DOM will be re-used on subsequent renders.

  if (firstScopeRender) {
    var part = parts.get(renderContainer);
    parts["delete"](renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
    // that should apply to `renderContainer` even if the rendered value is
    // not a TemplateInstance. However, it will only insert scoped styles
    // into the document if `prepareTemplateStyles` has already been called
    // for the given scope name.

    var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
    prepareTemplateStyles(scopeName, renderContainer, template);
    removeNodes(container, container.firstChild);
    container.appendChild(renderContainer);
    parts.set(container, part);
  } // After elements have hit the DOM, update styling if this is the
  // initial render to this container.
  // This is needed whenever dynamic changes are made so it would be
  // safest to do every render; however, this would regress performance
  // so we leave it up to the user to call `ShadyCSS.styleElement`
  // for dynamic changes.


  if (!hasRendered && needsScoping) {
    window.ShadyCSS.styleElement(container.host);
  }
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var _a;
/**
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */


window.JSCompiler_renameProperty = function (prop, _obj) {
  return prop;
};

var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value ? '' : null;

      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        return value == null ? value : JSON.stringify(value);
    }

    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    switch (type) {
      case Boolean:
        return value !== null;

      case Number:
        return value === null ? null : Number(value);

      case Object:
      case Array:
        return JSON.parse(value);
    }

    return value;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */

var notEqual = function notEqual(value, old) {
  // This ensures (old==NaN, value==NaN) always returns false
  return old !== value && (old === old || value === value);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
var microtaskPromise = Promise.resolve(true);
var STATE_HAS_UPDATED = 1;
var STATE_UPDATE_REQUESTED = 1 << 2;
var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
var STATE_HAS_CONNECTED = 1 << 5;
/**
 * The Closure JS Compiler doesn't currently have good support for static
 * property semantics where "this" is dynamic (e.g.
 * https://github.com/google/closure-compiler/issues/3177 and others) so we use
 * this hack to bypass any rewriting by the compiler.
 */

var finalized = 'finalized';
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclassers to render updates as desired.
 */

var UpdatingElement =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(UpdatingElement, _HTMLElement);

  function UpdatingElement() {
    var _this;

    _classCallCheck(this, UpdatingElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdatingElement).call(this));
    _this._updateState = 0;
    _this._instanceProperties = undefined;
    _this._updatePromise = microtaskPromise;
    _this._hasConnectedResolver = undefined;
    /**
     * Map with keys for any properties that have changed since the last
     * update cycle with previous values.
     */

    _this._changedProperties = new Map();
    /**
     * Map with keys of properties that should be reflected when updated.
     */

    _this._reflectingProperties = undefined;

    _this.initialize();

    return _this;
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   */


  _createClass(UpdatingElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      this._saveInstanceProperties(); // ensures first update will be caught by an early access of
      // `updateComplete`


      this._requestUpdate();
    }
    /**
     * Fixes any properties set on the instance before upgrade time.
     * Otherwise these would shadow the accessor and break these properties.
     * The properties are stored in a Map which is played back after the
     * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
     * (<=41), properties created for native platform properties like (`id` or
     * `name`) may not have default values set in the element constructor. On
     * these browsers native properties appear on instances and therefore their
     * default value will overwrite any element default (e.g. if the element sets
     * this.id = 'id' in the constructor, the 'id' will become '' since this is
     * the native platform default).
     */

  }, {
    key: "_saveInstanceProperties",
    value: function _saveInstanceProperties() {
      var _this2 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      this.constructor._classProperties.forEach(function (_v, p) {
        if (_this2.hasOwnProperty(p)) {
          var value = _this2[p];
          delete _this2[p];

          if (!_this2._instanceProperties) {
            _this2._instanceProperties = new Map();
          }

          _this2._instanceProperties.set(p, value);
        }
      });
    }
    /**
     * Applies previously saved instance properties.
     */

  }, {
    key: "_applyInstanceProperties",
    value: function _applyInstanceProperties() {
      var _this3 = this;

      // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays
      // tslint:disable-next-line:no-any
      this._instanceProperties.forEach(function (v, p) {
        return _this3[p] = v;
      });

      this._instanceProperties = undefined;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete
      // before connection and if one is pending connection the
      // `_hasConnectionResolver` will exist. If so, resolve it to complete the
      // update, otherwise requestUpdate.

      if (this._hasConnectedResolver) {
        this._hasConnectedResolver();

        this._hasConnectedResolver = undefined;
      }
    }
    /**
     * Allows for `super.disconnectedCallback()` in extensions while
     * reserving the possibility of making non-breaking feature additions
     * when disconnecting at some point in the future.
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {}
    /**
     * Synchronizes property values when attributes change.
     */

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, old, value) {
      if (old !== value) {
        this._attributeToProperty(name, value);
      }
    }
  }, {
    key: "_propertyToAttribute",
    value: function _propertyToAttribute(name, value) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
      var ctor = this.constructor;

      var attr = ctor._attributeNameForProperty(name, options);

      if (attr !== undefined) {
        var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


        if (attrValue === undefined) {
          return;
        } // Track if the property is being reflected to avoid
        // setting the property again via `attributeChangedCallback`. Note:
        // 1. this takes advantage of the fact that the callback is synchronous.
        // 2. will behave incorrectly if multiple attributes are in the reaction
        // stack at time of calling. However, since we process attributes
        // in `update` this should not be possible (or an extreme corner case
        // that we'd like to discover).
        // mark state reflecting


        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

        if (attrValue == null) {
          this.removeAttribute(attr);
        } else {
          this.setAttribute(attr, attrValue);
        } // mark state not reflecting


        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
      }
    }
  }, {
    key: "_attributeToProperty",
    value: function _attributeToProperty(name, value) {
      // Use tracking info to avoid deserializing attribute value if it was
      // just set from a property setter.
      if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
        return;
      }

      var ctor = this.constructor;

      var propName = ctor._attributeToPropertyMap.get(name);

      if (propName !== undefined) {
        var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting

        this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
        this[propName] = // tslint:disable-next-line:no-any
        ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

        this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
      }
    }
    /**
     * This private version of `requestUpdate` does not access or return the
     * `updateComplete` promise. This promise can be overridden and is therefore
     * not free to access.
     */

  }, {
    key: "_requestUpdate",
    value: function _requestUpdate(name, oldValue) {
      var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

      if (name !== undefined) {
        var ctor = this.constructor;
        var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;

        if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
          if (!this._changedProperties.has(name)) {
            this._changedProperties.set(name, oldValue);
          } // Add to reflecting properties set.
          // Note, it's important that every change has a chance to add the
          // property to `_reflectingProperties`. This ensures setting
          // attribute + property reflects correctly.


          if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
            if (this._reflectingProperties === undefined) {
              this._reflectingProperties = new Map();
            }

            this._reflectingProperties.set(name, options);
          }
        } else {
          // Abort the request if the property should not be considered changed.
          shouldRequestUpdate = false;
        }
      }

      if (!this._hasRequestedUpdate && shouldRequestUpdate) {
        this._enqueueUpdate();
      }
    }
    /**
     * Requests an update which is processed asynchronously. This should
     * be called when an element should update based on some state not triggered
     * by setting a property. In this case, pass no arguments. It should also be
     * called when manually implementing a property setter. In this case, pass the
     * property `name` and `oldValue` to ensure that any configured property
     * options are honored. Returns the `updateComplete` Promise which is resolved
     * when the update completes.
     *
     * @param name {PropertyKey} (optional) name of requesting property
     * @param oldValue {any} (optional) old value of requesting property
     * @returns {Promise} A Promise that is resolved when the update completes.
     */

  }, {
    key: "requestUpdate",
    value: function requestUpdate(name, oldValue) {
      this._requestUpdate(name, oldValue);

      return this.updateComplete;
    }
    /**
     * Sets up the element to asynchronously update.
     */

  }, {
    key: "_enqueueUpdate",
    value: function () {
      var _enqueueUpdate2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this4 = this;

        var resolve, reject, previousUpdatePromise, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Mark state updating...
                this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                previousUpdatePromise = this._updatePromise;
                this._updatePromise = new Promise(function (res, rej) {
                  resolve = res;
                  reject = rej;
                });
                _context.prev = 3;
                _context.next = 6;
                return previousUpdatePromise;

              case 6:
                _context.next = 10;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);

              case 10:
                if (this._hasConnected) {
                  _context.next = 13;
                  break;
                }

                _context.next = 13;
                return new Promise(function (res) {
                  return _this4._hasConnectedResolver = res;
                });

              case 13:
                _context.prev = 13;
                result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                // enable coordinating updates with a scheduler. Note, the result is
                // checked to avoid delaying an additional microtask unless we need to.

                if (!(result != null)) {
                  _context.next = 18;
                  break;
                }

                _context.next = 18;
                return result;

              case 18:
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](13);
                reject(_context.t1);

              case 23:
                resolve(!this._hasRequestedUpdate);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8], [13, 20]]);
      }));

      function _enqueueUpdate() {
        return _enqueueUpdate2.apply(this, arguments);
      }

      return _enqueueUpdate;
    }()
  }, {
    key: "performUpdate",

    /**
     * Performs an element update. Note, if an exception is thrown during the
     * update, `firstUpdated` and `updated` will not be called.
     *
     * You can override this method to change the timing of updates. If this
     * method is overridden, `super.performUpdate()` must be called.
     *
     * For instance, to schedule updates to occur just before the next frame:
     *
     * ```
     * protected async performUpdate(): Promise<unknown> {
     *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
     *   super.performUpdate();
     * }
     * ```
     */
    value: function performUpdate() {
      // Mixin instance properties once, if they exist.
      if (this._instanceProperties) {
        this._applyInstanceProperties();
      }

      var shouldUpdate = false;
      var changedProperties = this._changedProperties;

      try {
        shouldUpdate = this.shouldUpdate(changedProperties);

        if (shouldUpdate) {
          this.update(changedProperties);
        }
      } catch (e) {
        // Prevent `firstUpdated` and `updated` from running when there's an
        // update exception.
        shouldUpdate = false;
        throw e;
      } finally {
        // Ensure element can accept additional updates after an exception.
        this._markUpdated();
      }

      if (shouldUpdate) {
        if (!(this._updateState & STATE_HAS_UPDATED)) {
          this._updateState = this._updateState | STATE_HAS_UPDATED;
          this.firstUpdated(changedProperties);
        }

        this.updated(changedProperties);
      }
    }
  }, {
    key: "_markUpdated",
    value: function _markUpdated() {
      this._changedProperties = new Map();
      this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
    }
    /**
     * Returns a Promise that resolves when the element has completed updating.
     * The Promise value is a boolean that is `true` if the element completed the
     * update without triggering another update. The Promise result is `false` if
     * a property was set inside `updated()`. If the Promise is rejected, an
     * exception was thrown during the update.
     *
     * To await additional asynchronous work, override the `_getUpdateComplete`
     * method. For example, it is sometimes useful to await a rendered element
     * before fulfilling this Promise. To do this, first await
     * `super._getUpdateComplete()`, then any subsequent state.
     *
     * @returns {Promise} The Promise returns a boolean that indicates if the
     * update resolved without triggering another update.
     */

  }, {
    key: "_getUpdateComplete",

    /**
     * Override point for the `updateComplete` promise.
     *
     * It is not safe to override the `updateComplete` getter directly due to a
     * limitation in TypeScript which means it is not possible to call a
     * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
     * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
     * This method should be overridden instead. For example:
     *
     *   class MyElement extends LitElement {
     *     async _getUpdateComplete() {
     *       await super._getUpdateComplete();
     *       await this._myChild.updateComplete;
     *     }
     *   }
     */
    value: function _getUpdateComplete() {
      return this._updatePromise;
    }
    /**
     * Controls whether or not `update` should be called when the element requests
     * an update. By default, this method always returns `true`, but this can be
     * customized to control when to update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "shouldUpdate",
    value: function shouldUpdate(_changedProperties) {
      return true;
    }
    /**
     * Updates the element. This method reflects property values to attributes.
     * It can be overridden to render and keep updated element DOM.
     * Setting properties inside this method will *not* trigger
     * another update.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(_changedProperties) {
      var _this5 = this;

      if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
        // Use forEach so this works even if for/of loops are compiled to for
        // loops expecting arrays
        this._reflectingProperties.forEach(function (v, k) {
          return _this5._propertyToAttribute(k, _this5[k], v);
        });

        this._reflectingProperties = undefined;
      }
    }
    /**
     * Invoked whenever the element is updated. Implement to perform
     * post-updating tasks via DOM APIs, for example, focusing an element.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "updated",
    value: function updated(_changedProperties) {}
    /**
     * Invoked when the element is first updated. Implement to perform one time
     * work on the element after update.
     *
     * Setting properties inside this method will trigger the element to update
     * again after this update cycle completes.
     *
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "firstUpdated",
    value: function firstUpdated(_changedProperties) {}
  }, {
    key: "_hasConnected",
    get: function get() {
      return this._updateState & STATE_HAS_CONNECTED;
    }
  }, {
    key: "_hasRequestedUpdate",
    get: function get() {
      return this._updateState & STATE_UPDATE_REQUESTED;
    }
  }, {
    key: "hasUpdated",
    get: function get() {
      return this._updateState & STATE_HAS_UPDATED;
    }
  }, {
    key: "updateComplete",
    get: function get() {
      return this._getUpdateComplete();
    }
  }], [{
    key: "_ensureClassProperties",

    /**
     * Ensures the private `_classProperties` property metadata is created.
     * In addition to `finalize` this is also called in `createProperty` to
     * ensure the `@property` decorator can add property metadata.
     */

    /** @nocollapse */
    value: function _ensureClassProperties() {
      var _this6 = this;

      // ensure private storage for property declarations.
      if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
        this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

        var superProperties = Object.getPrototypeOf(this)._classProperties;

        if (superProperties !== undefined) {
          superProperties.forEach(function (v, k) {
            return _this6._classProperties.set(k, v);
          });
        }
      }
    }
    /**
     * Creates a property accessor on the element prototype if one does not exist.
     * The property setter calls the property's `hasChanged` property option
     * or uses a strict identity check to determine whether or not to request
     * an update.
     * @nocollapse
     */

  }, {
    key: "createProperty",
    value: function createProperty(name) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

      // Note, since this can be called by the `@property` decorator which
      // is called before `finalize`, we ensure storage exists for property
      // metadata.
      this._ensureClassProperties();

      this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
      // it would be lost otherwise and that would never be the user's intention;
      // Instead, we expect users to call `requestUpdate` themselves from
      // user-defined accessors. Note that if the super has an accessor we will
      // still overwrite it


      if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
        return;
      }

      var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
      Object.defineProperty(this.prototype, name, {
        // tslint:disable-next-line:no-any no symbol in index
        get: function get() {
          return this[key];
        },
        set: function set(value) {
          var oldValue = this[name];
          this[key] = value;

          this._requestUpdate(name, oldValue);
        },
        configurable: true,
        enumerable: true
      });
    }
    /**
     * Creates property accessors for registered properties and ensures
     * any superclasses are also finalized.
     * @nocollapse
     */

  }, {
    key: "finalize",
    value: function finalize() {
      // finalize any superclasses
      var superCtor = Object.getPrototypeOf(this);

      if (!superCtor.hasOwnProperty(finalized)) {
        superCtor.finalize();
      }

      this[finalized] = true;

      this._ensureClassProperties(); // initialize Map populated in observedAttributes


      this._attributeToPropertyMap = new Map(); // make any properties
      // Note, only process "own" properties since this element will inherit
      // any properties defined on the superClass, and finalization ensures
      // the entire prototype chain is finalized.

      if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
        var props = this.properties; // support symbols in properties (IE11 does not support this)

        var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var p = _step.value;
            // note, use of `any` is due to TypeSript lack of support for symbol in
            // index types
            // tslint:disable-next-line:no-any no symbol in index
            this.createProperty(p, props[p]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
    /**
     * Returns the property name for the given attribute `name`.
     * @nocollapse
     */

  }, {
    key: "_attributeNameForProperty",
    value: function _attributeNameForProperty(name, options) {
      var attribute = options.attribute;
      return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
    }
    /**
     * Returns true if a property should request an update.
     * Called when a property value is set and uses the `hasChanged`
     * option for the property if present or a strict identity check.
     * @nocollapse
     */

  }, {
    key: "_valueHasChanged",
    value: function _valueHasChanged(value, old) {
      var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
      return hasChanged(value, old);
    }
    /**
     * Returns the property value for the given attribute value.
     * Called via the `attributeChangedCallback` and uses the property's
     * `converter` or `converter.fromAttribute` property option.
     * @nocollapse
     */

  }, {
    key: "_propertyValueFromAttribute",
    value: function _propertyValueFromAttribute(value, options) {
      var type = options.type;
      var converter = options.converter || defaultConverter;
      var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
      return fromAttribute ? fromAttribute(value, type) : value;
    }
    /**
     * Returns the attribute value for the given property value. If this
     * returns undefined, the property will *not* be reflected to an attribute.
     * If this returns null, the attribute will be removed, otherwise the
     * attribute will be set to the value.
     * This uses the property's `reflect` and `type.toAttribute` property options.
     * @nocollapse
     */

  }, {
    key: "_propertyValueToAttribute",
    value: function _propertyValueToAttribute(value, options) {
      if (options.reflect === undefined) {
        return;
      }

      var type = options.type;
      var converter = options.converter;
      var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
      return toAttribute(value, type);
    }
  }, {
    key: "observedAttributes",
    get: function get() {
      var _this7 = this;

      // note: piggy backing on this to ensure we're finalized.
      this.finalize();
      var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
      // expecting arrays

      this._classProperties.forEach(function (v, p) {
        var attr = _this7._attributeNameForProperty(p, v);

        if (attr !== undefined) {
          _this7._attributeToPropertyMap.set(attr, p);

          attributes.push(attr);
        }
      });

      return attributes;
    }
  }]);

  return UpdatingElement;
}(_wrapNativeSuper(HTMLElement));
_a = finalized;
/**
 * Marks class as having finished creating properties.
 */

UpdatingElement[_a] = true;

/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;

// This line will be used in regexes to search for LitElement usage.
// TODO(justinfagnani): inject version number at build time

(window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.2.1');
/**
 * Minimal implementation of Array.prototype.flat
 * @param arr the array to flatten
 * @param result the accumlated result
 */

function arrayFlat(styles) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  for (var i = 0, length = styles.length; i < length; i++) {
    var value = styles[i];

    if (Array.isArray(value)) {
      arrayFlat(value, result);
    } else {
      result.push(value);
    }
  }

  return result;
}
/** Deeply flattens styles array. Uses native flat if available. */


var flattenStyles = function flattenStyles(styles) {
  return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
};

var LitElement =
/*#__PURE__*/
function (_UpdatingElement) {
  _inherits(LitElement, _UpdatingElement);

  function LitElement() {
    _classCallCheck(this, LitElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
  }

  _createClass(LitElement, [{
    key: "initialize",

    /**
     * Performs element initialization. By default this calls `createRenderRoot`
     * to create the element `renderRoot` node and captures any pre-set values for
     * registered properties.
     */
    value: function initialize() {
      _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

      this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
      // element's getRootNode(). While this could be done, we're choosing not to
      // support this now since it would require different logic around de-duping.

      if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
        this.adoptStyles();
      }
    }
    /**
     * Returns the node into which the element should render and by default
     * creates and returns an open shadowRoot. Implement to customize where the
     * element's DOM is rendered. For example, to render into the element's
     * childNodes, return `this`.
     * @returns {Element|DocumentFragment} Returns a node into which to render.
     */

  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this.attachShadow({
        mode: 'open'
      });
    }
    /**
     * Applies styling to the element shadowRoot using the `static get styles`
     * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
     * available and will fallback otherwise. When Shadow DOM is polyfilled,
     * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
     * is available but `adoptedStyleSheets` is not, styles are appended to the
     * end of the `shadowRoot` to [mimic spec
     * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
     */

  }, {
    key: "adoptStyles",
    value: function adoptStyles() {
      var styles = this.constructor._styles;

      if (styles.length === 0) {
        return;
      } // There are three separate cases here based on Shadow DOM support.
      // (1) shadowRoot polyfilled: use ShadyCSS
      // (2) shadowRoot.adoptedStyleSheets available: use it.
      // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
      // rendering


      if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
        window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
          return s.cssText;
        }), this.localName);
      } else if (supportsAdoptingStyleSheets) {
        this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
          return s.styleSheet;
        });
      } else {
        // This must be done after rendering so the actual style insertion is done
        // in `update`.
        this._needsShimAdoptedStyleSheets = true;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
      // connected after first update.


      if (this.hasUpdated && window.ShadyCSS !== undefined) {
        window.ShadyCSS.styleElement(this);
      }
    }
    /**
     * Updates the element. This method reflects property values to attributes
     * and calls `render` to render DOM via lit-html. Setting properties inside
     * this method will *not* trigger another update.
     * * @param _changedProperties Map of changed properties with old values
     */

  }, {
    key: "update",
    value: function update(changedProperties) {
      var _this = this;

      _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);

      var templateResult = this.render();

      if (templateResult instanceof TemplateResult) {
        this.constructor.render(templateResult, this.renderRoot, {
          scopeName: this.localName,
          eventContext: this
        });
      } // When native Shadow DOM is used but adoptedStyles are not supported,
      // insert styling after rendering to ensure adoptedStyles have highest
      // priority.


      if (this._needsShimAdoptedStyleSheets) {
        this._needsShimAdoptedStyleSheets = false;

        this.constructor._styles.forEach(function (s) {
          var style = document.createElement('style');
          style.textContent = s.cssText;

          _this.renderRoot.appendChild(style);
        });
      }
    }
    /**
     * Invoked on each update to perform rendering tasks. This method must return
     * a lit-html TemplateResult. Setting properties inside this method will *not*
     * trigger the element to update.
     */

  }, {
    key: "render",
    value: function render() {}
  }], [{
    key: "finalize",

    /** @nocollapse */
    value: function finalize() {
      // The Closure JS Compiler does not always preserve the correct "this"
      // when calling static super methods (b/137460243), so explicitly bind.
      _get(_getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
      // is built from user provided `styles` or is inherited from the superclass.


      this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
    }
    /** @nocollapse */

  }, {
    key: "_getUniqueStyles",
    value: function _getUniqueStyles() {
      // Take care not to call `this.styles` multiple times since this generates
      // new CSSResults each time.
      // TODO(sorvell): Since we do not cache CSSResults by input, any
      // shared styles will generate new stylesheet objects, which is wasteful.
      // This should be addressed when a browser ships constructable
      // stylesheets.
      var userStyles = this.styles;
      var styles = [];

      if (Array.isArray(userStyles)) {
        var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
        // occur especially when composing via subclassing, de-duplicate styles
        // preserving the last item in the list. The last item is kept to
        // try to preserve cascade order with the assumption that it's most
        // important that last added styles override previous styles.

        var styleSet = flatStyles.reduceRight(function (set, s) {
          set.add(s); // on IE set.add does not return the set.

          return set;
        }, new Set()); // Array.from does not work on Set in IE

        styleSet.forEach(function (v) {
          return styles.unshift(v);
        });
      } else if (userStyles) {
        styles.push(userStyles);
      }

      return styles;
    }
  }]);

  return LitElement;
}(UpdatingElement);
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See updating-element.ts for more information.
 */

LitElement['finalized'] = true;
/**
 * Render method used to render the lit-html TemplateResult to the element's
 * DOM.
 * @param {TemplateResult} Template to render.
 * @param {Element|DocumentFragment} Node into which to render.
 * @param {String} Element name.
 * @nocollapse
 */

LitElement.render = render$1;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// unsafeHTML directive, and the DocumentFragment that was last set as a value.
// The DocumentFragment is used as a unique key to check if the last value
// rendered to the part was with unsafeHTML. If not, we'll always re-render the
// value passed to unsafeHTML.

var previousValues = new WeakMap();
/**
 * Renders the result as HTML, rather than text.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */

var unsafeHTML = directive(function (value) {
  return function (part) {
    if (!(part instanceof NodePart)) {
      throw new Error('unsafeHTML can only be used in text bindings');
    }

    var previousValue = previousValues.get(part);

    if (previousValue !== undefined && isPrimitive(value) && value === previousValue.value && part.value === previousValue.fragment) {
      return;
    }

    var template = document.createElement('template');
    template.innerHTML = value; // innerHTML casts to string internally

    var fragment = document.importNode(template.content, true);
    part.setValue(fragment);
    previousValues.set(part, {
      value: value,
      fragment: fragment
    });
  };
});

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"", "\">\n        ", " ", "\n      </div>\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"esds-code-snippet__tab-panels\">", "</div>\n      "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"esds-code-snippet__toolbar\">\n          ", "", "\n        </div>\n      "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"esds-code-snippet__tabset\" role=\"tabset\">\n              ", "\n            </div>\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"esds-code-snippet__copy-code-wrap\">\n          <div class=\"esds-code-snippet__copied-notification\">\n            ", "\n          </div>\n          <div\n            @click=", "\n            class=\"esds-code-snippet__copy-button-wrap\"\n          >\n            <slot name=\"copy-button\">\n              ", "\n            </slot>\n          </div>\n        </div>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <button class=\"esds-code-snippet__copy-button\">\n        ", "\n      </button>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          <div\n            class=\"esds-code-snippet__tab-panel", "\"\n            id=", "\n            aria-controlledby=", "\n            ?hidden=", "\n          >\n            ", "\n          </div>\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          <span\n            @click=", "\n            class=\"esds-code-snippet__tab", "\"\n            role=\"tab\"\n            id=\"", "\"\n            aria-controls=\"", "\"\n            >", "</span\n          >\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var EsdsCodeSnippetTabCounter = 0;
var EsdsCodeSnippet =
/*#__PURE__*/
function (_LitElement) {
  _inherits(EsdsCodeSnippet, _LitElement);

  _createClass(EsdsCodeSnippet, null, [{
    key: "properties",
    get: function get() {
      return {
        codeCopiedText: {
          type: String,
          attribute: 'code-copied-text'
        },
        copyable: {
          type: String
        },
        copyButtonText: {
          type: String,
          attribute: 'copy-button-text'
        },
        filename: {
          type: String
        },
        language: {
          type: String
        },
        maxHeight: {
          type: String,
          attribute: 'max-height'
        },
        preformatted: {
          type: Boolean
        },
        toolbarLinks: {
          type: Array,
          attribute: 'toolbar-links'
        },
        // TODO: Something with this prop to test it
        source: {
          type: String
        },
        sources: {
          type: Array
        }
      };
    }
  }]);

  function EsdsCodeSnippet() {
    var _this;

    _classCallCheck(this, EsdsCodeSnippet);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EsdsCodeSnippet).call(this));
    _this.defaultClass = 'esds-code-snippet-v1';
    _this.baseModifierClass = 'esds-code-snippet--';
    _this.defaultSource = '<h1>Hello World</h1>'; // State

    _this.codeCopied = false; // Default prop values

    _this.codeCopiedText = 'Copied to clipboard';
    _this.copyButtonText = 'Copy Code';
    _this.copyable = 'true';
    _this.source = _this.initialInnerHtml; // Set up tabbed interface

    _this.tabs = [];
    _this.tabPanels = []; // For a single source, build out a source object and add it to the sources prop by default

    _this.language = 'markup';
    _this.preformatted = false;
    var defaultSourceObject = {
      source: _this.source,
      language: _this.language,
      preformatted: _this.preformatted
    };
    _this.sources = [defaultSourceObject];
    return _this;
  }

  _createClass(EsdsCodeSnippet, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(EsdsCodeSnippet.prototype), "connectedCallback", this).call(this);

      this.initialInnerHtml = this.initialInnerHtml || this.innerHTML;
      this.slotContent = this.initialInnerHtml.trim().length > 0 ? this.initialInnerHtml.trim() : undefined;
    }
  }, {
    key: "createRenderRoot",
    value: function createRenderRoot() {
      return this;
    }
  }, {
    key: "beautifySource",
    value: function beautifySource(source, language) {
      var formatter = html$1;
      var options = {}; // htmlbeautifier options go here, probably should be configurable

      switch (language) {
        case 'css':
          formatter = css$1;
          options = {};
          break;

        case 'javascript':
          formatter = js;
          options = {};
          break;
      }

      return this.preformatted ? source : formatter(source, options);
    }
  }, {
    key: "cleanLitElementRenderingArtifacts",
    value: function cleanLitElementRenderingArtifacts(source) {
      // Given a string of HTML rendered from lit element, strip out the lit element bits and pieces
      // const tmpWrapper = document.createElement('div');
      // tmpWrapper.innerHTML = source
      //   .replace(/<!---->/g, '')
      //   .replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
      // const linkTags = tmpWrapper.querySelectorAll('link');
      // linkTags.forEach(l => l.parentNode.removeChild(l));
      //
      // const hostElements = Array.from(tmpWrapper.childNodes).filter(
      //   n => n.nodeType === Node.ELEMENT_NODE,
      // ); // Get the hostElement which will contain the compiled/slotified component
      // const scopedStyleElements = tmpWrapper.querySelectorAll('.style-scope');
      // scopedStyleElements.forEach(e => e.classList.remove('style-scope'));
      //
      // let cleanedHTML;
      // if (hostElements.length > 1) {
      //   cleanedHTML = hostElements.reduce((string, he) => {
      //     return string.innerHTML + he.innerHTML;
      //   });
      // } else {
      //   cleanedHTML = hostElements[0].innerHTML;
      // }
      // return cleanedHTML;
      return source.replace(/<!---->/g, '').replace(/^\s*[\r\n]/gm, ''); // Strip lit-html comment placeholders & empty lines
    }
  }, {
    key: "cleanShadyDomRenderingArtifacts",
    value: function cleanShadyDomRenderingArtifacts(source) {
      return source.replace(/style-scope /gm, '');
    }
  }, {
    key: "cleanVueRenderingArtifacts",
    value: function cleanVueRenderingArtifacts(source) {
      // Given a string of HTML rendered from vue, strip out the vue bits and pieces
      return source.replace(/data-v-.[A-Za-z0-9]*=.*?"[^"]*"/gm, ''); // Strip Vue data attributes;
    }
  }, {
    key: "copyCodeToClipboard",
    value: function copyCodeToClipboard() {
      var hasTabs = this.querySelector('esds-tabs');
      var source = this.querySelector('.esds-code-snippet__pre code');

      if (hasTabs) {
        source = this.querySelector('esds-tabs').querySelector('esds-tab-panel[active]').querySelector('.esds-code-snippet__pre code');
      }

      var textarea = document.createElement('textarea');
      textarea.style.height = '0';
      textarea.style.width = '0';
      textarea.style.position = 'absolute';
      textarea.style.left = '-99999px';
      document.body.appendChild(textarea);
      textarea.textContent = source.textContent;
      textarea.select();

      try {
        var successful = document.execCommand('copy');

        if (successful) {
          this.showCopiedMessage();
        } else {
          console.log('COULDNT COPY'); // triggerCopyErrorEvent();
        }
      } catch (err) {
        console.log('COPY NOT SUPPORTED'); // triggerCopyNotSupportedEvent(snippet);
      }

      document.body.removeChild(textarea);
    }
  }, {
    key: "formatSource",
    value: function formatSource(source, language) {
      var beautifiedSource = this.beautifySource(source, language);
      return this.highlightSource(beautifiedSource, language);
    }
  }, {
    key: "handleTabClick",
    value: function handleTabClick(e) {
      console.log(e.target);
      var tabId = e.target.id;
      this.selectTab(tabId);
    }
  }, {
    key: "highlightSource",
    value: function highlightSource(source, language) {
      if (language.toLowerCase() === 'html' || language.toLowerCase() === 'wc') {
        language = 'markup';
      }

      return prism.highlight(source, prism.languages[language], language);
    }
  }, {
    key: "linkPanels",
    value: function linkPanels() {
      var _this2 = this;

      // If this is a multi-source code snippet, build out the tabs and tab panels
      this.tabs = [];
      this.tabPanels = [];
      var defaultTab = this.sources.find(function (s) {
        return s.selectedTab;
      });

      if (!defaultTab) {
        // If no default tab has been specified, default to the first tab
        this.sources[0].selectedTab = true;
      }

      this.sources.forEach(function (sourceObject) {
        var linkId = EsdsCodeSnippetTabCounter++;
        var tabId = "esds-code-snippet__tab--".concat(linkId);
        var tabPanelId = "esds-code-snippet__tab-panel--".concat(linkId);

        _this2.tabs.push(html$2(_templateObject(), _this2.handleTabClick, sourceObject.selectedTab ? ' esds-code-snippet__tab--selected' : '', tabId, tabPanelId, sourceObject.tabLabel));

        _this2.tabPanels.push(html$2(_templateObject2(), sourceObject.selectedTab ? ' esds-code-snippet__tab-panel--selected' : '', tabPanelId, tabId, !sourceObject.selectedTab, _this2.renderCodeSnippet(sourceObject)));
      });
    }
  }, {
    key: "resetTabs",
    value: function resetTabs() {
      this.allTabs.forEach(function (t) {
        return t.classList.remove('esds-code-snippet__tab--selected');
      });
      this.allTabPanels.forEach(function (p) {
        p.classList.remove('esds-code-snippet__tab-panel--selected');
        p.hidden = true;
      });
    }
  }, {
    key: "selectTab",
    value: function selectTab(tabId) {
      this.resetTabs();
      var tab = this.querySelector("#".concat(tabId));
      var tabPanel = this.querySelector("#".concat(tab.getAttribute('aria-controls')));
      tab.classList.add('esds-code-snippet__tab-panel--selected');
      tabPanel.classList.add('esds-code-snippet__tab-panel--selected');
      tabPanel.hidden = false;
    }
  }, {
    key: "showCopiedMessage",
    value: function showCopiedMessage() {
      this.codeCopied = true;
      this.requestUpdate();
    }
  }, {
    key: "renderCodeSnippet",
    value: function renderCodeSnippet(sourceObject) {
      console.log(sourceObject);
      var markupLanguages = ['html', 'vue', 'react', 'angular'];
      var language = sourceObject.language ? sourceObject.language : sourceObject.tabLabel.toLowerCase();
      language = markupLanguages.includes(language) ? 'markup' : language;
      var source = this.formatSource(stripIndent(this.cleanShadyDomRenderingArtifacts(this.cleanLitElementRenderingArtifacts(this.cleanVueRenderingArtifacts(sourceObject.source)))), language);
      return unsafeHTML("\n      <div class=\"esds-code-snippet__source>\n        <pre class=\"esds-code-snippet__pre\"><code>".concat(source, "</code></pre>\n      </div>\n    "));
    } // async renderCompiledHTMLSource(wcSource) {
    //   const compiledHTMLWrapper = document.createElement('div');
    //   compiledHTMLWrapper.style = 'display: none;';
    //   compiledHTMLWrapper.innerHTML = wcSource;
    //   document.body.appendChild(compiledHTMLWrapper);
    //   const components = Array.from(compiledHTMLWrapper.childNodes).filter(
    //     n => n.nodeType === Node.ELEMENT_NODE,
    //   );
    //   await Promise.all(components.map(async c => await c.updateComplete));
    //
    //   this.sources = [
    //     {
    //       language: 'WC',
    //       source: this.source,
    //     },
    //     {
    //       language: 'HTML',
    //       source: this.cleanVueRenderingArtifacts(
    //         this.cleanLitElementRenderingArtifacts(compiledHTMLWrapper.innerHTML),
    //       ), // TODO: In the future may need a react/angular cleaner too
    //     },
    //   ];
    //
    //   // Remove the tmpWrapper
    //   compiledHTMLWrapper.parentNode.removeChild(compiledHTMLWrapper);
    // }

  }, {
    key: "renderCopyButton",
    value: function renderCopyButton() {
      // Not sure why I had to use unsafeHTML here and not the html`` template literal. Without it the ${this.copyButtonText} slot content is getting lost somewhere
      var copyButton = html$2(_templateObject3(), this.copyButtonText);

      if (this.copyable === 'true') {
        return html$2(_templateObject4(), this.codeCopiedText, this.copyCodeToClipboard, copyButton);
      } else {
        return '';
      }
    }
  }, {
    key: "renderFilename",
    value: function renderFilename(filename) {
      if (filename) {
        return "<span class=\"esds-code-snippet__filename\">".concat(this.filename, "</span>");
      } else {
        return '';
      }
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      var toolbarActions = [];
      var output = '';
      var tabset = this.tabs.length > 0 ? html$2(_templateObject5(), this.tabs) : '';

      if (this.copyable) {
        toolbarActions.push(this.renderCopyButton());
      }

      if (toolbarActions.length > 0) {
        output = html$2(_templateObject6(), tabset, toolbarActions);
      }

      return output;
    }
  }, {
    key: "render",
    value: function render() {
      var blockLevelClass = this.defaultClass;

      if (this.codeCopied) {
        blockLevelClass += " ".concat(this.baseModifierClass, "show-copied-notification");
      }

      if (this.maxHeight) {
        blockLevelClass += " ".concat(this.baseModifierClass, "max-height-").concat(this.maxHeight);
      }

      var sourceOutput;

      if (this.sources.length > 0) {
        this.linkPanels();
        sourceOutput = html$2(_templateObject7(), this.tabPanels);
      } else {
        sourceOutput = this.renderCodeSnippet(this.sources[0]); // Render a single snippet
      }

      return html$2(_templateObject8(), blockLevelClass, this.renderToolbar(), sourceOutput);
    }
  }, {
    key: "allTabPanels",
    get: function get() {
      return this.querySelectorAll('.esds-code-snippet__tab-panel');
    }
  }, {
    key: "allTabs",
    get: function get() {
      return this.querySelectorAll('.esds-code-snippet__tab');
    }
  }, {
    key: "initialInnerHtml",
    get: function get() {
      return this.getAttribute('data-initial-inner-html') || this.innerHTML;
    },
    set: function set(value) {
      this.setAttribute('data-initial-inner-html', value);
    }
  }]);

  return EsdsCodeSnippet;
}(LitElement);

if (window.customElements.get('esds-code-snippet') === undefined) {
  window.customElements.define('esds-code-snippet', EsdsCodeSnippet);
}
