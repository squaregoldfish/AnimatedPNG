/*
AnimatedPNG - A Javascript library for animated PNG images 
Copyright (C) 2007-2014 Steve Jones (steve@squaregoldfish.co.uk)
Version 1.02
Web: http://www.squaregoldfish.co.uk/software/animatedpng
Email: steve@squaregoldfish.co.uk
Twitter: @squaregoldfish

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details:
http://www.gnu.org/licenses/gpl.txt
*/// Global variable for holding animated images
function AnimatedPNG(e,t,n,r){this.animName=e,this.images=new Array,this.defaultDelay=r,this.delays=new Array,this.padCount=0,this.firstImageNumber=0,this.lastImageNumber=0,this.currentImage=0,this.repeat=!0,this.animationRunning=!1,this.animationDrawn=!1,this.draw=function(e){var t=new Array;t[t.length]='<img id="'+this.animName+'" src=""',this.altText&&(t[t.length]=' alt="'+this.altText+'"'),this.titleText&&(t[t.length]=' title="'+this.titleText+'"'),t[t.length]="/>",document.write(t.join("")),document.getElementById(this.animName).src=this.images[this.firstImageNumber].src,e||(setTimeout("animatedPNGs['"+this.animName+"'].drawFrame()",this.delays[this.firstImageNumber]),this.animationRunning=!0),this.drawn=!0},this.setFrameDelay=function(e,t){this.delays[e]=t},this.clearFrameDelays=function(){for(var e=0;e<this.delays.length;e++)this.delays[e]=this.defaultDelay},this.setRepeat=function(e){this.repeat=e,e&&!this.animationRunning&&this.startAnimation()},this.startAnimation=function(){this.animationRunning||(this.animationRunning=!0,this.drawFrame())},this.stopAnimation=function(){this.animationRunning=!1},this.drawFrame=function(){var e=!0;this.currentImage++,this.currentImage>this.lastImageNumber&&(this.repeat?this.currentImage=this.firstImageNumber:(e=!1,this.animationRunning=!1)),e&&(document.getElementById(this.animName).src=this.images[this.currentImage].src,this.delays[this.currentImage]&&(r=this.delays[this.currentImage]),this.animationRunning&&setTimeout("animatedPNGs['"+this.animName+"'].drawFrame()",r))};var i=null,s="",o=t.substring(t.length-4,t.length);if(o.search(/\.png/i)!=0&&o.search(/\.jpg/i)!=0)throw"Invalid suffix for first image in animated PNG "+e+" - must be .png or .jpg";var u=!1,a=t.length-5;for(;a>=0&&!u;a--)/[0-9]/.test(t.charAt(a))?(s=t.charAt(a)+s,t.charAt(a)=="0"&&this.padCount++):u=!0;s=parseInt(s),this.firstImageNumber=s,this.currentImage=s,i=t.substring(0,a+2);for(var f=s;f<n+s;f++)this.images[f]=new Image,this.images[f].src=i+pad(f,this.padCount)+o,this.lastImageNumber=f,this.delays[f]=r;animatedPNGs[e]=this}function pad(e,t){var n=""+e;while(n.length<t+1)n="0"+n;return n}animatedPNGs=new Array;