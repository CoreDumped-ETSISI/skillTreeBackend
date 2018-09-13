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
    modules: {
        "basic": {
            "experience": 0,
            "requires": [],
            "nodes": {
                "unixConsole": {
                    "completed": false,
                    "exp": experienceTable.unixConsoleExp,
                    "requires": []
                },
                "structProgramFund": {
                    "completed": false,
                    "exp": experienceTable.structProgramFundExp,
                    "requires": []
                },
                "functionsAndMethods": {
                    "completed": false,
                    "exp": experienceTable.functionsAndMethodsExp,
                    "requires": ["structProgramFund"]
                },
                "dataStructures": {
                    "completed": false,
                    "exp": experienceTable.dataStructuresExp,
                    "requires": ["functionsAndMethods"]
                },
                "recursivity": {
                    "completed": false,
                    "exp": experienceTable.recursivityExp,
                    "requires": ["functionsAndMethods"]
                },
                "generalAlgorythms": {
                    "completed": false,
                    "exp": experienceTable.generalAlgorythmsExp,
                    "requires": ["dataStructures", "recursivity"]
                },
                "OOP": {
                    "completed": false,
                    "exp": experienceTable.OOPExp,
                    "requires": ["dataStructures"]
                },
                "MVCpattern": {
                    "completed": false,
                    "exp": experienceTable.MVCpatternExp,
                    "requires": ["OOP"]
                },
                "interfaces": {
                    "completed": false,
                    "exp": experienceTable.interfacesExp,
                    "requires": ["OOP"]
                }
            }
        },
        "bbdd": {
            "experience": 0,
            "requires": ["basic"],
            "nodes": {
                "databases": {
                    "completed": false,
                    "exp": experienceTable.databasesExp,
                    "requires": []
                },
                "relationalDDBB": {
                    "completed": false,
                    "exp": experienceTable.relationalDDBBExp,
                    "requires": ["databases"]
                },
                "SQL": {
                    "completed": false,
                    "exp": experienceTable.SQLExp,
                    "requires": ["relationalDDBB"]
                },
                "nonRelationalDDBB": {
                    "completed": false,
                    "exp": experienceTable.nonRelationalDDBBExp,
                    "requires": ["databases"]
                },
                "mongoDB": {
                    "completed": false,
                    "exp": experienceTable.mongoDBExp,
                    "requires": ["nonRelationalDDBB"]
                }
            }
        },
        "graphicDesign": {
            "experience": 0,
            "requires": ["web.graphDesignFund"],
            "nodes": {
                "graphDesignPatters": {
                    "completed": false,
                    "exp": experienceTable.graphDesignPattersExp,
                    "requires": []
                },
                "animation": {
                    "completed": false,
                    "exp": experienceTable.animationExp,
                    "requires": []
                },
                "typographies": {
                    "completed": false,
                    "exp": experienceTable.typographiesExp,
                    "requires": []
                },
                "rasterImages": {
                    "completed": false,
                    "exp": experienceTable.rasterImagesExp,
                    "requires": []
                },
                "vectorialDrawing": {
                    "completed": false,
                    "exp": experienceTable.vectorialDrawingExp,
                    "requires": []
                },
                "digitalMedia": {
                    "completed": false,
                    "exp": experienceTable.digitalMediaExp,
                    "requires": []
                },
                "colorTheory": {
                    "completed": false,
                    "exp": experienceTable.colorTheoryExp,
                    "requires": []
                }
            }
        },
        "IOT": {
            "experience": 0,
            "requires": ["basic"],
            "nodes": {
                "arduinoFund": {
                    "completed": false,
                    "exp": experienceTable.arduinoFundExp,
                    "requires": []
                },
                "sensoring": {
                    "completed": false,
                    "exp": experienceTable.sensoringExp,
                    "requires": ["arduinoFund"]
                },
                "welding": {
                    "completed": false,
                    "exp": experienceTable.weldingExp,
                    "requires": ["arduinoFund"]
                },
                "raspBerries": {
                    "completed": false,
                    "exp": experienceTable.raspBerriesExp,
                    "requires": ["welding", "sensoring"]
                }
            }
        },
        "AI": {
            "experience": 0,
            "requires": ["basic"],
            "nodes": {
                "Julia": {
                    "completed": false,
                    "exp": experienceTable.JuliaExp,
                    "requires": []
                },
                "PythonFund": {
                    "completed": false,
                    "exp": experienceTable.PythonFundExp,
                    "requires": []
                },
                "supervisedAlgorythms": {
                    "completed": false,
                    "exp": experienceTable.supervisedAlgorythmsExp,
                    "requires": []
                },
                "unsupervisedAlgorythms": {
                    "completed": false,
                    "exp": experienceTable.unsupervisedAlgorythmsExp,
                    "requires": []
                },
                "geneticalAlgorythms": {
                    "completed": false,
                    "exp": experienceTable.geneticalAlgorythmsExp,
                    "requires": []
                },
                "machineLearning": {
                    "completed": false,
                    "exp": experienceTable.machineLearningExp,
                    "requires": []
                },
                "deepLearning": {
                    "completed": false,
                    "exp": experienceTable.deepLearningExp,
                    "requires": []
                }
            }
        },
        "REST": {
            "experience": 0,
            "requires": ["DDBB", "mobile.mobileDevREST"],
            "nodes": {
                "RESTservices": {
                    "completed": false,
                    "exp": experienceTable.RESTservicesExp,
                    "requires": []
                },
                "firebase": {
                    "completed": false,
                    "exp": experienceTable.firebaseExp,
                    "requires": ["RESTservices"]
                },
                "controllers": {
                    "completed": false,
                    "exp": experienceTable.controllersExp,
                    "requires": ["RESTservices"]
                },
                "models": {
                    "completed": false,
                    "exp": experienceTable.modelsExp,
                    "requires": ["RESTservices"]
                },
                "routes": {
                    "completed": false,
                    "exp": experienceTable.routesExp,
                    "requires": ["RESTservices"]
                }
            }
        },
        "blockchain": {
            "experience": 0,
            "requires": ["REST"],
            "nodes": {
                "bitcoin": {
                    "completed": false,
                    "exp": experienceTable.bitcoinExp,
                    "requires": []
                },
                "smartContracts": {
                    "completed": false,
                    "exp": experienceTable.smartContractsExp,
                    "requires": ["bitcoin"]
                },
                "Solidity": {
                    "completed": false,
                    "exp": experienceTable.SolidityExp,
                    "requires": ["smartContracts"]
                },
                "Hyperledger": {
                    "completed": false,
                    "exp": experienceTable.HyperledgerExp,
                    "requires": ["smartContracts"]
                },
                "dapps": {
                    "completed": false,
                    "exp": experienceTable.dappsExp,
                    "requires": ["solidity", "hyperledger"]
                }
            }
        },
        "mobile": {
            "experience": 0,
            "requires": ["basic", "REST.firebase"],
            "nodes": {
                "mobileAppDev": {
                    "completed": false,
                    "exp": experienceTable.mobileAppDevExp,
                    "requires": []
                },
                "androidDev": {
                    "completed": false,
                    "exp": experienceTable.androidDevExp,
                    "requires": ["mobileAppDev"]
                },
                "iosDev": {
                    "completed": false,
                    "exp": experienceTable.iosDevExp,
                    "requires": ["mobileAppDev"]
                },
                "androidDevXML": {
                    "completed": false,
                    "exp": experienceTable.androidDevXMLExp,
                    "requires": ["androidDev"]
                },
                "androidDevKotlin": {
                    "completed": false,
                    "exp": experienceTable.androidDevKotlinExp,
                    "requires": ["androidDev"]
                },
                "androidDevJava": {
                    "completed": false,
                    "exp": experienceTable.androidDevJavaExp,
                    "requires": ["androidDev"]
                },
                "iosDevSwift": {
                    "completed": false,
                    "exp": experienceTable.iosDevSwiftExp,
                    "requires": ["iosDev"]
                },
                "mobileDevLibraries": {
                    "completed": false,
                    "exp": experienceTable.mobileDevLibrariesExp,
                    "requires": ["androidDevKotlin", "andoridDevJava", "iosDevSwift"]
                },
                "mobileDevREST": {
                    "completed": false,
                    "exp": experienceTable.mobileDevRESTExp,
                    "requires": ["androidDevKotlin","andoridDevJava", "iosDevSwift"]
                }
            }
        },
        "web": {
            "completed": false,
            "experience": 0,
            "requires": ["basic"],
                "nodes": {
                    "webDev": {
                        "completed": false,
                        "experience": experienceTable.webDevExp,
                        "requires": []
                        },
                    "HTML": {
                        "completed": false,
                        "experience": experienceTable.HTMLExp,
                        "requires": ["webDev"]
                    },
                    "CSS": {
                       "completed": false,
                        "experience": experienceTable.CSSExp,
                        "requires": ["webDev"]
                    },
                    "javaScript": {
                       "completed": false,
                        "experience": experienceTable.javaScriptExp,
                        "requires": ["webDev"]
                        },
                    "graphicDesignFund": {
                        "completed": false,
                        "experience": experienceTable.graphicDesignFundExp,
                        "requires": ["CSS"]
                    },
                    "angularJS": {
                        "completed": false,
                        "experience": experienceTable.angularJSExp,
                        "requires": ["javaScript"]
                    },
                    "vueJs": {
                        "completed": false,
                        "experience": experienceTable.vueJsExp,
                        "requires": ["angularJS"]
                    },
                    "ionicJS": {
                        "completed": false,
                        "experience": experienceTable.ionicJSExp,
                        "requires": ["angularJS"]
                    },
                    "react": {
                        "completed": false,
                        "experience": experienceTable.reactExp,
                        "requires": ["angularJS"]
                    },
                    "nodeJSFund": {
                        "completed": false,
                        "experience": experienceTable.nodeJSFundExp,
                        "requires": ["javaScript"]
                    }
        
                }
        },
        "videogames": {
            "completed": false,
            "experience": 0,
            "requires": ["basic"],
                "nodes": {
                    "interfaceUnity": {
                        "completed": false,
                        "experience": experienceTable.interfaceUnityExp,
                        "requires": []
                    },
                    "objectUnity": {
                        "completed": false,
                        "experience": experienceTable.objectUnityExp,
                        "requires": ["interfaceUnity"]
                    },
                    "gameObjProp": {
                        "completed":false,
                        "experience": experienceTable.gameObjPropExp, 
                        "requires": ["objectUnity"]
                    },
                    "scriptingUnity": {
                        "completed": false,
                        "experience": experienceTable.scriptingUnityExp,
                        "requires": ["objectUnity"]
                    }
            }
        },
        "networking": {
            "completed": false,
            "experience": 0,
            "requires": ["IOT"],
                "nodes": {
                    "TCP_IP": {
                        "completed": false,
                        "experience": experienceTable.TCP_IPExp,
                        "requires": []
                    },
                    "TCP_UDP": {
                        "completed": false,
                        "experience": experienceTable.TCP_UDPExp,
                        "requires": ["TCP/IP"]
                    },
                    "SSH": {
                        "completed": false,
                        "experience": experienceTable.SSHExp,
                        "requires": ["TCP/IP"]
                    },
                    "FTP": {
                        "completed": false,
                        "experience": experienceTable.FTPExp,
                        "requires": ["SSH"]
                    }
                }  
        }
    }
})

module.exports = mongoose.model('User', UserSchema);