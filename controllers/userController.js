'use strict'

const config = require('../config');
const input = require('../services/inputValidators');
const User = require('../models/user')
const TelegramBot = require('node-telegram-bot-api')
const TGtoken = config.TGtoken

const bot = new TelegramBot(TGtoken, {polling: false})

function signUp(req,res){
    let name = req.body.name
    let email = req.body.email
    let password = req.body.password
    let isAdmin = req.body.isAdmin
    /*let modules = {
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
    }*/

    User.findOne({email: email}).exec((err, userExist) => {
        if(err) return res.sendStatus(500)
        if(userExist) return res.sendStatus(403)
        if (!input.validEmail(req.body.email)) return res.status(402).send({"message": "Given email is not valid, please check you wrote it properly"})
        if (!input.validPassword(req.body.email)) return res.status(402).send({"message": "Given password is not valid, please choose another one"})

        const User = new User({
            name: name,
            totalExp: 0,
            email: email,
            level: 0,
            isAdmin: isAdmin,
            password: password,
        })
        user.save((err, userSaved) => {
            if(err) {
                return res.status(500).send({"message": 'Error processing request'})
            }
            if(!userSaved) return res.status(500).send({'message': 'Error saving user'})
            return res.status(200).send({'message': 'User created'})
        })
    })
}

function getUserModules(req, res) {
    if(!req.params._id) return res.status(500).send({"message":"Error on query parameters"})

    User.findOne({_id:req.params._id}, (err, user) => {
        if(err) return res.status(500).send({"message": "Error processing request"})
        if(!user) return res.status(404).send({"message": "User with such _id not found"})
        return user.modules
    })
}

function getBaseExpMultiplier(){
    return {"baseExpMultiplier": config.expMultiplier}
}

function login(req, res) {
    if (!input.validEmail(req.body.email)) return res.sendStatus(400);
    if (!req.body.password) return res.sendStatus(400);

    User.findOne({email: req.body.email}).exec((err, user) => {
            if (err) return res.sendStatus(500);
            if (!user) return res.sendStatus(404);

            return res.status(200).send(user)
        })
}

function updateUserModules(req, res) {
    if(!req.body.modules) return res.status(402).send({"message": "Error: no modules found on request."})
    let modules = req.body.modules
    if(!req.body.email) return res.status(402).send({"message": "Error: no user email found on request."})
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(404);
        user.set(modules);
        user.save((err) => {
            if (err) return res.sendStatus(500);
            return res.sendStatus(200)
        })
    })
}

function getUserByName(req, res) {
    User.findOne({email:req.body.name})
        .exec((err, user) => {
            if (err) return res.sendStatus(500);
            if (!user) return res.sendStatus(404);
            return res.status(200).send(user)
        })
}

function getUserList(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.sendStatus(500);
        if (!users) return res.sendStatus(404);
        res.status(200).send(users)
    })
}

function getRankingOfUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.sendStatus(500);
        if (!users) return res.sendStatus(404);

        let namesAndLevels = []

        users.forEach(user => {
            let info = {"name": user.name, "level": user.level}
            namesAndLevels.push(info)
        });
        res.status(200).send(namesAndLevels.sort(function(a,b) {return a.level-b.level}))
    })
}

function deleteUser(req, res) {
    let userId = req.params.id;

    User.findById(userId, (err, user) => {
        if (err) return res.sendStatus(500);
        if (!user) return res.sendStatus(404);
        user.remove();
        return res.sendStatus(200)
    })
}

function notifyAdminsForValidation(req, res) {

    if(!req.params._id) return res.status(502).send({"message": "Error on query parameters. Missing user._id"})
    if(!req.params.validatingNode) return res.status(502).send({"message": "Error on query params. Missing moduleName"})

    User.findOne({_id: req.params._id}, (err, user) => {
        if(err) return res.status(500).send({"message": "Error processing request"})
        if(!user) return res.status(404).send({"message": "User couldn't be found"})

        const moduleForApproval = req.params.validatingNode
        if(user.modules.moduleForApproval.completed) return res.status(401).send({"message": "This module has already been completed!"})

        const message = "The user " + user.name + ", which mail is: [" + user.email + "] has requested a new validating test for this competence: " + moduleForApproval
        bot.sendMessage(config.privateChatId, message).catch((error) => {
            return res.status(500).send({"message": "Error sending message to Validators, please contact staff"})
        })

        return res.status(200).send({"message": "Message sent to Validators, asking for testing this competence: " + moduleForApproval})
    })
}

module.exports = {
    signUp,
    login,
    getUserModules,
    getBaseExpMultiplier,
    updateUserModules,
    getRankingOfUsers,
    getUserByName,
    getUserList,
    deleteUser,
    notifyAdminsForValidation
}