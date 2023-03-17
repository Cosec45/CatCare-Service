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
                                    img:'https://global-uploads.webflow.com/5f7adfe5ed7d773f90050d9e/6347a1d9549dfd57b376cd1a_persian%20cat%20101.webp'
                                },

                                {id:5, 
                                    name:'Jack',
                                       adress:'Osaka',
                                       country:'Japan',
                                        gender:'male',
                                        age:'adult',
                                        img:'https://www.thesprucepets.com/thmb/hWJWKdaC_aSEiJFh_E6_NJrJ0eE=/1500x0/filters:no_upscale():strip_icc()/american-curl-full-profile-history-and-care-4705972-hero-2c9bdcfba3d84130b8eed233c46c19d3.jpg'
                                    },

                                    {id:6, 
                                        name:'Zilla',
                                           adress:'Osaka',
                                           country:'Japan',
                                            gender:'male',
                                            age:'adult',
                                            img:'https://www.thesprucepets.com/thmb/hWJWKdaC_aSEiJFh_E6_NJrJ0eE=/1500x0/filters:no_upscale():strip_icc()/american-curl-full-profile-history-and-care-4705972-hero-2c9bdcfba3d84130b8eed233c46c19d3.jpg'
                                        },


                     ]
expressObj.get('/api/cats', function(req, res) {
    res.send(cats);
});

const port = process.env.PORT || 3000;
expressObj.listen(port, function() {
    console.log(`Listening on port: `, port);
});