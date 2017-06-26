// Compiled by ClojureScript 1.9.229 {}
goog.provide('chain_reaction.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('chain_reaction.rendercircle');
cljs.core.enable_console_print_BANG_.call(null);
chain_reaction.core.M = reagent.core.atom.call(null,(0));
chain_reaction.core.N = reagent.core.atom.call(null,(0));
chain_reaction.core.player_number = reagent.core.atom.call(null,(0));
chain_reaction.core.players_in_game = (function chain_reaction$core$players_in_game(player_number){
var c = (1);
var player_vec = cljs.core.PersistentVector.EMPTY;
while(true){
if((c > player_number)){
return player_vec;
} else {
var G__28060 = (c + (1));
var G__28061 = cljs.core.conj.call(null,player_vec,[cljs.core.str("P"),cljs.core.str(c)].join(''));
c = G__28060;
player_vec = G__28061;
continue;
}
break;
}
});
chain_reaction.core.next_player = (function chain_reaction$core$next_player(some_vec,curr_player){
var curr_index = some_vec.indexOf(curr_player);
if(cljs.core._EQ_.call(null,curr_index,(cljs.core.count.call(null,some_vec) - (1)))){
return some_vec.call(null,(0));
} else {
return some_vec.call(null,((1) + curr_index));
}
});
chain_reaction.core.flag = reagent.core.atom.call(null,false);
chain_reaction.core.new_board = (function chain_reaction$core$new_board(m,n){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,m,cljs.core.vec.call(null,cljs.core.repeat.call(null,n,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),"B",new cljs.core.Keyword(null,"number","number",1570378438),(0)], null)))));
});
chain_reaction.core.current_players = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
chain_reaction.core.all_colours = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Red","Green","Blue","Orange","Violet","White","Brown","Pink"], null);
chain_reaction.core.player_color = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, ["B","Black"], null));
chain_reaction.core.player_data_dict = (function chain_reaction$core$player_data_dict(){
var pl_li = cljs.core.deref.call(null,chain_reaction.core.current_players);
var pl_dict = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,pl_li)){
return pl_dict;
} else {
var G__28062 = cljs.core.rest.call(null,pl_li);
var G__28063 = cljs.core.assoc.call(null,pl_dict,cljs.core.first.call(null,pl_li),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"number-of-moves","number-of-moves",-322911479),(0),new cljs.core.Keyword(null,"number-of-boxes","number-of-boxes",-1612413892),(0),new cljs.core.Keyword(null,"sum-of-boxes","sum-of-boxes",41697632),(0)], null));
pl_li = G__28062;
pl_dict = G__28063;
continue;
}
break;
}
});
chain_reaction.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Welcome to Chain Reaction Game",new cljs.core.Keyword(null,"board","board",-1907017633),chain_reaction.core.new_board.call(null,cljs.core.deref.call(null,chain_reaction.core.M),cljs.core.deref.call(null,chain_reaction.core.N)),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288),"P1",new cljs.core.Keyword(null,"player-data","player-data",77754120),chain_reaction.core.player_data_dict.call(null)], null));
chain_reaction.core.reset_app_state = (function chain_reaction$core$reset_app_state(){
cljs.core.reset_BANG_.call(null,chain_reaction.core.current_players,chain_reaction.core.players_in_game.call(null,cljs.core.deref.call(null,chain_reaction.core.player_number)));

return cljs.core.reset_BANG_.call(null,chain_reaction.core.app_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Welcome to Chain Reaction Game",new cljs.core.Keyword(null,"board","board",-1907017633),chain_reaction.core.new_board.call(null,cljs.core.deref.call(null,chain_reaction.core.M),cljs.core.deref.call(null,chain_reaction.core.N)),new cljs.core.Keyword(null,"game-status","game-status",1777284612),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288),"P1",new cljs.core.Keyword(null,"player-data","player-data",77754120),chain_reaction.core.player_data_dict.call(null)], null));
});
chain_reaction.core.update_player_info = (function chain_reaction$core$update_player_info(player_id){
var flattened_board = cljs.core.flatten.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"board","board",-1907017633)));
var box_count_pl = cljs.core.count.call(null,cljs.core.filter.call(null,((function (flattened_board){
return (function (p1__28064_SHARP_){
return cljs.core._EQ_.call(null,player_id,p1__28064_SHARP_.call(null,new cljs.core.Keyword(null,"player","player",-97687400)));
});})(flattened_board))
,flattened_board));
var score_pl = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (flattened_board,box_count_pl){
return (function (p1__28065_SHARP_){
return p1__28065_SHARP_.call(null,new cljs.core.Keyword(null,"number","number",1570378438));
});})(flattened_board,box_count_pl))
,cljs.core.filter.call(null,((function (flattened_board,box_count_pl){
return (function (p1__28066_SHARP_){
return cljs.core._EQ_.call(null,player_id,p1__28066_SHARP_.call(null,new cljs.core.Keyword(null,"player","player",-97687400)));
});})(flattened_board,box_count_pl))
,flattened_board)));
cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),player_id,new cljs.core.Keyword(null,"number-of-boxes","number-of-boxes",-1612413892)], null),box_count_pl);

return cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),player_id,new cljs.core.Keyword(null,"sum-of-boxes","sum-of-boxes",41697632)], null),score_pl);
});
chain_reaction.core.update_all_player_info = (function chain_reaction$core$update_all_player_info(){
return cljs.core.doall.call(null,cljs.core.map.call(null,chain_reaction.core.update_player_info,cljs.core.deref.call(null,chain_reaction.core.current_players)));
});
chain_reaction.core.win_QMARK_ = (function chain_reaction$core$win_QMARK_(){
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.deref.call(null,chain_reaction.core.current_players)))){
return cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-status","game-status",1777284612)], null),[cljs.core.str(cljs.core.first.call(null,cljs.core.deref.call(null,chain_reaction.core.current_players))),cljs.core.str("-won")].join(''));
} else {
return null;
}
});
chain_reaction.core.eliminate_QMARK_ = (function chain_reaction$core$eliminate_QMARK_(player_id){
var player_info = cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-data","player-data",77754120)).call(null,player_id);
if(((player_info.call(null,new cljs.core.Keyword(null,"number-of-moves","number-of-moves",-322911479)) > (0))) && (cljs.core._EQ_.call(null,player_info.call(null,new cljs.core.Keyword(null,"number-of-boxes","number-of-boxes",-1612413892)),(0)))){
return cljs.core.reset_BANG_.call(null,chain_reaction.core.current_players,cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([player_id], true),cljs.core.deref.call(null,chain_reaction.core.current_players))));
} else {
return null;
}
});
chain_reaction.core.any_eliminations_QMARK_ = (function chain_reaction$core$any_eliminations_QMARK_(){
return cljs.core.doall.call(null,cljs.core.map.call(null,chain_reaction.core.eliminate_QMARK_,cljs.core.deref.call(null,chain_reaction.core.current_players)));
});
chain_reaction.core.max_value = (function chain_reaction$core$max_value(i,j){
return ((3) - cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.zero_QMARK_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j,((cljs.core.deref.call(null,chain_reaction.core.M) - (1)) - i),((cljs.core.deref.call(null,chain_reaction.core.N) - (1)) - j)], null))));
});
chain_reaction.core.valid_index = (function chain_reaction$core$valid_index(p__28067){
var vec__28071 = p__28067;
var i = cljs.core.nth.call(null,vec__28071,(0),null);
var j = cljs.core.nth.call(null,vec__28071,(1),null);
return ((i >= (0))) && ((j >= (0))) && ((i < cljs.core.deref.call(null,chain_reaction.core.M))) && ((j < cljs.core.deref.call(null,chain_reaction.core.N)));
});
chain_reaction.core.neighbours = (function chain_reaction$core$neighbours(i,j){
return cljs.core.filter.call(null,chain_reaction.core.valid_index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i - (1)),j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(i + (1)),j], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,(j + (1))], null)], null));
});
chain_reaction.core.neighbours_update = (function chain_reaction$core$neighbours_update(i,j){
var neighbour_list = chain_reaction.core.neighbours.call(null,i,j);
while(true){
if(cljs.core.empty_QMARK_.call(null,neighbour_list)){
return null;
} else {
var neighbour_row = cljs.core.first.call(null,cljs.core.first.call(null,neighbour_list));
var neighbour_column = cljs.core.second.call(null,cljs.core.first.call(null,neighbour_list));
cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),neighbour_row,neighbour_column,new cljs.core.Keyword(null,"player","player",-97687400)], null),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)));

cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),neighbour_row,neighbour_column,new cljs.core.Keyword(null,"number","number",1570378438)], null),cljs.core.inc);

var G__28074 = cljs.core.rest.call(null,neighbour_list);
neighbour_list = G__28074;
continue;
}
break;
}
});
chain_reaction.core.split_update = (function chain_reaction$core$split_update(p__28075){
var vec__28079 = p__28075;
var i = cljs.core.nth.call(null,vec__28079,(0),null);
var j = cljs.core.nth.call(null,vec__28079,(1),null);
if(cljs.core._EQ_.call(null,((1) + chain_reaction.core.max_value.call(null,i,j)),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null)))){
cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"player","player",-97687400)], null),"B");

cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null),(0));
} else {
cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null),cljs.core._,((1) + chain_reaction.core.max_value.call(null,i,j)));
}

return chain_reaction.core.neighbours_update.call(null,i,j);
});
chain_reaction.core.overall_split_update = (function chain_reaction$core$overall_split_update(li){
var split_list = li;
while(true){
if(cljs.core.empty_QMARK_.call(null,split_list)){
return null;
} else {
chain_reaction.core.split_update.call(null,cljs.core.first.call(null,split_list));

var G__28082 = cljs.core.rest.call(null,split_list);
split_list = G__28082;
continue;
}
break;
}
});
chain_reaction.core.ready_to_split = (function chain_reaction$core$ready_to_split(){
return cljs.core.vec.call(null,(function (){var iter__27020__auto__ = (function chain_reaction$core$ready_to_split_$_iter__28089(s__28090){
return (new cljs.core.LazySeq(null,(function (){
var s__28090__$1 = s__28090;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28090__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__27016__auto__ = ((function (s__28090__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function chain_reaction$core$ready_to_split_$_iter__28089_$_iter__28091(s__28092){
return (new cljs.core.LazySeq(null,((function (s__28090__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__28092__$1 = s__28092;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28092__$1);
if(temp__4657__auto____$1){
var s__28092__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28092__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__28092__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__28094 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__28093 = (0);
while(true){
if((i__28093 < size__27019__auto__)){
var j = cljs.core._nth.call(null,c__27018__auto__,i__28093);
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null)) > chain_reaction.core.max_value.call(null,i,j))){
cljs.core.chunk_append.call(null,b__28094,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__28095 = (i__28093 + (1));
i__28093 = G__28095;
continue;
} else {
var G__28096 = (i__28093 + (1));
i__28093 = G__28096;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28094),chain_reaction$core$ready_to_split_$_iter__28089_$_iter__28091.call(null,cljs.core.chunk_rest.call(null,s__28092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28094),null);
}
} else {
var j = cljs.core.first.call(null,s__28092__$2);
if((cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null)) > chain_reaction.core.max_value.call(null,i,j))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),chain_reaction$core$ready_to_split_$_iter__28089_$_iter__28091.call(null,cljs.core.rest.call(null,s__28092__$2)));
} else {
var G__28097 = cljs.core.rest.call(null,s__28092__$2);
s__28092__$1 = G__28097;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__28090__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__28090__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__27017__auto__ = cljs.core.seq.call(null,iterys__27016__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,chain_reaction.core.N))));
if(fs__27017__auto__){
return cljs.core.concat.call(null,fs__27017__auto__,chain_reaction$core$ready_to_split_$_iter__28089.call(null,cljs.core.rest.call(null,s__28090__$1)));
} else {
var G__28098 = cljs.core.rest.call(null,s__28090__$1);
s__28090__$1 = G__28098;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,chain_reaction.core.M)));
})());
});
chain_reaction.core.play_pause_music = (function chain_reaction$core$play_pause_music(){
if(cljs.core.truth_(document.getElementById("audio").paused)){
return document.getElementById("audio").play();
} else {
return document.getElementById("audio").pause();
}
});
chain_reaction.core.make_circle = (function chain_reaction$core$make_circle(i,j,n,color){
if(cljs.core._EQ_.call(null,n,(0))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.call(null,n,(1))){
return chain_reaction.rendercircle.one_circle.call(null,i,j,color);
} else {
if(cljs.core._EQ_.call(null,n,(2))){
return chain_reaction.rendercircle.two_circles.call(null,i,j,color);
} else {
if(cljs.core._EQ_.call(null,n,(3))){
return chain_reaction.rendercircle.three_circles.call(null,i,j,color);
} else {
return null;
}
}
}
}
});
chain_reaction.core.update_app_state = (function chain_reaction$core$update_app_state(i,j){
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)),"B"], true),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"player","player",-97687400)], null)))){
cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"player","player",-97687400)], null),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)));

cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),i,j,new cljs.core.Keyword(null,"number","number",1570378438)], null),cljs.core.inc);

return cljs.core.reset_BANG_.call(null,chain_reaction.core.flag,true);
} else {
return null;
}
});
chain_reaction.core.rectangle = (function chain_reaction$core$rectangle(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"game-status","game-status",1777284612)))) && (cljs.core.not.call(null,cljs.core.deref.call(null,chain_reaction.core.flag)))){
return chain_reaction.core.update_app_state.call(null,j,i);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),0.88,new cljs.core.Keyword(null,"height","height",1025178622),0.88,new cljs.core.Keyword(null,"fill","fill",883462889),"Black",new cljs.core.Keyword(null,"x","x",2099068185),(0.9 * i),new cljs.core.Keyword(null,"y","y",-1757859776),(0.9 * j),new cljs.core.Keyword(null,"stroke","stroke",1741823555),cljs.core.deref.call(null,chain_reaction.core.player_color).call(null,cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288))),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.015], null)], null),chain_reaction.core.make_circle.call(null,i,j,cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i,new cljs.core.Keyword(null,"number","number",1570378438)], null)),cljs.core.deref.call(null,chain_reaction.core.player_color).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),j,i,new cljs.core.Keyword(null,"player","player",-97687400)], null))))], null);
});
chain_reaction.core.chain_reaction = (function chain_reaction$core$chain_reaction(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,chain_reaction.core.app_state))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),(function (){var G__28110 = (((cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-status","game-status",1777284612)], null)) instanceof cljs.core.Keyword))?cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-status","game-status",1777284612)], null)).fqn:null);
switch (G__28110) {
case "in-progress":
return "Game in progress ";

break;
default:
return cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"game-status","game-status",1777284612)], null));

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"restart-game-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return chain_reaction.core.reset_app_state.call(null);
})], null),"Restart the game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"play-pause-music-button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return chain_reaction.core.play_pause_music.call(null);
})], null),"Play/Pause Music"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 10 12",new cljs.core.Keyword(null,"width","width",-384071477),(750),new cljs.core.Keyword(null,"height","height",1025178622),(750)], null),(function (){var iter__27020__auto__ = (function chain_reaction$core$chain_reaction_$_iter__28111(s__28112){
return (new cljs.core.LazySeq(null,(function (){
var s__28112__$1 = s__28112;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28112__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var i = cljs.core.first.call(null,xs__5205__auto__);
var iterys__27016__auto__ = ((function (s__28112__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function chain_reaction$core$chain_reaction_$_iter__28111_$_iter__28113(s__28114){
return (new cljs.core.LazySeq(null,((function (s__28112__$1,i,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__28114__$1 = s__28114;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__28114__$1);
if(temp__4657__auto____$1){
var s__28114__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28114__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__28114__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__28116 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__28115 = (0);
while(true){
if((i__28115 < size__27019__auto__)){
var j = cljs.core._nth.call(null,c__27018__auto__,i__28115);
cljs.core.chunk_append.call(null,b__28116,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [chain_reaction.core.rectangle,j,i], null));

var G__28122 = (i__28115 + (1));
i__28115 = G__28122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28116),chain_reaction$core$chain_reaction_$_iter__28111_$_iter__28113.call(null,cljs.core.chunk_rest.call(null,s__28114__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28116),null);
}
} else {
var j = cljs.core.first.call(null,s__28114__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [chain_reaction.core.rectangle,j,i], null),chain_reaction$core$chain_reaction_$_iter__28111_$_iter__28113.call(null,cljs.core.rest.call(null,s__28114__$2)));
}
} else {
return null;
}
break;
}
});})(s__28112__$1,i,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__28112__$1,i,xs__5205__auto__,temp__4657__auto__))
;
var fs__27017__auto__ = cljs.core.seq.call(null,iterys__27016__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,chain_reaction.core.N))));
if(fs__27017__auto__){
return cljs.core.concat.call(null,fs__27017__auto__,chain_reaction$core$chain_reaction_$_iter__28111.call(null,cljs.core.rest.call(null,s__28112__$1)));
} else {
var G__28123 = cljs.core.rest.call(null,s__28112__$1);
s__28112__$1 = G__28123;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,chain_reaction.core.M)));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs.core.deref.call(null,chain_reaction.core.player_color).call(null,cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Player-Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"No. of moves"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"No. of boxes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Score"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"info-body"], null),cljs.core.doall.call(null,(function (){var iter__27020__auto__ = (function chain_reaction$core$chain_reaction_$_iter__28117(s__28118){
return (new cljs.core.LazySeq(null,(function (){
var s__28118__$1 = s__28118;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28118__$1);
if(temp__4657__auto__){
var s__28118__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28118__$2)){
var c__27018__auto__ = cljs.core.chunk_first.call(null,s__28118__$2);
var size__27019__auto__ = cljs.core.count.call(null,c__27018__auto__);
var b__28120 = cljs.core.chunk_buffer.call(null,size__27019__auto__);
if((function (){var i__28119 = (0);
while(true){
if((i__28119 < size__27019__auto__)){
var i = cljs.core._nth.call(null,c__27018__auto__,i__28119);
cljs.core.chunk_append.call(null,b__28120,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chain_reaction.core.all_colours.call(null,i)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str("P"),cljs.core.str((i + (1)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"number-of-moves","number-of-moves",-322911479)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"number-of-boxes","number-of-boxes",-1612413892)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"sum-of-boxes","sum-of-boxes",41697632)], null))], null)], null));

var G__28124 = (i__28119 + (1));
i__28119 = G__28124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28120),chain_reaction$core$chain_reaction_$_iter__28117.call(null,cljs.core.chunk_rest.call(null,s__28118__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28120),null);
}
} else {
var i = cljs.core.first.call(null,s__28118__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),chain_reaction.core.all_colours.call(null,i)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),[cljs.core.str("P"),cljs.core.str((i + (1)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"number-of-moves","number-of-moves",-322911479)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"number-of-boxes","number-of-boxes",-1612413892)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.get_in.call(null,cljs.core.deref.call(null,chain_reaction.core.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),[cljs.core.str("P"),cljs.core.str((i + (1)))].join(''),new cljs.core.Keyword(null,"sum-of-boxes","sum-of-boxes",41697632)], null))], null)], null),chain_reaction$core$chain_reaction_$_iter__28117.call(null,cljs.core.rest.call(null,s__28118__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__27020__auto__.call(null,cljs.core.range.call(null,cljs.core.deref.call(null,chain_reaction.core.player_number)));
})())], null)], null)], null);
});
chain_reaction.core.start_game_handler = (function chain_reaction$core$start_game_handler(){
var rows = parseInt(clojure.string.trim.call(null,document.getElementById("rows").value));
var columns = parseInt(clojure.string.trim.call(null,document.getElementById("columns").value));
var players_no = parseInt(clojure.string.trim.call(null,document.getElementById("players").value));
cljs.core.reset_BANG_.call(null,chain_reaction.core.M,rows);

cljs.core.reset_BANG_.call(null,chain_reaction.core.N,columns);

cljs.core.reset_BANG_.call(null,chain_reaction.core.player_number,players_no);

cljs.core.reset_BANG_.call(null,chain_reaction.core.current_players,chain_reaction.core.players_in_game.call(null,players_no));

cljs.core.swap_BANG_.call(null,chain_reaction.core.player_color,cljs.core.merge,cljs.core.zipmap.call(null,chain_reaction.core.players_in_game.call(null,players_no),cljs.core.take.call(null,players_no,chain_reaction.core.all_colours)));

chain_reaction.core.reset_app_state.call(null);

document.getElementById("start-game-container").style.display = "none";

return document.getElementById("audio").play();
});
document.getElementById("start-game-button").addEventListener("click",chain_reaction.core.start_game_handler);
setInterval((function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,chain_reaction.core.flag))){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"game-status","game-status",1777284612)))) && ((cljs.core.count.call(null,chain_reaction.core.ready_to_split.call(null)) > (0)))){
chain_reaction.core.overall_split_update.call(null,chain_reaction.core.ready_to_split.call(null));

chain_reaction.core.update_all_player_info.call(null);

chain_reaction.core.any_eliminations_QMARK_.call(null);

return chain_reaction.core.win_QMARK_.call(null);
} else {
cljs.core.reset_BANG_.call(null,chain_reaction.core.flag,false);

chain_reaction.core.update_all_player_info.call(null);

cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-data","player-data",77754120),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)),new cljs.core.Keyword(null,"number-of-moves","number-of-moves",-322911479)], null),cljs.core.inc);

return cljs.core.swap_BANG_.call(null,chain_reaction.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288)], null),chain_reaction.core.next_player.call(null,cljs.core.deref.call(null,chain_reaction.core.current_players),cljs.core.deref.call(null,chain_reaction.core.app_state).call(null,new cljs.core.Keyword(null,"player-to-move","player-to-move",1517959288))));
}
} else {
return null;
}
}),(200));
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [chain_reaction.core.chain_reaction], null),document.getElementById("app"));
chain_reaction.core.on_js_reload = (function chain_reaction$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1498468264469