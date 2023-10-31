function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n=globalThis,r={},a={},o=n.parcelRequire3032;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},n.parcelRequire3032=o);var i=o.register;i("7B2bR",function(t,n){var r,a,i;e(t.exports,"Fragment",()=>r,e=>r=e),e(t.exports,"jsx",()=>a,e=>a=e),e(t.exports,"jsxs",()=>i,e=>i=e),function(){var e,t,n,l,u,s,c,d,f,p,h,m,v,y,g=o("acw62"),b=Symbol.for("react.element"),w=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),E=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),L=Symbol.iterator,N=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function I(e){for(var t,n,r,a,o=arguments.length,i=Array(o>1?o-1:0),l=1;l<o;l++)i[l-1]=arguments[l];t=e,n=i,""!==(r=N.ReactDebugCurrentFrame.getStackAddendum())&&(t+="%s",n=n.concat([r])),(a=n.map(function(e){return String(e)})).unshift("Warning: "+t),// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console.error,console,a)}function M(e){return e.displayName||"Context"}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function z(e){if(null==e)return null;if("number"==typeof e.tag&&I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case k:return"Fragment";case w:return"Portal";case x:return"Profiler";case S:return"StrictMode";case T:return"Suspense";case _:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case E:return M(e)+".Consumer";case C:return M(e._context)+".Provider";case R:return function(e,t,n){var r=e.displayName;if(r)return r;var a=t.displayName||t.name||"";return""!==a?n+"("+a+")":n}// Keep in sync with react-reconciler/getComponentNameFromFiber
(e,e.render,"ForwardRef");case P:var t=e.displayName||null;if(null!==t)return t;return z(e.type)||"Memo";case D:var n=e._payload,r=e._init;try{return z(r(n))}catch(e){}}return null}e=Symbol.for("react.module.reference");var j=Object.assign,U=0;function A(){}A.__reactDisabledLog=!0;var F=N.ReactCurrentDispatcher;function W(e,t,n){if(void 0===f)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);f=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+f+e}var B=!1;function V(e,r){// If something asked for a stack inside a fake render, it should get ignored.
if(!e||B)return"";var a,o,i=p.get(e);if(void 0!==i)return i;B=!0;var f=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,o=F.current,// for warnings.
F.current=null,function(){if(0===U){/* eslint-disable react-internal/no-production-logging */t=console.log,n=console.info,l=console.warn,u=console.error,s=console.group,c=console.groupCollapsed,d=console.groupEnd;var e={configurable:!0,enumerable:!0,value:A,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e});/* eslint-enable react-internal/no-production-logging */}U++}();try{// This should throw.
if(r){// Something should be setting the props in the constructor.
var h=function(){throw Error()};// $FlowFixMe
if(Object.defineProperty(h.prototype,"props",{set:function(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"==typeof Reflect&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(h,[])}catch(e){a=e}Reflect.construct(e,[],h)}else{try{h.call()}catch(e){a=e}e.call(h.prototype)}}else{try{throw Error()}catch(e){a=e}e()}}catch(t){// This is inlined manually because closure doesn't do it for us.
if(t&&a&&"string"==typeof t.stack){for(// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var m=t.stack.split("\n"),v=a.stack.split("\n"),y=m.length-1,g=v.length-1;y>=1&&g>=0&&m[y]!==v[g];)// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
g--;for(;y>=1&&g>=0;y--,g--)// frame that called our sample function and the control.
if(m[y]!==v[g]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==y||1!==g)do // The next one that isn't the same should be our match though.
if(y--,--g<0||m[y]!==v[g]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var b="\n"+m[y].replace(" at new "," at ");// If our component frame is labeled "<anonymous>"
return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),"function"==typeof e&&p.set(e,b),b}while(y>=1&&g>=0)break}}}finally{B=!1,F.current=o,function(){if(0==--U){/* eslint-disable react-internal/no-production-logging */var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:j({},e,{value:t}),info:j({},e,{value:n}),warn:j({},e,{value:l}),error:j({},e,{value:u}),group:j({},e,{value:s}),groupCollapsed:j({},e,{value:c}),groupEnd:j({},e,{value:d})});/* eslint-enable react-internal/no-production-logging */}U<0&&I("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=f}// Fallback to just using the name if we couldn't make it throw.
var w=e?e.displayName||e.name:"",k=w?W(w):"";return"function"==typeof e&&p.set(e,k),k}function H(e,t,n){if(null==e)return"";if("function"==typeof e)return V(e,!!((r=e.prototype)&&r.isReactComponent));if("string"==typeof e)return W(e);switch(e){case T:return W("Suspense");case _:return W("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case R:return V(e.render,!1);case P:// Memo may contain any component type so we recursively resolve it.
return H(e.type,t,n);case D:var r,a=e._payload,o=e._init;try{// Lazy may contain any component type so we recursively resolve it.
return H(o(a),t,n)}catch(e){}}return""}p=new("function"==typeof WeakMap?WeakMap:Map);var $=Object.prototype.hasOwnProperty,Y={},q=N.ReactDebugCurrentFrame;function Q(e){if(e){var t=e._owner,n=H(e.type,e._source,t?t.type:null);q.setExtraStackFrame(n)}else q.setExtraStackFrame(null)}var K=Array.isArray;// eslint-disable-next-line no-redeclare
function G(e){if(function(e){try{return!1}catch(e){return!0}}(e))return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.","function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"),""+e;// throw (to help callers find troubleshooting comments)
}var X=N.ReactCurrentOwner,J={key:!0,ref:!0,__self:!0,__source:!0};v={};/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */var Z=function(e,t,n,r,a,o,i){var l={// This tag allows us to uniquely identify this as a React Element
$$typeof:b,// Built-in properties that belong on the element
type:e,key:t,ref:n,props:i,// Record the component responsible for creating this element.
_owner:o};return(// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
l._store={},// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l)},ee=N.ReactCurrentOwner,et=N.ReactDebugCurrentFrame;function en(e){if(e){var t=e._owner,n=H(e.type,e._source,t?t.type:null);et.setExtraStackFrame(n)}else et.setExtraStackFrame(null)}/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */function er(e){return"object"==typeof e&&null!==e&&e.$$typeof===b}function ea(){if(ee.current){var e=z(ee.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}y=!1;/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var eo={};/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function ei(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=ea();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!eo[n]){eo[n]=!0;// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==ee.current&&(r=" It was passed a child from "+z(e._owner.type)+"."),en(e),I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),en(null)}}}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function el(e,t){if("object"==typeof e){if(K(e))for(var n=0;n<e.length;n++){var r=e[n];er(r)&&ei(r,t)}else if(er(e))e._store&&(e._store.validated=!0);else if(e){var a=function(e){if(null===e||"object"!=typeof e)return null;var t=L&&e[L]||e["@@iterator"];return"function"==typeof t?t:null}(e);if("function"==typeof a&&a!==e.entries)for(var o,i=a.call(e);!(o=i.next()).done;)er(o.value)&&ei(o.value,t)}}}function eu(t,n,r,a,o,i){var l="string"==typeof t||"function"==typeof t||t===k||t===x||t===S||t===T||t===_||t===O||"object"==typeof t&&null!==t&&(t.$$typeof===D||t.$$typeof===P||t.$$typeof===C||t.$$typeof===E||t.$$typeof===R||// This needs to include all possible module reference object
// types supported by any Flight configuration anywhere since
// we don't know which Flight build this will end up being used
// with.
t.$$typeof===e||void 0!==t.getModuleId);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!l){var u,s="";(void 0===t||"object"==typeof t&&null!==t&&0===Object.keys(t).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var c=void 0!==o?"\n\nCheck your code at "+o.fileName.replace(/^.*[\\\/]/,"")+":"+o.lineNumber+".":"";(c?s+=c:s+=ea(),null===t)?u="null":K(t)?u="array":void 0!==t&&t.$$typeof===b?(u="<"+(z(t.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):u=typeof t,I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",u,s)}var d=/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */function(e,t,n,r,a){var o,i={},l=null,u=null;for(o in void 0!==n&&(G(n),l=""+n),function(e){if($.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}(t)&&(G(t.key),l=""+t.key),function(e){if($.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}(t)&&(u=t.ref,function(e,t){if("string"==typeof e.ref&&X.current&&t&&X.current.stateNode!==t){var n=z(X.current.type);v[n]||(I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',z(X.current.type),e.ref),v[n]=!0)}}(t,a)),t)$.call(t,o)&&!J.hasOwnProperty(o)&&(i[o]=t[o]);// Resolve default props
if(e&&e.defaultProps){var s=e.defaultProps;for(o in s)void 0===i[o]&&(i[o]=s[o])}if(l||u){var c,d,f="function"==typeof e?e.displayName||e.name||"Unknown":e;l&&((c=function(){h||(h=!0,I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",f))}).isReactWarning=!0,Object.defineProperty(i,"key",{get:c,configurable:!0})),u&&((d=function(){m||(m=!0,I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",f))}).isReactWarning=!0,Object.defineProperty(i,"ref",{get:d,configurable:!0}))}return Z(e,l,u,a,r,X.current,i)}(t,n,r,o,i);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==d)return d;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(l){var f=n.children;if(void 0!==f){if(a){if(K(f)){for(var p=0;p<f.length;p++)el(f[p],t);Object.freeze&&Object.freeze(f)}else I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.")}else el(f,t)}}return t===k?/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */function(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){en(e),I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),en(null);break}}null!==e.ref&&(en(e),I("Invalid attribute `ref` supplied to `React.Fragment`."),en(null))}(d):/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function(e){var t,n=e.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)t=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==R&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
n.$$typeof!==P)return;t=n.propTypes}if(t){// Intentionally inside to avoid triggering lazy initializers:
var r=z(n);!function(e,t,n,r,a){// $FlowFixMe This is okay but Flow doesn't know it.
var o=Function.call.bind($);for(var i in e)if(o(e,i)){var l=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[i]){// eslint-disable-next-line react-internal/prod-error-codes
var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}l=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){l=e}!l||l instanceof Error||(Q(a),I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof l),Q(null)),l instanceof Error&&!(l.message in Y)&&(// Only monitor this failure once because there tends to be a lot of the
// same error.
Y[l.message]=!0,Q(a),I("Failed %s type: %s",n,l.message),Q(null))}}(t,e.props,"prop",r,e)}else void 0===n.PropTypes||y||(y=!0,I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",z(n)||"Unknown"));"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}(d),d}// These two functions exist to still get child warnings in dev
r=k,a=function(e,t,n){return eu(e,t,n,!1)},i=// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.
function(e,t,n){return eu(e,t,n,!0)}}()}),i("acw62",function(e,t){e.exports=o("jWQW9")}),i("jWQW9",function(e,t){!function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var n,r,a,o,i,l,u,s,c,d,f,p,h,m,v=Symbol.for("react.element"),y=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),S=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),P=Symbol.iterator;function D(e){if(null===e||"object"!=typeof e)return null;var t=P&&e[P]||e["@@iterator"];return"function"==typeof t?t:null}/**
 * Keeps track of the current dispatcher.
 */var O={/**
   * @internal
   * @type {ReactComponent}
   */current:null},L={transition:null},N={current:null,// Used to reproduce behavior of `batchedUpdates` in legacy mode.
isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},I={/**
   * @internal
   * @type {ReactComponent}
   */current:null},M={},z=null;M.setExtraStackFrame=function(e){z=e},M.getCurrentStack=null,M.getStackAddendum=function(){var e="";// Add an extra top frame while an element is being validated
z&&(e+=z);// Delegate to the injected renderer-specific implementation
var t=M.getCurrentStack;return t&&(e+=t()||""),e};var j={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:I};// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function U(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];F("warn",e,n)}function A(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];F("error",e,n)}function F(e,t,n){var r=j.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var a=n.map(function(e){return String(e)});// Careful: RN currently depends on this prefix
a.unshift("Warning: "+t),// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[e],console,a)}j.ReactDebugCurrentFrame=M,j.ReactCurrentActQueue=N;var W={};function B(e,t){var n=e.constructor,r=n&&(n.displayName||n.name)||"ReactClass",a=r+"."+t;W[a]||(A("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,r),W[a]=!0)}/**
 * This is the abstract API for an update queue.
 */var V={/**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function(e){return!1},/**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueForceUpdate:function(e,t,n){B(e,"forceUpdate")},/**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */enqueueReplaceState:function(e,t,n,r){B(e,"replaceState")},/**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */enqueueSetState:function(e,t,n,r){B(e,"setState")}},H=Object.assign,$={};/**
 * Base class helpers for the updating state of a component.
 */function Y(e,t,n){this.props=e,this.context=t,this.refs=$,// renderer.
this.updater=n||V}Object.freeze($),Y.prototype.isReactComponent={},/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */Y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */Y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var q={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},Q=function(e,t){Object.defineProperty(Y.prototype,e,{get:function(){U("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var K in q)q.hasOwnProperty(K)&&Q(K,q[K]);function G(){}/**
 * Convenience component with default shallow equality check for sCU.
 */function X(e,t,n){this.props=e,this.context=t,this.refs=$,this.updater=n||V}G.prototype=Y.prototype;var J=X.prototype=new G;J.constructor=X,H(J,Y.prototype),J.isPureReactComponent=!0;var Z=Array.isArray;// eslint-disable-next-line no-redeclare
function ee(e){if(function(e){try{return!1}catch(e){return!0}}(e))return A("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.","function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"),""+e;// throw (to help callers find troubleshooting comments)
}function et(e){return e.displayName||"Context"}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function en(e){if(null==e)return null;if("number"==typeof e.tag&&A("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case g:return"Fragment";case y:return"Portal";case w:return"Profiler";case b:return"StrictMode";case C:return"Suspense";case E:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case S:return et(e)+".Consumer";case k:return et(e._context)+".Provider";case x:return function(e,t,n){var r=e.displayName;if(r)return r;var a=t.displayName||t.name||"";return""!==a?n+"("+a+")":n}// Keep in sync with react-reconciler/getComponentNameFromFiber
(e,e.render,"ForwardRef");case R:var t=e.displayName||null;if(null!==t)return t;return en(e.type)||"Memo";case T:var n=e._payload,r=e._init;try{return en(r(n))}catch(e){}}return null}var er=Object.prototype.hasOwnProperty,ea={key:!0,ref:!0,__self:!0,__source:!0};function eo(e){if(er.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function ei(e){if(er.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}a={};/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */var el=function(e,t,n,r,a,o,i){var l={// This tag allows us to uniquely identify this as a React Element
$$typeof:v,// Built-in properties that belong on the element
type:e,key:t,ref:n,props:i,// Record the component responsible for creating this element.
_owner:o};return(// The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
l._store={},// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
Object.defineProperty(l._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(l,"_self",{configurable:!1,enumerable:!1,writable:!1,value:r}),// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(l,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(l.props),Object.freeze(l)),l)};/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */function eu(e,t,o){var i,l={},u=null,s=null,c=null,d=null;if(null!=t)for(i in eo(t)&&(s=t.ref,function(e){if("string"==typeof e.ref&&I.current&&e.__self&&I.current.stateNode!==e.__self){var t=en(I.current.type);a[t]||(A('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),a[t]=!0)}}(t)),ei(t)&&(ee(t.key),u=""+t.key),c=void 0===t.__self?null:t.__self,d=void 0===t.__source?null:t.__source,t)er.call(t,i)&&!ea.hasOwnProperty(i)&&(l[i]=t[i]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var f=arguments.length-2;if(1===f)l.children=o;else if(f>1){for(var p=Array(f),h=0;h<f;h++)p[h]=arguments[h+2];Object.freeze&&Object.freeze(p),l.children=p}// Resolve default props
if(e&&e.defaultProps){var m=e.defaultProps;for(i in m)void 0===l[i]&&(l[i]=m[i])}if(u||s){var v,y,g="function"==typeof e?e.displayName||e.name||"Unknown":e;u&&((v=function(){n||(n=!0,A("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",g))}).isReactWarning=!0,Object.defineProperty(l,"key",{get:v,configurable:!0})),s&&((y=function(){r||(r=!0,A("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",g))}).isReactWarning=!0,Object.defineProperty(l,"ref",{get:y,configurable:!0}))}return el(e,u,s,c,d,I.current,l)}/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */function es(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r,a,o=H({},e.props),i=e.key,l=e.ref,u=e._self,s=e._source,c=e._owner;// Reserved names are extracted
if(null!=t)for(r in eo(t)&&(// Silently steal the ref from the parent.
l=t.ref,c=I.current),ei(t)&&(ee(t.key),i=""+t.key),e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)er.call(t,r)&&!ea.hasOwnProperty(r)&&(void 0===t[r]&&void 0!==a?o[r]=a[r]:o[r]=t[r]);// Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var d=arguments.length-2;if(1===d)o.children=n;else if(d>1){for(var f=Array(d),p=0;p<d;p++)f[p]=arguments[p+2];o.children=f}return el(e.type,i,l,u,s,c,o)}/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */function ec(e){return"object"==typeof e&&null!==e&&e.$$typeof===v}/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var ed=!1,ef=/\/+/g;function ep(e){return e.replace(ef,"$&/")}/**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function eh(e,t){// Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
if("object"==typeof e&&null!==e&&null!=e.key){var n,r;return ee(e.key),n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})}// Implicit key determined by the index in the set
return t.toString(36)}/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function em(e,t,n){if(null==e)return e;var r=[],a=0;return function e(t,n,r,a,o){var i=typeof t;("undefined"===i||"boolean"===i)&&(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case v:case y:l=!0}}if(l){var u,s,c=t,d=o(c),f=""===a?"."+eh(c,0):a;if(Z(d)){var p="";null!=f&&(p=ep(f)+"/"),e(d,n,p,"",function(e){return e})}else null!=d&&(ec(d)&&(d.key&&(!c||c.key!==d.key)&&ee(d.key),u=d,s=r+(d.key&&(!c||c.key!==d.key)?ep(""+d.key)+"/":"")+f,d=el(u.type,s,u.ref,u._self,u._source,u._owner,u.props)),n.push(d));return 1}var h=0,m=""===a?".":a+":";// Count of children found in the current subtree.
if(Z(t))for(var g=0;g<t.length;g++)k=m+eh(w=t[g],g),h+=e(w,n,r,k,o);else{var b=D(t);if("function"==typeof b){var w,k,S,x=t;// Warn about using Maps as children
b===x.entries&&(ed||U("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ed=!0);for(var C=b.call(x),E=0;!(S=C.next()).done;)k=m+eh(w=S.value,E++),h+=e(w,n,r,k,o)}else if("object"===i){// eslint-disable-next-line react-internal/safe-string-coercion
var R=String(t);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===R?"object with keys {"+Object.keys(t).join(", ")+"}":R)+"). If you meant to render a collection of children, use an array instead.")}}return h}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function ev(e){if(-1===e._status){var t=(0,e._result)();// Transition to the next state.
// This might throw either because it's missing or throws. If so, we treat it
// as still uninitialized and try again next time. Which is the same as what
// happens if the ctor or any wrappers processing the ctor throws. This might
// end up fixing it if the resolution was a concurrency bug.
t.then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status){var n=e._result;return void 0===n&&A("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||A("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function ey(e){return"string"==typeof e||"function"==typeof e||e===g||e===w||e===b||e===C||e===E||e===_||"object"==typeof e&&null!==e&&(e.$$typeof===T||e.$$typeof===R||e.$$typeof===k||e.$$typeof===S||e.$$typeof===x||// This needs to include all possible module reference object
// types supported by any Flight configuration anywhere since
// we don't know which Flight build this will end up being used
// with.
e.$$typeof===o||void 0!==e.getModuleId)}function eg(){var e=O.current;// intentionally don't throw our own error because this is in a hot path.
// Also helps ensure this is inlined.
return null===e&&A("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}o=Symbol.for("react.module.reference");// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var eb=0;function ew(){}ew.__reactDisabledLog=!0;var ek=j.ReactCurrentDispatcher;function eS(e,t,n){if(void 0===p)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);p=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+p+e}var ex=!1;function eC(e,t){// If something asked for a stack inside a fake render, it should get ignored.
if(!e||ex)return"";var n,r,a=h.get(e);if(void 0!==a)return a;ex=!0;var o=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,r=ek.current,// for warnings.
ek.current=null,function(){if(0===eb){/* eslint-disable react-internal/no-production-logging */i=console.log,l=console.info,u=console.warn,s=console.error,c=console.group,d=console.groupCollapsed,f=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ew,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e});/* eslint-enable react-internal/no-production-logging */}eb++}();try{// This should throw.
if(t){// Something should be setting the props in the constructor.
var p=function(){throw Error()};// $FlowFixMe
if(Object.defineProperty(p.prototype,"props",{set:function(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"==typeof Reflect&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(p,[])}catch(e){n=e}Reflect.construct(e,[],p)}else{try{p.call()}catch(e){n=e}e.call(p.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){// This is inlined manually because closure doesn't do it for us.
if(t&&n&&"string"==typeof t.stack){for(// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var m=t.stack.split("\n"),v=n.stack.split("\n"),y=m.length-1,g=v.length-1;y>=1&&g>=0&&m[y]!==v[g];)// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
g--;for(;y>=1&&g>=0;y--,g--)// frame that called our sample function and the control.
if(m[y]!==v[g]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==y||1!==g)do // The next one that isn't the same should be our match though.
if(y--,--g<0||m[y]!==v[g]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var b="\n"+m[y].replace(" at new "," at ");// If our component frame is labeled "<anonymous>"
return e.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",e.displayName)),"function"==typeof e&&h.set(e,b),b}while(y>=1&&g>=0)break}}}finally{ex=!1,ek.current=r,function(){if(0==--eb){/* eslint-disable react-internal/no-production-logging */var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:H({},e,{value:i}),info:H({},e,{value:l}),warn:H({},e,{value:u}),error:H({},e,{value:s}),group:H({},e,{value:c}),groupCollapsed:H({},e,{value:d}),groupEnd:H({},e,{value:f})});/* eslint-enable react-internal/no-production-logging */}eb<0&&A("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=o}// Fallback to just using the name if we couldn't make it throw.
var w=e?e.displayName||e.name:"",k=w?eS(w):"";return"function"==typeof e&&h.set(e,k),k}function eE(e,t,n){if(null==e)return"";if("function"==typeof e)return eC(e,!!((r=e.prototype)&&r.isReactComponent));if("string"==typeof e)return eS(e);switch(e){case C:return eS("Suspense");case E:return eS("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case x:return eC(e.render,!1);case R:// Memo may contain any component type so we recursively resolve it.
return eE(e.type,t,n);case T:var r,a=e._payload,o=e._init;try{// Lazy may contain any component type so we recursively resolve it.
return eE(o(a),t,n)}catch(e){}}return""}h=new("function"==typeof WeakMap?WeakMap:Map);var eR={},eT=j.ReactDebugCurrentFrame;function e_(e){if(e){var t=e._owner,n=eE(e.type,e._source,t?t.type:null);eT.setExtraStackFrame(n)}else eT.setExtraStackFrame(null)}function eP(e){if(e){var t=e._owner;z=eE(e.type,e._source,t?t.type:null)}else z=null}function eD(){if(I.current){var e=en(I.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}m=!1;/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var eO={};/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function eL(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var n=function(e){var t=eD();if(!t){var n="string"==typeof e?e:e.displayName||e.name;n&&(t="\n\nCheck the top-level render call using <"+n+">.")}return t}(t);if(!eO[n]){eO[n]=!0;// property, it may be the creator of the child that's responsible for
// assigning it a key.
var r="";e&&e._owner&&e._owner!==I.current&&(r=" It was passed a child from "+en(e._owner.type)+"."),eP(e),A('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,r),eP(null)}}}/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function eN(e,t){if("object"==typeof e){if(Z(e))for(var n=0;n<e.length;n++){var r=e[n];ec(r)&&eL(r,t)}else if(ec(e))e._store&&(e._store.validated=!0);else if(e){var a=D(e);if("function"==typeof a&&a!==e.entries)for(var o,i=a.call(e);!(o=i.next()).done;)ec(o.value)&&eL(o.value,t)}}}/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function eI(e){var t,n=e.type;if(null!=n&&"string"!=typeof n){if("function"==typeof n)t=n.propTypes;else{if("object"!=typeof n||n.$$typeof!==x&&// Note: Memo only checks outer props here.
// Inner props are checked in the reconciler.
n.$$typeof!==R)return;t=n.propTypes}if(t){// Intentionally inside to avoid triggering lazy initializers:
var r=en(n);!function(e,t,n,r,a){// $FlowFixMe This is okay but Flow doesn't know it.
var o=Function.call.bind(er);for(var i in e)if(o(e,i)){var l=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[i]){// eslint-disable-next-line react-internal/prod-error-codes
var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}l=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){l=e}!l||l instanceof Error||(e_(a),A("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof l),e_(null)),l instanceof Error&&!(l.message in eR)&&(// Only monitor this failure once because there tends to be a lot of the
// same error.
eR[l.message]=!0,e_(a),A("Failed %s type: %s",n,l.message),e_(null))}}(t,e.props,"prop",r,e)}else void 0===n.PropTypes||m||(m=!0,A("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",en(n)||"Unknown"));"function"!=typeof n.getDefaultProps||n.getDefaultProps.isReactClassApproved||A("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function eM(e,t,n){var r=ey(e);// We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
if(!r){var a,o="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(o+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var i=function(e){if(null!=e){var t;return void 0!==(t=e.__source)?"\n\nCheck your code at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+".":""}return""}(t);(i?o+=i:o+=eD(),null===e)?a="null":Z(e)?a="array":void 0!==e&&e.$$typeof===v?(a="<"+(en(e.type)||"Unknown")+" />",o=" Did you accidentally export a JSX literal instead of a component?"):a=typeof e,A("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",a,o)}var l=eu.apply(this,arguments);// The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(null==l)return l;// Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(r)for(var u=2;u<arguments.length;u++)eN(arguments[u],e);return e===g?/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */function(e){for(var t=Object.keys(e.props),n=0;n<t.length;n++){var r=t[n];if("children"!==r&&"key"!==r){eP(e),A("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",r),eP(null);break}}null!==e.ref&&(eP(e),A("Invalid attribute `ref` supplied to `React.Fragment`."),eP(null))}(l):eI(l),l}var ez=!1,ej=!1,eU=null,eA=0,eF=!1;function eW(e){e!==eA-1&&A("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),eA=e}function eB(t,n,r){var a=N.current;if(null!==a)try{eH(a),function(t){if(null===eU)try{// read require off the module object to get around the bundlers.
// we don't want them to detect a require and bundle a Node polyfill.
var n=("require"+Math.random()).slice(0,7);// version of setImmediate, bypassing fake timers if any.
eU=(e&&e[n]).call(e,"timers").setImmediate}catch(e){// we're in a browser
// we can't use regular timers because they may still be faked
// so we try MessageChannel+postMessage instead
eU=function(e){!1===ej&&(ej=!0,"undefined"==typeof MessageChannel&&A("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}eU(t)}(function(){0===a.length?(// No additional work was scheduled. Finish.
N.current=null,n(t)):eB(t,n,r)})}catch(e){r(e)}else n(t)}var eV=!1;function eH(e){if(!eV){// Prevent re-entrance.
eV=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do n=n(!0);while(null!==n)}e.length=0}catch(n){throw(// If something throws, leave the remaining callbacks on the queue.
e=e.slice(t+1),n)}finally{eV=!1}}}t.Children={map:em,forEach:/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function(e,t,n){em(e,function(){t.apply(this,arguments);// Don't return anything.
},n)},count:/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function(e){var t=0;return em(e,function(){t++;// Don't return anything
}),t},toArray:/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */function(e){return em(e,function(e){return e})||[]},only:/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */function(e){if(!ec(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=Y,t.Fragment=g,t.Profiler=w,t.PureComponent=X,t.StrictMode=b,t.Suspense=C,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.cloneElement=function(e,t,n){for(var r=es.apply(this,arguments),a=2;a<arguments.length;a++)eN(arguments[a],r.type);return eI(r),r},t.createContext=function(e){// TODO: Second argument used to be an optional `calculateChangedBits`
// function. Warn to reserve for future use?
var t={$$typeof:S,// As a workaround to support multiple concurrent renderers, we categorize
// some renderers as primary and others as secondary. We only expect
// there to be two concurrent renderers at most: React Native (primary) and
// Fabric (secondary); React DOM (primary) and React ART (secondary).
// Secondary renderers store their context values on separate fields.
_currentValue:e,_currentValue2:e,// Used to track how many concurrent renderers this context currently
// supports within in a single renderer. Such as parallel server rendering.
_threadCount:0,// These are circular
Provider:null,Consumer:null,// Add these to use same hidden class in VM as ServerContext
_defaultValue:null,_globalName:null};t.Provider={$$typeof:k,_context:t};var n=!1,r=!1,a=!1,o={$$typeof:S,_context:t};return Object.defineProperties(o,{Provider:{get:function(){return r||(r=!0,A("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return n||(n=!0,A("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){a||(U("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),a=!0)}}}),t.Consumer=o,t._currentRenderer=null,t._currentRenderer2=null,t},t.createElement=eM,t.createFactory=function(e){var t=eM.bind(null,e);return t.type=e,ez||(ez=!0,U("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return U("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},t.createRef=// an immutable object with a single mutable value
function(){var e={current:null};return Object.seal(e),e},t.forwardRef=function(e){null!=e&&e.$$typeof===R?A("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?A("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&A("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null!=e.defaultProps||null!=e.propTypes)&&A("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");var t,n={$$typeof:x,render:e};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(n){t=n,e.name||e.displayName||(e.displayName=n)}}),n},t.isValidElement=ec,t.lazy=function(e){var t,n,r={$$typeof:T,_payload:{// We use these fields to store the result.
_status:-1,_result:e},_init:ev};return Object.defineProperties(r,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){A("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,// $FlowFixMe
Object.defineProperty(r,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return n},set:function(e){A("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),n=e,// $FlowFixMe
Object.defineProperty(r,"propTypes",{enumerable:!0})}}}),r},t.memo=function(e,t){ey(e)||A("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var n,r={$$typeof:R,type:e,compare:void 0===t?null:t};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(e.displayName=t)}}),r},t.startTransition=function(e,t){var n=L.transition;L.transition={};var r=L.transition;L.transition._updatedFibers=new Set;try{e()}finally{L.transition=n,null===n&&r._updatedFibers&&(r._updatedFibers.size>10&&U("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),r._updatedFibers.clear())}},t.unstable_act=function(e){// `act` calls can be nested, so we track the depth. This represents the
// number of `act` scopes on the stack.
var t,n=eA;eA++,null===N.current&&// will detect the queue and use it instead of Scheduler.
(N.current=[]);var r=N.isBatchingLegacy;try{// which flushed updates immediately after the scope function exits, even
// if it's an async function.
if(// Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
// set to `true` while the given callback is executed, not for updates
// triggered during an async event, because this is how the legacy
// implementation of `act` behaved.
N.isBatchingLegacy=!0,t=e(),!r&&N.didScheduleLegacyUpdate){var a=N.current;null!==a&&(N.didScheduleLegacyUpdate=!1,eH(a))}}catch(e){throw eW(n),e}finally{N.isBatchingLegacy=r}if(null!==t&&"object"==typeof t&&"function"==typeof t.then){var o=t,i=!1;// The callback is an async function (i.e. returned a promise). Wait
return eF||"undefined"==typeof Promise||Promise.resolve().then(function(){}).then(function(){i||(eF=!0,A("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))}),{then:function(e,t){i=!0,o.then(function(r){eW(n),0===eA?// queue until there's no remaining work.
eB(r,e,t):e(r)},function(e){// The callback threw an error.
eW(n),t(e)})}}}var l=t;// The callback is not an async function. Exit the current scope
if(// immediately, without awaiting.
eW(n),0!==eA)return{then:function(e,t){e(l)}};// Exiting the outermost act scope. Flush the queue.
var u=N.current;return null!==u&&(eH(u),N.current=null),{then:function(e,t){// Confirm we haven't re-entered another `act` scope, in case
// the user does something weird like await the thenable
// multiple times.
null===N.current?(// Recursively flush the queue until there's no remaining work.
N.current=[],eB(l,e,t)):e(l)}}},t.useCallback=function(e,t){return eg().useCallback(e,t)},t.useContext=function(e){var t=eg();// TODO: add a more generic warning for invalid values.
if(void 0!==e._context){var n=e._context;// Don't deduplicate because this legitimately causes bugs
// and nobody should be using this in existing code.
n.Consumer===e?A("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):n.Provider===e&&A("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},t.useDebugValue=function(e,t){return eg().useDebugValue(e,t)},t.useDeferredValue=function(e){return eg().useDeferredValue(e)},t.useEffect=function(e,t){return eg().useEffect(e,t)},t.useId=function(){return eg().useId()},t.useImperativeHandle=function(e,t,n){return eg().useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return eg().useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return eg().useLayoutEffect(e,t)},t.useMemo=function(e,t){return eg().useMemo(e,t)},t.useReducer=function(e,t,n){return eg().useReducer(e,t,n)},t.useRef=function(e){return eg().useRef(e)},t.useState=function(e){return eg().useState(e)},t.useSyncExternalStore=function(e,t,n){return eg().useSyncExternalStore(e,t,n)},t.useTransition=function(){return eg().useTransition()},t.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()}),i("3y30c",function(t,n){var r,a,i,l,u,s,c,d,f,p,h,m;e(t.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>r,e=>r=e),e(t.exports,"createPortal",()=>a,e=>a=e),e(t.exports,"createRoot",()=>i,e=>i=e),e(t.exports,"findDOMNode",()=>l,e=>l=e),e(t.exports,"flushSync",()=>u,e=>u=e),e(t.exports,"hydrate",()=>s,e=>s=e),e(t.exports,"hydrateRoot",()=>c,e=>c=e),e(t.exports,"render",()=>d,e=>d=e),e(t.exports,"unmountComponentAtNode",()=>f,e=>f=e),e(t.exports,"unstable_batchedUpdates",()=>p,e=>p=e),e(t.exports,"unstable_renderSubtreeIntoContainer",()=>h,e=>h=e),e(t.exports,"version",()=>m,e=>m=e),function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var e,t,n,v,y,g,b,w,k,S,x,C,E,R,T,_,P,D,O,L,N,I,M,z,j,U,A,F,W,B,V,H,$,Y,q,Q,K,G,X,J,Z,ee,et,en,er,ea,eo,ei,el,eu,es,ec,ed,ef,ep,eh,em,ev,ey,eg,eb,ew,ek,eS,ex,eC,eE,eR,eT,e_,eP=o("acw62"),eD=o("fO90s"),eO=eP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eL=!1;// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.
function eN(e){if(!eL){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];eM("warn",e,n)}}function eI(e){if(!eL){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];eM("error",e,n)}}function eM(e,t,n){var r=eO.ReactDebugCurrentFrame.getStackAddendum();""!==r&&(t+="%s",n=n.concat([r]));var a=n.map(function(e){return String(e)});// Careful: RN currently depends on this prefix
a.unshift("Warning: "+t),// breaks IE9: https://github.com/facebook/react/issues/13610
// eslint-disable-next-line react-internal/no-production-logging
Function.prototype.apply.call(console[e],console,a)}var ez=new Set,ej={},eU={};function eA(e,t){eF(e,t),eF(e+"Capture",t)}function eF(e,t){ej[e]&&eI("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),ej[e]=t,eU[e.toLowerCase()]=e,"onDoubleClick"===e&&(eU.ondblclick=e);for(var n=0;n<t.length;n++)ez.add(t[n])}var eW=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),eB=Object.prototype.hasOwnProperty;/*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */// $FlowFixMe only called in DEV, so void return is not possible.
function eV(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}// $FlowFixMe only called in DEV, so void return is not possible.
function eH(e){try{return!1}catch(e){return!0}}function e$(e,t){if(eH(e))return eI("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.",t,eV(e)),""+e;// throw (to help callers find troubleshooting comments)
}function eY(e){if(eH(e))return eI("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.",eV(e)),""+e;// throw (to help callers find troubleshooting comments)
}/* eslint-disable max-len */var eq=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",eQ=eq+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",eK=RegExp("^["+eq+"]["+eQ+"]*$"),eG={},eX={};function eJ(e){return!!eB.call(eX,e)||!eB.call(eG,e)&&(eK.test(e)?(eX[e]=!0,!0):(eG[e]=!0,eI("Invalid attribute name: `%s`",e),!1))}function eZ(e,t,n){return null!==t?0===t.type:!n&&e.length>2&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])}function e0(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":// eslint-disable-line
return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;var a=e.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}function e1(e,t,n,r){if(null==t||e0(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||t<1}return!1}function e2(e){return e3.hasOwnProperty(e)?e3[e]:null}function e4(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}// When adding attributes to this list, be sure to also add them to
// the `possibleStandardNames` module to ensure casing and incorrect
// name warnings.
var e3={};// These props are reserved by React. They shouldn't be written to the DOM.
["children","dangerouslySetInnerHTML",// elements (not just inputs). Now that ReactDOMInput assigns to the
// defaultValue property -- do we need this?
"defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"].forEach(function(e){e3[e]=new e4(e,0,!1,e,null,!1,!1)}),// This is a mapping from React prop names to the attribute names.
[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0],n=e[1];e3[t]=new e4(t,1,!1,n,null,!1,!1)}),// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
["contentEditable","draggable","spellCheck","value"].forEach(function(e){e3[e]=new e4(e,2,!1,e.toLowerCase(),null,!1,!1)}),// In React, we let users pass `true` and `false` even though technically
// these aren't boolean attributes (they are coerced to strings).
// Since these are SVG attributes, their attribute names are case-sensitive.
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){e3[e]=new e4(e,2,!1,e,null,!1,!1)}),["allowFullScreen","async",// on the client side because the browsers are inconsistent. Instead we call focus().
"autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(function(e){e3[e]=new e4(e,3,!1,e.toLowerCase(),null,!1,!1)}),// rather than attributes. These are all booleans.
["checked",// disabled with `removeAttribute`. We have special logic for handling this.
"multiple","muted","selected"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){e3[e]=new e4(e,3,!0,e,null,!1,!1)}),// booleans, but can also accept a string value.
["capture","download"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){e3[e]=new e4(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){e3[e]=new e4(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){e3[e]=new e4(e,5,!1,e.toLowerCase(),null,!1,!1)});var e6=/[\-\:]([a-z])/g,e8=function(e){return e[1].toUpperCase()};// or boolean value assignment. Regular attributes that just accept strings
// and have the same names are omitted, just like in the HTML attribute filter.
// Some of these attributes can be hard to find. This list was created by
// scraping the MDN documentation.
["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){var t=e.replace(e6,e8);e3[t]=new e4(t,1,!1,e,null,!1,!1)}),["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){var t=e.replace(e6,e8);e3[t]=new e4(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"// NOTE: if you add a camelCased prop to this list,
].forEach(function(e){var t=e.replace(e6,e8);e3[t]=new e4(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),// The attribute name is case-sensitive in SVG so we can't just use
// the React name like we do for attributes that exist only in HTML.
["tabIndex","crossOrigin"].forEach(function(e){e3[e]=new e4(e,1,!1,e.toLowerCase(),null,!1,!1)}),e3.xlinkHref=new e4("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){e3[e]=new e4(e,1,!1,e.toLowerCase(),null,!0,!0)});// and any newline or tab are filtered out as if they're not part of the URL.
// https://url.spec.whatwg.org/#url-parsing
// Tab or newline are defined as \r\n\t:
// https://infra.spec.whatwg.org/#ascii-tab-or-newline
// A C0 control is a code point in the range \u0000 NULL to \u001F
// INFORMATION SEPARATOR ONE, inclusive:
// https://infra.spec.whatwg.org/#c0-control-or-space
/* eslint-disable max-len */var e5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i,e7=!1;function e9(e){!e7&&e5.test(e)&&(e7=!0,eI("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.",JSON.stringify(e)))}/**
 * Get the value for a attribute on a node. Only used in DEV for SSR validation.
 * The third argument is used as a hint of what the expected value is. Some
 * attributes have multiple equivalent values.
 */function te(e,t,n,r){if(eJ(t)){if(!e.hasAttribute(t))return void 0===n?void 0:null;var a=e.getAttribute(t);return(e$(n,t),a===""+n)?n:a}}/**
 * Sets the value for a property on a node.
 *
 * @param {DOMElement} node
 * @param {string} name
 * @param {*} value
 */function tt(e,t,n,r){var a=e2(t);if(!eZ(t,a,r)){if(e1(t,n,a,r)&&(n=null),r||null===a){eJ(t)&&(null===n?e.removeAttribute(t):(e$(n,t),e.setAttribute(t,""+n)));return}if(a.mustUseProperty){var o=a.propertyName;if(null===n){var i=a.type;e[o]=3!==i&&""}else // `toString`ed by IE8/9.
e[o]=n;return}// The rest are treated as attributes with special cases.
var l=a.attributeName,u=a.attributeNamespace;if(null===n)e.removeAttribute(l);else{var s,c=a.type;3===c||4===c&&!0===n?// and we won't require Trusted Type here.
s="":(e$(n,l),s=""+n,a.sanitizeURL&&e9(s.toString())),u?e.setAttributeNS(u,l,s):e.setAttribute(l,s)}}}// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var tn=Symbol.for("react.element"),tr=Symbol.for("react.portal"),ta=Symbol.for("react.fragment"),to=Symbol.for("react.strict_mode"),ti=Symbol.for("react.profiler"),tl=Symbol.for("react.provider"),tu=Symbol.for("react.context"),ts=Symbol.for("react.forward_ref"),tc=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),tp=Symbol.for("react.lazy"),th=(Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode"),Symbol.for("react.offscreen")),tm=(Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker"),Symbol.iterator);function tv(e){if(null===e||"object"!=typeof e)return null;var t=tm&&e[tm]||e["@@iterator"];return"function"==typeof t?t:null}var ty=Object.assign,tg=0;function tb(){}tb.__reactDisabledLog=!0;var tw=eO.ReactCurrentDispatcher;function tk(e,t,n){if(void 0===C)try{throw Error()}catch(e){var r=e.stack.trim().match(/\n( *(at )?)/);C=r&&r[1]||""}// We use the prefix to ensure our stacks line up with native stack frames.
return"\n"+C+e}var tS=!1;function tx(e,t){// If something asked for a stack inside a fake render, it should get ignored.
if(!e||tS)return"";var n,r,a=E.get(e);if(void 0!==a)return a;tS=!0;var o=Error.prepareStackTrace;// $FlowFixMe It does accept undefined.
Error.prepareStackTrace=void 0,r=tw.current,// for warnings.
tw.current=null,function(){if(0===tg){/* eslint-disable react-internal/no-production-logging */y=console.log,g=console.info,b=console.warn,w=console.error,k=console.group,S=console.groupCollapsed,x=console.groupEnd;var e={configurable:!0,enumerable:!0,value:tb,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e});/* eslint-enable react-internal/no-production-logging */}tg++}();try{// This should throw.
if(t){// Something should be setting the props in the constructor.
var i=function(){throw Error()};// $FlowFixMe
if(Object.defineProperty(i.prototype,"props",{set:function(){// We use a throwing setter instead of frozen or non-writable props
// because that won't throw in a non-strict mode function.
throw Error()}}),"object"==typeof Reflect&&Reflect.construct){// We construct a different control for this case to include any extra
// frames added by the construct call.
try{Reflect.construct(i,[])}catch(e){n=e}Reflect.construct(e,[],i)}else{try{i.call()}catch(e){n=e}e.call(i.prototype)}}else{try{throw Error()}catch(e){n=e}e()}}catch(t){// This is inlined manually because closure doesn't do it for us.
if(t&&n&&"string"==typeof t.stack){for(// This extracts the first frame from the sample that isn't also in the control.
// Skipping one frame that we assume is the frame that calls the two.
var l=t.stack.split("\n"),u=n.stack.split("\n"),s=l.length-1,c=u.length-1;s>=1&&c>=0&&l[s]!==u[c];)// Typically this will be the root most one. However, stack frames may be
// cut off due to maximum stack limits. In this case, one maybe cut off
// earlier than the other. We assume that the sample is longer or the same
// and there for cut off earlier. So we should find the root most frame in
// the sample somewhere in the control.
c--;for(;s>=1&&c>=0;s--,c--)// frame that called our sample function and the control.
if(l[s]!==u[c]){// In V8, the first line is describing the message but other VMs don't.
// If we're about to return the first line, and the control is also on the same
// line, that's a pretty good indicator that our sample threw at same line as
// the control. I.e. before we entered the sample frame. So we ignore this result.
// This can happen if you passed a class to function component, or non-function.
if(1!==s||1!==c)do // The next one that isn't the same should be our match though.
if(s--,--c<0||l[s]!==u[c]){// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
var d="\n"+l[s].replace(" at new "," at ");// If our component frame is labeled "<anonymous>"
return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),"function"==typeof e&&E.set(e,d),d}while(s>=1&&c>=0)break}}}finally{tS=!1,tw.current=r,function(){if(0==--tg){/* eslint-disable react-internal/no-production-logging */var e={configurable:!0,enumerable:!0,writable:!0};// $FlowFixMe Flow thinks console is immutable.
Object.defineProperties(console,{log:ty({},e,{value:y}),info:ty({},e,{value:g}),warn:ty({},e,{value:b}),error:ty({},e,{value:w}),group:ty({},e,{value:k}),groupCollapsed:ty({},e,{value:S}),groupEnd:ty({},e,{value:x})});/* eslint-enable react-internal/no-production-logging */}tg<0&&eI("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=o}// Fallback to just using the name if we couldn't make it throw.
var f=e?e.displayName||e.name:"",p=f?tk(f):"";return"function"==typeof e&&E.set(e,p),p}function tC(e){try{var t="",n=e;do t+=function(e){switch(e._debugOwner&&e._debugOwner.type,e._debugSource,e.tag){case 5:return tk(e.type);case 16:return tk("Lazy");case 13:return tk("Suspense");case 19:return tk("SuspenseList");case 0:case 2:case 15:return tx(e.type,!1);case 11:return tx(e.type.render,!1);case 1:return tx(e.type,!0);default:return""}}(n),n=n.return;while(n)return t}catch(e){return"\nError generating stack: "+e.message+"\n"+e.stack}}function tE(e){return e.displayName||"Context"}// Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
function tR(e){if(null==e)return null;if("number"==typeof e.tag&&eI("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ta:return"Fragment";case tr:return"Portal";case ti:return"Profiler";case to:return"StrictMode";case tc:return"Suspense";case td:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case tu:return tE(e)+".Consumer";case tl:return tE(e._context)+".Provider";case ts:return function(e,t,n){var r=e.displayName;if(r)return r;var a=t.displayName||t.name||"";return""!==a?n+"("+a+")":n}// Keep in sync with react-reconciler/getComponentNameFromFiber
(e,e.render,"ForwardRef");case tf:var t=e.displayName||null;if(null!==t)return t;return tR(e.type)||"Memo";case tp:var n=e._payload,r=e._init;try{return tR(r(n))}catch(e){}}return null}function tT(e){return e.displayName||"Context"}function t_(e){var t,n,r,a=e.tag,o=e.type;switch(a){case 24:return"Cache";case 9:return tT(o)+".Consumer";case 10:return tT(o._context)+".Provider";case 18:return"DehydratedFragment";case 11:return t=o.render,n="ForwardRef",r=t.displayName||t.name||"",o.displayName||(""!==r?n+"("+r+")":n);case 7:return"Fragment";case 5:// Host component type is the display name (e.g. "div", "View")
return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:// Name comes from the type in this case; we don't have a tag.
return tR(o);case 8:if(o===to)return"StrictMode";return"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";// The display name for this tags come from the user-provided type:
case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof o)return o.displayName||o.name||null;if("string"==typeof o)return o}return null}E=new("function"==typeof WeakMap?WeakMap:Map);var tP=eO.ReactDebugCurrentFrame,tD=null,tO=!1;function tL(){if(null===tD)return null;var e=tD._debugOwner;return null!=e?t_(e):null}function tN(){return null===tD?"":tC(tD)}function tI(){tP.getCurrentStack=null,tD=null,tO=!1}function tM(e){tP.getCurrentStack=null===e?null:tN,tD=e,tO=!1}function tz(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return eY(e),e;default:// function, symbol are assigned as empty strings
return""}}var tj={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0};function tU(e,t){tj[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||null==t.value||eI("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||null==t.checked||eI("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function tA(e){var t=e.type,n=e.nodeName;return n&&"input"===n.toLowerCase()&&("checkbox"===t||"radio"===t)}function tF(e){return e._valueTracker}function tW(e){tF(e)||// TODO: Once it's just Fiber we can move this to node._wrapperState
(e._valueTracker=function(e){var t=tA(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);eY(e[t]);var r=""+e[t];// if someone has already defined a value or Safari, then bail
// and don't track value will cause over reporting of changes,
// but it's better then a hard failure
// (needed for certain tests that spyOn input values and Safari)
if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){eY(e),r=""+e,o.call(this,e)}}),// but it triggers a bug in IE11 and Edge 14/15.
// Calling defineProperty() again should be equivalent.
// https://github.com/facebook/react/issues/11768
Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){eY(e),r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function tB(e){if(!e)return!1;var t,n=tF(e);// if there is no tracker at this point it's unlikely
// that trying again will succeed
if(!n)return!0;var r=n.getValue(),a=(t="",e?t=tA(e)?e.checked?"true":"false":e.value:t);return a!==r&&(n.setValue(a),!0)}function tV(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var tH=!1,t$=!1,tY=!1,tq=!1;function tQ(e){return"checkbox"===e.type||"radio"===e.type?null!=e.checked:null!=e.value}/**
 * Implements an <input> host component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * See http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */function tK(e,t){var n=t.checked;return ty({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function tG(e,t){tU("input",t),void 0===t.checked||void 0===t.defaultChecked||t$||(eI("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",tL()||"A component",t.type),t$=!0),void 0===t.value||void 0===t.defaultValue||tH||(eI("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components",tL()||"A component",t.type),tH=!0);var n=null==t.defaultValue?"":t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:tz(null!=t.value?t.value:n),controlled:tQ(t)}}function tX(e,t){var n=t.checked;null!=n&&tt(e,"checked",n,!1)}function tJ(e,t){var n=tQ(t);e._wrapperState.controlled||!n||tq||(eI("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),tq=!0),!e._wrapperState.controlled||n||tY||(eI("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"),tY=!0),tX(e,t);var r=tz(t.value),a=t.type;if(null!=r)"number"===a?(0===r&&""===e.value||// We explicitly want to coerce to number here if possible.
// eslint-disable-next-line
e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if("submit"===a||"reset"===a){// Submit/reset inputs need the attribute removed completely to avoid
// blank-text buttons.
e.removeAttribute("value");return}t.hasOwnProperty("value")?t0(e,t.type,r):t.hasOwnProperty("defaultValue")&&t0(e,t.type,tz(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function tZ(e,t,n){// from being lost during SSR hydration.
if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;// default value provided by the browser. See: #12872
if(("submit"===r||"reset"===r)&&(void 0===t.value||null===t.value))return;var a=""+e._wrapperState.initialValue;// Do not assign value if it is already set. This prevents user text input
n||a===e.value||(e.value=a),// Otherwise, the value attribute is synchronized to the property,
// so we assign defaultValue to the same thing as the value property
// assignment step above.
e.defaultValue=a}// Normally, we'd just do `node.checked = node.checked` upon initial mount, less this bug
// this is needed to work around a chrome bug where setting defaultChecked
// will sometimes influence the value of checked (even after detachment).
// Reference: https://bugs.chromium.org/p/chromium/issues/detail?id=608416
// We need to temporarily unset name to avoid disrupting radio button groups.
var o=e.name;""!==o&&(e.name=""),// When syncing the checked attribute, both the checked property and
// attribute are assigned at the same time using defaultChecked. This uses:
//
//   1. The checked React property when present
//   2. The defaultChecked React property when present
//   3. Otherwise, false
e.defaultChecked=!e.defaultChecked,e.defaultChecked=!!e._wrapperState.initialChecked,""!==o&&(e.name=o)}// For number inputs, the display value loses trailing decimal points. For email inputs,
// Chrome raises "The specified value <x> is not a valid email address".
//
// Here we check to see if the defaultValue has actually changed, avoiding these problems
// when the user is inputting text
//
// https://github.com/facebook/react/issues/7253
function t0(e,t,n){("number"!==t||tV(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var t1=!1,t2=!1,t4=!1;/**
 * Implements an <option> host component that warns when `selected` is set.
 */function t3(e,t){null!=t.value||("object"==typeof t.children&&null!==t.children?eP.Children.forEach(t.children,function(e){null!=e&&("string"==typeof e||"number"==typeof e||t2||(t2=!0,eI("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")))}):null==t.dangerouslySetInnerHTML||t4||(t4=!0,eI("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),null==t.selected||t1||(eI("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),t1=!0)}var t6=Array.isArray;// eslint-disable-next-line no-redeclare
function t8(){var e=tL();return e?"\n\nCheck the render method of `"+e+"`.":""}R=!1;var t5=["value","defaultValue"];function t7(e,t,n,r){var a=e.options;if(t){for(var o={},i=0;i<n.length;i++)o["$"+n[i]]=!0;for(var l=0;l<a.length;l++){var u=o.hasOwnProperty("$"+a[l].value);a[l].selected!==u&&(a[l].selected=u),u&&r&&(a[l].defaultSelected=!0)}}else{for(var s=""+tz(n),c=null,d=0;d<a.length;d++){if(a[d].value===s){a[d].selected=!0,r&&(a[d].defaultSelected=!0);return}null!==c||a[d].disabled||(c=a[d])}null!==c&&(c.selected=!0)}}/**
 * Implements a <select> host component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */function t9(e,t){return ty({},t,{value:void 0})}function ne(e,t){/**
 * Validation function for `value` and `defaultValue`.
 */(function(e){tU("select",e);for(var t=0;t<t5.length;t++){var n=t5[t];if(null!=e[n]){var r=t6(e[n]);e.multiple&&!r?eI("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,t8()):!e.multiple&&r&&eI("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,t8())}}})(t),e._wrapperState={wasMultiple:!!t.multiple},void 0===t.value||void 0===t.defaultValue||R||(eI("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"),R=!0)}var nt=!1;/**
 * Implements a <textarea> host component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */function nn(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");return ty({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nr(e,t){tU("textarea",t),void 0===t.value||void 0===t.defaultValue||nt||(eI("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components",tL()||"A component"),nt=!0);var n=t.value;// Only bother fetching default value if we're going to use it
if(null==n){var r=t.children,a=t.defaultValue;if(null!=r){if(eI("Use the `defaultValue` or `value` props instead of setting children on <textarea>."),null!=a)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(t6(r)){if(r.length>1)throw Error("<textarea> can only have at most one child.");r=r[0]}a=r}null==a&&(a=""),n=a}e._wrapperState={initialValue:tz(n)}}function na(e,t){var n=tz(t.value),r=tz(t.defaultValue);if(null!=n){// Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
var a=""+n;// To avoid side effects (such as losing text selection), only set value if changed
a!==e.value&&(e.value=a),null==t.defaultValue&&e.defaultValue!==a&&(e.defaultValue=a)}null!=r&&(e.defaultValue=""+r)}function no(e,t){// available until after the component has mounted.
var n=e.textContent;// Only set node.value if textContent is equal to the expected
// initial value. In IE10/IE11 there is a bug where the placeholder attribute
// will populate textContent as well.
// https://developer.microsoft.com/microsoft-edge/platform/issues/101525/
n===e._wrapperState.initialValue&&""!==n&&null!==n&&(e.value=n)}var ni="http://www.w3.org/1999/xhtml",nl="http://www.w3.org/2000/svg";function nu(e){switch(e){case"svg":return nl;case"math":return"http://www.w3.org/1998/Math/MathML";default:return ni}}function ns(e,t){return null==e||e===ni?nu(t):e===nl&&"foreignObject"===t?ni:e}/**
 * Set the innerHTML property of a node
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var nc=(e=function(e,t){if(e.namespaceURI===nl&&!("innerHTML"in e)){// IE does not have innerHTML for SVG nodes, so instead we inject the
// new markup in a temp node and then move the child nodes across into
// the target node
(T=T||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>";for(var n=T.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild);return}e.innerHTML=t},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e),nd=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t},nf={animation:["animationDelay","animationDirection","animationDuration","animationFillMode","animationIterationCount","animationName","animationPlayState","animationTimingFunction"],background:["backgroundAttachment","backgroundClip","backgroundColor","backgroundImage","backgroundOrigin","backgroundPositionX","backgroundPositionY","backgroundRepeat","backgroundSize"],backgroundPosition:["backgroundPositionX","backgroundPositionY"],border:["borderBottomColor","borderBottomStyle","borderBottomWidth","borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth","borderLeftColor","borderLeftStyle","borderLeftWidth","borderRightColor","borderRightStyle","borderRightWidth","borderTopColor","borderTopStyle","borderTopWidth"],borderBlockEnd:["borderBlockEndColor","borderBlockEndStyle","borderBlockEndWidth"],borderBlockStart:["borderBlockStartColor","borderBlockStartStyle","borderBlockStartWidth"],borderBottom:["borderBottomColor","borderBottomStyle","borderBottomWidth"],borderColor:["borderBottomColor","borderLeftColor","borderRightColor","borderTopColor"],borderImage:["borderImageOutset","borderImageRepeat","borderImageSlice","borderImageSource","borderImageWidth"],borderInlineEnd:["borderInlineEndColor","borderInlineEndStyle","borderInlineEndWidth"],borderInlineStart:["borderInlineStartColor","borderInlineStartStyle","borderInlineStartWidth"],borderLeft:["borderLeftColor","borderLeftStyle","borderLeftWidth"],borderRadius:["borderBottomLeftRadius","borderBottomRightRadius","borderTopLeftRadius","borderTopRightRadius"],borderRight:["borderRightColor","borderRightStyle","borderRightWidth"],borderStyle:["borderBottomStyle","borderLeftStyle","borderRightStyle","borderTopStyle"],borderTop:["borderTopColor","borderTopStyle","borderTopWidth"],borderWidth:["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth"],columnRule:["columnRuleColor","columnRuleStyle","columnRuleWidth"],columns:["columnCount","columnWidth"],flex:["flexBasis","flexGrow","flexShrink"],flexFlow:["flexDirection","flexWrap"],font:["fontFamily","fontFeatureSettings","fontKerning","fontLanguageOverride","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition","fontWeight","lineHeight"],fontVariant:["fontVariantAlternates","fontVariantCaps","fontVariantEastAsian","fontVariantLigatures","fontVariantNumeric","fontVariantPosition"],gap:["columnGap","rowGap"],grid:["gridAutoColumns","gridAutoFlow","gridAutoRows","gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],gridArea:["gridColumnEnd","gridColumnStart","gridRowEnd","gridRowStart"],gridColumn:["gridColumnEnd","gridColumnStart"],gridColumnGap:["columnGap"],gridGap:["columnGap","rowGap"],gridRow:["gridRowEnd","gridRowStart"],gridRowGap:["rowGap"],gridTemplate:["gridTemplateAreas","gridTemplateColumns","gridTemplateRows"],listStyle:["listStyleImage","listStylePosition","listStyleType"],margin:["marginBottom","marginLeft","marginRight","marginTop"],marker:["markerEnd","markerMid","markerStart"],mask:["maskClip","maskComposite","maskImage","maskMode","maskOrigin","maskPositionX","maskPositionY","maskRepeat","maskSize"],maskPosition:["maskPositionX","maskPositionY"],outline:["outlineColor","outlineStyle","outlineWidth"],overflow:["overflowX","overflowY"],padding:["paddingBottom","paddingLeft","paddingRight","paddingTop"],placeContent:["alignContent","justifyContent"],placeItems:["alignItems","justifyItems"],placeSelf:["alignSelf","justifySelf"],textDecoration:["textDecorationColor","textDecorationLine","textDecorationStyle"],textEmphasis:["textEmphasisColor","textEmphasisStyle"],transition:["transitionDelay","transitionDuration","transitionProperty","transitionTimingFunction"],wordWrap:["overflowWrap"]},np={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,// SVG-related properties
fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nh=["Webkit","ms","Moz","O"];/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */function nm(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||np.hasOwnProperty(e)&&np[e]?(eH(t)&&eI("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",e,eV(t)),(""+t).trim()):t+"px"}// infinite loop, because it iterates over the newly added props too.
Object.keys(np).forEach(function(e){nh.forEach(function(t){np[t+e.charAt(0).toUpperCase()+e.substring(1)]=np[e]})});var nv=/([A-Z])/g,ny=/^ms-/,ng=/^(?:webkit|moz|o)[A-Z]/,nb=/^-ms-/,nw=/-(.)/g,nk=/;\s*$/,nS={},nx={},nC=!1,nE=!1,nR=function(e){nS.hasOwnProperty(e)&&nS[e]||(nS[e]=!0,eI("Unsupported style property %s. Did you mean %s?",e,e.replace(nb,"ms-").replace(nw,function(e,t){return t.toUpperCase()})))},nT=function(e){nS.hasOwnProperty(e)&&nS[e]||(nS[e]=!0,eI("Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},n_=function(e,t){nx.hasOwnProperty(t)&&nx[t]||(nx[t]=!0,eI('Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',e,t.replace(nk,"")))},nP=function(e,t){nC||(nC=!0,eI("`NaN` is an invalid value for the `%s` css style property.",e))},nD=function(e,t){nE||(nE=!0,eI("`Infinity` is an invalid value for the `%s` css style property.",e))},nO=function(e,t){e.indexOf("-")>-1?nR(e):ng.test(e)?nT(e):nk.test(t)&&n_(e,t),"number"!=typeof t||(isNaN(t)?nP(e,t):isFinite(t)||nD(e,t))};/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 */function nL(e,t){var n=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=0===r.indexOf("--");a||nO(r,t[r]);var o=nm(r,t[r],a);"float"===r&&(r="cssFloat"),a?n.setProperty(r,o):n[r]=o}}/**
 * Given {color: 'red', overflow: 'hidden'} returns {
 *   color: 'color',
 *   overflowX: 'overflow',
 *   overflowY: 'overflow',
 * }. This can be read as "the overflowY property was set by the overflow
 * shorthand". That is, the values are the property that each was derived from.
 */function nN(e){var t={};for(var n in e)for(var r=nf[n]||[n],a=0;a<r.length;a++)t[r[a]]=n;return t}// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var nI=ty({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0// NOTE: menuitem's close tag should be omitted, but that causes problems.
});function nM(e,t){if(t){// Note the use of `==` which checks for null or undefined.
if(nI[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(e+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.")}if(!t.suppressContentEditableWarning&&t.contentEditable&&null!=t.children&&eI("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),null!=t.style&&"object"!=typeof t.style)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.")}}function nz(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){// These are reserved SVG and MathML elements.
// We don't mind this list too much because we expect it to never grow.
// The alternative is to track the namespace in a few places which is convoluted.
// https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}// When adding attributes to the HTML or SVG allowed attribute list, be sure to
// also add them to this module to ensure casing and incorrect name
// warnings.
var nj={// HTML
accept:"accept",acceptcharset:"acceptCharset","accept-charset":"acceptCharset",accesskey:"accessKey",action:"action",allowfullscreen:"allowFullScreen",alt:"alt",as:"as",async:"async",autocapitalize:"autoCapitalize",autocomplete:"autoComplete",autocorrect:"autoCorrect",autofocus:"autoFocus",autoplay:"autoPlay",autosave:"autoSave",capture:"capture",cellpadding:"cellPadding",cellspacing:"cellSpacing",challenge:"challenge",charset:"charSet",checked:"checked",children:"children",cite:"cite",class:"className",classid:"classID",classname:"className",cols:"cols",colspan:"colSpan",content:"content",contenteditable:"contentEditable",contextmenu:"contextMenu",controls:"controls",controlslist:"controlsList",coords:"coords",crossorigin:"crossOrigin",dangerouslysetinnerhtml:"dangerouslySetInnerHTML",data:"data",datetime:"dateTime",default:"default",defaultchecked:"defaultChecked",defaultvalue:"defaultValue",defer:"defer",dir:"dir",disabled:"disabled",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback",download:"download",draggable:"draggable",enctype:"encType",enterkeyhint:"enterKeyHint",for:"htmlFor",form:"form",formmethod:"formMethod",formaction:"formAction",formenctype:"formEncType",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",headers:"headers",height:"height",hidden:"hidden",high:"high",href:"href",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv","http-equiv":"httpEquiv",icon:"icon",id:"id",imagesizes:"imageSizes",imagesrcset:"imageSrcSet",innerhtml:"innerHTML",inputmode:"inputMode",integrity:"integrity",is:"is",itemid:"itemID",itemprop:"itemProp",itemref:"itemRef",itemscope:"itemScope",itemtype:"itemType",keyparams:"keyParams",keytype:"keyType",kind:"kind",label:"label",lang:"lang",list:"list",loop:"loop",low:"low",manifest:"manifest",marginwidth:"marginWidth",marginheight:"marginHeight",max:"max",maxlength:"maxLength",media:"media",mediagroup:"mediaGroup",method:"method",min:"min",minlength:"minLength",multiple:"multiple",muted:"muted",name:"name",nomodule:"noModule",nonce:"nonce",novalidate:"noValidate",open:"open",optimum:"optimum",pattern:"pattern",placeholder:"placeholder",playsinline:"playsInline",poster:"poster",preload:"preload",profile:"profile",radiogroup:"radioGroup",readonly:"readOnly",referrerpolicy:"referrerPolicy",rel:"rel",required:"required",reversed:"reversed",role:"role",rows:"rows",rowspan:"rowSpan",sandbox:"sandbox",scope:"scope",scoped:"scoped",scrolling:"scrolling",seamless:"seamless",selected:"selected",shape:"shape",size:"size",sizes:"sizes",span:"span",spellcheck:"spellCheck",src:"src",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",start:"start",step:"step",style:"style",summary:"summary",tabindex:"tabIndex",target:"target",title:"title",type:"type",usemap:"useMap",value:"value",width:"width",wmode:"wmode",wrap:"wrap",// SVG
about:"about",accentheight:"accentHeight","accent-height":"accentHeight",accumulate:"accumulate",additive:"additive",alignmentbaseline:"alignmentBaseline","alignment-baseline":"alignmentBaseline",allowreorder:"allowReorder",alphabetic:"alphabetic",amplitude:"amplitude",arabicform:"arabicForm","arabic-form":"arabicForm",ascent:"ascent",attributename:"attributeName",attributetype:"attributeType",autoreverse:"autoReverse",azimuth:"azimuth",basefrequency:"baseFrequency",baselineshift:"baselineShift","baseline-shift":"baselineShift",baseprofile:"baseProfile",bbox:"bbox",begin:"begin",bias:"bias",by:"by",calcmode:"calcMode",capheight:"capHeight","cap-height":"capHeight",clip:"clip",clippath:"clipPath","clip-path":"clipPath",clippathunits:"clipPathUnits",cliprule:"clipRule","clip-rule":"clipRule",color:"color",colorinterpolation:"colorInterpolation","color-interpolation":"colorInterpolation",colorinterpolationfilters:"colorInterpolationFilters","color-interpolation-filters":"colorInterpolationFilters",colorprofile:"colorProfile","color-profile":"colorProfile",colorrendering:"colorRendering","color-rendering":"colorRendering",contentscripttype:"contentScriptType",contentstyletype:"contentStyleType",cursor:"cursor",cx:"cx",cy:"cy",d:"d",datatype:"datatype",decelerate:"decelerate",descent:"descent",diffuseconstant:"diffuseConstant",direction:"direction",display:"display",divisor:"divisor",dominantbaseline:"dominantBaseline","dominant-baseline":"dominantBaseline",dur:"dur",dx:"dx",dy:"dy",edgemode:"edgeMode",elevation:"elevation",enablebackground:"enableBackground","enable-background":"enableBackground",end:"end",exponent:"exponent",externalresourcesrequired:"externalResourcesRequired",fill:"fill",fillopacity:"fillOpacity","fill-opacity":"fillOpacity",fillrule:"fillRule","fill-rule":"fillRule",filter:"filter",filterres:"filterRes",filterunits:"filterUnits",floodopacity:"floodOpacity","flood-opacity":"floodOpacity",floodcolor:"floodColor","flood-color":"floodColor",focusable:"focusable",fontfamily:"fontFamily","font-family":"fontFamily",fontsize:"fontSize","font-size":"fontSize",fontsizeadjust:"fontSizeAdjust","font-size-adjust":"fontSizeAdjust",fontstretch:"fontStretch","font-stretch":"fontStretch",fontstyle:"fontStyle","font-style":"fontStyle",fontvariant:"fontVariant","font-variant":"fontVariant",fontweight:"fontWeight","font-weight":"fontWeight",format:"format",from:"from",fx:"fx",fy:"fy",g1:"g1",g2:"g2",glyphname:"glyphName","glyph-name":"glyphName",glyphorientationhorizontal:"glyphOrientationHorizontal","glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphorientationvertical:"glyphOrientationVertical","glyph-orientation-vertical":"glyphOrientationVertical",glyphref:"glyphRef",gradienttransform:"gradientTransform",gradientunits:"gradientUnits",hanging:"hanging",horizadvx:"horizAdvX","horiz-adv-x":"horizAdvX",horizoriginx:"horizOriginX","horiz-origin-x":"horizOriginX",ideographic:"ideographic",imagerendering:"imageRendering","image-rendering":"imageRendering",in2:"in2",in:"in",inlist:"inlist",intercept:"intercept",k1:"k1",k2:"k2",k3:"k3",k4:"k4",k:"k",kernelmatrix:"kernelMatrix",kernelunitlength:"kernelUnitLength",kerning:"kerning",keypoints:"keyPoints",keysplines:"keySplines",keytimes:"keyTimes",lengthadjust:"lengthAdjust",letterspacing:"letterSpacing","letter-spacing":"letterSpacing",lightingcolor:"lightingColor","lighting-color":"lightingColor",limitingconeangle:"limitingConeAngle",local:"local",markerend:"markerEnd","marker-end":"markerEnd",markerheight:"markerHeight",markermid:"markerMid","marker-mid":"markerMid",markerstart:"markerStart","marker-start":"markerStart",markerunits:"markerUnits",markerwidth:"markerWidth",mask:"mask",maskcontentunits:"maskContentUnits",maskunits:"maskUnits",mathematical:"mathematical",mode:"mode",numoctaves:"numOctaves",offset:"offset",opacity:"opacity",operator:"operator",order:"order",orient:"orient",orientation:"orientation",origin:"origin",overflow:"overflow",overlineposition:"overlinePosition","overline-position":"overlinePosition",overlinethickness:"overlineThickness","overline-thickness":"overlineThickness",paintorder:"paintOrder","paint-order":"paintOrder",panose1:"panose1","panose-1":"panose1",pathlength:"pathLength",patterncontentunits:"patternContentUnits",patterntransform:"patternTransform",patternunits:"patternUnits",pointerevents:"pointerEvents","pointer-events":"pointerEvents",points:"points",pointsatx:"pointsAtX",pointsaty:"pointsAtY",pointsatz:"pointsAtZ",prefix:"prefix",preservealpha:"preserveAlpha",preserveaspectratio:"preserveAspectRatio",primitiveunits:"primitiveUnits",property:"property",r:"r",radius:"radius",refx:"refX",refy:"refY",renderingintent:"renderingIntent","rendering-intent":"renderingIntent",repeatcount:"repeatCount",repeatdur:"repeatDur",requiredextensions:"requiredExtensions",requiredfeatures:"requiredFeatures",resource:"resource",restart:"restart",result:"result",results:"results",rotate:"rotate",rx:"rx",ry:"ry",scale:"scale",security:"security",seed:"seed",shaperendering:"shapeRendering","shape-rendering":"shapeRendering",slope:"slope",spacing:"spacing",specularconstant:"specularConstant",specularexponent:"specularExponent",speed:"speed",spreadmethod:"spreadMethod",startoffset:"startOffset",stddeviation:"stdDeviation",stemh:"stemh",stemv:"stemv",stitchtiles:"stitchTiles",stopcolor:"stopColor","stop-color":"stopColor",stopopacity:"stopOpacity","stop-opacity":"stopOpacity",strikethroughposition:"strikethroughPosition","strikethrough-position":"strikethroughPosition",strikethroughthickness:"strikethroughThickness","strikethrough-thickness":"strikethroughThickness",string:"string",stroke:"stroke",strokedasharray:"strokeDasharray","stroke-dasharray":"strokeDasharray",strokedashoffset:"strokeDashoffset","stroke-dashoffset":"strokeDashoffset",strokelinecap:"strokeLinecap","stroke-linecap":"strokeLinecap",strokelinejoin:"strokeLinejoin","stroke-linejoin":"strokeLinejoin",strokemiterlimit:"strokeMiterlimit","stroke-miterlimit":"strokeMiterlimit",strokewidth:"strokeWidth","stroke-width":"strokeWidth",strokeopacity:"strokeOpacity","stroke-opacity":"strokeOpacity",suppresscontenteditablewarning:"suppressContentEditableWarning",suppresshydrationwarning:"suppressHydrationWarning",surfacescale:"surfaceScale",systemlanguage:"systemLanguage",tablevalues:"tableValues",targetx:"targetX",targety:"targetY",textanchor:"textAnchor","text-anchor":"textAnchor",textdecoration:"textDecoration","text-decoration":"textDecoration",textlength:"textLength",textrendering:"textRendering","text-rendering":"textRendering",to:"to",transform:"transform",typeof:"typeof",u1:"u1",u2:"u2",underlineposition:"underlinePosition","underline-position":"underlinePosition",underlinethickness:"underlineThickness","underline-thickness":"underlineThickness",unicode:"unicode",unicodebidi:"unicodeBidi","unicode-bidi":"unicodeBidi",unicoderange:"unicodeRange","unicode-range":"unicodeRange",unitsperem:"unitsPerEm","units-per-em":"unitsPerEm",unselectable:"unselectable",valphabetic:"vAlphabetic","v-alphabetic":"vAlphabetic",values:"values",vectoreffect:"vectorEffect","vector-effect":"vectorEffect",version:"version",vertadvy:"vertAdvY","vert-adv-y":"vertAdvY",vertoriginx:"vertOriginX","vert-origin-x":"vertOriginX",vertoriginy:"vertOriginY","vert-origin-y":"vertOriginY",vhanging:"vHanging","v-hanging":"vHanging",videographic:"vIdeographic","v-ideographic":"vIdeographic",viewbox:"viewBox",viewtarget:"viewTarget",visibility:"visibility",vmathematical:"vMathematical","v-mathematical":"vMathematical",vocab:"vocab",widths:"widths",wordspacing:"wordSpacing","word-spacing":"wordSpacing",writingmode:"writingMode","writing-mode":"writingMode",x1:"x1",x2:"x2",x:"x",xchannelselector:"xChannelSelector",xheight:"xHeight","x-height":"xHeight",xlinkactuate:"xlinkActuate","xlink:actuate":"xlinkActuate",xlinkarcrole:"xlinkArcrole","xlink:arcrole":"xlinkArcrole",xlinkhref:"xlinkHref","xlink:href":"xlinkHref",xlinkrole:"xlinkRole","xlink:role":"xlinkRole",xlinkshow:"xlinkShow","xlink:show":"xlinkShow",xlinktitle:"xlinkTitle","xlink:title":"xlinkTitle",xlinktype:"xlinkType","xlink:type":"xlinkType",xmlbase:"xmlBase","xml:base":"xmlBase",xmllang:"xmlLang","xml:lang":"xmlLang",xmlns:"xmlns","xml:space":"xmlSpace",xmlnsxlink:"xmlnsXlink","xmlns:xlink":"xmlnsXlink",xmlspace:"xmlSpace",y1:"y1",y2:"y2",y:"y",ychannelselector:"yChannelSelector",z:"z",zoomandpan:"zoomAndPan"},nU={"aria-current":0,// state
"aria-description":0,"aria-details":0,"aria-disabled":0,// state
"aria-hidden":0,// state
"aria-invalid":0,// state
"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,// Widget Attributes
"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,// Live Region Attributes
"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,// Drag-and-Drop Attributes
"aria-dropeffect":0,"aria-grabbed":0,// Relationship Attributes
"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0},nA={},nF=RegExp("^(aria)-["+eQ+"]*$"),nW=RegExp("^(aria)[A-Z]["+eQ+"]*$"),nB=!1,nV=function(){},nH={},n$=/^on./,nY=/^on[^A-Z]/,nq=RegExp("^(aria)-["+eQ+"]*$"),nQ=RegExp("^(aria)[A-Z]["+eQ+"]*$");nV=function(e,t,n,r){if(eB.call(nH,t)&&nH[t])return!0;var a=t.toLowerCase();if("onfocusin"===a||"onfocusout"===a)return eI("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."),nH[t]=!0,!0;// We can't rely on the event system being injected on the server.
if(null!=r){var o=r.registrationNameDependencies,i=r.possibleRegistrationNames;if(o.hasOwnProperty(t))return!0;var l=i.hasOwnProperty(a)?i[a]:null;if(null!=l)return eI("Invalid event handler property `%s`. Did you mean `%s`?",t,l),nH[t]=!0,!0;if(n$.test(t))return eI("Unknown event handler property `%s`. It will be ignored.",t),nH[t]=!0,!0}else if(n$.test(t))return nY.test(t)&&eI("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),nH[t]=!0,!0;// Let the ARIA attribute hook validate ARIA attributes
if(nq.test(t)||nQ.test(t))return!0;if("innerhtml"===a)return eI("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),nH[t]=!0,!0;if("aria"===a)return eI("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),nH[t]=!0,!0;if("is"===a&&null!=n&&"string"!=typeof n)return eI("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),nH[t]=!0,!0;if("number"==typeof n&&isNaN(n))return eI("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),nH[t]=!0,!0;var u=e2(t),s=null!==u&&0===u.type;if(nj.hasOwnProperty(a)){var c=nj[a];if(c!==t)return eI("Invalid DOM property `%s`. Did you mean `%s`?",t,c),nH[t]=!0,!0}else if(!s&&t!==a)return(// Unknown attributes should have lowercase casing since that's how they
// will be cased anyway with server rendering.
eI("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,a),nH[t]=!0,!0);return"boolean"==typeof n&&e0(t,n,u,!1)?(n?eI('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):eI('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',n,t,t,n,t,t,t),nH[t]=!0,!0):!!s||(e0(t,n,u,!1)?(nH[t]=!0,!1):(("false"===n||"true"===n)&&null!==u&&3===u.type&&(eI("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,"false"===n?"The browser will interpret it as a truthy value.":'Although this works, it will not work as expected if you pass the string "false".',t,n),nH[t]=!0),!0))// Now that we've validated casing, do not validate
};var nK=function(e,t,n){var r=[];for(var a in t)nV(e,a,t[a],n)||r.push(a);var o=r.map(function(e){return"`"+e+"`"}).join(", ");1===r.length?eI("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",o,e):r.length>1&&eI("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ",o,e)},nG=null;/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function nX(e){// Fallback to nativeEvent.srcElement for IE9
// https://github.com/facebook/react/issues/12506
var t=e.target||e.srcElement||window;// Normalize SVG <use> element events #4963
// Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}var nJ=null,nZ=null,n0=null;function n1(e){// We perform this translation at the end of the event loop so that we
// always receive the correct fiber here
var t=i1(e);if(t){if("function"!=typeof nJ)throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");var n=t.stateNode;// Guard against Fiber being unmounted.
if(n){var r=i4(n);nJ(t.stateNode,t.type,r)}}}function n2(e){nZ?n0?n0.push(e):n0=[e]:nZ=e}function n4(){if(nZ){var e=nZ,t=n0;if(nZ=null,n0=null,n1(e),t)for(var n=0;n<t.length;n++)n1(t[n])}}// the renderer. Such as when we're dispatching events or if third party
// libraries need to call batchedUpdates. Eventually, this API will go away when
// everything is batched by default. We'll then have a similar API to opt-out of
// scheduled work and instead do synchronous work.
// Defaults
var n3=function(e,t){return e(t)},n6=function(){},n8=!1;function n5(e,t,n){if(n8)// fully completes before restoring state.
return e(t,n);n8=!0;try{return n3(e,t,n)}finally{n8=!1,(null!==nZ||null!==n0)&&(// If a controlled event was fired, we may need to restore the state of
// the DOM node back to the controlled value. This is necessary when React
// bails out of the update without touching the DOM.
// TODO: Restore state in the microtask, after the discrete updates flush,
// instead of early flushing them here.
n6(),n4())}}// TODO: Replace with flushSync
/**
 * @param {object} inst The instance, which is the source of events.
 * @param {string} registrationName Name of listener (e.g. `onClick`).
 * @return {?function} The stored callback.
 */function n7(e,t){var n=e.stateNode;if(null===n)return null;var r=i4(n);if(null===r)return null;var a=r[t];if(function(e,t,n){switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":return!!(n.disabled&&("button"===t||"input"===t||"select"===t||"textarea"===t));default:return!1}}(t,e.type,r))return null;if(a&&"function"!=typeof a)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof a+"` type.");return a}var n9=!1;// Check if browser support events with passive listeners
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
if(eW)try{var re={};// $FlowFixMe: Ignore Flow complaining about needing a value
Object.defineProperty(re,"passive",{get:function(){n9=!0}}),window.addEventListener("test",re,re),window.removeEventListener("test",re,re)}catch(e){n9=!1}function rt(e,t,n,r,a,o,i,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(e){this.onError(e)}}var rn=rt;// In DEV mode, we swap out invokeGuardedCallback for a special version
// that plays more nicely with the browser's DevTools. The idea is to preserve
// "Pause on exceptions" behavior. Because React wraps all user-provided
// functions in invokeGuardedCallback, and the production version of
// invokeGuardedCallback uses a try-catch, all user exceptions are treated
// like caught exceptions, and the DevTools won't pause unless the developer
// takes the extra step of enabling pause on caught exceptions. This is
// unintuitive, though, because even though React has caught the error, from
// the developer's perspective, the error is uncaught.
//
// To preserve the expected "Pause on exceptions" behavior, we don't use a
// try-catch in DEV. Instead, we synchronously dispatch a fake event to a fake
// DOM node, and call the user-provided callback from inside an event handler
// for that fake event. If the callback throws, the error is "captured" using
// a global event handler. But because the error happens in a different
// event loop context, it does not interrupt the normal program flow.
// Effectively, this gives us try-catch behavior without actually using
// try-catch. Neat!
// Check that the browser supports the APIs we need to implement our special
// DEV version of invokeGuardedCallback
if("undefined"!=typeof window&&"function"==typeof window.dispatchEvent&&"undefined"!=typeof document&&"function"==typeof document.createEvent){var rr=document.createElement("react");rn=function(e,t,n,r,a,o,i,l,u){// If document doesn't exist we know for sure we will crash in this method
// when we call document.createEvent(). However this can cause confusing
// errors: https://github.com/facebook/create-react-app/issues/3482
// So we preemptively throw with a better message instead.
if("undefined"==typeof document||null===document)throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");var s,c=document.createEvent("Event"),d=!1,f=!0,p=window.event,h=Object.getOwnPropertyDescriptor(window,"event");function m(){// We immediately remove the callback from event listeners so that
// nested `invokeGuardedCallback` calls do not clash. Otherwise, a
// nested call would trigger the fake event handlers of any call higher
// in the stack.
rr.removeEventListener(k,y,!1),void 0!==window.event&&window.hasOwnProperty("event")&&(window.event=p)}// Create an event handler for our fake event. We will synchronously
// dispatch our fake event using `dispatchEvent`. Inside the handler, we
// call the user-provided callback.
var v=Array.prototype.slice.call(arguments,3);function y(){d=!0,m(),t.apply(n,v),f=!1}// Create a global error event handler. We use this to capture the value
var g=!1,b=!1;function w(e){if(s=e.error,g=!0,null===s&&0===e.colno&&0===e.lineno&&(b=!0),e.defaultPrevented&&null!=s&&"object"==typeof s)try{s._suppressLogging=!0}catch(e){}}// Create a fake event type.
var k="react-"+(e||"invokeguardedcallback");// Attach our event handlers
if(window.addEventListener("error",w),rr.addEventListener(k,y,!1),// errors, it will trigger our global error handler.
c.initEvent(k,!1,!1),rr.dispatchEvent(c),h&&Object.defineProperty(window,"event",h),d&&f&&(g?b&&(s=Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")):// eslint-disable-next-line react-internal/prod-error-codes
s=Error("An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the \"Pause on exceptions\" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue."),this.onError(s)),window.removeEventListener("error",w),!d)return(// Something went really wrong, and our event was not dispatched.
// https://github.com/facebook/react/issues/16734
// https://github.com/facebook/react/issues/16585
// Fall back to the production implementation.
m(),rt.apply(this,arguments))}}var ra=rn,ro=!1,ri=null,rl=!1,ru=null,rs={onError:function(e){ro=!0,ri=e}};/**
 * Call a function while guarding against errors that happens within it.
 * Returns an error if it throws, otherwise null.
 *
 * In production, this is implemented using a try-catch. The reason we don't
 * use a try-catch directly is so that we can swap out a different
 * implementation in DEV mode.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function rc(e,t,n,r,a,o,i,l,u){ro=!1,ri=null,ra.apply(rs,arguments)}function rd(){if(ro){var e=ri;return ro=!1,ri=null,e}throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.")}/**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 *
 * Note that this module is currently shared and assumed to be stateless.
 * If this becomes an actual Map, that will break.
 */function rf(e){return e._reactInternals}var rp=eO.ReactCurrentOwner;// Union of all commit flags (flags with the lifetime of a particular commit)
function rh(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{// If there is no alternate, this might be a new tree that isn't inserted
// yet. If it is, then it will have a pending insertion effect on it.
var r=t;do(4098&(t=r).flags)!=/*                      */0&&// mounted fiber is the parent but we need to continue to figure out
// if that one is still mounted.
(n=t.return),r=t.return;while(r)}return 3===t.tag?n:null}function rm(e){if(13===e.tag){var t=e.memoizedState;if(null===t){var n=e.alternate;null!==n&&(t=n.memoizedState)}if(null!==t)return t.dehydrated}return null}function rv(e){return 3===e.tag?e.stateNode.containerInfo:null}function ry(e){if(rh(e)!==e)throw Error("Unable to find node on an unmounted component.")}function rg(e){var t=e.alternate;if(!t){// If there is no alternate, then we only need to check if it is mounted.
var n=rh(e);if(null===n)throw Error("Unable to find node on an unmounted component.");return n!==e?null:e}// If we have two possible branches, we'll walk backwards up to the root
for(// to see what path the root points to. On the way we may hit one of the
// special cases and we'll deal with them.
var r=e,a=t;;){var o=r.return;if(null===o)break;var i=o.alternate;if(null===i){// There is no alternate. This is an unusual case. Currently, it only
// happens when a Suspense component is hidden. An extra fragment fiber
// is inserted in between the Suspense fiber and its children. Skip
// over this extra fragment fiber and proceed to the next parent.
var l=o.return;if(null!==l){r=a=l;continue}// If there's no parent, we're at the root.
break}// If both copies of the parent fiber point to the same child, we can
// assume that the child is current. This happens when we bailout on low
// priority: the bailed out fiber's child reuses the current child.
if(o.child===i.child){for(var u=o.child;u;){if(u===r)return(// We've determined that A is the current branch.
ry(o),e);if(u===a)return(// We've determined that B is the current branch.
ry(o),t);u=u.sibling}// We should never have an alternate for any mounting node. So the only
// way this could possibly happen is if this was unmounted, if at all.
throw Error("Unable to find node on an unmounted component.")}if(r.return!==a.return)// The return pointer of A and the return pointer of B point to different
// fibers. We assume that return pointers never criss-cross, so A must
// belong to the child set of A.return, and B must belong to the child
// set of B.return.
r=o,a=i;else{for(// The return pointers point to the same fiber. We'll have to use the
// default, slow path: scan the child sets of each parent alternate to see
// which child belongs to which set.
//
// Search parent A's child set
var s=!1,c=o.child;c;){if(c===r){s=!0,r=o,a=i;break}if(c===a){s=!0,a=o,r=i;break}c=c.sibling}if(!s){for(// Search parent B's child set
c=i.child;c;){if(c===r){s=!0,r=i,a=o;break}if(c===a){s=!0,a=i,r=o;break}c=c.sibling}if(!s)throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.")}}if(r.alternate!==a)throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.")}// If the root is not a host container, we're in a disconnected tree. I.e.
// unmounted.
if(3!==r.tag)throw Error("Unable to find node on an unmounted component.");return r.stateNode.current===r?e:t}function rb(e){var t=rg(e);return null!==t?function e(t){// Next we'll drill down this component to find the first HostComponent/Text.
if(5===t.tag||6===t.tag)return t;for(var n=t.child;null!==n;){var r=e(n);if(null!==r)return r;n=n.sibling}return null}(t):null}// This module only exists as an ESM wrapper around the external CommonJS
var rw=eD.unstable_scheduleCallback,rk=eD.unstable_cancelCallback,rS=eD.unstable_shouldYield,rx=eD.unstable_requestPaint,rC=eD.unstable_now,rE=eD.unstable_getCurrentPriorityLevel,rR=eD.unstable_ImmediatePriority,rT=eD.unstable_UserBlockingPriority,r_=eD.unstable_NormalPriority,rP=eD.unstable_LowPriority,rD=eD.unstable_IdlePriority,rO=eD.unstable_yieldValue,rL=eD.unstable_setDisableYieldValue,rN=null,rI=null,rM=null,rz=!1,rj="undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__;function rU(e){if("function"==typeof rO&&(// We're in a test because Scheduler.unstable_yieldValue only exists
// in SchedulerMock. To reduce the noise in strict mode tests,
// suppress warnings and disable scheduler yielding during the double render
rL(e),eL=e),rI&&"function"==typeof rI.setStrictMode)try{rI.setStrictMode(rN,e)}catch(e){rz||(rz=!0,eI("React instrumentation encountered an error: %s",e))}}// Profiler API hooks
function rA(e){rM=e}function rF(){for(var e=new Map,t=1,n=0;n<rJ;n++){var r,a=/*                        */1&(r=t)?"Sync":/*    */2&r?"InputContinuousHydration":/*             */4&r?"InputContinuous":/*            */8&r?"DefaultHydration":/*                     */16&r?"Default":/*                */32&r?"TransitionHydration":/*                       */4194240&r?"Transition":/*                            */130023424&r?"Retry":/*          */134217728&r?"SelectiveHydration":/*               */268435456&r?"IdleHydration":/*                        */536870912&r?"Idle":/*                   */1073741824&r?"Offscreen":void 0;e.set(t,a),t*=2}return e}function rW(){null!==rM&&"function"==typeof rM.markCommitStopped&&rM.markCommitStopped()}function rB(e){null!==rM&&"function"==typeof rM.markComponentRenderStarted&&rM.markComponentRenderStarted(e)}function rV(){null!==rM&&"function"==typeof rM.markComponentRenderStopped&&rM.markComponentRenderStopped()}function rH(e){null!==rM&&"function"==typeof rM.markComponentLayoutEffectUnmountStarted&&rM.markComponentLayoutEffectUnmountStarted(e)}function r$(){null!==rM&&"function"==typeof rM.markComponentLayoutEffectUnmountStopped&&rM.markComponentLayoutEffectUnmountStopped()}function rY(e){null!==rM&&"function"==typeof rM.markRenderStarted&&rM.markRenderStarted(e)}function rq(){null!==rM&&"function"==typeof rM.markRenderStopped&&rM.markRenderStopped()}function rQ(e,t){null!==rM&&"function"==typeof rM.markStateUpdateScheduled&&rM.markStateUpdateScheduled(e,t)}// TODO: This is pretty well supported by browsers. Maybe we can drop it.
var rK=Math.clz32?Math.clz32:function(e){var t=e>>>0;return 0===t?32:31-(rG(t)/rX|0)|0},rG=Math.log,rX=Math.LN2,rJ=31,rZ=/*                        */64,r0=/*                             */4194304;// Count leading zeros.
function r1(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case /*                        */128:case /*                        */256:case /*                        */512:case /*                        */1024:case /*                        */2048:case /*                        */4096:case /*                        */8192:case /*                        */16384:case /*                       */32768:case /*                       */65536:case /*                       */131072:case /*                       */262144:case /*                       */524288:case /*                       */1048576:case /*                       */2097152:return 4194240&e;case 4194304:case /*                             */8388608:case /*                             */16777216:case /*                             */33554432:case /*                             */67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return eI("Should have found matching lanes. This is a bug in React."),e}}function r2(e,t){// Early bailout if there's no pending work left.
var n=e.pendingLanes;if(/*                        */0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=/*                          */268435455&n;if(0!==i){var l=i&~a;if(0!==l)r=r1(l);else{var u=i&o;0!==u&&(r=r1(u))}}else{// The only remaining work is Idle.
var s=n&~a;0!==s?r=r1(s):0!==o&&(r=r1(o))}if(0===r)// TODO: Consider warning in this path if a fallback timer is not scheduled.
return 0;// If we're already in the middle of a render, switching lanes will interrupt
// it and we'll lose our progress. We should only do this if the new lanes are
// higher priority.
if(0!==t&&t!==r&&// If we already suspended with a delay, then interrupting is fine. Don't
// bother waiting until the root is complete.
(t&a)==0){var c,d=(c=r)&-c,f=t&-t;if(d>=f||// Default priority updates should not interrupt transition updates. The
// only difference between default updates and transition updates is that
// default updates do not support refresh transitions.
16===d&&(4194240&f)!=0)return t}(4&r)!=0&&// and default updates, so they render in the same batch. The only reason
// they use separate lanes is because continuous updates should interrupt
// transitions, but default updates should not.
(r|=16&n);// Check for entangled lanes and add them to the batch.
//
// A lane is said to be entangled with another when it's not allowed to render
// in a batch that does not also include the other lane. Typically we do this
// when multiple updates have the same source, and we only want to respond to
// the most recent event from that source.
//
// Note that we apply entanglements *after* checking for partial work above.
// This means that if a lane is entangled during an interleaved event while
// it's already rendering, we won't interrupt it. This is intentional, since
// entanglement is usually "best effort": we'll try our best to render the
// lanes in the same batch, but it's not worth throwing out partially
// completed work in order to do it.
// TODO: Reconsider this. The counter-argument is that the partial work
// represents an intermediate state, which we don't want to show to the user.
// And by spending extra time finishing it, we're increasing the amount of
// time it takes to show the final state, which is what they are actually
// waiting for.
//
// For those exceptions where entanglement is semantically important, like
// useMutableSource, we should ensure that there is no partial work at the
// time we apply the entanglement.
var p=e.entangledLanes;if(0!==p)for(var h=e.entanglements,m=r&p;m>0;){var v=r9(m),y=1<<v;r|=h[v],m&=~y}return r}function r4(e){var t=-1073741825&e.pendingLanes;return 0!==t?t:1073741824&t?1073741824:0}function r3(e){return(268435455&e)!=0}function r6(e){return(130023424&e)===e}function r8(e){return(4194240&e)!=0}function r5(){// Cycle through the lanes, assigning each new transition to the next lane.
// In most cases, this means every transition gets its own lane, until we
// run out of lanes and cycle back to the beginning.
var e=rZ;return(4194240&(rZ<<=1))==0&&(rZ=64),e}function r7(e){// This wrapper function gets inlined. Only exists so to communicate that it
// doesn't matter which bit is selected; you can pick any bit without
// affecting the algorithms where its used. Here I'm using
// getHighestPriorityLane because it requires the fewest operations.
return e&-e}function r9(e){return 31-rK(e)}function ae(e){for(var t=[],n=0;n<rJ;n++)t.push(e);return t}function at(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),// recent event, and we assume time is monotonically increasing.
e.eventTimes[r9(t)]=n}function an(e,t,n){e.pingedLanes|=e.suspendedLanes&t}function ar(e,t){for(// In addition to entangling each of the given lanes with each other, we also
// have to consider _transitive_ entanglements. For each lane that is already
// entangled with *any* of the given lanes, that lane is now transitively
// entangled with *all* the given lanes.
//
// Translated: If C is entangled with A, then entangling A with B also
// entangles C with B.
//
// If this is hard to grasp, it might help to intentionally break this
// function and look at the tests that fail in ReactTransition-test.js. Try
// commenting out one of the conditions below.
var n=e.entangledLanes|=t,r=e.entanglements,a=n;a;){var o=r9(a),i=1<<o;i&t|// Is this lane transitively entangled with the newly entangled lanes?
r[o]&t&&(r[o]|=t),a&=~i}}function aa(e,t,n){if(rj)for(var r=e.pendingUpdatersLaneMap;n>0;){var a=r9(n),o=1<<a;r[a].add(t),n&=~o}}function ao(e,t){if(rj)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;t>0;){var a=r9(t),o=1<<a,i=n[a];i.size>0&&(i.forEach(function(e){var t=e.alternate;null!==t&&r.has(t)||r.add(e)}),i.clear()),t&=~o}}var ai=/*                          */0;function al(e){var t=e&-e;return 1<t?4<t?r3(t)?16:536870912:4:1}// This is imported by the event replaying implementation in React DOM. It's
// in a separate file to break a circular dependency between the renderer and
// the reconciler.
function au(e){return e.current.memoizedState.isDehydrated}// has this definition built-in.
var as=!1,ac=[],ad=null,af=null,ap=null,ah=new Map,am=new Map,av=[],ay=["mousedown","mouseup","touchcancel","touchend","touchstart","auxclick","dblclick","pointercancel","pointerdown","pointerup","dragend","dragstart","drop","compositionend","compositionstart","keydown","keypress","keyup","input","textInput","copy","cut","paste","click","change","contextmenu","reset","submit"];// The queue of discrete events to be replayed.
function ag(e,t){switch(e){case"focusin":case"focusout":ad=null;break;case"dragenter":case"dragleave":af=null;break;case"mouseover":case"mouseout":ap=null;break;case"pointerover":case"pointerout":var n=t.pointerId;ah.delete(n);break;case"gotpointercapture":case"lostpointercapture":var r=t.pointerId;am.delete(r)}}function ab(e,t,n,r,a,o){if(null===e||e.nativeEvent!==o){if(null!==t){var i=i1(t);null!==i&&P(i)}return{blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]}}// If we have already queued this exact event, then it's because
// the different event systems have different DOM event listeners.
// We can accumulate the flags, and the targetContainers, and
// store a single event to be replayed.
e.eventSystemFlags|=r;var l=e.targetContainers;return null!==a&&-1===l.indexOf(a)&&l.push(a),e}function aw(e){// TODO: This function shares a lot of logic with findInstanceBlockingEvent.
// Try to unify them. It's a bit tricky since it would require two return
// values.
var t=i0(e.target);if(null!==t){var n=rh(t);if(null!==n){var r=n.tag;if(13===r){var a=rm(n);if(null!==a){// We're blocked on hydrating this boundary.
// Increase its priority.
e.blockedOn=a,L(e.priority,function(){D(n)});return}}else if(3===r&&au(n.stateNode)){e.blockedOn=rv(n);// We don't currently have a way to increase the priority of
// a root other than sync.
return}}}e.blockedOn=null}function ak(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;t.length>0;){var n=t[0],r=aL(e.domEventName,e.eventSystemFlags,n,e.nativeEvent);if(null===r){var a=e.nativeEvent,o=new a.constructor(a.type,a);null!==nG&&eI("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."),nG=o,a.target.dispatchEvent(o),null===nG&&eI("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."),nG=null}else{// We're still blocked. Try again later.
var i=i1(r);return null!==i&&P(i),e.blockedOn=r,!1}// This target container was successfully dispatched. Try the next.
t.shift()}return!0}function aS(e,t,n){ak(e)&&n.delete(t)}function ax(){as=!1,null!==ad&&ak(ad)&&(ad=null),null!==af&&ak(af)&&(af=null),null!==ap&&ak(ap)&&(ap=null),ah.forEach(aS),am.forEach(aS)}function aC(e,t){e.blockedOn!==t||(e.blockedOn=null,as||(as=!0,// now unblocked. This first might not actually be unblocked yet.
// We could check it early to avoid scheduling an unnecessary callback.
eD.unstable_scheduleCallback(eD.unstable_NormalPriority,ax)))}function aE(e){// Mark anything that was blocked on this as no longer blocked
// and eligible for a replay.
if(ac.length>0){aC(ac[0],e);// This is a exponential search for each boundary that commits. I think it's
// worth it because we expect very few discrete events to queue up and once
// we are actually fully unblocked it will be fast to replay them.
for(var t=1;t<ac.length;t++){var n=ac[t];n.blockedOn===e&&(n.blockedOn=null)}}null!==ad&&aC(ad,e),null!==af&&aC(af,e),null!==ap&&aC(ap,e);var r=function(t){return aC(t,e)};ah.forEach(r),am.forEach(r);for(var a=0;a<av.length;a++){var o=av[a];o.blockedOn===e&&(o.blockedOn=null)}for(;av.length>0;){var i=av[0];if(null!==i.blockedOn)break;aw(i),null===i.blockedOn&&av.shift()}}var aR=eO.ReactCurrentBatchConfig,aT=!0;// TODO: can we stop exporting these?
function a_(e,t,n,r){var a=ai,o=aR.transition;aR.transition=null;try{ai=1,aD(e,t,n,r)}finally{ai=a,aR.transition=o}}function aP(e,t,n,r){var a=ai,o=aR.transition;aR.transition=null;try{ai=4,aD(e,t,n,r)}finally{ai=a,aR.transition=o}}function aD(e,t,n,r){aT&&function(e,t,n,r){var a=aL(e,t,n,r);if(null===a){o8(e,t,r,aO,n),ag(e,r);return}if(function(e,t,n,r,a){// These set relatedTarget to null because the replayed event will be treated as if we
// moved from outside the window (no target) onto the target once it hydrates.
// Instead of mutating we could clone the event.
switch(t){case"focusin":return ad=ab(ad,e,t,n,r,a),!0;case"dragenter":return af=ab(af,e,t,n,r,a),!0;case"mouseover":return ap=ab(ap,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return ah.set(o,ab(ah.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":var i=a.pointerId;return am.set(i,ab(am.get(i)||null,e,t,n,r,a)),!0}return!1}// Check if this target is unblocked. Returns true if it's unblocked.
(a,e,t,n,r)){r.stopPropagation();return}// We need to clear only if we didn't queue because
if(// queueing is accumulative.
ag(e,r),4&t&&ay.indexOf(e)>-1){for(;null!==a;){var o=i1(a);null!==o&&_(o);var i=aL(e,t,n,r);if(null===i&&o8(e,t,r,aO,n),i===a)break;a=i}null!==a&&r.stopPropagation();return}// This is not replayable so we'll invoke it but without a target,
// in case the event system needs to trace it.
o8(e,t,r,null,n)}(e,t,n,r)}var aO=null;// Returns a SuspenseInstance or Container if it's blocked.
// The return_targetInst field above is conceptually part of the return value.
function aL(e,t,n,r){// TODO: Warn if _enabled is false.
aO=null;var a=i0(nX(r));if(null!==a){var o=rh(a);if(null===o)a=null;else{var i=o.tag;if(13===i){var l=rm(o);if(null!==l)// don't want this event dispatched twice through the event system.
// TODO: If this is the first discrete event in the queue. Schedule an increased
// priority for this boundary.
return l;// This shouldn't happen, something went wrong but to avoid blocking
// the whole system, dispatch the event without a target.
// TODO: Warn.
a=null}else if(3===i){if(au(o.stateNode))// the whole system.
return rv(o);a=null}else o!==a&&// component's mount, ignore it for now (that is, treat it as if it was an
// event on a non-React tree). We might also consider queueing events and
// dispatching them after the mount.
(a=null)}}return aO=a,null}function aN(e){switch(e){// Used by SimpleEventPlugin:
case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":// eslint-disable-next-line no-fallthrough
case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":// eslint-disable-next-line no-fallthrough
case"beforeblur":case"afterblur":// eslint-disable-next-line no-fallthrough
case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":// eslint-disable-next-line no-fallthrough
case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rE()){case rR:return 1;case rT:return 4;case r_:case rP:// TODO: Handle LowSchedulerPriority, somehow. Maybe the same lane as hydration.
return 16;case rD:return 536870912;default:return 16}default:return 16}}/**
 * These variables store information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 *
 */var aI=null,aM=null,az=null;function aj(){if(az)return az;var e,t,n=aM,r=n.length,a=aU(),o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);var l=t>1?1-t:void 0;return az=a.slice(e,l)}function aU(){return"value"in aI?aI.value:aI.textContent}/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function aA(e){var t,n=e.keyCode;return(// Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
("charCode"in e?0===(t=e.charCode)&&13===n&&(t=13):t=n,10===t&&(t=13),t>=32||13===t)?t:0)}function aF(){return!0}function aW(){return!1}// This is intentionally a factory so that we have different returned constructors.
// If we had a single constructor, it would be megamorphic and engines would deopt.
function aB(e){/**
   * Synthetic events are dispatched by event plugins, typically in response to a
   * top-level event delegation handler.
   *
   * These systems should generally use pooling to reduce the frequency of garbage
   * collection. The system should check `isPersistent` to determine whether the
   * event should be released into the pool after being dispatched. Users that
   * need a persisted event should invoke `persist`.
   *
   * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
   * normalizing browser quirks. Subclasses do not necessarily have to implement a
   * DOM interface; custom application-specific events can also subclass this.
   */function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)if(e.hasOwnProperty(i)){var l=e[i];l?this[i]=l(a):this[i]=a[i]}return(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?this.isDefaultPrevented=aF:this.isDefaultPrevented=aW,this.isPropagationStopped=aW,this}return ty(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=aF)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&// IE. This event does not support bubbling or cancelling, and
// any references to cancelBubble throw "Member not found".  A
// typeof check of "unknown" circumvents this issue (and is also
// IE specific).
(e.cancelBubble=!0),this.isPropagationStopped=aF)},/**
     * We release all dispatched `SyntheticEvent`s after each event loop, adding
     * them back into the pool. This allows a way to hold onto a reference that
     * won't be added back into the pool.
     */persist:function(){},/**
     * Checks if this event should be released back into the pool.
     *
     * @return {boolean} True if this should not be released, false otherwise.
     */isPersistent:aF}),t}/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var aV={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},aH=aB(aV),a$=ty({},aV,{view:0,detail:0}),aY=aB(a$),aq=ty({},a$,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a3,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==M&&(M&&"mousemove"===e.type?(N=e.screenX-M.screenX,I=e.screenY-M.screenY):(N=0,I=0),M=e),N)},movementY:function(e){return"movementY"in e?e.movementY:I}}),aQ=aB(aq),aK=aB(ty({},aq,{dataTransfer:0})),aG=aB(ty({},a$,{relatedTarget:0})),aX=aB(ty({},aV,{animationName:0,elapsedTime:0,pseudoElement:0})),aJ=aB(ty({},aV,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),aZ=aB(ty({},aV,{data:0})),a0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};// getModifierState. If getModifierState is not supported, we map it to a set of
// modifier keys exposed by the event. In this case, Lock-keys are not supported.
function a4(e){var t=this.nativeEvent;if(t.getModifierState)return t.getModifierState(e);var n=a2[e];return!!n&&!!t[n]}function a3(e){return a4}var a6=aB(ty({},a$,{key:/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function(e){if(e.key){// Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var t=a0[e.key]||e.key;if("Unidentified"!==t)return t}// Browser does not implement `key`, polyfill as much of it as we can.
if("keypress"===e.type){var n=aA(e);// The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a3,// Legacy Interface
charCode:function(e){return(// `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
"keypress"===e.type?aA(e):0)},keyCode:function(e){return(// `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
"keydown"===e.type||"keyup"===e.type?e.keyCode:0)},which:function(e){return(// `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
"keypress"===e.type?aA(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0)}})),a8=aB(ty({},aq,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),a5=aB(ty({},a$,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a3})),a7=aB(ty({},aV,{propertyName:0,elapsedTime:0,pseudoElement:0})),a9=aB(ty({},aq,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,// Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:0})),oe=[9,13,27,32],ot=eW&&"CompositionEvent"in window,on=null;eW&&"documentMode"in document&&(on=document.documentMode);// Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var or=eW&&"TextEvent"in window&&!on,oa=eW&&(!ot||on&&on>8&&on<=11),oo=!1;// In IE9+, we have access to composition events, but the data supplied
/**
 * Does our fallback mode think that this event is the end of composition?
 */function oi(e,t){switch(e){case"keyup":// Command keys insert or clear IME input.
return -1!==oe.indexOf(t.keyCode);case"keydown":// Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":// Events are not possible without cancelling IME.
return!0;default:return!1}}/**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function ol(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}/**
 * Check if a composition event was triggered by Korean IME.
 * Our fallback mode does not work well with IE's Korean IME,
 * so just use native composition events when Korean IME is used.
 * Although CompositionEvent.locale property is deprecated,
 * it is available in IE, where our fallback mode is enabled.
 *
 * @param {object} nativeEvent
 * @return {boolean}
 */function ou(e){return"ko"===e.locale}// Track the current IME composition status, if any.
var os=!1,oc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!oc[e.type]:"textarea"===t}function of(e,t,n,r){// Flag this event loop as needing state restore.
n2(r);var a=o7(t,"onChange");if(a.length>0){var o=new aH("onChange","change",null,n,r);e.push({event:o,listeners:a})}}/**
 * For IE shims
 */var op=null,oh=null;function om(e){oZ(e,0)}function ov(e){if(tB(i2(e)))return e}function oy(e,t){if("change"===e)return t}/**
 * SECTION: handle `input` event
 */var og=!1;/**
 * (For IE <=9) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function ob(){op&&(op.detachEvent("onpropertychange",ow),op=null,oh=null)}/**
 * (For IE <=9) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function ow(e){if("value"===e.propertyName&&ov(oh)){var t;of(t=[],oh,e,nX(e)),// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
n5(om,t)}}function ok(e,t,n){"focusin"===e?(// In IE9, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
ob(),op=t,oh=n,op.attachEvent("onpropertychange",ow)):"focusout"===e&&ob()}// For IE8 and IE9.
function oS(e,t){if("selectionchange"===e||"keyup"===e||"keydown"===e)// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
return ov(oh)}function ox(e,t){if("click"===e)return ov(t)}function oC(e,t){if("input"===e||"change"===e)return ov(t)}eW&&// deleting text, so we ignore its input events.
(og=/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function(e){if(!eW)return!1;var t="on"+e,n=t in document;if(!n){var r=document.createElement("div");r.setAttribute(t,"return;"),n="function"==typeof r[t]}return n}("input")&&(!document.documentMode||document.documentMode>9));var oE="function"==typeof Object.is?Object.is:/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t// eslint-disable-line no-self-compare
};/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function oR(e,t){if(oE(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;// Test for A's keys different from B.
for(var a=0;a<n.length;a++){var o=n[a];if(!eB.call(t,o)||!oE(e[o],t[o]))return!1}return!0}/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function oT(e){for(;e&&e.firstChild;)e=e.firstChild;return e}/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function o_(e,t){for(var n=oT(e),r=0,a=0;n;){if(3===n.nodeType){if(a=r+n.textContent.length,r<=t&&a>=t)return{node:n,offset:t-r};r=a}n=oT(/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}(n))}}function oP(e){return e&&3===e.nodeType}function oD(){for(var e=window,t=tV();t instanceof e.HTMLIFrameElement&&function(e){try{// Accessing the contentDocument of a HTMLIframeElement can cause the browser
// to throw, e.g. if it has a cross-origin src attribute.
// Safari will show an error in the console when the access results in "Blocked a frame with origin". e.g:
// iframe.contentDocument.defaultView;
// A safety way is to access one of the cross origin properties: Window or Location
// Which might result in "SecurityError" DOM Exception and it is compatible to Safari.
// https://html.spec.whatwg.org/multipage/browsers.html#integration-with-idl
return"string"==typeof e.contentWindow.location.href}catch(e){return!1}}(t);)t=tV((e=t.contentWindow).document);return t}/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 *//**
 * @hasSelectionCapabilities: we get the element types that support selection
 * from https://html.spec.whatwg.org/#do-not-apply, looking at `selectionStart`
 * and `selectionEnd` rows.
 */function oO(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var oL=eW&&"documentMode"in document&&document.documentMode<=11,oN=null,oI=null,oM=null,oz=!1;/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @param {object} nativeEventTarget
 * @return {?SyntheticEvent}
 */function oj(e,t,n){// Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;if(!oz&&null!=oN&&oN===tV(r)){// Only fire when selection has actually changed.
var a=/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 */function(e){if("selectionStart"in e&&oO(e))return{start:e.selectionStart,end:e.selectionEnd};var t=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}(oN);if(!oM||!oR(oM,a)){oM=a;var o=o7(oI,"onSelect");if(o.length>0){var i=new aH("onSelect","select",null,t,n);e.push({event:i,listeners:o}),i.target=oN}}}}/**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function oU(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}/**
 * A list of event names to a configurable list of vendor prefixes.
 */var oA={animationend:oU("Animation","AnimationEnd"),animationiteration:oU("Animation","AnimationIteration"),animationstart:oU("Animation","AnimationStart"),transitionend:oU("Transition","TransitionEnd")},oF={},oW={};/**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function oB(e){if(oF[e])return oF[e];if(!oA[e])return e;var t=oA[e];for(var n in t)if(t.hasOwnProperty(n)&&n in oW)return oF[e]=t[n];return e}!eW||(oW=document.createElement("div").style,"AnimationEvent"in window||(delete oA.animationend.animation,delete oA.animationiteration.animation,delete oA.animationstart.animation),"TransitionEvent"in window||delete oA.transitionend.transition);var oV=oB("animationend"),oH=oB("animationiteration"),o$=oB("animationstart"),oY=oB("transitionend"),oq=new Map,oQ=["abort","auxClick","cancel","canPlay","canPlayThrough","click","close","contextMenu","copy","cut","drag","dragEnd","dragEnter","dragExit","dragLeave","dragOver","dragStart","drop","durationChange","emptied","encrypted","ended","error","gotPointerCapture","input","invalid","keyDown","keyPress","keyUp","load","loadedData","loadedMetadata","loadStart","lostPointerCapture","mouseDown","mouseMove","mouseOut","mouseOver","mouseUp","paste","pause","play","playing","pointerCancel","pointerDown","pointerMove","pointerOut","pointerOver","pointerUp","progress","rateChange","reset","resize","seeked","seeking","stalled","submit","suspend","timeUpdate","touchCancel","touchEnd","touchStart","volumeChange","scroll","toggle","touchMove","waiting","wheel"];function oK(e,t){oq.set(e,t),eA(t,[e])}// TODO: remove top-level side effect.
(function(){for(var e=0;e<oQ.length;e++){var t=oQ[e];oK(t.toLowerCase(),"on"+(t[0].toUpperCase()+t.slice(1)))}// Special cases where event names don't match.
oK(oV,"onAnimationEnd"),oK(oH,"onAnimationIteration"),oK(o$,"onAnimationStart"),oK("dblclick","onDoubleClick"),oK("focusin","onFocus"),oK("focusout","onBlur"),oK(oY,"onTransitionEnd")})(),eF("onMouseEnter",["mouseout","mouseover"]),eF("onMouseLeave",["mouseout","mouseover"]),eF("onPointerEnter",["pointerout","pointerover"]),eF("onPointerLeave",["pointerout","pointerover"]),eA("onChange",["change","click","focusin","focusout","input","keydown","keyup","selectionchange"]),eA("onSelect",["focusout","contextmenu","dragend","focusin","keydown","keyup","mousedown","mouseup","selectionchange"]),eA("onBeforeInput",["compositionend","keypress","textInput","paste"]),eA("onCompositionEnd",["compositionend","focusout","keydown","keypress","keyup","mousedown"]),eA("onCompositionStart",["compositionstart","focusout","keydown","keypress","keyup","mousedown"]),eA("onCompositionUpdate",["compositionupdate","focusout","keydown","keypress","keyup","mousedown"]);var oG=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","resize","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],oX=new Set(["cancel","close","invalid","load","scroll","toggle"].concat(oG));// We should not delegate these events to the container, but rather
function oJ(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,/**
 * Same as invokeGuardedCallback, but instead of returning an error, it stores
 * it in a global so it can be rethrown by `rethrowCaughtError` later.
 * TODO: See if caughtError and rethrowError can be unified.
 *
 * @param {String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} context The context to use when calling the function
 * @param {...*} args Arguments for function
 */function(e,t,n,r,a,o,i,l,u){if(rc.apply(this,arguments),ro){var s=rd();rl||(rl=!0,ru=s)}}(r,t,void 0,e),e.currentTarget=null}function oZ(e,t){for(var n=(4&t)!=0,r=0;r<e.length;r++){var a=e[r];!function(e,t,n){var r;if(n)for(var a=t.length-1;a>=0;a--){var o=t[a],i=o.instance,l=o.currentTarget,u=o.listener;if(i!==r&&e.isPropagationStopped())return;oJ(e,u,l),r=i}else for(var s=0;s<t.length;s++){var c=t[s],d=c.instance,f=c.currentTarget,p=c.listener;if(d!==r&&e.isPropagationStopped())return;oJ(e,p,f),r=d}}(a.event,a.listeners,n);//  event system doesn't use pooling.
}// This would be a good time to rethrow if any of the event handlers threw.
!/**
 * During execution of guarded functions we will capture the first error which
 * we will rethrow to be handled by the top level error handler.
 */function(){if(rl){var e=ru;throw rl=!1,ru=null,e}}()}function o0(e,t){oX.has(e)||eI('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',e);var n,r=(void 0===(n=t[iX])&&(n=t[iX]=new Set),n),a=e+"__bubble";r.has(a)||(o3(t,e,2,!1),r.add(a))}function o1(e,t,n){oX.has(e)&&!t&&eI('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',e);var r=0;t&&(r|=4),o3(n,e,r,t)}// This is only used by createEventHandle when the
var o2="_reactListening"+Math.random().toString(36).slice(2);function o4(e){if(!e[o2]){e[o2]=!0,ez.forEach(function(t){// We handle selectionchange separately because it
// doesn't bubble and needs to be on the document.
"selectionchange"!==t&&(oX.has(t)||o1(t,!1,e),o1(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[o2]||(t[o2]=!0,o1("selectionchange",!1,t))}}function o3(e,t,n,r,a){var o,i,l=function(e,t,n){var r;switch(aN(t)){case 1:r=a_;break;case 4:r=aP;break;default:r=aD}return r.bind(null,t,n,e)}(e,t,n),u=void 0;// If passive option is not supported, then the event will be
(n9&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(u=!0),r)?void 0!==u?(o=u,e.addEventListener(t,l,{capture:!0,passive:o})):e.addEventListener(t,l,!0):void 0!==u?(i=u,e.addEventListener(t,l,{passive:i})):e.addEventListener(t,l,!1)}function o6(e,t){return e===t||8===e.nodeType&&e.parentNode===t}function o8(e,t,n,r,a){var o=r;if((1&t)==0&&(2&t)==0&&null!==r){// The below logic attempts to work out if we need to change
// the target fiber to a different ancestor. We had similar logic
// in the legacy event system, except the big difference between
// systems is that the modern event system now has an event listener
// attached to each React Root and React Portal Root. Together,
// the DOM nodes representing these roots are the "rootContainer".
// To figure out which ancestor instance we should use, we traverse
// up the fiber tree from the target instance and attempt to find
// root boundaries that match that of our current "rootContainer".
// If we find that "rootContainer", we find the parent fiber
// sub-tree for that root and make that our ancestor instance.
var i=r;e:for(;;){if(null===i)return;var l=i.tag;if(3===l||4===l){var u=i.stateNode.containerInfo;if(o6(u,a))break;if(4===l)for(// The target is a portal, but it's not the rootContainer we're looking for.
// Normally portals handle their own events all the way down to the root.
// So we should be able to stop now. However, we don't know if this portal
// was part of *our* root.
var s=i.return;null!==s;){var c=s.tag;if((3===c||4===c)&&o6(s.stateNode.containerInfo,a))// a parent of the Portal. That means we can ignore it because the
// Portal will bubble through to us.
return;s=s.return}// Now we need to find it's corresponding host fiber in the other
// tree. To do this we can use getClosestInstanceFromNode, but we
// need to validate that the fiber is a host instance, otherwise
// we need to traverse up through the DOM till we find the correct
// node that is from the other tree.
for(;null!==u;){var d=i0(u);if(null===d)return;var f=d.tag;if(5===f||6===f){i=o=d;continue e}u=u.parentNode}}i=i.return}}n5(function(){var r,a,i,l,u,s,c,d,f,p;return r=o,a=nX(n),void(// TODO: we should remove the concept of a "SimpleEventPlugin".
// This is the basic functionality of the event system. All
// the other plugins are essentially polyfills. So the plugin
// should probably be inlined somewhere and have its logic
// be core the to event system. This would potentially allow
// us to ship builds of React without the polyfilled plugins below.
function(e,t,n,r,a,o,i){var l=oq.get(t);if(void 0!==l){var u=aH,s=t;switch(t){case"keypress":// Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(0===aA(r))return;/* falls through */case"keydown":case"keyup":u=a6;break;case"focusin":s="focus",u=aG;break;case"focusout":s="blur",u=aG;break;case"beforeblur":case"afterblur":u=aG;break;case"click":// Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(2===r.button)return;/* falls through */case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":/* falls through */case"mouseout":case"mouseover":case"contextmenu":u=aQ;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=aK;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=a5;break;case oV:case oH:case o$:u=aX;break;case oY:u=a7;break;case"scroll":u=aY;break;case"wheel":u=a9;break;case"copy":case"cut":case"paste":u=aJ;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=a8}var c=(4&o)!=0,d=!c&&// TODO: ideally, we'd eventually add all events from
// nonDelegatedEvents list in DOMPluginEventSystem.
// Then we can remove this special list.
// This is a breaking change that can wait until React 18.
"scroll"===t,f=function(e,t,n,r,a,o){for(var i=r?null!==t?t+"Capture":null:t,l=[],u=e,s=null;null!==u;){var c=u,d=c.stateNode;// Handle listeners that are on HostComponents (i.e. <div>)
if(5===c.tag&&null!==d&&(s=d,null!==i)){var f=n7(u,i);null!=f&&l.push(o5(u,f,s))}// If we are only accumulating events for the target, then we don't
// continue to propagate through the React fiber tree to find other
// listeners.
if(a)break;// If we are processing the onBeforeBlur event, then we need to take
u=u.return}return l}// We should only use this function for:
(n,l,r.type,c,d);if(f.length>0){// Intentionally create event lazily.
var p=new u(l,s,null,r,a);e.push({event:p,listeners:f})}}}(l=i=[],u=e,s=r,c=n,d=a,f=t),(7&f)==0&&(/**
 * For almost every interaction we care about, there will be both a top-level
 * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
 * we do not extract duplicate events. However, moving the mouse into the
 * browser from outside will not fire a `mouseout` event. In this case, we use
 * the `mouseover` top-level event.
 */function(e,t,n,r,a,o,i){var l,u,s,c="mouseover"===t||"pointerover"===t,d="mouseout"===t||"pointerout"===t;if(c&&r!==nG){// If this is an over event with a target, we might have already dispatched
// the event in the out event of the other target. If this is replayed,
// then it's because we couldn't dispatch against this target previously
// so we have to do it now instead.
var f=r.relatedTarget||r.fromElement;if(f&&(i0(f)||f[iG]))return}if(d||c){if(a.window===a)l=a;else{// TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var p=a.ownerDocument;l=p?p.defaultView||p.parentWindow:window}if(d){var h=r.relatedTarget||r.toElement;if(u=n,null!==(s=h?i0(h):null)){var m=rh(s);(s!==m||5!==s.tag&&6!==s.tag)&&(s=null)}}else // Moving to a node from outside the window.
u=null,s=n;if(u!==s){var v,y,g,b,w=aQ,k="onMouseLeave",S="onMouseEnter",x="mouse";("pointerout"===t||"pointerover"===t)&&(w=a8,k="onPointerLeave",S="onPointerEnter",x="pointer");var C=null==u?l:i2(u),E=null==s?l:i2(s),R=new w(k,x+"leave",u,r,a);R.target=C,R.relatedTarget=E;var T=null;// We should only process this nativeEvent if we are processing
if(i0(a)===n){var _=new w(S,x+"enter",s,r,a);_.target=E,_.relatedTarget=C,T=_}v=T,y=u,g=s,b=y&&g?/**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function(e,t){for(var n=e,r=t,a=0,o=n;o;o=o9(o))a++;for(var i=0,l=r;l;l=o9(l))i++;// If A is deeper, crawl up.
for(;a-i>0;)n=o9(n),a--;// If B is deeper, crawl up.
for(;i-a>0;)r=o9(r),i--;// Walk in lockstep until we find a match.
for(var u=a;u--;){if(n===r||null!==r&&n===r.alternate)return n;n=o9(n),r=o9(r)}return null}(y,g):null,null!==y&&ie(e,R,y,b,!1),null!==g&&null!==v&&ie(e,v,g,b,!0)}}}(l,u,s,c,d),/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */function(e,t,n,r,a,o,i){var l,u,s,c,d,f=n?i2(n):window;if("select"===(l=f.nodeName&&f.nodeName.toLowerCase())||"input"===l&&"file"===f.type?c=oy:od(f)?og?c=oC:(c=oS,d=ok):(u=f.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===f.type||"radio"===f.type)&&(c=ox),c){var p=c(t,n);if(p){of(e,p,r,a);return}}d&&d(t,f,n),"focusout"===t&&(s=f._wrapperState)&&s.controlled&&"number"===f.type&&// If controlled, assign the value attribute to the current value on blur
t0(f,"number",f.value)}(l,u,s,c,d),/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */function(e,t,n,r,a,o,i){var l=n?i2(n):window;switch(t){// Track the input node that has focus.
case"focusin":(od(l)||"true"===l.contentEditable)&&(oN=l,oI=n,oM=null);break;case"focusout":oN=null,oI=null,oM=null;break;// Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case"mousedown":oz=!0;break;case"contextmenu":case"mouseup":case"dragend":oz=!1,oj(e,r,a);break;// Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case"selectionchange":if(oL)break;// falls through
case"keydown":case"keyup":oj(e,r,a)}}(l,u,s,c,d),/**
 * @return {?object} A SyntheticCompositionEvent.
 */function(e,t,n,r,a){if(ot?o=/**
 * Translate native top level events into event types.
 */function(e){switch(e){case"compositionstart":return"onCompositionStart";case"compositionend":return"onCompositionEnd";case"compositionupdate":return"onCompositionUpdate"}}(t):os?oi(t,r)&&(o="onCompositionEnd"):"keydown"===t&&229===r.keyCode&&(o="onCompositionStart"),o){oa&&!ou(r)&&(os||"onCompositionStart"!==o?"onCompositionEnd"===o&&os&&(i=aj()):(aI=a,aM=aU(),os=!0));var o,i,l=o7(n,o);if(l.length>0){var u=new aZ(o,t,null,r,a);if(e.push({event:u,listeners:l}),i)// This matches the property of native CompositionEventInterface.
u.data=i;else{var s=ol(r);null!==s&&(u.data=s)}}}}(l,u,s,c,d),/**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function(e,t,n,r,a){// If no characters are being inserted, no BeforeInput event should
// be fired.
if(o=or?function(e,t){switch(e){case"compositionend":return ol(t);case"keypress":if(32!==t.which)return null;return oo=!0," ";case"textInput":// Record the characters to be added to the DOM.
var n=t.data;// If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to ignore it.
if(" "===n&&oo)return null;return n;default:// For other native event types, do nothing.
return null}}(t,r):/**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 */function(e,t){// If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
// If composition event is available, we extract a string only at
// compositionevent, otherwise extract it at fallback events.
if(os){if("compositionend"===e||!ot&&oi(e,t)){var n=aj();return aI=null,aM=null,az=null,os=!1,n}return null}switch(e){case"paste":default:// If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case"keypress":/**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(!((t.ctrlKey||t.altKey||t.metaKey)&&// ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(t.ctrlKey&&t.altKey))){// IE fires the `keypress` event when a user types an emoji via
// Touch keyboard of Windows.  In such a case, the `char` property
// holds an emoji character like `\uD83D\uDE0A`.  Because its length
// is 2, the property `which` does not represent an emoji correctly.
// In such a case, we directly return the `char` property instead of
// using `which`.
if(t.char&&t.char.length>1)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return oa&&!ou(t)?null:t.data}}(t,r)){var o,i=o7(n,"onBeforeInput");if(i.length>0){var l=new aZ("onBeforeInput","beforeinput",null,r,a);e.push({event:l,listeners:i}),l.data=o}}}(l,u,s,c,d)),oZ(i,t))})}function o5(e,t,n){return{instance:e,listener:t,currentTarget:n}}// - BeforeInputEventPlugin
// - ChangeEventPlugin
// - SelectEventPlugin
// This is because we only process these plugins
// in the bubble phase, so we need to accumulate two
// phase event listeners (via emulation).
function o7(e,t){for(var n=t+"Capture",r=[],a=e;null!==a;){var o=a,i=o.stateNode;// Handle listeners that are on HostComponents (i.e. <div>)
if(5===o.tag&&null!==i){var l=n7(a,n);null!=l&&r.unshift(o5(a,l,i));var u=n7(a,t);null!=u&&r.push(o5(a,u,i))}a=a.return}return r}function o9(e){if(null===e)return null;do e=e.return;// TODO: If this is a HostRoot we might want to bail out.
while(e&&5!==e.tag)return e||null}function ie(e,t,n,r,a){for(var o=t._reactName,i=[],l=n;null!==l&&l!==r;){var u=l,s=u.alternate,c=u.stateNode,d=u.tag;if(null!==s&&s===r)break;if(5===d&&null!==c){if(a){var f=n7(l,o);null!=f&&i.unshift(o5(l,f,c))}else if(!a){var p=n7(l,o);null!=p&&i.push(o5(l,p,c))}}l=l.return}0!==i.length&&e.push({event:t,listeners:i})}// We should only use this function for:
var it=!1,ir="dangerouslySetInnerHTML",ia="suppressContentEditableWarning",io="suppressHydrationWarning",ii="autoFocus",il="children",iu="style",is="__html";z={// There are working polyfills for <dialog>. Let people use it.
dialog:!0,// Electron ships a custom <webview> tag to display external web content in
// an isolated frame and process.
// This tag is not present in non Electron environments such as JSDom which
// is often used for testing purposes.
// @see https://electronjs.org/docs/api/webview-tag
webview:!0},j=function(e,t){nz(e,t)||function(e,t){var n=[];for(var r in t)!function(e,t){if(eB.call(nA,t)&&nA[t])return!0;if(nW.test(t)){var n="aria-"+t.slice(4).toLowerCase(),r=nU.hasOwnProperty(n)?n:null;// DOM properties, then it is an invalid aria-* attribute.
if(null==r)return eI("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),nA[t]=!0,!0;// aria-* attributes should be lowercase; suggest the lowercase version.
if(t!==r)return eI("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,r),nA[t]=!0,!0}if(nF.test(t)){var a=t.toLowerCase(),o=nU.hasOwnProperty(a)?a:null;// DOM properties, then it is an invalid aria-* attribute.
if(null==o)return nA[t]=!0,!1;// aria-* attributes should be lowercase; suggest the lowercase version.
t!==o&&(eI("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,o),nA[t]=!0)}return!0}(0,r)&&n.push(r);var a=n.map(function(e){return"`"+e+"`"}).join(", ");1===n.length?eI("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",a,e):n.length>1&&eI("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props",a,e)}(e,t),"input"!==e&&"textarea"!==e&&"select"!==e||null==t||null!==t.value||nB||(nB=!0,"select"===e&&t.multiple?eI("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):eI("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e)),nz(e,t)||nK(e,t,{registrationNameDependencies:ej,possibleRegistrationNames:eU})},// browsers. It adds spaces and sorts the properties in some
// non-alphabetical order. Handling that would require sorting CSS
// properties in the client & server versions or applying
// `expectedStyle` to a temporary DOM node to read its `style` attribute
// normalized. Since it only affects IE, we're skipping style warnings
// in that browser completely in favor of doing all that work.
// See https://github.com/facebook/react/issues/11807
W=eW&&!document.documentMode,U=function(e,t,n){if(!it){var r=ip(n),a=ip(t);a!==r&&(it=!0,eI("Prop `%s` did not match. Server: %s Client: %s",e,JSON.stringify(a),JSON.stringify(r)))}},A=function(e){if(!it){it=!0;var t=[];e.forEach(function(e){t.push(e)}),eI("Extra attributes from the server: %s",t)}},F=function(e,t){!1===t?eI("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):eI("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)},// can be used for comparison.
B=function(e,t){// We could have created a separate document here to avoid
// re-initializing custom elements if they exist. But this breaks
// how <noscript> is being handled. So we use the same document.
// See the discussion in https://github.com/facebook/react/pull/11157.
var n=e.namespaceURI===ni?e.ownerDocument.createElement(e.tagName):e.ownerDocument.createElementNS(e.namespaceURI,e.tagName);return n.innerHTML=t,n.innerHTML};// It also can turn \u0000 into \uFFFD inside attributes.
// https://www.w3.org/TR/html5/single-page.html#preprocessing-the-input-stream
// If we have a mismatch, it might be caused by that.
// We will still patch up in this case but not fire the warning.
var ic=/\r\n?/g,id=/\u0000|\uFFFD/g;function ip(e){return eH(e)&&eI("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.",eV(e)),("string"==typeof e?e:""+e).replace(ic,"\n").replace(id,"")}function ih(e,t,n,r){var a=ip(t),o=ip(e);if(o!==a&&(r&&!it&&(it=!0,eI('Text content did not match. Server: "%s" Client: "%s"',o,a)),n))// client rendering, up to the nearest Suspense boundary.
throw Error("Text content does not match server-rendered HTML.")}function im(e){return 9===e.nodeType?e:e.ownerDocument}function iv(){}function iy(e){// Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
// https://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
// Just set it using the onclick property so that we don't have to manage any
// bookkeeping for it. Not sure if we need to clear it when the listener is
// removed.
// TODO: Only do this for the relevant Safaris maybe?
e.onclick=iv}function ig(e,t){it||(it=!0,eI("Did not expect server HTML to contain a <%s> in <%s>.",t.nodeName.toLowerCase(),e.nodeName.toLowerCase()))}function ib(e,t){it||(it=!0,eI('Did not expect server HTML to contain the text node "%s" in <%s>.',t.nodeValue,e.nodeName.toLowerCase()))}function iw(e,t,n){it||(it=!0,eI("Expected server HTML to contain a matching <%s> in <%s>.",t,e.nodeName.toLowerCase()))}function ik(e,t){""!==t&&(it||(it=!0,eI('Expected server HTML to contain a matching text node for "%s" in <%s>.',t,e.nodeName.toLowerCase())))}var iS=function(){},ix=function(){},iC=["address","applet","area","article","aside","base","basefont","bgsound","blockquote","body","br","button","caption","center","col","colgroup","dd","details","dir","div","dl","dt","embed","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","isindex","li","link","listing","main","marquee","menu","menuitem","meta","nav","noembed","noframes","noscript","object","ol","p","param","plaintext","pre","script","section","select","source","style","summary","table","tbody","td","template","textarea","tfoot","th","thead","title","tr","track","ul","wbr","xmp"],iE=["applet","caption","html","table","td","th","marquee","object","template",// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
"foreignObject","desc","title"],iR=iE.concat(["button"]),iT=["dd","dt","li","option","optgroup","p","rp","rt"],i_={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};ix=function(e,t){var n=ty({},e||i_),r={tag:t};return -1!==iE.indexOf(t)&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),-1!==iR.indexOf(t)&&(n.pTagInButtonScope=null),-1!==iC.indexOf(t)&&"address"!==t&&"div"!==t&&"p"!==t&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,"form"===t&&(n.formTag=r),"a"===t&&(n.aTagInScope=r),"button"===t&&(n.buttonTagInScope=r),"nobr"===t&&(n.nobrTagInScope=r),"p"===t&&(n.pTagInButtonScope=r),"li"===t&&(n.listItemTagAutoclosing=r),("dd"===t||"dt"===t)&&(n.dlItemTagAutoclosing=r),n};/**
   * Returns whether
   */var iP=function(e,t){// First, let's check if we're in an unusual parsing mode...
switch(t){// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case"select":return"option"===e||"optgroup"===e||"#text"===e;case"optgroup":return"option"===e||"#text"===e;// Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case"option":return"#text"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case"tr":return"th"===e||"td"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case"tbody":case"thead":case"tfoot":return"tr"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case"colgroup":return"col"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case"table":return"caption"===e||"colgroup"===e||"tbody"===e||"tfoot"===e||"thead"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case"head":return"base"===e||"basefont"===e||"bgsound"===e||"link"===e||"meta"===e||"title"===e||"noscript"===e||"noframes"===e||"style"===e||"script"===e||"template"===e;// https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case"html":return"head"===e||"body"===e||"frameset"===e;case"frameset":return"frame"===e;case"#document":return"html"===e}// Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(e){case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return"h1"!==t&&"h2"!==t&&"h3"!==t&&"h4"!==t&&"h5"!==t&&"h6"!==t;case"rp":case"rt":return -1===iT.indexOf(t);case"body":case"caption":case"col":case"colgroup":case"frameset":case"frame":case"head":case"html":case"tbody":case"td":case"tfoot":case"th":case"thead":case"tr":// These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return null==t}return!0},iD=function(e,t){switch(e){case"address":case"article":case"aside":case"blockquote":case"center":case"details":case"dialog":case"dir":case"div":case"dl":case"fieldset":case"figcaption":case"figure":case"footer":case"header":case"hgroup":case"main":case"menu":case"nav":case"ol":case"p":case"section":case"summary":case"ul":case"pre":case"listing":case"table":case"hr":case"xmp":case"h1":case"h2":case"h3":case"h4":case"h5":case"h6":return t.pTagInButtonScope;case"form":return t.formTag||t.pTagInButtonScope;case"li":return t.listItemTagAutoclosing;case"dd":case"dt":return t.dlItemTagAutoclosing;case"button":return t.buttonTagInScope;case"a":// Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return t.aTagInScope;case"nobr":return t.nobrTagInScope}return null},iO={};iS=function(e,t,n){var r=(n=n||i_).current,a=r&&r.tag;null!=t&&(null!=e&&eI("validateDOMNesting: when childText is passed, childTag should be null"),e="#text");var o=iP(e,a)?null:r,i=o?null:iD(e,n),l=o||i;if(l){var u=l.tag,s=!!o+"|"+e+"|"+u;if(!iO[s]){iO[s]=!0;var c=e,d="";if("#text"===e?/\S/.test(t)?c="Text nodes":(c="Whitespace text nodes",d=" Make sure you don't have any extra whitespace between tags on each line of your source code."):c="<"+e+">",o){var f="";"table"===u&&"tr"===e&&(f+=" Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."),eI("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s",c,u,d,f)}else eI("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.",c,u)}}};var iL="suppressHydrationWarning",iN=null,iI=null;function iM(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}// if a component just imports ReactDOM (e.g. for findDOMNode).
// Some environments might not have setTimeout or clearTimeout.
var iz="function"==typeof setTimeout?setTimeout:void 0,ij="function"==typeof clearTimeout?clearTimeout:void 0,iU="function"==typeof Promise?Promise:void 0,iA="function"==typeof queueMicrotask?queueMicrotask:void 0!==iU?function(e){return iU.resolve(null).then(e).catch(iF)}:iz;function iF(e){setTimeout(function(){throw e})}// -------------------
function iW(e,t){var n=t,r=0;// Delete all nodes within this suspense boundary.
do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType){var o=a.data;if("/$"===o){if(0===r){e.removeChild(a),aE(t);return}r--}else("$"===o||"$?"===o||"$!"===o)&&r++}n=a}while(n)// TODO: Warn, we didn't find the end comment boundary.
// Retry if any event replaying was blocked on this.
aE(t)}function iB(e){return"$?"===e.data}function iV(e){return"$!"===e.data}function iH(e){// Skip non-hydratable nodes.
for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){var n=e.data;if("$"===n||"$!"===n||"$?"===n)break;if("/$"===n)return null}}return e}function i$(e){return iH(e.nextSibling)}// SuspenseInstance. I.e. if its previous sibling is a Comment with
// SUSPENSE_x_START_DATA. Otherwise, null.
function iY(e){for(var t=e.previousSibling,n=0;t;){if(8===t.nodeType){var r=t.data;if("$"===r||"$!"===r||"$?"===r){if(0===n)return t;n--}else"/$"===r&&n++}t=t.previousSibling}return null}var iq=Math.random().toString(36).slice(2),iQ="__reactFiber$"+iq,iK="__reactProps$"+iq,iG="__reactContainer$"+iq,iX="__reactEvents$"+iq,iJ="__reactListeners$"+iq,iZ="__reactHandles$"+iq;// If the target node is part of a hydrated or not yet rendered subtree, then
// this may also return a SuspenseComponent or HostRoot to indicate that.
// Conceptually the HostRoot fiber is a child of the Container node. So if you
// pass the Container node as the targetNode, you will not actually get the
// HostRoot back. To get to the HostRoot, you need to pass a child of it.
// The same thing applies to Suspense boundaries.
function i0(e){var t=e[iQ];if(t)return t;for(// If the direct event target isn't a React owned DOM node, we need to look
// to see if one of its parents is a React owned DOM node.
var n=e.parentNode;n;){if(// We'll check if this is a container root that could include
// React nodes in the future. We need to check this first because
// if we're a child of a dehydrated container, we need to first
// find that inner container before moving on to finding the parent
// instance. Note that we don't check this field on  the targetNode
// itself because the fibers are conceptually between the container
// node and the first child. It isn't surrounding the container node.
// If it's not a container, we check if it's an instance.
t=n[iG]||n[iQ]){// Since this wasn't the direct target of the event, we might have
// stepped past dehydrated DOM nodes to get here. However they could
// also have been non-React nodes. We need to answer which one.
// If we the instance doesn't have any children, then there can't be
// a nested suspense boundary within it. So we can use this as a fast
// bailout. Most of the time, when people add non-React children to
// the tree, it is using a ref to a child-less DOM node.
// Normally we'd only need to check one of the fibers because if it
// has ever gone from having children to deleting them or vice versa
// it would have deleted the dehydrated boundary nested inside already.
// However, since the HostRoot starts out with an alternate it might
// have one on the alternate so we need to check in case this was a
// root.
var r=t.alternate;if(null!==t.child||null!==r&&null!==r.child)for(// Next we need to figure out if the node that skipped past is
// nested within a dehydrated boundary and if so, which one.
var a=iY(e);null!==a;){// We found a suspense instance. That means that we haven't
// hydrated it yet. Even though we leave the comments in the
// DOM after hydrating, and there are boundaries in the DOM
// that could already be hydrated, we wouldn't have found them
// through this pass since if the target is hydrated it would
// have had an internalInstanceKey on it.
// Let's get the fiber associated with the SuspenseComponent
// as the deepest instance.
var o=a[iQ];if(o)return o;// If we don't find a Fiber on the comment, it might be because
// we haven't gotten to hydrate it yet. There might still be a
// parent boundary that hasn't above this one so we need to find
// the outer most that is known.
a=iY(a);// If we don't find one, then that should mean that the parent
// host component also hasn't hydrated yet. We can return it
// below since it will bail out on the isMounted check later.
}return t}n=(e=n).parentNode}return null}/**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function i1(e){var t=e[iQ]||e[iG];return t&&(5===t.tag||6===t.tag||13===t.tag||3===t.tag)?t:null}/**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function i2(e){if(5===e.tag||6===e.tag)// a host component or host text.
return e.stateNode;// Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
throw Error("getNodeFromInstance: Invalid argument.")}function i4(e){return e[iK]||null}var i3={},i6=eO.ReactDebugCurrentFrame;function i8(e){if(e){var t=e._owner,n=function e(t,n,r){if(null==t)return"";if("function"==typeof t)return tx(t,!!((a=t.prototype)&&a.isReactComponent));if("string"==typeof t)return tk(t);switch(t){case tc:return tk("Suspense");case td:return tk("SuspenseList")}if("object"==typeof t)switch(t.$$typeof){case ts:return tx(t.render,!1);case tf:// Memo may contain any component type so we recursively resolve it.
return e(t.type,n,r);case tp:var a,o=t._payload,i=t._init;try{// Lazy may contain any component type so we recursively resolve it.
return e(i(o),n,r)}catch(e){}}return""}(e.type,e._source,t?t.type:null);i6.setExtraStackFrame(n)}else i6.setExtraStackFrame(null)}function i5(e,t,n,r,a){// $FlowFixMe This is okay but Flow doesn't know it.
var o=Function.call.bind(eB);for(var i in e)if(o(e,i)){var l=void 0;// Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{// This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
if("function"!=typeof e[i]){// eslint-disable-next-line react-internal/prod-error-codes
var u=Error((r||"React class")+": "+n+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw u.name="Invariant Violation",u}l=e[i](t,i,r,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){l=e}!l||l instanceof Error||(i8(a),eI("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",r||"React class",n,i,typeof l),i8(null)),l instanceof Error&&!(l.message in i3)&&(// Only monitor this failure once because there tends to be a lot of the
// same error.
i3[l.message]=!0,i8(a),eI("Failed %s type: %s",n,l.message),i8(null))}}var i7=[];V=[];var i9=-1;function le(e){return{current:e}}function lt(e,t){if(i9<0){eI("Unexpected pop.");return}t!==V[i9]&&eI("Unexpected Fiber popped."),e.current=i7[i9],i7[i9]=null,V[i9]=null,i9--}function ln(e,t,n){i7[++i9]=e.current,V[i9]=n,e.current=t}H={};var lr={};Object.freeze(lr);var la=le(lr),lo=le(!1),li=lr;// A cursor to a boolean indicating whether the context has changed.
function ll(e,t,n){return n&&ld(t)?li:la.current}function lu(e,t,n){var r=e.stateNode;r.__reactInternalMemoizedUnmaskedChildContext=t,r.__reactInternalMemoizedMaskedChildContext=n}function ls(e,t){var n=e.type.contextTypes;if(!n)return lr;// Avoid recreating masked context unless unmasked context has changed.
// Failing to do this will result in unnecessary calls to componentWillReceiveProps.
// This may trigger infinite loops if componentWillReceiveProps calls setState.
var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={};for(var o in n)a[o]=t[o];return i5(n,a,"context",t_(e)||"Unknown"),r&&lu(e,t,a),a}function lc(){return lo.current}function ld(e){return null!=e.childContextTypes}function lf(e){lt(lo,e),lt(la,e)}function lp(e){lt(lo,e),lt(la,e)}function lh(e,t,n){if(la.current!==lr)throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");ln(la,t,e),ln(lo,n,e)}function lm(e,t,n){var r=e.stateNode,a=t.childContextTypes;// It has only been added in Fiber to match the (unintentional) behavior in Stack.
if("function"!=typeof r.getChildContext){var o=t_(e)||"Unknown";return H[o]||(H[o]=!0,eI("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.",o,o)),n}var i=r.getChildContext();for(var l in i)if(!(l in a))throw Error((t_(e)||"Unknown")+'.getChildContext(): key "'+l+'" is not defined in childContextTypes.');return i5(a,i,"child context",t_(e)||"Unknown"),ty({},n,i)}function lv(e){var t=e.stateNode,n=t&&t.__reactInternalMemoizedMergedChildContext||lr;// We push the context as early as possible to ensure stack integrity.
return(// Inherit the parent's did-perform-work value to avoid inadvertently blocking updates.
li=la.current,ln(la,n,e),ln(lo,lo.current,e),!0)}function ly(e,t,n){var r=e.stateNode;if(!r)throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");if(n){// Merge parent and own context.
// Skip this if we're not updating due to sCU.
// This avoids unnecessarily recomputing memoized values.
var a=lm(e,t,li);r.__reactInternalMemoizedMergedChildContext=a,// It is important to unwind the context in the reverse order.
lt(lo,e),lt(la,e),ln(la,a,e),ln(lo,n,e)}else lt(lo,e),ln(lo,n,e)}var lg=null,lb=!1,lw=!1;function lk(e){// Push this callback into an internal queue. We'll flush these either in
// the next tick, or earlier if something calls `flushSyncCallbackQueue`.
null===lg?lg=[e]:// we already scheduled one when we created the queue.
lg.push(e)}function lS(){if(!lw&&null!==lg){// Prevent re-entrance.
lw=!0;var e=0,t=ai;try{var n=lg;// TODO: Is this necessary anymore? The only user code that runs in this
for(ai=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}lg=null,lb=!1}catch(t){throw null!==lg&&(lg=lg.slice(e+1)),// Resume flushing in the next tick
rw(rR,lS),t}finally{ai=t,lw=!1}}return null}// TODO: Use the unified fiber stack module instead of this local one?
// Intentionally not using it yet to derisk the initial implementation, because
// the way we push/pop these values is a bit unusual. If there's a mistake, I'd
// rather the ids be wrong than crash the whole reconciler.
var lx=[],lC=0,lE=null,lR=0,lT=[],l_=0,lP=null,lD=1,lO="";function lL(e,t){// This is called right after we reconcile an array (or iterator) of child
// fibers, because that's the only place where we know how many children in
// the whole set without doing extra work later, or storing addtional
// information on the fiber.
//
// That's why this function is separate from pushTreeId — it's called during
// the render phase of the fork parent, not the child, which is where we push
// the other context values.
//
// In the Fizz implementation this is much simpler because the child is
// rendered in the same callstack as the parent.
//
// It might be better to just add a `forks` field to the Fiber type. It would
// make this module simpler.
lj(),lx[lC++]=lR,lx[lC++]=lE,lE=e,lR=t}function lN(e,t,n){lj(),lT[l_++]=lD,lT[l_++]=lO,lT[l_++]=lP,lP=e;var r=lD,a=lO,o=lM(r)-1,i=r&~(1<<o),l=n+1,u=lM(t)+o;// consideration the leading 1 we use to mark the end of the sequence.
if(u>30){// We overflowed the bitwise-safe range. Fall back to slower algorithm.
// This branch assumes the length of the base id is greater than 5; it won't
// work for smaller ids, because you need 5 bits per character.
//
// We encode the id in multiple steps: first the base id, then the
// remaining digits.
//
// Each 5 bit sequence corresponds to a single base 32 character. So for
// example, if the current id is 23 bits long, we can convert 20 of those
// bits into a string of 4 characters, with 3 bits left over.
//
// First calculate how many bits in the base id represent a complete
// sequence of characters.
var s=o-o%5,c=(i&(1<<s)-1).toString(32),d=o-s;// Then create a bitmask that selects only those bits.
lD=1<<lM(t)+d|(l<<d|i>>s),lO=c+a}else lD=1<<u|(l<<o|i),lO=a}function lI(e){lj(),null!==e.return&&(lL(e,1),lN(e,1,0))}function lM(e){return 32-rK(e)}function lz(e){// Restore the previous values.
// This is a bit more complicated than other context-like modules in Fiber
// because the same Fiber may appear on the stack multiple times and for
// different reasons. We have to keep popping until the work-in-progress is
// no longer at the top of the stack.
for(;e===lE;)lE=lx[--lC],lx[lC]=null,lR=lx[--lC],lx[lC]=null;for(;e===lP;)lP=lT[--l_],lT[l_]=null,lO=lT[--l_],lT[l_]=null,lD=lT[--l_],lT[l_]=null}function lj(){lF||eI("Expected to be hydrating. This is a bug in React. Please file an issue.")}// This may have been an insertion or a hydration.
var lU=null,lA=null,lF=!1,lW=!1,lB=null;function lV(e,t){switch(e.tag){case 3:var n;n=e.stateNode.containerInfo,1===t.nodeType?ig(n,t):8===t.nodeType||ib(n,t);break;case 5:var r,a,o=(/*                 */1&e.mode)!=/*                         */0;e.type,r=e.memoizedProps,a=e.stateNode,(o||!0!==r[iL])&&(1===t.nodeType?ig(a,t):8===t.nodeType||ib(a,t));break;case 13:var i,l=e.memoizedState;null!==l.dehydrated&&null!==(i=l.dehydrated.parentNode)&&(1===t.nodeType?ig(i,t):8===t.nodeType||ib(i,t))}}function lH(e,t){lV(e,t);var n,r=((n=ph(5,null,null,0)).elementType="DELETED",n);r.stateNode=t,r.return=e;var a=e.deletions;null===a?(e.deletions=[r],e.flags|=/*                */16):a.push(r)}function l$(e,t){if(!lW)switch(e.tag){case 3:var n=e.stateNode.containerInfo;switch(t.tag){case 5:var r=t.type;t.pendingProps,iw(n,r);break;case 6:ik(n,t.pendingProps)}break;case 5:e.type;var a=e.memoizedProps,o=e.stateNode;switch(t.tag){case 5:var i=t.type;t.pendingProps,((1&e.mode)!=0||!0!==a[iL])&&iw(o,i);break;case 6:var l=t.pendingProps;((1&e.mode)!=0||!0!==a[iL])&&ik(o,l)}break;case 13:var u=e.memoizedState.dehydrated;if(null!==u)switch(t.tag){case 5:var s,c=t.type;t.pendingProps,null!==(s=u.parentNode)&&iw(s,c);break;case 6:var d,f=t.pendingProps;null!==(d=u.parentNode)&&ik(d,f)}break;default:return}}function lY(e,t){t.flags=-4097&t.flags|/*                    */2,l$(e,t)}function lq(e,t){switch(e.tag){case 5:var n=e.type;e.pendingProps;var r=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t;if(null!==r)return e.stateNode=r,lU=e,lA=iH(r.firstChild),!0;return!1;case 6:var a=""===e.pendingProps||3!==t.nodeType?null:t;if(null!==a)return e.stateNode=a,lU=e,lA=null,!0;return!1;case 13:var o=8!==t.nodeType?null:t;if(null!==o){var i,l={dehydrated:o,treeContext:(lj(),null!==lP)?{id:lD,overflow:lO}:null,retryLane:1073741824};e.memoizedState=l;// This simplifies the code for getHostSibling and deleting nodes,
// since it doesn't have to consider all Suspense boundaries and
// check if they're dehydrated ones or not.
var u=((i=ph(18,null,null,0)).stateNode=o,i);return u.return=e,e.child=u,lU=e,// it during the first pass. Instead, we'll reenter it later.
lA=null,!0}return!1;default:return!1}}function lQ(e){return(1&e.mode)!=0&&(/*                   */128&e.flags)==0}function lK(e){throw Error("Hydration failed because the initial UI does not match what was rendered on the server.")}function lG(e){if(lF){var t=lA;if(!t){lQ(e)&&(l$(lU,e),lK()),lY(lU,e),lF=!1,lU=e;return}var n=t;if(!lq(e,t)){lQ(e)&&(l$(lU,e),lK()),// We use this as a heuristic. It's based on intuition and not data so it
// might be flawed or unnecessary.
t=i$(n);var r=lU;if(!t||!lq(e,t)){// Nothing to hydrate. Make it an insertion.
lY(lU,e),lF=!1,lU=e;return}// We matched the next one, we'll now assume that the first one was
// superfluous and we'll delete it. Since we can't eagerly delete it
// we'll have to schedule a deletion. To do that, this node needs a dummy
// fiber associated with it.
lH(r,n)}}}function lX(e){for(var t=e.return;null!==t&&5!==t.tag&&3!==t.tag&&13!==t.tag;)t=t.return;lU=t}function lJ(e){if(e!==lU)// tree.
return!1;if(!lF)return(// If we're not currently hydrating but we're in a hydration context, then
// we were an insertion and now need to pop up reenter hydration of our
// siblings.
lX(e),lF=!0,!1);// If we have any remaining hydratable nodes, we need to delete them now.
// We only do this deeper than head and body since they tend to have random
// other nodes in them. We also ignore components with pure text content in
// side of them. We also don't delete anything inside the root container.
if(3!==e.tag&&(5!==e.tag||"head"!==(t=e.type)&&"body"!==t&&!iM(e.type,e.memoizedProps))){var t,n=lA;if(n){if(lQ(e))lZ(e),lK();else for(;n;)lH(e,n),n=i$(n)}}return lX(e),lA=13===e.tag?function(e){var t=e.memoizedState,n=null!==t?t.dehydrated:null;if(!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");return function(e){for(var t=e.nextSibling,n=0;t;){if(8===t.nodeType){var r=t.data;if("/$"===r){if(0===n)return i$(t);n--}else("$"===r||"$!"===r||"$?"===r)&&n++}t=t.nextSibling}// TODO: Warn, we didn't find the end comment boundary.
return null}// Returns the SuspenseInstance if this node is a direct child of a
(n)}(e):lU?i$(e.stateNode):null,!0}function lZ(e){for(var t=lA;t;)lV(e,t),t=i$(t)}function l0(){lU=null,lA=null,lF=!1,lW=!1}function l1(){null!==lB&&(// Successfully completed a forced client render. The errors that occurred
// during the hydration attempt are now recovered. We will log them in
// commit phase, once the entire tree has finished.
fj(lB),lB=null)}function l2(e){null===lB?lB=[e]:lB.push(e)}var l4=eO.ReactCurrentBatchConfig,l3={recordUnsafeLifecycleWarnings:function(e,t){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(e,t){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},l6=function(e){for(var t=null,n=e;null!==n;)/*               */8&n.mode&&(t=n),n=n.return;return t},l8=function(e){var t=[];return e.forEach(function(e){t.push(e)}),t.sort().join(", ")},l5=[],l7=[],l9=[],ue=[],ut=[],un=[],ur=new Set;l3.recordUnsafeLifecycleWarnings=function(e,t){// Dedupe strategy: Warn once per component.
!ur.has(e.type)&&("function"==typeof t.componentWillMount&&// Don't warn about react-lifecycles-compat polyfilled components.
!0!==t.componentWillMount.__suppressDeprecationWarning&&l5.push(e),8&e.mode&&"function"==typeof t.UNSAFE_componentWillMount&&l7.push(e),"function"==typeof t.componentWillReceiveProps&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&l9.push(e),8&e.mode&&"function"==typeof t.UNSAFE_componentWillReceiveProps&&ue.push(e),"function"==typeof t.componentWillUpdate&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&ut.push(e),8&e.mode&&"function"==typeof t.UNSAFE_componentWillUpdate&&un.push(e))},l3.flushPendingUnsafeLifecycleWarnings=function(){// We do an initial pass to gather component names
var e=new Set;l5.length>0&&(l5.forEach(function(t){e.add(t_(t)||"Component"),ur.add(t.type)}),l5=[]);var t=new Set;l7.length>0&&(l7.forEach(function(e){t.add(t_(e)||"Component"),ur.add(e.type)}),l7=[]);var n=new Set;l9.length>0&&(l9.forEach(function(e){n.add(t_(e)||"Component"),ur.add(e.type)}),l9=[]);var r=new Set;ue.length>0&&(ue.forEach(function(e){r.add(t_(e)||"Component"),ur.add(e.type)}),ue=[]);var a=new Set;ut.length>0&&(ut.forEach(function(e){a.add(t_(e)||"Component"),ur.add(e.type)}),ut=[]);var o=new Set;un.length>0&&(un.forEach(function(e){o.add(t_(e)||"Component"),ur.add(e.type)}),un=[]),t.size>0&&eI("Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n\nPlease update the following components: %s",l8(t)),r.size>0&&eI("Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n\nPlease update the following components: %s",l8(r)),o.size>0&&eI("Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n\nPlease update the following components: %s",l8(o)),e.size>0&&eN("componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move code with side effects to componentDidMount, and set initial state in the constructor.\n* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",l8(e)),n.size>0&&eN("componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state\n* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",l8(n)),a.size>0&&eN("componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.\n\n* Move data fetching code or side effects to componentDidUpdate.\n* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.\n\nPlease update the following components: %s",l8(a))};var ua=new Map,uo=new Set;// Tracks components we have already warned about.
function ui(e,t){if(e&&e.defaultProps){// Resolve default props. Taken from ReactElement
var n=ty({},t),r=e.defaultProps;for(var a in r)void 0===n[a]&&(n[a]=r[a]);return n}return t}l3.recordLegacyContextWarning=function(e,t){var n=l6(e);if(null===n){eI("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");return}// Dedup strategy: Warn once per component.
if(!uo.has(e.type)){var r=ua.get(n);(null!=e.type.contextTypes||null!=e.type.childContextTypes||null!==t&&"function"==typeof t.getChildContext)&&(void 0===r&&(r=[],ua.set(n,r)),r.push(e))}},l3.flushLegacyContextWarning=function(){ua.forEach(function(e,t){if(0!==e.length){var n=e[0],r=new Set;e.forEach(function(e){r.add(t_(e)||"Component"),uo.add(e.type)});var a=l8(r);try{tM(n),eI("Legacy context API has been detected within a strict-mode tree.\n\nThe old API will be supported in all 16.x releases, but applications using it should migrate to the new version.\n\nPlease update the following components: %s\n\nLearn more about this warning here: https://reactjs.org/link/legacy-context",a)}finally{tI()}}})},l3.discardPendingWarnings=function(){l5=[],l7=[],l9=[],ue=[],ut=[],un=[],ua=new Map};var ul=le(null);// Use this to detect multiple renderers using the same context
$={};var uu=null,us=null,uc=null,ud=!1;function uf(){// This is called right before React yields execution, to ensure `readContext`
// cannot be called outside the render phase.
uu=null,us=null,uc=null,ud=!1}function up(e,t,n){ln(ul,t._currentValue,e),t._currentValue=n,void 0!==t._currentRenderer&&null!==t._currentRenderer&&t._currentRenderer!==$&&eI("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."),t._currentRenderer=$}function uh(e,t){var n=ul.current;lt(ul,t),e._currentValue=n}function um(e,t,n){for(// Update the child lanes of all the ancestors, including the alternates.
var r=e;null!==r;){var a=r.alternate;if((r.childLanes&t)===t?null!==a&&(a.childLanes&t)!==t&&(a.childLanes=a.childLanes|t):(r.childLanes=r.childLanes|t,null!==a&&(a.childLanes=a.childLanes|t)),r===n)break;r=r.return}r!==n&&eI("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.")}function uv(e,t){uu=e,us=null,uc=null;var n=e.dependencies;null!==n&&null!==n.firstContext&&((n.lanes&t)!=0&&(c$=!0),// Reset the work-in-progress list
n.firstContext=null)}function uy(e){// This warning would fire if you read context inside a Hook like useMemo.
// Unlike the class check below, it's not enforced in production for perf.
ud&&eI("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");var t=e._currentValue;if(uc===e);else{var n={context:e,memoizedValue:t,next:null};if(null===us){if(null===uu)throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");// This is the first dependency for this component. Create a new list.
us=n,uu.dependencies={lanes:0,firstContext:n}}else us=us.next=n}return t}// render. When this render exits, either because it finishes or because it is
// interrupted, the interleaved updates will be transferred onto the main part
// of the queue.
var ug=null;function ub(e){null===ug?ug=[e]:ug.push(e)}function uw(e,t,n,r){var a=t.interleaved;return null===a?(// This is the first update. Create a circular list.
n.next=n,// be transferred to the pending queue.
ub(t)):(n.next=a.next,a.next=n),t.interleaved=n,uk(e,r)}function uk(e,t){// Update the source fiber's lanes
e.lanes=e.lanes|t;var n=e.alternate;null!==n&&(n.lanes=n.lanes|t),null===n&&(4098&e.flags)!=0&&pe(e);for(var r=e,a=e.return;null!==a;)(a.childLanes=a.childLanes|t,null!==(n=a.alternate))?n.childLanes=n.childLanes|t:(4098&a.flags)!=0&&pe(e),r=a,a=a.return;return 3===r.tag?r.stateNode:null}var uS=!1;function ux(e){var t={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};e.updateQueue=t}function uC(e,t){// Clone the update queue from current. Unless it's already a clone.
var n=t.updateQueue,r=e.updateQueue;if(n===r){var a={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects};t.updateQueue=a}}function uE(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uR(e,t,n){var r,a=e.updateQueue;if(null===a)return null;var o=a.shared;if(q!==o||Y||(eI("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."),Y=!0),(/*                */2&d8)!=/*             */0){// This is an unsafe render phase update. Add directly to the update
// queue so we can process it immediately during the current render.
var i=o.pending;// this fiber. This is for backwards compatibility in the case where you
// update a different component during render phase than the one that is
// currently renderings (a pattern that is accompanied by a warning).
return null===i?t.next=t:(t.next=i.next,i.next=t),o.pending=t,uk(e,n)}return null===(r=o.interleaved)?(// This is the first update. Create a circular list.
t.next=t,// be transferred to the pending queue.
ub(o)):(t.next=r.next,r.next=t),o.interleaved=t,uk(e,n)}function uT(e,t,n){var r=t.updateQueue;if(null!==r){var a=r.shared;if(r8(n)){var o=a.lanes,i=// have finished. We can remove them from the shared queue, which represents
// a superset of the actually pending lanes. In some cases we may entangle
// more than we need to, but that's OK. In fact it's worse if we *don't*
// entangle when we should.
(o&=e.pendingLanes)|n;// If any entangled lanes are no longer pending on the root, then they must
a.lanes=i,// the lane finished since the last time we entangled it. So we need to
// entangle it again, just to be sure.
ar(e,i)}}}function u_(e,t){// Captured updates are updates that are thrown by a child during the render
// phase. They should be discarded if the render is aborted. Therefore,
// we should only put them on the work-in-progress queue, not the current one.
var n=e.updateQueue,r=e.alternate;// Check if the work-in-progress queue is a clone.
if(null!==r){var a=r.updateQueue;if(n===a){// The work-in-progress queue is the same as current. This happens when
// we bail out on a parent fiber that then captures an error thrown by
// a child. Since we want to append the update only to the work-in
// -progress queue, we need to clone the updates. We usually clone during
// processUpdateQueue, but that didn't happen in this case because we
// skipped over the parent when we bailed out.
var o=null,i=null,l=n.firstBaseUpdate;if(null!==l){// Loop through the updates and clone them.
var u=l;do{var s={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};null===i?o=i=s:(i.next=s,i=s),u=u.next}while(null!==u)// Append the captured update the end of the cloned list.
null===i?o=i=t:(i.next=t,i=t)}else o=i=t;n={baseState:a.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:a.shared,effects:a.effects},e.updateQueue=n;return}}// Append the update to the end of the list.
var c=n.lastBaseUpdate;null===c?n.firstBaseUpdate=t:c.next=t,n.lastBaseUpdate=t}function uP(e,t,n,r){// This is always non-null on a ClassComponent or HostRoot
var a=e.updateQueue;uS=!1,q=a.shared;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;// and last so that it's non-circular.
var u=l,s=u.next;u.next=null,null===i?o=s:i.next=s,i=u;// we need to transfer the updates to that queue, too. Because the base
// queue is a singly-linked list with no cycles, we can append to both
// lists and take advantage of structural sharing.
// TODO: Pass `current` as argument
var c=e.alternate;if(null!==c){// This is always non-null on a ClassComponent or HostRoot
var d=c.updateQueue,f=d.lastBaseUpdate;f!==i&&(null===f?d.firstBaseUpdate=s:f.next=s,d.lastBaseUpdate=u)}}// These values may change as we process the queue.
if(null!==o){for(// Iterate through the list of updates to compute the result.
var p,h=a.baseState,m=0,v=null,y=null,g=null,b=o;;){var w=b.lane,k=b.eventTime;if((r&w)===w){// This update does have sufficient priority.
if(null!==g){var S={eventTime:k,// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null};g=g.next=S}// Process this update.
if(h=function(e,t,n,r,a,o){switch(n.tag){case 1:var i=n.payload;if("function"==typeof i){ud=!0;var l=i.call(o,r,a);if(8&e.mode){rU(!0);try{i.call(o,r,a)}finally{rU(!1)}}return ud=!1,l}// State object
return i;case 3:e.flags=-65537&e.flags|128;// Intentional fallthrough
case 0:var u,s=n.payload;if("function"==typeof s){if(ud=!0,u=s.call(o,r,a),8&e.mode){rU(!0);try{s.call(o,r,a)}finally{rU(!1)}}ud=!1}else u=s;if(null==u)break;// Merge the partial state and the previous state.
return ty({},r,u);case 2:uS=!0}return r}(e,0,b,h,t,n),null!==b.callback&&// If the update was already committed, we should not queue its
// callback again.
0!==b.lane){e.flags|=/*                     */64;var x=a.effects;null===x?a.effects=[b]:x.push(b)}}else{// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var C={eventTime:k,lane:w,tag:b.tag,payload:b.payload,callback:b.callback,next:null};null===g?(y=g=C,v=h):g=g.next=C,// Update the remaining priority in the queue.
m|=w}if(null===(b=b.next)){if(null===(l=a.shared.pending))break;// An update was scheduled from inside a reducer. Add the new
// pending updates to the end of the list and keep processing.
var E=l,R=E.next;// Intentionally unsound. Pending updates form a circular list, but we
E.next=null,b=R,a.lastBaseUpdate=E,a.shared.pending=null}}null===g&&(v=h),a.baseState=v,a.firstBaseUpdate=y,a.lastBaseUpdate=g;// process them during this render, but we do need to track which lanes
// are remaining.
var T=a.shared.interleaved;if(null!==T){var _=T;do m|=_.lane,_=_.next;while(_!==T)}else null===o&&// zero once the queue is empty.
(a.shared.lanes=0);fo|=p=m,e.lanes=m,e.memoizedState=h}q=null}function uD(e,t,n){// Commit the effects
var r=t.effects;if(t.effects=null,null!==r)for(var a=0;a<r.length;a++){var o=r[a],i=o.callback;null!==i&&(o.callback=null,function(e,t){if("function"!=typeof e)throw Error("Invalid argument passed as callback. Expected a function. Instead received: "+e);e.call(t)}(i,n))}}Y=!1,q=null;var uO={},uL=new eP.Component().refs;// React.Component uses a shared frozen object by default.
Q=new Set,K=new Set,G=new Set,X=new Set,et=new Set,J=new Set,en=new Set,er=new Set;var uN=new Set;function uI(e,t,n,r){var a=e.memoizedState,o=n(r,a);if(8&e.mode){rU(!0);try{// Invoke the function an extra time to help detect side-effects.
o=n(r,a)}finally{rU(!1)}}Z(t,o);var i=null==o?a:ty({},a,o);e.memoizedState=i,0===e.lanes&&(e.updateQueue.baseState=i)}ee=function(e,t){if(null!==e&&"function"!=typeof e){var n=t+"_"+e;uN.has(n)||(uN.add(n),eI("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",t,e))}},Z=function(e,t){if(void 0===t){var n=tR(e)||"Component";J.has(n)||(J.add(n),eI("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",n))}},// it causes problems. This is meant to give a nicer error message for
// ReactDOM15.unstable_renderSubtreeIntoContainer(reactDOM16Component,
// ...)) which otherwise throws a "_processChildContext is not a function"
// exception.
Object.defineProperty(uO,"_processChildContext",{enumerable:!1,value:function(){throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).")}}),Object.freeze(uO);var uM={isMounted:function(e){var t=rp.current;if(null!==t&&1===t.tag){var n=t.stateNode;n._warnedAboutRefsInRender||eI("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t_(t)||"A component"),n._warnedAboutRefsInRender=!0}var r=rf(e);return!!r&&rh(r)===r},enqueueSetState:function(e,t,n){var r=rf(e),a=fO(),o=fL(r),i=uE(a,o);i.payload=t,null!=n&&(ee(n,"setState"),i.callback=n);var l=uR(r,i,o);null!==l&&(fN(l,r,o,a),uT(l,r,o)),rQ(r,o)},enqueueReplaceState:function(e,t,n){var r=rf(e),a=fO(),o=fL(r),i=uE(a,o);i.tag=1,i.payload=t,null!=n&&(ee(n,"replaceState"),i.callback=n);var l=uR(r,i,o);null!==l&&(fN(l,r,o,a),uT(l,r,o)),rQ(r,o)},enqueueForceUpdate:function(e,t){var n=rf(e),r=fO(),a=fL(n),o=uE(r,a);o.tag=2,null!=t&&(ee(t,"forceUpdate"),o.callback=t);var i=uR(n,o,a);null!==i&&(fN(i,n,a,r),uT(i,n,a)),null!==rM&&"function"==typeof rM.markForceUpdateScheduled&&rM.markForceUpdateScheduled(n,a)}};function uz(e,t,n,r,a,o,i){var l=e.stateNode;if("function"==typeof l.shouldComponentUpdate){var u=l.shouldComponentUpdate(r,o,i);if(8&e.mode){rU(!0);try{// Invoke the function an extra time to help detect side-effects.
u=l.shouldComponentUpdate(r,o,i)}finally{rU(!1)}}return void 0===u&&eI("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",tR(t)||"Component"),u}return!t.prototype||!t.prototype.isPureReactComponent||!oR(n,r)||!oR(a,o)}function uj(e,t){t.updater=uM,e.stateNode=t,t._reactInternals=e,t._reactInternalInstance=uO}function uU(e,t,n){var r=!1,a=lr,o=lr,i=t.contextType;if("contextType"in t&&!(null===i||void 0!==i&&i.$$typeof===tu&&void 0===i._context)&&!er.has(t)){er.add(t);var l="";l=void 0===i?" However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.":"object"!=typeof i?" However, it is set to a "+typeof i+".":i.$$typeof===tl?" Did you accidentally pass the Context.Provider instead?":void 0!==i._context?" Did you accidentally pass the Context.Consumer instead?":" However, it is set to an object with keys {"+Object.keys(i).join(", ")+"}.",eI("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",tR(t)||"Component",l)}"object"==typeof i&&null!==i?o=uy(i):(a=ll(e,t,!0),o=(r=null!=t.contextTypes)?ls(e,a):lr);var u=new t(n,o);// Instantiate twice to help detect side-effects.
if(8&e.mode){rU(!0);try{u=new t(n,o);// eslint-disable-line no-new
}finally{rU(!1)}}var s=e.memoizedState=null!==u.state&&void 0!==u.state?u.state:null;if(uj(e,u),"function"==typeof t.getDerivedStateFromProps&&null===s){var c=tR(t)||"Component";K.has(c)||(K.add(c),eI("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",c,null===u.state?"null":"undefined",c))}// If new component APIs are defined, "unsafe" lifecycles won't be called.
// Warn about these lifecycles if they are present.
// Don't warn about react-lifecycles-compat polyfilled methods though.
if("function"==typeof t.getDerivedStateFromProps||"function"==typeof u.getSnapshotBeforeUpdate){var d=null,f=null,p=null;if("function"==typeof u.componentWillMount&&!0!==u.componentWillMount.__suppressDeprecationWarning?d="componentWillMount":"function"==typeof u.UNSAFE_componentWillMount&&(d="UNSAFE_componentWillMount"),"function"==typeof u.componentWillReceiveProps&&!0!==u.componentWillReceiveProps.__suppressDeprecationWarning?f="componentWillReceiveProps":"function"==typeof u.UNSAFE_componentWillReceiveProps&&(f="UNSAFE_componentWillReceiveProps"),"function"==typeof u.componentWillUpdate&&!0!==u.componentWillUpdate.__suppressDeprecationWarning?p="componentWillUpdate":"function"==typeof u.UNSAFE_componentWillUpdate&&(p="UNSAFE_componentWillUpdate"),null!==d||null!==f||null!==p){var h=tR(t)||"Component",m="function"==typeof t.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";X.has(h)||(X.add(h),eI("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n%s uses %s but also contains the following legacy lifecycles:%s%s%s\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://reactjs.org/link/unsafe-component-lifecycles",h,m,null!==d?"\n  "+d:"",null!==f?"\n  "+f:"",null!==p?"\n  "+p:""))}}return r&&lu(e,a,o),u}function uA(e,t,n,r){var a=t.state;if("function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==a){var o=t_(e)||"Component";Q.has(o)||(Q.add(o),eI("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",o)),uM.enqueueReplaceState(t,t.state,null)}}// Invokes the mount life-cycles on a previously never rendered instance.
function uF(e,t,n,r){a=e.stateNode,o=tR(t)||"Component",a.render||(t.prototype&&"function"==typeof t.prototype.render?eI("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?",o):eI("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.",o)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||eI("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",o),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&eI("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",o),a.propTypes&&eI("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",o),a.contextType&&eI("contextType was defined as an instance property on %s. Use a static property to define contextType instead.",o),a.contextTypes&&eI("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",o),t.contextType&&t.contextTypes&&!en.has(t)&&(en.add(t),eI("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.",o)),"function"==typeof a.componentShouldUpdate&&eI("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",o),t.prototype&&t.prototype.isPureReactComponent&&void 0!==a.shouldComponentUpdate&&eI("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",tR(t)||"A pure component"),"function"==typeof a.componentDidUnmount&&eI("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",o),"function"==typeof a.componentDidReceiveProps&&eI("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",o),"function"==typeof a.componentWillRecieveProps&&eI("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",o),"function"==typeof a.UNSAFE_componentWillRecieveProps&&eI("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",o),i=a.props!==n,void 0!==a.props&&i&&eI("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o,o),a.defaultProps&&eI("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",o,o),"function"!=typeof a.getSnapshotBeforeUpdate||"function"==typeof a.componentDidUpdate||G.has(t)||(G.add(t),eI("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",tR(t))),"function"==typeof a.getDerivedStateFromProps&&eI("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"==typeof a.getDerivedStateFromError&&eI("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",o),"function"==typeof t.getSnapshotBeforeUpdate&&eI("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",o),(l=a.state)&&("object"!=typeof l||t6(l))&&eI("%s.state: must be set to an object or null",o),"function"==typeof a.getChildContext&&"object"!=typeof t.childContextTypes&&eI("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",o);var a,o,i,l,u,s,c=e.stateNode;c.props=n,c.state=e.memoizedState,c.refs=uL,ux(e);var d=t.contextType;if("object"==typeof d&&null!==d)c.context=uy(d);else{var f=ll(e,t,!0);c.context=ls(e,f)}if(c.state===n){var p=tR(t)||"Component";et.has(p)||(et.add(p),eI("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",p))}8&e.mode&&l3.recordLegacyContextWarning(e,c),l3.recordUnsafeLifecycleWarnings(e,c),c.state=e.memoizedState;var h=t.getDerivedStateFromProps;"function"==typeof h&&(uI(e,t,h,n),c.state=e.memoizedState),"function"!=typeof t.getDerivedStateFromProps&&"function"!=typeof c.getSnapshotBeforeUpdate&&("function"==typeof c.UNSAFE_componentWillMount||"function"==typeof c.componentWillMount)&&(u=c.state,"function"==typeof c.componentWillMount&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&c.UNSAFE_componentWillMount(),u!==c.state&&(eI("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",t_(e)||"Component"),uM.enqueueReplaceState(c,c.state,null)),// process them now.
uP(e,n,c,r),c.state=e.memoizedState),"function"==typeof c.componentDidMount&&(s=4194308,(/*              */16&e.mode)!=0&&(s|=/*               */16777216),e.flags|=s)}var uW=function(e,t){};function uB(e,t,n){var r=n.ref;if(null!==r&&"function"!=typeof r&&"object"!=typeof r){// TODO: Clean this up once we turn on the string ref warning for
// everyone, because the strict mode case will no longer be relevant
if(8&e.mode&&// We warn in ReactElement.js if owner and self are equal for string refs
// because these cannot be automatically converted to an arrow function
// using a codemod. Therefore, we don't have to warn about string refs again.
!(n._owner&&n._self&&n._owner.stateNode!==n._self)){var a=t_(e)||"Component";ei[a]||(eI('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',r),ei[a]=!0)}if(n._owner){var o,i=n._owner;if(i){if(1!==i.tag)throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");o=i.stateNode}if(!o)throw Error("Missing owner for string ref "+r+". This error is likely caused by a bug in React. Please file an issue.");// Assigning this to a const so Flow knows it won't change in the closure
var l=o;eH(r)&&eI("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.","ref",eV(r));var u=""+r;// Check if previous string ref matches new string ref
if(null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===u)return t.ref;var s=function(e){var t=l.refs;t===uL&&(t=l.refs={}),null===e?delete t[u]:t[u]=e};return s._stringRef=u,s}if("string"!=typeof r)throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");if(!n._owner)throw Error("Element ref was specified as a string ("+r+") but no owner was set. This could happen for one of the following reasons:\n1. You may be adding a ref to a function component\n2. You may be adding a ref to a component that was not created inside a component's render method\n3. You have multiple copies of React loaded\nSee https://reactjs.org/link/refs-must-have-owner for more information.")}return r}function uV(e,t){var n=Object.prototype.toString.call(t);throw Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.")}function uH(e){var t=t_(e)||"Component";eu[t]||(eu[t]=!0,eI("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it."))}function u$(e){var t=e._payload;return(0,e._init)(t)}// This wrapper function exists because I expect to clone the code in each path
// to be able to optimize each path individually by branching early. This needs
// a compiler or we can do it manually. Helpers that don't need this branching
// live outside of this function.
function uY(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(// TODO: For the shouldClone case, this could be micro-optimized a bit by
// assuming that after the first child we've already added everything.
var a=r;null!==a;)t(n,a),a=a.sibling;return null}function r(e,t){for(// Add the remaining children to a temporary map so that we can find them by
// keys quickly. Implicit (null) keys get added to this set with their index
// instead.
var n=new Map,r=t;null!==r;)null!==r.key?n.set(r.key,r):n.set(r.index,r),r=r.sibling;return n}function a(e,t){// We currently set sibling to null and index to 0 here because it is easy
// to forget to do before returning it. E.g. for the single child case.
var n=pv(e,t);return n.index=0,n.sibling=null,n}function o(t,n,r){if(t.index=r,!e)return(// During hydration, the useId algorithm needs to know which fibers are
// part of a list of children (arrays, iterators).
t.flags|=/*                       */1048576,n);var a=t.alternate;if(null===a)return(// This is an insertion.
t.flags|=2,n);var o=a.index;return o<n?(// This is a move.
t.flags|=2,n):o}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){if(null===t||6!==t.tag){// Insert
var o=pk(n,e.mode,r);return o.return=e,o}// Update
var i=a(t,n);return i.return=e,i}function u(e,t,n,r){var o=n.type;if(o===ta)return c(e,t,n.props.children,r,n.key);if(null!==t&&(t.elementType===o||pd(t,n)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
"object"==typeof o&&null!==o&&o.$$typeof===tp&&u$(o)===t.type)){// Move based on index
var i=a(t,n.props);return i.ref=uB(e,t,n),i.return=e,i._debugSource=n._source,i._debugOwner=n._owner,i}// Insert
var l=pg(n,e.mode,r);return l.ref=uB(e,t,n),l.return=e,l}function s(e,t,n,r){if(null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation){// Insert
var o=pS(n,e.mode,r);return o.return=e,o}// Update
var i=a(t,n.children||[]);return i.return=e,i}function c(e,t,n,r,o){if(null===t||7!==t.tag){// Insert
var i=pb(n,e.mode,r,o);return i.return=e,i}// Update
var l=a(t,n);return l.return=e,l}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t){// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
var r=pk(""+t,e.mode,n);return r.return=e,r}if("object"==typeof t&&null!==t){switch(t.$$typeof){case tn:var a=pg(t,e.mode,n);return a.ref=uB(e,null,t),a.return=e,a;case tr:var o=pS(t,e.mode,n);return o.return=e,o;case tp:var i=t._payload;return d(e,(0,t._init)(i),n)}if(t6(t)||tv(t)){var l=pb(t,e.mode,n,null);return l.return=e,l}uV(e,t)}return"function"==typeof t&&uH(e),null}function f(e,t,n,r){// Update the fiber if the keys match, otherwise return null.
var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return(// Text nodes don't have keys. If the previous node is implicitly keyed
// we can continue to replace it without aborting even if it is not a text
// node.
null!==a?null:l(e,t,""+n,r));if("object"==typeof n&&null!==n){switch(n.$$typeof){case tn:if(n.key===a)return u(e,t,n,r);return null;case tr:if(n.key===a)return s(e,t,n,r);return null;case tp:var o=n._payload;return f(e,t,(0,n._init)(o),r)}if(t6(n)||tv(n))return null!==a?null:c(e,t,n,r,null);uV(e,n)}return"function"==typeof n&&uH(e),null}function p(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case tn:return u(t,e.get(null===r.key?n:r.key)||null,r,a);case tr:return s(t,e.get(null===r.key?n:r.key)||null,r,a);case tp:var o=r._payload;return p(e,t,n,(0,r._init)(o),a)}if(t6(r)||tv(r))return c(t,e.get(n)||null,r,a,null);uV(t,r)}return"function"==typeof r&&uH(t),null}/**
   * Warns if there is a duplicate or missing key
   */function h(e,t,n){if("object"!=typeof e||null===e)return t;switch(e.$$typeof){case tn:case tr:uW(e,n);var r=e.key;if("string"!=typeof r)break;if(null===t){(t=new Set).add(r);break}if(!t.has(r)){t.add(r);break}eI("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",r);break;case tp:var a=e._payload;h((0,e._init)(a),t,n)}return t}return(// itself. They will be added to the side-effect list as we pass through the
// children and the parent.
function l(u,s,c,m){// Handle object types
if("object"==typeof c&&null!==c&&c.type===ta&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case tn:return i(function(e,r,o,i){for(var l=o.key,u=r;null!==u;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){var s=o.type;if(s===ta){if(7===u.tag){n(e,u.sibling);var c=a(u,o.props.children);return c.return=e,c._debugSource=o._source,c._debugOwner=o._owner,c}}else if(u.elementType===s||pd(u,o)||// Lazy types should reconcile their resolved type.
// We need to do this after the Hot Reloading check above,
// because hot reloading has different semantics than prod because
// it doesn't resuspend. So we can't let the call below suspend.
"object"==typeof s&&null!==s&&s.$$typeof===tp&&u$(s)===u.type){n(e,u.sibling);var d=a(u,o.props);return d.ref=uB(e,u,o),d.return=e,d._debugSource=o._source,d._debugOwner=o._owner,d}// Didn't match.
n(e,u);break}t(e,u),u=u.sibling}if(o.type===ta){var f=pb(o.props.children,e.mode,i,o.key);return f.return=e,f}var p=pg(o,e.mode,i);return p.ref=uB(e,r,o),p.return=e,p}(u,s,c,m));case tr:return i(function(e,r,o,i){for(var l=o.key,u=r;null!==u;){// TODO: If key === null and child.key === null, then this only applies to
// the first item in the list.
if(u.key===l){if(4===u.tag&&u.stateNode.containerInfo===o.containerInfo&&u.stateNode.implementation===o.implementation){n(e,u.sibling);var s=a(u,o.children||[]);return s.return=e,s}n(e,u);break}t(e,u),u=u.sibling}var c=pS(o,e.mode,i);return c.return=e,c}// This API will tag the children with the side-effect of the reconciliation
(u,s,c,m));case tp:var v=c._payload;return l(u,s,(0,c._init)(v),m)}if(t6(c))return function(a,i,l,u){for(var s=null,c=0;c<l.length;c++)s=h(l[c],s,a);for(// First, validate keys.
var m=null,v=null,y=i,g=0,b=0,w=null;null!==y&&b<l.length;b++){y.index>b?(w=y,y=null):w=y.sibling;var k=f(a,y,l[b],u);if(null===k){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===y&&(y=w);break}e&&y&&null===k.alternate&&// need to delete the existing child.
t(a,y),g=o(k,g,b),null===v?m=k:// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
v.sibling=k,v=k,y=w}if(b===l.length)return(// We've reached the end of the new children. We can delete the rest.
n(a,y),lF&&lL(a,b),m);if(null===y){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;b<l.length;b++){var S=d(a,l[b],u);null!==S&&(g=o(S,g,b),null===v?m=S:v.sibling=S,v=S)}return lF&&lL(a,b),m}// Add all children to a key map for quick lookups.
for(var x=r(a,y);b<l.length;b++){var C=p(x,a,b,l[b],u);null!==C&&(e&&null!==C.alternate&&// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
x.delete(null===C.key?b:C.key),g=o(C,g,b),null===v?m=C:v.sibling=C,v=C)}return e&&// to add them to the deletion list.
x.forEach(function(e){return t(a,e)}),lF&&lL(a,b),m}(u,s,c,m);if(tv(c))return function(a,i,l,u){// This is the same implementation as reconcileChildrenArray(),
// but using the iterator instead.
var s=tv(l);if("function"!=typeof s)throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");"function"==typeof Symbol&&// $FlowFixMe Flow doesn't know about toStringTag
"Generator"===l[Symbol.toStringTag]&&(eo||eI("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."),eo=!0),l.entries===s&&(ea||eI("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),ea=!0);// We'll get a different iterator later for the main pass.
var c=s.call(l);if(c)for(var m=null,v=c.next();!v.done;v=c.next())m=h(v.value,m,a);var y=s.call(l);if(null==y)throw Error("An iterable object provided no iterator.");for(var g=null,b=null,w=i,k=0,S=0,x=null,C=y.next();null!==w&&!C.done;S++,C=y.next()){w.index>S?(x=w,w=null):x=w.sibling;var E=f(a,w,C.value,u);if(null===E){// TODO: This breaks on empty slots like null children. That's
// unfortunate because it triggers the slow path all the time. We need
// a better way to communicate whether this was a miss or null,
// boolean, undefined, etc.
null===w&&(w=x);break}e&&w&&null===E.alternate&&// need to delete the existing child.
t(a,w),k=o(E,k,S),null===b?g=E:// I.e. if we had null values before, then we want to defer this
// for each null value. However, we also don't want to call updateSlot
// with the previous one.
b.sibling=E,b=E,w=x}if(C.done)return(// We've reached the end of the new children. We can delete the rest.
n(a,w),lF&&lL(a,S),g);if(null===w){// If we don't have any more existing children we can choose a fast path
// since the rest will all be insertions.
for(;!C.done;S++,C=y.next()){var R=d(a,C.value,u);null!==R&&(k=o(R,k,S),null===b?g=R:b.sibling=R,b=R)}return lF&&lL(a,S),g}// Add all children to a key map for quick lookups.
for(var T=r(a,w);!C.done;S++,C=y.next()){var _=p(T,a,S,C.value,u);null!==_&&(e&&null!==_.alternate&&// current, that means that we reused the fiber. We need to delete
// it from the child list so that we don't add it to the deletion
// list.
T.delete(null===_.key?S:_.key),k=o(_,k,S),null===b?g=_:b.sibling=_,b=_)}return e&&// to add them to the deletion list.
T.forEach(function(e){return t(a,e)}),lF&&lL(a,S),g}(u,s,c,m);uV(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c?i(function(e,t,r,o){// There's no need to check for keys on text nodes since we don't have a
// way to define them.
if(null!==t&&6===t.tag){// We already have an existing node so let's just update it and delete
// the rest.
n(e,t.sibling);var i=a(t,r);return i.return=e,i}// The existing first child is not a text node so we need to create one
// and delete the existing ones.
n(e,t);var l=pk(r,e.mode,o);return l.return=e,l}(u,s,""+c,m)):("function"==typeof c&&uH(u),n(u,s))})}ea=!1,eo=!1,ei={},/**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */el={},eu={},uW=function(e,t){if(null!==e&&"object"==typeof e&&e._store&&!e._store.validated&&null==e.key){if("object"!=typeof e._store)throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");e._store.validated=!0;var n=t_(t)||"Component";el[n]||(el[n]=!0,eI('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'))}};var uq=uY(!0),uQ=uY(!1),uK={},uG=le(uK),uX=le(uK),uJ=le(uK);function uZ(e){if(e===uK)throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");return e}function u0(){return uZ(uJ.current)}function u1(e,t){// Push current root instance onto the stack;
// This allows us to reset root when portals are popped.
ln(uJ,t,e),// This enables us to pop only Fibers that provide unique contexts.
ln(uX,e,e),// However, we can't just call getRootHostContext() and push it because
// we'd have a different number of entries on the stack depending on
// whether getRootHostContext() throws somewhere in renderer code or not.
// So we push an empty value first. This lets us safely unwind on errors.
ln(uG,uK,e);var n=function(e){var t,n,r=e.nodeType;switch(r){case 9:case 11:t=9===r?"#document":"#fragment";var a=e.documentElement;n=a?a.namespaceURI:ns(null,"");break;default:var o=8===r?e.parentNode:e;n=ns(o.namespaceURI||null,t=o.tagName)}var i=t.toLowerCase();return{namespace:n,ancestorInfo:ix(null,i)}}(t);// Now that we know this function doesn't throw, replace it.
lt(uG,e),ln(uG,n,e)}function u2(e){lt(uG,e),lt(uX,e),lt(uJ,e)}function u4(){return uZ(uG.current)}function u3(e){uZ(uJ.current);var t,n=uZ(uG.current),r=(t=e.type,{namespace:ns(n.namespace,t),ancestorInfo:ix(n.ancestorInfo,t)});n!==r&&(// Track the context and the Fiber that provided it.
// This enables us to pop only Fibers that provide unique contexts.
ln(uX,e,e),ln(uG,r,e))}function u6(e){// Do not pop unless this Fiber provided the current context.
// pushHostContext() only pushes Fibers that provide unique contexts.
uX.current===e&&(lt(uG,e),lt(uX,e))}var u8=le(0);function u5(e,t){ln(u8,t,e)}function u7(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n){var r=n.dehydrated;if(null===r||iB(r)||iV(r))return t}}else if(19===t.tag&&// revealOrder undefined can't be trusted because it don't
// keep track of whether it suspended or not.
void 0!==t.memoizedProps.revealOrder){if((128&t.flags)!=0)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}// and should be reset before starting a new render.
// This tracks which mutable sources need to be reset after a render.
var u9=[];function se(){for(var e=0;e<u9.length;e++)u9[e]._workInProgressVersionPrimary=null;u9.length=0}var st=eO.ReactCurrentDispatcher,sn=eO.ReactCurrentBatchConfig;es=new Set;// These are set right before calling the component.
var sr=0,sa=null,so=null,si=null,sl=!1,su=!1,ss=0,sc=0,sd=null,sf=null,sp=-1,sh=!1;// The work-in-progress fiber. I've named it differently to distinguish it from
function sm(){var e=sd;null===sf?sf=[e]:sf.push(e)}function sv(){var e=sd;null!==sf&&sf[++sp]!==e&&function(e){var t=t_(sa);if(!es.has(t)&&(es.add(t),null!==sf)){for(var n="",r=0;r<=sp;r++){// lol @ IE not supporting String#repeat
for(var a=sf[r],o=r===sp?e:a,i=r+1+". "+a;i.length<30;)i+=" ";i+=o+"\n",n+=i}eI("React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks\n\n   Previous render            Next render\n   ------------------------------------------------------\n%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n",t,n)}}(e)}function sy(e){null==e||t6(e)||// It's unlikely their type would change as usually you define them inline.
eI("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",sd,typeof e)}function sg(){throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.")}function sb(e,t){if(sh)return!1;if(null===t)return eI("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",sd),!1;// Don't bother comparing lengths in prod because these arrays should be
// passed inline.
e.length!==t.length&&eI("The final argument passed to %s changed size between renders. The order and size of this array must remain constant.\n\nPrevious: %s\nIncoming: %s",sd,"["+t.join(", ")+"]","["+e.join(", ")+"]");for(var n=0;n<t.length&&n<e.length;n++)if(!oE(e[n],t[n]))return!1;return!0}function sw(e,t,n,r,a,o){sr=o,sa=t,sf=null!==e?e._debugHookTypes:null,sp=-1,sh=null!==e&&e.type!==t.type,t.memoizedState=null,t.updateQueue=null,t.lanes=0,null!==e&&null!==e.memoizedState?st.current=cm:null!==sf?// but no stateful hooks have been used.
// We want to match the production code behavior (which will use HooksDispatcherOnMount),
// but with the extra DEV validation to ensure hooks ordering hasn't changed.
// This dispatcher does that.
st.current=ch:st.current=cp;var i=n(r,a);// Check if there was a render phase update
if(su){// Keep rendering in a loop for as long as render phase updates continue to
// be scheduled. Use a counter to prevent infinite loops.
var l=0;do{if(su=!1,ss=0,l>=25)throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");l+=1,// Even when hot reloading, allow dependencies to stabilize
// after first render to prevent infinite render phase updates.
sh=!1,so=null,si=null,t.updateQueue=null,// Also validate hook order for cascading updates.
sp=-1,st.current=cv,i=n(r,a)}while(su)}// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrance.
st.current=cf,t._debugHookTypes=sf;// hookTypesDev could catch more cases (e.g. context) but only in DEV bundles.
var u=null!==so&&null!==so.next;// localIdCounter = 0;
if(sr=0,sa=null,so=null,si=null,sd=null,sf=null,sp=-1,null!==e&&(14680064&e.flags)!=(14680064&t.flags)&&// Disable this warning in legacy mode, because legacy Suspense is weird
// and creates false positives. To make this work in legacy mode, we'd
// need to mark fibers that commit in an incomplete state, somehow. For
// now I'll disable the warning that most of the bugs that would trigger
// it are either exclusive to concurrent mode or exist in both.
(1&e.mode)!=0&&eI("Internal React error: Expected static flag was missing. Please notify the React team."),sl=!1,u)throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");return i}function sk(){// This should be called immediately after every renderWithHooks call.
// Conceptually, it's part of the return value of renderWithHooks; it's only a
// separate function to avoid using an array tuple.
var e=0!==ss;return ss=0,e}function sS(e,t,n){t.updateQueue=e.updateQueue,(16&t.mode)!=0?t.flags&=-50333701:t.flags&=-2053,e.lanes=e.lanes&~n}function sx(){if(// We can assume the previous dispatcher is always this one, since we set it
// at the beginning of the render phase and there's no re-entrance.
st.current=cf,sl){for(// There were render phase updates. These are only valid for this render
// phase, which we are now aborting. Remove the updates from the queues so
// they do not persist to the next render. Do not remove updates from hooks
// that weren't processed.
//
// Only reset the updates from the queue if it has a clone. If it does
// not have a clone, that means it wasn't processed, and the updates were
// scheduled before we entered the render phase.
var e=sa.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}sl=!1}sr=0,sa=null,so=null,si=null,sf=null,sp=-1,sd=null,ca=!1,su=!1,ss=0}function sC(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===si?sa.memoizedState=si=e:si=si.next=e,si}function sE(){if(null===so){var e,t,n=sa.alternate;e=null!==n?n.memoizedState:null}else e=so.next;if(null!==(t=null===si?sa.memoizedState:si.next))t=// There's already a work-in-progress. Reuse it.
(si=t).next,so=e;else{// Clone from the current hook.
if(null===e)throw Error("Rendered more hooks than during the previous render.");var r={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null};null===si?sa.memoizedState=si=r:si=si.next=r}return si}function sR(){return{lastEffect:null,stores:null}}function sT(e,t){// $FlowFixMe: Flow doesn't like mixed types
return"function"==typeof t?t(e):t}function s_(e,t,n){var r,a=sC();r=void 0!==n?n(t):t,a.memoizedState=a.baseState=r;var o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r};a.queue=o;var i=o.dispatch=cl.bind(null,sa,o);return[a.memoizedState,i]}function sP(e,t,n){var r=sE(),a=r.queue;if(null===a)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;var o=so,i=o.baseQueue,l=a.pending;// The last rebase update that is NOT part of the base state.
if(null!==l){// We have new updates that haven't been processed yet.
// We'll add them to the base queue.
if(null!==i){// Merge the pending queue and the base queue.
var u=i.next,s=l.next;i.next=s,l.next=u}o.baseQueue!==i&&// the future if we implement resuming, or some form of that.
eI("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."),o.baseQueue=i=l,a.pending=null}if(null!==i){// We have a queue to process.
var c=i.next,d=o.baseState,f=null,p=null,h=null,m=c;do{var v=m.lane;if((sr&v)===v){// This update does have sufficient priority.
if(null!==h){var y={// This update is going to be committed so we never want uncommit
// it. Using NoLane works because 0 is a subset of all bitmasks, so
// this will never be skipped by the check above.
lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};h=h.next=y}// Process this update.
// we can use the eagerly computed state
d=m.hasEagerState?m.eagerState:e(d,m.action)}else{// Priority is insufficient. Skip this update. If this is the first
// skipped update, the previous update/state is the new base
// update/state.
var g,b={lane:v,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};null===h?(p=h=b,f=d):h=h.next=b,// Update the remaining priority in the queue.
// TODO: Don't need to accumulate this. Instead, we can remove
// renderLanes from the original lanes.
sa.lanes=sa.lanes|v,fo|=g=v}m=m.next}while(null!==m&&m!==c)null===h?f=d:h.next=p,oE(d,r.memoizedState)||(c$=!0),r.memoizedState=d,r.baseState=f,r.baseQueue=h,a.lastRenderedState=d}// Interleaved updates are stored on a separate queue. We aren't going to
// process them during this render, but we do need to track which lanes
// are remaining.
var w=a.interleaved;if(null!==w){var k=w;do{var S,x=k.lane;sa.lanes=sa.lanes|x,fo|=S=x,k=k.next}while(k!==w)}else null===i&&// zero once the queue is empty.
(a.lanes=0);var C=a.dispatch;return[r.memoizedState,C]}function sD(e,t,n){var r=sE(),a=r.queue;if(null===a)throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");a.lastRenderedReducer=e;// This is a re-render. Apply the new render phase updates to the previous
// work-in-progress hook.
var o=a.dispatch,i=a.pending,l=r.memoizedState;if(null!==i){// The queue doesn't persist past this render pass.
a.pending=null;var u=i.next,s=u;do l=e(l,s.action),s=s.next;while(s!==u)// Mark that the fiber performed work, but only if the new state is
oE(l,r.memoizedState)||(c$=!0),r.memoizedState=l,null===r.baseQueue&&(r.baseState=l),a.lastRenderedState=l}return[l,o]}function sO(e,t,n){}function sL(e,t,n){}function sN(e,t,n){var r,a=sa,o=sC();if(lF){if(void 0===n)throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");r=n(),ec||r===n()||(eI("The result of getServerSnapshot should be cached to avoid an infinite loop"),ec=!0)}else{if(r=t(),ec||oE(r,t())||(eI("The result of getSnapshot should be cached to avoid an infinite loop"),ec=!0),null===d5)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(30&sr)!=0||sM(a,t,r)}// Read the current snapshot from the store on every render. This breaks the
// normal rules of React, and only works because store updates are
// always synchronous.
o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,sY(sj.bind(null,a,i,e),[e]),// this whenever subscribe, getSnapshot, or value changes. Because there's no
// clean-up function, and we track the deps correctly, we can call pushEffect
// directly, without storing any additional state. For the same reason, we
// don't need to set a static flag, either.
// TODO: We can move this to the passive phase once we add a pre-commit
// consistency check. See the next comment.
a.flags|=/*                      */2048,sW(9,sz.bind(null,a,i,r,t),void 0,null),r}function sI(e,t,n){var r=sa,a=sE(),o=t();ec||oE(o,t())||(eI("The result of getSnapshot should be cached to avoid an infinite loop"),ec=!0);var i=!oE(a.memoizedState,o);i&&(a.memoizedState=o,c$=!0);var l=a.queue;// commit phase if there was an interleaved mutation. In concurrent mode
// this can happen all the time, but even in synchronous mode, an earlier
// effect may have mutated the store.
if(sq(sj.bind(null,r,l,e),[e]),l.getSnapshot!==t||i||// Check if the susbcribe function changed. We can save some memory by
// checking whether we scheduled a subscription effect above.
null!==si&&/* */1&si.memoizedState.tag){if(r.flags|=2048,sW(9,sz.bind(null,r,l,o,t),void 0,null),null===d5)throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");(30&sr)!=0||sM(r,t,o)}return o}function sM(e,t,n){e.flags|=/*             */16384;var r={getSnapshot:t,value:n},a=sa.updateQueue;if(null===a)a=sR(),sa.updateQueue=a,a.stores=[r];else{var o=a.stores;null===o?a.stores=[r]:o.push(r)}}function sz(e,t,n,r){// These are updated in the passive phase
t.value=n,t.getSnapshot=r,sU(t)&&sA(e)}function sj(e,t,n){return n(function(){// The store changed. Check if the snapshot changed since the last time we
// read from the store.
sU(t)&&sA(e)})}function sU(e){var t=e.getSnapshot,n=e.value;try{var r=t();return!oE(n,r)}catch(e){return!0}}function sA(e){var t=uk(e,1);null!==t&&fN(t,e,1,-1)}function sF(e){var t=sC();"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e;var n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sT,lastRenderedState:e};t.queue=n;var r=n.dispatch=cu.bind(null,sa,n);return[t.memoizedState,r]}function sW(e,t,n,r){var a={tag:e,create:t,destroy:n,deps:r,// Circular
next:null},o=sa.updateQueue;if(null===o)o=sR(),sa.updateQueue=o,o.lastEffect=a.next=a;else{var i=o.lastEffect;if(null===i)o.lastEffect=a.next=a;else{var l=i.next;i.next=a,a.next=l,o.lastEffect=a}}return a}function sB(e){var t=sC(),n={current:e};return t.memoizedState=n,n}function sV(e){return sE().memoizedState}function sH(e,t,n,r){var a=sC(),o=void 0===r?null:r;sa.flags|=e,a.memoizedState=sW(1|t,n,void 0,o)}function s$(e,t,n,r){var a=sE(),o=void 0===r?null:r,i=void 0;if(null!==so){var l=so.memoizedState;if(i=l.destroy,null!==o&&sb(o,l.deps)){a.memoizedState=sW(t,n,i,o);return}}sa.flags|=e,a.memoizedState=sW(1|t,n,i,o)}function sY(e,t){return(16&sa.mode)!=0?sH(41945088,/*   */8,e,t):sH(8390656,8,e,t)}function sq(e,t){return s$(2048,8,e,t)}function sQ(e,t){return sH(/*                       */4,/*  */2,e,t)}function sK(e,t){return s$(4,2,e,t)}function sG(e,t){var n;return n=4194308,(16&sa.mode)!=0&&(n|=16777216),sH(n,/*    */4,e,t)}function sX(e,t){return s$(4,4,e,t)}function sJ(e,t){if("function"==typeof t)return t(e()),function(){t(null)};if(null!=t){t.hasOwnProperty("current")||eI("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.","an object with keys {"+Object.keys(t).join(", ")+"}");var n=e();return t.current=n,function(){t.current=null}}}function sZ(e,t,n){"function"!=typeof t&&eI("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");var r,a=null!=n?n.concat([e]):null;return r=4194308,(16&sa.mode)!=0&&(r|=16777216),sH(r,4,sJ.bind(null,t,e),a)}function s0(e,t,n){"function"!=typeof t&&eI("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",null!==t?typeof t:"null");var r=null!=n?n.concat([e]):null;return s$(4,4,sJ.bind(null,t,e),r)}function s1(e,t){// The react-debug-hooks package injects its own implementation
// so that e.g. DevTools can display custom hook values.
}function s2(e,t){return sC().memoizedState=[e,void 0===t?null:t],e}function s4(e,t){var n=sE(),r=void 0===t?null:t,a=n.memoizedState;return null!==a&&null!==r&&sb(r,a[1])?a[0]:(n.memoizedState=[e,r],e)}function s3(e,t){var n=sC(),r=e();return n.memoizedState=[r,void 0===t?null:t],r}function s6(e,t){var n=sE(),r=void 0===t?null:t,a=n.memoizedState;if(null!==a&&null!==r&&sb(r,a[1]))return a[0];var o=e();return n.memoizedState=[o,r],o}function s8(e){return sC().memoizedState=e,e}function s5(e){return s9(sE(),so.memoizedState,e)}function s7(e){var t=sE();return null===so?(// This is a rerender during a mount.
t.memoizedState=e,e):s9(t,so.memoizedState,e)}function s9(e,t,n){if(!((21&sr)!=0))return e.baseState&&(// Flip this back to false.
e.baseState=!1,c$=!0),e.memoizedState=n,n;// This is an urgent update. If the value has changed, keep using the
// previous value and spawn a deferred render to update it later.
if(!oE(n,t)){// Schedule a deferred render
var r,a=r5();sa.lanes=sa.lanes|a,fo|=r=a,// from the latest value. The name "baseState" doesn't really match how we
// use it because we're reusing a state hook field instead of creating a
// new one.
e.baseState=!0}// Reuse the previous value
return t}function ce(e,t,n){var r=ai;ai=0!==r&&r<4?r:4,e(!0);var a=sn.transition;sn.transition={};var o=sn.transition;sn.transition._updatedFibers=new Set;try{e(!1),t()}finally{ai=r,sn.transition=a,null===a&&o._updatedFibers&&(o._updatedFibers.size>10&&eN("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),o._updatedFibers.clear())}}function ct(){var e=sF(!1),t=e[0],n=e[1],r=ce.bind(null,n);// The `start` method never changes.
return sC().memoizedState=r,[t,r]}function cn(){return[sP(sT)[0],sE().memoizedState]}function cr(){return[sD(sT)[0],sE().memoizedState]}var ca=!1;function co(){var e,t=sC(),n=d5.identifierPrefix;if(lF){e=":"+n+"R"+(r=lO,((a=lD)&~(1<<lM(a)-1)).toString(32)+r);// that represents the position of this useId hook among all the useId
// hooks for this fiber.
var r,a,o=ss++;o>0&&(e+="H"+o.toString(32)),e+=":"}else e=":"+n+"r"+(sc++).toString(32)+":";return t.memoizedState=e,e}function ci(){return sE().memoizedState}function cl(e,t,n){"function"==typeof arguments[3]&&eI("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=fL(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))cc(t,a);else{var o=uw(e,t,a,r);null!==o&&(fN(o,e,r,fO()),cd(o,t,r))}rQ(e,r)}function cu(e,t,n){"function"==typeof arguments[3]&&eI("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");var r=fL(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))cc(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)){// The queue is currently empty, which means we can eagerly compute the
// next state before entering the render phase. If the new state is the
// same as the current state, we may be able to bail out entirely.
var i,l=t.lastRenderedReducer;if(null!==l){i=st.current,st.current=cg;try{var u,s=t.lastRenderedState,c=l(s,n);if(// it, on the update object. If the reducer hasn't changed by the
// time we enter the render phase, then the eager state can be used
// without calling the reducer again.
a.hasEagerState=!0,a.eagerState=c,oE(c,s)){// Fast path. We can bail out without scheduling React to re-render.
// It's still possible that we'll need to rebase this update later,
// if the component re-renders for a different reason and by that
// time the reducer has changed.
// TODO: Do we still need to entangle transitions in this case?
u=t.interleaved,null===u?(// This is the first update. Create a circular list.
a.next=a,// be transferred to the pending queue.
ub(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch(e){}finally{st.current=i}}}var d=uw(e,t,a,r);null!==d&&(fN(d,e,r,fO()),cd(d,t,r))}rQ(e,r)}function cs(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function cc(e,t){// This is a render phase update. Stash it in a lazily-created map of
// queue -> linked list of updates. After this render pass, we'll restart
// and apply the stashed updates on top of the work-in-progress hook.
su=sl=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}// TODO: Move to ReactFiberConcurrentUpdates?
function cd(e,t,n){if(r8(n)){var r=t.lanes,a=// must have finished. We can remove them from the shared queue, which
// represents a superset of the actually pending lanes. In some cases we
// may entangle more than we need to, but that's OK. In fact it's worse if
// we *don't* entangle when we should.
(r&=e.pendingLanes)|n;// If any entangled lanes are no longer pending on the root, then they
t.lanes=a,// the lane finished since the last time we entangled it. So we need to
// entangle it again, just to be sure.
ar(e,a)}}var cf={readContext:uy,useCallback:sg,useContext:sg,useEffect:sg,useImperativeHandle:sg,useInsertionEffect:sg,useLayoutEffect:sg,useMemo:sg,useReducer:sg,useRef:sg,useState:sg,useDebugValue:sg,useDeferredValue:sg,useTransition:sg,useMutableSource:sg,useSyncExternalStore:sg,useId:sg,unstable_isNewReconciler:!1},cp=null,ch=null,cm=null,cv=null,cy=null,cg=null,cb=null,cw=function(){eI("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().")},ck=function(){eI("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks")};cp={readContext:function(e){return uy(e)},useCallback:function(e,t){return sd="useCallback",sm(),sy(t),s2(e,t)},useContext:function(e){return sd="useContext",sm(),uy(e)},useEffect:function(e,t){return sd="useEffect",sm(),sy(t),sY(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",sm(),sy(n),sZ(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",sm(),sy(t),sQ(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",sm(),sy(t),sG(e,t)},useMemo:function(e,t){sd="useMemo",sm(),sy(t);var n=st.current;st.current=cy;try{return s3(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",sm();var r=st.current;st.current=cy;try{return s_(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",sm(),sB(e)},useState:function(e){sd="useState",sm();var t=st.current;st.current=cy;try{return sF(e)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",sm(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",sm(),s8(e)},useTransition:function(){return sd="useTransition",sm(),ct()},useMutableSource:function(e,t,n){return sd="useMutableSource",sm(),sO()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",sm(),sN(e,t,n)},useId:function(){return sd="useId",sm(),co()},unstable_isNewReconciler:!1},ch={readContext:function(e){return uy(e)},useCallback:function(e,t){return sd="useCallback",sv(),s2(e,t)},useContext:function(e){return sd="useContext",sv(),uy(e)},useEffect:function(e,t){return sd="useEffect",sv(),sY(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",sv(),sZ(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",sv(),sQ(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",sv(),sG(e,t)},useMemo:function(e,t){sd="useMemo",sv();var n=st.current;st.current=cy;try{return s3(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",sv();var r=st.current;st.current=cy;try{return s_(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",sv(),sB(e)},useState:function(e){sd="useState",sv();var t=st.current;st.current=cy;try{return sF(e)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",sv(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",sv(),s8(e)},useTransition:function(){return sd="useTransition",sv(),ct()},useMutableSource:function(e,t,n){return sd="useMutableSource",sv(),sO()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",sv(),sN(e,t,n)},useId:function(){return sd="useId",sv(),co()},unstable_isNewReconciler:!1},cm={readContext:function(e){return uy(e)},useCallback:function(e,t){return sd="useCallback",sv(),s4(e,t)},useContext:function(e){return sd="useContext",sv(),uy(e)},useEffect:function(e,t){return sd="useEffect",sv(),sq(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",sv(),s0(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",sv(),sK(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",sv(),sX(e,t)},useMemo:function(e,t){sd="useMemo",sv();var n=st.current;st.current=cg;try{return s6(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",sv();var r=st.current;st.current=cg;try{return sP(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",sv(),sV()},useState:function(e){sd="useState",sv();var t=st.current;st.current=cg;try{return sP(sT)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",sv(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",sv(),s5(e)},useTransition:function(){return sd="useTransition",sv(),cn()},useMutableSource:function(e,t,n){return sd="useMutableSource",sv(),sL()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",sv(),sI(e,t)},useId:function(){return sd="useId",sv(),ci()},unstable_isNewReconciler:!1},cv={readContext:function(e){return uy(e)},useCallback:function(e,t){return sd="useCallback",sv(),s4(e,t)},useContext:function(e){return sd="useContext",sv(),uy(e)},useEffect:function(e,t){return sd="useEffect",sv(),sq(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",sv(),s0(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",sv(),sK(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",sv(),sX(e,t)},useMemo:function(e,t){sd="useMemo",sv();var n=st.current;st.current=cb;try{return s6(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",sv();var r=st.current;st.current=cb;try{return sD(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",sv(),sV()},useState:function(e){sd="useState",sv();var t=st.current;st.current=cb;try{return sD(sT)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",sv(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",sv(),s7(e)},useTransition:function(){return sd="useTransition",sv(),cr()},useMutableSource:function(e,t,n){return sd="useMutableSource",sv(),sL()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",sv(),sI(e,t)},useId:function(){return sd="useId",sv(),ci()},unstable_isNewReconciler:!1},cy={readContext:function(e){return cw(),uy(e)},useCallback:function(e,t){return sd="useCallback",ck(),sm(),s2(e,t)},useContext:function(e){return sd="useContext",ck(),sm(),uy(e)},useEffect:function(e,t){return sd="useEffect",ck(),sm(),sY(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",ck(),sm(),sZ(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",ck(),sm(),sQ(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",ck(),sm(),sG(e,t)},useMemo:function(e,t){sd="useMemo",ck(),sm();var n=st.current;st.current=cy;try{return s3(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",ck(),sm();var r=st.current;st.current=cy;try{return s_(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",ck(),sm(),sB(e)},useState:function(e){sd="useState",ck(),sm();var t=st.current;st.current=cy;try{return sF(e)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",ck(),sm(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",ck(),sm(),s8(e)},useTransition:function(){return sd="useTransition",ck(),sm(),ct()},useMutableSource:function(e,t,n){return sd="useMutableSource",ck(),sm(),sO()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",ck(),sm(),sN(e,t,n)},useId:function(){return sd="useId",ck(),sm(),co()},unstable_isNewReconciler:!1},cg={readContext:function(e){return cw(),uy(e)},useCallback:function(e,t){return sd="useCallback",ck(),sv(),s4(e,t)},useContext:function(e){return sd="useContext",ck(),sv(),uy(e)},useEffect:function(e,t){return sd="useEffect",ck(),sv(),sq(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",ck(),sv(),s0(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",ck(),sv(),sK(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",ck(),sv(),sX(e,t)},useMemo:function(e,t){sd="useMemo",ck(),sv();var n=st.current;st.current=cg;try{return s6(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",ck(),sv();var r=st.current;st.current=cg;try{return sP(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",ck(),sv(),sV()},useState:function(e){sd="useState",ck(),sv();var t=st.current;st.current=cg;try{return sP(sT)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",ck(),sv(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",ck(),sv(),s5(e)},useTransition:function(){return sd="useTransition",ck(),sv(),cn()},useMutableSource:function(e,t,n){return sd="useMutableSource",ck(),sv(),sL()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",ck(),sv(),sI(e,t)},useId:function(){return sd="useId",ck(),sv(),ci()},unstable_isNewReconciler:!1},cb={readContext:function(e){return cw(),uy(e)},useCallback:function(e,t){return sd="useCallback",ck(),sv(),s4(e,t)},useContext:function(e){return sd="useContext",ck(),sv(),uy(e)},useEffect:function(e,t){return sd="useEffect",ck(),sv(),sq(e,t)},useImperativeHandle:function(e,t,n){return sd="useImperativeHandle",ck(),sv(),s0(e,t,n)},useInsertionEffect:function(e,t){return sd="useInsertionEffect",ck(),sv(),sK(e,t)},useLayoutEffect:function(e,t){return sd="useLayoutEffect",ck(),sv(),sX(e,t)},useMemo:function(e,t){sd="useMemo",ck(),sv();var n=st.current;st.current=cg;try{return s6(e,t)}finally{st.current=n}},useReducer:function(e,t,n){sd="useReducer",ck(),sv();var r=st.current;st.current=cg;try{return sD(e,t,n)}finally{st.current=r}},useRef:function(e){return sd="useRef",ck(),sv(),sV()},useState:function(e){sd="useState",ck(),sv();var t=st.current;st.current=cg;try{return sD(sT)}finally{st.current=t}},useDebugValue:function(e,t){return sd="useDebugValue",ck(),sv(),s1()},useDeferredValue:function(e){return sd="useDeferredValue",ck(),sv(),s7(e)},useTransition:function(){return sd="useTransition",ck(),sv(),cr()},useMutableSource:function(e,t,n){return sd="useMutableSource",ck(),sv(),sL()},useSyncExternalStore:function(e,t,n){return sd="useSyncExternalStore",ck(),sv(),sI(e,t)},useId:function(){return sd="useId",ck(),sv(),ci()},unstable_isNewReconciler:!1};var cS=eD.unstable_now,cx=0,cC=-1,cE=-1,cR=-1,cT=!1,c_=!1;function cP(e){cE=cS(),e.actualStartTime<0&&(e.actualStartTime=cS())}function cD(e,t){if(cE>=0){var n=cS()-cE;e.actualDuration+=n,t&&(e.selfBaseDuration=n),cE=-1}}function cO(e){if(cC>=0){var t=cS()-cC;cC=-1;// Store duration on the next nearest Profiler ancestor
for(// Or the root (for the DevTools Profiler to read)
var n=e.return;null!==n;){switch(n.tag){case 3:var r=n.stateNode;r.effectDuration+=t;return;case 12:var a=n.stateNode;a.effectDuration+=t;return}n=n.return}}}function cL(e){if(cR>=0){var t=cS()-cR;cR=-1;// Store duration on the next nearest Profiler ancestor
for(// Or the root (for the DevTools Profiler to read)
var n=e.return;null!==n;){switch(n.tag){case 3:var r=n.stateNode;null!==r&&(r.passiveEffectDuration+=t);return;case 12:var a=n.stateNode;null!==a&&// In this case, the return pointer is also cleared out,
// so we won't be able to report the time spent in this Profiler's subtree.
(a.passiveEffectDuration+=t);return}n=n.return}}}function cN(){cC=cS()}function cI(e){for(// Transfer time spent rendering these children so we don't lose it
// after we rerender. This is used as a helper in special cases
// where we should count the work of multiple passes.
var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function cM(e,t){// If the value is an error, call this function immediately after it is thrown
// so the stack is accurate.
return{value:e,source:t,stack:tC(t),digest:null}}function cz(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function cj(e,t){try{var n,r=t.value,a=t.source,o=t.stack;// `preventDefault()` in window `error` handler.
// We record this information as an expando on the error.
if(null!=r&&r._suppressLogging){if(1===e.tag)// Ignore it and don't print the stack addendum.
// This is handy for testing error boundaries without noise.
return;// The error is fatal. Since the silencing might have
// been accidental, we'll surface it anyway.
// However, the browser would have silenced the original error
// so we'll print it first, and then print the stack addendum.
console.error(r);// Don't transform to our wrapper
// For a more detailed description of this block, see:
// https://github.com/facebook/react/pull/13384
}var i=a?t_(a):null;if(3===e.tag)n="Consider adding an error boundary to your tree to customize error handling behavior.\nVisit https://reactjs.org/link/error-boundaries to learn more about error boundaries.";else{var l=t_(e)||"Anonymous";n="React will try to recreate this component tree from scratch using the error boundary you provided, "+l+"."}var u=(i?"The above error occurred in the <"+i+"> component:":"The above error occurred in one of your React components:")+"\n"+(null!==o?o:"")+"\n\n"+n;// In development, we provide our own message with just the component stack.
// We don't include the original error message and JS stack because the browser
// has already printed it. Even if the application swallows the error, it is still
// displayed by the browser thanks to the DEV-only fake event trick in ReactErrorUtils.
console.error(u);// Don't transform to our wrapper
}catch(e){// This method must not throw, or React internal state will get messed up.
// If console.error is overridden, or logCapturedError() shows a dialog that throws,
// we want to report this error outside of the normal stack as a last resort.
// https://github.com/facebook/react/issues/13188
setTimeout(function(){throw e})}}var cU="function"==typeof WeakMap?WeakMap:Map;function cA(e,t,n){var r=uE(-1,n);// Unmount the root by rendering null.
r.tag=3,// being called "element".
r.payload={element:null};var a=t.value;return r.callback=function(){f0(a),cj(e,t)},r}function cF(e,t,n){var r=uE(-1,n);r.tag=3;var a=e.type.getDerivedStateFromError;if("function"==typeof a){var o=t.value;r.payload=function(){return a(o)},r.callback=function(){pf(e),cj(e,t)}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(r.callback=function(){pf(e),cj(e,t),"function"!=typeof a&&(null===fv?fv=new Set([this]):fv.add(this));var n=t.value,r=t.stack;this.componentDidCatch(n,{componentStack:null!==r?r:""}),"function"==typeof a||(1&e.lanes)!=0||eI("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",t_(e)||"Unknown")}),r}function cW(e,t,n){// Attach a ping listener
//
// The data might resolve before we have a chance to commit the fallback. Or,
// in the case of a refresh, we'll never commit a fallback. So we need to
// attach a listener now. When it resolves ("pings"), we can decide whether to
// try rendering the tree again.
//
// Only attach a listener if one does not already exist for the lanes
// we're currently rendering (which acts like a "thread ID" here).
//
// We only need to do this in concurrent mode. Legacy Suspense always
// commits fallbacks synchronously, so there are no pings.
var r,a=e.pingCache;if(null===a?(a=e.pingCache=new cU,r=new Set,a.set(t,r)):void 0===(r=a.get(t))&&(r=new Set,a.set(t,r)),!r.has(n)){// Memoize using the thread ID to prevent redundant listeners.
r.add(n);var o=f4.bind(null,e,t,n);rj&&pn(e,n),t.then(o,o)}}function cB(e){var t=e;do{if(13===t.tag&&function(e,t){// If it was the primary children that just suspended, capture and render the
// fallback. Otherwise, don't capture and bubble to the next boundary.
var n=e.memoizedState;return null!==n?null!==n.dehydrated:(e.memoizedProps,!0)}(t))return t;// This boundary already captured during this render. Continue to the next
// boundary.
t=t.return}while(null!==t)return null}function cV(e,t,n,r,a){// This marks a Suspense boundary so that when we're unwinding the stack,
// it captures the suspended "exception" and does a second (fallback) pass.
if((1&e.mode)==0){// Legacy Mode Suspense
//
// If the boundary is in legacy mode, we should *not*
// suspend the commit. Pretend as if the suspended component rendered
// null and keep rendering. When the Suspense boundary completes,
// we'll do a second pass to render the fallback.
if(e===t)// a Suspense boundary's inner Offscreen wrapper fiber. This happens
// when a React.lazy component is a direct child of a
// Suspense boundary.
//
// Suspense boundaries are implemented as multiple fibers, but they
// are a single conceptual unit. The legacy mode behavior where we
// pretend the suspended fiber committed as `null` won't work,
// because in this case the "suspended" fiber is the inner
// Offscreen wrapper.
//
// Because the contents of the boundary haven't started rendering
// yet (i.e. nothing in the tree has partially rendered) we can
// switch to the regular, concurrent mode behavior: mark the
// boundary with ShouldCapture and enter the unwind phase.
e.flags|=/*                */65536;else{if(e.flags|=128,n.flags|=/* */131072,// But we shouldn't call any lifecycle methods or callbacks. Remove
// all lifecycle effect tags.
n.flags&=-52805,1===n.tag){if(null===n.alternate)// completed class component. For example, we should not call
// componentWillUnmount if it is deleted.
n.tag=17;else{// When we try rendering again, we should not reuse the current fiber,
// since it's known to be in an inconsistent state. Use a force update to
// prevent a bail out.
var o=uE(-1,1);o.tag=2,uR(n,o,1)}}// The source fiber did not complete. Mark it with Sync priority to
// indicate that it still has pending work.
n.lanes=1|n.lanes}return e}// Confirmed that the boundary is in a concurrent mode tree. Continue
return(// with the normal suspend path.
//
// After this we'll use a set of heuristics to determine whether this
// render pass will run to completion or restart or "suspend" the commit.
// The actual logic for this is spread out in different places.
//
// This first principle is that if we're going to suspend when we complete
// a root, then we should also restart if we get an update or ping that
// might unsuspend it, and vice versa. The only reason to suspend is
// because you think you might want to restart before committing. However,
// it doesn't make sense to restart only while in the period we're suspended.
//
// Restarting too aggressively is also not good because it starves out any
// intermediate loading state. So we use heuristics to determine when.
// Suspense Heuristics
//
// If nothing threw a Promise or all the same fallbacks are already showing,
// then don't suspend/restart.
//
// If this is an initial render of a new tree of Suspense boundaries and
// those trigger a fallback, then don't suspend/restart. We want to ensure
// that we can show the initial loading state as quickly as possible.
//
// If we hit a "Delayed" case, such as when we'd switch from content back into
// a fallback, then we should always suspend/restart. Transitions apply
// to this case. If none is defined, JND is used instead.
//
// If we're already showing a fallback and it gets "retried", allowing us to show
// another level, but there's still an inner boundary that would show a fallback,
// then we suspend/restart for 500ms since the last time we showed a fallback
// anywhere in the tree. This effectively throttles progressive loading into a
// consistent train of commits. This also gives us an opportunity to restart to
// get to the completed state slightly earlier.
//
// If there's ambiguity due to batching it's resolved in preference of:
// 1) "delayed", 2) "initial render", 3) "retry".
//
// We want to ensure that a "busy" state doesn't get force committed. We want to
// ensure that new initial loading states can commit as soon as possible.
e.flags|=65536,// the begin phase to prevent an early bailout.
e.lanes=a,e)}var cH=eO.ReactCurrentOwner,c$=!1;function cY(e,t,n,r){null===e?// won't update its child set by applying minimal side-effects. Instead,
// we will add them all to the child before it gets rendered. That means
// we can optimize this reconciliation pass by not tracking side-effects.
t.child=uQ(t,null,n,r):// we haven't yet started any work on these children. Therefore, we use
// the clone algorithm to create a copy of all the current children.
// If we had any progressed work already, that is invalid at this point so
// let's throw it out.
t.child=uq(t,e.child,n,r)}function cq(e,t,n,r,a){if(t.type!==t.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o,i,l=n.propTypes;l&&i5(l,r,"prop",tR(n))}var u=n.render,s=t.ref;if(uv(t,a),rB(t),cH.current=t,tO=!0,o=sw(e,t,u,r,s,a),i=sk(),8&t.mode){rU(!0);try{o=sw(e,t,u,r,s,a),i=sk()}finally{rU(!1)}}return(tO=!1,rV(),null===e||c$)?(lF&&i&&lI(t),// React DevTools reads this flag.
t.flags|=/*                */1,cY(e,t,o,a),t.child):(sS(e,t,a),du(e,t,a))}function cQ(e,t,n,r,a){if(null===e){var o=n.type;if("function"==typeof o&&!pm(o)&&void 0===o.defaultProps&&null===n.compare&&// SimpleMemoComponent codepath doesn't resolve outer props either.
void 0===n.defaultProps){var i=o;return i=ps(o),// and with only the default shallow comparison, we upgrade it
// to a SimpleMemoComponent to allow fast path updates.
t.tag=15,t.type=i,c4(t,o),cK(e,t,i,r,a)}var l=o.propTypes;l&&// We could move it there, but we'd still need this for lazy code path.
i5(l,r,"prop",tR(o));var u=py(n.type,null,r,t,t.mode,a);return u.ref=t.ref,u.return=t,t.child=u,u}var s=n.type,c=s.propTypes;c&&// We could move it there, but we'd still need this for lazy code path.
i5(c,r,"prop",tR(s));var d=e.child;// This is always exactly one child
if(!ds(e,a)){// This will be the props with resolved defaultProps,
// unlike current.memoizedProps which will be the unresolved ones.
var f=d.memoizedProps,p=n.compare;// Default to shallow comparison
if((p=null!==p?p:oR)(f,r)&&e.ref===t.ref)return du(e,t,a)}// React DevTools reads this flag.
t.flags|=1;var h=pv(d,r);return h.ref=t.ref,h.return=t,t.child=h,h}function cK(e,t,n,r,a){if(t.type!==t.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o=t.elementType;if(o.$$typeof===tp){// We warn when you define propTypes on lazy()
// so let's just skip over it to find memo() outer wrapper.
// Inner props for memo are validated later.
var i=o,l=i._payload,u=i._init;try{o=u(l)}catch(e){o=null}// Inner propTypes will be validated in the function component path.
var s=o&&o.propTypes;s&&i5(s,r,"prop",tR(o))}}if(null!==e){var c=e.memoizedProps;if(oR(c,r)&&e.ref===t.ref&&t.type===e.type){if(c$=!1,// would during a normal fiber bailout.
//
// We don't have strong guarantees that the props object is referentially
// equal during updates where we can't bail out anyway — like if the props
// are shallowly equal, but there's a local state or context update in the
// same batch.
//
// However, as a principle, we should aim to make the behavior consistent
// across different ways of memoizing a component. For example, React.memo
// has a different internal Fiber layout if you pass a normal function
// component (SimpleMemoComponent) versus if you pass a different type
// like forwardRef (MemoComponent). But this is an implementation detail.
// Wrapping a component in forwardRef (or React.lazy, etc) shouldn't
// affect whether the props object is reused during a bailout.
t.pendingProps=r=c,!ds(e,a))return(// The pending lanes were cleared at the beginning of beginWork. We're
// about to bail out, but there might be other lanes that weren't
// included in the current render. Usually, the priority level of the
// remaining updates is accumulated during the evaluation of the
// component (i.e. when processing the update queue). But since since
// we're bailing out early *without* evaluating the component, we need
// to account for it here, too. Reset to the value of the current fiber.
// NOTE: This only applies to SimpleMemoComponent, not MemoComponent,
// because a MemoComponent fiber does not have hooks or an update queue;
// rather, it wraps around an inner component, which may or may not
// contains hooks.
// TODO: Move the reset at in beginWork out of the common path so that
// this is no longer necessary.
t.lanes=e.lanes,du(e,t,a));(131072&e.flags)!=0&&// See https://github.com/facebook/react/pull/19216.
(c$=!0)}}return cJ(e,t,n,r,a)}function cG(e,t,n){var r,a,o=t.pendingProps,i=o.children,l=null!==e?e.memoizedState:null;if("hidden"===o.mode){// Rendering a hidden tree.
if((1&t.mode)==0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fB(t,n);else if((1073741824&n)!=0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},fB(t,null!==l?l.baseLanes:n);else{return r=null!==l?l.baseLanes|n:n,// Schedule this fiber to re-render at offscreen priority. Then bailout.
t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:r,cachePool:null,transitions:null},t.updateQueue=null,// to avoid a push/pop misalignment.
fB(t,r),null}}else null!==l?(// We're going from hidden -> visible.
a=l.baseLanes|n,t.memoizedState=null):// special to do. Need to push to the stack regardless, though, to avoid
// a push/pop misalignment.
a=n,fB(t,a);return cY(e,t,i,n),t.child}// Note: These happen to have identical begin phases, for now. We shouldn't hold
function cX(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(// Schedule a Ref effect
t.flags|=/*                          */512,t.flags|=/*                    */2097152)}function cJ(e,t,n,r,a){if(t.type!==t.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var o,i,l,u=n.propTypes;u&&i5(u,r,"prop",tR(n))}var s=ll(t,n,!0);if(o=ls(t,s),uv(t,a),rB(t),cH.current=t,tO=!0,i=sw(e,t,n,r,o,a),l=sk(),8&t.mode){rU(!0);try{i=sw(e,t,n,r,o,a),l=sk()}finally{rU(!1)}}return(tO=!1,rV(),null===e||c$)?(lF&&l&&lI(t),// React DevTools reads this flag.
t.flags|=1,cY(e,t,i,a),t.child):(sS(e,t,a),du(e,t,a))}function cZ(e,t,n,r,a){// This is used by DevTools to force a boundary to error.
switch(pI(t)){case!1:var o,i,l=t.stateNode,u=new t.type(t.memoizedProps,l.context).state;l.updater.enqueueSetState(l,u,null);break;case!0:t.flags|=128,t.flags|=65536;var s,c=Error("Simulated error coming from DevTools"),d=(s=a)&-s;t.lanes=t.lanes|d;var f=cF(t,cM(c,t),d);u_(t,f)}if(t.type!==t.elementType){// Lazy component props can't be validated in createElement
// because they're only guaranteed to be resolved here.
var p=n.propTypes;p&&i5(p,r,"prop",tR(n))}ld(n)?(o=!0,lv(t)):o=!1,uv(t,a),null===t.stateNode?(dl(e,t),uU(t,n,r),uF(t,n,r,a),i=!0):i=null===e?function(e,t,n,r){var a,o,i,l=e.stateNode,u=e.memoizedProps;l.props=u;var s=l.context,c=t.contextType,d=lr;if("object"==typeof c&&null!==c)d=uy(c);else{var f=ll(e,t,!0);d=ls(e,f)}var p=t.getDerivedStateFromProps,h="function"==typeof p||"function"==typeof l.getSnapshotBeforeUpdate;h||"function"!=typeof l.UNSAFE_componentWillReceiveProps&&"function"!=typeof l.componentWillReceiveProps||u===n&&s===d||uA(e,l,n,d),uS=!1;var m=e.memoizedState,v=l.state=m;if(uP(e,n,l,r),v=e.memoizedState,u===n&&m===v&&!lc()&&!uS)return"function"==typeof l.componentDidMount&&(a=4194308,(16&e.mode)!=0&&(a|=16777216),e.flags|=a),!1;"function"==typeof p&&(uI(e,t,p,n),v=e.memoizedState);var y=uS||uz(e,t,u,n,m,v,d);return y?(h||"function"!=typeof l.UNSAFE_componentWillMount&&"function"!=typeof l.componentWillMount||("function"==typeof l.componentWillMount&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&l.UNSAFE_componentWillMount()),"function"==typeof l.componentDidMount&&(o=4194308,(16&e.mode)!=0&&(o|=16777216),e.flags|=o)):("function"==typeof l.componentDidMount&&(i=4194308,(16&e.mode)!=0&&(i|=16777216),e.flags|=i),// memoized state to indicate that this work can be reused.
e.memoizedProps=n,e.memoizedState=v),// if shouldComponentUpdate returns false.
l.props=n,l.state=v,l.context=d,y}// Invokes the update life-cycles and returns false if it shouldn't rerender.
(t,n,r,a):function(e,t,n,r,a){var o=t.stateNode;uC(e,t);var i=t.memoizedProps,l=t.type===t.elementType?i:ui(t.type,i);o.props=l;var u=t.pendingProps,s=o.context,c=n.contextType,d=lr;if("object"==typeof c&&null!==c)d=uy(c);else{var f=ll(t,n,!0);d=ls(t,f)}var p=n.getDerivedStateFromProps,h="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||i===u&&s===d||uA(t,o,r,d),uS=!1;var m=t.memoizedState,v=o.state=m;if(uP(t,r,o,a),v=t.memoizedState,i===u&&m===v&&!lc()&&!uS)return"function"==typeof o.componentDidUpdate&&(i!==e.memoizedProps||m!==e.memoizedState)&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(i!==e.memoizedProps||m!==e.memoizedState)&&(t.flags|=/*                     */1024),!1;"function"==typeof p&&(uI(t,n,p,r),v=t.memoizedState);var y=uS||uz(t,n,l,r,m,v,d)||!1;return y?(h||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,v,d),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,v,d)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"==typeof o.componentDidUpdate&&(i!==e.memoizedProps||m!==e.memoizedState)&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(i!==e.memoizedProps||m!==e.memoizedState)&&(t.flags|=1024),// memoized props/state to indicate that this work can be reused.
t.memoizedProps=r,t.memoizedState=v),// if shouldComponentUpdate returns false.
o.props=r,o.state=v,o.context=d,y}(e,t,n,r,a);var h=c0(e,t,n,i,o,a),m=t.stateNode;return i&&m.props!==r&&(ev||eI("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",t_(t)||"a component"),ev=!0),h}function c0(e,t,n,r,a,o){// Refs should update even if shouldComponentUpdate returns false
cX(e,t);var i,l,u=(128&t.flags)!=0;if(!r&&!u)return a&&ly(t,n,!1),du(e,t,o);var s=t.stateNode;// Rerender
if(cH.current=t,u&&"function"!=typeof n.getDerivedStateFromError)// If we captured an error, but getDerivedStateFromError is not defined,
// unmount all the children. componentDidCatch will schedule an update to
// re-render a fallback. This is temporary until we migrate everyone to
// the new API.
// TODO: Warn in a future release.
l=null,cE=-1;else{if(rB(t),tO=!0,l=s.render(),8&t.mode){rU(!0);try{s.render()}finally{rU(!1)}}tO=!1,rV()}// React DevTools reads this flag.
return(t.flags|=1,null!==e&&u)?(i=l,// This function is fork of reconcileChildren. It's used in cases where we
// want to reconcile without matching against the existing set. This has the
// effect of all current children being unmounted; even if the type and key
// are the same, the old child is unmounted and a new child is created.
//
// To do this, we're going to go through the reconcile algorithm twice. In
// the first pass, we schedule a deletion for all the current children by
// passing null.
t.child=uq(t,e.child,null,o),// pass null in place of where we usually pass the current child set. This has
// the effect of remounting all children regardless of whether their
// identities match.
t.child=uq(t,null,i,o)):cY(e,t,l,o),// Memoize state using the values we just used to render.
// TODO: Restructure so we never read values from the instance.
t.memoizedState=s.state,a&&ly(t,n,!0),t.child}function c1(e){var t=e.stateNode;t.pendingContext?lh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lh(e,t.context,!1),u1(e,t.containerInfo)}function c2(e,t,n,r,a){return(// Revert to client rendering.
l0(),l2(a),t.flags|=/*            */256,cY(e,t,n,r),t.child)}function c4(e,t){if(t&&t.childContextTypes&&eI("%s(...): childContextTypes cannot be defined on a function component.",t.displayName||t.name||"Component"),null!==e.ref){var n="",r=tL();r&&(n+="\n\nCheck the render method of `"+r+"`.");var a=r||"",o=e._debugSource;o&&(a=o.fileName+":"+o.lineNumber),em[a]||(em[a]=!0,eI("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s",n))}if("function"==typeof t.getDerivedStateFromProps){var i=tR(t)||"Unknown";eh[i]||(eI("%s: Function components do not support getDerivedStateFromProps.",i),eh[i]=!0)}if("object"==typeof t.contextType&&null!==t.contextType){var l=tR(t)||"Unknown";ep[l]||(eI("%s: Function components do not support contextType.",l),ep[l]=!0)}}ed={},ef={},ep={},eh={},em={},ev=!1,ey={},eg={};var c3={dehydrated:null,treeContext:null,retryLane:0};function c6(e){return{baseLanes:e,cachePool:null,transitions:null}}function c8(e,t,n){var r=t.pendingProps;// This is used by DevTools to force a boundary to suspend.
pM(t)&&(t.flags|=128);var a=u8.current,o=!1,i=(128&t.flags)!=0;// boundary's children. This involves some custom reconciliation logic. Two
// main reasons this is so complicated.
//
// First, Legacy Mode has different semantics for backwards compatibility. The
// primary tree will commit in an inconsistent state, so when we do the
// second pass to render the fallback, we do some exceedingly, uh, clever
// hacks to make that not totally break. Like transferring effects and
// deletions from hidden tree. In Concurrent Mode, it's much simpler,
// because we bailout on the primary tree completely and leave it in its old
// state, no effects. Same as what we do for Offscreen (except that
// Offscreen doesn't have the first render pass).
//
// Second is hydration. During hydration, the Suspense fiber has a slightly
// different layout, where the child points to a dehydrated fragment, which
// contains the DOM rendered by the server.
//
// Third, even if you set all that aside, Suspense is like error boundaries in
// that we first we try to render one tree, and if that fails, we render again
// and switch to a different tree. Like a try/catch block. So we have to track
// which branch we're currently rendering. Ideally we would model this using
// a stack.
if(i||(l=a,// If we're already showing a fallback, there are cases where we need to
// remain on that fallback regardless of whether the content has resolved.
// For example, SuspenseList coordinates when nested content appears.
(null===e||null!==e.memoizedState)&&(2&l)!=0// Not currently showing content. Consult the Suspense context.
)?(// Something in this boundary's subtree already suspended. Switch to
// rendering the fallback children.
o=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(a|=1),u5(t,a&=1),null===e){// Initial mount
// Special path for hydration
// If we're currently hydrating, try to hydrate this boundary.
lG(t);// This could've been a dehydrated suspense component.
var l,u,s,c,d,f,p=t.memoizedState;if(null!==p){var h=p.dehydrated;if(null!==h)return(1&t.mode)==0?(eI("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."),t.lanes=1):iV(h)?// for this, we need to schedule that at a higher priority based on when it would
// have timed out. In theory we could render it in this pass but it would have the
// wrong priority associated with it and will prevent hydration of parent path.
// Instead, we'll leave work left on it to render it in a separate commit.
// TODO This time should be the time at which the server rendered response that is
// a parent to this boundary was displayed. However, since we currently don't have
// a protocol to transfer that time, we'll just estimate it by using the current
// time. This will mean that Suspense timeouts are slightly shifted to later than
// they should be.
// Schedule a normal pri update to render this content.
t.lanes=8:// be showing the right content coming from the server, it is no rush.
t.lanes=1073741824,null}var m=r.children,v=r.fallback;if(!o)return c5(t,m);var y=(c=t.mode,d=t.child,f={mode:"hidden",children:m},(1&c)==0&&null!==d?(// In legacy mode, we commit the primary tree as if it successfully
// completed, even though it's in an inconsistent state.
(u=d).childLanes=0,u.pendingProps=f,/*                    */2&t.mode&&(// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
u.actualDuration=0,u.actualStartTime=-1,u.selfBaseDuration=0,u.treeBaseDuration=0)):u=c7(f,c),s=pb(v,c,n,null),u.return=t,s.return=t,u.sibling=s,t.child=u,s);return t.child.memoizedState=c6(n),t.memoizedState=c3,y}// This is an update.
// Special path for hydration
var g=e.memoizedState;if(null!==g){var b=g.dehydrated;if(null!==b)return function(e,t,n,r,a,o,i){if(n){// This is the second render pass. We already attempted to hydrated, but
// something either suspended or errored.
if(256&t.flags)return(// Something errored during hydration. Try again without hydrating.
t.flags&=-257,c9(e,t,i,cz(Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."))));if(null!==t.memoizedState)return(// Something suspended and we should still be in dehydrated mode.
// Leave the existing child in place.
t.child=e.child,// but the normal suspense pass doesn't.
t.flags|=128,null);// Suspended but we should no longer be in dehydrated mode.
// Therefore we now have to render the fallback.
var l,u,s,c,d,f,p=r.children,h=r.fallback,m=(d=c7({mode:"visible",children:p},c=t.mode),f=pb(h,c,i,null),// boundary) already mounted but this is a new fiber.
f.flags|=2,d.return=t,f.return=t,d.sibling=f,t.child=d,(1&t.mode)!=0&&// deletion. We need to reconcile to delete the current child.
uq(t,e.child,null,i),f);return t.child.memoizedState=c6(i),t.memoizedState=c3,m}if(lF&&eI("We should not be hydrating here. This is a bug in React. Please file a bug."),(1&t.mode)==0)return c9(e,t,i,// de-opt to client rendering should have an error message.
null);if(iV(a)){var v,y,g,b,w,k,S,x=((b=a.nextSibling&&a.nextSibling.dataset)&&(v=b.dgst,y=b.msg,g=b.stck),{message:y,digest:v,stack:g});return w=x.digest,k=x.message,S=x.stack,c9(e,t,i,cz(k?Error(k):Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."),w,S))}// any context has changed, we need to treat is as if the input might have changed.
var C=(i&e.childLanes)!=0;if(c$||C){// This boundary has changed since the first render. This means that we are now unable to
// hydrate it. We might still be able to hydrate it using a higher priority lane.
var E=d5;if(null!==E){var R=function(e,t){var n;switch(t&-t){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:// Everything else is already either a hydration lane, or shouldn't
// be retried at a hydration lane.
n=0}// Check if the lane we chose is suspended. If so, that indicates that we
return(// already attempted and failed to hydrate at that level. Also check if we're
// already rendering that lane, which is rare but could happen.
(n&(e.suspendedLanes|t))!=0?0:n)}(E,i);0!==R&&R!==o.retryLane&&(// Intentionally mutating since this render will get interrupted. This
// is one of the very rare times where we mutate the current tree
// during the render phase.
o.retryLane=R,uk(e,R),fN(E,e,R,-1))}// If we have scheduled higher pri work above, this will probably just abort the render
return(// since we now have higher priority work, but in case it doesn't, we need to prepare to
// render something, if we time out. Even if that requires us to delete everything and
// skip hydration.
// Delay having to do this as long as the suspense timeout allows us.
fq(),c9(e,t,i,cz(Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."))))}if(iB(a)){// This component is still pending more data from the server, so we can't hydrate its
// content. We treat it as if this component suspended itself. It might seem as if
// we could just try to render it client-side instead. However, this will perform a
// lot of unnecessary work and is unlikely to complete since it often will suspend
// on missing data anyway. Additionally, the server might be able to render more
// than we can on the client yet. In that case we'd end up with more fallback states
// on the client than if we just leave it alone. If the server times out or errors
// these should update this boundary to the permanent Fallback state instead.
// Mark it as having captured (i.e. suspended).
t.flags|=128,t.child=e.child;var T=f6.bind(null,e);return a._reactRetry=T,null}l=t,u=a,s=o.treeContext,lA=iH(u.nextSibling),lU=l,lF=!0,lB=null,lW=!1,null!==s&&(lj(),lT[l_++]=lD,lT[l_++]=lO,lT[l_++]=lP,lD=s.id,lO=s.overflow,lP=l);var _=c5(t,r.children);// Mark the children as hydrating. This is a fast path to know whether this
return(// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
_.flags|=/*                    */4096,_)}(e,t,i,r,b,g,n)}if(o){var w,k,S,x,C,E,R,T=r.fallback,_=(w=r.children,x=t.mode,E=(C=e.child).sibling,R={mode:"hidden",children:w},(1&x)==0&&// Make sure we're on the second pass, i.e. the primary child fragment was
// already cloned. In legacy mode, the only case where this isn't true is
// when DevTools forces us to display a fallback; we skip the first render
// pass entirely and go straight to rendering the fallback. (In Concurrent
// Mode, SuspenseList can also trigger this scenario, but this is a legacy-
// only codepath.)
t.child!==C?((k=t.child).childLanes=0,k.pendingProps=R,2&t.mode&&(// Reset the durations from the first pass so they aren't included in the
// final amounts. This seems counterintuitive, since we're intentionally
// not measuring part of the render phase, but this makes it match what we
// do in Concurrent Mode.
k.actualDuration=0,k.actualStartTime=-1,k.selfBaseDuration=C.selfBaseDuration,k.treeBaseDuration=C.treeBaseDuration),// However, since we're going to remain on the fallback, we no longer want
// to delete it.
t.deletions=null):// (We don't do this in legacy mode, because in legacy mode we don't re-use
// the current tree; see previous branch.)
(k=pv(C,R)).subtreeFlags=14680064&C.subtreeFlags,null!==E?S=pv(E,T):(S=pb(T,x,n,null),// mounted but this is a new fiber.
S.flags|=2),S.return=t,k.return=t,k.sibling=S,t.child=k,S),P=t.child,D=e.child.memoizedState;return P.memoizedState=null===D?c6(n):{baseLanes:D.baseLanes|n,cachePool:null,transitions:D.transitions},P.childLanes=e.childLanes&~n,t.memoizedState=c3,_}var O=function(e,t,n,r){var a=e.child,o=a.sibling,i=pv(a,{mode:"visible",children:n});if((1&t.mode)==0&&(i.lanes=r),i.return=t,i.sibling=null,null!==o){// Delete the fallback child fragment
var l=t.deletions;null===l?(t.deletions=[o],t.flags|=16):l.push(o)}return t.child=i,i}(e,t,r.children,n);return t.memoizedState=null,O}function c5(e,t,n){var r=c7({mode:"visible",children:t},e.mode);return r.return=e,e.child=r,r}function c7(e,t,n){// The props argument to `createFiberFromOffscreen` is `any` typed, so we use
// this wrapper function to constrain it.
return pw(e,t,0,null)}function c9(e,t,n,r){null!==r&&l2(r),// This will add the old fiber to the deletion list
uq(t,e.child,null,n);var a=t.pendingProps.children,o=c5(t,a);return(// mounted but this is a new fiber.
o.flags|=2,t.memoizedState=null,o)}function de(e,t,n){e.lanes=e.lanes|t;var r=e.alternate;null!==r&&(r.lanes=r.lanes|t),um(e.return,t,n)}function dt(e,t){var n=t6(e),r=!n&&"function"==typeof tv(e);if(n||r){var a=n?"array":"iterable";return eI("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",a,t,a),!1}return!0}function dn(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(// We can reuse the existing object from previous renders.
o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}// This can end up rendering this component multiple passes.
// The first pass splits the children fibers into two sets. A head and tail.
// We first render the head. If anything is in fallback state, we do another
// pass through beginWork to rerender all children (including the tail) with
// the force suspend context. If the first render didn't have anything in
// in fallback state. Then we render each row in the tail one-by-one.
// That happens in the completeWork phase without going back to beginWork.
function dr(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail,i=r.children;(function(e){if(void 0!==e&&"forwards"!==e&&"backwards"!==e&&"together"!==e&&!ey[e]){if(ey[e]=!0,"string"==typeof e)switch(e.toLowerCase()){case"together":case"forwards":case"backwards":eI('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',e,e.toLowerCase());break;case"forward":case"backward":eI('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',e,e.toLowerCase());break;default:eI('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}else eI('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?',e)}})(a),void 0===o||eg[o]||("collapsed"!==o&&"hidden"!==o?(eg[o]=!0,eI('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?',o)):"forwards"!==a&&"backwards"!==a&&(eg[o]=!0,eI('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',o))),function(e,t){if(("forwards"===t||"backwards"===t)&&null!=e&&!1!==e){if(t6(e)){for(var n=0;n<e.length;n++)if(!dt(e[n],n))return}else{var r=tv(e);if("function"==typeof r){var a=r.call(e);if(a)for(var o=a.next(),i=0;!o.done;o=a.next()){if(!dt(o.value,i))return;i++}}else eI('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',t)}}}(i,a),cY(e,t,i,n);var l=u8.current;if((2&l)!=0?(l=1&l|2,t.flags|=128):(null!==e&&(128&e.flags)!=0&&// on any nested boundaries to let them know to try to render
// again. This is the same as context updating.
function(e,t,n){for(// Mark any Suspense boundaries with fallbacks as having work to do.
// If they were previously forced into fallbacks, they may now be able
// to unblock.
var r=t;null!==r;){if(13===r.tag)null!==r.memoizedState&&de(r,n,e);else if(19===r.tag)// to schedule work on. In this case we have to schedule it on the
// list itself.
// We don't have to traverse to the children of the list since
// the list will propagate the change when it rerenders.
de(r,n,e);else if(null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)return;for(;null===r.sibling;){if(null===r.return||r.return===e)return;r=r.return}r.sibling.return=r.return,r=r.sibling}}(t,t.child,n),l&=1),u5(t,l),(1&t.mode)==0)// use make it a noop by treating it as the default revealOrder.
t.memoizedState=null;else switch(a){case"forwards":var u,s=function(e){for(// This is going to find the last row among these children that is already
// showing content on the screen, as opposed to being in fallback state or
// new. If a row has multiple Suspense boundaries, any of them being in the
// fallback state, counts as the whole row being in a fallback state.
// Note that the "rows" will be workInProgress, but any nested children
// will still be current since we haven't rendered them yet. The mounted
// order may not be the same as the new order. We use the new order.
var t=e,n=null;null!==t;){var r=t.alternate;// New rows can't be content rows.
null!==r&&null===u7(r)&&(n=t),t=t.sibling}return n}(t.child);null===s?(// The whole list is part of the tail.
// TODO: We could fast path by just rendering the tail now.
u=t.child,t.child=null):(// Disconnect the tail rows after the content row.
// We're going to render them separately later.
u=s.sibling,s.sibling=null),dn(t,!1,u,s,o);break;case"backwards":// We're going to find the first row that has existing content.
// At the same time we're going to reverse the list of everything
// we pass in the meantime. That's going to be our tail in reverse
// order.
var c=null,d=t.child;for(t.child=null;null!==d;){var f=d.alternate;// New rows can't be content rows.
if(null!==f&&null===u7(f)){// This is the beginning of the main content.
t.child=d;break}var p=d.sibling;d.sibling=c,c=d,d=p}// TODO: If workInProgress.child is null, we can continue on the tail immediately.
dn(t,!0,c,null,o);break;case"together":dn(t,!1,null,null,void 0);break;default:// The default reveal order is the same as not having
// a boundary.
t.memoizedState=null}return t.child}var da=!1,di=!1;function dl(e,t){(1&t.mode)==0&&null!==e&&(// A lazy component only mounts if it suspended inside a non-
// concurrent tree, in an inconsistent state. We want to treat it like
// a new mount, even though an empty version of it already committed.
// Disconnect the alternate pointers.
e.alternate=null,t.alternate=null,t.flags|=2)}function du(e,t,n){var r;return(null!==e&&(t.dependencies=e.dependencies),cE=-1,r=t.lanes,fo|=r,(n&t.childLanes)!=0)?(// This fiber doesn't have work, but its subtree does. Clone the child
// fibers and continue.
function(e,t){if(null!==e&&t.child!==e.child)throw Error("Resuming work not yet implemented.");if(null!==t.child){var n=t.child,r=pv(n,n.pendingProps);for(t.child=r,r.return=t;null!==n.sibling;)n=n.sibling,(r=r.sibling=pv(n,n.pendingProps)).return=t;r.sibling=null}}// Reset a workInProgress child set to prepare it for a second pass.
(e,t),t.child):null}function ds(e,t){return(e.lanes&t)!=0}function dc(e,t,n){if(t._debugNeedsRemount&&null!==e)return function(e,t,n){var r=t.return;if(null===r)throw Error("Cannot swap the root fiber.");if(// Disconnect from the old current.
// It will get deleted.
e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,t===r.child)r.child=n;else{var a=r.child;if(null===a)throw Error("Expected parent to have a child.");for(;a.sibling!==t;)if(null===(a=a.sibling))throw Error("Expected to find the previous sibling.");a.sibling=n}// Delete the old fiber and place the new one.
// Since the old fiber is disconnected, we have to schedule it manually.
var o=r.deletions;return null===o?(r.deletions=[e],r.flags|=16):o.push(e),n.flags|=2,n}(e,t,py(t.type,t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes));if(null!==e){if(e.memoizedProps!==t.pendingProps||lc()||t.type!==e.type)// This may be unset if the props are determined to be equal later (memo).
c$=!0;else{if(!ds(e,n)&&// If this is the second pass of an error or suspense boundary, there
// may not be work scheduled on `current`, so we check for this flag.
(128&t.flags)==0)return(// No pending updates or context. Bail out now.
c$=!1,function(e,t,n){// This fiber does not have any pending work. Bailout without entering
// the begin phase. There's still some bookkeeping we that needs to be done
// in this optimized path, mostly pushing stuff onto the stack.
switch(t.tag){case 3:c1(t),t.stateNode,l0();break;case 5:u3(t);break;case 1:ld(t.type)&&lv(t);break;case 4:u1(t,t.stateNode.containerInfo);break;case 10:var r=t.memoizedProps.value,a=t.type._context;up(t,a,r);break;case 12:(n&t.childLanes)!=0&&(t.flags|=4);// Reset effect durations for the next eventual effect phase.
// These are reset during render to allow the DevTools commit hook a chance to read them,
var o=t.stateNode;o.effectDuration=0,o.passiveEffectDuration=0;break;case 13:var i=t.memoizedState;if(null!==i){if(null!==i.dehydrated)// upgrade it. We return null instead of bailoutOnAlreadyFinishedWork.
return u5(t,1&u8.current),// been unsuspended it has committed as a resolved Suspense component.
// If it needs to be retried, it should have work scheduled on it.
t.flags|=128,null;// If this boundary is currently timed out, we need to decide
if((n&t.child.childLanes)!=0)// to attempt to render the primary children again.
return c8(e,t,n);// The primary child fragment does not have pending work marked
// on it
u5(t,1&u8.current);// The primary children do not have pending work with sufficient
// priority. Bailout.
var l=du(e,t,n);if(null!==l)// primary children and work on the fallback.
return l.sibling;// whether there were nested context consumers, via the call to
// `bailoutOnAlreadyFinishedWork` above.
return null}u5(t,1&u8.current);break;case 19:var u=(128&e.flags)!=0,s=(n&t.childLanes)!=0;if(u){if(s)// same children then we're still in progressive loading state.
// Something might get unblocked by state updates or retries in the
// tree which will affect the tail. So we need to use the normal
// path to compute the correct tail.
return dr(e,t,n);// If none of the children had any work, that means that none of
// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
t.flags|=128}// If nothing suspended before and we're rendering the same children,
// then the tail doesn't matter. Anything new that suspends will work
// in the "together" mode, so we can continue from the state we had.
var c=t.memoizedState;if(null!==c&&(// Reset to the "together" mode in case we've started a different
// update in the past but didn't complete it.
c.rendering=null,c.tail=null,c.lastEffect=null),u5(t,u8.current),!s)// them got retried so they'll still be blocked in the same way
// as before. We can fast bail out.
return null;break;case 22:case 23:return(// Need to check if the tree still needs to be deferred. This is
// almost identical to the logic used in the normal update path,
// so we'll just enter that. The only difference is we'll bail out
// at the next level instead of this one, because the child props
// have not changed. Which is fine.
// TODO: Probably should refactor `beginWork` to split the bailout
// path from the normal path. I'm tempted to do a labeled break here
// but I won't :)
t.lanes=0,cG(e,t,n))}return du(e,t,n)}(e,t,n));// See https://github.com/facebook/react/pull/19216.
c$=(131072&e.flags)!=0}}else if(c$=!1,lF&&(lj(),(1048576&t.flags)!=0)){// Check if this child belongs to a list of muliple children in
// its parent.
//
// In a true multi-threaded implementation, we would render children on
// parallel threads. This would represent the beginning of a new render
// thread for this subtree.
//
// We only use this for id generation during hydration, which is why the
// logic is located in this special branch.
var r=t.index;lN(t,(lj(),lR),r)}// Before entering the begin phase, clear pending update priority.
switch(// TODO: This assumes that we're about to evaluate the component and process
// the update queue. However, there's an exception: SimpleMemoComponent
// sometimes bails out later in the begin phase. This indicates that we should
// move this assignment out of the common path and into each branch.
t.lanes=0,t.tag){case 2:return function(e,t,n,r){dl(e,t);var a,o,i,l=t.pendingProps,u=ll(t,n,!1);if(a=ls(t,u),uv(t,r),rB(t),n.prototype&&"function"==typeof n.prototype.render){var s=tR(n)||"Unknown";ed[s]||(eI("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",s,s),ed[s]=!0)}// Support for module components is deprecated and is removed behind a flag.
// Whether or not it would crash later, we want to show a good message in DEV first.
if(8&t.mode&&l3.recordLegacyContextWarning(t,null),tO=!0,cH.current=t,o=sw(null,t,n,l,a,r),i=sk(),tO=!1,rV(),t.flags|=1,"object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){var c=tR(n)||"Unknown";ef[c]||(eI("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",c,c,c),ef[c]=!0)}if("object"==typeof o&&null!==o&&"function"==typeof o.render&&void 0===o.$$typeof){var d=tR(n)||"Unknown";ef[d]||(eI("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.",d,d,d),ef[d]=!0),t.tag=1,t.memoizedState=null,t.updateQueue=null;// During mounting we don't know the child context yet as the instance doesn't exist.
// We will invalidate the child context in finishClassComponent() right after rendering.
var f=!1;return ld(n)?(f=!0,lv(t)):f=!1,t.memoizedState=null!==o.state&&void 0!==o.state?o.state:null,ux(t),uj(t,o),uF(t,n,l,r),c0(null,t,n,!0,f,r)}if(// Proceed under the assumption that this is a function component
t.tag=0,8&t.mode){rU(!0);try{o=sw(null,t,n,l,a,r),i=sk()}finally{rU(!1)}}return lF&&i&&lI(t),cY(null,t,o,r),c4(t,n),t.child}(e,t,t.type,n);case 16:var a=t.elementType;return function(e,t,n,r){dl(e,t);var a,o=t.pendingProps,i=n._payload,l=(0,n._init)(i);t.type=l;var u=t.tag=function(e){if("function"==typeof e)return pm(e)?1:0;if(null!=e){var t=e.$$typeof;if(t===ts)return 11;if(t===tf)return 14}return 2}// This is used to create an alternate fiber to do work on.
(l),s=ui(l,o);switch(u){case 0:return c4(t,l),t.type=l=ps(l),cJ(null,t,l,s,r);case 1:return t.type=l=ps(l),cZ(null,t,l,s,r);case 11:return t.type=l=pc(l),cq(null,t,l,s,r);case 14:if(t.type!==t.elementType){var c=l.propTypes;c&&i5(c,s,"prop",tR(l))}return cQ(null,t,l,ui(l.type,s),r)}var d="";// because the fact that it's a separate type of work is an
// implementation detail.
throw null!==l&&"object"==typeof l&&l.$$typeof===tp&&(d=" Did you wrap a component in React.lazy() more than once?"),Error("Element type is invalid. Received a promise that resolves to: "+l+". Lazy element type must resolve to a class or function."+d)}(e,t,a,n);case 0:var o=t.type,i=t.pendingProps,l=t.elementType===o?i:ui(o,i);return cJ(e,t,o,l,n);case 1:var u=t.type,s=t.pendingProps,c=t.elementType===u?s:ui(u,s);return cZ(e,t,u,c,n);case 3:return function(e,t,n){if(c1(t),null===e)throw Error("Should have a current fiber. This is a bug in React.");var r=t.pendingProps,a=t.memoizedState,o=a.element;uC(e,t),uP(t,r,null,n);var i=t.memoizedState;t.stateNode;// being called "element".
var l=i.element;if(a.isDehydrated){// This is a hydration root whose shell has not yet hydrated. We should
// attempt to hydrate.
// Flip isDehydrated to false to indicate that when this render
// finishes, the root will no longer be dehydrated.
var u={element:l,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions};if(// have reducer functions so it doesn't need rebasing.
t.updateQueue.baseState=u,t.memoizedState=u,256&t.flags){// Something errored during a previous attempt to hydrate the shell, so we
// forced a client render.
var s=cM(Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."),t);return c2(e,t,l,n,s)}if(l!==o){var c=cM(Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."),t);return c2(e,t,l,n,c)}// The outermost shell has not hydrated yet. Start hydrating.
lA=iH(t.stateNode.containerInfo.firstChild),lU=t,lF=!0,lB=null,lW=!1;var d=uQ(t,null,l,n);t.child=d;for(var f=d;f;)// Mark each child as hydrating. This is a fast path to know whether this
// tree is part of a hydrating tree. This is used to determine if a child
// node has fully mounted yet, and for scheduling event replaying.
// Conceptually this is similar to Placement in that a new subtree is
// inserted into the React tree here. It just happens to not need DOM
// mutations because it already exists.
f.flags=-3&f.flags|4096,f=f.sibling}else{if(// Root is not dehydrated. Either this is a client-only root, or it
// already hydrated.
l0(),l===o)return du(e,t,n);cY(e,t,l,n)}return t.child}(e,t,n);case 5:return u3(t),null===e&&lG(t),k=t.type,S=t.pendingProps,x=null!==e?e.memoizedProps:null,C=S.children,iM(k,S)?// case. We won't handle it as a reified child. We will instead handle
// this in the host environment that also has access to this prop. That
// avoids allocating another HostText fiber and traversing it.
C=null:null!==x&&iM(k,x)&&// empty, we need to schedule the text content to be reset.
(t.flags|=/*                 */32),cX(e,t),cY(e,t,C,n),t.child;case 6:return null===e&&lG(t),null;case 13:return c8(e,t,n);case 4:return u1(t,t.stateNode.containerInfo),E=t.pendingProps,null===e?// but at commit. Therefore we need to track insertions which the normal
// flow doesn't do during mount. This doesn't happen at the root because
// the root always starts with a "current" with a null child.
// TODO: Consider unifying this with how the root works.
t.child=uq(t,null,E,n):cY(e,t,E,n),t.child;case 11:var d=t.type,f=t.pendingProps,p=t.elementType===d?f:ui(d,f);return cq(e,t,d,p,n);case 7:return R=t.pendingProps,cY(e,t,R,n),t.child;case 8:return T=t.pendingProps.children,cY(e,t,T,n),t.child;case 12:return t.flags|=4,(_=t.stateNode).effectDuration=0,_.passiveEffectDuration=0,P=t.pendingProps.children,cY(e,t,P,n),t.child;case 10:return function(e,t,n){var r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value;"value"in a||da||(da=!0,eI("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));var l=t.type.propTypes;if(l&&i5(l,a,"prop","Context.Provider"),up(t,r,i),null!==o){if(oE(o.value,i))// No change. Bailout early if children are the same.
{if(o.children===a.children&&!lc())return du(e,t,n)}else// them to update.
(function(e,t,n){var r=e.child;for(null!==r&&(r.return=e);null!==r;){var a=void 0,o=r.dependencies;// Visit this fiber.
if(null!==o){a=r.child;for(var i=o.firstContext;null!==i;){// Check if the context matches.
if(i.context===t){// Match! Schedule an update on this fiber.
if(1===r.tag){var l,u=uE(-1,(l=n)&-l);u.tag=2;// TODO: Because we don't have a work-in-progress, this will add the
// update to the current fiber, too, which means it will persist even if
// this render is thrown away. Since it's a race condition, not sure it's
// worth fixing.
// Inlined `enqueueUpdate` to remove interleaved update check
var s=r.updateQueue;if(null===s);else{var c=s.shared,d=c.pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}r.lanes=r.lanes|n;var f=r.alternate;null!==f&&(f.lanes=f.lanes|n),um(r.return,n,e),o.lanes=o.lanes|n;break}i=i.next}}else if(10===r.tag)a=r.type===e.type?null:r.child;else if(18===r.tag){// If a dehydrated suspense boundary is in this subtree, we don't know
// if it will have any context consumers in it. The best we can do is
// mark it as having updates.
var p=r.return;if(null===p)throw Error("We just came from a parent so we must have had a parent. This is a bug in React.");p.lanes=p.lanes|n;var h=p.alternate;null!==h&&(h.lanes=h.lanes|n),// This is intentionally passing this fiber as the parent
// because we want to schedule this fiber as having work
// on its children. We'll use the childLanes on
// this fiber to indicate that a context has changed.
um(p,n,e),a=r.sibling}else a=r.child;if(null!==a)a.return=r;else for(// No child. Traverse to next sibling.
a=r;null!==a;){if(a===e){// We're back to the root of this subtree. Exit.
a=null;break}var m=a.sibling;if(null!==m){// Set the return pointer of the sibling to the work-in-progress fiber.
m.return=a.return,a=m;break}// No more siblings. Traverse up.
a=a.return}r=a}})(t,r,n)}return cY(e,t,a.children,n),t.child}(e,t,n);case 9:return void 0===(g=t.type)._context?g===g.Consumer||di||(di=!0,eI("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")):g=g._context,"function"!=typeof(b=t.pendingProps.children)&&eI("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."),uv(t,n),w=uy(g),rB(t),cH.current=t,tO=!0,y=b(w),tO=!1,rV(),t.flags|=1,cY(e,t,y,n),t.child;case 14:var h=t.type,m=ui(h,t.pendingProps);if(t.type!==t.elementType){var v=h.propTypes;v&&i5(v,m,"prop",tR(h))}return m=ui(h.type,m),cQ(e,t,h,m,n);case 15:return cK(e,t,t.type,t.pendingProps,n);case 17:var y,g,b,w,k,S,x,C,E,R,T,_,P,D,O=t.type,L=t.pendingProps,N=t.elementType===O?L:ui(O,L);return dl(e,t),t.tag=1,ld(O)?(D=!0,lv(t)):D=!1,uv(t,n),uU(t,O,N),uF(t,O,N,n),c0(null,t,O,!0,D,n);case 19:return dr(e,t,n);case 21:break;case 22:return cG(e,t,n)}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function dd(e){// Tag the fiber with an update effect. This turns a Placement into
// a PlacementAndUpdate.
e.flags|=4}function df(e){e.flags|=512,e.flags|=2097152}function dp(e,t){if(!lF)switch(e.tailMode){case"hidden":for(// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var n=e.tail,r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===r?e.tail=null:// inserted.
r.sibling=null;break;case"collapsed":for(// Any insertions at the end of the tail list after this point
// should be invisible. If there are already mounted boundaries
// anything before them are not considered for collapsing.
// Therefore we need to go through the whole tail to find if
// there are any.
var a=e.tail,o=null;null!==a;)null!==a.alternate&&(o=a),a=a.sibling;// Next we're simply going to delete all insertions after the
// last rendered item.
null===o?t||null===e.tail?e.tail=null:// row at the tail. So we'll keep on and cut off the rest.
e.tail.sibling=null:// inserted.
o.sibling=null}}function dh(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t){// Bubble up the earliest expiration time.
if((2&e.mode)!=0){for(// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var a=e.selfBaseDuration,o=e.child;null!==o;)n|=o.lanes|o.childLanes,// so we should bubble those up even during a bailout. All the other
// flags have a lifetime only of a single render + commit, so we should
// ignore them.
r|=14680064&o.subtreeFlags,r|=14680064&o.flags,a+=o.treeBaseDuration,o=o.sibling;e.treeBaseDuration=a}else for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,// so we should bubble those up even during a bailout. All the other
// flags have a lifetime only of a single render + commit, so we should
// ignore them.
r|=14680064&i.subtreeFlags,r|=14680064&i.flags,// smell because it assumes the commit phase is never concurrent with
// the render phase. Will address during refactor to alternate model.
i.return=e,i=i.sibling;e.subtreeFlags|=r}else{// Bubble up the earliest expiration time.
if((2&e.mode)!=0){for(// In profiling mode, resetChildExpirationTime is also used to reset
// profiler durations.
var l=e.actualDuration,u=e.selfBaseDuration,s=e.child;null!==s;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,// only be updated if work is done on the fiber (i.e. it doesn't bailout).
// When work is done, it should bubble to the parent's actualDuration. If
// the fiber has not been cloned though, (meaning no work was done), then
// this value will reflect the amount of time spent working on a previous
// render. In that case it should not bubble. We determine whether it was
// cloned by comparing the child pointer.
l+=s.actualDuration,u+=s.treeBaseDuration,s=s.sibling;e.actualDuration=l,e.treeBaseDuration=u}else for(var c=e.child;null!==c;)n|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,// smell because it assumes the commit phase is never concurrent with
// the render phase. Will address during refactor to alternate model.
c.return=e,c=c.sibling;e.subtreeFlags|=r}return e.childLanes=n,t}function dm(e,t,n){var r=t.pendingProps;// Note: This intentionally doesn't check if we're hydrating because comparing
switch(// to the current tree provider fiber is just as fast and less error-prone.
// Ideally we would have a special version of the work loop only
// for hydration.
lz(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dh(t),null;case 1:case 17:return ld(t.type)&&lf(t),dh(t),null;case 3:var a=t.stateNode;return u2(t),lp(t),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),null!==e&&null!==e.child||(lJ(t)?// the commit side-effects on the root.
dd(t):null===e||e.memoizedState.isDehydrated&&// Check if we reverted to client rendering (e.g. due to an error)
(256&t.flags)==0||(// Schedule an effect to clear this container at the start of the
// next commit. This handles the case of React rendering into a
// container with previous children. It's also safe to do for
// updates too, because current.child would only be null if the
// previous render was null (so the container would already
// be empty).
t.flags|=1024,// recoverable errors during first hydration attempt. If so, add
// them to a queue so we can log them in the commit phase.
l1())),ew(e,t),dh(t),null;case 5:u6(t);var o=u0(),i=t.type;if(null!==e&&null!=t.stateNode)ek(e,t,i,r,o),e.ref!==t.ref&&df(t);else{if(!r){if(null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");return(// This can happen when we abort work.
dh(t),null)}var l,u,s,c,d,f=u4();// TODO: Move createInstance to beginWork and keep it on a context
if(lJ(t))s=t.stateNode,c=!lW,l=t.type,u=t.memoizedProps,s[iQ]=t,s[iK]=u,d=function(e,t,n,r,a,o,i){switch(l=nz(t,n),j(t,n),t){case"dialog":o0("cancel",e),o0("close",e);break;case"iframe":case"object":case"embed":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
o0("load",e);break;case"video":case"audio":// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var l,u,s=0;s<oG.length;s++)o0(oG[s],e);break;case"source":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
o0("error",e);break;case"img":case"image":case"link":// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
o0("error",e),o0("load",e);break;case"details":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
o0("toggle",e);break;case"input":tG(e,n),// listeners still fire for the invalid event.
o0("invalid",e);break;case"option":t3(e,n);break;case"select":ne(e,n),// listeners still fire for the invalid event.
o0("invalid",e);break;case"textarea":nr(e,n),// listeners still fire for the invalid event.
o0("invalid",e)}nM(t,n),u=new Set;for(var c=e.attributes,d=0;d<c.length;d++)switch(c[d].name.toLowerCase()){// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
case"value":case"checked":case"selected":break;default:// Intentionally use the original name.
// See discussion in https://github.com/facebook/react/pull/10676.
u.add(c[d].name)}var f=null;for(var p in n)if(n.hasOwnProperty(p)){var h=n[p];if(p===il)// For text content children we compare against textContent. This
// might match additional HTML that is hidden when we read it using
// textContent. E.g. "foo" will match "f<span>oo</span>" but that still
// satisfies our requirement. Our requirement is not to produce perfect
// HTML and attributes. Ideally we should preserve structure but it's
// ok not to if the visible content is still enough to indicate what
// even listeners these nodes might be wired up to.
// TODO: Warn if there is more than a single textNode as a child.
// TODO: Should we use domElement.firstChild.nodeValue to compare?
"string"==typeof h?e.textContent!==h&&(!0!==n[io]&&ih(e.textContent,h,o,i),f=[il,h]):"number"==typeof h&&e.textContent!==""+h&&(!0!==n[io]&&ih(e.textContent,h,o,i),f=[il,""+h]);else if(ej.hasOwnProperty(p))null!=h&&("function"!=typeof h&&F(p,h),"onScroll"===p&&o0("scroll",e));else if(i&&// Convince Flow we've calculated it (it's DEV-only in this method.)
"boolean"==typeof l){// Validate that the properties correspond to their expected values.
var m=void 0,v=e2(p);if(!0===n[io]);else if(p===ia||p===io||// Controlled attributes are not validated
// TODO: Only ignore them on controlled tags.
"value"===p||"checked"===p||"selected"===p);else if(p===ir){var y=e.innerHTML,g=h?h[is]:void 0;if(null!=g){var b=B(e,g);b!==y&&U(p,y,b)}}else if(p===iu){if(// $FlowFixMe - Should be inferred as not undefined.
u.delete(p),W){var w=/**
 * Operations for dealing with CSS properties.
 *//**
 * This creates a string that is expected to be equivalent to the style
 * attribute generated by server-side rendering. It by-passes warnings and
 * security checks so it's not safe to use this value for anything other than
 * comparison. It is only used in DEV for SSR validation.
 */function(e){var t="",n="";for(var r in e)if(e.hasOwnProperty(r)){var a=e[r];if(null!=a){var o=0===r.indexOf("--");t+=n+(o?r:r.replace(nv,"-$1").toLowerCase().replace(ny,"-ms-"))+":"+nm(r,a,o),n=";"}}return t||null}(h);w!==(m=e.getAttribute("style"))&&U(p,m,w)}}else if(l)// $FlowFixMe - Should be inferred as not undefined.
u.delete(p.toLowerCase()),m=te(e,p,h),h!==m&&U(p,m,h);else if(!eZ(p,v,l)&&!e1(p,h,v,l)){var k=!1;if(null!==v)// $FlowFixMe - Should be inferred as not undefined.
u.delete(v.attributeName),m=/**
 * Get the value for a property on a node. Only used in DEV for SSR validation.
 * The "expected" argument is used as a hint of what the expected value is.
 * Some properties have multiple equivalent values.
 */function(e,t,n,r){if(r.mustUseProperty)return e[r.propertyName];e$(n,t),r.sanitizeURL&&// the hydration is successful of a javascript: URL, we
// still want to warn on the client.
// eslint-disable-next-line react-internal/safe-string-coercion
e9(""+n);var a=r.attributeName,o=null;if(4===r.type){if(e.hasAttribute(a)){var i=e.getAttribute(a);return""===i||(e1(t,n,r,!1)?i:i===""+n?n:i)}}else if(e.hasAttribute(a)){if(e1(t,n,r,!1))// for the error message.
return e.getAttribute(a);if(3===r.type)// the fact that we have it is the same as the expected.
return n;// Even if this property uses a namespace we use getAttribute
// because we assume its namespaced name is the same as our config.
// To use getAttributeNS we need the local name which we don't have
// in our config atm.
o=e.getAttribute(a)}return e1(t,n,r,!1)?null===o?n:o:o===""+n?n:o}(e,p,h,v);else{var S=r;if(S===ni&&(S=nu(t)),S===ni)u.delete(p.toLowerCase());else{var x=function(e){var t=e.toLowerCase();return nj.hasOwnProperty(t)&&nj[t]||null}(p);null!==x&&x!==p&&(// If an SVG prop is supplied with bad casing, it will
// be successfully parsed from HTML, but will produce a mismatch
// (and would be incorrectly rendered on the client).
// However, we already warn about bad casing elsewhere.
// So we'll skip the misleading extra mismatch warning in this case.
k=!0,u.delete(x)),u.delete(p)}m=te(e,p,h)}h===m||k||U(p,m,h)}}}switch(i&&u.size>0&&!0!==n[io]&&A(u),t){case"input":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
tW(e),tZ(e,n,!0);break;case"textarea":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
tW(e),no(e);break;case"select":case"option":break;default:"function"==typeof n.onClick&&iy(e)}return f}(s,l,u,f.namespace,0,(1&t.mode)!=0,c),t.updateQueue=d,null!==d&&// commit-phase we mark this as such.
dd(t);else{var p=function(e,t,n,r,a){if(iS(e,null,r.ancestorInfo),"string"==typeof t.children||"number"==typeof t.children){var o=""+t.children,i=ix(r.ancestorInfo,e);iS(null,o,i)}var l=function(e,t,n,r){// tags get no namespace.
var a,o,i=im(n),l=r;if(l===ni&&(l=nu(e)),l===ni){if((a=nz(e,t))||e===e.toLowerCase()||eI("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",e),"script"===e){// Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var u=i.createElement("div");u.innerHTML="<script></script>";// eslint-disable-line
// This is guaranteed to yield a script element.
var s=u.firstChild;o=u.removeChild(s)}else if("string"==typeof t.is)o=i.createElement(e,{is:t.is});else // attributes on `select`s needs to be added before `option`s are inserted.
// This prevents:
// - a bug where the `select` does not scroll to the correct option because singular
//  `select` elements automatically pick the first item #13222
// - a bug where the `select` set the first item as selected despite the `size` attribute #14239
// See https://github.com/facebook/react/issues/13222
// and https://github.com/facebook/react/issues/14239
if(// Separate else branch instead of using `props.is || undefined` above because of a Firefox bug.
// See discussion in https://github.com/facebook/react/pull/6896
// and discussion in https://bugzilla.mozilla.org/show_bug.cgi?id=1276240
o=i.createElement(e),"select"===e){var c=o;t.multiple?c.multiple=!0:t.size&&// it is possible that no option is selected.
//
// This is only necessary when a select in "single selection mode".
(c.size=t.size)}}else o=i.createElementNS(l,e);return l!==ni||a||"[object HTMLUnknownElement]"!==Object.prototype.toString.call(o)||eB.call(z,e)||(z[e]=!0,eI("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",e)),o}(e,t,n,r.namespace);return l[iQ]=a,l[iK]=t,l}(i,r,o,f,t);eb(p,t,!1,!1),t.stateNode=p,function(e,t,n,r,a){switch(function(e,t,n,r){var a,o,i=nz(t,n);switch(j(t,n),t){case"dialog":o0("cancel",e),o0("close",e),o=n;break;case"iframe":case"object":case"embed":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the load event.
o0("load",e),o=n;break;case"video":case"audio":// We listen to these events in case to ensure emulated bubble
// listeners still fire for all the media events.
for(var l=0;l<oG.length;l++)o0(oG[l],e);o=n;break;case"source":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the error event.
o0("error",e),o=n;break;case"img":case"image":case"link":// We listen to these events in case to ensure emulated bubble
// listeners still fire for error and load events.
o0("error",e),o0("load",e),o=n;break;case"details":// We listen to this event in case to ensure emulated bubble
// listeners still fire for the toggle event.
o0("toggle",e),o=n;break;case"input":tG(e,n),o=tK(e,n),// listeners still fire for the invalid event.
o0("invalid",e);break;case"option":t3(e,n),o=n;break;case"select":ne(e,n),o=t9(e,n),// listeners still fire for the invalid event.
o0("invalid",e);break;case"textarea":nr(e,n),o=nn(e,n),// listeners still fire for the invalid event.
o0("invalid",e);break;default:o=n}switch(nM(t,o),function(e,t,n,r,a){for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];if(o===iu)i&&// mutated. We have already warned for this in the past.
Object.freeze(i),nL(t,i);else if(o===ir){var l=i?i[is]:void 0;null!=l&&nc(t,l)}else o===il?"string"==typeof i?("textarea"!==e||""!==i)&&nd(t,i):"number"==typeof i&&nd(t,""+i):o===ia||o===io||o===ii||(ej.hasOwnProperty(o)?null!=i&&("function"!=typeof i&&F(o,i),"onScroll"===o&&o0("scroll",t)):null!=i&&tt(t,o,i,a))}}(t,e,0,o,i),t){case"input":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
tW(e),tZ(e,n,!1);break;case"textarea":// TODO: Make sure we check if this is still unmounted or do any clean
// up necessary since we never stop tracking anymore.
tW(e),no(e);break;case"option":null!=n.value&&e.setAttribute("value",""+tz(n.value));break;case"select":e.multiple=!!n.multiple,null!=(a=n.value)?t7(e,!!n.multiple,a,!1):null!=n.defaultValue&&t7(e,!!n.multiple,n.defaultValue,!0);break;default:"function"==typeof o.onClick&&iy(e)}}// Calculate the diff between the two objects.
(e,t,n,0),t){case"button":case"input":case"select":case"textarea":return!!n.autoFocus;case"img":return!0;default:return!1}}(p,i,r,0)&&dd(t)}null!==t.ref&&df(t)}return dh(t),null;case 6:if(e&&null!=t.stateNode){var h=e.memoizedProps;// If we have an alternate, that means this is an update and we need
// to schedule a side-effect to do the updates.
eS(e,t,h,r)}else{if("string"!=typeof r&&null===t.stateNode)throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");var m,v,y=u0(),g=u4();lJ(t)?function(e){var t=e.stateNode,n=e.memoizedProps,r=(t[iQ]=e,e.mode,t.nodeValue!==n);if(r){// We assume that prepareToHydrateHostTextInstance is called in a context where the
// hydration parent is the parent host component of this host text.
var a=lU;if(null!==a)switch(a.tag){case 3:a.stateNode.containerInfo;var o=(1&a.mode)!=0;ih(t.nodeValue,n,o,!0);break;case 5:a.type;var i=a.memoizedProps,l=(a.stateNode,(1&a.mode)!=0);!0!==i[iL]&&ih(t.nodeValue,n,l,!0)}}return r}(t)&&dd(t):t.stateNode=(iS(null,r,g.ancestorInfo),(v=im(y).createTextNode(r))[iQ]=t,v)}return dh(t),null;case 13:lt(u8,t);var b=t.memoizedState;// Special path for dehydrated boundaries. We may eventually move this
// to its own fiber type so that we can add other kinds of hydration
// boundaries that aren't associated with a Suspense tree. In anticipation
// of such a refactor, all the hydration logic is contained in
// this branch.
if((null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated)&&!function(e,t,n){if(lF&&null!==lA&&(1&t.mode)!=0&&(128&t.flags)==0)return lZ(t),l0(),t.flags|=98560,!1;var r=lJ(t);if(null===n||null===n.dehydrated)return(// Successfully completed this tree. If this was a forced client render,
// there may have been recoverable errors during first hydration
// attempt. If so, add them to a queue so we can log them in the
// commit phase.
l1(),!0);// We might be inside a hydration state the first time we're picking up this
// Suspense boundary, and also after we've reentered it for further hydration.
if(null===e){if(!r)throw Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");if(function(e){var t=e.memoizedState,n=null!==t?t.dehydrated:null;if(!n)throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");n[iQ]=e}(t),dh(t),(2&t.mode)!=0&&null!==n){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var a=t.child;null!==a&&(t.treeBaseDuration-=a.treeBaseDuration)}return!1}if(// We might have reentered this boundary to hydrate it. If so, we need to reset the hydration
// state since we're now exiting out of it. popHydrationState doesn't do that for us.
l0(),(128&t.flags)==0&&(t.memoizedState=null),// If nothing suspended, we need to schedule an effect to mark this boundary
// as having hydrated so events know that they're free to be invoked.
// It's also a signal to replay events and the suspense callback.
// If something suspended, schedule an effect to attach retry listeners.
// So we might as well always mark this.
t.flags|=4,dh(t),(2&t.mode)!=0&&null!==n){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var o=t.child;null!==o&&(t.treeBaseDuration-=o.treeBaseDuration)}return!1}(e,t,b)){if(65536&t.flags)// this as a mismatch. Revert to client rendering.
return t;// render or because something suspended.
return null}if((128&t.flags)!=0)// Don't bubble properties in this case.
return(// Something suspended. Re-render with the fallback children.
t.lanes=n,(2&t.mode)!=0&&cI(t),t);var w=null!==b;// a passive effect, which is when we process the transitions
if(w!==(null!==e&&null!==e.memoizedState)&&w){var k=t.child;// in the concurrent tree already suspended during this render.
// This is a known bug.
k.flags|=/*                   */8192,(1&t.mode)!=0&&((null!==e||(t.memoizedProps.unstable_avoidThisFallback,0))&&(1&u8.current)==0?// suspend for longer if possible.
fq():0===fn&&(fn=3))}if(null!==t.updateQueue&&// TODO: Move to passive phase
(t.flags|=4),dh(t),(2&t.mode)!=0&&w){// Don't count time spent in a timed out Suspense subtree as part of the base duration.
var S=t.child;null!==S&&(t.treeBaseDuration-=S.treeBaseDuration)}return null;case 4:return u2(t),ew(e,t),null===e&&o4(t.stateNode.containerInfo),dh(t),null;case 10:return uh(t.type._context,t),dh(t),null;case 19:lt(u8,t);var x=t.memoizedState;if(null===x)return(// We're running in the default, "independent" mode.
// We don't do anything in this mode.
dh(t),null);var C=(128&t.flags)!=0,E=x.rendering;if(null===E){// We just rendered the head.
if(C)dp(x,!1);else{if(!(0===fn&&(null===e||(128&e.flags)==0)))for(var R=t.child;null!==R;){var T=u7(R);if(null!==T){C=!0,t.flags|=128,dp(x,!1);// part of the second pass. In that case nothing will subscribe to
// its thenables. Instead, we'll transfer its thenables to the
// SuspenseList so that it can retry if they resolve.
// There might be multiple of these in the list but since we're
// going to wait for all of them anyway, it doesn't really matter
// which ones gets to ping. In theory we could get clever and keep
// track of how many dependencies remain but it gets tricky because
// in the meantime, we can add/remove/change items and dependencies.
// We might bail out of the loop before finding any but that
// doesn't matter since that means that the other boundaries that
// we did find already has their listeners attached.
var _=T.updateQueue;return null!==_&&(t.updateQueue=_,t.flags|=4),// to stay in place.
// Reset the effect flags before doing the second pass since that's now invalid.
// Reset the child fibers to their original state.
t.subtreeFlags=0,function(e,t){for(var n=e.child;null!==n;)(function(e,t){// This resets the Fiber to what createFiber or createWorkInProgress would
// have set the values to before during the first pass. Ideally this wouldn't
// be necessary but unfortunately many code paths reads from the workInProgress
// when they should be reading from current and writing to workInProgress.
// We assume pendingProps, index, key, ref, return are still untouched to
// avoid doing another reconciliation.
// Reset the effect flags but keep any Placement tags, since that's something
// that child fiber is setting, not the reconciliation.
e.flags&=14680066;// The effects are no longer valid.
var n=e.alternate;if(null===n)// Reset to createFiber's initial values.
e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=0,e.treeBaseDuration=0;else{// Reset to the cloned values that createWorkInProgress would've.
e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type;// it cannot be shared with the current fiber.
var r=n.dependencies;e.dependencies=null===r?null:{lanes:r.lanes,firstContext:r.firstContext},// Note: We don't reset the actualTime counts. It's useful to accumulate
// actual time across multiple render passes.
e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration}})(n,t),n=n.sibling}(t,n),// rerender the children.
u5(t,1&u8.current|2),t.child}R=R.sibling}null!==x.tail&&rC()>fd&&(// We have already passed our CPU deadline but we still have rows
// left in the tail. We'll just give up further attempts to render
// the main content and only render fallbacks.
t.flags|=128,C=!0,dp(x,!1),// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
t.lanes=4194304)}}else{// Append the rendered row to the child list.
if(!C){var P=u7(E);if(null!==P){t.flags|=128,C=!0;// get lost if this row ends up dropped during a second pass.
var D=P.updateQueue;if(null!==D&&(t.updateQueue=D,t.flags|=4),dp(x,!0),null===x.tail&&"hidden"===x.tailMode&&!E.alternate&&!lF// We don't cut it if we're hydrating.
)return(// We're done.
dh(t),null)}else 2*// exceed it.
rC()-x.renderingStartTime>fd&&1073741824!==n&&(// We have now passed our CPU deadline and we'll just give up further
// attempts to render the main content and only render fallbacks.
// The assumption is that this is usually faster.
t.flags|=128,C=!0,dp(x,!1),// to get it started back up to attempt the next item. While in terms
// of priority this work has the same priority as this current render,
// it's not part of the same transition once the transition has
// committed. If it's sync, we still want to yield so that it can be
// painted. Conceptually, this is really the same as pinging.
// We can use any RetryLane even if it's the one currently rendering
// since we're leaving it behind on this node.
t.lanes=4194304)}if(x.isBackwards)// The effect list of the backwards tail will have been added
// to the end. This breaks the guarantee that life-cycles fire in
// sibling order but that isn't a strong guarantee promised by React.
// Especially since these might also just pop in during future commits.
// Append to the beginning of the list.
E.sibling=t.child,t.child=E;else{var O=x.last;null!==O?O.sibling=E:t.child=E,x.last=E}}if(null!==x.tail){// We still have tail rows to render.
// Pop a row.
var L=x.tail;x.rendering=L,x.tail=L.sibling,x.renderingStartTime=rC(),L.sibling=null;// TODO: We can probably just avoid popping it instead and only
// setting it the first time we go from not suspended to suspended.
var N=u8.current;// Don't bubble properties in this case.
return C?N=1&N|2:N&=1,u5(t,N),L}return dh(t),null;case 21:break;case 22:case 23:fV(t);var I=null!==t.memoizedState;return null!==e&&null!==e.memoizedState!==I&&(t.flags|=8192),I&&(1&t.mode)!=0?(1073741824&fe)!=0&&(dh(t),6&t.subtreeFlags&&(t.flags|=8192)):dh(t),null;case 24:case 25:return null}throw Error("Unknown unit of work tag ("+t.tag+"). This error is likely caused by a bug in React. Please file an issue.")}function dv(e,t,n){switch(// Note: This intentionally doesn't check if we're hydrating because comparing
// to the current tree provider fiber is just as fast and less error-prone.
// Ideally we would have a special version of the work loop only
// for hydration.
lz(t),t.tag){case 1:null!=t.type.childContextTypes&&lf(t);break;case 3:t.stateNode,u2(t),lp(t),se();break;case 5:u6(t);break;case 4:u2(t);break;case 13:case 19:lt(u8,t);break;case 10:uh(t.type._context,t);break;case 22:case 23:fV(t)}}// Mutation mode
eb=function(e,t,n,r){for(// We only have the top Fiber that was created but we need recurse down its
// children to find all the terminal nodes.
var a=t.child;null!==a;){if(5===a.tag||6===a.tag)!function(e,t){e.appendChild(t)}(e,a.stateNode);else if(4===a.tag);else if(null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)return;for(;null===a.sibling;){if(null===a.return||a.return===t)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ew=function(e,t){},ek=function(e,t,n,r,a){// If we have an alternate, that means this is an update and we need to
// schedule a side-effect to do the updates.
var o=e.memoizedProps;if(o!==r){// component is hitting the resume path. Figure out why. Possibly
// related to `hidden`.
var i=function(e,t,n,r,a,o){if(typeof r.children!=typeof n.children&&("string"==typeof r.children||"number"==typeof r.children)){var i=""+r.children,l=ix(o.ancestorInfo,t);iS(null,i,l)}return function(e,t,n,r,a){j(t,r);var o,i,l,u,s=null;switch(t){case"input":o=tK(e,n),i=tK(e,r),s=[];break;case"select":o=t9(e,n),i=t9(e,r),s=[];break;case"textarea":o=nn(e,n),i=nn(e,r),s=[];break;default:o=n,i=r,"function"!=typeof o.onClick&&"function"==typeof i.onClick&&iy(e)}nM(t,i);var c=null;for(l in o)if(!i.hasOwnProperty(l)&&o.hasOwnProperty(l)&&null!=o[l]){if(l===iu){var d=o[l];for(u in d)d.hasOwnProperty(u)&&(c||(c={}),c[u]="")}else l!==ir&&l!==il&&l!==ia&&l!==io&&l!==ii&&(ej.hasOwnProperty(l)?s||(s=[]):// the allowed property list in the commit phase instead.
(s=s||[]).push(l,null))}for(l in i){var f=i[l],p=null!=o?o[l]:void 0;if(i.hasOwnProperty(l)&&f!==p&&(null!=f||null!=p)){if(l===iu){if(f&&// mutated. We have already warned for this in the past.
Object.freeze(f),p){// Unset styles on `lastProp` but not on `nextProp`.
for(u in p)!p.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(c||(c={}),c[u]="");// Update styles that changed since `lastProp`.
for(u in f)f.hasOwnProperty(u)&&p[u]!==f[u]&&(c||(c={}),c[u]=f[u])}else c||(s||(s=[]),s.push(l,c)),c=f}else if(l===ir){var h=f?f[is]:void 0,m=p?p[is]:void 0;null!=h&&m!==h&&(s=s||[]).push(l,h)}else l===il?("string"==typeof f||"number"==typeof f)&&(s=s||[]).push(l,""+f):l!==ia&&l!==io&&(ej.hasOwnProperty(l)?(null!=f&&("function"!=typeof f&&F(l,f),"onScroll"===l&&o0("scroll",e)),s||p===f||// that the "current" props pointer gets updated so we need a commit
// to update this element.
(s=[])):// filter it out using the allowed property list during the commit.
(s=s||[]).push(l,f))}}return c&&(/**
 * When mixing shorthand and longhand property names, we warn during updates if
 * we expect an incorrect result to occur. In particular, we warn for:
 *
 * Updating a shorthand property (longhand gets overwritten):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'baz', fontVariant: 'bar'}
 *   becomes .style.font = 'baz'
 * Removing a shorthand property (longhand gets lost too):
 *   {font: 'foo', fontVariant: 'bar'} -> {fontVariant: 'bar'}
 *   becomes .style.font = ''
 * Removing a longhand property (should revert to shorthand; doesn't):
 *   {font: 'foo', fontVariant: 'bar'} -> {font: 'foo'}
 *   becomes .style.fontVariant = ''
 */function(e,t){if(t){var n=nN(e),r=nN(t),a={};for(var o in n){var i=n[o],l=r[o];if(l&&i!==l){var u,s=i+","+l;if(a[s])continue;a[s]=!0,eI("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",null==(u=e[i])||"boolean"==typeof u||""===u?"Removing":"Updating",i,l)}}}}(c,i[iu]),(s=s||[]).push(iu,c)),s}// Apply the diff.
(e,t,n,r)}(t.stateNode,n,o,r,0,u4());// TODO: Type this specific to this type of component.
t.updateQueue=i,i&&dd(t)}},eS=function(e,t,n,r){// If the text differs, mark it as an update. All the work in done in commitWork.
n!==r&&dd(t)};var dy=null;dy=new Set;// Allows us to avoid traversing the return path to find the nearest Offscreen ancestor.
// Only used when enableSuspenseLayoutEffectSemantics is enabled.
var dg=!1,db=!1,dw="function"==typeof WeakSet?WeakSet:Set,dk=null,dS=null,dx=null,dC=function(e,t){if(t.props=e.memoizedProps,t.state=e.memoizedState,2&e.mode)try{cN(),t.componentWillUnmount()}finally{cO(e)}else t.componentWillUnmount()};function dE(e,t){try{dL(4,e)}catch(n){f2(e,t,n)}}// Capture errors so they don't interrupt unmounting.
function dR(e,t,n){try{dC(e,n)}catch(n){f2(e,t,n)}}// Capture errors so they don't interrupt mounting.
function dT(e,t){try{dN(e)}catch(n){f2(e,t,n)}}function d_(e,t){var n,r=e.ref;if(null!==r){if("function"==typeof r){try{if(2&e.mode)try{cN(),n=r(null)}finally{cO(e)}else n=r(null)}catch(n){f2(e,t,n)}"function"==typeof n&&eI("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",t_(e))}else r.current=null}}function dP(e,t,n){try{n()}catch(n){f2(e,t,n)}}var dD=!1;function dO(e,t,n){var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var o=a.next,i=o;do{if((i.tag&e)===e){// Unmount
var l=i.destroy;i.destroy=void 0,void 0!==l&&((8&e)!=/*   */0?null!==rM&&"function"==typeof rM.markComponentPassiveEffectUnmountStarted&&rM.markComponentPassiveEffectUnmountStarted(t):(4&e)!=0&&rH(t),(2&e)!=0&&(fD=!0),dP(t,n,l),(2&e)!=0&&(fD=!1),(8&e)!=0?null!==rM&&"function"==typeof rM.markComponentPassiveEffectUnmountStopped&&rM.markComponentPassiveEffectUnmountStopped():(4&e)!=0&&r$())}i=i.next}while(i!==o)}}function dL(e,t){var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next,o=a;do{if((o.tag&e)===e){(8&e)!=0?null!==rM&&"function"==typeof rM.markComponentPassiveEffectMountStarted&&rM.markComponentPassiveEffectMountStarted(t):(4&e)!=0&&null!==rM&&"function"==typeof rM.markComponentLayoutEffectMountStarted&&rM.markComponentLayoutEffectMountStarted(t);var i=o.create;(2&e)!=0&&(fD=!0),o.destroy=i(),(2&e)!=0&&(fD=!1),(8&e)!=0?null!==rM&&"function"==typeof rM.markComponentPassiveEffectMountStopped&&rM.markComponentPassiveEffectMountStopped():(4&e)!=0&&null!==rM&&"function"==typeof rM.markComponentLayoutEffectMountStopped&&rM.markComponentLayoutEffectMountStopped();var l=o.destroy;if(void 0!==l&&"function"!=typeof l){var u=void 0;u=(4&o.tag)!=0?"useLayoutEffect":(2&o.tag)!=0?"useInsertionEffect":"useEffect";var s=void 0;s=null===l?" You returned null. If your effect does not require clean up, return undefined (or nothing).":"function"==typeof l.then?"\n\nIt looks like you wrote "+u+"(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:\n\n"+u+"(() => {\n  async function fetchData() {\n    // You can await here\n    const response = await MyAPI.getData(someId);\n    // ...\n  }\n  fetchData();\n}, [someId]); // Or [] if effect doesn't need props or state\n\nLearn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching":" You returned: "+l,eI("%s must not return anything besides a function, which is used for clean-up.%s",u,s)}}o=o.next}while(o!==a)}}function dN(e){var t=e.ref;if(null!==t){var n,r=e.stateNode;if(e.tag,"function"==typeof t){if(2&e.mode)try{cN(),n=t(r)}finally{cO(e)}else n=t(r);"function"==typeof n&&eI("Unexpected return value from a callback ref in %s. A callback ref should not return a function.",t_(e))}else t.hasOwnProperty("current")||eI("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",t_(e)),t.current=r}}function dI(e){return 5===e.tag||3===e.tag||4===e.tag}function dM(e){// We're going to search forward into the tree until we find a sibling host
// node. Unfortunately, if multiple insertions are done in a row we have to
// search past them. This leads to exponential search for the next sibling.
// TODO: Find a more efficient way to do this.
var t=e;t:for(;;){// If we didn't find anything, let's try the next sibling.
for(;null===t.sibling;){if(null===t.return||dI(t.return))// last sibling.
return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;5!==t.tag&&6!==t.tag&&18!==t.tag;){// If it is not host node and, we might have a host node inside it.
// Try to search down until we find one.
if(2&t.flags||null===t.child||4===t.tag)continue t;t.child.return=t,t=t.child}// Check if this host node is stable or about to be placed.
if(!(2&t.flags))return t.stateNode}}// deleted subtree.
// TODO: Update these during the whole mutation phase, not just during
// a deletion.
var dz=null,dj=!1;function dU(e,t,n){for(// TODO: Use a static flag to skip trees that don't have unmount effects
var r=n.child;null!==r;)dA(e,t,r),r=r.sibling}function dA(e,t,n){// into their subtree. There are simpler cases in the inner switch
// that don't modify the stack.
switch(function(e){if(rI&&"function"==typeof rI.onCommitFiberUnmount)try{rI.onCommitFiberUnmount(rN,e)}catch(e){rz||(rz=!0,eI("React instrumentation encountered an error: %s",e))}}(n),n.tag){case 5:db||d_(n,t);// Intentional fallthrough to next branch
// eslint-disable-next-line-no-fallthrough
case 6:var r,a,o,i,l=dz,u=dj;dz=null,dU(e,t,n),dz=l,dj=u,null!==dz&&(dj?(o=dz,i=n.stateNode,8===o.nodeType?o.parentNode.removeChild(i):o.removeChild(i)):function(e,t){e.removeChild(t)}(dz,n.stateNode));return;case 18:null!==dz&&(dj?(r=dz,a=n.stateNode,8===r.nodeType?iW(r.parentNode,a):1===r.nodeType&&iW(r,a),// Retry if any event replaying was blocked on this.
aE(r)):iW(dz,n.stateNode));return;case 4:// When we go into a portal, it becomes the parent to remove from.
var s=dz,c=dj;dz=n.stateNode.containerInfo,dj=!0,dU(e,t,n),dz=s,dj=c;return;case 0:case 11:case 14:case 15:if(!db){var d=n.updateQueue;if(null!==d){var f=d.lastEffect;if(null!==f){var p=f.next,h=p;do{var m=h,v=m.destroy,y=m.tag;void 0!==v&&((2&y)!=0?dP(n,t,v):(4&y)!=0&&(rH(n),2&n.mode?(cN(),dP(n,t,v),cO(n)):dP(n,t,v),r$())),h=h.next}while(h!==p)}}}dU(e,t,n);return;case 1:if(!db){d_(n,t);var g=n.stateNode;"function"==typeof g.componentWillUnmount&&dR(n,t,g)}dU(e,t,n);return;case 21:default:dU(e,t,n);return;case 22:if(1&n.mode){// If this offscreen component is hidden, we already unmounted it. Before
// deleting the children, track that it's already unmounted so that we
// don't attempt to unmount the effects again.
// TODO: If the tree is hidden, in most cases we should be able to skip
// over the nested children entirely. An exception is we haven't yet found
// the topmost host node to delete, which we already track on the stack.
// But the other case is portals, which need to be detached no matter how
// deeply they are nested. We should use a subtree flag to track whether a
// subtree includes a nested portal.
var b=db;db=b||null!==n.memoizedState,dU(e,t,n),db=b}else dU(e,t,n)}}function dF(e){// If this boundary just timed out, then it will have a set of wakeables.
// For each wakeable, attach a listener so that when it resolves, React
// attempts to re-render the boundary in the primary (pre-timeout) state.
var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new dw),t.forEach(function(t){// Memoize using the boundary fiber to prevent redundant listeners.
var r=f8.bind(null,e,t);if(!n.has(t)){if(n.add(t),rj){if(null!==dS&&null!==dx)pn(dx,dS);else throw Error("Expected finished root and lanes to be set. This is a bug in React.")}t.then(r,r)}})}}// This function detects when a Suspense boundary goes from visible to hidden.
function dW(e,t,n){// Deletions effects can be scheduled on any fiber type. They need to happen
// before the children effects hae fired.
var r=t.deletions;if(null!==r)for(var a=0;a<r.length;a++){var o=r[a];try{!function(e,t,n){// We only have the top Fiber that was deleted but we need to recurse down its
// children to find all the terminal nodes.
// Recursively delete all host nodes from the parent, detach refs, clean
// up mounted layout effects, and call componentWillUnmount.
// We only need to remove the topmost host child in each branch. But then we
// still need to keep traversing to unmount effects, refs, and cWU. TODO: We
// could split this into two separate traversals functions, where the second
// one doesn't include any removeChild logic. This is maybe the same
// function as "disappearLayoutEffects" (or whatever that turns into after
// the layout phase is refactored to use recursion).
// Before starting, find the nearest host parent on the stack so we know
// which instance/container to remove the children from.
// TODO: Instead of searching up the fiber return path on every deletion, we
// can track the nearest host component on the JS stack as we traverse the
// tree during the commit phase. This would make insertions faster, too.
var r,a=t;n:for(;null!==a;){switch(a.tag){case 5:dz=a.stateNode,dj=!1;break n;case 3:case 4:dz=a.stateNode.containerInfo,dj=!0;break n}a=a.return}if(null===dz)throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");dA(e,t,n),dz=null,dj=!1,null!==(r=n.alternate)&&(r.return=null),n.return=null}(e,t,o)}catch(e){f2(o,t,e)}}var i=tD;if(12854&t.subtreeFlags)for(var l=t.child;null!==l;)tM(l),dB(l,e),l=l.sibling;tM(i)}function dB(e,t,n){var r,a=e.alternate,o=e.flags;// because the fiber tag is more specific. An exception is any flag related
// to reconcilation, because those can be set on all fiber types.
switch(e.tag){case 0:case 11:case 14:case 15:if(dW(t,e),dV(e),4&o){try{dO(3,e,e.return),dL(3,e)}catch(t){f2(e,e.return,t)}// Layout effects are destroyed during the mutation phase so that all
// destroy functions for all fibers are called before any create functions.
// This prevents sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
if(2&e.mode){try{cN(),dO(5,e,e.return)}catch(t){f2(e,e.return,t)}cO(e)}else try{dO(5,e,e.return)}catch(t){f2(e,e.return,t)}}return;case 1:dW(t,e),dV(e),512&o&&null!==a&&d_(a,a.return);return;case 5:// TODO: ContentReset gets cleared by the children during the commit
// phase. This is a refactor hazard because it means we must read
// flags the flags after `commitReconciliationEffects` has already run;
// the order matters. We should refactor so that ContentReset does not
// rely on mutating the flag during commit. Like by setting a flag
// during the render phase instead.
if(dW(t,e),dV(e),512&o&&null!==a&&d_(a,a.return),32&e.flags){var i=e.stateNode;try{nd(i,"")}catch(t){f2(e,e.return,t)}}if(4&o){var l=e.stateNode;if(null!=l){// Commit the work prepared earlier.
var u=e.memoizedProps,s=null!==a?a.memoizedProps:u,c=e.type,d=e.updateQueue;// For hydration we reuse the update path but we treat the oldProps
if(e.updateQueue=null,null!==d)try{// Apply the diff to the DOM node.
(function(e,t,n,r,a){var o,i;// changed.
switch("input"===n&&"radio"===a.type&&null!=a.name&&tX(e,a),nz(n,r),function(e,t,n,r){// TODO: Handle wasCustomComponentTag
for(var a=0;a<t.length;a+=2){var o=t[a],i=t[a+1];o===iu?nL(e,i):o===ir?nc(e,i):o===il?nd(e,i):tt(e,o,i,r)}}(e,t,0,nz(n,a)),n){case"input":// Update the wrapper around inputs *after* updating props. This has to
// happen after `updateDOMProperties`. Otherwise HTML5 input validations
// raise warnings and prevent the new value from being assigned.
tJ(e,a);break;case"textarea":na(e,a);break;case"select":// <select> value update needs to occur after <option> children
// reconciliation
o=e._wrapperState.wasMultiple,e._wrapperState.wasMultiple=!!a.multiple,null!=(i=a.value)?t7(e,!!a.multiple,i,!1):!!a.multiple!==o&&(null!=a.defaultValue?t7(e,!!a.multiple,a.defaultValue,!0):t7(e,!!a.multiple,a.multiple?[]:"",!1))}})(l,d,c,s,u),l[iK]=u}catch(t){f2(e,e.return,t)}}}return;case 6:if(dW(t,e),dV(e),4&o){if(null===e.stateNode)throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");var f=e.stateNode,p=e.memoizedProps;null!==a&&a.memoizedProps;try{f.nodeValue=p}catch(t){f2(e,e.return,t)}}return;case 3:if(dW(t,e),dV(e),4&o&&null!==a&&a.memoizedState.isDehydrated)try{r=t.containerInfo,// Retry if any event replaying was blocked on this.
aE(r)}catch(t){f2(e,e.return,t)}return;case 4:default:dW(t,e),dV(e);return;case 13:dW(t,e),dV(e);var h=e.child;if(8192&h.flags){var m=h.stateNode,v=null!==h.memoizedState;// read it during an event
m.isHidden=v,v&&!(null!==h.alternate&&null!==h.alternate.memoizedState)&&(fc=rC())}if(4&o){try{e.memoizedState}catch(t){f2(e,e.return,t)}dF(e)}return;case 22:var y=null!==a&&null!==a.memoizedState;if(1&e.mode){// Before committing the children, track on the stack whether this
// offscreen subtree was already hidden, so that we don't unmount the
// effects again.
var g=db;db=g||y,dW(t,e),db=g}else dW(t,e);if(dV(e),8192&o){var b=e.stateNode,w=null!==e.memoizedState;if(// read it during an event
b.isHidden=w,w&&!y&&(1&e.mode)!=0){dk=e;for(var k=e.child;null!==k;)dk=k,function(e){for(;null!==dk;){var t=dk,n=t.child;switch(t.tag){case 0:case 11:case 14:case 15:if(2&t.mode)try{cN(),dO(4,t,t.return)}finally{cO(t)}else dO(4,t,t.return);break;case 1:// TODO (Offscreen) Check: flags & RefStatic
d_(t,t.return);var r=t.stateNode;"function"==typeof r.componentWillUnmount&&dR(t,t.return,r);break;case 5:d_(t,t.return);break;case 22:if(null!==t.memoizedState){// Nested Offscreen tree is already hidden. Don't disappear
// its effects.
d$(e);continue}}// TODO (Offscreen) Check: subtreeFlags & LayoutStatic
null!==n?(n.return=t,dk=n):d$(e)}}(k),k=k.sibling}!// TODO: This needs to run whenever there's an insertion or update
// inside a hidden Offscreen tree.
function(e,t){for(// Only hide or unhide the top-most host nodes.
var n=null,r=e;;){if(5===r.tag){if(null===n){n=r;try{var a=r.stateNode;t?function(e){var t=e.style;"function"==typeof t.setProperty?t.setProperty("display","none","important"):t.display="none"}(a):function(e,t){var n=t.style,r=null!=n&&n.hasOwnProperty("display")?n.display:null;e.style.display=nm("display",r)}(r.stateNode,r.memoizedProps)}catch(t){f2(e,e.return,t)}}}else if(6===r.tag){if(null===n)try{var o,i=r.stateNode;t?i.nodeValue="":(o=r.memoizedProps,i.nodeValue=o)}catch(t){f2(e,e.return,t)}}else if((22===r.tag||23===r.tag)&&null!==r.memoizedState&&r!==e);else if(null!==r.child){r.child.return=r,r=r.child;continue}if(r===e)return;for(;null===r.sibling;){if(null===r.return||r.return===e)return;n===r&&(n=null),r=r.return}n===r&&(n=null),r.sibling.return=r.return,r=r.sibling}}(e,w)}return;case 19:dW(t,e),dV(e),4&o&&dF(e);return;case 21:return}}function dV(e){// Placement effects (insertions, reorders) can be scheduled on any fiber
// type. They needs to happen after the children effects have fired, but
// before the effects on this fiber have fired.
var t=e.flags;if(2&t){try{!function(e){var t=function(e){for(var t=e.return;null!==t;){if(dI(t))return t;t=t.return}throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.")}(e);// Note: these two variables *must* always be updated together.
switch(t.tag){case 5:var n=t.stateNode;32&t.flags&&(nd(n,""),t.flags&=-33);var r=dM(e);// We only have the top Fiber that was inserted but we need to recurse down its
// children to find all the terminal nodes.
(function e(t,n,r){var a=t.tag;if(5===a||6===a){var o=t.stateNode;n?function(e,t,n){e.insertBefore(t,n)}(r,o,n):function(e,t){e.appendChild(t)}(r,o)}else if(4===a);else{var i=t.child;if(null!==i){e(i,n,r);for(var l=i.sibling;null!==l;)e(l,n,r),l=l.sibling}}}// These are tracked on the stack as we recursively traverse a
)(e,r,n);break;case 3:case 4:var a=t.stateNode.containerInfo,o=dM(e);(function e(t,n,r){var a=t.tag;if(5===a||6===a){var o,i=t.stateNode;n?8===r.nodeType?r.parentNode.insertBefore(i,n):r.insertBefore(i,n):(8===r.nodeType?(o=r.parentNode).insertBefore(i,r):(o=r).appendChild(i),null==r._reactRootContainer&&null===o.onclick&&iy(o))}else if(4===a);else{var l=t.child;if(null!==l){e(l,n,r);for(var u=l.sibling;null!==u;)e(u,n,r),u=u.sibling}}})(e,o,a);break;// eslint-disable-next-line-no-fallthrough
default:throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.")}}(e)}catch(t){f2(e,e.return,t)}// Clear the "placement" from effect tag so that we know that this is
// inserted, before any life-cycles like componentDidMount gets called.
// TODO: findDOMNode doesn't rely on this any more but isMounted does
// and isMounted is deprecated anyway so we should be able to kill this.
e.flags&=-3}4096&t&&(e.flags&=-4097)}function dH(e,t,n){for(;null!==dk;){var r=dk;if((8772&r.flags)!=0){var a=r.alternate;tM(r);try{!function(e,t,n,r){if((8772&n.flags)!=0)switch(n.tag){case 0:case 11:case 15:if(!db){// At this point layout effects have already been destroyed (during mutation phase).
// This is done to prevent sibling component effects from interfering with each other,
// e.g. a destroy function in one component should never override a ref set
// by a create function in another component during the same commit.
if(2&n.mode)try{cN(),dL(5,n)}finally{cO(n)}else dL(5,n)}break;case 1:var a=n.stateNode;if(4&n.flags&&!db){if(null===t){if(n.type!==n.elementType||ev||(a.props!==n.memoizedProps&&eI("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",t_(n)||"instance"),a.state!==n.memoizedState&&eI("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",t_(n)||"instance")),2&n.mode)try{cN(),a.componentDidMount()}finally{cO(n)}else a.componentDidMount()}else{var o=n.elementType===n.type?t.memoizedProps:ui(n.type,t.memoizedProps),i=t.memoizedState;if(n.type!==n.elementType||ev||(a.props!==n.memoizedProps&&eI("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",t_(n)||"instance"),a.state!==n.memoizedState&&eI("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",t_(n)||"instance")),2&n.mode)try{cN(),a.componentDidUpdate(o,i,a.__reactInternalSnapshotBeforeUpdate)}finally{cO(n)}else a.componentDidUpdate(o,i,a.__reactInternalSnapshotBeforeUpdate)}}// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var l=n.updateQueue;null!==l&&(n.type!==n.elementType||ev||(a.props!==n.memoizedProps&&eI("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",t_(n)||"instance"),a.state!==n.memoizedState&&eI("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",t_(n)||"instance")),// but instead we rely on them being set during last render.
// TODO: revisit this when we implement resuming.
uD(n,l,a));break;case 3:// TODO: I think this is now always non-null by the time it reaches the
// commit phase. Consider removing the type check.
var u=n.updateQueue;if(null!==u){var s=null;if(null!==n.child)switch(n.child.tag){case 5:case 1:s=n.child.stateNode}uD(n,u,s)}break;case 5:var c=n.stateNode;// Renderers may schedule work to be done after host components are mounted
// (eg DOM renderer may schedule auto-focus for inputs and form controls).
// These effects should only be committed when components are first mounted,
// aka when there is no current/alternate.
null===t&&4&n.flags&&function(e,t,n,r){// Despite the naming that might imply otherwise, this method only
// fires if there is an `Update` effect scheduled during mounting.
// This happens if `finalizeInitialChildren` returns `true` (which it
// does to implement the `autoFocus` attribute on the client). But
// there are also other cases when this might happen (such as patching
// up text content during hydration mismatch). So we'll check this again.
switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&e.focus();return;case"img":n.src&&(e.src=n.src);return}}(c,n.type,n.memoizedProps);break;case 6:case 4:case 19:case 17:case 21:case 22:case 23:case 25:break;case 12:var d=n.memoizedProps,f=d.onCommit,p=d.onRender,h=n.stateNode.effectDuration,m=cx,v=null===t?"mount":"update";cT&&(v="nested-update"),"function"==typeof p&&p(n.memoizedProps.id,v,n.actualDuration,n.treeBaseDuration,n.actualStartTime,m),"function"==typeof f&&f(n.memoizedProps.id,v,h,m),fw.push(n),fy||(fy=!0,pa(r_,function(){return fJ(),null}));// Do not reset these values until the next render so DevTools has a chance to read them first.
var y=n.return;r:for(;null!==y;){switch(y.tag){case 3:var g=y.stateNode;g.effectDuration+=h;break r;case 12:var b=y.stateNode;b.effectDuration+=h;break r}y=y.return}break;case 13:(function(e,t){if(null===t.memoizedState){var n=t.alternate;if(null!==n){var r=n.memoizedState;if(null!==r){var a=r.dehydrated;null!==a&&// Retry if any event replaying was blocked on this.
aE(a)}}}})(0,n);break;default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}!db&&512&n.flags&&dN(n)}(0,a,r,0)}catch(e){f2(r,r.return,e)}tI()}if(r===e){dk=null;return}var o=r.sibling;if(null!==o){o.return=r.return,dk=o;return}dk=r.return}}function d$(e){for(;null!==dk;){var t=dk;if(t===e){dk=null;return}var n=t.sibling;if(null!==n){n.return=t.return,dk=n;return}dk=t.return}}function dY(e){for(;null!==dk;){var t=dk;// TODO (Offscreen) Check: flags & LayoutStatic
tM(t);try{!function(e){// Turn on layout effects in a tree that previously disappeared.
// TODO (Offscreen) Check: flags & LayoutStatic
switch(e.tag){case 0:case 11:case 15:if(2&e.mode)try{cN(),dE(e,e.return)}finally{cO(e)}else dE(e,e.return);break;case 1:var t=e.stateNode;"function"==typeof t.componentDidMount&&function(e,t,n){try{n.componentDidMount()}catch(n){f2(e,t,n)}}// Capture errors so they don't interrupt mounting.
(e,e.return,t),dT(e,e.return);break;case 5:dT(e,e.return)}}(t)}catch(e){f2(t,t.return,e)}if(tI(),t===e){dk=null;return}var n=t.sibling;if(null!==n){// This node may have been reused from a previous render, so we can't
// assume its return pointer is correct.
n.return=t.return,dk=n;return}dk=t.return}}function dq(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:try{dL(5,e)}catch(t){f2(e,e.return,t)}break;case 1:var t=e.stateNode;try{t.componentDidMount()}catch(t){f2(e,e.return,t)}}}function dQ(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:try{dL(9,e)}catch(t){f2(e,e.return,t)}}}function dK(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:try{dO(5,e,e.return)}catch(t){f2(e,e.return,t)}break;case 1:var t=e.stateNode;"function"==typeof t.componentWillUnmount&&dR(e,e.return,t)}}function dG(e){// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
switch(e.tag){case 0:case 11:case 15:try{dO(9,e,e.return)}catch(t){f2(e,e.return,t)}}}if("function"==typeof Symbol&&Symbol.for){var dX=Symbol.for;dX("selector.component"),dX("selector.has_pseudo_class"),dX("selector.role"),dX("selector.test_id"),dX("selector.text")}var dJ=[],dZ=eO.ReactCurrentActQueue;function d0(){var e="undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?IS_REACT_ACT_ENVIRONMENT:void 0;return e||null===dZ.current||eI("The current testing environment is not configured to support act(...)"),e}var d1=Math.ceil,d2=eO.ReactCurrentDispatcher,d4=eO.ReactCurrentOwner,d3=eO.ReactCurrentBatchConfig,d6=eO.ReactCurrentActQueue,d8=0,d5=null,d7=null,d9=0,fe=0,ft=le(0),fn=0,fr=null,fa=0,fo=0,fi=0,fl=0,fu=null,fs=null,fc=0,fd=1/0,ff=null;function fp(){fd=rC()+500}var fh=!1,fm=null,fv=null,fy=!1,fg=null,fb=0,fw=[],fk=null,fS=0,fx=null,fC=!1,fE=!1,fR=0,fT=null,f_=-1,fP=0,fD=!1;function fO(){return(6&d8)!=0?rC():-1!==f_?f_:// This is the first update since React yielded. Compute a new start time.
f_=rC()}function fL(e){if((1&e.mode)==0)return 1;if((2&d8)!=0&&0!==d9)// old behavior is to give this the same "thread" (lanes) as
// whatever is currently rendering. So if you call `setState` on a component
// that happens later in the same render, it will flush. Ideally, we want to
// remove the special case and treat them as if they came from an
// interleaved event. Regardless, this pattern is not officially supported.
// This behavior is only a fallback. The flag only exists until we can roll
// out the setState warning, since existing code might accidentally rely on
// the current behavior.
{var t;return(t=d9)&-t}if(null!==l4.transition){if(null!==d3.transition){var n,r=d3.transition;r._updatedFibers||(r._updatedFibers=new Set),r._updatedFibers.add(e)}// The algorithm for assigning an update to a lane should be stable for all
return 0===fP&&(fP=r5()),fP}// Updates originating inside certain React methods, like flushSync, have
// their priority set by tracking it with a context variable.
//
// The opaque type returned by the host config is internally a lane, so we can
// use that directly.
// TODO: Move this type conversion to the event priority module.
var a=ai;return 0!==a?a:void 0===(n=window.event)?16:aN(n.type)}function fN(e,t,n,r){((function(){if(fS>50)throw fS=0,fx=null,Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");fR>50&&(fR=0,fT=null,eI("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."))})(),fD&&eI("useInsertionEffect must not schedule updates."),fC&&(fE=!0),at(e,n,r),(2&d8)!=0&&e===d5)?// if the update originates from user space (with the exception of local
// hook updates, which are handled differently and don't reach this
// function), but there are some internal React features that use this as
// an implementation detail, like selective hydration.
function(e){if(tO&&!ca)switch(e.tag){case 0:case 11:case 15:var t=d7&&t_(d7)||"Unknown";// Dedupe by the rendering component because it's the one that needs to be fixed.
eC.has(t)||(eC.add(t),eI("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render",t_(e)||"Unknown",t,t));break;case 1:pt||(eI("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),pt=!0)}}(t):(rj&&aa(e,t,n),function(e){if(1&e.mode){if(!d0())return}else{var t;// Legacy mode has additional cases where we suppress a warning.
if(t="undefined"!=typeof IS_REACT_ACT_ENVIRONMENT?IS_REACT_ACT_ENVIRONMENT:void 0,"undefined"==typeof jest||!1===t||0!==d8||0!==e.tag&&11!==e.tag&&15!==e.tag)return}if(null===d6.current){var n=tD;try{tM(e),eI("An update to %s inside a test was not wrapped in act(...).\n\nWhen testing, code that causes React state updates should be wrapped into act(...):\n\nact(() => {\n  /* fire events that update state */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act",t_(e))}finally{n?tM(e):tI()}}}(t),e===d5&&((2&d8)==0&&(fi|=n),4===fn&&// definitely won't finish. Since we have a new update, let's mark it as
// suspended now, right before marking the incoming update. This has the
// effect of interrupting the current render and switching to the update.
// TODO: Make sure this doesn't override pings that happen while we've
// already started rendering.
fU(e,d9)),fI(e,r),1===n&&0===d8&&(1&t.mode)==0&&// Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
!d6.isBatchingLegacy&&(// Flush the synchronous work now, unless we're already working or inside
// a batch. This is intentionally inside scheduleUpdateOnFiber instead of
// scheduleCallbackForFiber to preserve the ability to schedule a callback
// without immediately flushing it. We only do this for user-initiated
// updates, to preserve historical behavior of legacy mode.
fp(),lb&&lS()))}// root; if a task was already scheduled, we'll check to make sure the priority
// of the existing task is the same as the priority of the next level that the
// root has work on. This function is called on every update, and right before
// exiting a task.
function fI(e,t){var n,r,a,o=e.callbackNode;// Check if any lanes are being starved by other work. If so, mark them as
!// expired so we know to work on those next.
function(e,t){for(// TODO: This gets called every time we yield. We can optimize by storing
// the earliest expiration time on the root. Then use that to quickly bail out
// of this function.
var n=e.pendingLanes,r=e.suspendedLanes,a=e.pingedLanes,o=e.expirationTimes,i=n;i>0;){var l=r9(i),u=1<<l,s=o[l];-1===s?((u&r)==0||(u&a)!=0)&&(o[l]=function(e,t){switch(e){case 1:case 2:case 4:// User interactions should expire slightly more quickly.
//
// NOTE: This is set to the corresponding constant as in Scheduler.js.
// When we made it larger, a product metric in www regressed, suggesting
// there's a user interaction that's being starved by a series of
// synchronous updates. If that theory is correct, the proper solution is
// to fix the starvation. However, this scenario supports the idea that
// expiration times are an important safeguard when starvation
// does happen.
return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:// TODO: Retries should be allowed to expire if they are CPU bound for
// too long, but when I made this change it caused a spike in browser
// crashes. There must be some other underlying bug; not super urgent but
// ideally should figure out why and fix it. Unfortunately we don't have
// a repro for the crashes, only detected via production metrics.
return -1;default:return eI("Should have found matching lanes. This is a bug in React."),-1}}(u,t)):s<=t&&(e.expiredLanes|=u),i&=~u}}// This returns the highest priority pending lanes regardless of whether they
(e,t);var i=r2(e,e===d5?d9:0);if(0===i){null!==o&&po(o),e.callbackNode=null,e.callbackPriority=0;return}// We use the highest priority lane to represent the priority of the callback.
var l=i&-i,u=e.callbackPriority;// Check if there's an existing task. We may be able to reuse it.
if(u===l&&// Special case related to `act`. If the currently scheduled task is a
// Scheduler task, rather than an `act` task, cancel it and re-scheduled
// on the `act` queue.
!(null!==d6.current&&o!==pr)){// If we're going to re-use an existing task, it needs to exist.
// Assume that discrete update microtasks are non-cancellable and null.
// TODO: Temporary until we confirm this warning is not fired.
null==o&&1!==u&&eI("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");return}if(null!=o&&po(o),1===l)0===e.tag?(null!==d6.isBatchingLegacy&&(d6.didScheduleLegacyUpdate=!0),n=fA.bind(null,e),lb=!0,lk(n)):lk(fA.bind(null,e)),null!==d6.current?// at the end of the current scope even when using the sync version
// of `act`.
d6.current.push(lS):iA(function(){// In Safari, appending an iframe forces microtasks to run.
// https://github.com/facebook/react/issues/22459
// We don't support running callbacks in the middle of render
// or commit so we need to check against that.
(6&d8)==0&&// if this happens outside render or commit phase (e.g. in an event).
lS()}),r=null;else{switch(al(i)){case 1:a=rR;break;case 4:a=rT;break;case 16:default:a=r_;break;case 536870912:a=rD}r=pa(a,fM.bind(null,e))}e.callbackPriority=l,e.callbackNode=r}// This is the entry point for every concurrent task, i.e. anything that
// goes through Scheduler.
function fM(e,t){if(cT=!1,c_=!1,// event time. The next update will compute a new event time.
f_=-1,fP=0,(6&d8)!=0)throw Error("Should not already be working.");// Flush any pending passive effects before deciding which lanes to work on,
// in case they schedule additional work.
var n=e.callbackNode;if(fJ()&&e.callbackNode!==n)// `ensureRootIsScheduled` because the check above implies either that
// there's a new task, or that there's no remaining work on this root.
return null;// Determine the next lanes to work on, using the fields stored
// on the root.
var r=r2(e,e===d5?d9:0);if(0===r)return null;var a=(30&r)!=0||(r&e.expiredLanes)!=0||t?fQ(e,r):function(e,t){var n=d8;d8|=2;var r=fY();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(d5!==e||d9!==t){if(rj){var a=e.memoizedUpdaters;a.size>0&&(pn(e,d9),a.clear()),// If we bailout on this work, we'll move them back (like above).
// It's important to move them now in case the work spawns more work at the same priority with different updaters.
// That way we can keep the current update and future updates separate.
ao(e,t)}ff=null,fp(),fH(e,t)}for(rY(t);;)try{/** @noinline */(function(){// Perform work until Scheduler asks us to yield
for(;null!==d7&&!rS();)fK(d7)})();break}catch(t){f$(e,t)}return(uf(),d2.current=r,d8=n,null!==d7)?(null!==rM&&"function"==typeof rM.markRenderYielded&&rM.markRenderYielded(),0):(rq(),d5=null,d9=0,fn)}(e,r);if(0!==a){if(2===a){// If something threw an error, try rendering one more time. We'll
// render synchronously to block concurrent data mutations, and we'll
// includes all pending updates are included. If it still fails after
// the second attempt, we'll give up and commit the resulting tree.
var o=r4(e);0!==o&&(r=o,a=fz(e,o))}if(1===a){var i=fr;throw fH(e,0),fU(e,r),fI(e,rC()),i}if(6===a)// cases where need to exit the current render without producing a
// consistent tree or committing.
//
// This should only happen during a concurrent render, not a discrete or
// synchronous update. We should have already checked for this when we
// unwound the stack.
fU(e,r);else{// The render completed.
// Check if this render may have yielded to a concurrent event, and if so,
// confirm that any newly rendered stores are consistent.
// TODO: It's possible that even a concurrent render may never have yielded
// to the main thread, if it was fast enough, or if it expired. We could
// skip the consistency check in that case, too.
var l=(30&r)==0,u=e.current.alternate;if(l&&!function(e){for(// Search the rendered tree for external store reads, and check whether the
// stores were mutated in a concurrent event. Intentionally using an iterative
// loop instead of recursion so we can exit early.
var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n){var r=n.stores;if(null!==r)for(var a=0;a<r.length;a++){var o=r[a],i=o.getSnapshot,l=o.value;try{if(!oE(i(),l))return!1}catch(e){// If `getSnapshot` throws, return `false`. This will schedule
// a re-render, and the error will be rethrown during render.
return!1}}}}var u=t.child;if(16384&t.subtreeFlags&&null!==u){u.return=t,t=u;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}// Flow doesn't know this is unreachable, but eslint does
// eslint-disable-next-line no-unreachable
return!0}(u)){if(2===// A store was mutated in an interleaved event. Render again,
// synchronously, to block further mutations.
(a=fQ(e,r))){var s=r4(e);0!==s&&(r=s,a=fz(e,s))}if(1===a){var c=fr;throw fH(e,0),fU(e,r),fI(e,rC()),c}}// We now have a consistent tree. The next step is either to commit it,
// or, if something suspended, wait to commit it after a timeout.
e.finishedWork=u,e.finishedLanes=r,function(e,t,n){switch(t){case 0:case 1:throw Error("Root did not complete. This is a bug in React.");// Flow knows about invariant, so it complains if I add a break
// statement, but eslint doesn't know about invariant, so it complains
// if I do. eslint-disable-next-line no-fallthrough
case 2:case 5:// We should have already attempted to retry this tree. If we reached
// this point, it errored again. Commit it.
fX(e,fs,ff);break;case 3:// should immediately commit it or wait a bit.
if(fU(e,n),r6(n)&&// do not delay if we're inside an act() scope
!pi()){// This render only included retries, no updates. Throttle committing
// retries so that we don't show too many loading states too quickly.
var r=fc+500-rC();// Don't bother with a very short suspense time.
if(r>10){if(0!==r2(e,0))break;var a=e.suspendedLanes;if((a&n)!==n){fO(),an(e,a);break}// The render is suspended, it hasn't timed out, and there's no
// lower priority work to do. Instead of committing the fallback
// immediately, wait for more data to arrive.
e.timeoutHandle=iz(fX.bind(null,e,fs,ff),r);break}}// The work expired. Commit immediately.
fX(e,fs,ff);break;case 4:if(fU(e,n),(4194240&n)===n)break;if(!pi()){// This is not a transition, but we did trigger an avoided state.
// Schedule a placeholder to display after a short delay, using the Just
// Noticeable Difference.
// TODO: Is the JND optimization worth the added complexity? If this is
// the only reason we track the event time, then probably not.
// Consider removing.
var o=function(e,t){for(var n=e.eventTimes,r=-1;t>0;){var a=r9(t),o=1<<a,i=n[a];i>r&&(r=i),t&=~o}return r}(e,n),i=rC()-o,l=(i<120?120:i<480?480:i<1080?1080:i<1920?1920:i<3e3?3e3:i<4320?4320:1960*d1(i/1960))-i;if(l>10){// Instead of committing the fallback immediately, wait for more data
// to arrive.
e.timeoutHandle=iz(fX.bind(null,e,fs,ff),l);break}}// Commit the placeholder.
fX(e,fs,ff);break;default:throw Error("Unknown root exit status.")}}(e,a,r)}}return(fI(e,rC()),e.callbackNode===n)?fM.bind(null,e):null}function fz(e,t){// If an error occurred during hydration, discard server response and fall
// back to client side render.
// Before rendering again, save the errors from the previous attempt.
var n=fu;if(au(e)){// The shell failed to hydrate. Set a flag to force a client rendering
// during the next attempt. To do this, we call prepareFreshStack now
// to create the root work-in-progress fiber. This is a bit weird in terms
// of factoring, because it relies on renderRootSync not calling
// prepareFreshStack again in the call below, which happens because the
// root and lanes haven't changed.
//
// TODO: I think what we should do is set ForceClientRender inside
// throwException, like we do for nested Suspense boundaries. The reason
// it's here instead is so we can switch to the synchronous work loop, too.
// Something to consider for a future refactor.
var r=fH(e,t);r.flags|=256,// TODO: This gets logged by onRecoverableError, too, so we should be
// able to remove it.
eI("An error occurred during hydration. The server HTML was replaced with client content in <%s>.",e.containerInfo.nodeName.toLowerCase())}var a=fQ(e,t);if(2!==a){// Successfully finished rendering on retry
// The errors from the failed first attempt have been recovered. Add
// them to the collection of recoverable errors. We'll log them in the
// commit phase.
var o=fs;fs=n,null!==o&&fj(o)}return a}function fj(e){null===fs?fs=e:fs.push.apply(fs,e)}function fU(e,t){// When suspending, we should always exclude lanes that were pinged or (more
// rarely, since we try to avoid it) updated during the render phase.
// TODO: Lol maybe there's a better way to factor this besides this
// obnoxiously named function :)
t&=~fl,function(e,t){e.suspendedLanes|=t,e.pingedLanes&=~t;for(var n=e.expirationTimes,r=t;r>0;){var a=r9(r),o=1<<a;n[a]=-1,r&=~o}}(e,t&=~fi)}// This is the entry point for synchronous tasks that don't go
// through Scheduler
function fA(e){if(cT=c_,c_=!1,(6&d8)!=0)throw Error("Should not already be working.");fJ();var t=r2(e,0);if(!((1&t)!=0))return(// There's no remaining sync work left.
fI(e,rC()),null);var n=fQ(e,t);if(0!==e.tag&&2===n){// If something threw an error, try rendering one more time. We'll render
// synchronously to block concurrent data mutations, and we'll includes
// all pending updates are included. If it still fails after the second
// attempt, we'll give up and commit the resulting tree.
var r=r4(e);0!==r&&(t=r,n=fz(e,r))}if(1===n){var a=fr;throw fH(e,0),fU(e,t),fI(e,rC()),a}if(6===n)throw Error("Root did not complete. This is a bug in React.");// We now have a consistent tree. Because this is a sync render, we
// will commit it even if something suspended.
var o=e.current.alternate;return e.finishedWork=o,e.finishedLanes=t,fX(e,fs,ff),// pending level.
fI(e,rC()),null}function fF(e,t){var n=d8;d8|=/*               */1;try{return e(t)}finally{// most batchedUpdates-like method.
0===(d8=n)&&// Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
!d6.isBatchingLegacy&&(fp(),lb&&lS())}}// Warning, this opts-out of checking the function body.
// eslint-disable-next-line no-redeclare
function fW(e){// In legacy mode, we flush pending passive effects at the beginning of the
// next event, not at the end of the previous one.
null!==fg&&0===fg.tag&&(6&d8)==0&&fJ();var t=d8;d8|=1;var n=d3.transition,r=ai;try{if(d3.transition=null,ai=1,e)return e();return}finally{ai=r,d3.transition=n,(6&(d8=t))==0&&lS()}}function fB(e,t){ln(ft,fe,e),fe|=t,fa|=t}function fV(e){fe=ft.current,lt(ft,e)}function fH(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(// The root previous suspended and scheduled a timeout to commit a fallback
// state. Now that we have additional work, cancel the timeout.
e.timeoutHandle=-1,ij(n)),null!==d7)for(var r=d7.return;null!==r;)dv(r.alternate,r),r=r.return;d5=e;var a=pv(e.current,null);return d7=a,d9=fe=fa=t,fn=0,fr=null,fo=0,fi=0,fl=0,fu=null,fs=null,function(){// Transfer the interleaved updates onto the main queue. Each queue has a
// `pending` field and an `interleaved` field. When they are not null, they
// point to the last node in a circular linked list. We need to append the
// interleaved list to the end of the pending list by joining them into a
// single, circular list.
if(null!==ug){for(var e=0;e<ug.length;e++){var t=ug[e],n=t.interleaved;if(null!==n){t.interleaved=null;var r=n.next,a=t.pending;if(null!==a){var o=a.next;a.next=r,n.next=o}t.pending=n}}ug=null}}(),l3.discardPendingWarnings(),a}function f$(e,t){for(;;){var n=d7;try{if(// Reset module-level state that was set during the render phase.
uf(),sx(),tI(),// separate issue. Write a regression test using string refs.
d4.current=null,null===n||null===n.return){// Expected to be working on a non-root fiber. This is a fatal error
// because there's no ancestor that can handle it; the root is
// supposed to capture all errors that weren't caught by an error
// boundary.
fn=1,fr=t,// sibling, or the parent if there are no siblings. But since the root
// has no siblings nor a parent, we set it to null. Usually this is
// handled by `completeUnitOfWork` or `unwindWork`, but since we're
// intentionally not calling those, we need set it here.
// TODO: Consider calling `unwindWork` to pop the contexts.
d7=null;return}if(2&n.mode&&// avoids inaccurate Profiler durations in the case of a
// suspended render.
cD(n,!0),rV(),null!==t&&"object"==typeof t&&"function"==typeof t.then){var r,a,o,i,l,u=t;i=n,l=d9,null!==rM&&"function"==typeof rM.markComponentSuspended&&rM.markComponentSuspended(i,u,l)}else r=n,a=t,o=d9,null!==rM&&"function"==typeof rM.markComponentErrored&&rM.markComponentErrored(r,a,o);(function(e,t,n,r,a){if(// The source fiber did not complete.
n.flags|=/*                   */32768,rj&&pn(e,a),null!==r&&"object"==typeof r&&"function"==typeof r.then){// This is a wakeable. The component suspended.
var o,i=r;(function(e,t){// A legacy mode Suspense quirk, only relevant to hook components.
var n=e.tag;if((1&e.mode)==0&&(0===n||11===n||15===n)){var r=e.alternate;r?(e.updateQueue=r.updateQueue,e.memoizedState=r.memoizedState,e.lanes=r.lanes):(e.updateQueue=null,e.memoizedState=null)}})(n),lF&&1&n.mode&&(lW=!0);var l=cB(t);if(null!==l){l.flags&=-257,cV(l,t,n,e,a),1&l.mode&&cW(e,i,a),function(e,t,n,r){// Retry listener
//
// If the fallback does commit, we need to attach a different type of
// listener. This one schedules an update on the Suspense boundary to turn
// the fallback state off.
//
// Stash the wakeable on the boundary fiber so we can access it in the
// commit phase.
//
// When the wakeable resolves, we'll attempt to render the boundary
// again ("retry").
var a=e.updateQueue;if(null===a){var o=new Set;o.add(n),e.updateQueue=o}else a.add(n)}(l,0,i);return}// No boundary was found. Unless this is a sync update, this is OK.
// We can suspend and wait for more data to arrive.
if(!((1&a)!=0)){// This is not a sync update. Suspend. Since we're not activating a
// Suspense boundary, this will unwind all the way to the root without
// performing a second pass to render a fallback. (This is arguably how
// refresh transitions should work, too, since we're not going to commit
// the fallbacks anyway.)
//
// This case also applies to initial hydration.
cW(e,i,a),fq();return}// This is a sync/discrete update. We treat this case like an error
// The error will be caught by the nearest suspense boundary.
r=Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.")}else if(lF&&1&n.mode){lW=!0;var u=cB(t);// If the error was thrown during hydration, we may be able to recover by
// discarding the dehydrated content and switching to a client render.
// Instead of surfacing the error, find the nearest Suspense boundary
// and render it again without hydration.
if(null!==u){(65536&u.flags)==0&&// children again, not the fallback.
(u.flags|=256),cV(u,t,n,e,a),// still log it so it can be fixed.
l2(cM(r,n));return}}o=r=cM(r,n),4!==fn&&(fn=2),null===fu?fu=[o]:fu.push(o);// over and traverse parent path again, this time treating the exception
// as an error.
var s=t;do{switch(s.tag){case 3:var c,d=r;s.flags|=65536;var f=(c=a)&-c;s.lanes=s.lanes|f;var p=cA(s,d,f);u_(s,p);return;case 1:// Capture and retry
var h=r,m=s.type,v=s.stateNode;if((128&s.flags)==0&&("function"==typeof m.getDerivedStateFromError||null!==v&&"function"==typeof v.componentDidCatch&&!fZ(v))){s.flags|=65536;var y,g=(y=a)&-y;s.lanes=s.lanes|g;var b=cF(s,h,g);u_(s,b);return}}s=s.return}while(null!==s)})(e,n.return,n,t,d9),fG(n)}catch(e){// Something in the return path also threw.
t=e,d7===n&&null!==n?d7=// If this boundary has already errored, then we had trouble processing
// the error. Bubble it to the next boundary.
n=n.return:n=d7;continue}// Return to the normal work loop.
return}}function fY(){var e=d2.current;return(d2.current=cf,null===e)?cf:e}function fq(){(0===fn||3===fn||2===fn)&&(fn=4),null!==d5&&(r3(fo)||r3(fi))&&// the updates that were skipped. Usually we only suspend at the end of
// the render phase.
// TODO: We should probably always mark the root as suspended immediately
// (inside this function), since by suspending at the end of the render
// phase introduces a potential mistake where we suspend lanes that were
// pinged or updated while we were rendering.
fU(d5,d9)}function fQ(e,t){var n=d8;d8|=2;var r=fY();// If the root or lanes have changed, throw out the existing stack
// and prepare a fresh one. Otherwise we'll continue where we left off.
if(d5!==e||d9!==t){if(rj){var a=e.memoizedUpdaters;a.size>0&&(pn(e,d9),a.clear()),// If we bailout on this work, we'll move them back (like above).
// It's important to move them now in case the work spawns more work at the same priority with different updaters.
// That way we can keep the current update and future updates separate.
ao(e,t)}ff=null,fH(e,t)}for(rY(t);;)try{/** @noinline */(function(){// Already timed out, so perform work without checking if we need to yield.
for(;null!==d7;)fK(d7)})();break}catch(t){f$(e,t)}if(uf(),d8=n,d2.current=r,null!==d7)throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");return rq(),d5=null,d9=0,fn}// The work loop is an extremely hot path. Tell Closure not to inline it.
function fK(e){// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var t,n=e.alternate;tM(e),(2&e.mode)!=0?(cP(e),t=ex(n,e,fe),cD(e,!0)):t=ex(n,e,fe),tI(),e.memoizedProps=e.pendingProps,null===t?fG(e):d7=t,d4.current=null}function fG(e){// Attempt to complete the current unit of work, then move to the next
// sibling. If there are no more siblings, return to the parent fiber.
var t=e;do{// The current, flushed, state of this fiber is the alternate. Ideally
// nothing should rely on this, but relying on it here means that we don't
// need an additional field on the work in progress.
var n=t.alternate,r=t.return;if((32768&t.flags)==0){tM(t);var a=void 0;if((2&t.mode)==0?a=dm(n,t,fe):(cP(t),a=dm(n,t,fe),cD(t,!1)),tI(),null!==a){// Completing this fiber spawned new work. Work on that next.
d7=a;return}}else{// This fiber did not complete because something threw. Pop values off
// the stack without entering the complete phase. If this is a boundary,
// capture values if possible.
var o=function(e,t,n){switch(// Note: This intentionally doesn't check if we're hydrating because comparing
// to the current tree provider fiber is just as fast and less error-prone.
// Ideally we would have a special version of the work loop only
// for hydration.
lz(t),t.tag){case 1:ld(t.type)&&lf(t);var r=t.flags;if(65536&r)return t.flags=-65537&r|128,(2&t.mode)!=0&&cI(t),t;return null;case 3:t.stateNode,u2(t),lp(t),se();var a=t.flags;if((65536&a)!=0&&(128&a)==0)return(// There was an error during render that wasn't captured by a suspense
// boundary. Do a second pass on the root to unmount the children.
t.flags=-65537&a|128,t);// We unwound to the root without completing it. Exit.
return null;case 5:return(// TODO: popHydrationState
u6(t),null);case 13:lt(u8,t);var o=t.memoizedState;if(null!==o&&null!==o.dehydrated){if(null===t.alternate)throw Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");l0()}var i=t.flags;if(65536&i)return t.flags=-65537&i|128,(2&t.mode)!=0&&cI(t),t;return null;case 19:// caught by a nested boundary. If not, it should bubble through.
return lt(u8,t),null;case 4:return u2(t),null;case 10:return uh(t.type._context,t),null;case 22:case 23:return fV(t),null;default:return null}}(0,t);// Because this fiber did not complete, don't reset its lanes.
if(null!==o){// If completing this work spawned new work, do that next. We'll come
// back here again.
// Since we're restarting, remove anything that is not a host effect
// from the effect tag.
o.flags&=/*               */32767,d7=o;return}if((2&t.mode)!=0){// Record the render duration for the fiber that errored.
cD(t,!1);// Include the time spent working on failed children before continuing.
for(var i=t.actualDuration,l=t.child;null!==l;)i+=l.actualDuration,l=l.sibling;t.actualDuration=i}if(null!==r)// Mark the parent fiber as incomplete and clear its subtree flags.
r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{// We've unwound all the way to the root.
fn=6,d7=null;return}}var u=t.sibling;if(null!==u){// If there is more work to do in this returnFiber, do that next.
d7=u;return}// Otherwise, return to the parent
d7=t=r}while(null!==t)// We've reached the root.
0===fn&&(fn=5)}function fX(e,t,n){// TODO: This no longer makes any sense. We already wrap the mutation and
// layout phases. Should be able to remove.
var r=ai,a=d3.transition;try{d3.transition=null,ai=1,function(e,t,n,r){do // means `flushPassiveEffects` will sometimes result in additional
// passive effects. So we need to keep flushing in a loop until there are
// no more pending effects.
// TODO: Might be better if `flushPassiveEffects` did not automatically
// flush synchronous work at the end, to avoid factoring hazards like this.
fJ();while(null!==fg)if(l3.flushLegacyContextWarning(),l3.flushPendingUnsafeLifecycleWarnings(),(6&d8)!=0)throw Error("Should not already be working.");var a=e.finishedWork,o=e.finishedLanes;if(null!==rM&&"function"==typeof rM.markCommitStarted&&rM.markCommitStarted(o),null===a)return rW();if(0===o&&eI("root.finishedLanes should not be empty during a commit. This is a bug in React."),e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");// commitRoot never returns a continuation; it always finishes synchronously.
// So we can clear these now to allow a new callback to be scheduled.
e.callbackNode=null,e.callbackPriority=0;// pending time is whatever is left on the root fiber.
var i=a.lanes|a.childLanes;(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t;for(var r=e.entanglements,a=e.eventTimes,o=e.expirationTimes,i=n;i>0;){var l=r9(i),u=1<<l;r[l]=0,a[l]=-1,o[l]=-1,i&=~u}})(e,i),e===d5&&(// We can reset these now that they are finished.
d5=null,d7=null,d9=0),(2064&a.subtreeFlags)==0&&(2064&a.flags)==0||fy||(fy=!0,// to store it in pendingPassiveTransitions until they get processed
// We need to pass this through as an argument to commitRoot
// because workInProgressTransitions might have changed between
// the previous render and commit if we throttle the commit
// with setTimeout
fk=n,pa(r_,function(){// *after* passive effects fire to avoid freeing a cache pool that may
// be referenced by a node in the tree (HostRoot, Cache boundary etc)
return fJ(),null}));// TODO: This is left over from the effect list implementation, where we had
// to check for the existence of `firstEffect` to satisfy Flow. I think the
// only other reason this optimization exists is because it affects profiling.
// Reconsider whether this is necessary.
var l=(15990&a.subtreeFlags)!=0,u=(15990&a.flags)!=0;if(l||u){var s,c,d,f=d3.transition;d3.transition=null;var p=ai;ai=1;var h=d8;d8|=/*                */4,d4.current=null,e.containerInfo,iN=aT,iI={focusedElem:c=oD(),selectionRange:oO(c)?("selectionStart"in c?{start:c.selectionStart,end:c.selectionEnd}:/**
 * @param {DOMElement} outerNode
 * @return {?object}
 */function(e){var t=e.ownerDocument,n=t&&t.defaultView||window,r=n.getSelection&&n.getSelection();if(!r||0===r.rangeCount)return null;var a=r.anchorNode,o=r.anchorOffset,i=r.focusNode,l=r.focusOffset;// In Firefox, anchorNode and focusNode can be "anonymous divs", e.g. the
// up/down buttons on an <input type="number">. Anonymous divs do not seem to
// expose properties, triggering a "Permission denied error" if any of its
// properties are accessed. The only seemingly possible way to avoid erroring
// is to access a property that typically works for non-anonymous divs and
// catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{/* eslint-disable no-unused-expressions */a.nodeType,i.nodeType;/* eslint-enable no-unused-expressions */}catch(e){return null}return(/**
 * Returns {start, end} where `start` is the character/codepoint index of
 * (anchorNode, anchorOffset) within the textContent of `outerNode`, and
 * `end` is the index of (focusNode, focusOffset).
 *
 * Returns null if you pass in garbage input but we should probably just crash.
 *
 * Exported only for testing.
 */function(e,t,n,r,a){var o=0,i=-1,l=-1,u=0,s=0,c=e,d=null;r:for(;;){for(var f=null;c===t&&(0===n||3===c.nodeType)&&(i=o+n),c===r&&(0===a||3===c.nodeType)&&(l=o+a),3===c.nodeType&&(o+=c.nodeValue.length),null!==(f=c.firstChild);)// Moving from `node` to its first child `next`.
d=c,c=f;for(;;){if(c===e)break r;if(d===t&&++u===n&&(i=o),d===r&&++s===a&&(l=o),null!==(f=c.nextSibling))break;d=(c=d).parentNode}// Moving from `node` to its next sibling `next`.
c=f}return -1===i||-1===l?null:{start:i,end:l}}(e,a,o,i,l))}(c))||{start:0,end:0}:null},aT=!1,dk=a,function(){for(;null!==dk;){var e=dk,t=e.child;// This phase is only used for beforeActiveInstanceBlur.
(1028&e.subtreeFlags)!=0&&null!==t?(t.return=e,dk=t):function(){for(;null!==dk;){var e=dk;tM(e);try{(function(e){var t=e.alternate;if((1024&e.flags)!=0){switch(tM(e),e.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==t){var n,r=t.memoizedProps,a=t.memoizedState,o=e.stateNode;e.type!==e.elementType||ev||(o.props!==e.memoizedProps&&eI("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",t_(e)||"instance"),o.state!==e.memoizedState&&eI("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",t_(e)||"instance"));var i=o.getSnapshotBeforeUpdate(e.elementType===e.type?r:ui(e.type,r),a),l=dy;void 0!==i||l.has(e.type)||(l.add(e.type),eI("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",t_(e))),o.__reactInternalSnapshotBeforeUpdate=i}break;case 3:1===(n=e.stateNode.containerInfo).nodeType?n.textContent="":9===n.nodeType&&n.documentElement&&n.removeChild(n.documentElement);break;default:throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.")}tI()}})(e)}catch(t){f2(e,e.return,t)}tI();var t=e.sibling;if(null!==t){t.return=e.return,dk=t;return}dk=e.return}}()}}(),cx=cS(),dS=o,dx=e,tM(a),dB(a,e),tM(a),dS=null,dx=null,e.containerInfo,/**
 * @restoreSelection: If any selection information was potentially lost,
 * restore it. This is useful when performing operations that could remove dom
 * nodes and place them back in, resulting in focus being lost.
 */function(e){var t,n=oD(),r=e.focusedElem,a=e.selectionRange;if(n!==r&&(t=r)&&t.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||!oP(t)&&(oP(n)?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(t.ownerDocument.documentElement,t)){null!==a&&oO(r)&&(o=a.start,i=a.end,void 0===i&&(i=o),"selectionStart"in r?(r.selectionStart=o,r.selectionEnd=Math.min(i,r.value.length)):/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function(e,t){var n=e.ownerDocument||document,r=n&&n.defaultView||window;// (For instance: TinyMCE editor used in a list component that supports pasting to add more,
// fails when pasting 100+ items)
if(r.getSelection){var a=r.getSelection(),o=e.textContent.length,i=Math.min(t.start,o),l=void 0===t.end?i:Math.min(t.end,o);// Flip backward selections, so we can set with a single range.
if(!a.extend&&i>l){var u=l;l=i,i=u}var s=o_(e,i),c=o_(e,l);if(s&&c){if(1===a.rangeCount&&a.anchorNode===s.node&&a.anchorOffset===s.offset&&a.focusNode===c.node&&a.focusOffset===c.offset)return;var d=n.createRange();d.setStart(s.node,s.offset),a.removeAllRanges(),i>l?(a.addRange(d),a.extend(c.node,c.offset)):(d.setEnd(c.node,c.offset),a.addRange(d))}}}(r,a));for(// Focusing a node can change the scroll position, which is undesirable
var o,i,l=[],u=r;u=u.parentNode;)1===u.nodeType&&l.push({element:u,left:u.scrollLeft,top:u.scrollTop});"function"==typeof r.focus&&r.focus();for(var s=0;s<l.length;s++){var c=l[s];c.element.scrollLeft=c.left,c.element.scrollTop=c.top}}}(iI),aT=!!iN,iN=null,iI=null,// the mutation phase, so that the previous tree is still current during
// componentWillUnmount, but before the layout phase, so that the finished
// work is current during componentDidMount/Update.
e.current=a,null!==rM&&"function"==typeof rM.markLayoutEffectsStarted&&rM.markLayoutEffectsStarted(o),dS=o,dx=e,dk=a,function e(t,n,r){for(// Suspense layout effects semantics don't change for legacy roots.
var a=(1&t.mode)!=0;null!==dk;){var o=dk,i=o.child;if(22===o.tag&&a){var l=null!==o.memoizedState||dg;if(l){// The Offscreen tree is hidden. Skip over its layout effects.
dH(t,n,r);continue}// TODO (Offscreen) Also check: subtreeFlags & LayoutMask
var u=o.alternate,s=null!==u&&null!==u.memoizedState||db,c=dg,d=db;dg=l,(db=s)&&!d&&(// This is the root of a reappearing boundary. Turn its layout effects
// back on.
dk=o,function(e){for(;null!==dk;){var t=dk,n=t.child;if(22===t.tag&&null!==t.memoizedState){// Nested Offscreen tree is still hidden. Don't re-appear its effects.
dY(e);continue}// TODO (Offscreen) Check: subtreeFlags & LayoutStatic
null!==n?(// This node may have been reused from a previous render, so we can't
// assume its return pointer is correct.
n.return=t,dk=n):dY(e)}}(o));for(var f=i;null!==f;)dk=f,e(f,n,r),f=f.sibling;// Restore Offscreen state and resume in our-progress traversal.
dk=o,dg=c,db=d,dH(t,n,r);continue}(8772&o.subtreeFlags)!=0&&null!==i?(i.return=o,dk=i):dH(t,n,r)}}(a,e,o),dS=null,dx=null,null!==rM&&"function"==typeof rM.markLayoutEffectsStopped&&rM.markLayoutEffectsStopped(),// opportunity to paint.
rx(),d8=h,ai=p,d3.transition=f}else // No effects.
e.current=a,cx=cS();var m=fy;if(fy?(// This commit has passive effects. Stash a reference to them. But don't
// schedule a callback until after flushing layout work.
fy=!1,fg=e,fb=o):(fR=0,fT=null),0===(i=e.pendingLanes)&&// error boundaries.
(fv=null),m||f5(e.current,!1),function(e,t){if(rI&&"function"==typeof rI.onCommitFiberRoot)try{var n,r=(128&e.current.flags)==128;switch(t){case 1:n=rR;break;case 4:n=rT;break;case 16:default:n=r_;break;case 536870912:n=rD}rI.onCommitFiberRoot(rN,e,n,r)}catch(e){rz||(rz=!0,eI("React instrumentation encountered an error: %s",e))}}(a.stateNode,r),rj&&e.memoizedUpdaters.clear(),dJ.forEach(function(e){return e()}),// additional work on this root is scheduled.
fI(e,rC()),null!==t)for(var v=e.onRecoverableError,y=0;y<t.length;y++){var g=t[y],b=g.stack,w=g.digest;v(g.value,{componentStack:b,digest:w})}if(fh){fh=!1;var k=fm;throw fm=null,k}// If the passive effects are the result of a discrete render, flush them
(1&fb)!=0&&0!==e.tag&&fJ(),(1&// Read this again, since a passive effect might have updated it
(i=e.pendingLanes))!=0?(c_=!0,e===fx?fS++:(fS=0,fx=e)):fS=0,// If layout work was scheduled, flush it now.
lS(),rW()}(e,t,n,r)}finally{d3.transition=a,ai=r}return null}function fJ(){// Returns whether passive effects were flushed.
// TODO: Combine this check with the one in flushPassiveEFfectsImpl. We should
// probably just combine the two functions. I believe they were only separate
// in the first place because we used to wrap it with
// `Scheduler.runWithPriority`, which accepts a function. But now we track the
// priority within React itself, so we can mutate the variable directly.
if(null!==fg){var e=al(fb),t=d3.transition,n=ai;try{return d3.transition=null,ai=16>e?16:e,function(){if(null===fg)return!1;// Cache and clear the transitions flag
var e,t=fk;fk=null;var n=fg,r=fb;if(fg=null,// Figure out why and fix it. It's not causing any known issues (probably
// because it's only used for profiling), but it's a refactor hazard.
fb=0,(6&d8)!=0)throw Error("Cannot flush passive effects while already rendering.");fC=!0,fE=!1,null!==rM&&"function"==typeof rM.markPassiveEffectsStarted&&rM.markPassiveEffectsStarted(r);var a=d8;d8|=4,dk=n.current,function(){for(;null!==dk;){var e=dk,t=e.child;if((16&dk.flags)!=0){var n=e.deletions;if(null!==n){for(var r=0;r<n.length;r++){var a=n[r];dk=a,function(e,t){for(;null!==dk;){var n=dk;// Deletion effects fire in parent -> child order
// TODO: Check if fiber has a PassiveStatic flag
tM(n),function(e,t){switch(e.tag){case 0:case 11:case 15:2&e.mode?(cR=cS(),dO(8,e,t),cL(e)):dO(8,e,t)}}// TODO: Reuse reappearLayoutEffects traversal here?
(n,t),tI();var r=n.child;// TODO: Only traverse subtree if it has a PassiveStatic flag. (But, if we
null!==r?(r.return=n,dk=r):function(e){for(;null!==dk;){var t=dk,n=t.sibling,r=t.return;if(// Recursively traverse the entire deleted tree and clean up fiber fields.
// This is more aggressive than ideal, and the long term goal is to only
// have to detach the deleted tree at the root.
function e(t){var n=t.alternate;// tree, which has its own pointers to children, parents, and siblings.
// The other host nodes also point back to fibers, so we should detach that
// one, too.
if(null!==n&&(t.alternate=null,e(n)),// Clear cyclical Fiber fields. This level alone is designed to roughly
// approximate the planned Fiber refactor. In that world, `setState` will be
// bound to a special "instance" object instead of a Fiber. The Instance
// object will not have any of these fields. It will only be connected to
// the fiber tree via a single link at the root. So if this level alone is
// sufficient to fix memory issues, that bodes well for our plans.
t.child=null,t.deletions=null,t.sibling=null,5===t.tag){var r=t.stateNode;null!==r&&(// TODO: This function is only called on host components. I don't think all of
// these fields are relevant.
delete r[iQ],delete r[iK],delete r[iX],delete r[iJ],delete r[iZ])}t.stateNode=null,t._debugOwner=null,// Theoretically, nothing in here should be necessary, because we already
// disconnected the fiber from the tree. So even if something leaks this
// particular fiber, it won't leak anything else
//
// The purpose of this branch is to be super aggressive so we can measure
// if there's any difference in memory impact. If there is, that could
// indicate a React leak we don't know about.
t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(t),t===e){dk=null;return}if(null!==n){n.return=r,dk=n;return}dk=r}}(e)}}(a,e)}// A fiber was deleted from this parent fiber, but it's still part of
// the previous (alternate) parent fiber's list of children. Because
// children are a linked list, an earlier sibling that's still alive
// will be connected to the deleted fiber via its `alternate`:
//
//   live fiber
//   --alternate--> previous live fiber
//   --sibling--> deleted fiber
//
// We can't disconnect `alternate` on nodes that haven't been deleted
// yet, but we can disconnect the `sibling` and `child` pointers.
var o=e.alternate;if(null!==o){var i=o.child;if(null!==i){o.child=null;do{var l=i.sibling;i.sibling=null,i=l}while(null!==i)}}dk=e}}(2064&e.subtreeFlags)!=0&&null!==t?(t.return=e,dk=t):function(){for(;null!==dk;){var e=dk;(2048&e.flags)!=0&&(tM(e),function(e){switch(e.tag){case 0:case 11:case 15:2&e.mode?(cR=cS(),dO(9,e,e.return),cL(e)):dO(9,e,e.return)}}(e),tI());var t=e.sibling;if(null!==t){t.return=e.return,dk=t;return}dk=e.return}}()}}(),dk=e=n.current,function(e,t,n,r){for(;null!==dk;){var a=dk,o=a.child;(2064&a.subtreeFlags)!=0&&null!==o?(o.return=a,dk=o):function(e,t,n,r){for(;null!==dk;){var a=dk;if((2048&a.flags)!=0){tM(a);try{(function(e,t,n,r){switch(t.tag){case 0:case 11:case 15:if(2&t.mode){cR=cS();try{dL(9,t)}finally{cL(t)}}else dL(9,t)}})(0,a,0,0)}catch(e){f2(a,a.return,e)}tI()}if(a===e){dk=null;return}var o=a.sibling;if(null!==o){o.return=a.return,dk=o;return}dk=a.return}}(e,0,0,0)}}(e,n,r,t);var o=fw;fw=[];for(var i=0;i<o.length;i++)!function(e,t){// Only Profilers with work in their subtree will have an Update effect scheduled.
if((4&t.flags)!=0&&12===t.tag){var n=t.stateNode.passiveEffectDuration,r=t.memoizedProps,a=r.id,o=r.onPostCommit,i=cx,l=null===t.alternate?"mount":"update";cT&&(l="nested-update"),"function"==typeof o&&o(a,l,n,i);// Bubble times to the next nearest ancestor Profiler.
// After we process that Profiler, we'll bubble further up.
var u=t.return;r:for(;null!==u;){switch(u.tag){case 3:var s=u.stateNode;s.passiveEffectDuration+=n;break r;case 12:var c=u.stateNode;c.passiveEffectDuration+=n;break r}u=u.return}}}(0,o[i]);null!==rM&&"function"==typeof rM.markPassiveEffectsStopped&&rM.markPassiveEffectsStopped(),f5(n.current,!0),d8=a,lS(),fE?n===fT?fR++:(fR=0,fT=n):fR=0,fC=!1,fE=!1,function(e){if(rI&&"function"==typeof rI.onPostCommitFiberRoot)try{rI.onPostCommitFiberRoot(rN,e)}catch(e){rz||(rz=!0,eI("React instrumentation encountered an error: %s",e))}}(n);var l=n.current.stateNode;return l.effectDuration=0,l.passiveEffectDuration=0,!0}()}finally{ai=n,d3.transition=t}}return!1}function fZ(e){return null!==fv&&fv.has(e)}var f0=function(e){fh||(fh=!0,fm=e)};function f1(e,t,n){var r=cA(e,cM(n,t),1),a=uR(e,r,1),o=fO();null!==a&&(at(a,1,o),fI(a,o))}function f2(e,t,n){if(rc(null,function(){throw n}),rd(),fD=!1,3===e.tag){// Error was thrown at the root. There is no parent, so the root
// itself should capture it.
f1(e,e,n);return}var r=null;for(r=t;null!==r;){if(3===r.tag){f1(r,e,n);return}if(1===r.tag){var a=r.type,o=r.stateNode;if("function"==typeof a.getDerivedStateFromError||"function"==typeof o.componentDidCatch&&!fZ(o)){var i=cF(r,cM(n,e),1),l=uR(r,i,1),u=fO();null!==l&&(at(l,1,u),fI(l,u));return}}r=r.return}// TODO: Until we re-land skipUnmountedBoundaries (see #20147), this warning
// will fire for errors that are thrown by destroy functions inside deleted
// trees. What it should instead do is propagate the error to the parent of
// the deleted tree. In the meantime, do not add this warning to the
// allowlist; this is only for our internal use.
eI("Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.\n\nError message:\n\n%s",n)}function f4(e,t,n){var r=e.pingCache;null!==r&&// never be thrown again.
r.delete(t);var a=fO();an(e,n),0!==e.tag&&d0()&&null===d6.current&&eI("A suspended resource finished loading inside a test, but the event was not wrapped in act(...).\n\nWhen testing, code that resolves suspended data should be wrapped into act(...):\n\nact(() => {\n  /* finish loading suspended data */\n});\n/* assert on the output */\n\nThis ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act"),d5===e&&(d9&n)===n&&(4===fn||3===fn&&r6(d9)&&rC()-fc<500?fH(e,0):// opportunity later. So we mark this render as having a ping.
fl|=n),fI(e,a)}function f3(e,t){// The boundary fiber (a Suspense component or SuspenseList component)
// previously was rendered in its fallback state. One of the promises that
// suspended it has resolved, which means at least part of the tree was
// likely unblocked. Try rendering again, at a new lanes.
0===t&&// unnecessary entanglement?
(t=(1&e.mode)==0?1:(n=r0,(130023424&(r0<<=1))==0&&(r0=4194304),n));// TODO: Special case idle priority?
var n,r=fO(),a=uk(e,t);null!==a&&(at(a,t,r),fI(a,r))}function f6(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),f3(e,n)}function f8(e,t){var n,r=0;// Default
switch(e.tag){case 13:n=e.stateNode;var a=e.memoizedState;null!==a&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error("Pinged unknown suspense boundary type. This is probably a bug in React.")}null!==n&&// never be thrown again.
n.delete(t),f3(e,r)}// Computes the next Just Noticeable Difference (JND) boundary.
function f5(e,t){// TODO (StrictEffects) Should we set a marker on the root if it contains strict effects
// so we don't traverse unnecessarily? similar to subtreeFlags but just at the root level.
// Maybe not a big deal since this is DEV only behavior.
tM(e),f7(e,16777216,dK),t&&f7(e,/*              */33554432,dG),f7(e,16777216,dq),t&&f7(e,33554432,dQ),tI()}function f7(e,t,n){for(// We don't need to re-check StrictEffectsMode here.
// This function is only called if that check has already passed.
var r=e,a=null;null!==r;){var o=r.subtreeFlags&t;r!==a&&null!==r.child&&0!==o?r=r.child:((r.flags&t)!=0&&n(r),r=null!==r.sibling?r.sibling:a=r.return)}}var f9=null;function pe(e){if((2&d8)==0&&1&e.mode){var t=e.tag;if(2===t||3===t||1===t||0===t||11===t||14===t||15===t){// We show the whole stack but dedupe on the top component's name because
// the problematic code almost always lies inside that component.
var n=t_(e)||"ReactComponent";if(null!==f9){if(f9.has(n))return;f9.add(n)}else f9=new Set([n]);var r=tD;try{tM(e),eI("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.")}finally{r?tM(e):tI()}}}}ex=function(e,t,n){// If a component throws an error, we replay it again in a synchronously
// dispatched event, so that the debugger will treat it as an uncaught
// error See ReactErrorUtils for more information.
// Before entering the begin phase, copy the work-in-progress onto a dummy
// fiber. If beginWork throws, we'll use this to reset the state.
var r=px(null,t);try{return dc(e,t,n)}catch(o){if(lW||null!==o&&"object"==typeof o&&"function"==typeof o.then)// Don't replay errors if we are hydrating and have already suspended or handled an error
throw o;if(// Keep this code in sync with handleError; any changes here must have
// corresponding changes there.
uf(),sx(),// same fiber again.
// Unwind the failed stack frame
dv(e,t),px(t,r),2&t.mode&&cP(t),// Run beginWork again.
rc(null,dc,null,e,t,n),ro){var a=rd();"object"==typeof a&&null!==a&&a._suppressLogging&&"object"==typeof o&&null!==o&&!o._suppressLogging&&(o._suppressLogging=!0)}// We always throw the original error in case the second render pass is not idempotent.
// This can happen if a memoized function or CommonJS module doesn't throw after first invocation.
throw o}};var pt=!1;function pn(e,t){rj&&e.memoizedUpdaters.forEach(function(n){aa(e,n,t)})}eC=new Set;var pr={};function pa(e,t){// If we're currently inside an `act` scope, bypass Scheduler and push to
// the `act` queue instead.
var n=d6.current;return null!==n?(n.push(t),pr):rw(e,t)}function po(e){if(e!==pr)// In production, always call Scheduler. This function will be stripped out.
return rk(e)}function pi(){// Never force flush in production. This function should get stripped out.
return null!==d6.current}/* eslint-disable react-internal/prod-error-codes */var pl=null,pu=null;// $FlowFixMe Flow gets confused by a WeakSet feature check below.
function ps(e){if(null===pl)return e;var t=pl(e);return void 0===t?e:t.current}function pc(e){if(null===pl)return e;var t=pl(e);if(void 0===t){// Check if we're dealing with a real forwardRef. Don't want to crash early.
if(null!=e&&"function"==typeof e.render){// ForwardRef is special because its resolved .type is an object,
// but it's possible that we only have its inner render function in the map.
// If that inner render function is different, we'll build a new forwardRef type.
var n=ps(e.render);if(e.render!==n){var r={$$typeof:ts,render:n};return void 0!==e.displayName&&(r.displayName=e.displayName),r}}return e}// Use the latest known implementation.
return t.current}function pd(e,t){if(null===pl)return!1;var n=e.elementType,r=t.type,a=!1,o="object"==typeof r&&null!==r?r.$$typeof:null;switch(e.tag){case 1:"function"==typeof r&&(a=!0);break;case 0:"function"==typeof r?a=!0:o===tp&&// We're going to assume that the lazy inner type is stable,
// and so it is sufficient to avoid reconciling it away.
// We're not going to unwrap or actually use the new lazy type.
(a=!0);break;case 11:o===ts?a=!0:o===tp&&(a=!0);break;case 14:case 15:o===tf?// we shouldn't set this.
a=!0:o===tp&&(a=!0);break;default:return!1}// Check if both types have a family and it's the same one.
if(a){// Note: memo() and forwardRef() we'll compare outer rather than inner type.
// This means both of them need to be registered to preserve state.
// If we unwrapped and compared the inner types for wrappers instead,
// then we would risk falsely saying two separate memo(Foo)
// calls are equivalent because they wrap the same Foo function.
var i=pl(n);if(void 0!==i&&i===pl(r))return!0}return!1}function pf(e){null!==pl&&"function"==typeof WeakSet&&(null===pu&&(pu=new WeakSet),pu.add(e))}eE=!1;try{Object.preventExtensions({});/* eslint-enable no-new */}catch(e){// TODO: Consider warning about bad polyfills
eE=!0}function pp(e,t,n,r){// Instance
this.tag=e,this.key=n,this.elementType=null,this.type=null,this.stateNode=null,this.return=null,this.child=null,this.sibling=null,this.index=0,this.ref=null,this.pendingProps=t,this.memoizedProps=null,this.updateQueue=null,this.memoizedState=null,this.dependencies=null,this.mode=r,this.flags=0,this.subtreeFlags=0,this.deletions=null,this.lanes=0,this.childLanes=0,this.alternate=null,// Note: The following is done to avoid a v8 performance cliff.
//
// Initializing the fields below to smis and later updating them with
// double values will cause Fibers to end up having separate shapes.
// This behavior/bug has something to do with Object.preventExtension().
// Fortunately this only impacts DEV builds.
// Unfortunately it makes React unusably slow for some applications.
// To work around this, initialize the fields below with doubles.
//
// Learn more about this here:
// https://github.com/facebook/react/issues/14365
// https://bugs.chromium.org/p/v8/issues/detail?id=8538
this.actualDuration=Number.NaN,this.actualStartTime=Number.NaN,this.selfBaseDuration=Number.NaN,this.treeBaseDuration=Number.NaN,// This won't trigger the performance cliff mentioned above,
// and it simplifies other profiler code (including DevTools).
this.actualDuration=0,this.actualStartTime=-1,this.selfBaseDuration=0,this.treeBaseDuration=0,// This isn't directly used but is handy for debugging internals:
this._debugSource=null,this._debugOwner=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,eE||"function"!=typeof Object.preventExtensions||Object.preventExtensions(this)}// This is a constructor function, rather than a POJO constructor, still
// please ensure we do the following:
// 1) Nobody should add any instance methods on this. Instance methods can be
//    more difficult to predict when they get optimized and they are almost
//    never inlined properly in static compilers.
// 2) Nobody should rely on `instanceof Fiber` for type testing. We should
//    always know when it is a fiber.
// 3) We might want to experiment with using numeric keys since they are easier
//    to optimize in a non-JIT environment.
// 4) We can easily go from a constructor to a createFiber object literal if that
//    is faster.
// 5) It should be easy to port this to a C struct and keep a C implementation
//    compatible.
var ph=function(e,t,n,r){// $FlowFixMe: the shapes are exact here but Flow doesn't like constructors
return new pp(e,t,n,r)};function pm(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function pv(e,t){var n=e.alternate;null===n?(// We use a double buffering pooling technique because we know that we'll
// only ever need at most two versions of a tree. We pool the "other" unused
// node that we're free to reuse. This is lazily created to avoid allocating
// extra objects for things that are never updated. It also allow us to
// reclaim the extra memory if needed.
(n=ph(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,// DEV-only fields
n._debugSource=e._debugSource,n._debugOwner=e._debugOwner,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,// Reset the effect tag.
n.flags=0,n.subtreeFlags=0,n.deletions=null,// We intentionally reset, rather than copy, actualDuration & actualStartTime.
// This prevents time from endlessly accumulating in new commits.
// This has the downside of resetting values for different priority renders,
// But works for yielding (the common case) and should support resuming.
n.actualDuration=0,n.actualStartTime=-1),// Static effects are not specific to a render.
n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue;// it cannot be shared with the current fiber.
var r=e.dependencies;switch(n.dependencies=null===r?null:{lanes:r.lanes,firstContext:r.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 2:case 0:case 15:case 1:n.type=ps(e.type);break;case 11:n.type=pc(e.type)}return n}// Used to reuse a Fiber for a second pass.
function py(e,t,n,r,a,o){var i,l,u,s,c=2,d=e;// The resolved type is set if we know what the final type will be. I.e. it's not lazy.
if("function"==typeof e)pm(e)&&(c=1),d=ps(d);else if("string"==typeof e)c=5;else a:switch(e){case ta:return pb(n.children,a,o,t);case to:c=8,(1&(a|=8))!=0&&(a|=16);break;case ti:return i=a,"string"!=typeof n.id&&eI('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof n.id),(l=ph(12,n,t,2|i)).elementType=ti,l.lanes=o,l.stateNode={effectDuration:0,passiveEffectDuration:0},l;case tc:return(u=ph(13,n,t,a)).elementType=tc,u.lanes=o,u;case td:return(s=ph(19,n,t,a)).elementType=td,s.lanes=o,s;case th:return pw(n,a,o,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case tl:c=10;break a;case tu:// This is a consumer
c=9;break a;case ts:c=11,d=pc(d);break a;case tf:c=14;break a;case tp:c=16,d=null;break a}var f="";(void 0===e||"object"==typeof e&&null!==e&&0===Object.keys(e).length)&&(f+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=r?t_(r):null;throw p&&(f+="\n\nCheck the render method of `"+p+"`."),Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: "+(null==e?e:typeof e)+"."+f)}var h=ph(c,n,t,a);return h.elementType=e,h.type=d,h.lanes=o,h._debugOwner=r,h}function pg(e,t,n){var r=null;r=e._owner;var a=py(e.type,e.key,e.props,r,t,n);return a._debugSource=e._source,a._debugOwner=e._owner,a}function pb(e,t,n,r){var a=ph(7,e,r,t);return a.lanes=n,a}function pw(e,t,n,r){var a=ph(22,e,r,t);return a.elementType=th,a.lanes=n,a.stateNode={isHidden:!1},a}function pk(e,t,n){var r=ph(6,e,null,t);return r.lanes=n,r}function pS(e,t,n){var r=ph(4,null!==e.children?e.children:[],e.key,t);return r.lanes=n,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,// Used by persistent updates
implementation:e.implementation},r}// Used for stashing WIP properties to replay failed work in DEV.
function px(e,t){return null===e&&// We only use a Fiber to ensure the same hidden class so DEV isn't slow.
(e=ph(2,null,null,0)),// This is intentionally written as a list of all properties.
// We tried to use Object.assign() instead but this is called in
// the hottest path, and Object.assign() was too slow:
// https://github.com/facebook/react/issues/12502
// This code is DEV-only so size is not a concern.
e.tag=t.tag,e.key=t.key,e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.return=t.return,e.child=t.child,e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.pendingProps=t.pendingProps,e.memoizedProps=t.memoizedProps,e.updateQueue=t.updateQueue,e.memoizedState=t.memoizedState,e.dependencies=t.dependencies,e.mode=t.mode,e.flags=t.flags,e.subtreeFlags=t.subtreeFlags,e.deletions=t.deletions,e.lanes=t.lanes,e.childLanes=t.childLanes,e.alternate=t.alternate,e.actualDuration=t.actualDuration,e.actualStartTime=t.actualStartTime,e.selfBaseDuration=t.selfBaseDuration,e.treeBaseDuration=t.treeBaseDuration,e._debugSource=t._debugSource,e._debugOwner=t._debugOwner,e._debugNeedsRemount=t._debugNeedsRemount,e._debugHookTypes=t._debugHookTypes,e}function pC(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.pendingChildren=null,this.current=null,this.pingCache=null,this.finishedWork=null,this.timeoutHandle=-1,this.context=null,this.pendingContext=null,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=ae(0),this.expirationTimes=ae(-1),this.pendingLanes=0,this.suspendedLanes=0,this.pingedLanes=0,this.expiredLanes=0,this.mutableReadLanes=0,this.finishedLanes=0,this.entangledLanes=0,this.entanglements=ae(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null,this.effectDuration=0,this.passiveEffectDuration=0,this.memoizedUpdaters=new Set;for(var o=this.pendingUpdatersLaneMap=[],i=0;i<rJ;i++)o.push(new Set);switch(t){case 1:this._debugRootType=n?"hydrateRoot()":"createRoot()";break;case 0:this._debugRootType=n?"hydrate()":"render()"}}function pE(e,t,n,r,a,o,i,// them through the root constructor. Perhaps we should put them all into a
// single type, like a DynamicHostConfig that is defined by the renderer.
l,u,s){var c,d=new pC(e,t,n,l,u),f=(1===t?(c=1,!0===o&&(c|=8,c|=16)):c=0,rj&&// This enables DevTools to start capturing timing at any point–
// Without some nodes in the tree having empty base times.
(c|=2),ph(3,null,null,c));return d.current=f,f.stateNode=d,f.memoizedState={element:r,isDehydrated:n,cache:null,// not enabled yet
transitions:null,pendingSuspenseBoundaries:null},ux(f),d}var pR="18.2.0";function pT(e){if(!e)return lr;var t=rf(e),n=function(e){// Currently this is only used with renderSubtreeIntoContainer; not sure if it
// makes sense elsewhere
if(rh(e)!==e||1!==e.tag)throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");var t=e;do{switch(t.tag){case 3:return t.stateNode.context;case 1:if(ld(t.type))return t.stateNode.__reactInternalMemoizedMergedChildContext}t=t.return}while(null!==t)throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.")}(t);if(1===t.tag){var r=t.type;if(ld(r))return lm(t,r,n)}return n}function p_(e,t,n,r,a,o,i,l,u,s){var c=pE(n,r,!0,e,a,o,i,l,u);// TODO: Move this to FiberRoot constructor
c.context=pT(null);// a regular update because the initial render must match was was rendered
// on the server.
// NOTE: This update intentionally doesn't have a payload. We're only using
// the update to schedule work on the root fiber (and, for legacy roots, to
// enqueue the callback if one is provided).
var d=c.current,f=fO(),p=fL(d),h=uE(f,p);return h.callback=null!=t?t:null,uR(d,h,p),c.current.lanes=p,at(c,p,f),fI(c,f),c}function pP(e,t,n,r){!function(e,t){if(rI&&"function"==typeof rI.onScheduleFiberRoot)try{rI.onScheduleFiberRoot(rN,e,t)}catch(e){rz||(rz=!0,eI("React instrumentation encountered an error: %s",e))}}(t,e);var a=t.current,o=fO(),i=fL(a);null!==rM&&"function"==typeof rM.markRenderScheduled&&rM.markRenderScheduled(i);var l=pT(n);null===t.context?t.context=l:t.pendingContext=l,tO&&null!==tD&&!eR&&(eR=!0,eI("Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.\n\nCheck the render method of %s.",t_(tD)||"Unknown"));var u=uE(o,i);// Caution: React DevTools currently depends on this property
// being called "element".
u.payload={element:e},null!==(r=void 0===r?null:r)&&("function"!=typeof r&&eI("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.",r),u.callback=r);var s=uR(a,u,i);return null!==s&&(fN(s,a,i,o),uT(s,a,i)),i}function pD(e){var t=e.current;return t.child?(t.child.tag,t.child.stateNode):null}function pO(e,t){var n,r=e.memoizedState;null!==r&&null!==r.dehydrated&&(r.retryLane=0!==(n=r.retryLane)&&n<t?n:t)}// Increases the priority of thenables when they resolve within this boundary.
function pL(e,t){pO(e,t);var n=e.alternate;n&&pO(n,t)}function pN(e){var t,n=null!==(t=rg(e))?function e(t){// Next we'll drill down this component to find the first HostComponent/Text.
if(5===t.tag||6===t.tag)return t;for(var n=t.child;null!==n;){if(4!==n.tag){var r=e(n);if(null!==r)return r}n=n.sibling}return null}(t):null;return null===n?null:n.stateNode}eR=!1,eT={};var pI=function(e){return null},pM=function(e){return!1},pz=null,pj=null,pU=null,pA=null,pF=null,pW=null,pB=null,pV=null,pH=null,p$=function(e,t,n){var r=t[n],a=t6(e)?e.slice():ty({},e);return n+1===t.length?t6(a)?a.splice(r,1):delete a[r]:a[r]=p$(e[r],t,n+1),a},pY=function(e,t){return p$(e,t,0)},pq=function(e,t,n,r){var a=t[r],o=t6(e)?e.slice():ty({},e);return r+1===t.length?(o[n[r]]=o[a],t6(o))?o.splice(a,1):delete o[a]:o[a]=pq(e[a],t,n,r+1),o},pQ=function(e,t,n){if(t.length!==n.length){eN("copyWithRename() expects paths of the same length");return}for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){eN("copyWithRename() expects paths to be the same except for the deepest key");return}return pq(e,t,n,0)},pK=function(e,t,n,r){if(n>=t.length)return r;var a=t[n],o=t6(e)?e.slice():ty({},e);return o[a]=pK(e[a],t,n+1,r),o},pG=function(e,t,n){return pK(e,t,0,n)},pX=function(e,t){for(// For now, the "id" of stateful hooks is just the stateful hook index.
// This may change in the future with e.g. nested hooks.
var n=e.memoizedState;null!==n&&t>0;)n=n.next,t--;return n};pz=function(e,t,n,r){var a=pX(e,t);if(null!==a){var o=pG(a.memoizedState,n,r);a.memoizedState=o,a.baseState=o,// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=ty({},e.memoizedProps);var i=uk(e,1);null!==i&&fN(i,e,1,-1)}},pj=function(e,t,n){var r=pX(e,t);if(null!==r){var a=pY(r.memoizedState,n);r.memoizedState=a,r.baseState=a,// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=ty({},e.memoizedProps);var o=uk(e,1);null!==o&&fN(o,e,1,-1)}},pU=function(e,t,n,r){var a=pX(e,t);if(null!==a){var o=pQ(a.memoizedState,n,r);a.memoizedState=o,a.baseState=o,// because there is no update we can add for useReducer hooks that won't trigger an error.
// (There's no appropriate action type for DevTools overrides.)
// As a result though, React will see the scheduled update as a noop and bailout.
// Shallow cloning props works as a workaround for now to bypass the bailout check.
e.memoizedProps=ty({},e.memoizedProps);var i=uk(e,1);null!==i&&fN(i,e,1,-1)}},pA=function(e,t,n){e.pendingProps=pG(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=uk(e,1);null!==r&&fN(r,e,1,-1)},pF=function(e,t){e.pendingProps=pY(e.memoizedProps,t),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var n=uk(e,1);null!==n&&fN(n,e,1,-1)},pW=function(e,t,n){e.pendingProps=pQ(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps);var r=uk(e,1);null!==r&&fN(r,e,1,-1)},pB=function(e){var t=uk(e,1);null!==t&&fN(t,e,1,-1)},pV=function(e){pI=e},pH=function(e){pM=e};/* global reportError */var pJ="function"==typeof reportError?reportError:function(e){// In older browsers and test environments, fallback to console.error.
// eslint-disable-next-line react-internal/no-production-logging
console.error(e)};function pZ(e){this._internalRoot=e}function p0(e){this._internalRoot=e}function p1(e){return!!(e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType))}// TODO: Remove this function which also includes comment nodes.
// We only use it in places that are currently more relaxed.
function p2(e){return!!(e&&(1===e.nodeType||9===e.nodeType||11===e.nodeType||8===e.nodeType&&" react-mount-point-unstable "===e.nodeValue))}function p4(e){1===e.nodeType&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&eI("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."),e[iG]&&(e._reactRootContainer?eI("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."):eI("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."))}p0.prototype.render=pZ.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error("Cannot update an unmounted root.");"function"==typeof arguments[1]?eI("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."):p1(arguments[1])?eI("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."):void 0!==arguments[1]&&eI("You passed a second argument to root.render(...) but it only accepts one argument.");var n=t.containerInfo;if(8!==n.nodeType){var r=pN(t.current);r&&r.parentNode!==n&&eI("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.")}pP(e,t,null,null)},p0.prototype.unmount=pZ.prototype.unmount=function(){"function"==typeof arguments[0]&&eI("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;(6&d8)!=0&&eI("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."),fW(function(){pP(null,e,null,null)}),t[iG]=null}},p0.prototype.unstable_scheduleHydration=function(e){e&&function(e){for(// TODO: This will read the priority if it's dispatched by the React
// event system but not native events. Should read window.event.type, like
// we do for updates (getCurrentEventPriority).
var t,n=O(),r={blockedOn:null,target:e,priority:n},a=0;// Stop once we hit the first target with lower priority than
a<av.length&&(t=av[a].priority,0!==n&&n<t);a++);av.splice(a,0,r),0===a&&aw(r)}(e)};var p3=eO.ReactCurrentOwner;function p6(e){return e?9===e.nodeType?e.documentElement:e.firstChild:null}function p8(){// legacy API.
}function p5(e,t,n,r,a){e_(n),null!==(o=void 0===a?null:a)&&"function"!=typeof o&&eI("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.","render",o);var o,i,l=n._reactRootContainer;if(l){if(i=l,"function"==typeof a){var u=a;a=function(){var e=pD(i);u.call(e)}}// Update
pP(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"==typeof r){var o,i,l=r;r=function(){var e=pD(u);l.call(e)}}var u=p_(t,r,e,0,null,!1,!1,"",p8);return e._reactRootContainer=u,i=u.current,e[iG]=i,o4(8===e.nodeType?e.parentNode:e),fW(),u}for(;s=e.lastChild;)e.removeChild(s);if("function"==typeof r){var s,c=r;r=function(){var e=pD(d);c.call(e)}}var d=pE(e,0,!1,null,null,!1,!1,"",p8);return e._reactRootContainer=d,o=d.current,e[iG]=o,o4(8===e.nodeType?e.parentNode:e),fW(function(){pP(t,d,n,r)}),d}(n,t,e,a,r);return pD(i)}e_=function(e){if(e._reactRootContainer&&8!==e.nodeType){var t=pN(e._reactRootContainer.current);t&&t.parentNode!==e&&eI("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.")}var n=!!e._reactRootContainer,r=p6(e);r&&i1(r)&&!n&&eI("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."),1===e.nodeType&&e.tagName&&"BODY"===e.tagName.toUpperCase()&&eI("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.")},_=function(e){switch(e.tag){case 3:var t=e.stateNode;if(au(t)){// Flush the first scheduled "update".
var n=r1(t.pendingLanes);0!==n&&(ar(t,1|n),fI(t,rC()),(6&d8)==0&&(fp(),lS()))}break;case 13:fW(function(){var t=uk(e,1);null!==t&&fN(t,e,1,fO())}),pL(e,1)}},P=function(e){if(13===e.tag){var t=uk(e,134217728);null!==t&&fN(t,e,134217728,fO()),pL(e,134217728)}},D=function(e){if(13===e.tag){var t=fL(e),n=uk(e,t);null!==n&&fN(n,e,t,fO()),pL(e,t)}},O=function(){return ai},L=function(e,t){var n=ai;try{return ai=e,t()}finally{ai=n}},("function"!=typeof Map||// $FlowIssue Flow incorrectly thinks Map has no prototype
null==Map.prototype||"function"!=typeof Map.prototype.forEach||"function"!=typeof Set||// $FlowIssue Flow incorrectly thinks Set has no prototype
null==Set.prototype||"function"!=typeof Set.prototype.clear||"function"!=typeof Set.prototype.forEach)&&eI("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),nJ=function(e,t,n){var r;switch(t){case"input":tJ(e,n),function(e,t){var n=t.name;if("radio"===t.type&&null!=n){for(var r=e;r.parentNode;)r=r.parentNode;// If `rootNode.form` was non-null, then we could try `form.elements`,
e$(n,"name");for(var a=r.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),o=0;o<a.length;o++){var i=a[o];if(i!==e&&i.form===e.form){// This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var l=i4(i);if(!l)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");// We need update the tracked value on the named cousin since the value
// was changed but the input saw no event or value set
tB(i),// was previously checked to update will cause it to be come re-checked
// as appropriate.
tJ(i,l)}}}}// In Chrome, assigning defaultValue to certain input types triggers input validation.
(e,n);return;case"textarea":// DOM component is still mounted; update
na(e,n);return;case"select":null!=(r=n.value)&&t7(e,!!n.multiple,r,!1);return}},n3=fF,n6=fW;var p7={usingClientEntryPoint:!1,// Keep in sync with ReactTestUtils.js.
// This is an array for better minification.
Events:[i1,i2,i4,n2,n4,fF]};if(n=(t={findFiberByHostInstance:i0,bundleType:1,version:pR,rendererPackageName:"react-dom"}).findFiberByHostInstance,v=eO.ReactCurrentDispatcher,!function(e){if("undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)// of DevTools integration and associated warnings and logs.
// https://github.com/facebook/react/issues/3877
return!0;if(!t.supportsFiber)return eI("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"),!0;try{// This gives DevTools a way to feature detect that isn't tied to version number
// (since profiling and timeline are controlled by different feature flags).
e=ty({},e,{getLaneLabelMap:rF,injectProfilingHooks:rA}),rN=t.inject(e),rI=t}catch(e){eI("React instrumentation encountered an error: %s.",e)}return!!t.checkDCE}({bundleType:t.bundleType,version:t.version,rendererPackageName:t.rendererPackageName,rendererConfig:t.rendererConfig,overrideHookState:pz,overrideHookStateDeletePath:pj,overrideHookStateRenamePath:pU,overrideProps:pA,overridePropsDeletePath:pF,overridePropsRenamePath:pW,setErrorHandler:pV,setSuspenseHandler:pH,scheduleUpdate:pB,currentDispatcherRef:v,findHostInstanceByFiber:function(e){var t=rb(e);return null===t?null:t.stateNode},findFiberByHostInstance:n||function(e){return null},// React Refresh
findHostInstancesForRefresh:function(e,t){var n=new Set,r=new Set(t.map(function(e){return e.current}));return function e(t,n,r){var a=t.child,o=t.sibling,i=t.tag,l=t.type,u=null;switch(i){case 0:case 15:case 1:u=l;break;case 11:u=l.render}var s=!1;null!==u&&n.has(u)&&(s=!0),s?// There's no need to search deeper because for the purpose of giving
// visual feedback, "flashing" outermost parent rectangles is sufficient.
function(e,t){if(!function(e,t){for(var n=e,r=!1;;){if(5===n.tag)// We got a match.
r=!0,t.add(n.stateNode);else if(null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)return r;for(;null===n.sibling;){if(null===n.return||n.return===e)return r;n=n.return}n.sibling.return=n.return,n=n.sibling}return!1}(e,t))for(// If we didn't find any host children, fallback to closest host parent.
var n=e;;){switch(n.tag){case 5:t.add(n.stateNode);return;case 4:case 3:t.add(n.stateNode.containerInfo);return}if(null===n.return)throw Error("Expected to reach root first.");n=n.return}}(t,r):null!==a&&e(a,n,r),null!==o&&e(o,n,r)}(e.current,r,n),n},scheduleRefresh:function(e,t){if(null!==pl){var n=t.staleFamilies,r=t.updatedFamilies;fJ(),fW(function(){(function e(t,n,r){var a=t.alternate,o=t.child,i=t.sibling,l=t.tag,u=t.type,s=null;switch(l){case 0:case 15:case 1:s=u;break;case 11:s=u.render}if(null===pl)throw Error("Expected resolveFamily to be set during hot reload.");var c=!1,d=!1;if(null!==s){var f=pl(s);void 0!==f&&(r.has(f)?d=!0:n.has(f)&&(1===l?d=!0:c=!0))}if(null!==pu&&(pu.has(t)||null!==a&&pu.has(a))&&(d=!0),d&&(t._debugNeedsRemount=!0),d||c){var p=uk(t,1);null!==p&&fN(p,t,1,-1)}null===o||d||e(o,n,r),null!==i&&e(i,n,r)})(e.current,r,n)})}},scheduleRoot:function(e,t){e.context===lr&&(fJ(),fW(function(){pP(t,e,null,null)}))},setRefreshHandler:function(e){pl=e},// Enables DevTools to append owner stacks to error messages in DEV mode.
getCurrentFiber:function(){return tD},// Enables DevTools to detect reconciler version rather than renderer version
// which may not match for third party renderers.
reconcilerVersion:pR})&&eW&&window.top===window.self&&(navigator.userAgent.indexOf("Chrome")>-1&&-1===navigator.userAgent.indexOf("Edge")||navigator.userAgent.indexOf("Firefox")>-1)){var p9=window.location.protocol;// Don't warn in exotic cases like chrome-extension://.
/^(https?|file):$/.test(p9)&&console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools"+("file:"===p9?"\nYou might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq":""),"font-weight:bold")}r=p7,a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!p1(t))throw Error("Target container is not a DOM element.");// TODO: pass ReactDOM portal implementation as third argument
// $FlowFixMe The Flow type is opaque but there's no way to actually create it.
return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return eH(r)&&eI("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",eV(r)),{// This tag allow us to uniquely identify this as a React Portal
$$typeof:tr,key:null==r?null:""+r,children:e,containerInfo:t,implementation:null}}(e,t,null,n)},i=function(e,t){return p7.usingClientEntryPoint||eI('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),function(e,t){if(!p1(e))throw Error("createRoot(...): Target container is not a DOM element.");p4(e);var n,r=!1,a="",o=pJ;null!=t&&(t.hydrate?eN("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."):"object"==typeof t&&null!==t&&t.$$typeof===tn&&eI("You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:\n\n  let root = createRoot(domContainer);\n  root.render(<App />);"),!0===t.unstable_strictMode&&(r=!0),void 0!==t.identifierPrefix&&(a=t.identifierPrefix),void 0!==t.onRecoverableError&&(o=t.onRecoverableError),void 0!==t.transitionCallbacks&&t.transitionCallbacks);var i=pE(e,1,!1,null,null,r,!1,a,o);return n=i.current,e[iG]=n,o4(8===e.nodeType?e.parentNode:e),new pZ(i)}(e,t)},l=function(e){var t=p3.current;return(null!==t&&null!==t.stateNode&&(t.stateNode._warnedAboutRefsInRender||eI("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",tR(t.type)||"A component"),t.stateNode._warnedAboutRefsInRender=!0),null==e)?null:1===e.nodeType?e:function(e,t){var n=rf(e);if(void 0===n){if("function"==typeof e.render)throw Error("Unable to find node on an unmounted component.");throw Error("Argument appears to not be a ReactComponent. Keys: "+Object.keys(e).join(","))}var r=rb(n);if(null===r)return null;if(8&r.mode){var a=t_(n)||"Component";if(!eT[a]){eT[a]=!0;var o=tD;try{tM(r),8&n.mode?eI("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,a):eI("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node",t,t,a)}finally{// Ideally this should reset to previous but this shouldn't be called in
// render and there's another warning for that anyway.
o?tM(o):tI()}}}return r.stateNode}(e,"findDOMNode")},u=// Warning, this opts-out of checking the function body.
// eslint-disable-next-line no-redeclare
function(e){return(6&d8)!=0&&eI("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."),fW(e)},s=function(e,t,n){if(eI("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!p2(t))throw Error("Target container is not a DOM element.");return t[iG]&&void 0===t._reactRootContainer&&eI("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?"),p5(null,e,t,!0,n)},c=function(e,t,n){return p7.usingClientEntryPoint||eI('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'),function(e,t,n){if(!p1(e))throw Error("hydrateRoot(...): Target container is not a DOM element.");p4(e),void 0===t&&eI("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");// the hydration callbacks.
var r,a=null!=n?n:null,o=null!=n&&n.hydratedSources||null,i=!1,l="",u=pJ;// TODO: Delete this option
null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(l=n.identifierPrefix),void 0!==n.onRecoverableError&&(u=n.onRecoverableError));var s=p_(t,null,e,1,a,i,!1,l,u);if(r=s.current,e[iG]=r,o4(e),o)for(var c=0;c<o.length;c++)!// This ensures that the version used for server rendering matches the one
// that is eventually read during hydration.
// If they don't match there's a potential tear and a full deopt render is required.
function(e,t){var n=(0,t._getVersion)(t._source);// TODO Clear this data once all pending hydration work is finished.
// Retaining it forever may interfere with GC.
null==e.mutableSourceEagerHydrationData?e.mutableSourceEagerHydrationData=[t,n]:e.mutableSourceEagerHydrationData.push(t,n)}(s,o[c]);return new p0(s)}(e,t,n)}// Overload the definition to the two valid signatures.
,d=function(e,t,n){if(eI("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!p2(t))throw Error("Target container is not a DOM element.");return t[iG]&&void 0===t._reactRootContainer&&eI("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?"),p5(null,e,t,!1,n)},f=function(e){if(!p2(e))throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");if(e[iG]&&void 0===e._reactRootContainer&&eI("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?"),e._reactRootContainer){var t=p6(e);// get `true` twice. That's probably fine?
return t&&!i1(t)&&eI("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React."),fW(function(){p5(null,null,e,!1,function(){// $FlowFixMe This should probably use `delete container._reactRootContainer`
e._reactRootContainer=null,e[iG]=null})}),!0}var n=p6(e),r=!!(n&&i1(n)),a=1===e.nodeType&&p2(e.parentNode)&&!!e.parentNode._reactRootContainer;return r&&eI("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s",a?"You may have accidentally passed in a React root node instead of its container.":"Instead, have the parent component update its state and rerender in order to remove this component."),!1},p=fF,h=function(e,t,n,r){return function(e,t,n,r){if(eI("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"),!p2(n))throw Error("Target container is not a DOM element.");if(null==e||!(void 0!==e._reactInternals))throw Error("parentComponent must be a valid React Component");return p5(e,t,n,!1,r)}(e,t,n,r)},m=pR,"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()}),i("fO90s",function(e,t){e.exports=o("7jGsX")}),i("7jGsX",function(t,n){var r,a,o,i,l,u,s,c,d,f,p,h,m,v,y,g,b,w,k;e(t.exports,"unstable_now",()=>r,e=>r=e),e(t.exports,"unstable_IdlePriority",()=>a,e=>a=e),e(t.exports,"unstable_ImmediatePriority",()=>o,e=>o=e),e(t.exports,"unstable_LowPriority",()=>i,e=>i=e),e(t.exports,"unstable_NormalPriority",()=>l,e=>l=e),e(t.exports,"unstable_Profiling",()=>u,e=>u=e),e(t.exports,"unstable_UserBlockingPriority",()=>s,e=>s=e),e(t.exports,"unstable_cancelCallback",()=>c,e=>c=e),e(t.exports,"unstable_continueExecution",()=>d,e=>d=e),e(t.exports,"unstable_forceFrameRate",()=>f,e=>f=e),e(t.exports,"unstable_getCurrentPriorityLevel",()=>p,e=>p=e),e(t.exports,"unstable_getFirstCallbackNode",()=>h,e=>h=e),e(t.exports,"unstable_next",()=>m,e=>m=e),e(t.exports,"unstable_pauseExecution",()=>v,e=>v=e),e(t.exports,"unstable_requestPaint",()=>y,e=>y=e),e(t.exports,"unstable_runWithPriority",()=>g,e=>g=e),e(t.exports,"unstable_scheduleCallback",()=>b,e=>b=e),e(t.exports,"unstable_shouldYield",()=>w,e=>w=e),e(t.exports,"unstable_wrapCallback",()=>k,e=>k=e),function(){function e(e,t){var n=e.length;e.push(t),function(e,t,n){for(var r=n;r>0;){var a=r-1>>>1,o=e[a];if(!(S(o,t)>0))return;// The parent is larger. Swap positions.
e[a]=t,e[r]=o,r=a}}(e,t,n)}function t(e){return 0===e.length?null:e[0]}function n(e){if(0===e.length)return null;var t=e[0],n=e.pop();return n!==t&&(e[0]=n,function(e,t,n){for(var r=0,a=e.length,o=a>>>1;r<o;){var i=(r+1)*2-1,l=e[i],u=i+1,s=e[u];if(0>S(l,t))u<a&&0>S(s,l)?(e[r]=s,e[u]=t,r=u):(e[r]=l,e[i]=t,r=i);else{if(!(u<a&&0>S(s,t)))return;e[r]=s,e[u]=t,r=u}}}(e,n,0)),t}function S(e,t){// Compare sort index first, then task id.
var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),"object"==typeof performance&&"function"==typeof performance.now){var x,C=performance;r=function(){return C.now()}}else{var E=Date,R=E.now();r=function(){return E.now()-R}}// Max 31 bit integer. The max integer size in V8 for 32-bit systems.
var T=[],_=[],P=1,D=null,O=3,L=!1,N=!1,I=!1,M="function"==typeof setTimeout?setTimeout:null,z="function"==typeof clearTimeout?clearTimeout:null,j="undefined"!=typeof setImmediate?setImmediate:null;function U(r){for(// Check for tasks that are no longer delayed and add them to the queue.
var a=t(_);null!==a;){if(null===a.callback)n(_);else{if(!(a.startTime<=r))return;// Timer fired. Transfer to the task queue.
n(_),a.sortIndex=a.expirationTime,e(T,a)}a=t(_)}}function A(e){if(I=!1,U(e),!N){if(null!==t(T))N=!0,G(F);else{var n=t(_);null!==n&&X(A,n.startTime-e)}}}function F(e,a){N=!1,I&&(// We scheduled a timeout but it's no longer needed. Cancel it.
I=!1,z(V),V=-1),L=!0;var o=O;try{return function(e,a){var o=a;for(U(o),D=t(T);null!==D&&!(D.expirationTime>o&&(!e||Y()));){var i=D.callback;if("function"==typeof i){D.callback=null,O=D.priorityLevel;var l=i(D.expirationTime<=o);o=r(),"function"==typeof l?D.callback=l:D===t(T)&&n(T),U(o)}else n(T);D=t(T)}// Return whether there's additional work
if(null!==D)return!0;var u=t(_);return null!==u&&X(A,u.startTime-o),!1}(e,a)}finally{D=null,O=o,L=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var W=!1,B=null,V=-1,H=5,$=-1;function Y(){return!(r()-$<H)}var q=function(){if(null!==B){var e=r();// Keep track of the start time so we can measure how long the main thread
// has been blocked.
$=e;// error can be observed.
//
// Intentionally not using a try-catch, since that makes some debugging
// techniques harder. Instead, if `scheduledHostCallback` errors, then
// `hasMoreWork` will remain true, and we'll continue the work loop.
var t=!0;try{t=B(!0,e)}finally{t?// of the preceding one.
x():(W=!1,B=null)}}else W=!1;// Yielding to the browser will give it a chance to paint, so we can
};if("function"==typeof j)// There's a few reasons for why we prefer setImmediate.
//
// Unlike MessageChannel, it doesn't prevent a Node.js process from exiting.
// (Even though this is a DOM fork of the Scheduler, you could get here
// with a mix of Node.js 15+, which has a MessageChannel, and jsdom.)
// https://github.com/facebook/react/issues/20756
//
// But also, it runs earlier which is the semantic we want.
// If other browsers ever implement it, it's better to use it.
// Although both of these would be inferior to native scheduling.
x=function(){j(q)};else if("undefined"!=typeof MessageChannel){// DOM and Worker environments.
// We prefer MessageChannel because of the 4ms setTimeout clamping.
var Q=new MessageChannel,K=Q.port2;Q.port1.onmessage=q,x=function(){K.postMessage(null)}}else x=function(){M(q,0)};function G(e){B=e,W||(W=!0,x())}function X(e,t){V=M(function(){e(r())},t)}a=5,o=1,i=4,l=3,u=null,s=2,c=function(e){// remove from the queue because you can't remove arbitrary nodes from an
// array based heap, only the first one.)
e.callback=null},d=function(){N||L||(N=!0,G(F))},f=function(e){if(e<0||e>125){// Using console['error'] to evade Babel and ESLint
console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");return}H=e>0?Math.floor(1e3/e):5},p=function(){return O},h=function(){return t(T)},m=function(e){switch(O){case 1:case 2:case 3:// Shift down to normal priority
t=3;break;default:// Anything lower than normal priority should remain at the current level.
t=O}var t,n=O;O=t;try{return e()}finally{O=n}},v=function(){},y=function(){},g=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=O;O=e;try{return t()}finally{O=n}},b=function(n,a,o){var i,l,u=r();if("object"==typeof o&&null!==o){var s=o.delay;i="number"==typeof s&&s>0?u+s:u}else i=u;switch(n){case 1:l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}var c=i+l,d={id:P++,callback:a,priorityLevel:n,startTime:i,expirationTime:c,sortIndex:-1};return i>u?(// This is a delayed task.
d.sortIndex=i,e(_,d),null===t(T)&&d===t(_)&&(I?(z(V),V=-1):I=!0,// Schedule a timeout.
X(A,i-u))):(d.sortIndex=c,e(T,d),N||L||(N=!0,G(F))),d},w=Y,k=function(e){var t=O;return function(){// This is a fork of runWithPriority, inlined for performance.
var n=O;O=t;try{return e.apply(this,arguments)}finally{O=n}}},"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())}()});var l={};function u(e){try{return new URL(e),!0}catch{return!1}}l=o("7B2bR"),Object.freeze({Joplin:"joplin",Universal:"universal"});class s{constructor(){}encode(e){let t=new TextEncoder().encode(e);return btoa(String.fromCodePoint(...t)).replace(/\+/g,"-").replace(/\//g,"_")}decode(e){let t=atob(e.replace(/_/g,"/")),n=Uint8Array.from(t,e=>e.codePointAt(0));return new TextDecoder().decode(n)}}const c=/^\/u\/(?<encoded>[A-Za-z0-9_\-=]+)/;class d{constructor(){this.endecoder=new s}encode(e){return"/u/"+this.endecoder.encode(e)}decode(e){let t=e.match(c);if(null===t)return null;let n=t.groups.encoded.replace(/-/g,"+").replace(/_/g,"/"),r=this.endecoder.decode(n).trim();return r}isEncodedPath(e){let t=e.match(c);// check is base64
return null!=t&&null!=t.groups.encoded}isValidateLink(e){//@TODO - test case
// mailto: xxx
// javascript: ?
// Send to trello
try{return new URL(e),!0}catch(e){return!1}}}o("acw62");var f=o("acw62"),p={},h={};h=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach(function(t){e.addRange(t)}),t&&t.focus()}};var m={"text/plain":"Text","text/html":"Url",default:"Text"};p=function(e,t){var n,r,a,o,i,l,u,s,c=!1;t||(t={}),a=t.debug||!1;try{if(i=h(),l=document.createRange(),u=document.getSelection(),(s=document.createElement("span")).textContent=e,// avoid screen readers from reading out loud the text
s.ariaHidden="true",// reset user styles for span element
s.style.all="unset",// prevents scrolling to the end of the page
s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",// used to preserve spaces and line breaks
s.style.whiteSpace="pre",// do not inherit user-select (it may be `none`)
s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",function(n){if(n.stopPropagation(),t.format){if(n.preventDefault(),void 0===n.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=m[t.format]||m.default;window.clipboardData.setData(r,e)}else n.clipboardData.clearData(),n.clipboardData.setData(t.format,e)}t.onCopy&&(n.preventDefault(),t.onCopy(n.clipboardData))}),document.body.appendChild(s),l.selectNodeContents(s),u.addRange(l),!document.execCommand("copy"))throw Error("copy command was unsuccessful");c=!0}catch(i){a&&console.error("unable to copy using execCommand: ",i),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),c=!0}catch(i){a&&console.error("unable to copy using clipboardData: ",i),a&&console.error("falling back to prompt"),n="message"in t?t.message:"Copy to clipboard: #{key}, Enter",r=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",o=n.replace(/#{\s*key\s*}/g,r),window.prompt(o,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),s&&document.body.removeChild(s),i()}return c};const v={host:"https://benlau.github.io",uriPrefix:"/l",helpUrl:"https://github.com/benlau/l"};var y=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.reduce(function(e,n,r){var a=t[r];return"string"==typeof a?""+e+n+a:""+e+n},"").trim().replace(/\s{2,}/g," ")};function g(e){let{children:t}=e;return/*#__PURE__*/(0,l.jsx)("div",{className:"flex flex-row w-full p-8 justify-center",children:/*#__PURE__*/(0,l.jsx)("div",{className:"flex flex-col w-[600px] gap-2 rounded border border-[#858F99] p-4",children:t})})}o("acw62"),o("acw62");var b={};function w(e){let{className:n,children:r}=e,a=/*@__PURE__*/t(b)("text-lg font-bold text-[#1F2937]",n);return/*#__PURE__*/(0,l.jsx)("div",{className:a,children:r})}function k(e){let{children:n,onClick:r}=e,a=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),r?.(e)},[r]);return/*#__PURE__*/(0,l.jsx)("button",{onClick:a,className:"hover:opacity-70 active:opacity-50 text-[#0969DA]",children:n})}!/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*//* global define */function(){var e={}.hasOwnProperty;function t(){for(var n=[],r=0;r<arguments.length;r++){var a=arguments[r];if(a){var o=typeof a;if("string"===o||"number"===o)n.push(a);else if(Array.isArray(a)){if(a.length){var i=t.apply(null,a);i&&n.push(i)}}else if("object"===o){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){n.push(a.toString());continue}for(var l in a)e.call(a,l)&&a[l]&&n.push(l)}}}return n.join(" ")}b?(t.default=t,b=t):"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("classnames",[],function(){return t}):window.classNames=t}();var f=(o("acw62"),o("acw62"));function S(){let e=/*@__PURE__*/t(f).useCallback(()=>{window.open(v.helpUrl,"_blank")},[]);return/*#__PURE__*/(0,l.jsx)(k,{onClick:e,children:"What is it?"})}const x=new d,C={InvalidURL:"InvalidURL",JavaScriptNotAllowed:"JavaScriptNotAllowed",FileURL:"FileURL"},E={[C.InvalidURL]:"Your app link is not valid",[C.JavaScriptNotAllowed]:"Embed JavaScript in the link is forbidden"};function R(e){let{children:t,onClick:n,isDisabled:r}=e,a=y`
        border-l-[#D0D6DE] 
        border-l-[1px] 
        p-1 
        min-w-[70px] 
        flex 
        justify-center 
        cursor-pointer 
        hover:bg-[#E4E6EB] 
        active:opacity-50 
        select-none
        disabled:opacity-30
        disabled:hover:bg-transparent
    `;return/*#__PURE__*/(0,l.jsx)("button",{onClick:n,className:a,disabled:r,children:t})}function T(e){let{inputLink:n,convertedLink:r,info:a,inputLinkRef:o,onInputLinkChange:i,onCopyClick:u,onTestClick:s,isCopiedVisible:c,copyRedirectLink:d,convertToVSCode:p}=e,h=y`
        border border-[#D0D6DE] bg-[#f6f8fa] rounded p-1
        w-full resize-none
    `,m=/*@__PURE__*/t(f).useCallback(e=>{"Enter"===e.key&&(e.preventDefault(),e.stopPropagation(),d())},[d]),v=y`
        text-gray-500
        h-11
        p-2
        ${!a&&"invisible"}
    `;return/*#__PURE__*/(0,l.jsxs)(g,{children:[/*#__PURE__*/(0,l.jsxs)("div",{children:[/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mb-2",children:[/*#__PURE__*/(0,l.jsx)(w,{children:"App Link"}),/*#__PURE__*/(0,l.jsx)(S,{})]}),/*#__PURE__*/(0,l.jsx)("textarea",{ref:o,className:h,rows:"5",onChange:i,value:n,onKeyDown:m,placeholder:"Put your app link here"}),/*#__PURE__*/(0,l.jsx)("div",{className:v,children:a===C.FileURL?/*#__PURE__*/(0,l.jsxs)("div",{children:["File link is not working. Try vscode:// ?"," ",/*#__PURE__*/(0,l.jsx)(k,{onClick:p,children:"Yes"})]}):void 0!==a?/*#__PURE__*/(0,l.jsx)("div",{children:E[a]}):null})]}),/*#__PURE__*/(0,l.jsx)(w,{children:"Converted Web Link"}),/*#__PURE__*/(0,l.jsxs)("div",{className:"border bg-[#f6f8fa] border-[#D0D6DE] rounded flex flex-row justify-between items-center",children:[/*#__PURE__*/(0,l.jsx)("div",{className:"p-1 truncate",children:r}),/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-row",children:[/*#__PURE__*/(0,l.jsx)(R,{onClick:s,isDisabled:""===r.trim(),children:"Test"}),/*#__PURE__*/(0,l.jsx)(R,{onClick:u,isDisabled:""===r.trim(),children:c?"Copied":"Copy"})]})]})]})}var f=o("acw62");const _=["javascript://"];function P(e){let{heading:t,redirectLink:n,onCloseClick:r}=e;return/*#__PURE__*/(0,l.jsx)(g,{children:/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-col gap-4 mt-2",children:[/*#__PURE__*/(0,l.jsx)(w,{children:t}),/*#__PURE__*/(0,l.jsx)("div",{className:"underline bg-[#f6f8fa] p-2 rounded border border-[#D0D6DE] break-all line-through",children:n}),/*#__PURE__*/(0,l.jsx)("div",{className:"flex flex-row justify-between mt-8",children:/*#__PURE__*/(0,l.jsx)("button",{className:"border px-4 py-1 rounded bg-[#f6f8fa] hover:opacity-70 active:opacity-50",onClick:r,children:"Close"})})]})})}function D(e){let{redirectLink:t,contentType:n,onProceedClick:r,isInWhitelist:a,onAlwaysShowClick:o,onCloseClick:i,isDisallowed:u,isLinkValid:s}=e;return s?u?/*#__PURE__*/(0,l.jsx)(P,{heading:`${n} is forbidden`,redirectLink:t,onCloseClick:i}):/*#__PURE__*/(0,l.jsxs)(g,{children:[/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flew-row justify-between",children:[/*#__PURE__*/(0,l.jsx)(w,{children:"You are being redirected to"}),/*#__PURE__*/(0,l.jsx)(S,{})]}),/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-col gap-4 mt-2",children:[/*#__PURE__*/(0,l.jsx)("div",{className:"underline bg-[#f6f8fa] p-2 rounded border border-[#D0D6DE] break-all",children:/*#__PURE__*/(0,l.jsx)("a",{href:t,children:t})}),/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-row gap-2",children:[a?/*#__PURE__*/(0,l.jsx)("input",{type:"checkbox",defaultChecked:!0,readOnly:!0,onClick:o},1):/*#__PURE__*/(0,l.jsx)("input",{type:"checkbox",readOnly:!0,onClick:o},2),/*#__PURE__*/(0,l.jsxs)("div",{className:"select-none",onClick:o,children:["Auto open ",n]})]})]}),/*#__PURE__*/(0,l.jsxs)("div",{className:"flex flex-row justify-between mt-8",children:[/*#__PURE__*/(0,l.jsx)("button",{className:"border px-4 py-1 rounded bg-[#f6f8fa] hover:opacity-70 active:opacity-50",onClick:i,children:"Close"}),/*#__PURE__*/(0,l.jsx)(k,{className:"hover:opacity-70 active:opacity-50 text-[#0969DA]",onClick:r,children:"Open"})]})]}):/*#__PURE__*/(0,l.jsx)(P,{heading:"Invalid link detected.",redirectLink:t,onCloseClick:i})}var O={},L=(O=o("3y30c")).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;const N=new class{resolve(e,t){let n=t.pathname.replace(RegExp(`^${e}`),""),r=[new d],a=r.find(e=>e.isEncodedPath(n));if(void 0!==a)//@todo - validate the link
return a.decode(n)}},I=v.uriPrefix,M=new URL(window.location.href),z=N.resolve(I,M),j=document.getElementById("root"),U=function(e,t){L.usingClientEntryPoint=!0;try{return O.createRoot(e,void 0)}finally{L.usingClientEntryPoint=!1}}(j);void 0!==z?U.render(/*#__PURE__*/(0,l.jsx)(function(e){let n=function(e){let{redirectLink:n}=e,[r,a]=function(e,n){let r=/*@__PURE__*/t(f).useCallback(()=>{let t=localStorage.getItem(e);if(null==t)return n;try{return JSON.parse(t)}catch{return n}},[e,n]),[a,o]=/*@__PURE__*/t(f).useState(()=>r()),i=/*@__PURE__*/t(f).useCallback(t=>{let n=t(r());localStorage.setItem(e,JSON.stringify(n)),o(n)},[e,r]);return[a,i]}("ianylink_allowlist",{}),[o,i]=/*@__PURE__*/t(f).useState(!1),[l,s]=/*@__PURE__*/t(f).useState(!1),c=u(n),d=/*@__PURE__*/t(f).useMemo(()=>{try{let e=new URL(n);if("http:"===e.protocol||"https:"===e.protocol)return`${e.protocol}//${e.hostname}`;return e.protocol+"//"}catch{return""}},[n]);/*@__PURE__*/t(f).useEffect(()=>{if(_.includes(d)){i(!1),s(!0);return}let e=!0===r[d];i(e),e&&window.open(n,"_self");// eslint-disable-next-line react-hooks/exhaustive-deps
},[]);let p=/*@__PURE__*/t(f).useCallback(()=>{window.open(n,"_self")},[n]),h=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),i(e=>(a(t=>(t[d]=!e,t)),!e))},[d,a]),m=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),window.close()},[]);return /*@__PURE__*/t(f).useMemo(()=>({redirectLink:n,onProceedClick:p,contentType:d,isInWhitelist:o,onAlwaysShowClick:h,onCloseClick:m,isDisallowed:l,isLinkValid:c}),[n,d,o,p,h,m,l,c])}(e);return/*#__PURE__*/(0,l.jsx)(D,{...n})},{redirectLink:z})):U.render(/*#__PURE__*/(0,l.jsx)(function(){let e=function(){let[e,n]=/*@__PURE__*/t(f).useState(""),[r,a]=/*@__PURE__*/t(f).useState(""),[o,i]=/*@__PURE__*/t(f).useState(void 0),l=/*@__PURE__*/t(f).useRef(null),s=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),n(e.target.value.replace(/(\r\n|\r|\n)/g,""))},[]),[c,d]=/*@__PURE__*/t(f).useState(!1),h=/*@__PURE__*/t(f).useCallback(()=>{let t=e.trim();if(""===t){a(""),i();return}if(!1===u(t)){e.length>10?i(C.InvalidURL):i(),a("");return}if(t.startsWith("javascript:")){i(C.JavaScriptNotAllowed),a("");return}try{a([v.host,v.uriPrefix,x.encode(t)].join("")),i()}catch{a("");return}try{let e=new URL(t);"file:"===e.protocol&&i(C.FileURL)}catch{// ignore
}},[e]);/*@__PURE__*/t(f).useEffect(()=>{h()},[h]);let m=/*@__PURE__*/t(f).useCallback(()=>{""!==r.trim()&&(/*@__PURE__*/t(p)(r),d(!0),setTimeout(()=>{d(!1)},1e3))},[r]),y=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),m()},[m]),g=/*@__PURE__*/t(f).useCallback(e=>{e.preventDefault(),e.stopPropagation(),""!==r.trim()&&window.open(r,"_blank")},[r]),b=/*@__PURE__*/t(f).useCallback(()=>{try{var t,r,a;let o=new URL(e);n((t=o.pathname,r=o.hash,a=o.search,`vscode://${["file",t,r,a].filter(Boolean).join("")}`))}catch{// ignore
}},[e]);return /*@__PURE__*/t(f).useMemo(()=>({inputLink:e,convertedLink:r,info:o,inputLinkRef:l,onInputLinkChange:s,onCopyClick:y,onTestClick:g,isCopiedVisible:c,copyRedirectLink:m,convertToVSCode:b}),[e,r,o,l,s,y,g,c,m,b])}();return/*#__PURE__*/(0,l.jsx)(T,{...e})},{}));//# sourceMappingURL=index.78e10b18.js.map

//# sourceMappingURL=index.78e10b18.js.map
