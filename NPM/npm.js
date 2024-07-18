// npm ---  NODE PACKAGE MANAGER
// place which collects modules that people have built for Node and
// it's created by github. It is a a great place to find code that 
// other people have written with utilities and tool to help you 
// with writing your Node applications 

//Initialize npm --- npm init

// Install npm packages --- npm install <Something>
// These packages are found in npm website
// Eg: npm i sillyname

// const sn = require('sillyname');
// console.log(sn());
import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';
console.log(generateName());
console.log(randomSuperhero());


