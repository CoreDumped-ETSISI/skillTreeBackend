'use strict';

const mongoose = require('mongoose');
const experienceTable = require("./expTable")
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user: {
        "name": String,
        "totalExp": Number,
        "email": String,
        "password": String,
        "level": Number,
        "isAdmin": Boolean
    },
    modules: [{
            "name": "Basic",
            "experience": 0,
            "requires": [],
            "children": [{
                    "name": "unixConsole",
                    "completed": false,
                    "exp": experienceTable.unixConsoleExp,
                    "requires": []
                },
                {
                    "name": "structProgramFund",
                    "completed": false,
                    "exp": experienceTable.structProgramFundExp,
                    "requires": []
                },
                {
                    "name": "functionsAndMethods",
                    "completed": false,
                    "exp": experienceTable.functionsAndMethodsExp,
                    "requires": ["structProgramFund"]
                },
                {
                    "name": "dataStructures",
                    "completed": false,
                    "exp": experienceTable.dataStructuresExp,
                    "requires": ["functionsAndMethods"]
                },
                {
                    "name": "recursivity",
                    "completed": false,
                    "exp": experienceTable.recursivityExp,
                    "requires": ["functionsAndMethods"]
                },
                {
                    "name": "generalAlgorythms",
                    "completed": false,
                    "exp": experienceTable.generalAlgorythmsExp,
                    "requires": ["dataStructures", "recursivity"]
                },
                {
                    "name": "OOP",
                    "completed": false,
                    "exp": experienceTable.OOPExp,
                    "requires": ["dataStructures"]
                },
                {
                    "name": "MVCpattern",
                    "completed": false,
                    "exp": experienceTable.MVCpatternExp,
                    "requires": ["OOP"]
                },
                {
                    "name": "interfaces",
                    "completed": false,
                    "exp": experienceTable.interfacesExp,
                    "requires": ["OOP"]
                }
            ]
        },
        {
            "name": "interfaces",
            "experience": 0,
            "requires": ["basic"],
            "children": [
                {
                    "name": "databases",
                    "completed": false,
                    "exp": experienceTable.databasesExp,
                    "requires": []
                },
                {
                    "name": "relationalDDBB",
                    "completed": false,
                    "exp": experienceTable.relationalDDBBExp,
                    "requires": ["databases"]
                },
                {
                    "name": "SQL",
                    "completed": false,
                    "exp": experienceTable.SQLExp,
                    "requires": ["relationalDDBB"]
                },
                {
                    "name": "nonRelationalDDBB",
                    "completed": false,
                    "exp": experienceTable.nonRelationalDDBBExp,
                    "requires": ["databases"]
                },
                {
                    "name": "mongoDB",
                    "completed": false,
                    "exp": experienceTable.mongoDBExp,
                    "requires": ["nonRelationalDDBB"]
                }
            ]
        },
        {
            "name": "graphicDesign",
            "experience": 0,
            "requires": ["web.graphDesignFund", "basic"],
            "children": [
                {
                    "name": "graphDesignPatters",
                    "completed": false,
                    "exp": experienceTable.graphDesignPattersExp,
                    "requires": []
                },
                {
                    "name": "animation",
                    "completed": false,
                    "exp": experienceTable.animationExp,
                    "requires": []
                },
                {
                    "name": "typographies",
                    "completed": false,
                    "exp": experienceTable.typographiesExp,
                    "requires": []
                },
                {
                    "name": "rasterImages",
                    "completed": false,
                    "exp": experienceTable.rasterImagesExp,
                    "requires": []
                },
                {
                    "name": "vectorialDrawing",
                    "completed": false,
                    "exp": experienceTable.vectorialDrawingExp,
                    "requires": []
                },
                {
                    "name": "digitalMedia",
                    "completed": false,
                    "exp": experienceTable.digitalMediaExp,
                    "requires": []
                },
                {
                    "name": "colorTheory",
                    "completed": false,
                    "exp": experienceTable.colorTheoryExp,
                    "requires": []
                }
            ]
        },
        {
            "name": "IOT",
            "experience": 0,
            "requires": ["basic"],
            "children": [
                {
                    "name": "arduinoFund",
                    "completed": false,
                    "exp": experienceTable.arduinoFundExp,
                    "requires": []
                },
                {
                    "name": "sensoring",
                    "completed": false,
                    "exp": experienceTable.sensoringExp,
                    "requires": ["arduinoFund"]
                },
                {
                    "name": "welding",
                    "completed": false,
                    "exp": experienceTable.weldingExp,
                    "requires": ["arduinoFund"]
                },
                {
                    "name": "raspBerries",
                    "completed": false,
                    "exp": experienceTable.raspBerriesExp,
                    "requires": ["welding", "sensoring"]
                }
            ]
        },
        {
            "name": "AI",
            "experience": 0,
            "requires": ["basic"],
            "children": [
                {
                    "name": "Julia",
                    "completed": false,
                    "exp": experienceTable.JuliaExp,
                    "requires": []
                },
                {
                    "name": "PythonFund",
                    "completed": false,
                    "exp": experienceTable.PythonFundExp,
                    "requires": []
                },
                {
                    "name": "supervisedAlgorythms",
                    "completed": false,
                    "exp": experienceTable.supervisedAlgorythmsExp,
                    "requires": []
                },
                {
                    "name": "unsupervisedAlgorythms",
                    "completed": false,
                    "exp": experienceTable.unsupervisedAlgorythmsExp,
                    "requires": []
                },
                {
                    "name": "geneticalAlgorythms",
                    "completed": false,
                    "exp": experienceTable.geneticalAlgorythmsExp,
                    "requires": []
                },
                {
                    "name": "machineLearning",
                    "completed": false,
                    "exp": experienceTable.machineLearningExp,
                    "requires": []
                },
                {
                    "name": "deepLearning",
                    "completed": false,
                    "exp": experienceTable.deepLearningExp,
                    "requires": []
                }
            ]
        },
        {
            "name": "REST",
            "experience": 0,
            "requires": ["DDBB", "mobile.mobileDevREST"],
            "children": [
                {
                    "name": "RESTservices",
                    "completed": false,
                    "exp": experienceTable.RESTservicesExp,
                    "requires": []
                },
                {
                    "name": "firebase",
                    "completed": false,
                    "exp": experienceTable.firebaseExp,
                    "requires": ["RESTservices"]
                },
                {
                    "name": "controllers",
                    "completed": false,
                    "exp": experienceTable.controllersExp,
                    "requires": ["RESTservices"]
                },
                {
                    "name": "models",
                    "completed": false,
                    "exp": experienceTable.modelsExp,
                    "requires": ["RESTservices"]
                },
                {
                    "name": "routes",
                    "completed": false,
                    "exp": experienceTable.routesExp,
                    "requires": ["RESTservices"]
                }
            ]
        },
        {
            "name": "blockchain",
            "experience": 0,
            "requires": ["REST"],
            "children": [
                {
                    "name": "bitcoin",
                    "completed": false,
                    "exp": experienceTable.bitcoinExp,
                    "requires": []
                },
                {
                    "name": "smartContracts",
                    "completed": false,
                    "exp": experienceTable.smartContractsExp,
                    "requires": ["bitcoin"]
                },
                {
                    "name": "Solidity",
                    "completed": false,
                    "exp": experienceTable.SolidityExp,
                    "requires": ["smartContracts"]
                },
                {
                    "name": "Hyperledger",
                    "completed": false,
                    "exp": experienceTable.HyperledgerExp,
                    "requires": ["smartContracts"]
                },
                {
                    "name": "dapps",
                    "completed": false,
                    "exp": experienceTable.dappsExp,
                    "requires": ["solidity", "hyperledger"]
                }
            ]
        },
        {
            "name": "mobile",
            "experience": 0,
            "requires": ["basic", "REST.firebase"],
            "children": [
                {
                    "name": "mobileAppDev",
                    "completed": false,
                    "exp": experienceTable.mobileAppDevExp,
                    "requires": []
                },
                {
                    "name": "androidDev",
                    "completed": false,
                    "exp": experienceTable.androidDevExp,
                    "requires": ["mobileAppDev"]
                },
                {
                    "name": "iosDev",
                    "completed": false,
                    "exp": experienceTable.iosDevExp,
                    "requires": ["mobileAppDev"]
                },
                {
                    "name": "androidDevXML",
                    "completed": false,
                    "exp": experienceTable.androidDevXMLExp,
                    "requires": ["androidDev"]
                },
                {
                    "name": "androidDevKotlin",
                    "completed": false,
                    "exp": experienceTable.androidDevKotlinExp,
                    "requires": ["androidDev"]
                },
                {
                    "name": "androidDevJava",
                    "completed": false,
                    "exp": experienceTable.androidDevJavaExp,
                    "requires": ["androidDev"]
                },
                {
                    "name": "iosDevSwift",
                    "completed": false,
                    "exp": experienceTable.iosDevSwiftExp,
                    "requires": ["iosDev"]
                },
                {
                    "name": "mobileDevLibraries",
                    "completed": false,
                    "exp": experienceTable.mobileDevLibrariesExp,
                    "requires": ["androidDevKotlin", "andoridDevJava", "iosDevSwift"]
                },
                {
                    "name": "mobileDevREST",
                    "completed": false,
                    "exp": experienceTable.mobileDevRESTExp,
                    "requires": ["androidDevKotlin","andoridDevJava", "iosDevSwift"]
                }
            ]
        },
        {
            "name": "web",
            "completed": false,
            "experience": 0,
            "requires": ["basic"],
                "children": [
                    {
                        "name": "webDev",
                        "completed": false,
                        "experience": experienceTable.webDevExp,
                        "requires": []
                        },
                    {
                        "name": "HTML",
                        "completed": false,
                        "experience": experienceTable.HTMLExp,
                        "requires": ["webDev"]
                    },
                    {
                        "name": "CSS",
                        "completed": false,
                        "experience": experienceTable.CSSExp,
                        "requires": ["webDev"]
                    },
                    {
                        "name": "JavaScript",
                        "completed": false,
                        "experience": experienceTable.javaScriptExp,
                        "requires": ["webDev"]
                    },
                    {
                        "name": "graphicDesignFund",
                        "completed": false,
                        "experience": experienceTable.graphicDesignFundExp,
                        "requires": ["CSS"]
                    },
                    {
                        "name": "AngularJS",
                        "completed": false,
                        "experience": experienceTable.angularJSExp,
                        "requires": ["javaScript"]
                    },
                    {
                        "name": "VueJs",
                        "completed": false,
                        "experience": experienceTable.vueJsExp,
                        "requires": ["angularJS"]
                    },
                    {
                        "name": "ionicJS",
                        "completed": false,
                        "experience": experienceTable.ionicJSExp,
                        "requires": ["angularJS"]
                    },
                    {
                        "name": "React",
                        "completed": false,
                        "experience": experienceTable.reactExp,
                        "requires": ["angularJS"]
                    },
                    {
                        "name": "NodeJSFund",
                        "completed": false,
                        "experience": experienceTable.nodeJSFundExp,
                        "requires": ["javaScript"]
                    }
        
                ]
        },
        {
            "name": "videogames",
            "completed": false,
            "experience": 0,
            "requires": ["basic"],
                "children": [
                    {
                        "name": "interfaceUnity",
                        "completed": false,
                        "experience": experienceTable.interfaceUnityExp,
                        "requires": []
                    },
                    {
                        "name": "objectUnity",
                        "completed": false,
                        "experience": experienceTable.objectUnityExp,
                        "requires": ["interfaceUnity"]
                    },
                    {
                        "name": "gameObjProp",
                        "completed":false,
                        "experience": experienceTable.gameObjPropExp, 
                        "requires": ["objectUnity"]
                    },
                    {
                        "name": "scriptingUnity",
                        "completed": false,
                        "experience": experienceTable.scriptingUnityExp,
                        "requires": ["objectUnity"]
                    }
                ]
        },
        {
            "name": "networking",
            "completed": false,
            "experience": 0,
            "requires": ["IOT"],
                "children": [
                    {
                        "name": "TCP_IP",
                        "completed": false,
                        "experience": experienceTable.TCP_IPExp,
                        "requires": []
                    },
                    {
                        "name": "TCP_UDP",
                        "completed": false,
                        "experience": experienceTable.TCP_UDPExp,
                        "requires": ["TCP/IP"]
                    },
                    {
                        "name": "SSH",
                        "completed": false,
                        "experience": experienceTable.SSHExp,
                        "requires": ["TCP/IP"]
                    },
                    {
                        "name": "FTP",
                        "completed": false,
                        "experience": experienceTable.FTPExp,
                        "requires": ["SSH"]
                    }
                ] 
        }
    }
})

module.exports = mongoose.model('User', UserSchema);