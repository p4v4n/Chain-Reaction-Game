// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._header[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._header["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._has_body[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26903__auto__ = (((value == null))?null:value);
var m__26904__auto__ = (devtools.format._body[goog.typeOf(x__26903__auto__)]);
if(!((m__26904__auto__ == null))){
return m__26904__auto__.call(null,value);
} else {
var m__26904__auto____$1 = (devtools.format._body["_"]);
if(!((m__26904__auto____$1 == null))){
return m__26904__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__30544__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__30544__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__30544__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__30544__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__30543__auto__ = temp__4657__auto____$2;
return goog.object.get(o__30543__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30801 = arguments.length;
var i__27316__auto___30802 = (0);
while(true){
if((i__27316__auto___30802 < len__27315__auto___30801)){
args__27322__auto__.push((arguments[i__27316__auto___30802]));

var G__30803 = (i__27316__auto___30802 + (1));
i__27316__auto___30802 = G__30803;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq30800){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30800));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30805 = arguments.length;
var i__27316__auto___30806 = (0);
while(true){
if((i__27316__auto___30806 < len__27315__auto___30805)){
args__27322__auto__.push((arguments[i__27316__auto___30806]));

var G__30807 = (i__27316__auto___30806 + (1));
i__27316__auto___30806 = G__30807;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq30804){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30804));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30809 = arguments.length;
var i__27316__auto___30810 = (0);
while(true){
if((i__27316__auto___30810 < len__27315__auto___30809)){
args__27322__auto__.push((arguments[i__27316__auto___30810]));

var G__30811 = (i__27316__auto___30810 + (1));
i__27316__auto___30810 = G__30811;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq30808){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30808));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30813 = arguments.length;
var i__27316__auto___30814 = (0);
while(true){
if((i__27316__auto___30814 < len__27315__auto___30813)){
args__27322__auto__.push((arguments[i__27316__auto___30814]));

var G__30815 = (i__27316__auto___30814 + (1));
i__27316__auto___30814 = G__30815;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq30812){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30812));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30817 = arguments.length;
var i__27316__auto___30818 = (0);
while(true){
if((i__27316__auto___30818 < len__27315__auto___30817)){
args__27322__auto__.push((arguments[i__27316__auto___30818]));

var G__30819 = (i__27316__auto___30818 + (1));
i__27316__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq30816){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30816));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30821 = arguments.length;
var i__27316__auto___30822 = (0);
while(true){
if((i__27316__auto___30822 < len__27315__auto___30821)){
args__27322__auto__.push((arguments[i__27316__auto___30822]));

var G__30823 = (i__27316__auto___30822 + (1));
i__27316__auto___30822 = G__30823;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq30820){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30820));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30825 = arguments.length;
var i__27316__auto___30826 = (0);
while(true){
if((i__27316__auto___30826 < len__27315__auto___30825)){
args__27322__auto__.push((arguments[i__27316__auto___30826]));

var G__30827 = (i__27316__auto___30826 + (1));
i__27316__auto___30826 = G__30827;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq30824){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30824));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30835 = arguments.length;
var i__27316__auto___30836 = (0);
while(true){
if((i__27316__auto___30836 < len__27315__auto___30835)){
args__27322__auto__.push((arguments[i__27316__auto___30836]));

var G__30837 = (i__27316__auto___30836 + (1));
i__27316__auto___30836 = G__30837;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__30831){
var vec__30832 = p__30831;
var state_override = cljs.core.nth.call(null,vec__30832,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__30832,state_override){
return (function (p1__30828_SHARP_){
return cljs.core.merge.call(null,p1__30828_SHARP_,state_override);
});})(vec__30832,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq30829){
var G__30830 = cljs.core.first.call(null,seq30829);
var seq30829__$1 = cljs.core.next.call(null,seq30829);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__30830,seq30829__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30839 = arguments.length;
var i__27316__auto___30840 = (0);
while(true){
if((i__27316__auto___30840 < len__27315__auto___30839)){
args__27322__auto__.push((arguments[i__27316__auto___30840]));

var G__30841 = (i__27316__auto___30840 + (1));
i__27316__auto___30840 = G__30841;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq30838){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30838));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30844 = arguments.length;
var i__27316__auto___30845 = (0);
while(true){
if((i__27316__auto___30845 < len__27315__auto___30844)){
args__27322__auto__.push((arguments[i__27316__auto___30845]));

var G__30846 = (i__27316__auto___30845 + (1));
i__27316__auto___30845 = G__30846;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq30842){
var G__30843 = cljs.core.first.call(null,seq30842);
var seq30842__$1 = cljs.core.next.call(null,seq30842);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__30843,seq30842__$1);
});


//# sourceMappingURL=format.js.map?rel=1498468269739