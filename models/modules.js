'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const experienceTable = require('./expTable')

const ModulesSchema = new Schema({
        name: {type:String, value:"basic"},
        exp: {type: Number, value: 0},
        needsCompleted: [],
        children: [{
                name: {type: String, value: "unixConsole"},
                completed: false,
                exp: {type: Number, value: experienceTable.unixConsoleExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "structProgramFund"},
                completed: false,
                exp: {type: Number, value: experienceTable.structProgramFundExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "functionsAndMethods"},
                completed: false,
                exp: {type: Number, value: experienceTable.functionsAndMethodsExp},
                needsCompleted: ["structProgramFund"]
            },
            {
                name: {type: String, value: "dataStructures"},
                completed: false,
                exp: {type: Number, value: experienceTable.dataStructuresExp},
                needsCompleted: ["functionsAndMethods"]
            },
            {
                name: {type: String, value: "recursivity"},
                completed: false,
                exp: {type: Number, value: experienceTable.recursivityExp},
                needsCompleted: ["functionsAndMethods"]
            },
            {
                name: {type: String, value: "generalAlgorythms"},
                completed: false,
                exp: {type: Number, value: experienceTable.generalAlgorythmsExp},
                needsCompleted: ["dataStructures", "recursivity"]
            },
            {
                name: {type: String, value: "OOP"},
                completed: false,
                exp: {type: Number, value: experienceTable.OOPExp},
                needsCompleted: ["dataStructures"]
            },
            {
                name: {type: String, value: "MVCpattern"},
                completed: false,
                exp: {type: Number, value: experienceTable.MVCpatternExp},
                needsCompleted: ["OOP"]
            },
            {
                name: {type: String, value: "interfaces"},
                completed: false,
                exp: {type: Number, value: experienceTable.interfacesExp},
                needsCompleted: ["OOP"]
            }
        ]
    },
    {
        name: {type: String, value: "interfaces"},
        exp: {type: Number, value: 0},
        needsCompleted: ["basic"],
        children: [
            {
                name: {type: String, value: "databases"},
                completed: false,
                exp: {type: Number, value: experienceTable.databasesExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "relationalDDBB"},
                completed: false,
                exp: {type: Number, value: experienceTable.relationalDDBBExp},
                needsCompleted: ["databases"]
            },
            {
                name: {type: String, value: "SQL"},
                completed: false,
                exp: {type: Number, value: experienceTable.SQLExp},
                needsCompleted: ["relationalDDBB"]
            },
            {
                name: {type: String, value: "nonRelationalDDBB"},
                completed: false,
                exp: {type: Number, value: experienceTable.nonRelationalDDBBExp},
                needsCompleted: ["databases"]
            },
            {
                name: {type: String, value: "mongoDB"},
                completed: false,
                exp: {type: Number, value: experienceTable.mongoDBExp},
                needsCompleted: ["nonRelationalDDBB"]
            }
        ]
    },
    {
        name: {type: String, value: "graphicDesign"},
        exp: {type: Number, value: 0}, 
        needsCompleted: ["graphDesignFund", "basic"],
        children: [
            {
                name: {type: String, value: "graphDesignPatters"},
                completed: false,
                exp: {type: Number, value: experienceTable.graphDesignPattersExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "animation"},
                completed: false,
                exp: {type: Number, value: experienceTable.animationExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "typographies"},
                completed: false,
                exp: {type: Number, value: experienceTable.typographiesExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "rasterImages"},
                completed: false,
                exp: {type: Number, value: experienceTable.rasterImagesExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "vectorialDrawing"},
                completed: false,
                exp: {type: Number, value: experienceTable.vectorialDrawingExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "digitalMedia"},
                completed: false,
                exp: {type: Number, value: experienceTable.digitalMediaExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "colorTheory"},
                completed: false,
                exp: {type: Number, value: experienceTable.colorTheoryExp},
                needsCompleted: []
            }
        ]
    },
    {
        name: {type: String, value: "IOT"},
        exp: {type: Number, value: 0},
        needsCompleted: ["basic"],
        children: [
            {
                name: {type: String, value: "arduinoFund"},
                completed: false,
                exp: {type: Number, value: experienceTable.arduinoFundExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "sensoring"},
                completed: false,
                exp: {type: Number, value: experienceTable.sensoringExp},
                needsCompleted: ["arduinoFund"]
            },
            {
                name: {type: String, value: "welding"},
                completed: false,
                exp: {type: Number, value: experienceTable.weldingExp},
                needsCompleted: ["arduinoFund"]
            },
            {
                name: {type: String, value: "raspBerries"},
                completed: false,
                exp: {type: Number, value: experienceTable.raspBerriesExp},
                needsCompleted: ["welding", "sensoring"]
            }
        ]
    },
    {
        name: {type: String, value: "AI"},
        exp: {type: Number, value: 0},
        needsCompleted: ["basic"],
        children: [
            {
                name: {type: String, value: "Julia"},
                completed: false,
                exp: {type: Number, value: experienceTable.JuliaExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "PythonFund"},
                completed: false,
                exp: {type: Number, value: experienceTable.PythonFundExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "supervisedAlgorythms"},
                completed: false,
                exp: {type: Number, value: experienceTable.supervisedAlgorythmsExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "unsupervisedAlgorythms"},
                completed: false,
                exp: {type: Number, value: experienceTable.unsupervisedAlgorythmsExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "geneticalAlgorythms"},
                completed: false,
                exp: {type: Number, value: experienceTable.geneticalAlgorythmsExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "machineLearning"},
                completed: false,
                exp: {type: Number, value: experienceTable.machineLearningExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "deepLearning"},
                completed: false,
                exp: {type: Number, value: experienceTable.deepLearningExp},
                needsCompleted: []
            }
        ]
    },
    {
        name: {type: String, value: "REST"},
        exp: {type: Number, value: 0},
        needsCompleted: ["DDBB", "mobileDevREST"],
        children: [
            {
                name: {type: String, value: "RESTservices"},
                completed: false,
                exp: {type: Number, value: experienceTable.RESTservicesExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "firebase"},
                completed: false,
                exp: {type: Number, value: experienceTable.firebaseExp},
                needsCompleted: ["RESTservices"]
            },
            {
                name: {type: String, value: "controllers"},
                completed: false,
                exp: {type: Number, value: experienceTable.controllersExp},
                needsCompleted: ["RESTservices"]
            },
            {
                name: {type: String, value: "models"},
                completed: false,
                exp: {type: Number, value: experienceTable.modelsExp},
                needsCompleted: ["RESTservices"]
            },
            {
                name: {type: String, value: "routes"},
                completed: false,
                exp: {type: Number, value: experienceTable.routesExp},
                needsCompleted: ["RESTservices"]
            }
        ]
    },
    {
        name: {type: String, value: "blockchain"},
        exp: {type: Number, value: 0},
        needsCompleted: ["REST"],
        children: [
            {
                name: {type: String, value: "bitcoin"},
                completed: false,
                exp: {type: Number, value: experienceTable.bitcoinExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "smartContracts"},
                completed: false,
                exp: {type: Number, value: experienceTable.smartContractsExp},
                needsCompleted: ["bitcoin"]
            },
            {
                name: {type: String, value: "Solidity"},
                completed: false,
                exp: {type: Number, value: experienceTable.SolidityExp},
                needsCompleted: ["smartContracts"]
            },
            {
                name: {type: String, value: "Hyperledger"},
                completed: false,
                exp: {type: Number, value: experienceTable.HyperledgerExp},
                needsCompleted: ["smartContracts"]
            },
            {
                name: {type: String, value: "dapps"},
                completed: false,
                exp: {type: Number, value: experienceTable.dappsExp},
                needsCompleted: ["solidity", "hyperledger"]
            }
        ]
    },
    {
        name: {type: String, value: "mobile"},
        exp: {type: Number, value: 0},
        needsCompleted: ["basic", "firebase"],
        children: [
            {
                name: {type: String, value: "mobileAppDev"},
                completed: false,
                exp: {type: Number, value: experienceTable.mobileAppDevExp},
                needsCompleted: []
            },
            {
                name: {type: String, value: "androidDev"},
                completed: false,
                exp: {type: Number, value: experienceTable.androidDevExp},
                needsCompleted: ["mobileAppDev"]
            },
            {
                name: {type: String, value: "iosDev"},
                completed: false,
                exp: {type: Number, value: experienceTable.iosDevExp},
                needsCompleted: ["mobileAppDev"]
            },
            {
                name: {type: String, value: "androidDevXML"},
                completed: false,
                exp: {type: Number, value: experienceTable.androidDevXMLExp},
                needsCompleted: ["androidDev"]
            },
            {
                name: {type: String, value: "androidDevKotlin"},
                completed: false,
                exp: {type: Number, value: experienceTable.androidDevKotlinExp},
                needsCompleted: ["androidDev"]
            },
            {
                name: {type: String, value: "androidDevJava"},
                completed: false,
                exp: {type: Number, value: experienceTable.androidDevJavaExp},
                needsCompleted: ["androidDev"]
            },
            {
                name: {type: String, value: "iosDevSwift"},
                completed: false,
                exp: {type: Number, value: experienceTable.iosDevSwiftExp},
                needsCompleted: ["iosDev"]
            },
            {
                name: {type: String, value: "mobileDevLibraries"},
                completed: false,
                exp: {type: Number, value: experienceTable.mobileDevLibrariesExp},
                needsCompleted: ["androidDevKotlin", "andoridDevJava", "iosDevSwift"]
            },
            {
                name: {type: String, value: "mobileDevREST"},
                completed: false,
                exp: {type: Number, value: experienceTable.mobileDevRESTExp},
                needsCompleted: ["androidDevKotlin", "andoridDevJava", "iosDevSwift"]
            }
        ]
    },
    {
        name: {type: String, value: "web"},
        completed: false,
        exp: {type: Number, value: 0},
        needsCompleted: ["basic"],
            children: [
                {
                    name: {type: String, value: "webDev"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.webDevExp},
                    needsCompleted: []
                    },
                {
                    name: {type: String, value: "HTML"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.HTMLExp},
                    needsCompleted: ["webDev"]
                },
                {
                    name: {type: String, value: "CSS"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.CSSExp},
                    needsCompleted: ["webDev"]
                },
                {
                    name: {type: String, value: "JavaScript"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.javaScriptExp},
                    needsCompleted: ["webDev"]
                },
                {
                    name: {type: String, value: "graphicDesignFund"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.graphicDesignFundExp},
                    needsCompleted: ["CSS"]
                },
                {
                    name: {type: String, value: "AngularJS"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.angularJSExp},
                    needsCompleted: ["javaScript"]
                },
                {
                    name: {type: String, value: "VueJs"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.vueJsExp},
                    needsCompleted: ["angularJS"]
                },
                {
                    name: {type: String, value: "ionicJS"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.ionicJSExp},
                    needsCompleted: ["angularJS"]
                },
                {
                    name: {type: String, value: "React"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.reactExp},
                    needsCompleted: ["angularJS"]
                },
                {
                    name: {type: String, value: "NodeJSFund"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.nodeJSFundExp},
                    needsCompleted: ["javaScript"]
                }
    
            ]
    },
    {
        name: {type: String, value: "videogames"},
        completed: false,
        exp: {type: Number, value: 0},
        needsCompleted: ["basic"],
            children: [
                {
                    name: {type: String, value: "interfaceUnity"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.interfaceUnityExp},
                    needsCompleted: []
                },
                {
                    name: {type: String, value: "objectUnity"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.objectUnityExp},
                    needsCompleted: ["interfaceUnity"]
                },
                {
                    name: {type: String, value: "gameObjProp"},
                    completed:false,
                    exp: {type: Number, value: experienceTable.gameObjPropExp}, 
                    needsCompleted: ["objectUnity"]
                },
                {
                    name: {type: String, value: "scriptingUnity"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.scriptingUnityExp},
                    needsCompleted: ["objectUnity"]
                }
            ]
    },
    {
        name: {type: String, value: "networking"},
        completed: false,
        exp: {type: Number, value: 0},
        needsCompleted: ["IOT"],
            children: [
                {
                    name: {type: String, value: "TCP_IP"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.TCP_IPExp},
                    needsCompleted: []
                },
                {
                    name: {type: String, value: "TCP_UDP"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.TCP_UDPExp},
                    needsCompleted: ["TCP_IP"]
                },
                {
                    name: {type: String, value: "SSH"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.SSHExp},
                    needsCompleted: ["TCP_IP"]
                },
                {
                    name: {type: String, value: "FTP"},
                    completed: false,
                    exp: {type: Number, value: experienceTable.FTPExp},
                    needsCompleted: ["TCP_IP", "SSH"]
                }
            ] 
    }
)

module.exports = ModulesSchema