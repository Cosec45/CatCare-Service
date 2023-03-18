const expressFunct = require('express');
const expressObj = expressFunct();
expressObj.use(expressFunct.json());

const cors = require('cors');

expressObj.use(cors({
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
expressObj.use(cors({
    origin: ['http://localhost:4200/']
}));

const cats = [
                        {id:1, 
                            name:'Tigger',
                             adress:'Boston',
                             country:'USA',
                              gender:'male',
                              age:'kitty',
                              img:'https://i.redd.it/z07m1ff6f3m61.jpg'
                            },


                        {id:2, 
                            name:'Zara',
                               adress:'Oakland',
                               country:'USA',
                                gender:'female',
                                age:'kitty',
                                img:'https://www.litter-robot.com/media/blog/dan-wayman-exotic-shorthair3.jpg'
                            },


                        {id:3, 
                            name:'Baby',
                               adress:'Osaka',
                               country:'Japan',
                                gender:'male',
                                age:'adult',
                                img:'https://www.thesprucepets.com/thmb/hWJWKdaC_aSEiJFh_E6_NJrJ0eE=/1500x0/filters:no_upscale():strip_icc()/american-curl-full-profile-history-and-care-4705972-hero-2c9bdcfba3d84130b8eed233c46c19d3.jpg'
                            },

                            {id:4, 
                                name:'Toby',
                                   adress:'Seoul',
                                   country:'Korea',
                                    gender:'female',
                                    age:'kitty',
                                    img:'https://petmaya.com/wp-content/uploads/2015/01/famous-cat-07.jpg'
                                },

                                {id:5, 
                                    name:'Jack',
                                       adress:'italy',
                                       country:'Rome',
                                        gender:'male',
                                        age:'adult',
                                        img:'https://www.animalfunfacts.net/images/stories/pets/cats/ragdoll_cat_sweet_l.jpg'
                                    },

                                    {id:6, 
                                        name:'Zilla',
                                           adress:'Osaka',
                                           country:'Japan',
                                            gender:'male',
                                            age:'adult',
                                            img:'https://upload.wikimedia.org/wikipedia/commons/4/40/Odd-eyed_mi-ke-coated_Japanese_Bobtail_-_URK_cat_show_Vantaa_2006-10-08.JPG'
                                        },
                                        
                                        {id:7, 
                                            name:'Villa',
                                               adress:'Osaka',
                                               country:'Japan',
                                                gender:'male',
                                                age:'adult',
                                                img:'https://images.ctfassets.net/440y9b545yd9/5IMFGVDwhwv6TmaivHqKbn/41f23c17aa1a014f17da760d7df3fa33/Snowshoe850.jpg'
                                            },

                                            {id:8, 
                                                name:'Zilla',
                                                   adress:'Berlin',
                                                   country:'Germany',
                                                    gender:'female',
                                                    age:'kitty',
                                                    img:'https://www.omlet.us/images/cache/1024/682/Cat-Birman-A_seal_pointed_birman_kitten_with_very_blue_eyes.jpg'
                                                },


                     ]
expressObj.get('/api/cats', function(req, res) {
    res.send(cats);
});

const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
    console.log(`Listening on port: `, port);
});