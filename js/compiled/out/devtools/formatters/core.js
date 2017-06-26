// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.core');
goog.require('cljs.core');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.reporter');
goog.require('devtools.protocols');
goog.require('devtools.formatters.budgeting');
goog.require('devtools.format');
goog.require('devtools.prefs');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
var and__26228__auto__ = cljs.core.not.call(null,devtools.formatters.state.prevent_recursion_QMARK_.call(null));
if(and__26228__auto__){
var or__26240__auto__ = devtools.formatters.helpers.cljs_value_QMARK_.call(null,value);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_.call(null,value);
}
} else {
return and__26228__auto__;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = (cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))?devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_header_GT_.call(null,value)):(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e31345){var e__30556__auto__ = e31345;
return false;
}})())?devtools.format._header.call(null,value):(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$protocols$IFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e31347){var e__30556__auto__ = e31347;
return false;
}})())?devtools.protocols._header.call(null,value):devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_GT_.call(null,value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_.call(null,value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_.call(null,value))){
return false;
} else {
return cljs.core.boolean$.call(null,(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))?cljs.core.some_QMARK_.call(null,devtools.formatters.templating.get_surrogate_body.call(null,value)):(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e31353){var e__30556__auto__ = e31353;
return false;
}})())?devtools.format._has_body.call(null,value):(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$protocols$IFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e31355){var e__30556__auto__ = e31355;
return false;
}})())?devtools.protocols._has_body.call(null,value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_.call(null,devtools.formatters.state.reset_depth_limits);

if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_surrogate_body_GT_.call(null,value));
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$format$IDevtoolsFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.format.IDevtoolsFormat,value);
}
}catch (e31361){var e__30556__auto__ = e31361;
return false;
}})())){
return devtools.format._body.call(null,value);
} else {
if(cljs.core.truth_((function (){try{if(!((value == null))){
if((false) || (value.devtools$protocols$IFormat$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IFormat,value);
}
}catch (e31363){var e__30556__auto__ = e31363;
return false;
}})())){
return devtools.protocols._body.call(null,value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR_31366 = devtools.formatters.state._STAR_current_state_STAR_;
devtools.formatters.state._STAR_current_state_STAR_ = (function (){var or__26240__auto__ = config;
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return devtools.formatters.state.get_default_state.call(null);
}
})();

try{return raw_fn.call(null,value);
}finally {devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR_31366;
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper.call(null,devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
var G__31369__delegate = function (args){
try{return cljs.core.apply.call(null,f,args);
}catch (e31368){var e = e31368;
devtools.reporter.report_internal_error_BANG_.call(null,e,"an exception was raised during value formatting");

return null;
}};
var G__31369 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31370__i = 0, G__31370__a = new Array(arguments.length -  0);
while (G__31370__i < G__31370__a.length) {G__31370__a[G__31370__i] = arguments[G__31370__i + 0]; ++G__31370__i;}
  args = new cljs.core.IndexedSeq(G__31370__a,0);
} 
return G__31369__delegate.call(this,args);};
G__31369.cljs$lang$maxFixedArity = 0;
G__31369.cljs$lang$applyTo = (function (arglist__31371){
var args = cljs.core.seq(arglist__31371);
return G__31369__delegate(args);
});
G__31369.cljs$core$IFn$_invoke$arity$variadic = G__31369__delegate;
return G__31369;
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__26240__auto__ = devtools.prefs.pref.call(null,pre_handler_key);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__26240__auto__ = devtools.prefs.pref.call(null,post_handler_key);
if(cljs.core.truth_(or__26240__auto__)){
return or__26240__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = pre_handler.call(null,value);
var result = (cljs.core.truth_(devtools.formatters.core.want_value_QMARK_.call(null,preprocessed_value,config))?raw_fn.call(null,preprocessed_value,config):null);
return post_handler.call(null,result);
});
return devtools.formatters.core.wrap_with_exception_guard.call(null,handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call.call(null,devtools.formatters.core.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=core.js.map?rel=1498467845185