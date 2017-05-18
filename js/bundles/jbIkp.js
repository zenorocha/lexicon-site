var pageComponent =
webpackJsonppageComponent([13,46,47],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ElectricUpdates = exports.ElectricSearchBase = exports.ElectricSearchAutocomplete = exports.ElectricSearch = exports.ElectricReadingProgress = exports.ElectricNavigation = exports.ElectricCodeTabs = exports.ElectricCode = undefined;

var _ElectricCode = __webpack_require__(33);

var _ElectricCode2 = _interopRequireDefault(_ElectricCode);

var _ElectricCodeTabs = __webpack_require__(34);

var _ElectricCodeTabs2 = _interopRequireDefault(_ElectricCodeTabs);

var _ElectricNavigation = __webpack_require__(35);

var _ElectricNavigation2 = _interopRequireDefault(_ElectricNavigation);

var _ElectricReadingProgress = __webpack_require__(36);

var _ElectricReadingProgress2 = _interopRequireDefault(_ElectricReadingProgress);

var _ElectricSearch = __webpack_require__(37);

var _ElectricSearch2 = _interopRequireDefault(_ElectricSearch);

var _ElectricSearchAutocomplete = __webpack_require__(38);

var _ElectricSearchAutocomplete2 = _interopRequireDefault(_ElectricSearchAutocomplete);

var _ElectricSearchBase = __webpack_require__(9);

var _ElectricSearchBase2 = _interopRequireDefault(_ElectricSearchBase);

var _ElectricUpdates = __webpack_require__(39);

var _ElectricUpdates2 = _interopRequireDefault(_ElectricUpdates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ElectricCode = _ElectricCode2.default;
exports.ElectricCodeTabs = _ElectricCodeTabs2.default;
exports.ElectricNavigation = _ElectricNavigation2.default;
exports.ElectricReadingProgress = _ElectricReadingProgress2.default;
exports.ElectricSearch = _ElectricSearch2.default;
exports.ElectricSearchAutocomplete = _ElectricSearchAutocomplete2.default;
exports.ElectricSearchBase = _ElectricSearchBase2.default;
exports.ElectricUpdates = _ElectricUpdates2.default;
exports.default = _ElectricNavigation2.default;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Position = exports.Geometry = exports.Align = undefined;

var _Align = __webpack_require__(52);

var _Align2 = _interopRequireDefault(_Align);

var _Geometry = __webpack_require__(13);

var _Geometry2 = _interopRequireDefault(_Geometry);

var _Position = __webpack_require__(14);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Position2.default;
exports.Align = _Align2.default;
exports.Geometry = _Geometry2.default;
exports.Position = _Position2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * Promises polyfill from Google's Closure Library.
 *
 *      Copyright 2013 The Closure Library Authors. All Rights Reserved.
 *
 * NOTE(eduardo): Promise support is not ready on all supported browsers,
 * therefore metal-promise is temporarily using Google's promises as polyfill.
 * It supports cancellable promises and has clean and fast implementation.
 */



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancellablePromise = undefined;

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see CancellablePromise}.
 *
 * @interface
 * @extends {IThenable.<TYPE>}
 * @template TYPE
 */
var Thenable = function Thenable() {};

/**
 * Adds callbacks that will operate on the result of the Thenable, returning a
 * new child Promise.
 *
 * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
 * invoked with the fulfillment value as argument, and the child Promise will
 * be fulfilled with the return value of the callback. If the callback throws
 * an exception, the child Promise will be rejected with the thrown value
 * instead.
 *
 * If the Thenable is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value of the callback or thrown value.
 *
 * @param {?(function(this:THIS, TYPE):
 *             (RESULT|IThenable.<RESULT>|Thenable))=} opt_onFulfilled A
 *     function that will be invoked with the fulfillment value if the Promise
 *     is fullfilled.
 * @param {?(function(*): *)=} opt_onRejected A function that will be invoked
 *     with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     with the default this.
 * @return {!CancellablePromise.<RESULT>} A new Promise that will receive the
 *     result of the fulfillment or rejection callback.
 * @template RESULT,THIS
 */
Thenable.prototype.then = function () {};

/**
 * An expando property to indicate that an object implements
 * {@code Thenable}.
 *
 * {@see addImplementation}.
 *
 * @const
 */
Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';

/**
 * Marks a given class (constructor) as an implementation of Thenable, so
 * that we can query that fact at runtime. The class must have already
 * implemented the interface.
 * Exports a 'then' method on the constructor prototype, so that the objects
 * also implement the extern {@see Thenable} interface for interop with
 * other Promise implementations.
 * @param {function(new:Thenable,...[?])} ctor The class constructor. The
 *     corresponding class must have already implemented the interface.
 */
Thenable.addImplementation = function (ctor) {
  ctor.prototype.then = ctor.prototype.then;
  ctor.prototype.$goog_Thenable = true;
};

/**
 * @param {*} object
 * @return {boolean} Whether a given instance implements {@code Thenable}.
 *     The class/superclass of the instance must call {@code addImplementation}.
 */
Thenable.isImplementedBy = function (object) {
  if (!object) {
    return false;
  }
  try {
    return !!object.$goog_Thenable;
  } catch (e) {
    // Property access seems to be forbidden.
    return false;
  }
};

/**
 * Like bind(), except that a 'this object' is not required. Useful when the
 * target function is already bound.
 *
 * Usage:
 * var g = partial(f, arg1, arg2);
 * g(arg3, arg4);
 *
 * @param {Function} fn A function to partially apply.
 * @param {...*} var_args Additional arguments that are partially applied to fn.
 * @return {!Function} A partially-applied form of the function bind() was
 *     invoked as a method of.
 */
var partial = function partial(fn) {
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // Clone the array (with slice()) and append additional arguments
    // to the existing arguments.
    var newArgs = args.slice();
    newArgs.push.apply(newArgs, arguments);
    return fn.apply(this, newArgs);
  };
};

/**
 * Promises provide a result that may be resolved asynchronously. A Promise may
 * be resolved by being fulfilled or rejected with a value, which will be known
 * as the fulfillment value or the rejection reason. Whether fulfilled or
 * rejected, the Promise result is immutable once it is set.
 *
 * Promises may represent results of any type, including undefined. Rejection
 * reasons are typically Errors, but may also be of any type. Closure Promises
 * allow for optional type annotations that enforce that fulfillment values are
 * of the appropriate types at compile time.
 *
 * The result of a Promise is accessible by calling {@code then} and registering
 * {@code onFulfilled} and {@code onRejected} callbacks. Once the Promise
 * resolves, the relevant callbacks are invoked with the fulfillment value or
 * rejection reason as argument. Callbacks are always invoked in the order they
 * were registered, even when additional {@code then} calls are made from inside
 * another callback. A callback is always run asynchronously sometime after the
 * scope containing the registering {@code then} invocation has returned.
 *
 * If a Promise is resolved with another Promise, the first Promise will block
 * until the second is resolved, and then assumes the same result as the second
 * Promise. This allows Promises to depend on the results of other Promises,
 * linking together multiple asynchronous operations.
 *
 * This implementation is compatible with the Promises/A+ specification and
 * passes that specification's conformance test suite. A Closure Promise may be
 * resolved with a Promise instance (or sufficiently compatible Promise-like
 * object) created by other Promise implementations. From the specification,
 * Promise-like objects are known as "Thenables".
 *
 * @see http://promisesaplus.com/
 *
 * @param {function(
 *             this:RESOLVER_CONTEXT,
 *             function((TYPE|IThenable.<TYPE>|Thenable)),
 *             function(*)): void} resolver
 *     Initialization function that is invoked immediately with {@code resolve}
 *     and {@code reject} functions as arguments. The Promise is resolved or
 *     rejected with the first argument passed to either function.
 * @param {RESOLVER_CONTEXT=} opt_context An optional context for executing the
 *     resolver function. If unspecified, the resolver function will be executed
 *     in the default scope.
 * @constructor
 * @struct
 * @final
 * @implements {Thenable.<TYPE>}
 * @template TYPE,RESOLVER_CONTEXT
 */
var CancellablePromise = function CancellablePromise(resolver, opt_context) {
  /**
   * The internal state of this Promise. Either PENDING, FULFILLED, REJECTED, or
   * BLOCKED.
   * @private {CancellablePromise.State_}
   */
  this.state_ = CancellablePromise.State_.PENDING;

  /**
   * The resolved result of the Promise. Immutable once set with either a
   * fulfillment value or rejection reason.
   * @private {*}
   */
  this.result_ = undefined;

  /**
   * For Promises created by calling {@code then()}, the originating parent.
   * @private {CancellablePromise}
   */
  this.parent_ = null;

  /**
   * The list of {@code onFulfilled} and {@code onRejected} callbacks added to
   * this Promise by calls to {@code then()}.
   * @private {Array.<CancellablePromise.CallbackEntry_>}
   */
  this.callbackEntries_ = null;

  /**
   * Whether the Promise is in the queue of Promises to execute.
   * @private {boolean}
   */
  this.executing_ = false;

  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    /**
     * A timeout ID used when the {@code UNHANDLED_REJECTION_DELAY} is greater
     * than 0 milliseconds. The ID is set when the Promise is rejected, and
     * cleared only if an {@code onRejected} callback is invoked for the
     * Promise (or one of its descendants) before the delay is exceeded.
     *
     * If the rejection is not handled before the timeout completes, the
     * rejection reason is passed to the unhandled rejection handler.
     * @private {number}
     */
    this.unhandledRejectionId_ = 0;
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    /**
     * When the {@code UNHANDLED_REJECTION_DELAY} is set to 0 milliseconds, a
     * boolean that is set if the Promise is rejected, and reset to false if an
     * {@code onRejected} callback is invoked for the Promise (or one of its
     * descendants). If the rejection is not handled before the next timestep,
     * the rejection reason is passed to the unhandled rejection handler.
     * @private {boolean}
     */
    this.hadUnhandledRejection_ = false;
  }

  try {
    var self = this;
    resolver.call(opt_context, function (value) {
      self.resolve_(CancellablePromise.State_.FULFILLED, value);
    }, function (reason) {
      self.resolve_(CancellablePromise.State_.REJECTED, reason);
    });
  } catch (e) {
    this.resolve_(CancellablePromise.State_.REJECTED, e);
  }
};

/**
 * The delay in milliseconds before a rejected Promise's reason is passed to
 * the rejection handler. By default, the rejection handler rethrows the
 * rejection reason so that it appears in the developer console or
 * {@code window.onerror} handler.
 * Rejections are rethrown as quickly as possible by default. A negative value
 * disables rejection handling entirely.
 * @type {number}
 */
CancellablePromise.UNHANDLED_REJECTION_DELAY = 0;

/**
 * The possible internal states for a Promise. These states are not directly
 * observable to external callers.
 * @enum {number}
 * @private
 */
CancellablePromise.State_ = {
  /** The Promise is waiting for resolution. */
  PENDING: 0,

  /** The Promise is blocked waiting for the result of another Thenable. */
  BLOCKED: 1,

  /** The Promise has been resolved with a fulfillment value. */
  FULFILLED: 2,

  /** The Promise has been resolved with a rejection reason. */
  REJECTED: 3
};

/**
 * Typedef for entries in the callback chain. Each call to {@code then},
 * {@code thenCatch}, or {@code thenAlways} creates an entry containing the
 * functions that may be invoked once the Promise is resolved.
 *
 * @typedef {{
 *   child: CancellablePromise,
 *   onFulfilled: function(*),
 *   onRejected: function(*)
 * }}
 * @private
 */
CancellablePromise.CallbackEntry_ = null;

/**
 * @param {(TYPE|Thenable.<TYPE>|Thenable)=} opt_value
 * @return {!CancellablePromise.<TYPE>} A new Promise that is immediately resolved
 *     with the given value.
 * @template TYPE
 */
CancellablePromise.resolve = function (opt_value) {
  return new CancellablePromise(function (resolve) {
    resolve(opt_value);
  });
};

/**
 * @param {*=} opt_reason
 * @return {!CancellablePromise} A new Promise that is immediately rejected with the
 *     given reason.
 */
CancellablePromise.reject = function (opt_reason) {
  return new CancellablePromise(function (resolve, reject) {
    reject(opt_reason);
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<TYPE>} A Promise that receives the result of the
 *     first Promise (or Promise-like) input to complete.
 * @template TYPE
 */
CancellablePromise.race = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    if (!promises.length) {
      resolve(undefined);
    }
    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(resolve, reject);
    }
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<!Array.<TYPE>>} A Promise that receives a list of
 *     every fulfilled value once every input Promise (or Promise-like) is
 *     successfully fulfilled, or is rejected by the first rejection result.
 * @template TYPE
 */
CancellablePromise.all = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    var toFulfill = promises.length;
    var values = [];

    if (!toFulfill) {
      resolve(values);
      return;
    }

    var onFulfill = function onFulfill(index, value) {
      toFulfill--;
      values[index] = value;
      if (toFulfill === 0) {
        resolve(values);
      }
    };

    var onReject = function onReject(reason) {
      reject(reason);
    };

    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(partial(onFulfill, i), onReject);
    }
  });
};

/**
 * @param {!Array.<!(Thenable.<TYPE>|Thenable)>} promises
 * @return {!CancellablePromise.<TYPE>} A Promise that receives the value of
 *     the first input to be fulfilled, or is rejected with a list of every
 *     rejection reason if all inputs are rejected.
 * @template TYPE
 */
CancellablePromise.firstFulfilled = function (promises) {
  return new CancellablePromise(function (resolve, reject) {
    var toReject = promises.length;
    var reasons = [];

    if (!toReject) {
      resolve(undefined);
      return;
    }

    var onFulfill = function onFulfill(value) {
      resolve(value);
    };

    var onReject = function onReject(index, reason) {
      toReject--;
      reasons[index] = reason;
      if (toReject === 0) {
        reject(reasons);
      }
    };

    for (var i = 0, promise; promise = promises[i]; i++) {
      promise.then(onFulfill, partial(onReject, i));
    }
  });
};

/**
 * Adds callbacks that will operate on the result of the Promise, returning a
 * new child Promise.
 *
 * If the Promise is fulfilled, the {@code onFulfilled} callback will be invoked
 * with the fulfillment value as argument, and the child Promise will be
 * fulfilled with the return value of the callback. If the callback throws an
 * exception, the child Promise will be rejected with the thrown value instead.
 *
 * If the Promise is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value (or thrown value) of the callback.
 *
 * @override
 */
CancellablePromise.prototype.then = function (opt_onFulfilled, opt_onRejected, opt_context) {
  return this.addChildPromise_((0, _metal.isFunction)(opt_onFulfilled) ? opt_onFulfilled : null, (0, _metal.isFunction)(opt_onRejected) ? opt_onRejected : null, opt_context);
};
Thenable.addImplementation(CancellablePromise);

/**
 * Adds a callback that will be invoked whether the Promise is fulfilled or
 * rejected. The callback receives no argument, and no new child Promise is
 * created. This is useful for ensuring that cleanup takes place after certain
 * asynchronous operations. Callbacks added with {@code thenAlways} will be
 * executed in the same order with other calls to {@code then},
 * {@code thenAlways}, or {@code thenCatch}.
 *
 * Since it does not produce a new child Promise, cancellation propagation is
 * not prevented by adding callbacks with {@code thenAlways}. A Promise that has
 * a cleanup handler added with {@code thenAlways} will be canceled if all of
 * its children created by {@code then} (or {@code thenCatch}) are canceled.
 *
 * @param {function(this:THIS): void} onResolved A function that will be invoked
 *     when the Promise is resolved.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     in the global scope.
 * @return {!CancellablePromise.<TYPE>} This Promise, for chaining additional calls.
 * @template THIS
 */
CancellablePromise.prototype.thenAlways = function (onResolved, opt_context) {
  var callback = function callback() {
    try {
      // Ensure that no arguments are passed to onResolved.
      onResolved.call(opt_context);
    } catch (err) {
      CancellablePromise.handleRejection_.call(null, err);
    }
  };

  this.addCallbackEntry_({
    child: null,
    onRejected: callback,
    onFulfilled: callback
  });
  return this;
};

/**
 * Adds a callback that will be invoked only if the Promise is rejected. This
 * is equivalent to {@code then(null, onRejected)}.
 *
 * @param {!function(this:THIS, *): *} onRejected A function that will be
 *     invoked with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     in the global scope.
 * @return {!CancellablePromise} A new Promise that will receive the result of the
 *     callback.
 * @template THIS
 */
CancellablePromise.prototype.thenCatch = function (onRejected, opt_context) {
  return this.addChildPromise_(null, onRejected, opt_context);
};

/**
 * Alias of {@link CancellablePromise.prototype.thenCatch}
 */
CancellablePromise.prototype.catch = CancellablePromise.prototype.thenCatch;

/**
 * Cancels the Promise if it is still pending by rejecting it with a cancel
 * Error. No action is performed if the Promise is already resolved.
 *
 * All child Promises of the canceled Promise will be rejected with the same
 * cancel error, as with normal Promise rejection. If the Promise to be canceled
 * is the only child of a pending Promise, the parent Promise will also be
 * canceled. Cancellation may propagate upward through multiple generations.
 *
 * @param {string=} opt_message An optional debugging message for describing the
 *     cancellation reason.
 */
CancellablePromise.prototype.cancel = function (opt_message) {
  if (this.state_ === CancellablePromise.State_.PENDING) {
    _metal.async.run(function () {
      var err = new CancellablePromise.CancellationError(opt_message);
      err.IS_CANCELLATION_ERROR = true;
      this.cancelInternal_(err);
    }, this);
  }
};

/**
 * Cancels this Promise with the given error.
 *
 * @param {!Error} err The cancellation error.
 * @private
 */
CancellablePromise.prototype.cancelInternal_ = function (err) {
  if (this.state_ === CancellablePromise.State_.PENDING) {
    if (this.parent_) {
      // Cancel the Promise and remove it from the parent's child list.
      this.parent_.cancelChild_(this, err);
    } else {
      this.resolve_(CancellablePromise.State_.REJECTED, err);
    }
  }
};

/**
 * Cancels a child Promise from the list of callback entries. If the Promise has
 * not already been resolved, reject it with a cancel error. If there are no
 * other children in the list of callback entries, propagate the cancellation
 * by canceling this Promise as well.
 *
 * @param {!CancellablePromise} childPromise The Promise to cancel.
 * @param {!Error} err The cancel error to use for rejecting the Promise.
 * @private
 */
CancellablePromise.prototype.cancelChild_ = function (childPromise, err) {
  if (!this.callbackEntries_) {
    return;
  }
  var childCount = 0;
  var childIndex = -1;

  // Find the callback entry for the childPromise, and count whether there are
  // additional child Promises.
  for (var i = 0, entry; entry = this.callbackEntries_[i]; i++) {
    var child = entry.child;
    if (child) {
      childCount++;
      if (child === childPromise) {
        childIndex = i;
      }
      if (childIndex >= 0 && childCount > 1) {
        break;
      }
    }
  }

  // If the child Promise was the only child, cancel this Promise as well.
  // Otherwise, reject only the child Promise with the cancel error.
  if (childIndex >= 0) {
    if (this.state_ === CancellablePromise.State_.PENDING && childCount === 1) {
      this.cancelInternal_(err);
    } else {
      var callbackEntry = this.callbackEntries_.splice(childIndex, 1)[0];
      this.executeCallback_(callbackEntry, CancellablePromise.State_.REJECTED, err);
    }
  }
};

/**
 * Adds a callback entry to the current Promise, and schedules callback
 * execution if the Promise has already been resolved.
 *
 * @param {CancellablePromise.CallbackEntry_} callbackEntry Record containing
 *     {@code onFulfilled} and {@code onRejected} callbacks to execute after
 *     the Promise is resolved.
 * @private
 */
CancellablePromise.prototype.addCallbackEntry_ = function (callbackEntry) {
  if ((!this.callbackEntries_ || !this.callbackEntries_.length) && (this.state_ === CancellablePromise.State_.FULFILLED || this.state_ === CancellablePromise.State_.REJECTED)) {
    this.scheduleCallbacks_();
  }
  if (!this.callbackEntries_) {
    this.callbackEntries_ = [];
  }
  this.callbackEntries_.push(callbackEntry);
};

/**
 * Creates a child Promise and adds it to the callback entry list. The result of
 * the child Promise is determined by the state of the parent Promise and the
 * result of the {@code onFulfilled} or {@code onRejected} callbacks as
 * specified in the Promise resolution procedure.
 *
 * @see http://promisesaplus.com/#the__method
 *
 * @param {?function(this:THIS, TYPE):
 *          (RESULT|CancellablePromise.<RESULT>|Thenable)} onFulfilled A callback that
 *     will be invoked if the Promise is fullfilled, or null.
 * @param {?function(this:THIS, *): *} onRejected A callback that will be
 *     invoked if the Promise is rejected, or null.
 * @param {THIS=} opt_context An optional execution context for the callbacks.
 *     in the default calling context.
 * @return {!CancellablePromise} The child Promise.
 * @template RESULT,THIS
 * @private
 */
CancellablePromise.prototype.addChildPromise_ = function (onFulfilled, onRejected, opt_context) {

  var callbackEntry = {
    child: null,
    onFulfilled: null,
    onRejected: null
  };

  callbackEntry.child = new CancellablePromise(function (resolve, reject) {
    // Invoke onFulfilled, or resolve with the parent's value if absent.
    callbackEntry.onFulfilled = onFulfilled ? function (value) {
      try {
        var result = onFulfilled.call(opt_context, value);
        resolve(result);
      } catch (err) {
        reject(err);
      }
    } : resolve;

    // Invoke onRejected, or reject with the parent's reason if absent.
    callbackEntry.onRejected = onRejected ? function (reason) {
      try {
        var result = onRejected.call(opt_context, reason);
        if (!(0, _metal.isDef)(result) && reason.IS_CANCELLATION_ERROR) {
          // Propagate cancellation to children if no other result is returned.
          reject(reason);
        } else {
          resolve(result);
        }
      } catch (err) {
        reject(err);
      }
    } : reject;
  });

  callbackEntry.child.parent_ = this;
  this.addCallbackEntry_(
  /** @type {CancellablePromise.CallbackEntry_} */callbackEntry);
  return callbackEntry.child;
};

/**
 * Unblocks the Promise and fulfills it with the given value.
 *
 * @param {TYPE} value
 * @private
 */
CancellablePromise.prototype.unblockAndFulfill_ = function (value) {
  if (this.state_ !== CancellablePromise.State_.BLOCKED) {
    throw new Error('CancellablePromise is not blocked.');
  }
  this.state_ = CancellablePromise.State_.PENDING;
  this.resolve_(CancellablePromise.State_.FULFILLED, value);
};

/**
 * Unblocks the Promise and rejects it with the given rejection reason.
 *
 * @param {*} reason
 * @private
 */
CancellablePromise.prototype.unblockAndReject_ = function (reason) {
  if (this.state_ !== CancellablePromise.State_.BLOCKED) {
    throw new Error('CancellablePromise is not blocked.');
  }
  this.state_ = CancellablePromise.State_.PENDING;
  this.resolve_(CancellablePromise.State_.REJECTED, reason);
};

/**
 * Attempts to resolve a Promise with a given resolution state and value. This
 * is a no-op if the given Promise has already been resolved.
 *
 * If the given result is a Thenable (such as another Promise), the Promise will
 * be resolved with the same state and result as the Thenable once it is itself
 * resolved.
 *
 * If the given result is not a Thenable, the Promise will be fulfilled or
 * rejected with that result based on the given state.
 *
 * @see http://promisesaplus.com/#the_promise_resolution_procedure
 *
 * @param {CancellablePromise.State_} state
 * @param {*} x The result to apply to the Promise.
 * @private
 */
CancellablePromise.prototype.resolve_ = function (state, x) {
  if (this.state_ !== CancellablePromise.State_.PENDING) {
    return;
  }

  if (this === x) {
    state = CancellablePromise.State_.REJECTED;
    x = new TypeError('CancellablePromise cannot resolve to itself');
  } else if (Thenable.isImplementedBy(x)) {
    x = /** @type {!Thenable} */x;
    this.state_ = CancellablePromise.State_.BLOCKED;
    x.then(this.unblockAndFulfill_, this.unblockAndReject_, this);
    return;
  } else if ((0, _metal.isObject)(x)) {
    try {
      var then = x.then;
      if ((0, _metal.isFunction)(then)) {
        this.tryThen_(x, then);
        return;
      }
    } catch (e) {
      state = CancellablePromise.State_.REJECTED;
      x = e;
    }
  }

  this.result_ = x;
  this.state_ = state;
  this.scheduleCallbacks_();

  if (state === CancellablePromise.State_.REJECTED && !x.IS_CANCELLATION_ERROR) {
    CancellablePromise.addUnhandledRejection_(this, x);
  }
};

/**
 * Attempts to call the {@code then} method on an object in the hopes that it is
 * a Promise-compatible instance. This allows interoperation between different
 * Promise implementations, however a non-compliant object may cause a Promise
 * to hang indefinitely. If the {@code then} method throws an exception, the
 * dependent Promise will be rejected with the thrown value.
 *
 * @see http://promisesaplus.com/#point-70
 *
 * @param {Thenable} thenable An object with a {@code then} method that may be
 *     compatible with the Promise/A+ specification.
 * @param {!Function} then The {@code then} method of the Thenable object.
 * @private
 */
CancellablePromise.prototype.tryThen_ = function (thenable, then) {
  this.state_ = CancellablePromise.State_.BLOCKED;
  var promise = this;
  var called = false;

  var resolve = function resolve(value) {
    if (!called) {
      called = true;
      promise.unblockAndFulfill_(value);
    }
  };

  var reject = function reject(reason) {
    if (!called) {
      called = true;
      promise.unblockAndReject_(reason);
    }
  };

  try {
    then.call(thenable, resolve, reject);
  } catch (e) {
    reject(e);
  }
};

/**
 * Executes the pending callbacks of a resolved Promise after a timeout.
 *
 * Section 2.2.4 of the Promises/A+ specification requires that Promise
 * callbacks must only be invoked from a call stack that only contains Promise
 * implementation code, which we accomplish by invoking callback execution after
 * a timeout. If {@code startExecution_} is called multiple times for the same
 * Promise, the callback chain will be evaluated only once. Additional callbacks
 * may be added during the evaluation phase, and will be executed in the same
 * event loop.
 *
 * All Promises added to the waiting list during the same browser event loop
 * will be executed in one batch to avoid using a separate timeout per Promise.
 *
 * @private
 */
CancellablePromise.prototype.scheduleCallbacks_ = function () {
  if (!this.executing_) {
    this.executing_ = true;
    _metal.async.run(this.executeCallbacks_, this);
  }
};

/**
 * Executes all pending callbacks for this Promise.
 *
 * @private
 */
CancellablePromise.prototype.executeCallbacks_ = function () {
  while (this.callbackEntries_ && this.callbackEntries_.length) {
    var entries = this.callbackEntries_;
    this.callbackEntries_ = [];

    for (var i = 0; i < entries.length; i++) {
      this.executeCallback_(entries[i], this.state_, this.result_);
    }
  }
  this.executing_ = false;
};

/**
 * Executes a pending callback for this Promise. Invokes an {@code onFulfilled}
 * or {@code onRejected} callback based on the resolved state of the Promise.
 *
 * @param {!CancellablePromise.CallbackEntry_} callbackEntry An entry containing the
 *     onFulfilled and/or onRejected callbacks for this step.
 * @param {CancellablePromise.State_} state The resolution status of the Promise,
 *     either FULFILLED or REJECTED.
 * @param {*} result The resolved result of the Promise.
 * @private
 */
CancellablePromise.prototype.executeCallback_ = function (callbackEntry, state, result) {
  if (state === CancellablePromise.State_.FULFILLED) {
    callbackEntry.onFulfilled(result);
  } else {
    this.removeUnhandledRejection_();
    callbackEntry.onRejected(result);
  }
};

/**
 * Marks this rejected Promise as having being handled. Also marks any parent
 * Promises in the rejected state as handled. The rejection handler will no
 * longer be invoked for this Promise (if it has not been called already).
 *
 * @private
 */
CancellablePromise.prototype.removeUnhandledRejection_ = function () {
  var p;
  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    for (p = this; p && p.unhandledRejectionId_; p = p.parent_) {
      clearTimeout(p.unhandledRejectionId_);
      p.unhandledRejectionId_ = 0;
    }
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    for (p = this; p && p.hadUnhandledRejection_; p = p.parent_) {
      p.hadUnhandledRejection_ = false;
    }
  }
};

/**
 * Marks this rejected Promise as unhandled. If no {@code onRejected} callback
 * is called for this Promise before the {@code UNHANDLED_REJECTION_DELAY}
 * expires, the reason will be passed to the unhandled rejection handler. The
 * handler typically rethrows the rejection reason so that it becomes visible in
 * the developer console.
 *
 * @param {!CancellablePromise} promise The rejected Promise.
 * @param {*} reason The Promise rejection reason.
 * @private
 */
CancellablePromise.addUnhandledRejection_ = function (promise, reason) {
  if (CancellablePromise.UNHANDLED_REJECTION_DELAY > 0) {
    promise.unhandledRejectionId_ = setTimeout(function () {
      CancellablePromise.handleRejection_.call(null, reason);
    }, CancellablePromise.UNHANDLED_REJECTION_DELAY);
  } else if (CancellablePromise.UNHANDLED_REJECTION_DELAY === 0) {
    promise.hadUnhandledRejection_ = true;
    _metal.async.run(function () {
      if (promise.hadUnhandledRejection_) {
        CancellablePromise.handleRejection_.call(null, reason);
      }
    });
  }
};

/**
 * A method that is invoked with the rejection reasons for Promises that are
 * rejected but have no {@code onRejected} callbacks registered yet.
 * @type {function(*)}
 * @private
 */
CancellablePromise.handleRejection_ = _metal.async.throwException;

/**
 * Sets a handler that will be called with reasons from unhandled rejected
 * Promises. If the rejected Promise (or one of its descendants) has an
 * {@code onRejected} callback registered, the rejection will be considered
 * handled, and the rejection handler will not be called.
 *
 * By default, unhandled rejections are rethrown so that the error may be
 * captured by the developer console or a {@code window.onerror} handler.
 *
 * @param {function(*)} handler A function that will be called with reasons from
 *     rejected Promises. Defaults to {@code async.throwException}.
 */
CancellablePromise.setUnhandledRejectionHandler = function (handler) {
  CancellablePromise.handleRejection_ = handler;
};

/**
 * Error used as a rejection reason for canceled Promises.
 *
 * @param {string=} opt_message
 * @constructor
 * @extends {Error}
 * @final
 */
CancellablePromise.CancellationError = function (_Error) {
  _inherits(_class, _Error);

  function _class(opt_message) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, _Error.call(this, opt_message));

    if (opt_message) {
      _this.message = opt_message;
    }
    return _this;
  }

  return _class;
}(Error);

/** @override */
CancellablePromise.CancellationError.prototype.name = 'cancel';

exports.CancellablePromise = CancellablePromise;
exports.default = CancellablePromise;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalAjax = __webpack_require__(41);

var _metalAjax2 = _interopRequireDefault(_metalAjax);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalPromise = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricSearchBase = function (_Component) {
	_inherits(ElectricSearchBase, _Component);

	function ElectricSearchBase() {
		_classCallCheck(this, ElectricSearchBase);

		return _possibleConstructorReturn(this, (ElectricSearchBase.__proto__ || Object.getPrototypeOf(ElectricSearchBase)).apply(this, arguments));
	}

	_createClass(ElectricSearchBase, [{
		key: 'attached',
		value: function attached() {
			this.on('queryChanged', this.handleQueryChange_.bind(this));
		}
	}, {
		key: 'matchesQuery_',
		value: function matchesQuery_(data, query) {
			var childrenOnly = this.childrenOnly;

			var path = this.path || location.pathname;

			var content = data.content,
			    description = data.description,
			    hidden = data.hidden,
			    title = data.title,
			    url = data.url;


			if (childrenOnly && url.indexOf(path) !== 0 && url !== path) {
				return false;
			}

			content = content ? content.toLowerCase() : '';
			description = description ? description.toLowerCase() : '';
			title = title ? title.toLowerCase() : '';

			return !hidden && (title.indexOf(query) > -1 || description.indexOf(query) > -1 || content.indexOf(query) > -1);
		}
	}, {
		key: 'filterResults_',
		value: function filterResults_(data, query) {
			var _this2 = this;

			var children = data.children,
			    childIds = data.childIds;


			var results = [];

			if (this.matchesQuery_(data, query)) {
				results.push(data);
			}

			if (children) {
				childIds.forEach(function (childId) {
					var child = children[childId];

					results = results.concat(_this2.filterResults_(child, query));
				});
			}

			return results;
		}
	}, {
		key: 'handleQueryChange_',
		value: function handleQueryChange_(_ref) {
			var newVal = _ref.newVal;

			var instance = this;

			this.search_(newVal).then(function (results) {
				instance.results = results;
			});
		}
	}, {
		key: 'search_',
		value: function search_(query) {
			var instance = this;

			return _metalPromise.CancellablePromise.resolve(this.data).then(function (data) {
				if (data) {
					return data;
				} else {
					return _metalAjax2.default.request('/site.json');
					then(res);
				}
			}).then(function (data) {
				if (data.response) {
					data = JSON.parse(data.response).index;

					instance.data = data;
				}

				var maxResults = instance.maxResults;


				var results = [];

				if (data && query) {
					results = instance.filterResults_(data, query.toLowerCase());

					if (results.length > maxResults) {
						results = results.slice(0, maxResults);
					}
				}

				return results;
			});
		}
	}]);

	return ElectricSearchBase;
}(_metalComponent2.default);

;

ElectricSearchBase.STATE = {
	childrenOnly: {
		validator: _metal2.default.isBoolean,
		value: true
	},

	data: {
		validator: _metal2.default.isObject
	},

	maxResults: {
		validator: _metal2.default.isNumber,
		value: 4
	},

	path: {
		validator: _metal2.default.isString,
		value: null
	},

	query: {
		validator: _metal2.default.isString,
		value: ''
	},

	results: {
		validator: _metal2.default.isArray,
		value: []
	}
};

exports.default = ElectricSearchBase;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _MainNavigation = __webpack_require__(19);

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainNavigation = function (_Component) {
	_inherits(MainNavigation, _Component);

	function MainNavigation() {
		_classCallCheck(this, MainNavigation);

		return _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).apply(this, arguments));
	}

	_createClass(MainNavigation, [{
		key: 'handleCollapseClick_',
		value: function handleCollapseClick_(event) {
			event.preventDefault();

			var parent = _metalDom2.default.parent(event.target, 'li');

			var cssClass = 'active';

			_metalDom2.default.toggleClasses(parent, cssClass);
		}
	}]);

	return MainNavigation;
}(_metalComponent2.default);

;

_metalSoy2.default.register(MainNavigation, _MainNavigation2.default);

exports.default = MainNavigation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _metalToggler = __webpack_require__(18);

var _metalToggler2 = _interopRequireDefault(_metalToggler);

var _Sidebar = __webpack_require__(20);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
	_inherits(Sidebar, _Component);

	function Sidebar() {
		_classCallCheck(this, Sidebar);

		return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
	}

	_createClass(Sidebar, [{
		key: 'attached',
		value: function attached() {
			_metalToggler2.default.CSS_EXPANDED = 'open'; /* Until metal-toggler can manage classenames on states */

			this._toggler = new _metalToggler2.default({
				content: '.sidebar-toggler-content',
				header: '.sidebar-toggler'
			});
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			this._toggler.dispose();
		}
	}]);

	return Sidebar;
}(_metalComponent2.default);

;

_metalSoy2.default.register(Sidebar, _Sidebar2.default);

exports.default = Sidebar;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalPromise = __webpack_require__(8);

var _metalPromise2 = _interopRequireDefault(_metalPromise);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalEvents = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
 * AutocompleteBase component.
 */
var AutocompleteBase = function (_Component) {
	_inherits(AutocompleteBase, _Component);

	function AutocompleteBase() {
		_classCallCheck(this, AutocompleteBase);

		return _possibleConstructorReturn(this, (AutocompleteBase.__proto__ || Object.getPrototypeOf(AutocompleteBase)).apply(this, arguments));
	}

	_createClass(AutocompleteBase, [{
		key: 'created',

		/**
   * @inheritDoc
   */
		value: function created() {
			this.eventHandler_ = new _metalEvents.EventHandler();
			this.on('select', this.select);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'attached',
		value: function attached() {
			if (this.inputElement) {
				this.eventHandler_.add(_metalDom2.default.on(this.inputElement, 'input', this.handleUserInput_.bind(this)));
			}
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'detached',
		value: function detached() {
			this.eventHandler_.removeAllListeners();
		}

		/**
   * Handles the user input.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleUserInput_',
		value: function handleUserInput_() {
			this.request(this.inputElement.value);
		}

		/**
   * Cancels pending request and starts a request for the user input.
   * @param {string} query
   * @return {!CancellablePromise} Deferred request.
   */

	}, {
		key: 'request',
		value: function request(query) {
			var self = this;

			if (this.pendingRequest) {
				this.pendingRequest.cancel('Cancelled by another request');
			}

			var deferredData = self.data(query);
			if (!_metal2.default.isPromise(deferredData)) {
				deferredData = _metalPromise2.default.resolve(deferredData);
			}

			this.pendingRequest = deferredData.then(function (data) {
				if (Array.isArray(data)) {
					return data.map(self.format.bind(self)).filter(function (val) {
						return _metal2.default.isDefAndNotNull(val);
					});
				}
			});

			return this.pendingRequest;
		}

		/**
   * Normalizes the provided data value. If the value is not a function, the
   * value will be wrapped in a function which returns the provided value.
   * @param {Array.<object>|Promise|function} val The provided value which
   *     have to be normalized.
   * @protected
   */

	}, {
		key: 'setData_',
		value: function setData_(val) {
			if (!_metal2.default.isFunction(val)) {
				return function () {
					return val;
				};
			}
			return val;
		}
	}]);

	return AutocompleteBase;
}(_metalComponent2.default);

/**
 * AutocompleteBase state definition.
 * @type {!Object}
 * @static
 */


AutocompleteBase.STATE = {
	/**
  * List's main element ID value. It is also used to compose List items' id.
  * @type {string}
  * @default autocomplete- + core.getUid()
  */
	listId: {
		valueFn: function valueFn() {
			return 'autocomplete-' + _metal2.default.getUid();
		}
	},

	/**
  * Function or array, which have to return the results from the query.
  * If function, it should return an `array` or a `Promise`. In case of
  * Promise, it should be resolved with an array containing the results.
  * @type {Array.<object>|function}
  */
	data: {
		setter: 'setData_'
	},

	/**
  * Function that formats each item of the data.
  * @type {function}
  * @default Identity function.
  */
	format: {
		value: _metal2.default.identityFunction,
		validator: _metal2.default.isFunction
	},

	/**
  * The element which will be used source for the data queries.
  * @type {DOMElement|string}
  */
	inputElement: {
		setter: _metalDom2.default.toElement
	},

	/**
  * Handles item selection. It will receive two parameters - the selected
  * value from the user and the current value from the input element.
  * @type {function}
  * @default
  *   function(selectedValue) {
  *	   this.inputElement.value = selectedValue;
  *	   this.inputElement.focus();
  *   }
  */
	select: {
		value: function value(selectedValue) {
			this.inputElement.value = selectedValue.text;
			this.inputElement.focus();
		},
		validator: _metal2.default.isFunction
	},

	/**
  * Indicates if the component is visible or not.
  * @type {boolean}
  */
	visible: {
		validator: _metal2.default.isBoolean,
		value: false
	}
};

exports.default = AutocompleteBase;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Geometry = function () {
	function Geometry() {
		_classCallCheck(this, Geometry);
	}

	_createClass(Geometry, null, [{
		key: 'intersectRect',

		/**
     * Tests if a rectangle intersects with another.
     *
     * <pre>
     *  x0y0 --------       x2y2 --------
     *      |       |           |       |
     *      -------- x1y1       -------- x3y3
     * </pre>
     *
     * Note that coordinates starts from top to down (y), left to right (x):
     *
     * <pre>
     *      ------> (x)
     *      |
     *      |
     *     (y)
     * </pre>
     *
     * @param {number} x0 Horizontal coordinate of P0.
     * @param {number} y0 Vertical coordinate of P0.
     * @param {number} x1 Horizontal coordinate of P1.
     * @param {number} y1 Vertical coordinate of P1.
     * @param {number} x2 Horizontal coordinate of P2.
     * @param {number} y2 Vertical coordinate of P2.
     * @param {number} x3 Horizontal coordinate of P3.
     * @param {number} y3 Vertical coordinate of P3.
     * @return {boolean}
     */
		value: function intersectRect(x0, y0, x1, y1, x2, y2, x3, y3) {
			return !(x2 > x1 || x3 < x0 || y2 > y1 || y3 < y0);
		}
	}]);

	return Geometry;
}();

exports.default = Geometry;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _Geometry = __webpack_require__(13);

var _Geometry2 = _interopRequireDefault(_Geometry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class with static methods responsible for doing browser position checks.
 */
var Position = function () {
	function Position() {
		_classCallCheck(this, Position);
	}

	_createClass(Position, null, [{
		key: 'getClientHeight',

		/**
   * Gets the client height of the specified node. Scroll height is not
   * included.
   * @param {Element|Document|Window=} node
   * @return {number}
   */
		value: function getClientHeight(node) {
			return this.getClientSize_(node, 'Height');
		}

		/**
   * Gets the client height or width of the specified node. Scroll height is
   * not included.
   * @param {Element|Document|Window=} node
   * @param {string} `Width` or `Height` property.
   * @return {number}
   * @protected
   */

	}, {
		key: 'getClientSize_',
		value: function getClientSize_(node, prop) {
			var el = node;
			if (_metal2.default.isWindow(node)) {
				el = node.document.documentElement;
			}
			if (_metal2.default.isDocument(node)) {
				el = node.documentElement;
			}
			return el['client' + prop];
		}

		/**
   * Gets the client width of the specified node. Scroll width is not
   * included.
   * @param {Element|Document|Window=} node
   * @return {number}
   */

	}, {
		key: 'getClientWidth',
		value: function getClientWidth(node) {
			return this.getClientSize_(node, 'Width');
		}

		/**
   * Gets the region of the element, document or window.
   * @param {Element|Document|Window=} opt_element Optional element to test.
   * @return {!DOMRect} The returned value is a simulated DOMRect object which
   *     is the union of the rectangles returned by getClientRects() for the
   *     element, i.e., the CSS border-boxes associated with the element.
   * @protected
   */

	}, {
		key: 'getDocumentRegion_',
		value: function getDocumentRegion_(opt_element) {
			var height = this.getHeight(opt_element);
			var width = this.getWidth(opt_element);
			return this.makeRegion(height, height, 0, width, 0, width);
		}

		/**
   * Gets the height of the specified node. Scroll height is included.
   * @param {Element|Document|Window=} node
   * @return {number}
   */

	}, {
		key: 'getHeight',
		value: function getHeight(node) {
			return this.getSize_(node, 'Height');
		}

		/**
   * Gets the top offset position of the given node. This fixes the `offsetLeft` value of
   * nodes that were translated, which don't take that into account at all. That makes
   * the calculation more expensive though, so if you don't want that to be considered
   * either pass `opt_ignoreTransform` as true or call `offsetLeft` directly on the node.
   * @param {!Element} node
   * @param {boolean=} opt_ignoreTransform When set to true will ignore transform css
   *   when calculating the position. Defaults to false.
   * @return {number}
   */

	}, {
		key: 'getOffsetLeft',
		value: function getOffsetLeft(node, opt_ignoreTransform) {
			return node.offsetLeft + (opt_ignoreTransform ? 0 : Position.getTranslation(node).left);
		}

		/**
   * Gets the top offset position of the given node. This fixes the `offsetTop` value of
   * nodes that were translated, which don't take that into account at all. That makes
   * the calculation more expensive though, so if you don't want that to be considered
   * either pass `opt_ignoreTransform` as true or call `offsetTop` directly on the node.
   * @param {!Element} node
   * @param {boolean=} opt_ignoreTransform When set to true will ignore transform css
   *   when calculating the position. Defaults to false.
   * @return {number}
   */

	}, {
		key: 'getOffsetTop',
		value: function getOffsetTop(node, opt_ignoreTransform) {
			return node.offsetTop + (opt_ignoreTransform ? 0 : Position.getTranslation(node).top);
		}

		/**
   * Gets the size of an element and its position relative to the viewport.
   * @param {!Document|Element|Window} node
   * @param {boolean=} opt_includeScroll Flag indicating if the document scroll
   *   position should be considered in the element's region coordinates. Defaults
   *   to false.
   * @return {!DOMRect} The returned value is a DOMRect object which is the
   *     union of the rectangles returned by getClientRects() for the element,
   *     i.e., the CSS border-boxes associated with the element.
   */

	}, {
		key: 'getRegion',
		value: function getRegion(node, opt_includeScroll) {
			if (_metal2.default.isDocument(node) || _metal2.default.isWindow(node)) {
				return this.getDocumentRegion_(node);
			}
			return this.makeRegionFromBoundingRect_(node.getBoundingClientRect(), opt_includeScroll);
		}

		/**
   * Gets the scroll left position of the specified node.
   * @param {Element|Document|Window=} node
   * @return {number}
   */

	}, {
		key: 'getScrollLeft',
		value: function getScrollLeft(node) {
			if (_metal2.default.isWindow(node)) {
				return node.pageXOffset;
			}
			if (_metal2.default.isDocument(node)) {
				return node.defaultView.pageXOffset;
			}
			return node.scrollLeft;
		}

		/**
   * Gets the scroll top position of the specified node.
   * @param {Element|Document|Window=} node
   * @return {number}
   */

	}, {
		key: 'getScrollTop',
		value: function getScrollTop(node) {
			if (_metal2.default.isWindow(node)) {
				return node.pageYOffset;
			}
			if (_metal2.default.isDocument(node)) {
				return node.defaultView.pageYOffset;
			}
			return node.scrollTop;
		}

		/**
   * Gets the height or width of the specified node. Scroll height is
   * included.
   * @param {Element|Document|Window=} node
   * @param {string} `Width` or `Height` property.
   * @return {number}
   * @protected
   */

	}, {
		key: 'getSize_',
		value: function getSize_(node, prop) {
			if (_metal2.default.isWindow(node)) {
				return this.getClientSize_(node, prop);
			}
			if (_metal2.default.isDocument(node)) {
				var docEl = node.documentElement;
				return Math.max(node.body['scroll' + prop], docEl['scroll' + prop], node.body['offset' + prop], docEl['offset' + prop], docEl['client' + prop]);
			}
			return Math.max(node['client' + prop], node['scroll' + prop], node['offset' + prop]);
		}

		/**
   * Gets the transform matrix values for the given node.
   * @param {!Element} node
   * @return {Array<number>}
   */

	}, {
		key: 'getTransformMatrixValues',
		value: function getTransformMatrixValues(node) {
			var style = getComputedStyle(node);
			var transform = style.msTransform || style.transform || style.webkitTransform || style.mozTransform;
			if (transform !== 'none') {
				var values = [];
				var regex = /([\d-\.\s]+)/g;
				var matches = regex.exec(transform);
				while (matches) {
					values.push(matches[1]);
					matches = regex.exec(transform);
				}
				return values;
			}
		}

		/**
   * Gets the number of translated pixels for the given node, for both the top and
   * left positions.
   * @param {!Element} node
   * @return {number}
   */

	}, {
		key: 'getTranslation',
		value: function getTranslation(node) {
			var values = Position.getTransformMatrixValues(node);
			var translation = {
				left: 0,
				top: 0
			};
			if (values) {
				translation.left = parseFloat(values.length === 6 ? values[4] : values[13]);
				translation.top = parseFloat(values.length === 6 ? values[5] : values[14]);
			}
			return translation;
		}

		/**
   * Gets the width of the specified node. Scroll width is included.
   * @param {Element|Document|Window=} node
   * @return {number}
   */

	}, {
		key: 'getWidth',
		value: function getWidth(node) {
			return this.getSize_(node, 'Width');
		}

		/**
   * Tests if a region intersects with another.
   * @param {DOMRect} r1
   * @param {DOMRect} r2
   * @return {boolean}
   */

	}, {
		key: 'intersectRegion',
		value: function intersectRegion(r1, r2) {
			return _Geometry2.default.intersectRect(r1.top, r1.left, r1.bottom, r1.right, r2.top, r2.left, r2.bottom, r2.right);
		}

		/**
   * Tests if a region is inside another.
   * @param {DOMRect} r1
   * @param {DOMRect} r2
   * @return {boolean}
   */

	}, {
		key: 'insideRegion',
		value: function insideRegion(r1, r2) {
			return r2.top >= r1.top && r2.bottom <= r1.bottom && r2.right <= r1.right && r2.left >= r1.left;
		}

		/**
   * Tests if a region is inside viewport region.
   * @param {DOMRect} region
   * @return {boolean}
   */

	}, {
		key: 'insideViewport',
		value: function insideViewport(region) {
			return this.insideRegion(this.getRegion(window), region);
		}

		/**
   * Computes the intersection region between two regions.
   * @param {DOMRect} r1
   * @param {DOMRect} r2
   * @return {?DOMRect} Intersection region or null if regions doesn't
   *     intersects.
   */

	}, {
		key: 'intersection',
		value: function intersection(r1, r2) {
			if (!this.intersectRegion(r1, r2)) {
				return null;
			}
			var bottom = Math.min(r1.bottom, r2.bottom);
			var right = Math.min(r1.right, r2.right);
			var left = Math.max(r1.left, r2.left);
			var top = Math.max(r1.top, r2.top);
			return this.makeRegion(bottom, bottom - top, left, right, top, right - left);
		}

		/**
   * Makes a region object. It's a writable version of DOMRect.
   * @param {number} bottom
   * @param {number} height
   * @param {number} left
   * @param {number} right
   * @param {number} top
   * @param {number} width
   * @return {!DOMRect} The returned value is a DOMRect object which is the
   *     union of the rectangles returned by getClientRects() for the element,
   *     i.e., the CSS border-boxes associated with the element.
   */

	}, {
		key: 'makeRegion',
		value: function makeRegion(bottom, height, left, right, top, width) {
			return {
				bottom: bottom,
				height: height,
				left: left,
				right: right,
				top: top,
				width: width
			};
		}

		/**
   * Makes a region from a DOMRect result from `getBoundingClientRect`.
   * @param  {!DOMRect} The returned value is a DOMRect object which is the
   *     union of the rectangles returned by getClientRects() for the element,
   *     i.e., the CSS border-boxes associated with the element.
   * @param {boolean=} opt_includeScroll Flag indicating if the document scroll
   *   position should be considered in the element's region coordinates. Defaults
   *   to false.
   * @return {DOMRect} Writable version of DOMRect.
   * @protected
   */

	}, {
		key: 'makeRegionFromBoundingRect_',
		value: function makeRegionFromBoundingRect_(rect, opt_includeScroll) {
			var deltaX = opt_includeScroll ? Position.getScrollLeft(document) : 0;
			var deltaY = opt_includeScroll ? Position.getScrollTop(document) : 0;
			return this.makeRegion(rect.bottom + deltaY, rect.height, rect.left + deltaX, rect.right + deltaX, rect.top + deltaY, rect.width);
		}

		/**
   * Checks if the given point coordinates are inside a region.
   * @param {number} x
   * @param {number} y
   * @param {!Object} region
   * @return {boolean}
   */

	}, {
		key: 'pointInsideRegion',
		value: function pointInsideRegion(x, y, region) {
			return Position.insideRegion(region, Position.makeRegion(y, 0, x, x, y, 0));
		}
	}]);

	return Position;
}();

exports.default = Position;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ElectricUpdates = exports.ElectricSearchAutocomplete = exports.ElectricSearch = exports.ElectricReadingProgress = exports.ElectricNavigation = exports.ElectricCode = undefined;

var _ElectricCode = __webpack_require__(21);

var _ElectricCode2 = _interopRequireDefault(_ElectricCode);

var _ElectricNavigation = __webpack_require__(23);

var _ElectricNavigation2 = _interopRequireDefault(_ElectricNavigation);

var _ElectricReadingProgress = __webpack_require__(25);

var _ElectricReadingProgress2 = _interopRequireDefault(_ElectricReadingProgress);

var _ElectricSearch = __webpack_require__(27);

var _ElectricSearch2 = _interopRequireDefault(_ElectricSearch);

var _ElectricSearchAutocomplete = __webpack_require__(29);

var _ElectricSearchAutocomplete2 = _interopRequireDefault(_ElectricSearchAutocomplete);

var _ElectricUpdates = __webpack_require__(31);

var _ElectricUpdates2 = _interopRequireDefault(_ElectricUpdates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ElectricCode = _ElectricCode2.default;
exports.ElectricNavigation = _ElectricNavigation2.default;
exports.ElectricReadingProgress = _ElectricReadingProgress2.default;
exports.ElectricSearch = _ElectricSearch2.default;
exports.ElectricSearchAutocomplete = _ElectricSearchAutocomplete2.default;
exports.ElectricUpdates = _ElectricUpdates2.default;
exports.default = _ElectricNavigation2.default;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.guide = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from guide.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace guide.
   * @public
   */

  goog.module('guide.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias3 = _metalSoy2.default.getTemplate('ElectricReadingProgress.incrementaldom', 'render');

  var $templateAlias2 = _metalSoy2.default.getTemplate('Sidebar.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param61 = function param61() {
      $templateAlias2(soy.$$assignDefaults({ section: opt_data.site.index.children['docs'] }, opt_data), null, opt_ijData);
      $guide(opt_data, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ elementClasses: 'docs', content: param61 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'guide.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $guide(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'sidebar-offset');
    ie_open('header');
    ie_open('div', null, null, 'class', 'container-fluid');
    ie_open('h1');
    var dyn1 = opt_data.page.title;
    if (typeof dyn1 == 'function') dyn1();else if (dyn1 != null) itext(dyn1);
    ie_close('h1');
    ie_close('div');
    ie_close('header');
    ie_open('div', null, null, 'class', 'container-fluid');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-12');
    var dyn2 = opt_data.content;
    if (typeof dyn2 == 'function') dyn2();else if (dyn2 != null) itext(dyn2);
    ie_close('div');
    ie_open('nav', null, null, 'class', 'col-md-5 col-md-offset-2 col-xs-12');
    $templateAlias3({ elementClasses: 'docs-nav' }, null, opt_ijData);
    ie_close('nav');
    ie_close('div');
    ie_close('div');
    $footer(null, null, opt_ijData);
    ie_close('div');
  }
  exports.guide = $guide;
  if (goog.DEBUG) {
    $guide.soyTemplateName = 'guide.guide';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $footer(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'footer');
    ie_open('div', null, null, 'class', 'container-fluid');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-7');
    ie_open('img', null, null, 'class', 'logo', 'src', '/images/liferayLogo.png');
    ie_close('img');
    ie_void('div', null, null, 'class', 'clearfix hidden-lg hidden-md');
    ie_open('span');
    itext('Brought to you by ');
    ie_open('a', null, null, 'class', 'white', 'href', 'http://www.liferay.com', 'target', '_blank');
    itext('Liferay, Inc.');
    ie_close('a');
    ie_close('span');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-5 text-right-lg');
    ie_open('a', null, null, 'class', 'sticker sticker-default sticker-rounded sticker-static', 'href', 'https://twitter.com/Liferay_Lexicon', 'target', '_blank');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', '/vendor/lexicon/icons.svg#twitter');
    ie_close('svg');
    ie_close('a');
    ie_open('a', null, null, 'class', 'sticker sticker-default sticker-rounded sticker-static', 'href', 'https://github.com/liferay/lexicon-site/issues', 'target', '_blank');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', '/vendor/lexicon/icons.svg#comments');
    ie_close('svg');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.footer = $footer;
  if (goog.DEBUG) {
    $footer.soyTemplateName = 'guide.footer';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "any", "site": "any" };
  exports.guide.params = ["page", "content"];
  exports.guide.types = { "page": "any", "content": "any" };
  exports.footer.params = [];
  exports.footer.types = {};
  exports.templates = templates = exports;
  return exports;
});

var guide = function (_Component) {
  _inherits(guide, _Component);

  function guide() {
    _classCallCheck(this, guide);

    return _possibleConstructorReturn(this, (guide.__proto__ || Object.getPrototypeOf(guide)).apply(this, arguments));
  }

  return guide;
}(_metalComponent2.default);

_metalSoy2.default.register(guide, templates);
exports.guide = guide;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.main = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from main.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace main.
   * @public
   */

  goog.module('main.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('ElectricNavigation.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    ie_open('div', null, null, 'class', ($$temp = opt_data.elementClasses) == null ? 'main' : $$temp);
    ie_open('main', null, null, 'class', 'content');
    var dyn3 = opt_data.content;
    if (typeof dyn3 == 'function') dyn3();else if (dyn3 != null) itext(dyn3);
    ie_close('main');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'main.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $topbar(opt_data, opt_ignored, opt_ijData) {
    ie_open('nav', null, null, 'class', 'navbar navbar-inverse navbar-fixed-top');
    $logo(opt_data, null, opt_ijData);
    ie_close('nav');
  }
  exports.topbar = $topbar;
  if (goog.DEBUG) {
    $topbar.soyTemplateName = 'main.topbar';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $logo(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'navbar-header navbar-header-left-xs');
    ie_open('a', null, null, 'class', 'navbar-brand', 'href', '/');
    var dyn4 = opt_data.site.title;
    if (typeof dyn4 == 'function') dyn4();else if (dyn4 != null) itext(dyn4);
    ie_close('a');
    ie_close('div');
  }
  exports.logo = $logo;
  if (goog.DEBUG) {
    $logo.soyTemplateName = 'main.logo';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $menu(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'navbar-header navbar-header-right');
    ie_open('button', null, null, 'aria-expanded', 'false', 'class', 'navbar-toggle collapsed', 'data-target', '#navbarCollapseSite', 'data-toggle', 'collapse', 'type', 'button');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', '/vendor/lexicon/icons.svg#bars');
    ie_close('svg');
    ie_close('button');
    ie_close('div');
    ie_open('div', null, null, 'aria-expanded', 'false', 'class', 'navbar-collapse collapse', 'id', 'navbarCollapseSite');
    $templateAlias1({ depth: 1, elementClasses: 'nav navbar-nav navbar-right', linkClasses: '', listItemClasses: '', section: opt_data.site.index }, null, opt_ijData);
    ie_close('div');
  }
  exports.menu = $menu;
  if (goog.DEBUG) {
    $menu.soyTemplateName = 'main.menu';
  }

  exports.render.params = ["content", "elementClasses"];
  exports.render.types = { "content": "any", "elementClasses": "any" };
  exports.topbar.params = ["site"];
  exports.topbar.types = { "site": "any" };
  exports.logo.params = ["site"];
  exports.logo.types = { "site": "any" };
  exports.menu.params = ["site"];
  exports.menu.types = { "site": "any" };
  exports.templates = templates = exports;
  return exports;
});

var main = function (_Component) {
  _inherits(main, _Component);

  function main() {
    _classCallCheck(this, main);

    return _possibleConstructorReturn(this, (main.__proto__ || Object.getPrototypeOf(main)).apply(this, arguments));
  }

  return main;
}(_metalComponent2.default);

_metalSoy2.default.register(main, templates);
exports.main = main;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalEvents = __webpack_require__(5);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Toggler component.
 */
var Toggler = function (_State) {
	_inherits(Toggler, _State);

	/**
  * @inheritDoc
  */
	function Toggler(opt_config) {
		_classCallCheck(this, Toggler);

		var _this = _possibleConstructorReturn(this, _State.call(this, opt_config));

		_this.headerEventHandler_ = new _metalEvents.EventHandler();

		_this.on('headerChanged', _this.syncHeader);
		_this.syncHeader();
		return _this;
	}

	/**
  * @inheritDoc
  */


	Toggler.prototype.disposeInternal = function disposeInternal() {
		_State.prototype.disposeInternal.call(this);
		this.headerEventHandler_.removeAllListeners();
	};

	/**
  * Gets the content to be toggled by the given header element.
  * @param {!Element} header
  * @protected
  */


	Toggler.prototype.getContentElement_ = function getContentElement_(header) {
		if (_metal2.default.isElement(this.content)) {
			return this.content;
		}

		var content = _metalDom2.default.next(header, this.content);
		if (content) {
			return content;
		}

		content = header.querySelector(this.content);
		if (content) {
			return content;
		}

		return this.container.querySelector(this.content);
	};

	/**
  * Handles a `click` event on the header.
  * @param {!Event} event
  * @protected
  */


	Toggler.prototype.handleClick_ = function handleClick_(event) {
		this.toggle(event.delegateTarget || event.currentTarget);
	};

	/**
  * Handles a `keydown` event on the header.
  * @param {!Event} event
  * @protected
  */


	Toggler.prototype.handleKeydown_ = function handleKeydown_(event) {
		if (event.keyCode === 13 || event.keyCode === 32) {
			this.toggle(event.delegateTarget || event.currentTarget);
			event.preventDefault();
		}
	};

	/**
  * Syncs the component according to the value of the `header` state,
  * attaching events to the new element and detaching from any previous one.
  */


	Toggler.prototype.syncHeader = function syncHeader() {
		this.headerEventHandler_.removeAllListeners();
		if (this.header) {
			if (_metal2.default.isString(this.header)) {
				this.headerEventHandler_.add(_metalDom2.default.delegate(this.container, 'click', this.header, this.handleClick_.bind(this)), _metalDom2.default.delegate(this.container, 'keydown', this.header, this.handleKeydown_.bind(this)));
			} else {
				this.headerEventHandler_.add(_metalDom2.default.on(this.header, 'click', this.handleClick_.bind(this)), _metalDom2.default.on(this.header, 'keydown', this.handleKeydown_.bind(this)));
			}
		}
	};

	/**
  * Toggles the content's visibility.
  */


	Toggler.prototype.toggle = function toggle(header) {
		var content = this.getContentElement_(header);
		_metalDom2.default.toggleClasses(content, Toggler.CSS_EXPANDED);
		_metalDom2.default.toggleClasses(content, Toggler.CSS_COLLAPSED);

		if (_metalDom2.default.hasClass(content, Toggler.CSS_EXPANDED)) {
			_metalDom2.default.addClasses(header, Toggler.CSS_HEADER_EXPANDED);
			_metalDom2.default.removeClasses(header, Toggler.CSS_HEADER_COLLAPSED);
		} else {
			_metalDom2.default.removeClasses(header, Toggler.CSS_HEADER_EXPANDED);
			_metalDom2.default.addClasses(header, Toggler.CSS_HEADER_COLLAPSED);
		}
	};

	return Toggler;
}(_metalState2.default);

/**
 * State configuration.
 */


Toggler.STATE = {
	/**
  * The element where the header/content selectors will be looked for.
  * @type {string|!Element}
  */
	container: {
		setter: _metalDom2.default.toElement,
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		},
		value: document
	},

	/**
  * The element that should be expanded/collapsed by this toggler.
  * @type {string|!Element}
  */
	content: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	},

	/**
  * The element that should be trigger toggling.
  * @type {string|!Element}
  */
	header: {
		validator: function validator(value) {
			return _metal2.default.isString(value) || _metal2.default.isElement(value);
		}
	}
};

/**
 * The CSS class added to the content when it's collapsed.
 */
Toggler.CSS_COLLAPSED = 'toggler-collapsed';

/**
 * The CSS class added to the content when it's expanded.
 */
Toggler.CSS_EXPANDED = 'toggler-expanded';

/**
 * The CSS class added to the header when the content is collapsed.
 */
Toggler.CSS_HEADER_COLLAPSED = 'toggler-header-collapsed';

/**
 * The CSS class added to the header when the content is expanded.
 */
Toggler.CSS_HEADER_EXPANDED = 'toggler-header-expanded';

exports.default = Toggler;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavigation", function() { return MainNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from MainNavigation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MainNavigation.
 * @public
 */

goog.module('MainNavigation.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  var $$temp;
  var localCurrentDepth__soy3 = ($$temp = opt_data.currentDepth) == null ? 0 : $$temp;
  if (opt_data.section.children) {
    ie_open('ul', null, null,
        'class', 'nav nav-nested nav-pills nav-stacked');
      var childIdList24 = opt_data.section.childIds;
      var childIdListLen24 = childIdList24.length;
      for (var childIdIndex24 = 0; childIdIndex24 < childIdListLen24; childIdIndex24++) {
        var childIdData24 = childIdList24[childIdIndex24];
        var page__soy7 = opt_data.section.children[childIdData24];
        if (! page__soy7.hidden) {
          ie_open('li', null, null,
              'class', (page__soy7.active ? 'active' : '') + ' ' + (page__soy7.children ? 'nav-heading' : ''));
            $anchor(soy.$$assignDefaults({page: page__soy7}, opt_data), null, opt_ijData);
            if (! opt_data.depth || localCurrentDepth__soy3 + 1 < opt_data.depth) {
              $render({currentDepth: localCurrentDepth__soy3 + 1, depth: opt_data.depth, section: page__soy7}, null, opt_ijData);
            }
          ie_close('li');
        }
      }
    ie_close('ul');
  }
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'MainNavigation.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $anchor(opt_data, opt_ignored, opt_ijData) {
  if (opt_data.page.icon) {
    ie_open('svg', null, null,
        'class', 'lexicon-icon icon-monospaced');
      ie_void('use', null, null,
          'xlink:href', '/images/icons/lexicon-site-icons.svg#' + opt_data.page.icon);
    ie_close('svg');
  }
  if (! opt_data.page.children) {
    ie_open('a', null, null,
        'href', opt_data.page.url);
    } else {
      ie_open('a', null, null,
          'data-onclick', 'handleCollapseClick_',
          'href', 'javascript:;');
      }
      ie_open('span');
        var dyn0 = opt_data.page.title;
        if (typeof dyn0 == 'function') dyn0(); else if (dyn0 != null) itext(dyn0);
      ie_close('span');
      if (opt_data.page.children) {
        ie_open('svg', null, null,
            'class', 'collapse-toggle lexicon-icon icon-monospaced');
          ie_void('use', null, null,
              'xlink:href', '/vendor/lexicon/icons.svg#caret-bottom');
        ie_close('svg');
      }
    ie_close('a');
  }
  exports.anchor = $anchor;
  if (goog.DEBUG) {
    $anchor.soyTemplateName = 'MainNavigation.anchor';
  }

exports.render.params = ["section","currentDepth","depth"];
exports.render.types = {"section":"any","currentDepth":"any","depth":"any"};
exports.anchor.params = ["page"];
exports.anchor.types = {"page":"any"};
templates = exports;
return exports;

});

class MainNavigation extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(MainNavigation, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Sidebar.
 * @public
 */

goog.module('Sidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('ElectricSearchAutocomplete.incrementaldom', 'render');

var $templateAlias2 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('MainNavigation.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('nav', null, null,
      'class', 'navbar navbar-inverse navbar-lexicon-site navbar-fixed');
    ie_open('div', null, null,
        'class', 'navbar-header navbar-header-left-xs');
      ie_open('a', null, null,
          'class', 'navbar-brand',
          'href', '/');
        ie_open('img', null, null,
            'class', 'logo',
            'src', '/images/LexiconLogo.png');
        ie_close('img');
        ie_open('small');
          itext('by Liferay');
        ie_close('small');
      ie_close('a');
    ie_close('div');
    ie_open('button', null, null,
        'aria-controls', 'bs-navbar',
        'aria-expanded', 'false',
        'class', 'collapsed sidebar-toggler navbar-toggle btn-link',
        'type', 'button');
      ie_void('span', null, null,
          'class', 'icon-bar');
      ie_void('span', null, null,
          'class', 'icon-bar');
      ie_void('span', null, null,
          'class', 'icon-bar');
      ie_open('span', null, null,
          'class', 'sr-only');
        itext('Toggle navigation');
      ie_close('span');
    ie_close('button');
  ie_close('nav');
  ie_open('nav', null, null,
      'class', 'sidenav-fixed sidenav-menu-slider sidebar-toggler-content');
    ie_open('div', null, null,
        'class', 'sidebar sidebar-inverse sidebar-lexicon-site sidenav-menu');
      ie_open('div', null, null,
          'class', 'sidebar-header');
        ie_open('div', null, null,
            'class', 'sidebar-search');
          $templateAlias1({maxResults: 5, path: '/docs/', placeholder: 'Search'}, null, opt_ijData);
        ie_close('div');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'sidebar-body');
        $templateAlias2(opt_data, null, opt_ijData);
      ie_close('div');
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Sidebar.render';
}

exports.render.params = ["section"];
exports.render.types = {"section":"any"};
templates = exports;
return exports;

});

class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(Sidebar, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricCode = __webpack_require__(22);

var _ElectricCode2 = _interopRequireDefault(_ElectricCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricCode, _ElectricCode2.default);

exports.default = _electricBaseComponents.ElectricCode;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricCode = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricCode.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricCode.
   * @public
   */

  goog.module('ElectricCode.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    var spritesheet___soy3 = ($$temp = opt_data.spritesheet) == null ? '/vendor/lexicon/icons.svg' : $$temp;
    ie_open('div', null, null, 'class', 'code-container' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('button', null, null, 'class', 'btn btn-sm btn-copy');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', spritesheet___soy3 + '#paste');
    ie_close('svg');
    ie_close('button');
    ie_open('pre');
    ie_open('code', null, null, 'class', 'code', 'data-mode', opt_data.mode, 'ref', 'code');
    var dyn0 = opt_data.code;
    if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
    ie_close('code');
    ie_close('pre');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricCode.render';
  }

  exports.render.params = ["code", "elementClasses", "mode", "spritesheet"];
  exports.render.types = { "code": "any", "elementClasses": "any", "mode": "any", "spritesheet": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricCode = function (_Component) {
  _inherits(ElectricCode, _Component);

  function ElectricCode() {
    _classCallCheck(this, ElectricCode);

    return _possibleConstructorReturn(this, (ElectricCode.__proto__ || Object.getPrototypeOf(ElectricCode)).apply(this, arguments));
  }

  return ElectricCode;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricCode, templates);
exports.ElectricCode = ElectricCode;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricNavigation = __webpack_require__(24);

var _ElectricNavigation2 = _interopRequireDefault(_ElectricNavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricNavigation, _ElectricNavigation2.default);

exports.default = _electricBaseComponents.ElectricNavigation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricNavigation = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricNavigation.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricNavigation.
   * @hassoydeltemplate {ElectricNavigation.anchor.idom}
   * @hassoydelcall {ElectricNavigation.anchor.idom}
   * @public
   */

  goog.module('ElectricNavigation.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    var localAnchorVariant__soy15 = ($$temp = opt_data.anchorVariant) == null ? 'basic' : $$temp;
    var localCurrentDepth__soy16 = ($$temp = opt_data.currentDepth) == null ? 0 : $$temp;
    var localListItemActiveClasses__soy17 = ($$temp = opt_data.listItemActiveClasses) == null ? 'active' : $$temp;
    if (opt_data.section.children) {
      ie_open('ul', null, null, 'class', ($$temp = opt_data.elementClasses) == null ? '' : $$temp);
      var childIdList45 = opt_data.section.childIds;
      var childIdListLen45 = childIdList45.length;
      for (var childIdIndex45 = 0; childIdIndex45 < childIdListLen45; childIdIndex45++) {
        var childIdData45 = childIdList45[childIdIndex45];
        var page__soy23 = opt_data.section.children[childIdData45];
        if (!page__soy23.hidden) {
          ie_open('li', null, null, 'class', (($$temp = opt_data.listItemClasses) == null ? '' : $$temp) + (page__soy23.active ? ' ' + localListItemActiveClasses__soy17 : ''));
          soy.$$getDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), localAnchorVariant__soy15, false)(soy.$$assignDefaults({ page: page__soy23 }, opt_data), null, opt_ijData);
          if (!opt_data.depth || localCurrentDepth__soy16 + 1 < opt_data.depth) {
            $render({ anchorVariant: localAnchorVariant__soy15, currentDepth: localCurrentDepth__soy16 + 1, currentURL: opt_data.currentURL, depth: opt_data.depth, elementClasses: opt_data.elementClasses, linkClasses: opt_data.linkClasses, listItemActiveClasses: opt_data.listItemActiveClasses, listItemClasses: opt_data.listItemClasses, section: page__soy23 }, null, opt_ijData);
          }
          ie_close('li');
        }
      }
      ie_close('ul');
    }
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricNavigation.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function __deltemplate_s48_b83841ac(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    if (opt_data.page.url || opt_data.page.redirect) {
      ie_open('a', null, null, 'class', ($$temp = opt_data.linkClasses) == null ? '' : $$temp, 'href', ($$temp = opt_data.page.redirect) == null ? opt_data.page.url : $$temp);
      ie_open('span');
      var dyn1 = ($$temp = opt_data.page.title) == null ? 'Missing' : $$temp;
      if (typeof dyn1 == 'function') dyn1();else if (dyn1 != null) itext(dyn1);
      ie_close('span');
      ie_close('a');
    } else {
      ie_open('span', null, null, 'class', ($$temp = opt_data.linkClasses) == null ? '' : $$temp);
      var dyn2 = ($$temp = opt_data.page.title) == null ? 'Missing' : $$temp;
      if (typeof dyn2 == 'function') dyn2();else if (dyn2 != null) itext(dyn2);
      ie_close('span');
    }
  }
  exports.__deltemplate_s48_b83841ac = __deltemplate_s48_b83841ac;
  if (goog.DEBUG) {
    __deltemplate_s48_b83841ac.soyTemplateName = 'ElectricNavigation.__deltemplate_s48_b83841ac';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricNavigation.anchor.idom'), 'basic', 0, __deltemplate_s48_b83841ac);

  exports.render.params = ["section", "anchorVariant", "currentDepth", "currentURL", "depth", "elementClasses", "linkClasses", "listItemActiveClasses", "listItemClasses"];
  exports.render.types = { "section": "any", "anchorVariant": "any", "currentDepth": "any", "currentURL": "any", "depth": "any", "elementClasses": "any", "linkClasses": "any", "listItemActiveClasses": "any", "listItemClasses": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricNavigation = function (_Component) {
  _inherits(ElectricNavigation, _Component);

  function ElectricNavigation() {
    _classCallCheck(this, ElectricNavigation);

    return _possibleConstructorReturn(this, (ElectricNavigation.__proto__ || Object.getPrototypeOf(ElectricNavigation)).apply(this, arguments));
  }

  return ElectricNavigation;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricNavigation, templates);
exports.ElectricNavigation = ElectricNavigation;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricReadingProgress = __webpack_require__(26);

var _ElectricReadingProgress2 = _interopRequireDefault(_ElectricReadingProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricReadingProgress, _ElectricReadingProgress2.default);

exports.default = _electricBaseComponents.ElectricReadingProgress;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricReadingProgress = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricReadingProgress.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricReadingProgress.
   * @public
   */

  goog.module('ElectricReadingProgress.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    ie_open('div', null, null, 'class', 'affix-top' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_void('div', null, null, 'ref', 'readingContainer');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricReadingProgress.render';
  }

  exports.render.params = ["elementClasses"];
  exports.render.types = { "elementClasses": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricReadingProgress = function (_Component) {
  _inherits(ElectricReadingProgress, _Component);

  function ElectricReadingProgress() {
    _classCallCheck(this, ElectricReadingProgress);

    return _possibleConstructorReturn(this, (ElectricReadingProgress.__proto__ || Object.getPrototypeOf(ElectricReadingProgress)).apply(this, arguments));
  }

  return ElectricReadingProgress;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricReadingProgress, templates);
exports.ElectricReadingProgress = ElectricReadingProgress;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricSearch = __webpack_require__(28);

var _ElectricSearch2 = _interopRequireDefault(_ElectricSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricSearch, _ElectricSearch2.default);

exports.default = _electricBaseComponents.ElectricSearch;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricSearch = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricSearch.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricSearch.
   * @public
   */

  goog.module('ElectricSearch.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    opt_data = opt_data || {};
    var spritesheet___soy71 = ($$temp = opt_data.spritesheet) == null ? '/vendor/lexicon/icons.svg' : $$temp;
    ie_open('div', null, null, 'class', 'search');
    $form(soy.$$assignDefaults({ spritesheet: spritesheet___soy71 }, opt_data), null, opt_ijData);
    $results(soy.$$assignDefaults({ spritesheet: spritesheet___soy71 }, opt_data), null, opt_ijData);
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricSearch.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $form(opt_data, opt_ignored, opt_ijData) {
    ie_open('form', null, null, 'action', opt_data.action, 'method', 'GET', 'enctype', 'multipart/form-data');
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-md-6 col-md-offset-2');
    ie_open('div', null, null, 'class', 'page-autocomplete');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'input-group');
    ie_open('input', null, null, 'autocomplete', 'off', 'class', 'form-control', 'name', 'q', 'onInput', 'handleInput_', 'placeholder', opt_data.placeholder, 'value', opt_data.query, 'type', 'text');
    ie_close('input');
    ie_open('span', null, null, 'class', 'input-group-addon');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', opt_data.spritesheet + '#search');
    ie_close('svg');
    ie_close('span');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'col-md-2 col-xs-12');
    ie_open('button', null, null, 'class', 'btn btn-block btn-primary', 'type', 'submit');
    itext('Search');
    ie_close('button');
    ie_close('div');
    ie_close('div');
    ie_close('form');
  }
  exports.form = $form;
  if (goog.DEBUG) {
    $form.soyTemplateName = 'ElectricSearch.form';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $results(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'search-result-container');
    if (opt_data.query) {
      ie_open('p', null, null, 'class', 'search-result-summary');
      itext('Showing ');
      var dyn3 = opt_data.results.length;
      if (typeof dyn3 == 'function') dyn3();else if (dyn3 != null) itext(dyn3);
      itext(' results for ');
      ie_open('strong');
      itext('"');
      var dyn4 = opt_data.query;
      if (typeof dyn4 == 'function') dyn4();else if (dyn4 != null) itext(dyn4);
      itext('"');
      ie_close('strong');
      ie_close('p');
    }
    if (opt_data.results) {
      var resultList114 = opt_data.results;
      var resultListLen114 = resultList114.length;
      for (var resultIndex114 = 0; resultIndex114 < resultListLen114; resultIndex114++) {
        var resultData114 = resultList114[resultIndex114];
        ie_open('div', null, null, 'class', 'search-result');
        if (resultData114.icon) {
          ie_open('div', null, null, 'class', 'search-result-icon');
          ie_open('svg', null, null, 'class', 'lexicon-icon');
          ie_void('use', null, null, 'xlink:href', opt_data.spritesheet + '#' + resultData114.icon);
          ie_close('svg');
          ie_close('div');
        }
        ie_open('a', null, null, 'class', 'search-result-link', 'href', resultData114.url);
        var dyn5 = resultData114.title;
        if (typeof dyn5 == 'function') dyn5();else if (dyn5 != null) itext(dyn5);
        ie_close('a');
        ie_open('p', null, null, 'class', 'search-result-text');
        var dyn6 = resultData114.description;
        if (typeof dyn6 == 'function') dyn6();else if (dyn6 != null) itext(dyn6);
        ie_close('p');
        ie_close('div');
      }
    }
    ie_close('div');
  }
  exports.results = $results;
  if (goog.DEBUG) {
    $results.soyTemplateName = 'ElectricSearch.results';
  }

  exports.render.params = ["action", "placeholder", "query", "results", "spritesheet"];
  exports.render.types = { "action": "any", "placeholder": "any", "query": "any", "results": "any", "spritesheet": "any" };
  exports.form.params = ["action", "placeholder", "query", "spritesheet"];
  exports.form.types = { "action": "any", "placeholder": "any", "query": "any", "spritesheet": "any" };
  exports.results.params = ["results", "query", "spritesheet"];
  exports.results.types = { "results": "any", "query": "any", "spritesheet": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricSearch = function (_Component) {
  _inherits(ElectricSearch, _Component);

  function ElectricSearch() {
    _classCallCheck(this, ElectricSearch);

    return _possibleConstructorReturn(this, (ElectricSearch.__proto__ || Object.getPrototypeOf(ElectricSearch)).apply(this, arguments));
  }

  return ElectricSearch;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricSearch, templates);
exports.ElectricSearch = ElectricSearch;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricSearchAutocomplete = __webpack_require__(30);

var _ElectricSearchAutocomplete2 = _interopRequireDefault(_ElectricSearchAutocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricSearchAutocomplete, _ElectricSearchAutocomplete2.default);

exports.default = _electricBaseComponents.ElectricSearchAutocomplete;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricSearchAutocomplete = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricSearchAutocomplete.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricSearchAutocomplete.
   * @public
   */

  goog.module('ElectricSearchAutocomplete.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    opt_data = opt_data || {};
    var spritesheet___soy119 = ($$temp = opt_data.spritesheet) == null ? '/vendor/lexicon/icons.svg' : $$temp;
    ie_open('div', null, null, 'class', 'page-autocomplete');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'input-group');
    ie_open('input', null, null, 'autocomplete', 'off', 'class', 'form-control', 'name', 'q', 'placeholder', ($$temp = opt_data.placeholder) == null ? '' : $$temp, 'ref', 'input', 'required', '', 'type', 'text');
    ie_close('input');
    ie_open('span', null, null, 'class', 'input-group-addon');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', spritesheet___soy119 + '#search');
    ie_close('svg');
    ie_close('span');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricSearchAutocomplete.render';
  }

  exports.render.params = ["placeholder", "spritesheet"];
  exports.render.types = { "placeholder": "any", "spritesheet": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricSearchAutocomplete = function (_Component) {
  _inherits(ElectricSearchAutocomplete, _Component);

  function ElectricSearchAutocomplete() {
    _classCallCheck(this, ElectricSearchAutocomplete);

    return _possibleConstructorReturn(this, (ElectricSearchAutocomplete.__proto__ || Object.getPrototypeOf(ElectricSearchAutocomplete)).apply(this, arguments));
  }

  return ElectricSearchAutocomplete;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricSearchAutocomplete, templates);
exports.ElectricSearchAutocomplete = ElectricSearchAutocomplete;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _electricBaseComponents = __webpack_require__(4);

var _ElectricUpdates = __webpack_require__(32);

var _ElectricUpdates2 = _interopRequireDefault(_ElectricUpdates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_metalSoy2.default.register(_electricBaseComponents.ElectricUpdates, _ElectricUpdates2.default);

exports.default = _electricBaseComponents.ElectricUpdates;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ElectricUpdates = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ElectricUpdates.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ElectricUpdates.
   * @hassoydeltemplate {ElectricUpdates.feature.idom}
   * @hassoydelcall {ElectricUpdates.feature.idom}
   * @public
   */

  goog.module('ElectricUpdates.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'updates');
    ie_open('div', null, null, 'class', 'container');
    $updates(opt_data, null, opt_ijData);
    ie_close('div');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ElectricUpdates.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $updates(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'row');
    ie_open('div', null, null, 'class', 'col-lg-8 col-lg-offset-2 col-md-12 col-md-offset-0');
    if (opt_data.updates) {
      var updateList142 = opt_data.updates;
      var updateListLen142 = updateList142.length;
      for (var updateIndex142 = 0; updateIndex142 < updateListLen142; updateIndex142++) {
        var updateData142 = updateList142[updateIndex142];
        ie_open('section', null, null, 'class', 'update');
        ie_open('div', null, null, 'class', 'row update-row');
        ie_open('div', null, null, 'class', 'col-sm-2 ' + (updateData142.major ? 'major' : 'minor') + '-update update-timeline');
        ie_open('div', null, null, 'class', 'update-point');
        var dyn7 = updateData142.version;
        if (typeof dyn7 == 'function') dyn7();else if (dyn7 != null) itext(dyn7);
        ie_close('div');
        ie_close('div');
        ie_open('div', null, null, 'class', 'col-sm-10 update-features');
        $features(soy.$$assignDefaults({ features: updateData142.features }, opt_data), null, opt_ijData);
        ie_close('div');
        ie_close('div');
        ie_close('section');
      }
    }
    ie_close('div');
    ie_close('div');
  }
  exports.updates = $updates;
  if (goog.DEBUG) {
    $updates.soyTemplateName = 'ElectricUpdates.updates';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $features(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    var localFeatureVariant__soy146 = ($$temp = opt_data.featureVariant) == null ? 'basic' : $$temp;
    ie_open('div', null, null, 'class', 'row');
    var featureList150 = opt_data.features;
    var featureListLen150 = featureList150.length;
    for (var featureIndex150 = 0; featureIndex150 < featureListLen150; featureIndex150++) {
      var featureData150 = featureList150[featureIndex150];
      soy.$$getDelegateFn(soy.$$getDelTemplateId('ElectricUpdates.feature.idom'), localFeatureVariant__soy146, false)(soy.$$assignDefaults({ feature: featureData150 }, opt_data), null, opt_ijData);
    }
    ie_close('div');
  }
  exports.features = $features;
  if (goog.DEBUG) {
    $features.soyTemplateName = 'ElectricUpdates.features';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function __deltemplate_s153_5080d024(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    var spritesheet___soy154 = ($$temp = opt_data.spritesheet) == null ? '/vendor/lexicon/icons.svg' : $$temp;
    ie_open('div', null, null, 'class', 'col-xs-12 col-sm-6 update-feature');
    ie_open('div', null, null, 'class', 'feature-topper');
    ie_open('svg', null, null, 'class', 'lexicon-icon');
    ie_void('use', null, null, 'xlink:href', spritesheet___soy154 + '#' + opt_data.feature.icon);
    ie_close('svg');
    ie_open('h1', null, null, 'class', 'feature-header');
    var dyn8 = opt_data.feature.title;
    if (typeof dyn8 == 'function') dyn8();else if (dyn8 != null) itext(dyn8);
    ie_close('h1');
    ie_close('div');
    ie_open('div', null, null, 'class', 'feature-content');
    ie_open('p', null, null, 'class', 'feature-lead');
    var dyn9 = opt_data.feature.description;
    if (typeof dyn9 == 'function') dyn9();else if (dyn9 != null) itext(dyn9);
    ie_close('p');
    ie_open('div', null, null, 'class', 'read-more');
    ie_open('a', null, null, 'href', opt_data.feature.url);
    itext('Read more\u2026');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('div');
  }
  exports.__deltemplate_s153_5080d024 = __deltemplate_s153_5080d024;
  if (goog.DEBUG) {
    __deltemplate_s153_5080d024.soyTemplateName = 'ElectricUpdates.__deltemplate_s153_5080d024';
  }
  soy.$$registerDelegateFn(soy.$$getDelTemplateId('ElectricUpdates.feature.idom'), 'basic', 0, __deltemplate_s153_5080d024);

  exports.render.params = ["featureVariant", "updates"];
  exports.render.types = { "featureVariant": "any", "updates": "any" };
  exports.updates.params = ["featureVariant", "updates"];
  exports.updates.types = { "featureVariant": "any", "updates": "any" };
  exports.features.params = ["featureVariant", "features"];
  exports.features.types = { "featureVariant": "any", "features": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ElectricUpdates = function (_Component) {
  _inherits(ElectricUpdates, _Component);

  function ElectricUpdates() {
    _classCallCheck(this, ElectricUpdates);

    return _possibleConstructorReturn(this, (ElectricUpdates.__proto__ || Object.getPrototypeOf(ElectricUpdates)).apply(this, arguments));
  }

  return ElectricUpdates;
}(_metalComponent2.default);

_metalSoy2.default.register(ElectricUpdates, templates);
exports.ElectricUpdates = ElectricUpdates;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalClipboard = __webpack_require__(45);

var _metalClipboard2 = _interopRequireDefault(_metalClipboard);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalTooltip = __webpack_require__(62);

var _metalTooltip2 = _interopRequireDefault(_metalTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricCode = function (_Component) {
	_inherits(ElectricCode, _Component);

	function ElectricCode() {
		_classCallCheck(this, ElectricCode);

		return _possibleConstructorReturn(this, (ElectricCode.__proto__ || Object.getPrototypeOf(ElectricCode)).apply(this, arguments));
	}

	_createClass(ElectricCode, [{
		key: 'attached',
		value: function attached() {
			var selector = '.code-container .btn-copy';

			if (!window.electricClipboardTooltip) {
				window.electricClipboardTooltip = new _metalTooltip2.default({
					delay: [300, 150],
					elementClasses: 'fade',
					events: {
						visibleChanged: function visibleChanged(event) {
							if (event.newVal) {
								this.title = 'Copy';
							}
						}
					},
					selector: selector,
					title: 'Copy',
					visible: false
				});
			}

			if (!window.electricClipboard) {
				window.electricClipboard = new _metalClipboard2.default({
					selector: selector,
					text: function text(delegateTarget) {
						window.electricClipboardTooltip.title = 'Copied';
						return delegateTarget.parentNode.querySelector('pre .code').innerText;
					}
				});
			}
		}
	}]);

	return ElectricCode;
}(_metalComponent2.default);

;

exports.default = ElectricCode;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalTabs = __webpack_require__(60);

var _metalTabs2 = _interopRequireDefault(_metalTabs);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class the identity sibling rendered "Code Mirror" components on the
 * page and make them tab navigable.
 */
var ElectricCodeTabs = function (_State) {
  _inherits(ElectricCodeTabs, _State);

  function ElectricCodeTabs(opt) {
    _classCallCheck(this, ElectricCodeTabs);

    var _this = _possibleConstructorReturn(this, (ElectricCodeTabs.__proto__ || Object.getPrototypeOf(ElectricCodeTabs)).call(this, opt));

    var tabGroupsData = [];
    document.querySelectorAll('.' + _this.className).forEach(function (element) {
      tabGroupsData.push({
        label: _this.getTabLabelFromElement_(element),
        element: element
      });
      if (!element.nextElementSibling || !_metalDom2.default.hasClass(element.nextElementSibling, _this.className)) {
        if (tabGroupsData.length > 1) {
          _this.renderTabs_(tabGroupsData);
        }
        tabGroupsData = [];
      }
    });
    return _this;
  }

  /**
   * Extracts the tab label from a given code mirror element.
   * @param  {element} element
   * @return {string} The title from the element or the matched map value.
   * @private
   */


  _createClass(ElectricCodeTabs, [{
    key: 'getTabLabelFromElement_',
    value: function getTabLabelFromElement_(element) {
      var tabLabel = element.querySelector('.code').dataset.mode;
      return this.dictionary[tabLabel] || tabLabel;
    }

    /**
     * Hides a given element by adding the hide CSS class.
     * @param  {element} element
     * @private
     */

  }, {
    key: 'hide_',
    value: function hide_(element) {
      _metalDom2.default.addClasses(element, 'hide');
    }

    /**
     * Hides all code mirror elements related to a tab navigation.
     * @param  {Array<element>} tabs
     * @private
     */

  }, {
    key: 'hideAll_',
    value: function hideAll_(tabs) {
      var _this2 = this;

      tabs.forEach(function (tab) {
        _this2.hide_(tab.element);
      });
    }

    /**
     * Renders a tab navigations for a given tab content group.
     * @param  {Array<Object>} data
     * @private
     */

  }, {
    key: 'renderTabs_',
    value: function renderTabs_(data) {
      var _this3 = this;

      var container = _metalDom2.default.buildFragment('<div class="tabContainer"></div>');
      var tabsComponent = new _metalTabs2.default({
        elementClasses: 'nav-code-tabs',
        tabs: data
      }, container);

      tabsComponent.on('changeRequest', function (event) {
        var currentTab = event.state.tab;
        _this3.hideAll_(tabsComponent.tabs);
        _this3.show_(tabsComponent.tabs[currentTab].element);
      });

      this.hideAll_(tabsComponent.tabs);
      this.show_(tabsComponent.tabs[0].element);

      data[0].element.parentNode.insertBefore(container, data[0].element);
    }

    /**
     * Shows a given code mirror element by removing the hide CSS class.
     * @param  {Array<Object>} data
     */

  }, {
    key: 'show_',
    value: function show_(element) {
      _metalDom2.default.removeClasses(element, 'hide');
    }
  }]);

  return ElectricCodeTabs;
}(_metalState2.default);

/**
 * State definition.
 * @type {!Object}
 * @static
 */


ElectricCodeTabs.STATE = {
  /**
  * The code mirror container CSS class name used for looking for elements and
   * group them to build tabs.
  * @type {string}
  * @default {string}
  */
  className: {
    value: 'code-container'
  },

  /**
  * A dictionary of languages label
  * @type {Object}
  * @default {}
  */
  dictionary: {
    value: {
      'text/html': 'HTML',
      'text/x-java': 'Java',
      'application/json': 'JSON'
    }
  }
};

window.ElectricCodeTabs = ElectricCodeTabs;

exports.default = ElectricCodeTabs;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricNavigation = function (_Component) {
	_inherits(ElectricNavigation, _Component);

	function ElectricNavigation() {
		_classCallCheck(this, ElectricNavigation);

		return _possibleConstructorReturn(this, (ElectricNavigation.__proto__ || Object.getPrototypeOf(ElectricNavigation)).apply(this, arguments));
	}

	_createClass(ElectricNavigation, [{
		key: 'attached',
		value: function attached() {}
	}]);

	return ElectricNavigation;
}(_metalComponent2.default);

;

exports.default = ElectricNavigation;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalAffix = __webpack_require__(40);

var _metalAffix2 = _interopRequireDefault(_metalAffix);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalReadingProgress = __webpack_require__(53);

var _metalReadingProgress2 = _interopRequireDefault(_metalReadingProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricReadingProgress = function (_Component) {
	_inherits(ElectricReadingProgress, _Component);

	function ElectricReadingProgress() {
		_classCallCheck(this, ElectricReadingProgress);

		return _possibleConstructorReturn(this, (ElectricReadingProgress.__proto__ || Object.getPrototypeOf(ElectricReadingProgress)).apply(this, arguments));
	}

	_createClass(ElectricReadingProgress, [{
		key: 'attached',
		value: function attached() {
			this.renderReadingProgress_();
		}
	}, {
		key: 'renderReadingProgress_',
		value: function renderReadingProgress_() {
			var articleContainer = this.articleContainer,
			    articleSelector = this.articleSelector,
			    element = this.element,
			    offsetBottom = this.offsetBottom,
			    offsetTop = this.offsetTop,
			    titleSelector = this.titleSelector;


			if (articleContainer) {
				var articles = articleContainer.querySelectorAll(articleSelector);

				var articleIds = [].map.call(articles, function (article) {
					return '#' + article.id;
				});

				this.progress = new _metalReadingProgress2.default({
					items: articleIds,
					titleSelector: titleSelector,
					trackerConfig: {
						activeClass: 'reading',
						completedClass: 'read'
					}
				}, this.refs.readingContainer);

				this.affix = new _metalAffix2.default({
					element: element,
					offsetBottom: offsetBottom,
					offsetTop: offsetTop
				});
			}
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			var affix = this.affix,
			    progress = this.progress;


			if (affix) {
				affix.dispose();
			}

			if (progress) {
				progress.dispose();
			}
		}
	}]);

	return ElectricReadingProgress;
}(_metalComponent2.default);

;

ElectricReadingProgress.STATE = {
	articleContainer: {
		setter: _metalDom2.default.toElement,
		value: '.docs-guide'
	},

	articleSelector: {
		validator: _metal2.default.isString,
		value: 'article'
	},

	offsetBottom: {
		validator: _metal2.default.isNumber
	},

	offsetTop: {
		validator: _metal2.default.isNumber,
		value: 230
	},

	titleSelector: {
		validator: _metal2.default.isString,
		value: 'h2'
	}
};

exports.default = ElectricReadingProgress;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _ElectricSearchBase2 = __webpack_require__(9);

var _ElectricSearchBase3 = _interopRequireDefault(_ElectricSearchBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricSearch = function (_ElectricSearchBase) {
	_inherits(ElectricSearch, _ElectricSearchBase);

	function ElectricSearch() {
		_classCallCheck(this, ElectricSearch);

		return _possibleConstructorReturn(this, (ElectricSearch.__proto__ || Object.getPrototypeOf(ElectricSearch)).apply(this, arguments));
	}

	_createClass(ElectricSearch, [{
		key: 'attached',
		value: function attached() {
			_ElectricSearchBase3.default.prototype.attached.apply(this);

			var queryString = window.location.search;
			var queryIndex = queryString.indexOf('q=');

			if (queryIndex !== -1) {
				this.query = queryString.substr(queryIndex + 2);
			}
		}
	}, {
		key: 'handleInput_',
		value: function handleInput_(event) {
			var target = event.target;


			this.query = target.value;
		}
	}]);

	return ElectricSearch;
}(_ElectricSearchBase3.default);

;

ElectricSearch.STATE = {
	maxResults: {
		value: Infinity
	}
};

exports.default = ElectricSearch;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalAutocomplete = __webpack_require__(44);

var _metalAutocomplete2 = _interopRequireDefault(_metalAutocomplete);

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _ElectricSearchBase2 = __webpack_require__(9);

var _ElectricSearchBase3 = _interopRequireDefault(_ElectricSearchBase2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricSearchAutocomplete = function (_ElectricSearchBase) {
	_inherits(ElectricSearchAutocomplete, _ElectricSearchBase);

	function ElectricSearchAutocomplete() {
		_classCallCheck(this, ElectricSearchAutocomplete);

		return _possibleConstructorReturn(this, (ElectricSearchAutocomplete.__proto__ || Object.getPrototypeOf(ElectricSearchAutocomplete)).apply(this, arguments));
	}

	_createClass(ElectricSearchAutocomplete, [{
		key: 'attached',
		value: function attached() {
			var element = this.element;
			var input = this.refs.input;


			if (input) {
				this.autocomplete = new _metalAutocomplete2.default({
					autoBestAlign: false,
					data: this.search_.bind(this),
					format: this.format_.bind(this),
					inputElement: input,
					select: function select(_ref) {
						var url = _ref.url;

						window.location = url;
					}
				});
			}
		}
	}, {
		key: 'format_',
		value: function format_(data) {
			var title = data.title,
			    description = data.description,
			    url = data.url;


			if (description && description.length > 100) {
				description = description.substr(0, 100) + '...';
			}

			return {
				textPrimary: '<a class="autocomplete-link" href="' + url + '">\n\t\t\t\t<div class="autocomplete-result">\n\t\t\t\t\t<p class="autocomplete-title">' + title + '</p>\n\t\t\t\t\t<p class="autocomplete-text">' + description + '</p>\n\t\t\t\t</div>\n\t\t\t</a>',
				url: url
			};
		}
	}, {
		key: 'disposed',
		value: function disposed() {
			var autocomplete = this.autocomplete;


			if (autocomplete) {
				autocomplete.dispose();
			}
		}
	}]);

	return ElectricSearchAutocomplete;
}(_ElectricSearchBase3.default);

;

exports.default = ElectricSearchAutocomplete;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElectricUpdates = function (_Component) {
	_inherits(ElectricUpdates, _Component);

	function ElectricUpdates() {
		_classCallCheck(this, ElectricUpdates);

		return _possibleConstructorReturn(this, (ElectricUpdates.__proto__ || Object.getPrototypeOf(ElectricUpdates)).apply(this, arguments));
	}

	_createClass(ElectricUpdates, [{
		key: 'attached',
		value: function attached() {}
	}]);

	return ElectricUpdates;
}(_metalComponent2.default);

;

ElectricUpdates.STATE = {
	updates: {
		validator: _metal2.default.isArray,
		value: []
	}
};

exports.default = ElectricUpdates;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

var _metalEvents = __webpack_require__(5);

var _metalEvents2 = _interopRequireDefault(_metalEvents);

var _metalPosition = __webpack_require__(7);

var _metalPosition2 = _interopRequireDefault(_metalPosition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Affix utility.
 */
var Affix = function (_State) {
	_inherits(Affix, _State);

	/**
  * @inheritDoc
  */
	function Affix(opt_config) {
		_classCallCheck(this, Affix);

		var _this = _possibleConstructorReturn(this, _State.call(this, opt_config));

		if (!Affix.emitter_) {
			Affix.emitter_ = new _metalEvents2.default();
			Affix.proxy_ = new _metalDom.DomEventEmitterProxy(document, Affix.emitter_, null, {
				scroll: true
			});
		}

		/**
   * Holds the last position.
   * @type {Position.Bottom|Position.Default|Position.Top}
   * @private
   */
		_this.lastPosition_ = null;

		/**
   * Holds event handle that listens scroll shared event emitter proxy.
   * @type {EventHandle}
   * @protected
   */
		_this.scrollHandle_ = Affix.emitter_.on('scroll', _this.checkPosition.bind(_this));

		_this.on('elementChanged', _this.checkPosition);
		_this.on('offsetTopChanged', _this.checkPosition);
		_this.on('offsetBottomChanged', _this.checkPosition);
		_this.checkPosition();
		return _this;
	}

	/**
  * @inheritDoc
  */


	Affix.prototype.disposeInternal = function disposeInternal() {
		_metalDom.dom.removeClasses(this.element, Affix.Position.Bottom + ' ' + Affix.Position.Default + ' ' + Affix.Position.Top);
		this.scrollHandle_.dispose();
		_State.prototype.disposeInternal.call(this);
	};

	/**
  * Synchronize bottom, top and element regions and checks if position has
  * changed. If position has changed syncs position.
  */


	Affix.prototype.checkPosition = function checkPosition() {
		if (this.intersectTopRegion()) {
			this.syncPosition(Affix.Position.Top);
		} else if (this.intersectBottomRegion()) {
			this.syncPosition(Affix.Position.Bottom);
		} else {
			this.syncPosition(Affix.Position.Default);
		}
	};

	/**
  * Whether the element is intersecting with bottom region defined by
  * offsetBottom.
  * @return {boolean}
  */


	Affix.prototype.intersectBottomRegion = function intersectBottomRegion() {
		if (!_metal2.default.isDef(this.offsetBottom)) {
			return false;
		}
		var clientHeight = _metalPosition2.default.getHeight(this.scrollElement);
		var scrollElementClientHeight = _metalPosition2.default.getClientHeight(this.scrollElement);
		return _metalPosition2.default.getScrollTop(this.scrollElement) + scrollElementClientHeight >= clientHeight - this.offsetBottom;
	};

	/**
  * Whether the element is intersecting with top region defined by
  * offsetTop.
  * @return {boolean}
  */


	Affix.prototype.intersectTopRegion = function intersectTopRegion() {
		if (!_metal2.default.isDef(this.offsetTop)) {
			return false;
		}
		return _metalPosition2.default.getScrollTop(this.scrollElement) <= this.offsetTop;
	};

	/**
  * Synchronizes element css classes to match with the specified position.
  * @param {Position.Bottom|Position.Default|Position.Top} position
  */


	Affix.prototype.syncPosition = function syncPosition(position) {
		if (this.lastPosition_ !== position) {
			_metalDom.dom.addClasses(this.element, position);
			_metalDom.dom.removeClasses(this.element, this.lastPosition_);
			this.lastPosition_ = position;
		}
	};

	return Affix;
}(_metalState2.default);

/**
 * Holds positions enum.
 * @enum {string}
 */


Affix.Position = {
	Top: 'affix-top',
	Bottom: 'affix-bottom',
	Default: 'affix'
};

Affix.STATE = {
	/**
  * The scrollElement element to be used as scrollElement area for affix. The scrollElement is
  * where the scroll event is listened from.
  * @type {Element|Window}
  */
	scrollElement: {
		setter: _metalDom.dom.toElement,
		value: document
	},

	/**
  * Defines the offset bottom that triggers affix.
  * @type {number}
  */
	offsetTop: {
		validator: _metal2.default.isNumber
	},

	/**
  * Defines the offset top that triggers affix.
  * @type {number}
  */
	offsetBottom: {
		validator: _metal2.default.isNumber
	},

	/**
  * Element to be used as alignment reference of affix.
  * @type {Element}
  */
	element: {
		setter: _metalDom.dom.toElement
	}
};

exports.default = Affix;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metalUri = __webpack_require__(68);

var _metalUri2 = _interopRequireDefault(_metalUri);

var _metalPromise = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ajax = function () {
	function Ajax() {
		_classCallCheck(this, Ajax);
	}

	_createClass(Ajax, null, [{
		key: 'parseResponseHeaders',


		/**
   * XmlHttpRequest's getAllResponseHeaders() method returns a string of
   * response headers according to the format described on the spec:
   * {@link http://www.w3.org/TR/XMLHttpRequest/#the-getallresponseheaders-method}.
   * This method parses that string into a user-friendly name/value pair
   * object.
   * @param {string} allHeaders All headers as string.
   * @return {!Array.<Object<string, string>>}
   */
		value: function parseResponseHeaders(allHeaders) {
			var headers = [];
			if (!allHeaders) {
				return headers;
			}
			var pairs = allHeaders.split('\r\n');
			for (var i = 0; i < pairs.length; i++) {
				var index = pairs[i].indexOf(': ');
				if (index > 0) {
					var name = pairs[i].substring(0, index);
					var value = pairs[i].substring(index + 2);
					headers.push({
						name: name,
						value: value
					});
				}
			}
			return headers;
		}

		/**
   * Requests the url using XMLHttpRequest.
   * @param {!string} url
   * @param {!string} method
   * @param {?string} body
   * @param {MultiMap=} opt_headers
   * @param {MultiMap=} opt_params
   * @param {number=} opt_timeout
   * @param {boolean=} opt_sync
   * @param {boolean=} opt_withCredentials
   * @return {Promise} Deferred ajax request.
   * @protected
   */

	}, {
		key: 'request',
		value: function request(url, method, body, opt_headers, opt_params, opt_timeout, opt_sync, opt_withCredentials) {
			url = url || '';
			method = method || 'GET';

			var request = new XMLHttpRequest();

			var promise = new _metalPromise.CancellablePromise(function (resolve, reject) {
				request.onload = function () {
					if (request.aborted) {
						request.onerror();
						return;
					}
					resolve(request);
				};
				request.onerror = function () {
					var error = new Error('Request error');
					error.request = request;
					reject(error);
				};
			}).thenCatch(function (reason) {
				request.abort();
				throw reason;
			}).thenAlways(function () {
				clearTimeout(timeout);
			});

			if (opt_params) {
				url = new _metalUri2.default(url).addParametersFromMultiMap(opt_params).toString();
			}

			request.open(method, url, !opt_sync);

			if (opt_withCredentials) {
				request.withCredentials = true;
			}

			if (opt_headers) {
				opt_headers.names().forEach(function (name) {
					request.setRequestHeader(name, opt_headers.getAll(name).join(', '));
				});
			}

			request.send((0, _metal.isDef)(body) ? body : null);

			if ((0, _metal.isDefAndNotNull)(opt_timeout)) {
				var timeout = setTimeout(function () {
					promise.cancel('Request timeout');
				}, opt_timeout);
			}

			return promise;
		}
	}]);

	return Ajax;
}();

exports.default = Ajax;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDebounce = __webpack_require__(46);

var _metalDebounce2 = _interopRequireDefault(_metalDebounce);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalPromise = __webpack_require__(8);

var _metalPosition = __webpack_require__(7);

var _AutocompleteBase2 = __webpack_require__(12);

var _AutocompleteBase3 = _interopRequireDefault(_AutocompleteBase2);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(48);

var _AutocompleteSoy = __webpack_require__(43);

var _AutocompleteSoy2 = _interopRequireDefault(_AutocompleteSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DOWN = 40;
var ENTER = 13;
var SPACE = 32;
var UP = 38;

/*
 * Autocomplete component.
 */

var Autocomplete = function (_AutocompleteBase) {
	_inherits(Autocomplete, _AutocompleteBase);

	function Autocomplete() {
		_classCallCheck(this, Autocomplete);

		return _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).apply(this, arguments));
	}

	_createClass(Autocomplete, [{
		key: 'attached',

		/**
   * @inheritDoc
   */
		value: function attached() {
			_get(Autocomplete.prototype.__proto__ || Object.getPrototypeOf(Autocomplete.prototype), 'attached', this).call(this);
			this.setAriaAttributes_();
			this.eventHandler_.add(_metalDom2.default.on(this.inputElement, 'focus', this.handleInputFocus_.bind(this)));
			this.eventHandler_.add(_metalDom2.default.on(document, 'click', this.handleDocClick_.bind(this)));
			this.eventHandler_.add(_metalDom2.default.on(window, 'resize', (0, _metalDebounce2.default)(this.handleWindowResize_.bind(this), 100)));
			this.eventHandler_.add(_metalDom2.default.on(this.inputElement, 'keydown', this.handleKeyDown_.bind(this)));
			this.eventHandler_.add(this.getList().on('rendered', this.handleListRender_.bind(this)));
			if (this.visible) {
				this.align();
			}
		}

		/**
   * Aligns main element to the input element.
   */

	}, {
		key: 'align',
		value: function align() {
			this.element.style.width = this.inputElement.offsetWidth + 'px';
			var position = _metalPosition.Align.align(this.element, this.inputElement, _metalPosition.Align.Bottom, this.autoBestAlign);

			_metalDom2.default.removeClasses(this.element, this.positionCss_);
			switch (position) {
				case _metalPosition.Align.Top:
				case _metalPosition.Align.TopLeft:
				case _metalPosition.Align.TopRight:
					this.positionCss_ = 'autocomplete-top';
					break;
				case _metalPosition.Align.Bottom:
				case _metalPosition.Align.BottomLeft:
				case _metalPosition.Align.BottomRight:
					this.positionCss_ = 'autocomplete-bottom';
					break;
				default:
					this.positionCss_ = null;

			}
			_metalDom2.default.addClasses(this.element, this.positionCss_);
		}

		/**
   * Actives an option of the suggestion list by inform an index.
   * @param {number} index
   * @protected
   */

	}, {
		key: 'activateListItem_',
		value: function activateListItem_(index) {
			var option = this.currentList_[index];
			_metalDom2.default.removeClasses(this.currentList_[this.activeIndex_], 'active');
			this.activeIndex_ = index;
			this.inputElement.setAttribute('aria-activedescendant', option.getAttribute('id'));
			_metalDom2.default.addClasses(option, 'active');
		}

		/**
   * Returns the previous index or the last one if the active index was the first.
   * @protected
   * @return {number} Index
   */

	}, {
		key: 'decreaseIndex_',
		value: function decreaseIndex_() {
			return this.activeIndex_ === 0 ? this.getLastIndex_() : this.activeIndex_ - 1;
		}

		/**
   * Returns the last index of the list.
   * @protected
   * @return {number} Index
   */

	}, {
		key: 'getLastIndex_',
		value: function getLastIndex_() {
			return this.getList().items.length - 1;
		}

		/**
   * Returns the `List` component being used to render the matched items.
   * @return {!List}
   */

	}, {
		key: 'getList',
		value: function getList() {
			return this.components.list;
		}

		/**
   * Handles action keys interactions.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleActionKeys_',
		value: function handleActionKeys_() {
			var selectedItem = this.getList().items[this.activeIndex_];
			this.selectOption_(selectedItem);
		}

		/**
   * Handles `click` events, stopping their propagation.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleClick_',
		value: function handleClick_(event) {
			event.stopPropagation();
		}

		/**
   * Handles document click in order to hide autocomplete. If input element is
   * focused autocomplete will not hide.
   * @param {!Event} event
   */

	}, {
		key: 'handleDocClick_',
		value: function handleDocClick_() {
			if (document.activeElement === this.inputElement) {
				return;
			}
			this.visible = false;
		}

		/**
   * Handles input focus.
   * @param {!Event} event
   */

	}, {
		key: 'handleInputFocus_',
		value: function handleInputFocus_() {
			this.request(this.inputElement.value);
		}

		/**
   * Executed after List rendering.
   * @param {number} index
   * @protected
   */

	}, {
		key: 'handleListRender_',
		value: function handleListRender_() {
			if (this.visible) {
				this.currentList_ = this.element.querySelectorAll('.listitem');
				this.activateListItem_(0);
			}
		}

		/**
   * Handles a `keydown` event on this component. Handles keyboard controls.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleKeyDown_',
		value: function handleKeyDown_(event) {
			if (this.visible) {
				switch (event.keyCode) {
					case UP:
						this.activateListItem_(this.decreaseIndex_());
						event.preventDefault();
						break;
					case DOWN:
						this.activateListItem_(this.increaseIndex_());
						event.preventDefault();
						break;
					case ENTER:
					case SPACE:
						this.handleActionKeys_();
						event.preventDefault();
						break;
				}
			}
		}

		/**
   * Handles window resize events. Realigns the autocomplete results list to
   * the input field.
   */

	}, {
		key: 'handleWindowResize_',
		value: function handleWindowResize_() {
			if (this.visible) {
				this.align();
			}
		}

		/**
   * Returns the next index or zero if the active index was the last.
   * @protected
   * @return {number} Index
   */

	}, {
		key: 'increaseIndex_',
		value: function increaseIndex_() {
			return this.activeIndex_ === this.getLastIndex_() ? 0 : this.activeIndex_ + 1;
		}

		/**
   * Listens to the itemSelected event and it tells autocomplete which
   * element was selected.
   * @param {!Element} item The list selected item.
   * @protected
   */

	}, {
		key: 'onListItemSelected_',
		value: function onListItemSelected_(item) {
			var selectedIndex = parseInt(item.getAttribute('data-index'), 10);
			var selectedItem = this.getList().items[selectedIndex];
			this.selectOption_(selectedItem);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'request',
		value: function request(query) {
			if (this.autocompleteClosing_) {
				// While closing the input element will be focused, causing another
				// request. This request should be ignored though, since we wish to close
				// the dropdown list, not open it again.
				return;
			}

			var self = this;
			return _get(Autocomplete.prototype.__proto__ || Object.getPrototypeOf(Autocomplete.prototype), 'request', this).call(this, query).then(function (data) {
				if (data) {
					data.forEach(self.assertItemObjectStructure_);
					self.getList().items = data;
				}
				self.visible = !!(data && data.length > 0);
			});
		}

		/**
   * Emits a `select` event with the information about the selected item and
   * hides the list element.
   * @param {!Object} item The list selected item.
   * @protected
   */

	}, {
		key: 'selectOption_',
		value: function selectOption_(selectedItem) {
			this.autocompleteClosing_ = true;
			this.emit('select', selectedItem);
			this.visible = false;
			this.autocompleteClosing_ = false;
		}

		/**
   * Set the required ARIA attributes to the inputElement.
   * @protected
   */

	}, {
		key: 'setAriaAttributes_',
		value: function setAriaAttributes_() {
			this.inputElement.setAttribute('aria-activedescendant', '');
			this.inputElement.setAttribute('aria-autocomplete', 'list');
			this.inputElement.setAttribute('aria-haspopup', true);
			this.inputElement.setAttribute('aria-owns', this.listId);
			this.inputElement.setAttribute('role', 'combobox');
		}

		/**
   * Synchronization logic for `visible` state.
   * @param {boolean} visible
   */

	}, {
		key: 'syncVisible',
		value: function syncVisible(visible) {
			_get(Autocomplete.prototype.__proto__ || Object.getPrototypeOf(Autocomplete.prototype), 'syncVisible', this).call(this, visible);

			if (visible) {
				this.align();
			}
		}

		/**
   * Asserts that formatted data is valid. Throws error if item is not in the
   * valid syntax.
   * @param {*} item
   * @protected
   */

	}, {
		key: 'assertItemObjectStructure_',
		value: function assertItemObjectStructure_(item) {
			if (!_metal2.default.isObject(item)) {
				throw new _metalPromise.CancellablePromise.CancellationError('Autocomplete item must be an object');
			}
			if (!item.hasOwnProperty('textPrimary')) {
				throw new _metalPromise.CancellablePromise.CancellationError('Autocomplete item must be an object with \'textPrimary\' key');
			}
		}
	}]);

	return Autocomplete;
}(_AutocompleteBase3.default);

_metalSoy2.default.register(Autocomplete, _AutocompleteSoy2.default);

/**
 * State definition.
 * @type {!Object}
 * @static
 */
Autocomplete.STATE = {
	/**
  * Activate or Deactivate the suggestion of the best align region. If true,
  * the component will try to find a better region to align, otherwise,
  * it will keep the position at the bottom.
  * @type {boolean}
  * @default true.
  */
	autoBestAlign: {
		value: true,
		validator: _metal2.default.isBoolean
	},

	/**
  * Function that converts a given item to the format that should be used by
  * the autocomplete.
  * @type {!function()}
  */
	format: {
		value: function value(item) {
			if (_metal2.default.isString(item)) {
				item = {
					textPrimary: item
				};
			}
			if (_metal2.default.isObject(item) && !item.text) {
				item.text = item.textPrimary;
			}
			return item;
		}
	}
};

exports.default = Autocomplete;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Autocomplete = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from Autocomplete.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Autocomplete.
   * @public
   */

  goog.module('Autocomplete.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('List.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    ie_open('div', null, null, 'class', 'autocomplete autocomplete-list component ' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''), 'data-onclick', 'handleClick_');
    $templateAlias1({ events: { itemSelected: opt_data.onListItemSelected_ }, id: opt_data.listId, ref: 'list' }, null, opt_ijData);
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Autocomplete.render';
  }

  exports.render.params = ["listId", "elementClasses", "onListItemSelected_"];
  exports.render.types = { "listId": "any", "elementClasses": "any", "onListItemSelected_": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Autocomplete = function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete() {
    _classCallCheck(this, Autocomplete);

    return _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).apply(this, arguments));
  }

  return Autocomplete;
}(_metalComponent2.default);

_metalSoy2.default.register(Autocomplete, templates);
exports.Autocomplete = Autocomplete;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutocompleteBase = exports.Autocomplete = undefined;

var _Autocomplete = __webpack_require__(42);

var _Autocomplete2 = _interopRequireDefault(_Autocomplete);

var _AutocompleteBase = __webpack_require__(12);

var _AutocompleteBase2 = _interopRequireDefault(_AutocompleteBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Autocomplete2.default;
exports.Autocomplete = _Autocomplete2.default;
exports.AutocompleteBase = _AutocompleteBase2.default;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Clipboard component.
 */
var Clipboard = function (_State) {
	_inherits(Clipboard, _State);

	/**
  * Delegates a click event to the passed selector.
  */
	function Clipboard(opt_config) {
		_classCallCheck(this, Clipboard);

		var _this = _possibleConstructorReturn(this, _State.call(this, opt_config));

		_this.listener_ = _metalDom2.default.on(_this.selector, 'click', function (e) {
			return _this.initialize(e);
		});
		return _this;
	}

	/**
  * @inheritDoc
  */


	Clipboard.prototype.disposeInternal = function disposeInternal() {
		this.listener_.dispose();
		this.listener_ = null;
		if (this.clipboardAction_) {
			this.clipboardAction_.dispose();
			this.clipboardAction_ = null;
		}
	};

	/**
  * Defines a new `ClipboardAction` on each click event.
  * @param {!Event} e
  */


	Clipboard.prototype.initialize = function initialize(e) {
		if (this.clipboardAction_) {
			this.clipboardAction_ = null;
		}

		this.clipboardAction_ = new ClipboardAction({
			host: this,
			action: this.action(e.delegateTarget),
			target: this.target(e.delegateTarget),
			text: this.text(e.delegateTarget),
			trigger: e.delegateTarget
		});
	};

	return Clipboard;
}(_metalState2.default);

/**
 * State definition.
 * @type {!Object}
 * @static
 */


Clipboard.STATE = {
	/**
  * A function that returns the name of the clipboard action that should be done
  * when for the given element (either 'copy' or 'cut').
  * @type {!function(!Element)}
  */
	action: {
		validator: _metal2.default.isFunction,
		value: function value(delegateTarget) {
			return delegateTarget.getAttribute('data-action');
		}
	},

	/**
  * The selector for all elements that should be listened for clipboard actions.
  * @type {string}
  */
	selector: {
		value: '[data-clipboard]',
		validator: _metal2.default.isString
	},

	/**
  * A function that returns an element that has the content to be copied to the
  * clipboard.
  * @type {!function(!Element)}
  */
	target: {
		validator: _metal2.default.isFunction,
		value: function value(delegateTarget) {
			return document.querySelector(delegateTarget.getAttribute('data-target'));
		}
	},

	/**
  * A function that returns the text to be copied to the clipboard.
  * @type {!function(!Element)}
  */
	text: {
		validator: _metal2.default.isFunction,
		value: function value(delegateTarget) {
			return delegateTarget.getAttribute('data-text');
		}
	}
};

/**
 * ClipboardAction component.
 */

var ClipboardAction = function (_State2) {
	_inherits(ClipboardAction, _State2);

	/**
  * Initializes selection either from a `text` or `target` state.
  */
	function ClipboardAction(opt_config) {
		_classCallCheck(this, ClipboardAction);

		var _this2 = _possibleConstructorReturn(this, _State2.call(this, opt_config));

		if (_this2.text) {
			_this2.selectValue();
		} else if (_this2.target) {
			_this2.selectTarget();
		}
		return _this2;
	}

	/**
  * Removes current selection and focus from `target` element.
  */


	ClipboardAction.prototype.clearSelection = function clearSelection() {
		if (this.target) {
			this.target.blur();
		}

		window.getSelection().removeAllRanges();
	};

	/**
  * Executes the copy operation based on the current selection.
  */


	ClipboardAction.prototype.copyText = function copyText() {
		var succeeded = void 0;

		try {
			succeeded = document.execCommand(this.action);
		} catch (err) {
			succeeded = false;
		}

		this.handleResult(succeeded);
	};

	/**
  * @inheritDoc
  */


	ClipboardAction.prototype.disposeInternal = function disposeInternal() {
		this.removeFakeElement();
		_State2.prototype.disposeInternal.call(this);
	};

	/**
  * Emits an event based on the copy operation result.
  * @param {boolean} succeeded
  */


	ClipboardAction.prototype.handleResult = function handleResult(succeeded) {
		if (succeeded) {
			this.host.emit('success', {
				action: this.action,
				text: this.selectedText,
				trigger: this.trigger,
				clearSelection: this.clearSelection.bind(this)
			});
		} else {
			this.host.emit('error', {
				action: this.action,
				trigger: this.trigger,
				clearSelection: this.clearSelection.bind(this)
			});
		}
	};

	/**
  * Removes the fake element that was added to the document, as well as its
  * listener.
  */


	ClipboardAction.prototype.removeFakeElement = function removeFakeElement() {
		if (this.fake) {
			_metalDom2.default.exitDocument(this.fake);
		}

		if (this.removeFakeHandler) {
			this.removeFakeHandler.removeListener();
		}
	};

	/**
  * Selects the content from element passed on `target` state.
  */


	ClipboardAction.prototype.selectTarget = function selectTarget() {
		if (this.target.nodeName === 'INPUT' || this.target.nodeName === 'TEXTAREA') {
			this.target.select();
			this.selectedText = this.target.value;
		} else {
			var range = document.createRange();
			var selection = window.getSelection();

			range.selectNodeContents(this.target);
			selection.addRange(range);
			this.selectedText = selection.toString();
		}

		this.copyText();
	};

	/**
  * Selects the content from value passed on `text` state.
  */


	ClipboardAction.prototype.selectValue = function selectValue() {
		this.removeFakeElement();
		this.removeFakeHandler = _metalDom2.default.once(document, 'click', this.removeFakeElement.bind(this));

		this.fake = document.createElement('textarea');
		this.fake.style.position = 'fixed';
		this.fake.style.left = '-9999px';
		this.fake.setAttribute('readonly', '');
		this.fake.value = this.text;
		this.selectedText = this.text;

		_metalDom2.default.enterDocument(this.fake);

		this.fake.select();
		this.copyText();
	};

	return ClipboardAction;
}(_metalState2.default);

/**
 * State definition.
 * @type {!Object}
 * @static
 */


ClipboardAction.STATE = {
	/**
  * The action to be performed (either 'copy' or 'cut').
  * @type {string}
  * @default 'copy'
  */
	action: {
		value: 'copy',
		validator: function validator(val) {
			return val === 'copy' || val === 'cut';
		}
	},

	/**
  * A reference to the `Clipboard` base class.
  * @type {!Clipboard}
  */
	host: {
		validator: function validator(val) {
			return val instanceof Clipboard;
		}
	},

	/**
  * The text that is current selected.
  * @type {string}
  */
	selectedText: {
		validator: _metal2.default.isString
	},

	/**
  * The ID of an element that will be have its content copied.
  * @type {Element}
  */
	target: {
		validator: _metal2.default.isElement
	},

	/**
  * The text to be copied.
  * @type {string}
  */
	text: {
		validator: _metal2.default.isString
	},

	/**
  * The element that when clicked initiates a clipboard action.
  * @type {!Element}
  */
	trigger: {
		validator: _metal2.default.isElement
	}
};

exports.default = Clipboard;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
  * Debounces function execution.
  * @param {!function()} fn
  * @param {number} delay
  * @return {!function()}
  */

Object.defineProperty(exports, "__esModule", {
	value: true
});
function debounce(fn, delay) {
	return function debounced() {
		var args = arguments;
		cancelDebounce(debounced);
		debounced.id = setTimeout(function () {
			fn.apply(null, args);
		}, delay);
	};
}

/**
 * Cancels the scheduled debounced function.
 */
function cancelDebounce(debounced) {
	clearTimeout(debounced.id);
}

exports.default = debounce;
exports.cancelDebounce = cancelDebounce;
exports.debounce = debounce;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalEvents = __webpack_require__(5);

var _metalEvents2 = _interopRequireDefault(_metalEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Listens to keyboard events and uses them to move focus between different
 * elements from a component (via the arrow keys for example).
 * By default `KeyboardFocusManager` will assume that all focusable elements
 * in the component will have refs that follow the pattern in
 * KeyboardFocusManager.REF_REGEX, which includes a position number. The arrow
 * keys will then automatically move between elements by
 * incrementing/decrementing this position.
 * It's possible to fully customize this behavior by passing a function to
 * `setFocusHandler`. For more details check this function's docs.
 */
var KeyboardFocusManager = function (_EventEmitter) {
	_inherits(KeyboardFocusManager, _EventEmitter);

	/**
  * Constructor for `KeyboardFocusManager`.
  * @param {!Component} component
  * @param {string=} opt_selector
  */
	function KeyboardFocusManager(component, opt_selector) {
		_classCallCheck(this, KeyboardFocusManager);

		var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

		_this.component_ = component;
		_this.selector_ = opt_selector || '*';
		_this.handleKey_ = _this.handleKey_.bind(_this);
		return _this;
	}

	/**
  * Builds a ref string for the given position.
  * @param {string} prefix
  * @param {number|string} position
  * @return {string}
  * @protected
  */


	KeyboardFocusManager.prototype.buildRef_ = function buildRef_(prefix, position) {
		return prefix + position;
	};

	/**
  * @inheritDoc
  */


	KeyboardFocusManager.prototype.disposeInternal = function disposeInternal() {
		_EventEmitter.prototype.disposeInternal.call(this);
		this.stop();
		this.component_ = null;
		this.selector_ = null;
	};

	/**
  * Gets the next focusable element, that is, the next element that doesn't
  * have the `data-unfocusable` attribute set to `true`.
  * @param {string} prefix
  * @param {number} position
  * @param {number} increment
  * @return {string}
  * @protected
  */


	KeyboardFocusManager.prototype.getNextFocusable_ = function getNextFocusable_(prefix, position, increment) {
		var initialPosition = position;
		var element = void 0;
		var ref = void 0;
		do {
			position = this.increment_(position, increment);
			ref = this.buildRef_(prefix, position);
			element = this.component_.refs[ref];
		} while (this.isFocusable_(element) && position !== initialPosition);
		return element ? ref : null;
	};

	/**
  * Handles a `keydown` event. Decides if a new element should be focused
  * according to the key that was pressed.
  * @param {!Event} event
  * @protected
  */


	KeyboardFocusManager.prototype.handleKey_ = function handleKey_(event) {
		var element = this.focusHandler_ && this.focusHandler_(event);
		if (!this.focusHandler_ || element === true) {
			element = this.handleKeyDefault_(event);
		}

		var originalValue = element;
		if (!_metal2.default.isElement(element)) {
			element = this.component_.refs[element];
		}
		if (element) {
			element.focus();
			this.emit(KeyboardFocusManager.EVENT_FOCUSED, {
				element: element,
				ref: _metal2.default.isString(originalValue) ? originalValue : null
			});
		}
	};

	/**
  * Handles a key press according to the default behavior. Assumes that all
  * focusable elements in the component will have refs that follow the pattern
  * in KeyboardFocusManager.REF_REGEX, which includes a position number. The
  * arrow keys will then automatically move between elements by
  * incrementing/decrementing the position.
  * @param {!Event} event
  * @protected
  */


	KeyboardFocusManager.prototype.handleKeyDefault_ = function handleKeyDefault_(event) {
		var ref = event.delegateTarget.getAttribute('ref');
		var matches = KeyboardFocusManager.REF_REGEX.exec(ref);
		if (!matches) {
			return;
		}

		var position = parseInt(matches[1], 10);
		var prefix = ref.substr(0, ref.length - matches[1].length);
		switch (event.keyCode) {
			case 37:
			case 38:
				// Left/up arrow keys will focus the previous element.
				return this.getNextFocusable_(prefix, position, -1);
			case 39:
			case 40:
				// Right/down arrow keys will focus the next element.
				return this.getNextFocusable_(prefix, position, 1);
		}
	};

	/**
  * Increments the given position, making sure to follow circular rules if
  * enabled.
  * @param {number} position
  * @param {number} increment
  * @return {number}
  * @protected
  */


	KeyboardFocusManager.prototype.increment_ = function increment_(position, increment) {
		var size = this.circularLength_;
		position += increment;
		if (_metal2.default.isNumber(size)) {
			if (position < 0) {
				position = size - 1;
			} else if (position >= size) {
				position = 0;
			}
		}
		return position;
	};

	/**
  * Checks if the given element is focusable.
  * @param {Element} element
  * @return {boolean}
  * @protected
  */


	KeyboardFocusManager.prototype.isFocusable_ = function isFocusable_(element) {
		return element && element.getAttribute('data-unfocusable') === 'true';
	};

	/**
  * Sets the length of the focusable elements. If a number is passed, the
  * default focusing behavior will follow a circular pattern, going from the
  * last to the first element, and vice versa.
  * @param {?number} circularLength
  * @chainable
  */


	KeyboardFocusManager.prototype.setCircularLength = function setCircularLength(circularLength) {
		this.circularLength_ = circularLength;
		return this;
	};

	/**
  * Sets a handler function that will be called to decide which element should
  * be focused according to the key that was pressed. It will receive the key
  * event and should return one of the following:
  *   - `true`, if the default behavior should be triggered instead.
  *   - A string, representing a `ref` to the component element that should be
  *       focused.
  *   - The element itself that should be focused.
  *   - Anything else, if nothing should be focused (skipping default behavior
  *       too).
  * @param {function(key: string)} focusHandler
  * @chainable
  */


	KeyboardFocusManager.prototype.setFocusHandler = function setFocusHandler(focusHandler) {
		this.focusHandler_ = focusHandler;
		return this;
	};

	/**
  * Starts listening to keyboard events and handling element focus.
  * @chainable
  */


	KeyboardFocusManager.prototype.start = function start() {
		if (!this.handle_) {
			this.handle_ = this.component_.delegate('keydown', this.selector_, this.handleKey_);
		}
		return this;
	};

	/**
  * Stops listening to keyboard events and handling element focus.
  * @chainable
  */


	KeyboardFocusManager.prototype.stop = function stop() {
		if (this.handle_) {
			this.handle_.removeListener();
			this.handle_ = null;
		}
		return this;
	};

	return KeyboardFocusManager;
}(_metalEvents2.default);

// Event emitted when a selected element was focused via the keyboard.


KeyboardFocusManager.EVENT_FOCUSED = 'focused';

// The regex used to extract the position from an element's ref.
KeyboardFocusManager.REF_REGEX = /.+-(\d+)$/;

exports.default = KeyboardFocusManager;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(50);

var _ListSoy = __webpack_require__(49);

var _ListSoy2 = _interopRequireDefault(_ListSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * List component.
 */
var List = function (_Component) {
	_inherits(List, _Component);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	/**
  * Handles click event on the list. The function fires an
  * {@code itemSelected} event.
  * @param {!Event} event The native click event
  */
	List.prototype.handleClick = function handleClick(event) {
		var target = event.target;
		while (target) {
			if (_metalDom2.default.match(target, '.listitem')) {
				break;
			}
			target = target.parentNode;
		}
		this.emit('itemSelected', target);
	};

	return List;
}(_metalComponent2.default);

_metalSoy2.default.register(List, _ListSoy2.default);

/**
 * List state definition.
 * @type {!Object}
 * @static
 */
List.STATE = {
	/**
  * A unique identifier for the component. It's also used to compound the
  * items' ID attribute unless if itemsHtml attribute is used.
  * @type {string}
  */
	id: {
		valueFn: function valueFn() {
			return 'list-component-' + _metal2.default.getUid();
		}
	},

	/**
  * The list items. Each is represented by an object that can have the following keys:
  *   - textPrimary: The item's main content.
  *   - textSecondary: (Optional) The item's help content.
  *   - icons: (Optional) A list of icon css classes to render on the right side.
  *   - iconsHtml: (Optional) A list of icon css classes to render on the right side.
  *   - avatar: (Optional) An object that specifies the avatar's content and, optionally, a css
  *       class it should use.
  * @type {!Array<!Object>}
  * @default []
  */
	items: {
		validator: Array.isArray,
		valueFn: function valueFn() {
			return [];
		}
	},

	/**
  * The list items as HTML to be added directly to the list.
  * @type {string}
  */
	itemsHtml: {
		isHtml: true
	}
};

exports.default = List;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.List = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from List.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace List.
   * @public
   */

  goog.module('List.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('ListItem.incrementaldom', 'render');

  /**
   * @param {{
   *    id: (?),
   *    elementClasses: (?),
   *    items: (?),
   *    itemsHtml: (?soydata.SanitizedHtml|string|undefined)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    soy.asserts.assertType(opt_data.itemsHtml == null || opt_data.itemsHtml instanceof Function || opt_data.itemsHtml instanceof soydata.UnsanitizedText || goog.isString(opt_data.itemsHtml), 'itemsHtml', opt_data.itemsHtml, '?soydata.SanitizedHtml|string|undefined');
    var itemsHtml = /** @type {?soydata.SanitizedHtml|string|undefined} */opt_data.itemsHtml;
    ie_open('div', null, null, 'class', 'list' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open_start('ul');
    iattr('class', 'list-group');
    iattr('data-onclick', 'handleClick');
    if (opt_data.id) {
      iattr('id', opt_data.id);
    }
    iattr('role', 'list');
    ie_open_end();
    if (itemsHtml != null) {
      itemsHtml();
    } else {
      var itemList21 = opt_data.items;
      var itemListLen21 = itemList21.length;
      for (var itemIndex21 = 0; itemIndex21 < itemListLen21; itemIndex21++) {
        var itemData21 = itemList21[itemIndex21];
        $templateAlias1({ id: opt_data.id + '-item-' + (itemIndex21 + 1), index: itemIndex21, item: itemData21, key: '-items-' + itemIndex21 }, null, opt_ijData);
      }
    }
    ie_close('ul');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'List.render';
  }

  exports.render.params = ["itemsHtml", "id", "elementClasses", "items"];
  exports.render.types = { "itemsHtml": "html", "id": "any", "elementClasses": "any", "items": "any" };
  exports.templates = templates = exports;
  return exports;
});

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  return List;
}(_metalComponent2.default);

_metalSoy2.default.register(List, templates);
exports.List = List;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _ListItemSoy = __webpack_require__(51);

var _ListItemSoy2 = _interopRequireDefault(_ListItemSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * List component.
 */
var ListItem = function (_Component) {
	_inherits(ListItem, _Component);

	function ListItem() {
		_classCallCheck(this, ListItem);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	/**
  * Setter function for the `item` state key.
  * @param {!Object} item
  * @protected
  */
	ListItem.prototype.setterItemFn_ = function setterItemFn_(item) {
		if (item.textPrimary && _metal2.default.isString(item.textPrimary)) {
			item.textPrimary = _metalSoy2.default.toIncDom(item.textPrimary);
		}
		if (item.textSecondary && _metal2.default.isString(item.textSecondary)) {
			item.textSecondary = _metalSoy2.default.toIncDom(item.textSecondary);
		}
		if (item.avatar && item.avatar.content && _metal2.default.isString(item.avatar.content)) {
			item.avatar.content = _metalSoy2.default.toIncDom(item.avatar.content);
		}
		if (Array.isArray(item.iconsHtml)) {
			item.iconsHtml = item.iconsHtml.map(_metalSoy2.default.toIncDom);
		}
		return item;
	};

	return ListItem;
}(_metalComponent2.default);

_metalSoy2.default.register(ListItem, _ListItemSoy2.default);

/**
 * List state definition.
 * @type {Object}
 * @static
 */
ListItem.STATE = {
	/**
  * A unique identifier for each item.
  * @type {string}
  */
	id: {
		valueFn: function valueFn() {
			return 'list-component-item' + _metal2.default.getUid();
		}
	},

	/**
  * The item to be rendered.
  * @type {!Object}
  */
	item: {
		validator: _metal2.default.isObject,
		setter: 'setterItemFn_'
	},

	/**
  * The index of the item in the list.
  * @type {number}
  */
	index: {
		value: -1
	}
};

exports.default = ListItem;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ListItem = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ListItem.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ListItem.
   * @public
   */

  goog.module('ListItem.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open_start('li');
    iattr('class', 'listitem list-group-item ' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + ' clearfix');
    iattr('data-index', opt_data.index);
    if (opt_data.id) {
      iattr('id', opt_data.id);
    }
    iattr('role', 'listitem');
    ie_open_end();
    if (opt_data.item.avatar) {
      if (opt_data.item.avatar.link) {
        itext(' ');
        ie_open('a', null, null, 'href', opt_data.item.avatar.link, 'class', 'avatar-link');
        itext(' ');
      }
      ie_open('span', null, null, 'class', 'list-image pull-left ' + opt_data.item.avatar['class']);
      var dyn0 = opt_data.item.avatar.content;
      if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
      ie_close('span');
      if (opt_data.item.avatar.link) {
        itext(' ');
        ie_close('a');
        itext(' ');
      }
    }
    ie_open('div', null, null, 'class', 'list-main-content pull-left');
    ie_open('div', null, null, 'class', 'list-text-primary');
    var dyn1 = opt_data.item.textPrimary;
    if (typeof dyn1 == 'function') dyn1();else if (dyn1 != null) itext(dyn1);
    ie_close('div');
    if (opt_data.item.textSecondary) {
      ie_open('div', null, null, 'class', 'list-text-secondary');
      var dyn2 = opt_data.item.textSecondary;
      if (typeof dyn2 == 'function') dyn2();else if (dyn2 != null) itext(dyn2);
      ie_close('div');
    }
    ie_close('div');
    if (opt_data.item.icons) {
      var iconList66 = opt_data.item.icons;
      var iconListLen66 = iconList66.length;
      for (var iconIndex66 = 0; iconIndex66 < iconListLen66; iconIndex66++) {
        var iconData66 = iconList66[iconIndex66];
        ie_void('span', null, null, 'class', 'btn-icon ' + iconData66 + ' pull-right');
      }
    }
    if (opt_data.item.iconsHtml) {
      ie_open('div', null, null, 'class', 'pull-right');
      var iconHtmlList72 = opt_data.item.iconsHtml;
      var iconHtmlListLen72 = iconHtmlList72.length;
      for (var iconHtmlIndex72 = 0; iconHtmlIndex72 < iconHtmlListLen72; iconHtmlIndex72++) {
        var iconHtmlData72 = iconHtmlList72[iconHtmlIndex72];
        var dyn3 = iconHtmlData72;
        if (typeof dyn3 == 'function') dyn3();else if (dyn3 != null) itext(dyn3);
      }
      ie_close('div');
    }
    if (opt_data.item.label) {
      ie_open('span', null, null, 'class', 'label list-label pull-right ' + opt_data.item.label['class']);
      var dyn4 = opt_data.item.label.content;
      if (typeof dyn4 == 'function') dyn4();else if (dyn4 != null) itext(dyn4);
      ie_close('span');
    }
    ie_close('li');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ListItem.render';
  }

  exports.render.params = ["id", "index", "item", "elementClasses"];
  exports.render.types = { "id": "any", "index": "any", "item": "any", "elementClasses": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  return ListItem;
}(_metalComponent2.default);

_metalSoy2.default.register(ListItem, templates);
exports.ListItem = ListItem;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Position = __webpack_require__(14);

var _Position2 = _interopRequireDefault(_Position);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Align utility. Computes region or best region to align an element with
 * another. Regions are relative to viewport, make sure to use element with
 * position fixed, or position absolute when the element first positioned
 * parent is the body element.
 */
var Align = function () {
	function Align() {
		_classCallCheck(this, Align);
	}

	_createClass(Align, null, [{
		key: 'align',


		/**
   * Aligns the element with the best region around alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
   *     The initial position to try. Options `Align.Top`, `Align.Right`,
   *     `Align.Bottom`, `Align.Left`.
   * @param {boolean} autoBestAlign Option to suggest or not the best region
   *      to align.
   * @return {string} The final chosen position for the aligned element.
   * @static
   */
		value: function align(element, alignElement, position) {
			var autoBestAlign = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

			var bestRegion;

			if (autoBestAlign) {
				var suggestion = this.suggestAlignBestRegion(element, alignElement, position);
				position = suggestion.position;
				bestRegion = suggestion.region;
			} else {
				bestRegion = this.getAlignRegion(element, alignElement, position);
			}

			var computedStyle = window.getComputedStyle(element, null);
			if (computedStyle.getPropertyValue('position') !== 'fixed') {
				bestRegion.top += window.pageYOffset;
				bestRegion.left += window.pageXOffset;

				var offsetParent = element;
				while (offsetParent = offsetParent.offsetParent) {
					bestRegion.top -= _Position2.default.getOffsetTop(offsetParent);
					bestRegion.left -= _Position2.default.getOffsetLeft(offsetParent);
				}
			}

			element.style.top = bestRegion.top + 'px';
			element.style.left = bestRegion.left + 'px';
			return position;
		}

		/**
   * Returns the best region to align element with alignElement. This is similar
   * to `Align.suggestAlignBestRegion`, but it only returns the region information,
   * while `Align.suggestAlignBestRegion` also returns the chosen position.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
   *     The initial position to try. Options `Align.Top`, `Align.Right`,
   *     `Align.Bottom`, `Align.Left`.
   * @return {DOMRect} Best region to align element.
   * @static
   */

	}, {
		key: 'getAlignBestRegion',
		value: function getAlignBestRegion(element, alignElement, position) {
			return Align.suggestAlignBestRegion(element, alignElement, position).region;
		}

		/**
   * Returns the region to align element with alignElement. The element is
   * always aligned in the middle of alignElement axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
   *     The position to align. Options `Align.Top`, `Align.Right`,
   *     `Align.Bottom`, `Align.Left`.
   * @return {DOMRect} Region to align element.
   * @static
   */

	}, {
		key: 'getAlignRegion',
		value: function getAlignRegion(element, alignElement, position) {
			var r1 = _Position2.default.getRegion(alignElement);
			var r2 = _Position2.default.getRegion(element);
			var top = 0;
			var left = 0;

			switch (position) {
				case Align.TopCenter:
					top = r1.top - r2.height;
					left = r1.left + r1.width / 2 - r2.width / 2;
					break;
				case Align.RightCenter:
					top = r1.top + r1.height / 2 - r2.height / 2;
					left = r1.left + r1.width;
					break;
				case Align.BottomCenter:
					top = r1.bottom;
					left = r1.left + r1.width / 2 - r2.width / 2;
					break;
				case Align.LeftCenter:
					top = r1.top + r1.height / 2 - r2.height / 2;
					left = r1.left - r2.width;
					break;
				case Align.TopRight:
					top = r1.top - r2.height;
					left = r1.right - r2.width;
					break;
				case Align.BottomRight:
					top = r1.bottom;
					left = r1.right - r2.width;
					break;
				case Align.BottomLeft:
					top = r1.bottom;
					left = r1.left;
					break;
				case Align.TopLeft:
					top = r1.top - r2.height;
					left = r1.left;
					break;
			}

			return {
				bottom: top + r2.height,
				height: r2.height,
				left: left,
				right: left + r2.width,
				top: top,
				width: r2.width
			};
		}

		/**
   * Checks if specified value is a valid position. Options `Align.Top`,
   *     `Align.Right`, `Align.Bottom`, `Align.Left`.
   * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} val
   * @return {boolean} Returns true if value is a valid position.
   * @static
   */

	}, {
		key: 'isValidPosition',
		value: function isValidPosition(val) {
			return 0 <= val && val <= 8;
		}

		/**
   * Looks for the best region for aligning the given element. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {!Element} element Element to be aligned.
   * @param {!Element} alignElement Element to align with.
   * @param {Align.Top|Align.Right|Align.Bottom|Align.Left} pos
   *     The initial position to try. Options `Align.Top`, `Align.Right`,
   *     `Align.Bottom`, `Align.Left`.
   * @return {{position: string, region: DOMRect}} Best region to align element.
   * @static
   */

	}, {
		key: 'suggestAlignBestRegion',
		value: function suggestAlignBestRegion(element, alignElement, position) {
			var bestArea = 0;
			var bestPosition = position;
			var bestRegion = this.getAlignRegion(element, alignElement, bestPosition);
			var tryPosition = bestPosition;
			var tryRegion = bestRegion;
			var viewportRegion = _Position2.default.getRegion(window);

			for (var i = 0; i < 8;) {
				if (_Position2.default.intersectRegion(viewportRegion, tryRegion)) {
					var visibleRegion = _Position2.default.intersection(viewportRegion, tryRegion);
					var area = visibleRegion.width * visibleRegion.height;
					if (area > bestArea) {
						bestArea = area;
						bestRegion = tryRegion;
						bestPosition = tryPosition;
					}
					if (_Position2.default.insideViewport(tryRegion)) {
						break;
					}
				}
				tryPosition = (position + ++i) % 8;
				tryRegion = this.getAlignRegion(element, alignElement, tryPosition);
			}

			return {
				position: bestPosition,
				region: bestRegion
			};
		}
	}]);

	return Align;
}();

/**
 * Constants that represent the supported positions for `Align`.
 * @type {number}
 * @static
 */

Align.TopCenter = 0;
Align.TopRight = 1;
Align.RightCenter = 2;
Align.BottomRight = 3;
Align.BottomCenter = 4;
Align.BottomLeft = 5;
Align.LeftCenter = 6;
Align.TopLeft = 7;

/**
 * Aliases for position constants.
 * @type {number}
 * @static
 */
Align.Top = Align.TopCenter;
Align.Right = Align.RightCenter;
Align.Bottom = Align.BottomCenter;
Align.Left = Align.LeftCenter;

exports.default = Align;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _ReadingProgress = __webpack_require__(54);

var _ReadingProgress2 = _interopRequireDefault(_ReadingProgress);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _ReadingProgressTracker = __webpack_require__(55);

var _ReadingProgressTracker2 = _interopRequireDefault(_ReadingProgressTracker);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * This components renders a list of links to contents on the page. These links
 * show the reading progress for these contents, as well as the expected time
 * for reading them.
 */
var ReadingProgress = function (_Component) {
	_inherits(ReadingProgress, _Component);

	function ReadingProgress() {
		_classCallCheck(this, ReadingProgress);

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	/**
  * @inheritDoc
  */
	ReadingProgress.prototype.disposed = function disposed() {
		this.tracker_ && this.tracker_.dispose();
	};

	/**
  * Generates any data that is missing from the given item config object.
  * @param {!Object}
  */


	ReadingProgress.prototype.generateItemMissingData_ = function generateItemMissingData_(item) {
		if (item.href[0] !== '#') {
			// We only generate data for items that use hash links, since we use
			// the contents of the referenced element for that.
			return;
		}

		var element = document.getElementById(item.href.substr(1));
		if (!item.title) {
			item.title = element.querySelector(this.titleSelector).textContent;
		}
		if (!item.time) {
			var charCount = element.textContent.length;
			item.time = Math.round(charCount * 60 / 1500); // Assumes 1500 chars/min
		}
	};

	/**
  * Gets the `ReadingProgressTracker` instance being used.
  * @return {ReadingProgressTracker}
  */


	ReadingProgress.prototype.getTracker = function getTracker() {
		return this.tracker_;
	};

	/**
  * Handles the `rendered` lifecycle. Creates the `ReadingProgressTracker`
  * instance that will be used to calculate reading progress value used by the
  * ui.
  * @protected
  */


	ReadingProgress.prototype.rendered = function rendered(firstRender) {
		if (firstRender) {
			this.tracker_ = new _ReadingProgressTracker2.default(_metal.object.mixin({
				element: this.element
			}, this.trackerConfig));
			this.tracker_.on('progressChanged', this.updateProgress.bind(this));
			this.updateProgress();
		}
	};

	/**
  * Setter function for the `items` attribute. Converts items to the expected
  * format, generating any info that is not given.
  * @param {!Array<string|!{href: string, title: ?string, time: ?string}>} items
  * @return {!{href: string, title: string, time: string}}
  * @protected
  */


	ReadingProgress.prototype.setterItemsFn_ = function setterItemsFn_(items) {
		for (var i = 0; i < items.length; i++) {
			if (_metal.core.isString(items[i])) {
				items[i] = {
					href: items[i]
				};
			}
			this.generateItemMissingData_(items[i]);
		}
		return items;
	};

	/**
  * Updates the UI according to the new progress value.
  */


	ReadingProgress.prototype.updateProgress = function updateProgress() {
		var activeIndex = this.tracker_.activeIndex;
		if (activeIndex >= 0) {
			var link = this.tracker_.getElementForIndex(activeIndex);
			link.querySelector('circle').setAttribute('stroke-dashoffset', 100 - this.tracker_.progress);
		}
	};

	return ReadingProgress;
}(_metalComponent2.default);

_metalSoy2.default.register(ReadingProgress, _ReadingProgress2.default);

/**
 * `ReadingProgress`'s state configuration.
 */
ReadingProgress.STATE = {
	/**
  * An array of items representing links to the elements in the page that this
  * component should track reading progress for. This can either be an array of
  * href strings, or an object with more specific configuration for each item,
  * as follows:
  *   - href: The link this item refers to.
  *   - title: Optional. The title of the item.
  *   - time: Optional. The expected time, in seconds, for reading this item.
  * Optional info that is not given will be generated by analizyng the contents
  * of the elements that are being linked to.
  * @type {!Array<string|!{href: string, title: ?string, time: ?string}>}
  */
	items: {
		setter: 'setterItemsFn_',
		validator: Array.isArray
	},

	/**
  * The DOM selector to be used for finding the titles to be used by the items,
  * when they're not given via the `items` attribute.
  * @type {string}
  */
	titleSelector: {
		validator: _metal.core.isString,
		value: 'h1'
	},

	/**
  * A configuration object to be used when creating the `ReadingProgressTracker`.
  * @type {Object}
  */
	trackerConfig: {
		validator: _metal.core.isObject,
		writeOnce: true
	}
};

exports.default = ReadingProgress;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ReadingProgress = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from ReadingProgress.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace ReadingProgress.
   * @public
   */

  goog.module('ReadingProgress.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'reading-progress' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('ul');
    var itemList8 = opt_data.items;
    var itemListLen8 = itemList8.length;
    for (var itemIndex8 = 0; itemIndex8 < itemListLen8; itemIndex8++) {
      var itemData8 = itemList8[itemIndex8];
      $item({ item: itemData8 }, null, opt_ijData);
    }
    ie_close('ul');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ReadingProgress.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $item(opt_data, opt_ignored, opt_ijData) {
    ie_open('li');
    ie_open('a', null, null, 'href', opt_data.item.href);
    if (opt_data.item.title) {
      ie_open('span', null, null, 'class', 'reading-title');
      itext((goog.asserts.assert(opt_data.item.title != null), opt_data.item.title));
      ie_close('span');
    }
    if (opt_data.item.time) {
      ie_open('span', null, null, 'class', 'reading-subtitle');
      itext((goog.asserts.assert((opt_data.item.time < 60 ? opt_data.item.time + ' sec read' : Math.round(opt_data.item.time / 60) + ' min read') != null), opt_data.item.time < 60 ? opt_data.item.time + ' sec read' : Math.round(opt_data.item.time / 60) + ' min read'));
      ie_close('span');
    }
    ie_open('svg', null, null, 'x', '0px', 'y', '0px', 'width', '36px', 'height', '36px', 'viewBox', '0 0 36 36');
    ie_void('circle', null, null, 'fill', 'none', 'stroke-width', '2', 'cx', '18', 'cy', '18', 'r', '16', 'stroke-dasharray', '100 100', 'transform', 'rotate(-90 18 18)');
    ie_close('svg');
    ie_close('a');
    ie_close('li');
  }
  exports.item = $item;
  if (goog.DEBUG) {
    $item.soyTemplateName = 'ReadingProgress.item';
  }

  exports.render.params = ["elementClasses", "items"];
  exports.render.types = { "elementClasses": "any", "items": "any" };
  exports.item.params = ["item"];
  exports.item.types = { "item": "any" };
  exports.templates = templates = exports;
  return exports;
});

var ReadingProgress = function (_Component) {
  _inherits(ReadingProgress, _Component);

  function ReadingProgress() {
    _classCallCheck(this, ReadingProgress);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  return ReadingProgress;
}(_metalComponent2.default);

_metalSoy2.default.register(ReadingProgress, templates);
exports.ReadingProgress = ReadingProgress;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalScrollspy = __webpack_require__(56);

var _metalScrollspy2 = _interopRequireDefault(_metalScrollspy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A Scrollspy implementation that also tracks the percentage of the text that
 * has already been covered by the scrolling, instead of just marking the one
 * being currently viewed.
 */
var ReadingProgressTracker = function (_Scrollspy) {
	_inherits(ReadingProgressTracker, _Scrollspy);

	function ReadingProgressTracker() {
		_classCallCheck(this, ReadingProgressTracker);

		return _possibleConstructorReturn(this, _Scrollspy.apply(this, arguments));
	}

	/**
  * Initializes the main behavior. This is being overriden instead of the
  * constructor because the events need to be attached before the `Scrollspy`
  * super class init code runs. Unfortunately, it's not possible to reference
  * `this` before calling `super` on ES2015 constructors (compilers like babel
  * throw errors).
  * @override
  */
	ReadingProgressTracker.prototype.init = function init() {
		this.on('activeIndexChanged', this.handleActiveIndexChanged);
		this.on('progressChanged', this.handleProgressChanged);

		_Scrollspy.prototype.init.call(this);
	};

	/**
  * Overrides the original method from `Scrollspy` to also calculate the
  * reading progress of the currently active link.
  */


	ReadingProgressTracker.prototype.checkPosition = function checkPosition() {
		_Scrollspy.prototype.checkPosition.call(this);
		this.updateProgress();
	};

	/**
  * Handles the `activeIndexChanged` event. Removes reading progress information
  * from the previously active link and updates the markup of links according
  * to their completion state.
  * @param {!Object} data
  */


	ReadingProgressTracker.prototype.handleActiveIndexChanged = function handleActiveIndexChanged(data) {
		if (_metal2.default.isDef(data.prevVal) && data.prevVal >= 0) {
			var prevElement = this.getElementForIndex(data.prevVal);
			prevElement.removeAttribute('data-reading-progress');
		}
		this.updateCompleted();
	};

	/**
  * Handles the `progressChanged` event. Updates the `data-reading-progress`
  * attribute of the currently active link.
  * @param {!Object} data
  */


	ReadingProgressTracker.prototype.handleProgressChanged = function handleProgressChanged(data) {
		var element = this.getElementForIndex(this.activeIndex);
		element.setAttribute('data-reading-progress', data.newVal);
		if (data.newVal < 100) {
			_metalDom2.default.removeClasses(element, this.completedClass);
		} else {
			_metalDom2.default.addClasses(element, this.completedClass);
		}
	};

	/**
  * Updates the links with the class specified by the `completedClass`
  * attribute, adding it to the links that have been scrolled through and
  * removing from the links that haven't.
  */


	ReadingProgressTracker.prototype.updateCompleted = function updateCompleted() {
		for (var i = 0; i < this.regions.length; i++) {
			var element = this.resolveElement(this.regions[i].link);
			if (i < this.activeIndex) {
				_metalDom2.default.addClasses(element, this.completedClass);
			} else {
				_metalDom2.default.removeClasses(element, this.completedClass);
			}
		}
	};

	/**
  * Updates the current reading progress value.
  */


	ReadingProgressTracker.prototype.updateProgress = function updateProgress() {
		var index = this.activeIndex;
		if (index >= 0) {
			var region = this.regions[index];
			var position = this.getCurrentPosition();
			var maxBottom = this.getScrollHeight_() + this.offset;
			var bottom = Math.min(maxBottom, region.bottom);
			this.progress = Math.min(100 * (position - region.top) / (bottom - region.top), 100);
		}
	};

	return ReadingProgressTracker;
}(_metalScrollspy2.default);

/**
 * ReadingProgressTracker' state config.
 * @type {!Object}
 */


ReadingProgressTracker.STATE = {
	/**
  * The CSS class that will be added to links that reach 100% percentage.
  * @type {string}
  */
	completedClass: {
		validator: _metal2.default.isString,
		value: 'reading-progress-completed'
	},

	/**
  * The reading progress for the currently active link, in percentage.
  * @type {number}
  */
	progress: {
		validator: _metal2.default.isNumber,
		value: 0
	}
};

exports.default = ReadingProgressTracker;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalPosition = __webpack_require__(7);

var _metalPosition2 = _interopRequireDefault(_metalPosition);

var _metalState = __webpack_require__(6);

var _metalState2 = _interopRequireDefault(_metalState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Scrollspy utility.
 */
var Scrollspy = function (_State) {
	_inherits(Scrollspy, _State);

	/**
  * @inheritDoc
  */
	function Scrollspy(opt_config) {
		_classCallCheck(this, Scrollspy);

		/**
   * Holds the regions cache.
   * @type {!Array}
   * @private
   * @default []
   */
		var _this = _possibleConstructorReturn(this, _State.call(this, opt_config));

		_this.regions = [];

		/**
   * Holds event handle that listens scroll shared event emitter proxy.
   * @type {!EventHandle}
   * @protected
   */
		_this.scrollHandle_ = _metalDom2.default.on(_this.scrollElement, 'scroll', _this.checkPosition.bind(_this));

		_this.init();
		return _this;
	}

	/**
  * @inheritDoc
  */


	Scrollspy.prototype.disposeInternal = function disposeInternal() {
		this.deactivateAll();
		this.scrollHandle_.dispose();
		_State.prototype.disposeInternal.call(this);
	};

	/**
  * Activates index matching element.
  * @param {number} index
  */


	Scrollspy.prototype.activate = function activate(index) {
		if (this.activeIndex >= 0) {
			this.deactivate(this.activeIndex);
		}
		this.activeIndex = index;
		_metalDom2.default.addClasses(this.getElementForIndex(index), this.activeClass);
	};

	/**
  * Checks position of elements and activate the one in region.
  */


	Scrollspy.prototype.checkPosition = function checkPosition() {
		var scrollHeight = this.getScrollHeight_();
		var scrollTop = _metalPosition2.default.getScrollTop(this.scrollElement);

		if (scrollHeight < scrollTop + this.offset) {
			this.activate(this.regions.length - 1);
			return;
		}

		var index = this.findBestRegionAt_();
		if (index !== this.activeIndex) {
			if (index === -1) {
				this.deactivateAll();
			} else {
				this.activate(index);
			}
		}
	};

	/**
  * Deactivates index matching element.
  * @param {number} index
  */


	Scrollspy.prototype.deactivate = function deactivate(index) {
		_metalDom2.default.removeClasses(this.getElementForIndex(index), this.activeClass);
	};

	/**
  * Deactivates all elements.
  */


	Scrollspy.prototype.deactivateAll = function deactivateAll() {
		for (var i = 0; i < this.regions.length; i++) {
			this.deactivate(i);
		}
		this.activeIndex = -1;
	};

	/**
  * Finds best region to activate.
  * @return {number} The index of best region found.
  */


	Scrollspy.prototype.findBestRegionAt_ = function findBestRegionAt_() {
		var index = -1;
		var origin = this.getCurrentPosition();
		if (this.regions.length > 0 && origin >= this.regions[0].top) {
			for (var i = 0; i < this.regions.length; i++) {
				var region = this.regions[i];
				var lastRegion = i === this.regions.length - 1;
				if (origin >= region.top && (lastRegion || origin < this.regions[i + 1].top)) {
					index = i;
					break;
				}
			}
		}
		return index;
	};

	/**
  * Gets the current position in the page.
  * @return {number}
  */


	Scrollspy.prototype.getCurrentPosition = function getCurrentPosition() {
		var scrollTop = _metalPosition2.default.getScrollTop(this.scrollElement);
		return scrollTop + this.offset + this.scrollElementRegion_.top;
	};

	/**
  * Returns the element that should be used for the link at the given index.
  * @param {number} index
  * @return {!Element}
  */


	Scrollspy.prototype.getElementForIndex = function getElementForIndex(index) {
		return this.resolveElement(this.regions[index].link);
	};

	/**
  * Gets the scroll height of `scrollElement`.
  * @return {number}
  * @protected
  */


	Scrollspy.prototype.getScrollHeight_ = function getScrollHeight_() {
		var scrollHeight = _metalPosition2.default.getHeight(this.scrollElement);
		scrollHeight += this.scrollElementRegion_.top;
		scrollHeight -= _metalPosition2.default.getClientHeight(this.scrollElement);
		return scrollHeight;
	};

	/**
  * Initializes the behavior of scrollspy. It's important to have this as a
  * separate function so subclasses can override it (babel doesn't allow using
  * `this` on constructors before calling `super()`).
  */


	Scrollspy.prototype.init = function init() {
		this.refresh();
		this.on('elementChanged', this.refresh);
		this.on('offsetChanged', this.checkPosition);
		this.on('scrollElementChanged', this.onScrollElementChanged_);
		this.on('selectorChanged', this.refresh);
	};

	/**
  * Fired when the value of the `scrollElement` state changes.
  * Refreshes the spy and updates the event handler to listen to the new scroll element.
  * @param {!Event} event
  * @protected
  */


	Scrollspy.prototype.onScrollElementChanged_ = function onScrollElementChanged_(event) {
		this.refresh();

		this.scrollHandle_.dispose();
		this.scrollHandle_ = _metalDom2.default.on(event.newVal, 'scroll', this.checkPosition.bind(this));
	};

	/**
  * Refreshes all regions from document. Relevant when spying elements that
  * nodes can be added and removed.
  */


	Scrollspy.prototype.refresh = function refresh() {
		// Removes the "active" class from all current regions.
		this.deactivateAll();

		this.scrollElementRegion_ = _metalPosition2.default.getRegion(this.scrollElement);
		this.scrollHeight_ = this.getScrollHeight_();

		this.regions = [];
		var links = this.element.querySelectorAll(this.selector);
		var scrollTop = _metalPosition2.default.getScrollTop(this.scrollElement);
		for (var i = 0; i < links.length; ++i) {
			var link = links[i];
			if (link.hash && link.hash.length > 1) {
				var element = document.getElementById(link.hash.substring(1));
				if (element) {
					var region = _metalPosition2.default.getRegion(element);
					this.regions.push({
						link: link,
						top: region.top + scrollTop,
						bottom: region.bottom + scrollTop
					});
				}
			}
		}
		this.sortRegions_();

		// Removes the "active" class from all new regions and then activate the right one for
		// the current position.
		this.deactivateAll();
		this.checkPosition();
	};

	/**
  * Sorts regions from lower to higher on y-axis.
  * @protected
  */


	Scrollspy.prototype.sortRegions_ = function sortRegions_() {
		this.regions.sort(function (a, b) {
			return a.top - b.top;
		});
	};

	return Scrollspy;
}(_metalState2.default);

Scrollspy.STATE = {
	/**
  * Class to be used as active class.
  * @type {string}
  */
	activeClass: {
		validator: _metal2.default.isString,
		value: 'active'
	},

	/**
  * The index of the currently active link.
  * @type {number}
  */
	activeIndex: {
		validator: _metal2.default.isNumber,
		value: -1
	},

	/**
  * Function that receives the matching element as argument and return
  * itself. Relevant when the `activeClass` must be applied to a different
  * element, e.g. a parentNode.
  * @type {function}
  * @default core.identityFunction
  */
	resolveElement: {
		validator: _metal2.default.isFunction,
		value: _metal2.default.identityFunction
	},

	/**
  * The scrollElement element to be used as scrollElement area for scrollspy.
  * The scrollElement is where the scroll event is listened from.
  * @type {Element|Window}
  */
	scrollElement: {
		setter: _metalDom2.default.toElement,
		value: document
	},

	/**
  * Defines the offset that triggers scrollspy.
  * @type {number}
  * @default 0
  */
	offset: {
		validator: _metal2.default.isNumber,
		value: 0
	},

	/**
  * Element to be used as alignment reference of scrollspy.
  * @type {Element}
  */
	element: {
		setter: _metalDom2.default.toElement
	},

	/**
  * Selector to query elements inside `element` to be activated.
  * @type {Element}
  * @default 'a'
  */
	selector: {
		validator: _metal2.default.isString,
		value: 'a'
	}
};

exports.default = Scrollspy;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A cached reference to the create function.
 */
var create = Object.create;

/**
 * Case insensitive string Multimap implementation. Allows multiple values for
 * the same key name.
 * @extends {Disposable}
 */

var MultiMap = function (_Disposable) {
	_inherits(MultiMap, _Disposable);

	function MultiMap() {
		_classCallCheck(this, MultiMap);

		var _this = _possibleConstructorReturn(this, _Disposable.call(this));

		_this.keys = create(null);
		_this.values = create(null);
		return _this;
	}

	/**
  * Adds value to a key name.
  * @param {string} name
  * @param {*} value
  * @chainable
  */


	MultiMap.prototype.add = function add(name, value) {
		this.keys[name.toLowerCase()] = name;
		this.values[name.toLowerCase()] = this.values[name.toLowerCase()] || [];
		this.values[name.toLowerCase()].push(value);
		return this;
	};

	/**
  * Clears map names and values.
  * @chainable
  */


	MultiMap.prototype.clear = function clear() {
		this.keys = create(null);
		this.values = create(null);
		return this;
	};

	/**
  * Checks if map contains a value to the key name.
  * @param {string} name
  * @return {boolean}
  * @chainable
  */


	MultiMap.prototype.contains = function contains(name) {
		return name.toLowerCase() in this.values;
	};

	/**
  * @inheritDoc
  */


	MultiMap.prototype.disposeInternal = function disposeInternal() {
		this.values = null;
	};

	/**
  * Creates a `MultiMap` instance from the given object.
  * @param {!Object} obj
  * @return {!MultiMap}
  */


	MultiMap.fromObject = function fromObject(obj) {
		var map = new MultiMap();
		var keys = Object.keys(obj);
		for (var i = 0; i < keys.length; i++) {
			map.set(keys[i], obj[keys[i]]);
		}
		return map;
	};

	/**
  * Gets the first added value from a key name.
  * @param {string} name
  * @return {*}
  * @chainable
  */


	MultiMap.prototype.get = function get(name) {
		var values = this.values[name.toLowerCase()];
		if (values) {
			return values[0];
		}
	};

	/**
  * Gets all values from a key name.
  * @param {string} name
  * @return {Array.<*>}
  */


	MultiMap.prototype.getAll = function getAll(name) {
		return this.values[name.toLowerCase()];
	};

	/**
  * Returns true if the map is empty, false otherwise.
  * @return {boolean}
  */


	MultiMap.prototype.isEmpty = function isEmpty() {
		return this.size() === 0;
	};

	/**
  * Gets array of key names.
  * @return {Array.<string>}
  */


	MultiMap.prototype.names = function names() {
		var _this2 = this;

		return Object.keys(this.values).map(function (key) {
			return _this2.keys[key];
		});
	};

	/**
  * Removes all values from a key name.
  * @param {string} name
  * @chainable
  */


	MultiMap.prototype.remove = function remove(name) {
		delete this.keys[name.toLowerCase()];
		delete this.values[name.toLowerCase()];
		return this;
	};

	/**
  * Sets the value of a key name. Relevant to replace the current values with
  * a new one.
  * @param {string} name
  * @param {*} value
  * @chainable
  */


	MultiMap.prototype.set = function set(name, value) {
		this.keys[name.toLowerCase()] = name;
		this.values[name.toLowerCase()] = [value];
		return this;
	};

	/**
  * Gets the size of the map key names.
  * @return {number}
  */


	MultiMap.prototype.size = function size() {
		return this.names().length;
	};

	/**
  * Returns the parsed values as a string.
  * @return {string}
  */


	MultiMap.prototype.toString = function toString() {
		return JSON.stringify(this.values);
	};

	return MultiMap;
}(_metal.Disposable);

exports.default = MultiMap;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Generic tree node data structure with arbitrary number of child nodes.
 * @param {V} value Value.
 * @constructor
 */
var TreeNode = function () {
	function TreeNode(value) {
		_classCallCheck(this, TreeNode);

		/**
   * The value.
   * @private {V}
   */
		this.value_ = value;

		/**
   * Reference to the parent node or null if it has no parent.
   * @private {TreeNode}
   */
		this.parent_ = null;

		/**
   * Child nodes or null in case of leaf node.
   * @private {Array<!TreeNode>}
   */
		this.children_ = null;
	}

	/**
  * Appends a child node to this node.
  * @param {!TreeNode} child Orphan child node.
  */


	TreeNode.prototype.addChild = function addChild(child) {
		assertChildHasNoParent(child);
		child.setParent(this);
		this.children_ = this.children_ || [];
		this.children_.push(child);
	};

	/**
  * Tells whether this node is the ancestor of the given node.
  * @param {!TreeNode} node A node.
  * @return {boolean} Whether this node is the ancestor of {@code node}.
  */


	TreeNode.prototype.contains = function contains(node) {
		var current = node.getParent();
		while (current) {
			if (current === this) {
				return true;
			}
			current = current.getParent();
		}
		return false;
	};

	/**
  * @return {!Array<TreeNode>} All ancestor nodes in bottom-up order.
  */


	TreeNode.prototype.getAncestors = function getAncestors() {
		var ancestors = [];
		var node = this.getParent();
		while (node) {
			ancestors.push(node);
			node = node.getParent();
		}
		return ancestors;
	};

	/**
  * Gets the child node of this node at the given index.
  * @param {number} index Child index.
  * @return {?TreeNode} The node at the given index
  * or null if not found.
  */


	TreeNode.prototype.getChildAt = function getChildAt(index) {
		return this.getChildren()[index] || null;
	};

	/**
  * @return {?Array<!TreeNode>} Child nodes or null in case of leaf node.
  */


	TreeNode.prototype.getChildren = function getChildren() {
		return this.children_ || TreeNode.EMPTY_ARRAY;
	};

	/**
  * @return {number} The number of children.
  */


	TreeNode.prototype.getChildCount = function getChildCount() {
		return this.getChildren().length;
	};

	/**
  * @return {number} The number of ancestors of the node.
  */


	TreeNode.prototype.getDepth = function getDepth() {
		var depth = 0;
		var node = this;
		while (node.getParent()) {
			depth++;
			node = node.getParent();
		}
		return depth;
	};

	/**
  * @return {?TreeNode} Parent node or null if it has no parent.
  */


	TreeNode.prototype.getParent = function getParent() {
		return this.parent_;
	};

	/**
  * @return {!TreeNode} The root of the tree structure, i.e. the farthest
  * ancestor of the node or the node itself if it has no parents.
  */


	TreeNode.prototype.getRoot = function getRoot() {
		var root = this;
		while (root.getParent()) {
			root = root.getParent();
		}
		return root;
	};

	/**
  * Gets the value.
  * @return {V} The value.
  */


	TreeNode.prototype.getValue = function getValue() {
		return this.value_;
	};

	/**
  * @return {boolean} Whether the node is a leaf node.
  */


	TreeNode.prototype.isLeaf = function isLeaf() {
		return !this.getChildCount();
	};

	/**
  * Removes the given child node of this node.
  * @param {TreeNode} child The node to remove.
  * @return {TreeNode} The removed node if any, null otherwise.
  */


	TreeNode.prototype.removeChild = function removeChild(child) {
		if (_metal.array.remove(this.getChildren(), child)) {
			return child;
		}
		return null;
	};

	/**
  * Sets the parent node of this node. The callers must ensure that the
  * parent node and only that has this node among its children.
  * @param {TreeNode} parent The parent to set. If null, the node will be
  * detached from the tree.
  * @protected
  */


	TreeNode.prototype.setParent = function setParent(parent) {
		this.parent_ = parent;
	};

	/**
  * Traverses the subtree. The first callback starts with this node,
  * and visits the descendant nodes depth-first, in preorder.
  * The second callback, starts with deepest child then visits
  * the ancestor nodes depth-first, in postorder. E.g.
  *
  *  	 A
  *    / \
  *   B   C
  *  /   / \
  * D   E   F
  *
  * preorder -> ['A', 'B', 'D', 'C', 'E', 'F']
  * postorder -> ['D', 'B', 'E', 'F', 'C', 'A']
  *
  * @param {function=} opt_preorderFn The callback to execute when visiting a node.
  * @param {function=} opt_postorderFn The callback to execute before leaving a node.
  */


	TreeNode.prototype.traverse = function traverse(opt_preorderFn, opt_postorderFn) {
		if (opt_preorderFn) {
			opt_preorderFn(this);
		}
		this.getChildren().forEach(function (child) {
			return child.traverse(opt_preorderFn, opt_postorderFn);
		});
		if (opt_postorderFn) {
			opt_postorderFn(this);
		}
	};

	return TreeNode;
}();

/**
 * Constant for empty array to avoid unnecessary allocations.
 * @private
 */


TreeNode.EMPTY_ARRAY = [];

/**
 * Asserts that child has no parent.
 * @param {TreeNode} child A child.
 * @private
 */
var assertChildHasNoParent = function assertChildHasNoParent(child) {
	if (child.getParent()) {
		throw new Error('Cannot add child with parent.');
	}
};

exports.default = TreeNode;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeNode = exports.MultiMap = undefined;

var _MultiMap = __webpack_require__(57);

var _MultiMap2 = _interopRequireDefault(_MultiMap);

var _TreeNode = __webpack_require__(58);

var _TreeNode2 = _interopRequireDefault(_TreeNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.MultiMap = _MultiMap2.default;
exports.TreeNode = _TreeNode2.default;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _TabsSoy = __webpack_require__(61);

var _TabsSoy2 = _interopRequireDefault(_TabsSoy);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalKeyboardFocus = __webpack_require__(47);

var _metalKeyboardFocus2 = _interopRequireDefault(_metalKeyboardFocus);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * UI Component to navigate through tabbed data.
 */
var Tabs = function (_Component) {
	_inherits(Tabs, _Component);

	function Tabs() {
		_classCallCheck(this, Tabs);

		return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
	}

	_createClass(Tabs, [{
		key: 'attached',

		/**
   * @inheritDoc
   */
		value: function attached() {
			this.keyboardFocusManager_ = new _metalKeyboardFocus2.default(this, 'a').setCircularLength(this.tabs.length).start();
		}

		/**
   * Adds a tab to the tabs array at the specified index if given or
   * appends it at the end.
   * @param {Object} tab
   * @param {number} index
   */

	}, {
		key: 'addTab',
		value: function addTab(tab, index) {
			if (_metal2.default.isNumber(index)) {
				this.tabs.splice(index, 0, tab);
			} else {
				this.tabs.push(tab);
			}

			this.tabs = this.tabs;
		}

		/**
   * Adds a tab to the tabs array at the specified index if given or
   * appends it at the end.
   * @param {string} label
   * @param {boolean} disabled
   * @param {number} index
   */

	}, {
		key: 'addTabByName',
		value: function addTabByName(label, disabled, index) {
			if (_metal2.default.isString(label)) {
				var tab = {
					label: label,
					disabled: disabled
				};

				if (!_metal2.default.isDef(disabled)) {
					tab.disabled = false;
				}

				this.addTab(tab, index);
			}
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'created',
		value: function created() {
			this.lastState_ = {
				tab: this.tab
			};

			this.on(Tabs.Events.CHANGE_REQUEST, this.defaultChangeRequestFn_, true);
		}

		/**
   * Default `changeRequest` function, sets new state of tabs.
   * @param {EventFacade} event
   * @protected
   */

	}, {
		key: 'defaultChangeRequestFn_',
		value: function defaultChangeRequestFn_(event) {
			this.setState_(event.state);
		}

		/**
   * Fires `changeRequest` event.
   * @param {Object} state
   * @protected
   */

	}, {
		key: 'dispatchRequest_',
		value: function dispatchRequest_(state) {
			this.emit(Tabs.Events.CHANGE_REQUEST, {
				lastState: this.lastState_,
				state: state,
				totalTabs: this.tabs.length
			});
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposed',
		value: function disposed() {
			this.keyboardFocusManager_.dispose();
			this.keyboardFocusManager_ = null;
		}

		/**
   * Removes the tab at the given index from the tabs array.
   * @return {number} Returns the index of the first tab which is not disabled.
   */

	}, {
		key: 'findFirstAvailableIndex_',
		value: function findFirstAvailableIndex_() {
			if (!this.disabled) {
				for (var i = 0; i < this.tabs.length; i++) {
					if (!this.tabs[i].disabled) {
						return i;
					}
				}
			}

			return -1;
		}

		/**
   * `onClick` handler for tab items.
   * @param {EventFacade} event
   */

	}, {
		key: 'onClickItem',
		value: function onClickItem(event) {
			var item = event.delegateTarget;

			event.preventDefault();

			var index = parseInt(item.getAttribute('data-index'));

			this.dispatchRequest_({
				tab: index
			});
		}

		/**
   * Removes the tab at the given index from the tabs array.
   * @param  {number} index
   * @return {Object} Returns the removed tab.
   */

	}, {
		key: 'removeTab',
		value: function removeTab(index) {
			if (_metal2.default.isNumber(index) && index > -1 && index < this.tabs.length) {
				var tabs = this.tabs.splice(index, 1);

				this.tabs = this.tabs;

				return tabs[0];
			}
		}

		/**
   * Set the new tabs state. The state is a payload object
   * containing the tab number, e.g. `{tab:1}`.
   * @param {Object} state
   * @protected
   */

	}, {
		key: 'setState_',
		value: function setState_(state) {
			this.tab = state.tab;

			this.lastState_ = state;
		}

		/**
   * Disables the tab at the given index in the tabs array.
   * @param  {number} index
   * @return {boolean} disabled
   */

	}, {
		key: 'setTabDisabled',
		value: function setTabDisabled(index, disabled) {
			if (_metal2.default.isNumber(index) && _metal2.default.isBoolean(disabled)) {
				this.tabs[index].disabled = disabled;

				this.tabs = this.tabs;
			}
		}

		/**
   * Synchronizes the component with the current value of the `tabs` state
   * property. Updates the length of the circular focus handling for tabs.
   */

	}, {
		key: 'syncTabs',
		value: function syncTabs() {
			if (this.keyboardFocusManager_) {
				this.keyboardFocusManager_.setCircularLength(this.tabs.length);
			}
		}

		/**
   * Toggles the disabled state of the tab at the given index in the tabs array.
   * If the tab at the given index is active, then the next nearest enabled tab
   * will become the new active tab.
   * @param  {number} index
   */

	}, {
		key: 'toggleTabDisabled',
		value: function toggleTabDisabled(index) {
			if (_metal2.default.isNumber(index) && index >= 0 && index < this.tabs.length) {
				this.tabs[index].disabled = !this.tabs[index].disabled;

				if (index === this.tab) {
					this.tab = this.findFirstAvailableIndex_();
				}

				this.tabs = this.tabs;
			}
		}
	}]);

	return Tabs;
}(_metalComponent2.default);

_metalSoy2.default.register(Tabs, _TabsSoy2.default);

Tabs.Events = {
	CHANGE_REQUEST: 'changeRequest'
};

/**
 * Default types used to style the tabs component.
 */
Tabs.TYPES = {
	NONE: 'none',
	PILLS: 'pills',
	TABS: 'tabs'
};

/**
 * State definition.
 * @type {!Object}
 * @static
 */
Tabs.STATE = {
	/**
  * Determines if the whole component should be disabled or not.
  * @type {boolean}
  * @default false
  */
	disabled: {
		validator: _metal2.default.isBoolean,
		value: false
	},

	/**
  * Tab to display on initial paint. It has two attributes, 'label', which is
  * required and 'disabled' which is optional.
  * @type {number}
  * @default Default will be set by the valueFn.
  */
	tab: {
		validator: _metal2.default.isNumber,
		valueFn: 'findFirstAvailableIndex_'
	},

	/**
  * Tabs array, holding the actual tabs.
  * @type {Array}
  * @default []
  */
	tabs: {
		validator: function validator(value) {
			return value.every(function (item) {
				return !!item.label;
			});
		},
		value: []
	},

	/**
  * Type currently being used to style the tabs component.
  * @type {string}
  * @default {string}
  */
	type: {
		validator: function validator(value) {
			return value.toUpperCase() in Tabs.TYPES;
		},
		value: Tabs.TYPES.TABS
	}
};

exports.default = Tabs;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Tabs = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from Tabs.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Tabs.
   * @public
   */

  goog.module('Tabs.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var $$temp;
    if (opt_data.tabs.length > 0) {
      ie_open('ul', null, null, 'class', 'nav ' + (opt_data.type != 'none' ? 'nav-' + opt_data.type : '') + ' ' + (($$temp = opt_data.elementClasses) == null ? '' : $$temp), 'role', 'tablist');
      var currentTabList37 = opt_data.tabs;
      var currentTabListLen37 = currentTabList37.length;
      for (var currentTabIndex37 = 0; currentTabIndex37 < currentTabListLen37; currentTabIndex37++) {
        var currentTabData37 = currentTabList37[currentTabIndex37];
        var isDisabled__soy10 = opt_data.disabled != null && opt_data.disabled || currentTabData37.disabled;
        var isCurrentTab__soy11 = opt_data.tab == currentTabIndex37;
        ie_open_start('li');
        iattr('class', (isDisabled__soy10 ? 'disabled' : '') + ' ' + (isCurrentTab__soy11 ? 'active' : ''));
        iattr('data-index', currentTabIndex37);
        if (!isDisabled__soy10 && !isCurrentTab__soy11) {
          iattr('data-onclick', 'onClickItem');
        }
        iattr('role', 'presentation');
        ie_open_end();
        ie_open_start('a');
        iattr('aria-expanded', isCurrentTab__soy11 ? 'true' : 'false');
        iattr('data-toggle', 'tab');
        iattr('data-unfocusable', isDisabled__soy10 ? 'true' : 'false');
        if (!isDisabled__soy10) {
          iattr('href', '#');
        }
        iattr('ref', 'tab-' + currentTabIndex37);
        iattr('role', 'tab');
        iattr('tabindex', isCurrentTab__soy11 ? '0' : '-1');
        ie_open_end();
        var dyn0 = currentTabData37.label;
        if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
        ie_close('a');
        ie_close('li');
      }
      ie_close('ul');
    }
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Tabs.render';
  }

  exports.render.params = ["tab", "tabs", "disabled", "elementClasses", "type"];
  exports.render.types = { "tab": "any", "tabs": "any", "disabled": "any", "elementClasses": "any", "type": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  return Tabs;
}(_metalComponent2.default);

_metalSoy2.default.register(Tabs, templates);
exports.Tabs = Tabs;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TooltipBase = exports.Tooltip = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

var _TooltipBase2 = __webpack_require__(64);

var _TooltipBase3 = _interopRequireDefault(_TooltipBase2);

var _TooltipSoy = __webpack_require__(63);

var _TooltipSoy2 = _interopRequireDefault(_TooltipSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tooltip component.
 */
var Tooltip = function (_TooltipBase) {
	_inherits(Tooltip, _TooltipBase);

	function Tooltip() {
		_classCallCheck(this, Tooltip);

		return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
	}

	_createClass(Tooltip, [{
		key: 'hideCompletely_',

		/**
   * Hides the alert completely (with display "none"). This is called after the
   * hiding animation is done.
   * @protected
   */
		value: function hideCompletely_() {
			if (!this.isDisposed() && this.element && !this.visible) {
				this.element.style.display = 'none';
			}
		}

		/**
   * State synchronization logic for `visible`. Updates the element's opacity,
   * since bootstrap uses opacity instead of display for tooltip visibility.
   * @param {boolean} visible
   */

	}, {
		key: 'syncVisible',
		value: function syncVisible(visible) {
			if (!visible) {
				_metalDom2.default.once(this.element, 'animationend', this.hideCompletely_.bind(this));
				_metalDom2.default.once(this.element, 'transitionend', this.hideCompletely_.bind(this));
			} else {
				this.element.style.display = '';
			}

			this.element.style.opacity = visible ? 1 : '';
			_get(Tooltip.prototype.__proto__ || Object.getPrototypeOf(Tooltip.prototype), 'syncVisible', this).call(this, visible);
		}
	}]);

	return Tooltip;
}(_TooltipBase3.default);

_metalSoy2.default.register(Tooltip, _TooltipSoy2.default);

/**
 * @inheritDoc
 * @see `Align` class.
 * @static
 */
Tooltip.Align = _TooltipBase3.default.Align;

exports.default = Tooltip;
exports.Tooltip = Tooltip;
exports.TooltipBase = _TooltipBase3.default;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.Tooltip = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from Tooltip.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Tooltip.
   * @public
   */

  goog.module('Tooltip.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  /**
   * @param {{
   *    alignedPosition: (?),
   *    elementClasses: (?),
   *    position: (?),
   *    title: (?soydata.SanitizedHtml|string|undefined)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    soy.asserts.assertType(opt_data.title == null || opt_data.title instanceof Function || opt_data.title instanceof goog.soy.data.SanitizedContent || opt_data.title instanceof soydata.UnsanitizedText || goog.isString(opt_data.title), 'title', opt_data.title, '?soydata.SanitizedHtml|string|undefined');
    var title = /** @type {?soydata.SanitizedHtml|string|undefined} */opt_data.title;
    var positionClasses__soy3 = ['top', 'top', 'right', 'bottom', 'bottom', 'bottom', 'left', 'top'];
    var currentPosition__soy4 = opt_data.alignedPosition != null ? opt_data.alignedPosition : opt_data.position;
    var positionClass__soy5 = currentPosition__soy4 != null ? positionClasses__soy3[currentPosition__soy4] : 'bottom';
    ie_open('div', null, null, 'class', 'tooltip ' + positionClass__soy5 + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''), 'role', 'tooltip');
    ie_void('div', null, null, 'class', 'tooltip-arrow');
    ie_open('section', null, null, 'class', 'tooltip-inner');
    if (title) {
      var dyn0 = title;
      if (typeof dyn0 == 'function') dyn0();else if (dyn0 != null) itext(dyn0);
    }
    ie_close('section');
    ie_close('div');
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'Tooltip.render';
  }

  exports.render.params = ["title", "alignedPosition", "elementClasses", "position"];
  exports.render.types = { "title": "html|string", "alignedPosition": "any", "elementClasses": "any", "position": "any" };
  exports.templates = templates = exports;
  return exports;
});

var Tooltip = function (_Component) {
  _inherits(Tooltip, _Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
  }

  return Tooltip;
}(_metalComponent2.default);

_metalSoy2.default.register(Tooltip, templates);
exports.Tooltip = Tooltip;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _metal = __webpack_require__(2);

var _metal2 = _interopRequireDefault(_metal);

var _metalDom = __webpack_require__(3);

var _metalDom2 = _interopRequireDefault(_metalDom);

var _metalPosition = __webpack_require__(7);

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalEvents = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The base class to be shared between components that have tooltip behavior.
 * This helps decouple this behavior logic from the UI, which may be different
 * between components. The Tooltip component itself extends from this, as does
 * the crystal Popover component, which can be accessed at metal/crystal-popover.
 */
var TooltipBase = function (_Component) {
	_inherits(TooltipBase, _Component);

	function TooltipBase() {
		_classCallCheck(this, TooltipBase);

		return _possibleConstructorReturn(this, (TooltipBase.__proto__ || Object.getPrototypeOf(TooltipBase)).apply(this, arguments));
	}

	_createClass(TooltipBase, [{
		key: 'attached',

		/**
   * @inheritDoc
   */
		value: function attached() {
			this.align();
			this.syncTriggerEvents(this.triggerEvents);
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'created',
		value: function created() {
			this.currentAlignElement = this.alignElement;
			this.eventHandler_ = new _metalEvents.EventHandler();
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'detached',
		value: function detached() {
			this.eventHandler_.removeAllListeners();
		}

		/**
   * @inheritDoc
   */

	}, {
		key: 'disposeInternal',
		value: function disposeInternal() {
			_get(TooltipBase.prototype.__proto__ || Object.getPrototypeOf(TooltipBase.prototype), 'disposeInternal', this).call(this);
			clearTimeout(this.delay_);
		}

		/**
   * Aligns the tooltip with the best region around alignElement. The best
   * region is defined by clockwise rotation starting from the specified
   * `position`. The element is always aligned in the middle of alignElement
   * axis.
   * @param {Element=} opt_alignElement Optional element to align with.
   */

	}, {
		key: 'align',
		value: function align(opt_alignElement) {
			this.syncCurrentAlignElement(opt_alignElement || this.currentAlignElement);
		}

		/**
   * @param {!function()} fn
   * @param {number} delay
   * @private
   */

	}, {
		key: 'callAsync_',
		value: function callAsync_(fn, delay) {
			clearTimeout(this.delay_);
			this.delay_ = setTimeout(fn.bind(this), delay);
		}

		/**
   * Handles hide event triggered by `events`.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleHide',
		value: function handleHide(event) {
			var delegateTarget = event.delegateTarget;
			var interactingWithDifferentTarget = delegateTarget && delegateTarget !== this.currentAlignElement;
			this.callAsync_(function () {
				if (this.locked_) {
					return;
				}
				if (interactingWithDifferentTarget) {
					this.currentAlignElement = delegateTarget;
				} else {
					this.visible = false;
					this.syncVisible(false);
				}
			}, this.delay[1]);
		}

		/**
   * Handles show event triggered by `events`.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleShow',
		value: function handleShow(event) {
			var delegateTarget = event.delegateTarget;
			_get(TooltipBase.prototype.__proto__ || Object.getPrototypeOf(TooltipBase.prototype), 'syncVisible', this).call(this, true);
			this.callAsync_(function () {
				this.currentAlignElement = delegateTarget;
				this.visible = true;
			}, this.delay[0]);
		}

		/**
   * Handles toggle event triggered by `events`.
   * @param {!Event} event
   * @protected
   */

	}, {
		key: 'handleToggle',
		value: function handleToggle(event) {
			if (this.visible) {
				this.handleHide(event);
			} else {
				this.handleShow(event);
			}
		}

		/**
   * Locks tooltip visibility.
   * @param {!Event} event
   */

	}, {
		key: 'lock',
		value: function lock() {
			this.locked_ = true;
		}

		/**
   * Unlocks tooltip visibility.
   * @param {!Event} event
   */

	}, {
		key: 'unlock',
		value: function unlock(event) {
			this.locked_ = false;
			this.handleHide(event);
		}

		/**
   * Synchronizes the value of the `currentAlignElement` internal state
   * with the `alignElement`.
   * @param {Element} alignElement
   */

	}, {
		key: 'syncAlignElement',
		value: function syncAlignElement(alignElement) {
			this.currentAlignElement = alignElement;
		}

		/**
   * State synchronization logic for `currentAlignElement`.
   * @param {Element} alignElement
   * @param {Element} prevAlignElement
   */

	}, {
		key: 'syncCurrentAlignElement',
		value: function syncCurrentAlignElement(alignElement, prevAlignElement) {
			if (prevAlignElement) {
				alignElement.removeAttribute('aria-describedby');
			}
			if (alignElement) {
				var dataTitle = alignElement.getAttribute('data-title');
				if (dataTitle) {
					this.title = dataTitle;
				}
				if (this.inDocument) {
					this.alignedPosition = TooltipBase.Align.align(this.element, alignElement, this.position);
				}
			}
		}

		/**
   * State synchronization logic for `position`.
   */

	}, {
		key: 'syncPosition',
		value: function syncPosition() {
			this.syncCurrentAlignElement(this.currentAlignElement);
		}

		/**
   * State synchronization logic for `selector`.
   */

	}, {
		key: 'syncSelector',
		value: function syncSelector() {
			this.syncTriggerEvents(this.triggerEvents);
		}

		/**
   * State synchronization logic for `triggerEvents`.
   * @param {!Array<string>} triggerEvents
   */

	}, {
		key: 'syncTriggerEvents',
		value: function syncTriggerEvents(triggerEvents) {
			if (!this.inDocument) {
				return;
			}
			this.eventHandler_.removeAllListeners();
			var selector = this.selector;
			if (!selector) {
				return;
			}

			this.eventHandler_.add(this.on('mouseenter', this.lock), this.on('mouseleave', this.unlock));

			if (triggerEvents[0] === triggerEvents[1]) {
				this.eventHandler_.add(_metalDom2.default.delegate(document, triggerEvents[0], selector, this.handleToggle.bind(this)));
			} else {
				this.eventHandler_.add(_metalDom2.default.delegate(document, triggerEvents[0], selector, this.handleShow.bind(this)), _metalDom2.default.delegate(document, triggerEvents[1], selector, this.handleHide.bind(this)));
			}
		}

		/**
   * State synchronization logic for `visible`. Realigns the tooltip.
   */

	}, {
		key: 'syncVisible',
		value: function syncVisible() {
			this.align();
		}
	}]);

	return TooltipBase;
}(_metalComponent2.default);

/**
 * @inheritDoc
 * @see `Align` class.
 * @static
 */


TooltipBase.Align = _metalPosition.Align;

/**
 * TooltipBase state definition.
 * @type {!Object}
 * @static
 */
TooltipBase.STATE = {
	/**
  * The current position of the tooltip after being aligned via `Align.align`.
  * @type {number}
  */
	alignedPosition: {
		validator: TooltipBase.Align.isValidPosition
	},

	/**
  * Element to align tooltip with.
  * @type {Element}
  */
	alignElement: {
		setter: _metalDom2.default.toElement
	},

	/**
  * The current element aligned tooltip with.
  * @type {Element}
  */
	currentAlignElement: {
		internal: true,
		setter: _metalDom2.default.toElement
	},

	/**
  * Delay showing and hiding the tooltip (ms).
  * @type {!Array<number>}
  * @default [ 500, 250 ]
  */
	delay: {
		validator: Array.isArray,
		value: [500, 250]
	},

	/**
  * Trigger events used to bind handlers to show and hide tooltip.
  * @type {!Array<string>}
  * @default ['mouseenter', 'mouseleave']
  */
	triggerEvents: {
		validator: Array.isArray,
		value: ['mouseenter', 'mouseleave']
	},

	/**
  * If a selector is provided, tooltip objects will be delegated to the
  * specified targets by setting the `alignElement`.
  * @type {?string}
  */
	selector: {
		validator: _metal2.default.isString
	},

	/**
  * The position to try alignment. If not possible the best position will be
  * found.
  * @type {number}
  * @default Align.Bottom
  */
	position: {
		validator: TooltipBase.Align.isValidPosition,
		value: TooltipBase.Align.Bottom
	},

	/**
  * Content to be placed inside tooltip.
  * @type {string}
  */
	title: {}
};

/**
 * CSS classes used for each align position.
 * @type {!Array}
 * @static
 */
TooltipBase.PositionClasses = ['top', 'right', 'bottom', 'left'];

exports.default = TooltipBase;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _metal = __webpack_require__(2);

var _parse = __webpack_require__(66);

var _parse2 = _interopRequireDefault(_parse);

var _metalStructs = __webpack_require__(59);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parseFn_ = _parse2.default;

var Uri = function () {

	/**
  * This class contains setters and getters for the parts of the URI.
  * The following figure displays an example URIs and their component parts.
  *
  *                                  path
  *	                             ┌───┴────┐
  *	  abc://example.com:123/path/data?key=value#fragid1
  *	  └┬┘   └────┬────┘ └┬┘           └───┬───┘ └──┬──┘
  * protocol  hostname  port            search    hash
  *          └──────┬───────┘
  *                host
  *
  * @param {*=} opt_uri Optional string URI to parse
  * @constructor
  */
	function Uri() {
		var opt_uri = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

		_classCallCheck(this, Uri);

		this.url = Uri.parse(this.maybeAddProtocolAndHostname_(opt_uri));
	}

	/**
  * Adds parameters to uri from a <code>MultiMap</code> as source.
  * @param {MultiMap} multimap The <code>MultiMap</code> containing the
  *   parameters.
  * @protected
  * @chainable
  */


	_createClass(Uri, [{
		key: 'addParametersFromMultiMap',
		value: function addParametersFromMultiMap(multimap) {
			var _this = this;

			multimap.names().forEach(function (name) {
				multimap.getAll(name).forEach(function (value) {
					_this.addParameterValue(name, value);
				});
			});
			return this;
		}

		/**
   * Adds the value of the named query parameters.
   * @param {string} key The parameter to set.
   * @param {*} value The new value. Will be explicitly casted to String.
   * @chainable
   */

	}, {
		key: 'addParameterValue',
		value: function addParameterValue(name, value) {
			this.ensureQueryInitialized_();
			if ((0, _metal.isDef)(value)) {
				value = String(value);
			}
			this.query.add(name, value);
			return this;
		}

		/**
   * Adds the values of the named query parameter.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'addParameterValues',
		value: function addParameterValues(name, values) {
			var _this2 = this;

			values.forEach(function (value) {
				return _this2.addParameterValue(name, value);
			});
			return this;
		}

		/**
   * Ensures query internal map is initialized and synced with initial value
   * extracted from URI search part.
   * @protected
   */

	}, {
		key: 'ensureQueryInitialized_',
		value: function ensureQueryInitialized_() {
			var _this3 = this;

			if (this.query) {
				return;
			}
			this.query = new _metalStructs.MultiMap();
			var search = this.url.search;
			if (search) {
				search.substring(1).split('&').forEach(function (param) {
					var _param$split = param.split('=');

					var _param$split2 = _slicedToArray(_param$split, 2);

					var key = _param$split2[0];
					var value = _param$split2[1];

					if ((0, _metal.isDef)(value)) {
						value = Uri.urlDecode(value);
					}
					_this3.addParameterValue(key, value);
				});
			}
		}

		/**
   * Gets the hash part of uri.
   * @return {string}
   */

	}, {
		key: 'getHash',
		value: function getHash() {
			return this.url.hash || '';
		}

		/**
   * Gets the host part of uri. E.g. <code>[hostname]:[port]</code>.
   * @return {string}
   */

	}, {
		key: 'getHost',
		value: function getHost() {
			var host = this.getHostname();
			if (host) {
				var port = this.getPort();
				if (port && port !== '80') {
					host += ':' + port;
				}
			}
			return host;
		}

		/**
   * Gets the hostname part of uri without protocol and port.
   * @return {string}
   */

	}, {
		key: 'getHostname',
		value: function getHostname() {
			var hostname = this.url.hostname;
			if (hostname === Uri.HOSTNAME_PLACEHOLDER) {
				return '';
			}
			return hostname;
		}

		/**
   * Gets the origin part of uri. E.g. <code>http://[hostname]:[port]</code>.
   * @return {string}
   */

	}, {
		key: 'getOrigin',
		value: function getOrigin() {
			var host = this.getHost();
			if (host) {
				return this.getProtocol() + '//' + host;
			}
			return '';
		}

		/**
   * Returns the first value for a given parameter or undefined if the given
   * parameter name does not appear in the query string.
   * @param {string} paramName Unescaped parameter name.
   * @return {string|undefined} The first value for a given parameter or
   *   undefined if the given parameter name does not appear in the query
   *   string.
   */

	}, {
		key: 'getParameterValue',
		value: function getParameterValue(name) {
			this.ensureQueryInitialized_();
			return this.query.get(name);
		}

		/**
   * Returns the value<b>s</b> for a given parameter as a list of decoded
   * query parameter values.
   * @param {string} name The parameter to get values for.
   * @return {!Array<?>} The values for a given parameter as a list of decoded
   *   query parameter values.
   */

	}, {
		key: 'getParameterValues',
		value: function getParameterValues(name) {
			this.ensureQueryInitialized_();
			return this.query.getAll(name);
		}

		/**
   * Returns the name<b>s</b> of the parameters.
   * @return {!Array<string>} The names for the parameters as a list of
   *   strings.
   */

	}, {
		key: 'getParameterNames',
		value: function getParameterNames() {
			this.ensureQueryInitialized_();
			return this.query.names();
		}

		/**
   * Gets the function currently being used to parse URIs.
   * @return {!function()}
   */

	}, {
		key: 'getPathname',


		/**
   * Gets the pathname part of uri.
   * @return {string}
   */
		value: function getPathname() {
			return this.url.pathname;
		}

		/**
   * Gets the port number part of uri as string.
   * @return {string}
   */

	}, {
		key: 'getPort',
		value: function getPort() {
			return this.url.port;
		}

		/**
   * Gets the protocol part of uri. E.g. <code>http:</code>.
   * @return {string}
   */

	}, {
		key: 'getProtocol',
		value: function getProtocol() {
			return this.url.protocol;
		}

		/**
   * Gets the search part of uri. Search value is retrieved from query
   * parameters.
   * @return {string}
   */

	}, {
		key: 'getSearch',
		value: function getSearch() {
			var _this4 = this;

			var search = '';
			var querystring = '';
			this.getParameterNames().forEach(function (name) {
				_this4.getParameterValues(name).forEach(function (value) {
					querystring += name;
					if ((0, _metal.isDef)(value)) {
						querystring += '=' + encodeURIComponent(value);
					}
					querystring += '&';
				});
			});
			querystring = querystring.slice(0, -1);
			if (querystring) {
				search += '?' + querystring;
			}
			return search;
		}

		/**
   * Checks if uri contains the parameter.
   * @param {string} name
   * @return {boolean}
   */

	}, {
		key: 'hasParameter',
		value: function hasParameter(name) {
			this.ensureQueryInitialized_();
			return this.query.contains(name);
		}

		/**
   * Makes this URL unique by adding a random param to it. Useful for avoiding
   * cache.
   */

	}, {
		key: 'makeUnique',
		value: function makeUnique() {
			this.setParameterValue(Uri.RANDOM_PARAM, _metal.string.getRandomString());
			return this;
		}

		/**
   * Maybe adds protocol and a hostname placeholder on a parial URI if needed.
   * Relevent for compatibility with <code>URL</code> native object.
   * @param {string=} opt_uri
   * @return {string} URI with protocol and hostname placeholder.
   */

	}, {
		key: 'maybeAddProtocolAndHostname_',
		value: function maybeAddProtocolAndHostname_(opt_uri) {
			var url = opt_uri;
			if (opt_uri.indexOf('://') === -1 && opt_uri.indexOf('javascript:') !== 0) {
				// jshint ignore:line

				url = Uri.DEFAULT_PROTOCOL;
				if (opt_uri[0] !== '/' || opt_uri[1] !== '/') {
					url += '//';
				}

				switch (opt_uri.charAt(0)) {
					case '.':
					case '?':
					case '#':
						url += Uri.HOSTNAME_PLACEHOLDER;
						url += '/';
						url += opt_uri;
						break;
					case '':
					case '/':
						if (opt_uri[1] !== '/') {
							url += Uri.HOSTNAME_PLACEHOLDER;
						}
						url += opt_uri;
						break;
					default:
						url += opt_uri;
				}
			}
			return url;
		}

		/**
   * Normalizes the parsed object to be in the expected standard.
   * @param {!Object}
   */

	}, {
		key: 'removeParameter',


		/**
   * Removes the named query parameter.
   * @param {string} name The parameter to remove.
   * @chainable
   */
		value: function removeParameter(name) {
			this.ensureQueryInitialized_();
			this.query.remove(name);
			return this;
		}

		/**
   * Removes uniqueness parameter of the uri.
   * @chainable
   */

	}, {
		key: 'removeUnique',
		value: function removeUnique() {
			this.removeParameter(Uri.RANDOM_PARAM);
			return this;
		}

		/**
   * Sets the hash.
   * @param {string} hash
   * @chainable
   */

	}, {
		key: 'setHash',
		value: function setHash(hash) {
			this.url.hash = hash;
			return this;
		}

		/**
   * Sets the hostname.
   * @param {string} hostname
   * @chainable
   */

	}, {
		key: 'setHostname',
		value: function setHostname(hostname) {
			this.url.hostname = hostname;
			return this;
		}

		/**
   * Sets the value of the named query parameters, clearing previous values
   * for that key.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'setParameterValue',
		value: function setParameterValue(name, value) {
			this.removeParameter(name);
			this.addParameterValue(name, value);
			return this;
		}

		/**
   * Sets the values of the named query parameters, clearing previous values
   * for that key.
   * @param {string} key The parameter to set.
   * @param {*} value The new value.
   * @chainable
   */

	}, {
		key: 'setParameterValues',
		value: function setParameterValues(name, values) {
			var _this5 = this;

			this.removeParameter(name);
			values.forEach(function (value) {
				return _this5.addParameterValue(name, value);
			});
			return this;
		}

		/**
   * Sets the pathname.
   * @param {string} pathname
   * @chainable
   */

	}, {
		key: 'setPathname',
		value: function setPathname(pathname) {
			this.url.pathname = pathname;
			return this;
		}

		/**
   * Sets the port number.
   * @param {*} port Port number.
   * @chainable
   */

	}, {
		key: 'setPort',
		value: function setPort(port) {
			this.url.port = port;
			return this;
		}

		/**
   * Sets the function that will be used for parsing the original string uri
   * into an object.
   * @param {!function()} parseFn
   */

	}, {
		key: 'setProtocol',


		/**
   * Sets the protocol. If missing <code>http:</code> is used as default.
   * @param {string} protocol
   * @chainable
   */
		value: function setProtocol(protocol) {
			this.url.protocol = protocol;
			if (this.url.protocol[this.url.protocol.length - 1] !== ':') {
				this.url.protocol += ':';
			}
			return this;
		}

		/**
   * @return {string} The string form of the url.
   * @override
   */

	}, {
		key: 'toString',
		value: function toString() {
			var href = '';
			var host = this.getHost();
			if (host) {
				href += this.getProtocol() + '//';
			}
			href += host + this.getPathname() + this.getSearch() + this.getHash();
			return href;
		}

		/**
   * Joins the given paths.
   * @param {string} basePath
   * @param {...string} ...paths Any number of paths to be joined with the base url.
   * @static
   */

	}], [{
		key: 'getParseFn',
		value: function getParseFn() {
			return parseFn_;
		}
	}, {
		key: 'normalizeObject',
		value: function normalizeObject(parsed) {
			var length = parsed.pathname ? parsed.pathname.length : 0;
			if (length > 1 && parsed.pathname[length - 1] === '/') {
				parsed.pathname = parsed.pathname.substr(0, length - 1);
			}
			return parsed;
		}

		/**
   * Parses the given uri string into an object.
   * @param {*=} opt_uri Optional string URI to parse
   */

	}, {
		key: 'parse',
		value: function parse(opt_uri) {
			return Uri.normalizeObject(parseFn_(opt_uri));
		}
	}, {
		key: 'setParseFn',
		value: function setParseFn(parseFn) {
			parseFn_ = parseFn;
		}
	}, {
		key: 'joinPaths',
		value: function joinPaths(basePath) {
			for (var _len = arguments.length, paths = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				paths[_key - 1] = arguments[_key];
			}

			if (basePath.charAt(basePath.length - 1) === '/') {
				basePath = basePath.substring(0, basePath.length - 1);
			}
			paths = paths.map(function (path) {
				return path.charAt(0) === '/' ? path.substring(1) : path;
			});
			return [basePath].concat(paths).join('/').replace(/\/$/, '');
		}

		/**
   * URL-decodes the string. We need to specially handle '+'s because
   * the javascript library doesn't convert them to spaces.
   * @param {string} str The string to url decode.
   * @return {string} The decoded {@code str}.
   */

	}, {
		key: 'urlDecode',
		value: function urlDecode(str) {
			return decodeURIComponent(str.replace(/\+/g, ' '));
		}
	}]);

	return Uri;
}();

/**
 * Default protocol value.
 * @type {string}
 * @default http:
 * @static
 */


Uri.DEFAULT_PROTOCOL = 'http:';

/**
 * Hostname placeholder. Relevant to internal usage only.
 * @type {string}
 * @static
 */
Uri.HOSTNAME_PLACEHOLDER = 'hostname' + Date.now();

/**
 * Name used by the param generated by `makeUnique`.
 * @type {string}
 * @static
 */
Uri.RANDOM_PARAM = 'zx';

exports.default = Uri;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _metal = __webpack_require__(2);

var _parseFromAnchor = __webpack_require__(67);

var _parseFromAnchor2 = _interopRequireDefault(_parseFromAnchor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Parses the given uri string into an object. The URL function will be used
 * when present, otherwise we'll fall back to the anchor node element.
 * @param {*=} opt_uri Optional string URI to parse
 */
function parse(opt_uri) {
	if ((0, _metal.isFunction)(URL) && URL.length) {
		return new URL(opt_uri);
	} else {
		return (0, _parseFromAnchor2.default)(opt_uri);
	}
}

exports.default = parse;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Parses the given uri string into an object.
 * @param {*=} opt_uri Optional string URI to parse
 */

Object.defineProperty(exports, "__esModule", {
	value: true
});
function parseFromAnchor(opt_uri) {
	var link = document.createElement('a');
	link.href = opt_uri;
	return {
		hash: link.hash,
		hostname: link.hostname,
		password: link.password,
		pathname: link.pathname[0] === '/' ? link.pathname : '/' + link.pathname,
		port: link.port,
		protocol: link.protocol,
		search: link.search,
		username: link.username
	};
}

exports.default = parseFromAnchor;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Uri = __webpack_require__(65).default;

if (typeof document === 'undefined') {
	// If there's no document, then this should be running in NodeJS, and so
	// we should use the "url" node module as the parse function.

	var path = __webpack_require__(69);
	var url = __webpack_require__(74);
	Uri.setParseFn(function(urlStr) {
		var parsed = url.parse(urlStr);
		parsed.pathname = path.normalize(parsed.pathname);
		return parsed;
	});
}

module.exports = Uri;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return punycode;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(76)(module), __webpack_require__(77)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(71);
exports.encode = exports.stringify = __webpack_require__(72);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(70);
var util = __webpack_require__(75);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(73);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.jbIkp = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from buttons.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace jbIkp.
   * @public
   */

  goog.module('jbIkp.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param204 = function param204() {
      ie_open('h3');
      itext('Description');
      ie_close('h3');
      ie_open('p');
      itext('Buttons communicate an action to happen on user interaction.');
      ie_close('p');
      ie_open('h3');
      itext('Types');
      ie_close('h3');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Type');
      ie_close('th');
      ie_open('th');
      itext('Usage');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonPrimaryDefaultDefault@2x.png 2x', 'src', '../../../images/buttonPrimaryDefaultDefault.png', 'alt', 'button primary default size defuault state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Primary');
      ie_close('strong');
      itext(': The primary button is always use for the most important actions. There can\'t be two primery actions together or near by.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonSecondaryDefaultDefault@2x.png 2x', 'src', '../../../images/buttonSecondaryDefaultDefault.png', 'alt', 'button secondary default size defuault state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Secondary');
      ie_close('strong');
      itext(': The default button is used for secondary actions.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonLinkDefaultDefault@2x.png 2x', 'src', '../../../images/buttonLinkDefaultDefault.png', 'alt', 'button link default size defuault state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Link');
      ie_close('strong');
      itext(': The link button is used for tertiary actions or opposite actions to the primary one.');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('h3');
      itext('States');
      ie_close('h3');
      ie_open('h4');
      itext('Default state');
      ie_close('h4');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonsDefault@2x.png 2x', 'src', '../../../images/buttonsDefault.png', 'alt', 'set of three button types in default state');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Active & Hover states');
      ie_close('h4');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonsActive@2x.png 2x', 'src', '../../../images/buttonsActive.png', 'alt', 'set of three button types in active state');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Disable state');
      ie_close('h4');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonsDisabled@2x.png 2x', 'src', '../../../images/buttonsDisabled.png', 'alt', 'set of three button types in disabled state');
      ie_close('img');
      ie_close('p');
      ie_open('h3');
      itext('Sizes');
      ie_close('h3');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Size');
      ie_close('th');
      ie_open('th');
      itext('Usage');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonPrimaryLargeDefault@2x.png 2x', 'src', '../../../images/buttonPrimaryLargeDefault.png', 'alt', 'button primary large size disable state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Large');
      ie_close('strong');
      itext(': Used for main page actions like Save or Cancel.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonPrimaryDefaultDefault@2x.png 2x', 'src', '../../../images/buttonPrimaryDefaultDefault.png', 'alt', 'button primary default size disable state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Default');
      ie_close('strong');
      itext(': Used for actions inside a page, like dropdowns, button groups, split buttons.');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      ie_open('img', null, null, 'srcset', '../../../images/buttonPrimarySmallDefault@2x.png 2x', 'src', '../../../images/buttonPrimarySmallDefault.png', 'alt', 'button primary small size disable state');
      ie_close('img');
      ie_close('td');
      ie_open('td');
      ie_open('strong');
      itext('Small');
      ie_close('strong');
      itext(': Use it on reduced spaces.');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('h3');
      itext('Variations');
      ie_close('h3');
      ie_open('h4');
      itext('Icon button');
      ie_close('h4');
      ie_open('p');
      itext('Buttons can icons insted of text and for that icons need to be monospaced inside the button. Lexicon do not use buttons with text and icon, or text and loading indicator. Icon buttons are used intensively in ');
      ie_open('a', null, null, 'href', './management_bar.html');
      itext('management bars');
      ie_close('a');
      itext('.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonIcon@2x.png 2x', 'src', '../../../images/buttonIcon.png', 'alt', 'icon button');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Block level button');
      ie_close('h4');
      ie_open('p');
      itext('All buttons can also be configured at block level. Use this configuration in those cases that you need the user to realize there is an important action to be done. It could be used as a load more action below a list, as an example. Please do not use it in forms. Be always careful with the type button to use, primary is not always the best choice neither the only configuration.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonBlockLevelPrimary@2x.png 2x', 'src', '../../../images/buttonBlockLevelPrimary.png', 'alt', 'block level button primary state, default size');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Dropdown button');
      ie_close('h4');
      ie_open('p');
      itext('Dropdown buttons are always used together with a dropdown menu.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonDropdownDefault@2x.png 2x', 'src', '../../../images/buttonDropdownDefault.png', 'alt', 'dropdown button default size');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Split button');
      ie_close('h4');
      ie_open('p');
      itext('Split buttons are used in those cases where you need to offer the user a quick main action but salso secondary actions.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonSplitDefault@2x.png 2x', 'src', '../../../images/buttonSplitDefault.png', 'alt', 'button splitted default size');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Button group');
      ie_close('h4');
      ie_open('p');
      itext('Button groups are used to switch between complementary views for example, but they must never be used for complementary actions and "Change and Cancel" or "Save and Cancel". In those cases the use of single buttons is the correct solution.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonGroupDefault@2x.png 2x', 'src', '../../../images/buttonGroupDefault.png', 'alt', 'button gruop or segmented button, 3 segments, default size');
      ie_close('img');
      ie_close('p');
      ie_open('h4');
      itext('Action button');
      ie_close('h4');
      ie_open('p');
      itext('The action button is always a primary button with a special size of 64x64 due to its importance. This button floats on the bottom right corner of the screen. It contains all the adding or creating actions in a context. When there is only one action to perform in the page where it is used the button triggers the action. In case there are more that one actions, all the actions appear listed in a dropdown panel that is triggered on click interaction with the button. Once selected the action in the list, the dropdown is closed.');
      ie_close('p');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonPlus@2x.png 2x', 'src', '../../../images/buttonPlus.png', 'alt', 'plus button or button actions');
      ie_close('img');
      ie_close('p');
      ie_open('h3');
      itext('Attributes');
      ie_close('h3');
      ie_open('p');
      ie_open('img', null, null, 'srcset', '../../../images/buttonAttributtes@2x.png 2x', 'src', '../../../images/buttonAttributtes.png', 'alt', 'button attributtes');
      ie_close('img');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param204 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'jbIkp.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "any", "site": "any" };
  exports.templates = templates = exports;
  return exports;
});

var jbIkp = function (_Component) {
  _inherits(jbIkp, _Component);

  function jbIkp() {
    _classCallCheck(this, jbIkp);

    return _possibleConstructorReturn(this, (jbIkp.__proto__ || Object.getPrototypeOf(jbIkp)).apply(this, arguments));
  }

  return jbIkp;
}(_metalComponent2.default);

_metalSoy2.default.register(jbIkp, templates);
exports.jbIkp = jbIkp;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ }),
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(0);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(15);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(16);

__webpack_require__(17);

var _buttonsSoy = __webpack_require__(117);

var _buttonsSoy2 = _interopRequireDefault(_buttonsSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jbIkp = function (_Component) {
  _inherits(jbIkp, _Component);

  function jbIkp() {
    _classCallCheck(this, jbIkp);

    return _possibleConstructorReturn(this, (jbIkp.__proto__ || Object.getPrototypeOf(jbIkp)).apply(this, arguments));
  }

  return jbIkp;
}(_metalComponent2.default);

;

_metalSoy2.default.register(jbIkp, _buttonsSoy2.default);

exports.default = jbIkp;

/***/ })
],[221]);