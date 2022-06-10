let loggedInUser = {
    firstName: "Justin",
    email: "justinpeeples24@gmail.com",
    password: "password",
    templates: [
        "dc0b3670-b3df-4760-97cb-0973a196a9d9"
    ]
}

let templates = [
    {
        uuid: "dc0b3670-b3df-4760-97cb-0973a196a9d9",
        name: "Cold Call",
        description: `Template used for day-to-day cold calls, with a focus on ATS.`,
        export: {
            mode: "clipboard",
            includeCallInfo: false,
            includePaths: true
        },
        tree: [
            {
                type: "question",
                text: "Hey ___, this is ___. I was told you were the person to speak with over hiring. do you have a minute to talk?"
            },

            {
                type: "question",
                text: `I want to clarify that I am not looking at filling a position myself. I work at a place called Eddy and we help ___ hire ___. A lot of 
                ___ I work with have had a hard time finding quality candidates and also have a hard time having them show up to the interviews. How are you handling that?`
            },

            {
                type: "folder",
                name: "NOT struggling to hire",
                color: "#3D5C7E",
                contents: [
                    {
                        type: "folder",
                        name: "Candidates",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How are you organizing the candidates that you do get?"
                            },

                            {
                                type: "question",
                                text: "How much time is that taking you?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "Payroll",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How are you handling the payroll for them?"
                            },

                            {
                                type: "question",
                                text: "What could you be doing with your time if payroll only took a few minutes for you?"
                            }
                        ]
                    }
                ]
            },

            {
                type: "folder",
                name: "Struggling to hire",
                color: "#3D5C7E",
                contents: [
                    {
                        type: "question",
                        text: "What part of the hiring process is the hardest?"
                    },

                    {
                        type: "folder",
                        name: "Hiring is expensive",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "If you can't fix this, what happens?"
                            },

                            {
                                type: "question",
                                text: "How is this affecting your business?"
                            },

                            {
                                type: "question",
                                text: "What aspect of the hiring is costing the most for you? Is your time worth more?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "Too small / Handled in-house",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "We focus on helping small businesses. How are you hiring as a small business?"
                            },

                            {
                                type: "question",
                                text: "Are you typically hiring for at least one position per month?"
                            },

                            {
                                type: "folder",
                                name: "Frequent hiring",
                                color: "#A3BE8C",
                                contents: [
                                    {
                                        type: "question",
                                        text: "How much is it costing you to maintain a job posting?"
                                    }
                                ]
                            },

                            {
                                type: "folder",
                                name: "Infrequent hiring",
                                color: "#A3BE8C",
                                contents: [
                                    {
                                        type: "question",
                                        text: "How are you keeping track of the employees you already have?"
                                    },

                                    {
                                        type: "question",
                                        text: "Are you doing your own payroll?"
                                    }
                                ]
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "Not enough qualified candidates",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How are you posting the job?"
                            },

                            {
                                type: "question",
                                text: "How quickly are you responding to the candidate?"
                            },

                            {
                                type: "question",
                                text: "How does not having that position filled affect you and the other employees?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "Too many candidates",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How are you filtering through the candidates that you are getting?"
                            },

                            {
                                type: "question",
                                text: "What would be a better use of your time, in place of talking with so many unqualified candidates?"
                            },

                            {
                                type: "question",
                                text: "Have you had a hard time having the ones that you do try to interview show up?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "We use paper",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How are you typically finding candidates?"
                            },

                            {
                                type: "question",
                                text: "How do you filter through the better candidates?"
                            },

                            {
                                type: "question",
                                text: "How long does it typically take for you to contact the candidates?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "We have tried everything",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "Would you be open to seeing a different approach?"
                            },

                            {
                                type: "question",
                                text: "Why do you think nothing is working?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "Not enough time",
                        color: "#BF616A",
                        contents: [
                            {
                                type: "question",
                                text: "How much time do you spend on hiring?"
                            },

                            {
                                type: "question",
                                text: "How much time do you think you would need to spend to get the quality people?"
                            },

                            {
                                type: "question",
                                text: "Are you open to saving 2 - 10 hours a week?"
                            }
                        ]
                    }
                ]
            }
        ],
    },


    {
        uuid: "77bb2375-8ed4-4546-9b6b-5201df5abc9d",
        name: "Movie Trivia",
        description: `Template used for asking about everything
         there is to know about movies, with a specific focus
          on big series of movies, like Star Wars.`,
        tree: [
            {
                type: "folder",
                name: "Star Wars",
                color: "#BC2828",
                contents: [
                    {
                        type: "folder",
                        name: "The Phantom Menace",
                        color: "#7326AF",
                        contents: [
                            {
                                type: "question",
                                text: "How did Anakin turn bad?"
                            },

                            {
                                type: "question",
                                text: "Why does Anakin like Padme?"
                            },

                            {
                                type: "question",
                                text: "Why is obiwan so quiet?"
                            }
                        ]
                    },

                    {
                        type: "folder",
                        name: "The Force Awakens",
                        color: "#7326AF",
                        contents: [
                            {
                                type: "question",
                                text: "Who are Rey's parents?"
                            },

                            {
                                type: "folder",
                                name: "Palpatine",
                                color: "#D7A21A",
                                contents: [
                                    {
                                        type: "question",
                                        text: "How did Darth Sidious live?"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                type: "folder",
                name: "Lord of the Rings",
                color: "#BC2828",
                contents: [
                    {
                        type: "folder",
                        name: "Empty Folder",
                        color: "#7326AF",
                        contents: []
                    },
                    
                    {
                        type: "question",
                        text: "How many books are in the LotR series?",
                    },

                    {
                        type: "question",
                        text: "How is Legolas' hair so good?"
                    }
                ]
            },

            {
                type: "question",
                text: "Top level tree question 1?"
            },

            {
                type: "question",
                text: "Top level tree question 2?"
            },
        ],
    },

]

export function GetUser(){
    return loggedInUser;
}

export function GetTemplateByUUID(uuid){
    return templates.find((template) => (template.uuid === uuid));
}