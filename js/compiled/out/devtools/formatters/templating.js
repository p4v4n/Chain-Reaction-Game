// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x30945_30946 = value;
x30945_30946.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x30950_30951 = value;
x30950_30951.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x30955_30956 = value;
x30955_30956.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__26228__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__26228__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__26228__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30964 = arguments.length;
var i__27316__auto___30965 = (0);
while(true){
if((i__27316__auto___30965 < len__27315__auto___30964)){
args__27322__auto__.push((arguments[i__27316__auto___30965]));

var G__30966 = (i__27316__auto___30965 + (1));
i__27316__auto___30965 = G__30966;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((0) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27323__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__30960_30967 = cljs.core.seq.call(null,items);
var chunk__30961_30968 = null;
var count__30962_30969 = (0);
var i__30963_30970 = (0);
while(true){
if((i__30963_30970 < count__30962_30969)){
var item_30971 = cljs.core._nth.call(null,chunk__30961_30968,i__30963_30970);
if(cljs.core.some_QMARK_.call(null,item_30971)){
if(cljs.core.coll_QMARK_.call(null,item_30971)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30971)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30971));
}
} else {
}

var G__30972 = seq__30960_30967;
var G__30973 = chunk__30961_30968;
var G__30974 = count__30962_30969;
var G__30975 = (i__30963_30970 + (1));
seq__30960_30967 = G__30972;
chunk__30961_30968 = G__30973;
count__30962_30969 = G__30974;
i__30963_30970 = G__30975;
continue;
} else {
var temp__4657__auto___30976 = cljs.core.seq.call(null,seq__30960_30967);
if(temp__4657__auto___30976){
var seq__30960_30977__$1 = temp__4657__auto___30976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30960_30977__$1)){
var c__27051__auto___30978 = cljs.core.chunk_first.call(null,seq__30960_30977__$1);
var G__30979 = cljs.core.chunk_rest.call(null,seq__30960_30977__$1);
var G__30980 = c__27051__auto___30978;
var G__30981 = cljs.core.count.call(null,c__27051__auto___30978);
var G__30982 = (0);
seq__30960_30967 = G__30979;
chunk__30961_30968 = G__30980;
count__30962_30969 = G__30981;
i__30963_30970 = G__30982;
continue;
} else {
var item_30983 = cljs.core.first.call(null,seq__30960_30977__$1);
if(cljs.core.some_QMARK_.call(null,item_30983)){
if(cljs.core.coll_QMARK_.call(null,item_30983)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_30983)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_30983));
}
} else {
}

var G__30984 = cljs.core.next.call(null,seq__30960_30977__$1);
var G__30985 = null;
var G__30986 = (0);
var G__30987 = (0);
seq__30960_30967 = G__30984;
chunk__30961_30968 = G__30985;
count__30962_30969 = G__30986;
i__30963_30970 = G__30987;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq30959){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30959));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27322__auto__ = [];
var len__27315__auto___30995 = arguments.length;
var i__27316__auto___30996 = (0);
while(true){
if((i__27316__auto___30996 < len__27315__auto___30995)){
args__27322__auto__.push((arguments[i__27316__auto___30996]));

var G__30997 = (i__27316__auto___30996 + (1));
i__27316__auto___30996 = G__30997;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((2) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27323__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__30991_30998 = cljs.core.seq.call(null,children);
var chunk__30992_30999 = null;
var count__30993_31000 = (0);
var i__30994_31001 = (0);
while(true){
if((i__30994_31001 < count__30993_31000)){
var child_31002 = cljs.core._nth.call(null,chunk__30992_30999,i__30994_31001);
if(cljs.core.some_QMARK_.call(null,child_31002)){
if(cljs.core.coll_QMARK_.call(null,child_31002)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_31002))));
} else {
var temp__4655__auto___31003 = devtools.formatters.helpers.pref.call(null,child_31002);
if(cljs.core.truth_(temp__4655__auto___31003)){
var child_value_31004 = temp__4655__auto___31003;
template.push(child_value_31004);
} else {
}
}
} else {
}

var G__31005 = seq__30991_30998;
var G__31006 = chunk__30992_30999;
var G__31007 = count__30993_31000;
var G__31008 = (i__30994_31001 + (1));
seq__30991_30998 = G__31005;
chunk__30992_30999 = G__31006;
count__30993_31000 = G__31007;
i__30994_31001 = G__31008;
continue;
} else {
var temp__4657__auto___31009 = cljs.core.seq.call(null,seq__30991_30998);
if(temp__4657__auto___31009){
var seq__30991_31010__$1 = temp__4657__auto___31009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30991_31010__$1)){
var c__27051__auto___31011 = cljs.core.chunk_first.call(null,seq__30991_31010__$1);
var G__31012 = cljs.core.chunk_rest.call(null,seq__30991_31010__$1);
var G__31013 = c__27051__auto___31011;
var G__31014 = cljs.core.count.call(null,c__27051__auto___31011);
var G__31015 = (0);
seq__30991_30998 = G__31012;
chunk__30992_30999 = G__31013;
count__30993_31000 = G__31014;
i__30994_31001 = G__31015;
continue;
} else {
var child_31016 = cljs.core.first.call(null,seq__30991_31010__$1);
if(cljs.core.some_QMARK_.call(null,child_31016)){
if(cljs.core.coll_QMARK_.call(null,child_31016)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_31016))));
} else {
var temp__4655__auto___31017 = devtools.formatters.helpers.pref.call(null,child_31016);
if(cljs.core.truth_(temp__4655__auto___31017)){
var child_value_31018 = temp__4655__auto___31017;
template.push(child_value_31018);
} else {
}
}
} else {
}

var G__31019 = cljs.core.next.call(null,seq__30991_31010__$1);
var G__31020 = null;
var G__31021 = (0);
var G__31022 = (0);
seq__30991_30998 = G__31019;
chunk__30992_30999 = G__31020;
count__30993_31000 = G__31021;
i__30994_31001 = G__31022;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq30988){
var G__30989 = cljs.core.first.call(null,seq30988);
var seq30988__$1 = cljs.core.next.call(null,seq30988);
var G__30990 = cljs.core.first.call(null,seq30988__$1);
var seq30988__$2 = cljs.core.next.call(null,seq30988__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__30989,G__30990,seq30988__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___31025 = arguments.length;
var i__27316__auto___31026 = (0);
while(true){
if((i__27316__auto___31026 < len__27315__auto___31025)){
args__27322__auto__.push((arguments[i__27316__auto___31026]));

var G__31027 = (i__27316__auto___31026 + (1));
i__27316__auto___31026 = G__31027;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq31023){
var G__31024 = cljs.core.first.call(null,seq31023);
var seq31023__$1 = cljs.core.next.call(null,seq31023);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31024,seq31023__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27322__auto__ = [];
var len__27315__auto___31030 = arguments.length;
var i__27316__auto___31031 = (0);
while(true){
if((i__27316__auto___31031 < len__27315__auto___31030)){
args__27322__auto__.push((arguments[i__27316__auto___31031]));

var G__31032 = (i__27316__auto___31031 + (1));
i__27316__auto___31031 = G__31032;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq31028){
var G__31029 = cljs.core.first.call(null,seq31028);
var seq31028__$1 = cljs.core.next.call(null,seq31028);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31029,seq31028__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args31033 = [];
var len__27315__auto___31038 = arguments.length;
var i__27316__auto___31039 = (0);
while(true){
if((i__27316__auto___31039 < len__27315__auto___31038)){
args31033.push((arguments[i__27316__auto___31039]));

var G__31040 = (i__27316__auto___31039 + (1));
i__27316__auto___31039 = G__31040;
continue;
} else {
}
break;
}

var G__31035 = args31033.length;
switch (G__31035) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31033.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj31037 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__26240__auto__ = start_index;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return (0);
}
})()};
return obj31037;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27322__auto__ = [];
var len__27315__auto___31048 = arguments.length;
var i__27316__auto___31049 = (0);
while(true){
if((i__27316__auto___31049 < len__27315__auto___31048)){
args__27322__auto__.push((arguments[i__27316__auto___31049]));

var G__31050 = (i__27316__auto___31049 + (1));
i__27316__auto___31049 = G__31050;
continue;
} else {
}
break;
}

var argseq__27323__auto__ = ((((1) < args__27322__auto__.length))?(new cljs.core.IndexedSeq(args__27322__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27323__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__31044){
var vec__31045 = p__31044;
var state_override_fn = cljs.core.nth.call(null,vec__31045,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq31042){
var G__31043 = cljs.core.first.call(null,seq31042);
var seq31042__$1 = cljs.core.next.call(null,seq31042);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__31043,seq31042__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__27226__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_31054_31057 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_31055_31058 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_31054_31057,_STAR_print_fn_STAR_31055_31058,sb__27226__auto__){
return (function (x__27227__auto__){
return sb__27226__auto__.append(x__27227__auto__);
});})(_STAR_print_newline_STAR_31054_31057,_STAR_print_fn_STAR_31055_31058,sb__27226__auto__))
;

try{var _STAR_print_level_STAR_31056_31059 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_31056_31059;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31055_31058;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31054_31057;
}
return [cljs.core.str(sb__27226__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_31061 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_31061;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__31063 = name;
switch (G__31063) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__31068 = tag;
var html_tag = cljs.core.nth.call(null,vec__31068,(0),null);
var style = cljs.core.nth.call(null,vec__31068,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_31072 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_31072;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_31075 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_31076 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_31076;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_31075;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__31077 = initial_value;
var G__31078 = value.call(null);
initial_value = G__31077;
value = G__31078;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__31079 = initial_value;
var G__31080 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__31079;
value = G__31080;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__31081 = initial_value;
var G__31082 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__31081;
value = G__31082;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1498467844468