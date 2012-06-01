// Created by iWeb 3.0.4 local-build-20120529

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-2,2,4,351),url:'Research_files/stroke.png'},{rect:new IWRect(-2,-2,4,4),url:'Research_files/stroke_1.png'},{rect:new IWRect(2,-2,421,4),url:'Research_files/stroke_2.png'},{rect:new IWRect(423,-2,4,4),url:'Research_files/stroke_3.png'},{rect:new IWRect(423,2,4,351),url:'Research_files/stroke_4.png'},{rect:new IWRect(423,353,4,4),url:'Research_files/stroke_5.png'},{rect:new IWRect(2,353,421,4),url:'Research_files/stroke_6.png'},{rect:new IWRect(-2,353,4,4),url:'Research_files/stroke_7.png'}],new IWSize(425,355))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Research_files/ResearchMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
