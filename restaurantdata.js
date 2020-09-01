// url>
// (Get) http://localhost:5000/api/restaurantsearchpage


db.restaurant.insertMany(
[
    {
        "_id" : "1",
        "name" : "Gulab",
        "city_name" : "Delhi",
        "city":"1",
        "area":"11",
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 450, 
        "address":"Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi",
        "type":[
                {
                    "mealtype":"1",
                    "name":"breakfast"
                },
                {
                    "mealtype":"3",
                    "name": "dinner"
                }

            ]  ,
        "Cuisine":[
                {
                    "cuisine":"1",
                    "name": "North Indain"
                },
                {
                    "cuisine":"4",
                    "name":"Fast Food"
                }

            ]
    },
    {
        "_id" : "2",
        "name" : "Pandit Ji Paratha Hut",
        "locality" : "Ashok Vihar Phase 2",
        "city_name" : "Delhi",
        "city":"1", 
        "area":"12",
        "address":"Shop 44, Plot C,  Ahok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost":230,
        "contact_number":"45352465",
        "type":[
                {
                    "mealtype":"1",
                    "name":"breakfast"
                },
                {
                    "mealtype":"3",
                    "name":"dinner"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"1",
                    "name":"North Indain"
		        },
                {
		        "cuisine":"3",
		        "name":"Chinese"
		    }

        ]
    },
    {
        "_id" : "3",
        "name" : "Food Adda",
        "locality" : "Borivali West",
        "city_name" : "Mumbai",
        "city":"2", 
        "area":"21",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
        "cost": 530,
        "contact_number":"467564",
        "type":[
                {
                    "mealtype":"2",
                    "name":"lunch"
                },
                {
                    "mealtype":"3",
                    "name":"dinner"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"3",
                    "name":"Chinese"
		        },
                {
		        "cuisine":"4",
		        "name":"FastFood"
		    }

        ]
    },
    {
        "_id" : "4",
        "name" : "Apna Punjab",
        "locality" : "Magarpatta",
        "city_name" : "Pune",
        "city":"3", 
        "area":"31",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
        "cost":670,
        "contact_number":"6508401",
        "type":[
                {
                    "mealtype":"4",
                    "name":"snacks"
                },
                {
                    "mealtype":"5",
                    "name":"drinks"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"1",
                    "name":"North Indain"
		        },
                {
		        "cuisine":"2",
		        "name":"South Indian"
		    }

        ]
    },
    {
        "_id" : "5",
        "name" : "Empire Restaurant",
        "locality" : "Rajajinagar",
        "city_name" : "Bangalore",
        "city": "4",
        "area":"41",
        "address":"Rajajinagar, Bangalore-430006, Bangalore",
        "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
        "cost":230,
        "contact_number":"8731537",
        "type":[
                {
                    "mealtype":"1",
                    "name":"breakfast"
                },
                {
                    "mealtype":"5",
                    "name":"drinks"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"2",
                    "name":"South Indian"
		        },
                {
		        "cuisine":"4",
		        "name":"FastFood"
		    }

        ]
    }
    ,
    {
        "_id" : "6",
        "name" : "Captain Sams",
        "locality" : "Sector70, Chandigarh",
        "city_name" : "Chandigarh",
        "city": "5",
        "area":"51",
        "address":"Sector70, Chandigarh-515436",
        "thumb" : 
        "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
        "cost":630,
        "contact_number":"123334",
        "type":[
                {
                    "mealtype":"5",
                    "name":"drinks"
                },
                {
                    "mealtype":"6",
                    "name":"nightlife"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"1",
                    "name":"North Indain"
		        },
                {
		        "cuisine":"4",
		        "name":"FastFood"
		    }

        ]
    },

    {
        "_id" : "7",
        "name" : "Gulab",
        "city_name" : "Delhi",
        "city":"1",
        "area":"11",
        "locality" : "Pitampura, New Delhi",
        "thumb": "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost": 450, 
        "address":"Shop 1, Plot D,  Pitampura, New Delhi Complex, Chincholi, Delhi-110006, Delhi",
        "type":[
                {
                    "mealtype":"2",
                    "name":"lunch"
                },
                {
                    "mealtype":"4",
                    "name": "snacks"
                }

            ]  ,
        "Cuisine":[
                {
      
        "name": "South Indian",
        "cuisine":"2"
    },
     {
        
        "name": "Chinese",
        "cuisine":"3"
    }
                

            ]
    },
    {
        "_id" : "8",
        "name" : "Pandit Ji Paratha Hut",
        "locality" : "Ashok Vihar Phase 2",
        "city_name" : "Delhi",
        "city":"1", 
        "area":"12",
        "address":"Shop 44, Plot C,  Ahok Vihar Phase 2,Chincholi, Delhi-110006, Delhi",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg",
        "cost":230,
        "contact_number":"45352465",
        "type":[
                {
                    "mealtype":"6",
                    "name":"nightlife"
                },
                {
                    "mealtype":"3",
                    "name": "snacks"
                }

            ]  ,
        "Cuisine":[
                {
      
        "name": "South Indian",
        "cuisine":"2"
    },
     {
        
        "name": "Street Food",
        "cuisine":"5"
    }
                

            ]
    },
    {
        "_id" : "9",
        "name" : "Food Adda",
        "locality" : "Borivali West",
        "city_name" : "Mumbai",
        "city":"2", 
        "area":"21",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/pictures/7/18690357/0df7f4ca0c645a68a1657b1e69b015fa.jpg",
        "cost": 530,
        "contact_number":"467564",
        "type":[
                {
                    "mealtype":"4",
                    "name":"snacks"
                },
                {
                    "mealtype":"5",
                    "name":"drinks"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"2",
                    "name":"South Indian"
		        },
                {
		        "cuisine":"1",
		        "name":"North Indian"
		    }

        ]
    },
    {
        "_id" : "10",
        "name" : "Apna Punjab",
        "locality" : "Magarpatta",
        "city_name" : "Pune",
        "city":"3", 
        "area":"31",
        "address":"Borivali West, Mumbai-210006, Mumbai",
        "thumb" : 
        "https://b.zmtcdn.com/data/res_imagery/6508401_RESTAURANT_21a925c42f2f93c9709e1945b9eae56f.jpg",
        "cost":670,
        "contact_number":"6508401",
        "type":[
                {
                    "mealtype":"1",
                    "name":"breakfast"
                },
                {
                    "mealtype":"6",
                    "name":"nightlife"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"5",
                    "name":"Street Food"
		        },
                {
		        "cuisine":"2",
		        "name":"South Indian"
		    }

        ]
    },
    {
        "_id" : "11",
        "name" : "Empire Restaurant",
        "locality" : "Rajajinagar",
        "city_name" : "Bangalore",
        "city": "4",
        "area":"41",
        "address":"Rajajinagar, Bangalore-430006, Bangalore",
        "thumb": "https://b.zmtcdn.com/data/pictures/1/50471/bcf68da39dcfb0fe5bcfb742c337385e.jpg",
        "cost":230,
        "contact_number":"8731537",
        "type":[
                {
                    "mealtype":"2",
                    "name":"lunch"
                },
                {
                    "mealtype":"5",
                    "name":"drinks"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"2",
                    "name":"South Indian"
		        },
                {
		        "cuisine":"4",
		        "name":"FastFood"
		    }

        ]
    },
    
    {
        "_id" : "12",
        "name" : "Captain Sams",
        "locality" : "Sector70, Chandigarh",
        "city_name" : "Chandigarh",
        "city": "5",
        "area":"51",
        "address":"Sector70, Chandigarh-515436",
        "thumb" : 
        "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
        "cost":500,
        "contact_number":"123334",
        "type":[
                {
                    "mealtype":"3",
                    "name":"dinner"
                },
                {
                    "mealtype":"6",
                    "name":"nightlife"
                }
            ],
        "Cuisine":[
                    {
                    "cuisine":"1",
                    "name":"North Indain"
		        },
                {
		        "cuisine":"5",
		        "name":"Street Food"
		    }

        ]
    }
]
)
