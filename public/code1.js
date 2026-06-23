gdjs.Map1Code = {};
gdjs.Map1Code.localVariables = [];
gdjs.Map1Code.idToCallbackMap = new Map();
gdjs.Map1Code.GDDogObjects1_1final = [];

gdjs.Map1Code.GDPlayerObjects1_1final = [];

gdjs.Map1Code.GDStaminaBarObjects1_1final = [];

gdjs.Map1Code.GDZombieObjects1_1final = [];

gdjs.Map1Code.GDPlayerObjects1= [];
gdjs.Map1Code.GDPlayerObjects2= [];
gdjs.Map1Code.GDPlayerObjects3= [];
gdjs.Map1Code.GDGround_9595TilemapObjects1= [];
gdjs.Map1Code.GDGround_9595TilemapObjects2= [];
gdjs.Map1Code.GDGround_9595TilemapObjects3= [];
gdjs.Map1Code.GDWall_9595ObstacleObjects1= [];
gdjs.Map1Code.GDWall_9595ObstacleObjects2= [];
gdjs.Map1Code.GDWall_9595ObstacleObjects3= [];
gdjs.Map1Code.GDPlant_9595ObstacleObjects1= [];
gdjs.Map1Code.GDPlant_9595ObstacleObjects2= [];
gdjs.Map1Code.GDPlant_9595ObstacleObjects3= [];
gdjs.Map1Code.GDBullet1Objects1= [];
gdjs.Map1Code.GDBullet1Objects2= [];
gdjs.Map1Code.GDBullet1Objects3= [];
gdjs.Map1Code.GDZombieObjects1= [];
gdjs.Map1Code.GDZombieObjects2= [];
gdjs.Map1Code.GDZombieObjects3= [];
gdjs.Map1Code.GDZombieSpawnZoneObjects1= [];
gdjs.Map1Code.GDZombieSpawnZoneObjects2= [];
gdjs.Map1Code.GDZombieSpawnZoneObjects3= [];
gdjs.Map1Code.GDHealthBarObjects1= [];
gdjs.Map1Code.GDHealthBarObjects2= [];
gdjs.Map1Code.GDHealthBarObjects3= [];
gdjs.Map1Code.GDHealthObjects1= [];
gdjs.Map1Code.GDHealthObjects2= [];
gdjs.Map1Code.GDHealthObjects3= [];
gdjs.Map1Code.GDStaminaBarOLObjects1= [];
gdjs.Map1Code.GDStaminaBarOLObjects2= [];
gdjs.Map1Code.GDStaminaBarOLObjects3= [];
gdjs.Map1Code.GDStaminaBarObjects1= [];
gdjs.Map1Code.GDStaminaBarObjects2= [];
gdjs.Map1Code.GDStaminaBarObjects3= [];
gdjs.Map1Code.GDStaminaTextObjects1= [];
gdjs.Map1Code.GDStaminaTextObjects2= [];
gdjs.Map1Code.GDStaminaTextObjects3= [];
gdjs.Map1Code.GDHealthTextObjects1= [];
gdjs.Map1Code.GDHealthTextObjects2= [];
gdjs.Map1Code.GDHealthTextObjects3= [];
gdjs.Map1Code.GDSurviveTimeObjects1= [];
gdjs.Map1Code.GDSurviveTimeObjects2= [];
gdjs.Map1Code.GDSurviveTimeObjects3= [];
gdjs.Map1Code.GDDogObjects1= [];
gdjs.Map1Code.GDDogObjects2= [];
gdjs.Map1Code.GDDogObjects3= [];
gdjs.Map1Code.GDDogSpawnZoneObjects1= [];
gdjs.Map1Code.GDDogSpawnZoneObjects2= [];
gdjs.Map1Code.GDDogSpawnZoneObjects3= [];
gdjs.Map1Code.GDFogOfWarObjects1= [];
gdjs.Map1Code.GDFogOfWarObjects2= [];
gdjs.Map1Code.GDFogOfWarObjects3= [];
gdjs.Map1Code.GDWall_9595Obstacle2Objects1= [];
gdjs.Map1Code.GDWall_9595Obstacle2Objects2= [];
gdjs.Map1Code.GDWall_9595Obstacle2Objects3= [];
gdjs.Map1Code.GDGunSpriteObjects1= [];
gdjs.Map1Code.GDGunSpriteObjects2= [];
gdjs.Map1Code.GDGunSpriteObjects3= [];
gdjs.Map1Code.GDAmmoTxtObjects1= [];
gdjs.Map1Code.GDAmmoTxtObjects2= [];
gdjs.Map1Code.GDAmmoTxtObjects3= [];
gdjs.Map1Code.GDAmmoIconObjects1= [];
gdjs.Map1Code.GDAmmoIconObjects2= [];
gdjs.Map1Code.GDAmmoIconObjects3= [];
gdjs.Map1Code.GDGhostObjects1= [];
gdjs.Map1Code.GDGhostObjects2= [];
gdjs.Map1Code.GDGhostObjects3= [];
gdjs.Map1Code.GDBestSurviveTimeObjects1= [];
gdjs.Map1Code.GDBestSurviveTimeObjects2= [];
gdjs.Map1Code.GDBestSurviveTimeObjects3= [];


gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Map1Code.GDWall_9595ObstacleObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlant_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Plant_Obstacle": gdjs.Map1Code.GDPlant_9595ObstacleObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595Obstacle2Objects1Objects = Hashtable.newFrom({"Wall_Obstacle2": gdjs.Map1Code.GDWall_9595Obstacle2Objects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.Map1Code.GDBullet1Objects1});
gdjs.Map1Code.asyncCallback18799684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects2);

{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects2.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18799684, gdjs.Map1Code.asyncCallback18799684);
gdjs.Map1Code.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.Map1Code.GDPlayerObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
for (const obj of gdjs.Map1Code.GDBullet1Objects1) asyncObjectsList.addObject("Bullet1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(((gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Map1Code.GDPlayerObjects1[0].getVariables()).getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.Map1Code.asyncCallback18799684(runtimeScene, asyncObjectsList)), 18799684, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.Map1Code.GDBullet1Objects1});
gdjs.Map1Code.asyncCallback18804668 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects2);

{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects2.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects2[i].deleteFromScene(runtimeScene);
}
}
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18804668, gdjs.Map1Code.asyncCallback18804668);
gdjs.Map1Code.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.Map1Code.GDPlayerObjects1 */

{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
for (const obj of gdjs.Map1Code.GDBullet1Objects1) asyncObjectsList.addObject("Bullet1", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(((gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Map1Code.GDPlayerObjects1[0].getVariables()).getFromIndex(0).getAsNumber()), (runtimeScene) => (gdjs.Map1Code.asyncCallback18804668(runtimeScene, asyncObjectsList)), 18804668, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.Map1Code.GDBullet1Objects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Map1Code.GDWall_9595ObstacleObjects1});
gdjs.Map1Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "LB", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);
gdjs.copyArray(gdjs.Map1Code.GDStaminaBarObjects1, gdjs.Map1Code.GDStaminaBarObjects2);

gdjs.copyArray(runtimeScene.getObjects("StaminaBarOL"), gdjs.Map1Code.GDStaminaBarOLObjects2);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(300);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDStaminaBarObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDStaminaBarObjects2[i].getBehavior("Health").Hit(4, true, true, null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDStaminaBarObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDStaminaBarObjects2[i].getBehavior("Resizable").setWidth((( gdjs.Map1Code.GDStaminaBarOLObjects2.length === 0 ) ? 0 :gdjs.Map1Code.GDStaminaBarOLObjects2[0].getWidth()) * (gdjs.Map1Code.GDStaminaBarObjects2[i].getBehavior("Health").Health(null)) / 100);
}
}
}

}


{

/* Reuse gdjs.Map1Code.GDStaminaBarObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDStaminaBarObjects1.length;i<l;++i) {
    if ( gdjs.Map1Code.GDStaminaBarObjects1[i].getBehavior("Health").Health(null) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDStaminaBarObjects1[k] = gdjs.Map1Code.GDStaminaBarObjects1[i];
        ++k;
    }
}
gdjs.Map1Code.GDStaminaBarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDStaminaBarObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDStaminaBarObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDStaminaBarObjects1[i].getBehavior("Health").SetHealth(0, null);
}
}
}

}


};gdjs.Map1Code.asyncCallback18824644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18824644, gdjs.Map1Code.asyncCallback18824644);
gdjs.Map1Code.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.7), (runtimeScene) => (gdjs.Map1Code.asyncCallback18824644(runtimeScene, asyncObjectsList)), 18824644, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieSpawnZoneObjects1Objects = Hashtable.newFrom({"ZombieSpawnZone": gdjs.Map1Code.GDZombieSpawnZoneObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Map1Code.GDWall_9595ObstacleObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects = Hashtable.newFrom({"Wall_Obstacle": gdjs.Map1Code.GDWall_9595ObstacleObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.Map1Code.GDBullet1Objects1});
gdjs.Map1Code.eventsList4 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Map1Code.GDZombieObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDZombieObjects2.length;i<l;++i) {
    if ( gdjs.Map1Code.GDZombieObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDZombieObjects2[k] = gdjs.Map1Code.GDZombieObjects2[i];
        ++k;
    }
}
gdjs.Map1Code.GDZombieObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDZombieObjects2 */
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Map1Code.asyncCallback18832260 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects2);

{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}

{ //Subevents
gdjs.Map1Code.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18832260, gdjs.Map1Code.asyncCallback18832260);
gdjs.Map1Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
for (const obj of gdjs.Map1Code.GDZombieObjects1) asyncObjectsList.addObject("Zombie", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Map1Code.asyncCallback18832260(runtimeScene, asyncObjectsList)), 18832260, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects = Hashtable.newFrom({"Bullet1": gdjs.Map1Code.GDBullet1Objects1});
gdjs.Map1Code.eventsList6 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Map1Code.GDDogObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDDogObjects2.length;i<l;++i) {
    if ( gdjs.Map1Code.GDDogObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDDogObjects2[k] = gdjs.Map1Code.GDDogObjects2[i];
        ++k;
    }
}
gdjs.Map1Code.GDDogObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDDogObjects2 */
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.Map1Code.asyncCallback18836564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Dog"), gdjs.Map1Code.GDDogObjects2);

{for(var i = 0, len = gdjs.Map1Code.GDDogObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}

{ //Subevents
gdjs.Map1Code.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18836564, gdjs.Map1Code.asyncCallback18836564);
gdjs.Map1Code.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
for (const obj of gdjs.Map1Code.GDDogObjects1) asyncObjectsList.addObject("Dog", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Map1Code.asyncCallback18836564(runtimeScene, asyncObjectsList)), 18836564, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Map1Code.GDPlayerObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Map1Code.GDPlayerObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects2Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects2});
gdjs.Map1Code.asyncCallback18841020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("SaveSurvivalTime", "STime", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
{gdjs.evtTools.network.sendAsyncRequest("/api/SaveSurvivalTime", "{\"score\":" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))) + "}", "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18841020, gdjs.Map1Code.asyncCallback18841020);
gdjs.Map1Code.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Map1Code.asyncCallback18841020(runtimeScene, asyncObjectsList)), 18841020, asyncObjectsList);
}
}

}


};gdjs.Map1Code.eventsList9 = function(runtimeScene, asyncObjectsList) {

{

/* Reuse gdjs.Map1Code.GDPlayerObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Map1Code.GDPlayerObjects2[i].getBehavior("Health").IsDead(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDPlayerObjects2[k] = gdjs.Map1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Map1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDPlayerObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "813308__qubodup__wilhelm-scream.wav", false, 80, 1);
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}

{ //Subevents
gdjs.Map1Code.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.Map1Code.asyncCallback18839844 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Map1Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);

{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}

{ //Subevents
gdjs.Map1Code.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Map1Code.localVariables.length = 0;
}
gdjs.Map1Code.idToCallbackMap.set(18839844, gdjs.Map1Code.asyncCallback18839844);
gdjs.Map1Code.eventsList10 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Map1Code.localVariables);
for (const obj of gdjs.Map1Code.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Map1Code.asyncCallback18839844(runtimeScene, asyncObjectsList)), 18839844, asyncObjectsList);
}
}

}


};gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Map1Code.GDPlayerObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects2Objects = Hashtable.newFrom({"Dog": gdjs.Map1Code.GDDogObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Map1Code.GDPlayerObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects2Objects = Hashtable.newFrom({"Zombie": gdjs.Map1Code.GDZombieObjects2});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Map1Code.GDPlayerObjects1});
gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDGhostObjects1Objects = Hashtable.newFrom({"Ghost": gdjs.Map1Code.GDGhostObjects1});
gdjs.Map1Code.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestSurviveTime"), gdjs.Map1Code.GDBestSurviveTimeObjects1);
gdjs.copyArray(runtimeScene.getObjects("DogSpawnZone"), gdjs.Map1Code.GDDogSpawnZoneObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].putAround(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.random(360));
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "Concrete Psalm.mp3", false, 15, 1);
}
{for(var i = 0, len = gdjs.Map1Code.GDDogSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogSpawnZoneObjects1[i].putAround(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.random(360));
}
}
{for(var i = 0, len = gdjs.Map1Code.GDDogSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogSpawnZoneObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDBestSurviveTimeObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDBestSurviveTimeObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GunSprite"), gdjs.Map1Code.GDGunSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SurviveTime"), gdjs.Map1Code.GDSurviveTimeObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDSurviveTimeObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDSurviveTimeObjects1[i].getBehavior("Text").setText("Survive Time: " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene))) + " s");
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(Math.round(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene)));
}
{for(var i = 0, len = gdjs.Map1Code.GDGunSpriteObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDGunSpriteObjects1[i].setX((( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointX("")) - 18);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDGunSpriteObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDGunSpriteObjects1[i].setY((( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointY("")) - 22);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Plant_Obstacle"), gdjs.Map1Code.GDPlant_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Map1Code.GDWall_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle2"), gdjs.Map1Code.GDWall_9595Obstacle2Objects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlant_95959595ObstacleObjects1Objects, false);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595Obstacle2Objects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GunSprite"), gdjs.Map1Code.GDGunSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDGunSpriteObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDGunSpriteObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Axis_pushed.func(runtimeScene, 1, "Right", "Any", null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GunSprite"), gdjs.Map1Code.GDGunSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].setAngle(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Right", null));
}
}
{for(var i = 0, len = gdjs.Map1Code.GDGunSpriteObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDGunSpriteObjects1[i].setAngle(gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Right", null));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18800052);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
gdjs.Map1Code.GDBullet1Objects1.length = 0;

{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Map1Code.GDPlayerObjects1[i].getPointX("")), (gdjs.Map1Code.GDPlayerObjects1[i].getPointY("")), gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects, (gdjs.Map1Code.GDPlayerObjects1[i].getAngleToPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))), gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(2).getAsNumber(), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pistol gun shot cutted.wav", false, 60, gdjs.randomFloatInRange(0.94, 1.05));
}

{ //Subevents
gdjs.Map1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "RB", null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18803572);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
gdjs.Map1Code.GDBullet1Objects1.length = 0;

{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("FireBullet").Fire((gdjs.Map1Code.GDPlayerObjects1[i].getPointX("")), (gdjs.Map1Code.GDPlayerObjects1[i].getPointY("")), gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects, gdjs.evtsExt__Gamepads__StickAngle.func(runtimeScene, 1, "Right", null), gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(2).getAsNumber(), null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "pistol gun shot cutted.wav", false, 60, gdjs.randomFloatInRange(0.94, 1.05));
}

{ //Subevents
gdjs.Map1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateUpKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateDownKey();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDPlayerObjects1[k] = gdjs.Map1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Map1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "walking", 0.6, null);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "345560__inspectorj__footsteps-stones-a (mp3cut.net).wav", false, 40, gdjs.randomFloatInRange(0.82, 1.02));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num1");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "X", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0.6);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber(1500);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setNumber(6);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("FireBullet").SetShotsPerReloadOp(20, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Num3");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Y", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(0.2);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(1)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber(300);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].returnVariable(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(3)).setNumber(1.5);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("AmmoTxt"), gdjs.Map1Code.GDAmmoTxtObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("FogOfWar"), gdjs.Map1Code.GDFogOfWarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects1.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects1[i].getBehavior("Animation").setAnimationIndex(((gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Map1Code.GDPlayerObjects1[0].getVariables()).getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("FireBullet").SetAngleVarianceOp(gdjs.Map1Code.GDPlayerObjects1[i].getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDFogOfWarObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDFogOfWarObjects1[i].getBehavior("MarchingSquaresBehavior").DrawField(null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDFogOfWarObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDFogOfWarObjects1[i].getBehavior("MarchingSquaresBehavior").AddDisk(640, 360, 200, 4, "Maximum", null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDAmmoTxtObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDAmmoTxtObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString((( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getBehavior("FireBullet").ShotsBeforeNextReload(null))) + "/" + gdjs.evtTools.common.toString((( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getBehavior("FireBullet").ShotsPerReload(null))));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_pressed.func(runtimeScene, 1, "Square", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18815660);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("FireBullet").ReloadAmmo(null);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "9mm-pistol-being-reloaded-once-really-bright-and-trebly-sounding-1-take.wav", false, 80, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Map1Code.GDWall_9595ObstacleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDBullet1Objects1 */
{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects1.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "854335__mikiko850__metal-bullet-ricochets (mp3cut.net).wav", false, 100, gdjs.randomFloatInRange(0.9, 1));
}
}

}


{

gdjs.Map1Code.GDStaminaBarObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Map1Code.GDStaminaBarObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "LShift");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("StaminaBar"), gdjs.Map1Code.GDStaminaBarObjects2);
for (var i = 0, k = 0, l = gdjs.Map1Code.GDStaminaBarObjects2.length;i<l;++i) {
    if ( gdjs.Map1Code.GDStaminaBarObjects2[i].getBehavior("Health").Health(null) == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Map1Code.GDStaminaBarObjects2[k] = gdjs.Map1Code.GDStaminaBarObjects2[i];
        ++k;
    }
}
gdjs.Map1Code.GDStaminaBarObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Map1Code.GDStaminaBarObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDStaminaBarObjects1_1final.indexOf(gdjs.Map1Code.GDStaminaBarObjects2[j]) === -1 )
            gdjs.Map1Code.GDStaminaBarObjects1_1final.push(gdjs.Map1Code.GDStaminaBarObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtsExt__Gamepads__C_Button_released.func(runtimeScene, 1, "LB", null);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Map1Code.GDStaminaBarObjects1_1final, gdjs.Map1Code.GDStaminaBarObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("TopDownMovement").setMaxSpeed(160);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StaminaBar"), gdjs.Map1Code.GDStaminaBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDStaminaBarObjects1.length;i<l;++i) {
    if ( gdjs.Map1Code.GDStaminaBarObjects1[i].getBehavior("Health").Health(null) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDStaminaBarObjects1[k] = gdjs.Map1Code.GDStaminaBarObjects1[i];
        ++k;
    }
}
gdjs.Map1Code.GDStaminaBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Map1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("StaminaBar"), gdjs.Map1Code.GDStaminaBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("StaminaBarOL"), gdjs.Map1Code.GDStaminaBarOLObjects1);
gdjs.copyArray(runtimeScene.getObjects("StaminaText"), gdjs.Map1Code.GDStaminaTextObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDStaminaBarObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDStaminaBarObjects1[i].getBehavior("Resizable").setWidth((( gdjs.Map1Code.GDStaminaBarOLObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDStaminaBarOLObjects1[0].getWidth()) * (gdjs.Map1Code.GDStaminaBarObjects1[i].getBehavior("Health").Health(null)) / 100);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDStaminaTextObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDStaminaTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString((( gdjs.Map1Code.GDStaminaBarObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDStaminaBarObjects1[0].getBehavior("Health").Health(null))), 0, 4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "SpawnTimer", 1.2, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].putAround(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.random(360));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].returnVariable(gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(1, 4));
}
}

{ //Subevents
gdjs.Map1Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Wall_Obstacle"), gdjs.Map1Code.GDWall_9595ObstacleObjects1);
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieSpawnZoneObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDWall_9595ObstacleObjects1 */
/* Reuse gdjs.Map1Code.GDZombieSpawnZoneObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDWall_95959595ObstacleObjects1Objects, false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "SpawnTimer", 5, null);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DogSpawnZone"), gdjs.Map1Code.GDDogSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDDogSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogSpawnZoneObjects1[i].putAround(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.window.getWindowInnerWidth() / 2, gdjs.random(360));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("DogSpawnZone"), gdjs.Map1Code.GDDogSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDDogSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogSpawnZoneObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Map1Code.GDZombieObjects1.length;i<l;++i) {
    if ( gdjs.Map1Code.GDZombieObjects1[i].getBehavior("IdleTracker").IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.Map1Code.GDZombieObjects1[k] = gdjs.Map1Code.GDZombieObjects1[i];
        ++k;
    }
}
gdjs.Map1Code.GDZombieObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDZombieObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ZombieSpawnZone"), gdjs.Map1Code.GDZombieSpawnZoneObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDZombieSpawnZoneObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieSpawnZoneObjects1[i].getBehavior("ObjectSpawner").SpawnObject(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Map1Code.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointY("")));
}
}
{for(var i = 0, len = gdjs.Map1Code.GDGhostObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDGhostObjects1[i].addForceTowardObject((gdjs.Map1Code.GDPlayerObjects1.length !== 0 ? gdjs.Map1Code.GDPlayerObjects1[0] : null), 155, 0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDBullet1Objects1 */
/* Reuse gdjs.Map1Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects1.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects1[i].deleteFromScene(runtimeScene);
}
}
{gdjs.evtTools.sound.playMusic(runtimeScene, "842508__gulfstreamav__hit_impact.wav", false, 80, gdjs.randomFloatInRange(0.95, 1.05));
}
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.Map1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
/* Reuse gdjs.Map1Code.GDZombieObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects1Objects, true);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDZombieObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDZombieObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointX("")) + gdjs.randomInRange(-(50), 50), (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointY("")) + gdjs.randomInRange(-(50), 50));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDDogObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects1[i].separateFromObjectsList(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects, true);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointX("")) + gdjs.randomInRange(-(50), 50), (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getPointY("")) + gdjs.randomInRange(-(50), 50));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet1"), gdjs.Map1Code.GDBullet1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDBullet1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Map1Code.GDBullet1Objects1 */
/* Reuse gdjs.Map1Code.GDDogObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDBullet1Objects1.length ;i < len;++i) {
    gdjs.Map1Code.GDBullet1Objects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDDogObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDDogObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.Map1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.Map1Code.GDDogObjects1.length = 0;

gdjs.Map1Code.GDPlayerObjects1.length = 0;

gdjs.Map1Code.GDZombieObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Map1Code.GDDogObjects1_1final.length = 0;
gdjs.Map1Code.GDPlayerObjects1_1final.length = 0;
gdjs.Map1Code.GDZombieObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Map1Code.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDPlayerObjects1_1final.indexOf(gdjs.Map1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Map1Code.GDPlayerObjects1_1final.push(gdjs.Map1Code.GDPlayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Map1Code.GDZombieObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDZombieObjects1_1final.indexOf(gdjs.Map1Code.GDZombieObjects2[j]) === -1 )
            gdjs.Map1Code.GDZombieObjects1_1final.push(gdjs.Map1Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Map1Code.GDDogObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDDogObjects1_1final.indexOf(gdjs.Map1Code.GDDogObjects2[j]) === -1 )
            gdjs.Map1Code.GDDogObjects1_1final.push(gdjs.Map1Code.GDDogObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Map1Code.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDPlayerObjects1_1final.indexOf(gdjs.Map1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Map1Code.GDPlayerObjects1_1final.push(gdjs.Map1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Map1Code.GDDogObjects1_1final, gdjs.Map1Code.GDDogObjects1);
gdjs.copyArray(gdjs.Map1Code.GDPlayerObjects1_1final, gdjs.Map1Code.GDPlayerObjects1);
gdjs.copyArray(gdjs.Map1Code.GDZombieObjects1_1final, gdjs.Map1Code.GDZombieObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Map1Code.GDHealthObjects1);
/* Reuse gdjs.Map1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("Health").Hit(1, true, true, null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDHealthObjects1[i].getBehavior("FlashEffect").Flash(0.5, "Effect", null);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDPlayerObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}

{ //Subevents
gdjs.Map1Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.Map1Code.GDDogObjects1.length = 0;

gdjs.Map1Code.GDPlayerObjects1.length = 0;

gdjs.Map1Code.GDZombieObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Map1Code.GDDogObjects1_1final.length = 0;
gdjs.Map1Code.GDPlayerObjects1_1final.length = 0;
gdjs.Map1Code.GDZombieObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Dog"), gdjs.Map1Code.GDDogObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDDogObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Map1Code.GDDogObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDDogObjects1_1final.indexOf(gdjs.Map1Code.GDDogObjects2[j]) === -1 )
            gdjs.Map1Code.GDDogObjects1_1final.push(gdjs.Map1Code.GDDogObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Map1Code.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDPlayerObjects1_1final.indexOf(gdjs.Map1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Map1Code.GDPlayerObjects1_1final.push(gdjs.Map1Code.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Zombie"), gdjs.Map1Code.GDZombieObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects2Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDZombieObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Map1Code.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDPlayerObjects1_1final.indexOf(gdjs.Map1Code.GDPlayerObjects2[j]) === -1 )
            gdjs.Map1Code.GDPlayerObjects1_1final.push(gdjs.Map1Code.GDPlayerObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Map1Code.GDZombieObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Map1Code.GDZombieObjects1_1final.indexOf(gdjs.Map1Code.GDZombieObjects2[j]) === -1 )
            gdjs.Map1Code.GDZombieObjects1_1final.push(gdjs.Map1Code.GDZombieObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Map1Code.GDDogObjects1_1final, gdjs.Map1Code.GDDogObjects1);
gdjs.copyArray(gdjs.Map1Code.GDPlayerObjects1_1final, gdjs.Map1Code.GDPlayerObjects1);
gdjs.copyArray(gdjs.Map1Code.GDZombieObjects1_1final, gdjs.Map1Code.GDZombieObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18842268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "853660__k27k_mike__mc-hurt-1.wav", false, 70, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Health"), gdjs.Map1Code.GDHealthObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthBar"), gdjs.Map1Code.GDHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("HealthText"), gdjs.Map1Code.GDHealthTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Map1Code.GDHealthObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDHealthObjects1[i].getBehavior("Tween").addObjectWidthTween2("Health", (( gdjs.Map1Code.GDHealthBarObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDHealthBarObjects1[0].getWidth()) * (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getBehavior("Health").Health(null)) / (( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getBehavior("Health").MaxHealth(null)), "linear", 0.15, false);
}
}
{for(var i = 0, len = gdjs.Map1Code.GDHealthTextObjects1.length ;i < len;++i) {
    gdjs.Map1Code.GDHealthTextObjects1[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString((( gdjs.Map1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Map1Code.GDPlayerObjects1[0].getBehavior("Health").Health(null))), 0, 4));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ghost"), gdjs.Map1Code.GDGhostObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Map1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDPlayerObjects1Objects, gdjs.Map1Code.mapOfGDgdjs_9546Map1Code_9546GDGhostObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}
}

}


};

gdjs.Map1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Map1Code.GDPlayerObjects1.length = 0;
gdjs.Map1Code.GDPlayerObjects2.length = 0;
gdjs.Map1Code.GDPlayerObjects3.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects1.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects2.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects3.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Map1Code.GDBullet1Objects1.length = 0;
gdjs.Map1Code.GDBullet1Objects2.length = 0;
gdjs.Map1Code.GDBullet1Objects3.length = 0;
gdjs.Map1Code.GDZombieObjects1.length = 0;
gdjs.Map1Code.GDZombieObjects2.length = 0;
gdjs.Map1Code.GDZombieObjects3.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects1.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects2.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects3.length = 0;
gdjs.Map1Code.GDHealthBarObjects1.length = 0;
gdjs.Map1Code.GDHealthBarObjects2.length = 0;
gdjs.Map1Code.GDHealthBarObjects3.length = 0;
gdjs.Map1Code.GDHealthObjects1.length = 0;
gdjs.Map1Code.GDHealthObjects2.length = 0;
gdjs.Map1Code.GDHealthObjects3.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects1.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects2.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects3.length = 0;
gdjs.Map1Code.GDStaminaBarObjects1.length = 0;
gdjs.Map1Code.GDStaminaBarObjects2.length = 0;
gdjs.Map1Code.GDStaminaBarObjects3.length = 0;
gdjs.Map1Code.GDStaminaTextObjects1.length = 0;
gdjs.Map1Code.GDStaminaTextObjects2.length = 0;
gdjs.Map1Code.GDStaminaTextObjects3.length = 0;
gdjs.Map1Code.GDHealthTextObjects1.length = 0;
gdjs.Map1Code.GDHealthTextObjects2.length = 0;
gdjs.Map1Code.GDHealthTextObjects3.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects1.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects2.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects3.length = 0;
gdjs.Map1Code.GDDogObjects1.length = 0;
gdjs.Map1Code.GDDogObjects2.length = 0;
gdjs.Map1Code.GDDogObjects3.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects1.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects2.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects3.length = 0;
gdjs.Map1Code.GDFogOfWarObjects1.length = 0;
gdjs.Map1Code.GDFogOfWarObjects2.length = 0;
gdjs.Map1Code.GDFogOfWarObjects3.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects1.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects2.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects3.length = 0;
gdjs.Map1Code.GDGunSpriteObjects1.length = 0;
gdjs.Map1Code.GDGunSpriteObjects2.length = 0;
gdjs.Map1Code.GDGunSpriteObjects3.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects1.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects2.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects3.length = 0;
gdjs.Map1Code.GDAmmoIconObjects1.length = 0;
gdjs.Map1Code.GDAmmoIconObjects2.length = 0;
gdjs.Map1Code.GDAmmoIconObjects3.length = 0;
gdjs.Map1Code.GDGhostObjects1.length = 0;
gdjs.Map1Code.GDGhostObjects2.length = 0;
gdjs.Map1Code.GDGhostObjects3.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects1.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects2.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects3.length = 0;

gdjs.Map1Code.eventsList11(runtimeScene);
gdjs.Map1Code.GDPlayerObjects1.length = 0;
gdjs.Map1Code.GDPlayerObjects2.length = 0;
gdjs.Map1Code.GDPlayerObjects3.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects1.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects2.length = 0;
gdjs.Map1Code.GDGround_9595TilemapObjects3.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects1.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects2.length = 0;
gdjs.Map1Code.GDWall_9595ObstacleObjects3.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects1.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects2.length = 0;
gdjs.Map1Code.GDPlant_9595ObstacleObjects3.length = 0;
gdjs.Map1Code.GDBullet1Objects1.length = 0;
gdjs.Map1Code.GDBullet1Objects2.length = 0;
gdjs.Map1Code.GDBullet1Objects3.length = 0;
gdjs.Map1Code.GDZombieObjects1.length = 0;
gdjs.Map1Code.GDZombieObjects2.length = 0;
gdjs.Map1Code.GDZombieObjects3.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects1.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects2.length = 0;
gdjs.Map1Code.GDZombieSpawnZoneObjects3.length = 0;
gdjs.Map1Code.GDHealthBarObjects1.length = 0;
gdjs.Map1Code.GDHealthBarObjects2.length = 0;
gdjs.Map1Code.GDHealthBarObjects3.length = 0;
gdjs.Map1Code.GDHealthObjects1.length = 0;
gdjs.Map1Code.GDHealthObjects2.length = 0;
gdjs.Map1Code.GDHealthObjects3.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects1.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects2.length = 0;
gdjs.Map1Code.GDStaminaBarOLObjects3.length = 0;
gdjs.Map1Code.GDStaminaBarObjects1.length = 0;
gdjs.Map1Code.GDStaminaBarObjects2.length = 0;
gdjs.Map1Code.GDStaminaBarObjects3.length = 0;
gdjs.Map1Code.GDStaminaTextObjects1.length = 0;
gdjs.Map1Code.GDStaminaTextObjects2.length = 0;
gdjs.Map1Code.GDStaminaTextObjects3.length = 0;
gdjs.Map1Code.GDHealthTextObjects1.length = 0;
gdjs.Map1Code.GDHealthTextObjects2.length = 0;
gdjs.Map1Code.GDHealthTextObjects3.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects1.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects2.length = 0;
gdjs.Map1Code.GDSurviveTimeObjects3.length = 0;
gdjs.Map1Code.GDDogObjects1.length = 0;
gdjs.Map1Code.GDDogObjects2.length = 0;
gdjs.Map1Code.GDDogObjects3.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects1.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects2.length = 0;
gdjs.Map1Code.GDDogSpawnZoneObjects3.length = 0;
gdjs.Map1Code.GDFogOfWarObjects1.length = 0;
gdjs.Map1Code.GDFogOfWarObjects2.length = 0;
gdjs.Map1Code.GDFogOfWarObjects3.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects1.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects2.length = 0;
gdjs.Map1Code.GDWall_9595Obstacle2Objects3.length = 0;
gdjs.Map1Code.GDGunSpriteObjects1.length = 0;
gdjs.Map1Code.GDGunSpriteObjects2.length = 0;
gdjs.Map1Code.GDGunSpriteObjects3.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects1.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects2.length = 0;
gdjs.Map1Code.GDAmmoTxtObjects3.length = 0;
gdjs.Map1Code.GDAmmoIconObjects1.length = 0;
gdjs.Map1Code.GDAmmoIconObjects2.length = 0;
gdjs.Map1Code.GDAmmoIconObjects3.length = 0;
gdjs.Map1Code.GDGhostObjects1.length = 0;
gdjs.Map1Code.GDGhostObjects2.length = 0;
gdjs.Map1Code.GDGhostObjects3.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects1.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects2.length = 0;
gdjs.Map1Code.GDBestSurviveTimeObjects3.length = 0;


return;

}

gdjs['Map1Code'] = gdjs.Map1Code;
