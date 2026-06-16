gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.localVariables = [];
gdjs.Main_32MenuCode.idToCallbackMap = new Map();
gdjs.Main_32MenuCode.GDGreyButtonObjects1_1final = [];

gdjs.Main_32MenuCode.GDGreyButtonObjects1= [];
gdjs.Main_32MenuCode.GDGreyButtonObjects2= [];
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1= [];
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects2= [];
gdjs.Main_32MenuCode.GDVolumeObjects1= [];
gdjs.Main_32MenuCode.GDVolumeObjects2= [];
gdjs.Main_32MenuCode.GDBackGroundObjects1= [];
gdjs.Main_32MenuCode.GDBackGroundObjects2= [];
gdjs.Main_32MenuCode.GDragequitObjects1= [];
gdjs.Main_32MenuCode.GDragequitObjects2= [];
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1= [];
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects2= [];


gdjs.Main_32MenuCode.eventsList0 = function(runtimeScene) {

{

gdjs.Main_32MenuCode.GDGreyButtonObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Main_32MenuCode.GDGreyButtonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.Main_32MenuCode.GDGreyButtonObjects2);
for (var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDGreyButtonObjects2.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDGreyButtonObjects2[i].IsPressed(null) ) {
        isConditionTrue_1 = true;
        gdjs.Main_32MenuCode.GDGreyButtonObjects2[k] = gdjs.Main_32MenuCode.GDGreyButtonObjects2[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDGreyButtonObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Main_32MenuCode.GDGreyButtonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Main_32MenuCode.GDGreyButtonObjects1_1final.indexOf(gdjs.Main_32MenuCode.GDGreyButtonObjects2[j]) === -1 )
            gdjs.Main_32MenuCode.GDGreyButtonObjects1_1final.push(gdjs.Main_32MenuCode.GDGreyButtonObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "A", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Main_32MenuCode.GDGreyButtonObjects1_1final, gdjs.Main_32MenuCode.GDGreyButtonObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Map1", true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestSurviveTime"), gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1);
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dustwater Lullaby.mp3", false, 25, 1);
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1[i].getBehavior("Text").setText("Best Time: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + " Seconds");
}
}
{gdjs.evtTools.network.sendAsyncRequest("https://gdevelopgame.onrender.com/api/GetSurvivalTime", "", "GET", "application/json", runtimeScene.getScene().getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestSurviveTime"), gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1[i].getBehavior("Text").setText("Best Time: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + " Seconds");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SquareWhiteSlider"), gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, (( gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1.length === 0 ) ? 0 :gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1[0].Value(null)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "B", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18837412);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__URLTools__Redirect.func(runtimeScene, "javascript:history.back()", null);
}
}

}


};

gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDGreyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDVolumeObjects1.length = 0;
gdjs.Main_32MenuCode.GDVolumeObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDragequitObjects1.length = 0;
gdjs.Main_32MenuCode.GDragequitObjects2.length = 0;
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1.length = 0;
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0(runtimeScene);
gdjs.Main_32MenuCode.GDGreyButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDGreyButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects1.length = 0;
gdjs.Main_32MenuCode.GDSquareWhiteSliderObjects2.length = 0;
gdjs.Main_32MenuCode.GDVolumeObjects1.length = 0;
gdjs.Main_32MenuCode.GDVolumeObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackGroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDragequitObjects1.length = 0;
gdjs.Main_32MenuCode.GDragequitObjects2.length = 0;
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects1.length = 0;
gdjs.Main_32MenuCode.GDBestSurviveTimeObjects2.length = 0;


return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
