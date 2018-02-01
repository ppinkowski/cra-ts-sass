@echo off
SET configdir=%~dp0config
create-react-app %1 & ^
cd %1 & ^
npm i ^
@types/react ^
@types/react-dom ^
awesome-typescript-loader ^
css-loader ^
extract-text-webpack-plugin ^
node-sass ^
react-app-rewired ^
sass-loader ^
style-loader ^
tslint ^
tslint-loader ^
tslint-react ^
typescript --save-dev & ^
npm i react-scripts@next & ^
mkdir config & ^
copy %configdir%\webpack\ config & ^
copy %configdir%\ . & ^
node %~dp0replace.js & ^
echo Done!
