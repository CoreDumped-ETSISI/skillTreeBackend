'use strict';

const mongoose = require('mongoose');
const experienceTable = require("./expTable")
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user: {
        name: String,
        totalExp: Number,
        email: String,
        password: String,
        level: Number,
        isAdmin: Boolean
    },
    modules: [{
            name: "basic",
            exp: 0,
            needsCompleted: [],
            children: [{
                    name: "unixConsole",
                    completed: false,
                    exp: experienceTable.unixConsoleExp,
                    needsCompleted: []
                },
                {
                    name: "structProgramFund",
                    completed: false,
                    exp: experienceTable.structProgramFundExp,
                    needsCompleted: []
                },
                {
                    name: "functionsAndMethods",
                    completed: false,
                    exp: experienceTable.functionsAndMethodsExp,
                    needsCompleted: ["structProgramFund"]
                },
                {
                    name: "dataStructures",
                    completed: false,
                    exp: experienceTable.dataStructuresExp,
                    needsCompleted: ["functionsAndMethods"]
                },
                {
                    name: "recursivity",
                    completed: false,
                    exp: experienceTable.recursivityExp,
                    needsCompleted: ["functionsAndMethods"]
                },
                {
                    name: "generalAlgorythms",
                    completed: false,
                    exp: experienceTable.generalAlgorythmsExp,
                    needsCompleted: ["dataStructures", "recursivity"]
                },
                {
                    name: "OOP",
                    completed: false,
                    exp: experienceTable.OOPExp,
                    needsCompleted: ["dataStructures"]
                },
                {
                    name: "MVCpattern",
                    completed: false,
                    exp: experienceTable.MVCpatternExp,
                    needsCompleted: ["OOP"]
                },
                {
                    name: "interfaces",
                    completed: false,
                    exp: experienceTable.interfacesExp,
                    needsCompleted: ["OOP"]
                }
            ]
        },
        {
            name: "interfaces",
            exp: 0,
            needsCompleted: ["basic"],
            children: [
                {
                    name: "databases",
                    completed: false,
                    exp: experienceTable.databasesExp,
                    needsCompleted: []
                },
                {
                    name: "relationalDDBB",
                    completed: false,
                    exp: experienceTable.relationalDDBBExp,
                    needsCompleted: ["databases"]
                },
                {
                    name: "SQL",
                    completed: false,
                    exp: experienceTable.SQLExp,
                    needsCompleted: ["relationalDDBB"]
                },
                {
                    name: "nonRelationalDDBB",
                    completed: false,
                    exp: experienceTable.nonRelationalDDBBExp,
                    needsCompleted: ["databases"]
                },
                {
                    name: "mongoDB",
                    completed: false,
                    exp: experienceTable.mongoDBExp,
                    needsCompleted: ["nonRelationalDDBB"]
                }
            ]
        },
        {
            name: "graphicDesign",
            exp: 0,
            needsCompleted: ["graphDesignFund", "basic"],
            children: [
                {
                    name: "graphDesignPatters",
                    completed: false,
                    exp: experienceTable.graphDesignPattersExp,
                    needsCompleted: []
                },
                {
                    name: "animation",
                    completed: false,
                    exp: experienceTable.animationExp,
                    needsCompleted: []
                },
                {
                    name: "typographies",
                    completed: false,
                    exp: experienceTable.typographiesExp,
                    needsCompleted: []
                },
                {
                    name: "rasterImages",
                    completed: false,
                    exp: experienceTable.rasterImagesExp,
                    needsCompleted: []
                },
                {
                    name: "vectorialDrawing",
                    completed: false,
                    exp: experienceTable.vectorialDrawingExp,
                    needsCompleted: []
                },
                {
                    name: "digitalMedia",
                    completed: false,
                    exp: experienceTable.digitalMediaExp,
                    needsCompleted: []
                },
                {
                    name: "colorTheory",
                    completed: false,
                    exp: experienceTable.colorTheoryExp,
                    needsCompleted: []
                }
            ]
        },
        {
            name: "IOT",
            exp: 0,
            needsCompleted: ["basic"],
            children: [
                {
                    name: "arduinoFund",
                    completed: false,
                    exp: experienceTable.arduinoFundExp,
                    needsCompleted: []
                },
                {
                    name: "sensoring",
                    completed: false,
                    exp: experienceTable.sensoringExp,
                    needsCompleted: ["arduinoFund"]
                },
                {
                    name: "welding",
                    completed: false,
                    exp: experienceTable.weldingExp,
                    needsCompleted: ["arduinoFund"]
                },
                {
                    name: "raspBerries",
                    completed: false,
                    exp: experienceTable.raspBerriesExp,
                    needsCompleted: ["welding", "sensoring"]
                }
            ]
        },
        {
            name: "AI",
            exp: 0,
            needsCompleted: ["basic"],
            children: [
                {
                    name: "Julia",
                    completed: false,
                    exp: experienceTable.JuliaExp,
                    needsCompleted: []
                },
                {
                    name: "PythonFund",
                    completed: false,
                    exp: experienceTable.PythonFundExp,
                    needsCompleted: []
                },
                {
                    name: "supervisedAlgorythms",
                    completed: false,
                    exp: experienceTable.supervisedAlgorythmsExp,
                    needsCompleted: []
                },
                {
                    name: "unsupervisedAlgorythms",
                    completed: false,
                    exp: experienceTable.unsupervisedAlgorythmsExp,
                    needsCompleted: []
                },
                {
                    name: "geneticalAlgorythms",
                    completed: false,
                    exp: experienceTable.geneticalAlgorythmsExp,
                    needsCompleted: []
                },
                {
                    name: "machineLearning",
                    completed: false,
                    exp: experienceTable.machineLearningExp,
                    needsCompleted: []
                },
                {
                    name: "deepLearning",
                    completed: false,
                    exp: experienceTable.deepLearningExp,
                    needsCompleted: []
                }
            ]
        },
        {
            name: "REST",
            exp: 0,
            needsCompleted: ["DDBB", "mobileDevREST"],
            children: [
                {
                    name: "RESTservices",
                    completed: false,
                    exp: experienceTable.RESTservicesExp,
                    needsCompleted: []
                },
                {
                    name: "firebase",
                    completed: false,
                    exp: experienceTable.firebaseExp,
                    needsCompleted: ["RESTservices"]
                },
                {
                    name: "controllers",
                    completed: false,
                    exp: experienceTable.controllersExp,
                    needsCompleted: ["RESTservices"]
                },
                {
                    name: "models",
                    completed: false,
                    exp: experienceTable.modelsExp,
                    needsCompleted: ["RESTservices"]
                },
                {
                    name: "routes",
                    completed: false,
                    exp: experienceTable.routesExp,
                    needsCompleted: ["RESTservices"]
                }
            ]
        },
        {
            name: "blockchain",
            exp: 0,
            needsCompleted: ["REST"],
            children: [
                {
                    name: "bitcoin",
                    completed: false,
                    exp: experienceTable.bitcoinExp,
                    needsCompleted: []
                },
                {
                    name: "smartContracts",
                    completed: false,
                    exp: experienceTable.smartContractsExp,
                    needsCompleted: ["bitcoin"]
                },
                {
                    name: "Solidity",
                    completed: false,
                    exp: experienceTable.SolidityExp,
                    needsCompleted: ["smartContracts"]
                },
                {
                    name: "Hyperledger",
                    completed: false,
                    exp: experienceTable.HyperledgerExp,
                    needsCompleted: ["smartContracts"]
                },
                {
                    name: "dapps",
                    completed: false,
                    exp: experienceTable.dappsExp,
                    needsCompleted: ["solidity", "hyperledger"]
                }
            ]
        },
        {
            name: "mobile",
            exp: 0,
            needsCompleted: ["basic", "firebase"],
            children: [
                {
                    name: "mobileAppDev",
                    completed: false,
                    exp: experienceTable.mobileAppDevExp,
                    needsCompleted: []
                },
                {
                    name: "androidDev",
                    completed: false,
                    exp: experienceTable.androidDevExp,
                    needsCompleted: ["mobileAppDev"]
                },
                {
                    name: "iosDev",
                    completed: false,
                    exp: experienceTable.iosDevExp,
                    needsCompleted: ["mobileAppDev"]
                },
                {
                    name: "androidDevXML",
                    completed: false,
                    exp: experienceTable.androidDevXMLExp,
                    needsCompleted: ["androidDev"]
                },
                {
                    name: "androidDevKotlin",
                    completed: false,
                    exp: experienceTable.androidDevKotlinExp,
                    needsCompleted: ["androidDev"]
                },
                {
                    name: "androidDevJava",
                    completed: false,
                    exp: experienceTable.androidDevJavaExp,
                    needsCompleted: ["androidDev"]
                },
                {
                    name: "iosDevSwift",
                    completed: false,
                    exp: experienceTable.iosDevSwiftExp,
                    needsCompleted: ["iosDev"]
                },
                {
                    name: "mobileDevLibraries",
                    completed: false,
                    exp: experienceTable.mobileDevLibrariesExp,
                    needsCompleted: ["androidDevKotlin", "andoridDevJava", "iosDevSwift"]
                },
                {
                    name: "mobileDevREST",
                    completed: false,
                    exp: experienceTable.mobileDevRESTExp,
                    needsCompleted: ["androidDevKotlin","andoridDevJava", "iosDevSwift"]
                }
            ]
        },
        {
            name: "web",
            completed: false,
            exp: 0,
            needsCompleted: ["basic"],
                children: [
                    {
                        name: "webDev",
                        completed: false,
                        exp: experienceTable.webDevExp,
                        needsCompleted: []
                        },
                    {
                        name: "HTML",
                        completed: false,
                        exp: experienceTable.HTMLExp,
                        needsCompleted: ["webDev"]
                    },
                    {
                        name: "CSS",
                        completed: false,
                        exp: experienceTable.CSSExp,
                        needsCompleted: ["webDev"]
                    },
                    {
                        name: "JavaScript",
                        completed: false,
                        exp: experienceTable.javaScriptExp,
                        needsCompleted: ["webDev"]
                    },
                    {
                        name: "graphicDesignFund",
                        completed: false,
                        exp: experienceTable.graphicDesignFundExp,
                        needsCompleted: ["CSS"]
                    },
                    {
                        name: "AngularJS",
                        completed: false,
                        exp: experienceTable.angularJSExp,
                        needsCompleted: ["javaScript"]
                    },
                    {
                        name: "VueJs",
                        completed: false,
                        exp: experienceTable.vueJsExp,
                        needsCompleted: ["angularJS"]
                    },
                    {
                        name: "ionicJS",
                        completed: false,
                        exp: experienceTable.ionicJSExp,
                        needsCompleted: ["angularJS"]
                    },
                    {
                        name: "React",
                        completed: false,
                        exp: experienceTable.reactExp,
                        needsCompleted: ["angularJS"]
                    },
                    {
                        name: "NodeJSFund",
                        completed: false,
                        exp: experienceTable.nodeJSFundExp,
                        needsCompleted: ["javaScript"]
                    }
        
                ]
        },
        {
            name: "videogames",
            completed: false,
            exp: 0,
            needsCompleted: ["basic"],
                children: [
                    {
                        name: "interfaceUnity",
                        completed: false,
                        exp: experienceTable.interfaceUnityExp,
                        needsCompleted: []
                    },
                    {
                        name: "objectUnity",
                        completed: false,
                        exp: experienceTable.objectUnityExp,
                        needsCompleted: ["interfaceUnity"]
                    },
                    {
                        name: "gameObjProp",
                        completed:false,
                        exp: experienceTable.gameObjPropExp, 
                        needsCompleted: ["objectUnity"]
                    },
                    {
                        name: "scriptingUnity",
                        completed: false,
                        exp: experienceTable.scriptingUnityExp,
                        needsCompleted: ["objectUnity"]
                    }
                ]
        },
        {
            name: "networking",
            completed: false,
            exp: 0,
            needsCompleted: ["IOT"],
                children: [
                    {
                        name: "TCP_IP",
                        completed: false,
                        exp: experienceTable.TCP_IPExp,
                        needsCompleted: []
                    },
                    {
                        name: "TCP_UDP",
                        completed: false,
                        exp: experienceTable.TCP_UDPExp,
                        needsCompleted: ["TCP_IP"]
                    },
                    {
                        name: "SSH",
                        completed: false,
                        exp: experienceTable.SSHExp,
                        needsCompleted: ["TCP_IP"]
                    },
                    {
                        name: "FTP",
                        completed: false,
                        exp: experienceTable.FTPExp,
                        needsCompleted: ["TCP_IP", "SSH"]
                    }
                ] 
        }
    ]
})

module.exports = mongoose.model('User', UserSchema);