// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27470__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27470 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27471__i = 0, G__27471__a = new Array(arguments.length -  0);
while (G__27471__i < G__27471__a.length) {G__27471__a[G__27471__i] = arguments[G__27471__i + 0]; ++G__27471__i;}
  args = new cljs.core.IndexedSeq(G__27471__a,0);
} 
return G__27470__delegate.call(this,args);};
G__27470.cljs$lang$maxFixedArity = 0;
G__27470.cljs$lang$applyTo = (function (arglist__27472){
var args = cljs.core.seq(arglist__27472);
return G__27470__delegate(args);
});
G__27470.cljs$core$IFn$_invoke$arity$variadic = G__27470__delegate;
return G__27470;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27473__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27474__i = 0, G__27474__a = new Array(arguments.length -  0);
while (G__27474__i < G__27474__a.length) {G__27474__a[G__27474__i] = arguments[G__27474__i + 0]; ++G__27474__i;}
  args = new cljs.core.IndexedSeq(G__27474__a,0);
} 
return G__27473__delegate.call(this,args);};
G__27473.cljs$lang$maxFixedArity = 0;
G__27473.cljs$lang$applyTo = (function (arglist__27475){
var args = cljs.core.seq(arglist__27475);
return G__27473__delegate(args);
});
G__27473.cljs$core$IFn$_invoke$arity$variadic = G__27473__delegate;
return G__27473;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1498467836139