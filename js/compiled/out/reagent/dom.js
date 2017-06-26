// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__26240__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_27930 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_27930){
return (function (){
var _STAR_always_update_STAR_27931 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27931;
}});})(_STAR_always_update_STAR_27930))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27930;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args27932 = [];
var len__27315__auto___27935 = arguments.length;
var i__27316__auto___27936 = (0);
while(true){
if((i__27316__auto___27936 < len__27315__auto___27935)){
args27932.push((arguments[i__27316__auto___27936]));

var G__27937 = (i__27316__auto___27936 + (1));
i__27316__auto___27936 = G__27937;
continue;
} else {
}
break;
}

var G__27934 = args27932.length;
switch (G__27934) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27932.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__27943_27947 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__27944_27948 = null;
var count__27945_27949 = (0);
var i__27946_27950 = (0);
while(true){
if((i__27946_27950 < count__27945_27949)){
var v_27951 = cljs.core._nth.call(null,chunk__27944_27948,i__27946_27950);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27951);

var G__27952 = seq__27943_27947;
var G__27953 = chunk__27944_27948;
var G__27954 = count__27945_27949;
var G__27955 = (i__27946_27950 + (1));
seq__27943_27947 = G__27952;
chunk__27944_27948 = G__27953;
count__27945_27949 = G__27954;
i__27946_27950 = G__27955;
continue;
} else {
var temp__4657__auto___27956 = cljs.core.seq.call(null,seq__27943_27947);
if(temp__4657__auto___27956){
var seq__27943_27957__$1 = temp__4657__auto___27956;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27943_27957__$1)){
var c__27051__auto___27958 = cljs.core.chunk_first.call(null,seq__27943_27957__$1);
var G__27959 = cljs.core.chunk_rest.call(null,seq__27943_27957__$1);
var G__27960 = c__27051__auto___27958;
var G__27961 = cljs.core.count.call(null,c__27051__auto___27958);
var G__27962 = (0);
seq__27943_27947 = G__27959;
chunk__27944_27948 = G__27960;
count__27945_27949 = G__27961;
i__27946_27950 = G__27962;
continue;
} else {
var v_27963 = cljs.core.first.call(null,seq__27943_27957__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27963);

var G__27964 = cljs.core.next.call(null,seq__27943_27957__$1);
var G__27965 = null;
var G__27966 = (0);
var G__27967 = (0);
seq__27943_27947 = G__27964;
chunk__27944_27948 = G__27965;
count__27945_27949 = G__27966;
i__27946_27950 = G__27967;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1498468263922