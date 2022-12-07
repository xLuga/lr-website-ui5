/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Element","./DynamicDateOption","./Label","./StepInput","./RadioButton","./RadioButtonGroup","sap/ui/unified/Calendar","sap/ui/unified/calendar/MonthPicker","sap/ui/core/format/DateFormat","./StandardDynamicDateRangeKeys","sap/ui/core/date/UniversalDateUtils","sap/ui/core/date/UniversalDate","sap/m/DynamicDateValueHelpUIType","./library"],function(e,t,a,r,s,n,T,E,A,R,c,S,o,u){"use strict";var i=t.extend("sap.m.StandardDynamicDateOption",{metadata:{library:"sap.m"}});var g=1;var l=6e3;var O={DATE:"DATE",DATERANGE:"DATERANGE",TODAY:"TODAY",YESTERDAY:"YESTERDAY",TOMORROW:"TOMORROW",SPECIFICMONTH:"SPECIFICMONTH",THISWEEK:"THISWEEK",THISMONTH:"THISMONTH",THISQUARTER:"THISQUARTER",THISYEAR:"THISYEAR",LASTWEEK:"LASTWEEK",LASTMONTH:"LASTMONTH",LASTQUARTER:"LASTQUARTER",LASTYEAR:"LASTYEAR",NEXTWEEK:"NEXTWEEK",NEXTMONTH:"NEXTMONTH",NEXTQUARTER:"NEXTQUARTER",NEXTYEAR:"NEXTYEAR",LASTDAYS:"LASTDAYS",LASTWEEKS:"LASTWEEKS",LASTMONTHS:"LASTMONTHS",LASTQUARTERS:"LASTQUARTERS",LASTYEARS:"LASTYEARS",NEXTDAYS:"NEXTDAYS",NEXTWEEKS:"NEXTWEEKS",NEXTMONTHS:"NEXTMONTHS",NEXTQUARTERS:"NEXTQUARTERS",NEXTYEARS:"NEXTYEARS",FROM:"FROM",TO:"TO",YEARTODATE:"YEARTODATE",TODAYFROMTO:"TODAYFROMTO",QUARTER1:"QUARTER1",QUARTER2:"QUARTER2",QUARTER3:"QUARTER3",QUARTER4:"QUARTER4"};var D={SingleDates:1,DateRanges:2,Weeks:3,Months:4,Quarters:5,Years:6};var p={DATE:D.SingleDates,DATERANGE:D.DateRanges,TODAY:D.SingleDates,YESTERDAY:D.SingleDates,TOMORROW:D.SingleDates,SPECIFICMONTH:D.Months,THISWEEK:D.Weeks,THISMONTH:D.Months,THISQUARTER:D.Quarters,THISYEAR:D.Years,LASTWEEK:D.Weeks,LASTMONTH:D.Months,LASTQUARTER:D.Quarters,LASTYEAR:D.Years,NEXTWEEK:D.Weeks,NEXTMONTH:D.Months,NEXTQUARTER:D.Quarters,NEXTYEAR:D.Years,LASTDAYS:D.DateRanges,LASTWEEKS:D.DateRanges,LASTMONTHS:D.DateRanges,LASTQUARTERS:D.DateRanges,LASTYEARS:D.DateRanges,NEXTDAYS:D.DateRanges,NEXTWEEKS:D.DateRanges,NEXTMONTHS:D.DateRanges,NEXTQUARTERS:D.DateRanges,NEXTYEARS:D.DateRanges,FROM:D.DateRanges,TO:D.DateRanges,YEARTODATE:D.DateRanges,TODAYFROMTO:D.DateRanges,QUARTER1:D.Quarters,QUARTER2:D.Quarters,QUARTER3:D.Quarters,QUARTER4:D.Quarters};var N=["LASTDAYS","LASTWEEKS","LASTMONTHS","LASTQUARTERS","LASTYEARS"];var y=["NEXTDAYS","NEXTWEEKS","NEXTMONTHS","NEXTQUARTERS","NEXTYEARS"];i.LastXKeys=N;i.NextXKeys=y;var Y=sap.ui.getCore().getLibraryResourceBundle("sap.m");i.Keys=O;i.prototype.getText=function(e){var t=this.getKey();var a=e._getOptions();var r=this.getValueHelpUITypes(e);var s=this._getOptionParams(N,a);var n=this._getOptionParams(y,a);if(s){r.push(s)}if(n){r.push(n)}switch(t){case O.LASTDAYS:case O.LASTWEEKS:case O.LASTMONTHS:case O.LASTQUARTERS:case O.LASTYEARS:return Y.getText("DYNAMIC_DATE_LASTX_TITLE",r[1].getOptions().join(" / "));case O.NEXTDAYS:case O.NEXTWEEKS:case O.NEXTMONTHS:case O.NEXTQUARTERS:case O.NEXTYEARS:return Y.getText("DYNAMIC_DATE_NEXTX_TITLE",r[1].getOptions().join(" / "));default:return Y.getText("DYNAMIC_DATE_"+t+"_TITLE")}};i.prototype.getValueHelpUITypes=function(e){var t=this.getKey();switch(t){case O.TODAY:case O.YESTERDAY:case O.TOMORROW:case O.THISWEEK:case O.THISMONTH:case O.THISQUARTER:case O.THISYEAR:case O.LASTWEEK:case O.LASTMONTH:case O.LASTQUARTER:case O.LASTYEAR:case O.NEXTWEEK:case O.NEXTMONTH:case O.NEXTQUARTER:case O.NEXTYEAR:case O.YEARTODATE:case O.QUARTER1:case O.QUARTER2:case O.QUARTER3:case O.QUARTER4:return[];case O.DATE:case O.FROM:case O.TO:return[new o({type:"date"})];case O.DATERANGE:return[new o({type:"daterange"})];case O.SPECIFICMONTH:return[new o({type:"month"})];case O.LASTDAYS:case O.LASTWEEKS:case O.LASTMONTHS:case O.LASTQUARTERS:case O.LASTYEARS:case O.NEXTDAYS:case O.NEXTWEEKS:case O.NEXTMONTHS:case O.NEXTQUARTERS:case O.NEXTYEARS:return[new o({text:Y.getText("DDR_LASTNEXTX_LABEL"),type:"int"})];case O.TODAYFROMTO:return[new o({text:Y.getText("DDR_TODAYFROMTO_FROM_LABEL"),type:"int"}),new o({text:Y.getText("DDR_TODAYFROMTO_TO_LABEL"),type:"int"})]}};i.prototype.createValueHelpUI=function(e,t){var r=e._getOptions();var s=e.getValue();var n=this.getValueHelpUITypes(e);var T=[];if(!e.aControlsByParameters){e.aControlsByParameters={}}e.aControlsByParameters[this.getKey()]=[];var E=this._getOptionParams(N,r);var A=this._getOptionParams(y,r);if(E){n.push(E)}if(A){n.push(A)}for(var R=0;R<n.length;R++){if(n[R].getOptions()&&n[R].getOptions().length<=1){break}else if(n[R].getText()){T.push(new a({text:n[R].getText(),width:"100%"}))}var c;switch(n[R].getType()){case"int":c=this._createIntegerControl(s,R,t);if(s&&n[1]&&n[1].getOptions()&&n[1].getOptions().indexOf(s.operator.slice(4).toLowerCase())!==-1){c.setValue(s.values[R])}break;case"date":c=this._createDateControl(s,R,t);break;case"daterange":c=this._createDateRangeControl(s,R,t);break;case"month":c=this._createMonthControl(s,R,t);break;case"options":c=this._createOptionsControl(s,R,t,n);break}T.push(c);e.aControlsByParameters[this.getKey()].push(c)}return T};i.prototype._createIntegerControl=function(e,a,r){var s=t.prototype._createIntegerControl.call(this,e,a,r);var n=this.getKey()==="TODAYFROMTO"?-l:g;var T=!e||this.getKey()!==e.operator;if(this.getKey()==="TODAYFROMTO"&&T){s.setValue(1)}s.setMin(n);s.setMax(l);return s};i.prototype._createOptionsControl=function(e,t,a,r){var s=new n({buttons:[r[t].getOptions().map(h)]});if(e){var T=r[t].getOptions().indexOf(e.operator.slice(4).toLowerCase());if(T!==-1){s.setSelectedIndex(T)}}if(a instanceof Function){s.attachSelect(function(){a(this)},this)}return s};i.prototype._getOptionParams=function(e,t){if(e.indexOf(this.getKey())!==-1){return new o({text:"Time Periods:",type:"options",options:t?t.filter(function(t){return e.indexOf(t.getKey())!==-1}).map(function(e){return e.getKey().slice(4).toLowerCase()}):[]})}return undefined};i.prototype.validateValueHelpUI=function(e){var t=this.getValueHelpUITypes();for(var a=0;a<t.length;a++){var r=e.aControlsByParameters[this.getKey()][a];switch(t[a].getType()){case"int":if(r._isLessThanMin(r.getValue())||r._isMoreThanMax(r.getValue())){return false}break;case"month":case"date":case"daterange":if(!r.getSelectedDates()||r.getSelectedDates().length==0){return false}break;case"options":if(r.getSelectedIndex()<0){return false}break}}return true};i.prototype.getValueHelpOutput=function(e){var t=e._getOptions();var a=this.getValueHelpUITypes(e),r={},s;if(N.indexOf(this.getKey())!==-1&&e.aControlsByParameters[this.getKey()].length>1){r.operator=t.filter(function(e){return N.indexOf(e.getKey())!==-1})[e.aControlsByParameters[this.getKey()][1].getSelectedIndex()].getKey()}else if(y.indexOf(this.getKey())!==-1&&e.aControlsByParameters[this.getKey()].length>1){r.operator=t.filter(function(e){return y.indexOf(e.getKey())!==-1})[e.aControlsByParameters[this.getKey()][1].getSelectedIndex()].getKey()}else{r.operator=this.getKey()}r.values=[];for(var n=0;n<a.length;n++){var T=e.aControlsByParameters[this.getKey()][n];switch(a[n].getType()){case"int":s=T.getValue();break;case"month":if(!T.getSelectedDates()||!T.getSelectedDates().length){return null}s=T.getSelectedDates()[0].getStartDate().getMonth();break;case"date":if(!T.getSelectedDates().length){return null}s=T.getSelectedDates()[0].getStartDate();break;case"daterange":if(!T.getSelectedDates().length){return null}var E=T.getSelectedDates()[0].getEndDate()||T.getSelectedDates()[0].getStartDate();s=[T.getSelectedDates()[0].getStartDate(),E];break}if(Array.isArray(s)){r.values=Array.prototype.concat.apply(r.values,s)}else{s!==null&&s!==undefined&&r.values.push(s)}}return r};i.prototype.getGroup=function(){return p[this.getKey()]};i.prototype.getGroupHeader=function(){return Y.getText("DDR_OPTIONS_GROUP_"+p[this.getKey()])};i.prototype.format=function(e,t){return t.format(e)};i.prototype.parse=function(e,t){return t.parse(e,this.getKey())};i.prototype.toDates=function(e){if(!e){return null}var t=e.operator;var a=e.values[0]||0;switch(t){case"SPECIFICMONTH":var r=new S;r.setMonth(e.values[0]);r=c.getMonthStartDate(r);return c.getRange(0,"MONTH",r);case"DATE":return c.getRange(0,"DAY",S.getInstance(e.values[0]));case"DATERANGE":var s=S.getInstance(e.values[0]);var n=S.getInstance(e.values[1]);return[c.resetStartTime(s),c.resetEndTime(n)];case"TODAY":return c.ranges.today();case"YESTERDAY":return c.ranges.yesterday();case"TOMORROW":return c.ranges.tomorrow();case"THISWEEK":return c.ranges.currentWeek();case"THISMONTH":return c.ranges.currentMonth();case"THISQUARTER":return c.ranges.currentQuarter();case"THISYEAR":return c.ranges.currentYear();case"LASTWEEK":return c.ranges.lastWeek();case"LASTMONTH":return c.ranges.lastMonth();case"LASTQUARTER":return c.ranges.lastQuarter();case"LASTYEAR":return c.ranges.lastYear();case"NEXTWEEK":return c.ranges.nextWeek();case"NEXTMONTH":return c.ranges.nextMonth();case"NEXTQUARTER":return c.ranges.nextQuarter();case"NEXTYEAR":return c.ranges.nextYear();case"LASTDAYS":return c.ranges.lastDays(a);case"LASTWEEKS":return c.ranges.lastWeeks(a);case"LASTMONTHS":return c.ranges.lastMonths(a);case"LASTQUARTERS":return c.ranges.lastQuarters(a);case"LASTYEARS":return c.ranges.lastYears(a);case"NEXTDAYS":return c.ranges.nextDays(a);case"NEXTWEEKS":return c.ranges.nextWeeks(a);case"NEXTMONTHS":return c.ranges.nextMonths(a);case"NEXTQUARTERS":return c.ranges.nextQuarters(a);case"NEXTYEARS":return c.ranges.nextYears(a);case"FROM":return[e.values[0],e.values[0]];case"TO":return[e.values[0],e.values[0]];case"YEARTODATE":return c.ranges.yearToDate();case"TODAYFROMTO":if(e.values.length!==2){return[]}var T=e.values[0];var E=e.values[1];var s=T>=0?c.ranges.lastDays(T)[0]:c.ranges.nextDays(-T)[1];var n=E>=0?c.ranges.nextDays(E)[1]:c.ranges.lastDays(-E)[0];if(s.oDate.getTime()>n.oDate.getTime()){n=[s,s=n][0]}return[c.resetStartTime(s),c.resetEndTime(n)];case"QUARTER1":return c.ranges.quarter(1);case"QUARTER2":return c.ranges.quarter(2);case"QUARTER3":return c.ranges.quarter(3);case"QUARTER4":return c.ranges.quarter(4);default:return[]}};i.prototype.enhanceFormattedValue=function(){switch(this.getKey()){case"TODAY":case"YESTERDAY":case"TOMORROW":case"THISWEEK":case"THISMONTH":case"THISQUARTER":case"THISYEAR":case"LASTWEEK":case"LASTMONTH":case"LASTQUARTER":case"LASTYEAR":case"NEXTWEEK":case"NEXTMONTH":case"NEXTQUARTER":case"NEXTYEAR":case"YEARTODATE":case"QUARTER1":case"QUARTER2":case"QUARTER3":case"QUARTER4":return true;default:return false}};function h(e){return new s({text:e})}return i});