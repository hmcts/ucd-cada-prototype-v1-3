const express = require('express')
const router = express.Router()
// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'

//CA C7 Tasklist

router.post('/tasklistresponse/safetyconcerns/abduction/abduction-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var childAbd = req.session.data['abduction']

    // Check whether the variable matches a condition
    if (childAbd == "yes"){
      // Send user to next page
      res.redirect('/tasklistresponse/safetyconcerns/abduction/policeinvolvement')
    } else {
      // Send user to ineligible page
      res.redirect('/tasklistresponse/safetyconcerns/abduction/checkanswers')
    }

  });

  router.post('/tasklistresponse/safetyconcerns/abduction/threats-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var abdThreat = req.session.data['threat']

      // Check whether the variable matches a condition
      if (abdThreat == "yes"){
        // Send user to next page
        res.redirect('/tasklistresponse/safetyconcerns/abduction/previousabductions')
      } else {
        // Send user to ineligible page
        res.redirect('/tasklistresponse/safetyconcerns/abduction/childlocation')
      }

    });

  router.post('/tasklistresponse/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var passport = req.session.data['passport']

      // Check whether the variable matches a condition
      if (passport == "yes"){
        // Send user to next page
        res.redirect('/tasklistresponse/safetyconcerns/abduction/passportamount')
      } else {
        // Send user to ineligible page
        res.redirect('/tasklistresponse/safetyconcerns/abduction/threats')
      }

    });

    router.post('/tasklistresponse/applicationdetails/proceedings/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var protProceedings = req.session.data['protection']
        var proceedings = req.session.data['childrenorders']

        // Check whether the variable matches a condition
        if (proceedings == "yes" || protProceedings == "yes"){
          // Send user to next page
          res.redirect('/tasklistresponse/applicationdetails/proceedings/courtproceedings')
        } else {
          // Send user to ineligible page
          res.redirect('/tasklistresponse/applicationdetails/proceedings/checkanswers-no')
        }

      });

      router.post('/tasklistresponse/applicationdetails/proceedings/emergencyprotectionorder-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var ordCopy = req.session.data['ordercopy']

          // Check whether the variable matches a condition
          if (ordCopy == "yes"){
            // Send user to next page
            res.redirect('emergencyupload')

          }else {
              // Send user to ineligible page
              res.redirect('checkanswers-proceedings')
          }

        });

        router.post('/tasklistresponse/applicationdetails/proceedings/courtproceedings-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var curOrders = req.session.data['proceedings']

            // Check whether the variable matches a condition
            if (curOrders == "Emergency Protection Order"){
              // Send user to next page
              res.redirect('emergencyprotectionorder')

            }else {
                // Send user to ineligible page
                res.redirect('otherorder')
            }

          });

          router.post('/tasklistresponse/applicationdetails/proceedings/otherorder-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var othOrder = req.session.data['ordercopy']

              // Check whether the variable matches a condition
              if (othOrder == "yes"){
                // Send user to next page
                res.redirect('otherordersupload')

              }else {
                  // Send user to ineligible page
                  res.redirect('checkanswers-proceedings')
              }

            });


      router.post('/tasklistresponse/applicationdetails/miam/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var miam = req.session.data['MIAM']

          // Check whether the variable matches a condition
          if (miam == "yes"){
            // Send user to next page
            res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAMyes')

          }else {
              // Send user to ineligible page
              res.redirect('/tasklistresponse/applicationdetails/miam/willingnesstoattend')
          }

        });

        router.post('/tasklistresponse/applicationdetails/miam/willingnesstoattend-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var miamWill = req.session.data['MIAM-willing']

            // Check whether the variable matches a condition
            if (miamWill == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAM')

            }else {
                // Send user to ineligible page
                res.redirect('/tasklistresponse/applicationdetails/miam/checkanswers-MIAMnono')
            }

          });

        router.post('/tasklistresponse/safetyconcerns/yoursafety/sexualabuse-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var sexAbuse = req.session.data['sexualabuse']

            // Check whether the variable matches a condition
            if (sexAbuse == "yes"){
              // Send user to next page
              res.redirect('/tasklistresponse/safetyconcerns/yoursafety/sexualdescription')

            }else {
                // Send user to ineligible page
                res.redirect('/tasklistresponse/safetyconcerns/yoursafety/physicalabuse')
            }

          });

          router.post('/tasklistresponse/safetyconcerns/yoursafety/physicalabuse-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var physAbuse = req.session.data['physicalabuseq']

              // Check whether the variable matches a condition
              if (physAbuse == "yes"){
                // Send user to next page
                res.redirect('/tasklistresponse/safetyconcerns/yoursafety/physicaldescription')

              }else {
                  // Send user to ineligible page
                  res.redirect('/tasklistresponse/safetyconcerns/yoursafety/financialabuse')
              }

            });

            router.post('/tasklistresponse/safetyconcerns/yoursafety/financialabuse-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var finAbuse = req.session.data['finanicalabuseq']

                // Check whether the variable matches a condition
                if (finAbuse == "yes"){
                  // Send user to next page
                  res.redirect('/tasklistresponse/safetyconcerns/yoursafety/financialdescription')

                }else {
                    // Send user to ineligible page
                    res.redirect('/tasklistresponse/safetyconcerns/yoursafety/psychologicalabuse')
                }

              });

              router.post('/tasklistresponse/safetyconcerns/yoursafety/psychologicalabuse-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var psychAbuse = req.session.data['psychologicalabuseq']

                  // Check whether the variable matches a condition
                  if (psychAbuse == "yes"){
                    // Send user to next page
                    res.redirect('/tasklistresponse/safetyconcerns/yoursafety/psychologicaldescription')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/tasklistresponse/safetyconcerns/yoursafety/emotionalabuse')
                  }

                });

                router.post('/tasklistresponse/safetyconcerns/yoursafety/emotionalabuse-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var emoAbuse = req.session.data['emotionalabuseq']

                    // Check whether the variable matches a condition
                    if (emoAbuse == "yes"){
                      // Send user to next page
                      res.redirect('/tasklistresponse/safetyconcerns/yoursafety/emotionaldescription')

                    }else {
                        // Send user to ineligible page
                        res.redirect('/tasklistresponse/safetyconcerns/yoursafety/checkanswers')
                    }

                  });

                  router.post('/tasklistresponse/safetyconcerns/yoursafety/generalquestions-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var genAbuse = req.session.data['generalabuse']

                      // Check whether the variable matches a condition
                      if (genAbuse == "yes"){
                        // Send user to next page
                        res.redirect('/tasklistresponse/safetyconcerns/yoursafety/sexualabuse')

                      }else {
                          // Send user to ineligible page
                          res.redirect('/tasklistresponse/safetyconcerns/yoursafety/generalno')
                      }

                    });

                    router.post('/tasklistresponse/safetyconcerns/childrensafety/childrenabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var genAbuse = req.session.data['generalabuse']

                        // Check whether the variable matches a condition
                        if (genAbuse == "yes"){
                          // Send user to next page
                          res.redirect('/tasklistresponse/safetyconcerns/childrensafety/start')

                        }else {
                            // Send user to ineligible page
                            res.redirect('/tasklistresponse/safetyconcerns/childrensafety/generalno')
                        }

                      });

                      router.post('/tasklistresponse/safetyconcerns/childrensafety/sexualabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var sexChildAbuse = req.session.data['sexualabuse']

                          // Check whether the variable matches a condition
                          if (sexChildAbuse == "yes"){
                            // Send user to next page
                            res.redirect('/tasklistresponse/safetyconcerns/childrensafety/sexualdescription')

                          }else {
                              // Send user to ineligible page
                              res.redirect('/tasklistresponse/safetyconcerns/childrensafety/physicalabuse')
                          }

                        });

                        router.post('/tasklistresponse/safetyconcerns/childrensafety/physicalabuse-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var physChildAbuse = req.session.data['physicalabuseq']

                            // Check whether the variable matches a condition
                            if (physChildAbuse == "yes"){
                              // Send user to next page
                              res.redirect('/tasklistresponse/safetyconcerns/childrensafety/physicaldescription')

                            }else {
                                // Send user to ineligible page
                                res.redirect('/tasklistresponse/safetyconcerns/childrensafety/financialabuse')
                            }

                          });

                          router.post('/tasklistresponse/safetyconcerns/childrensafety/financialabuse-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var finChildAbuse = req.session.data['finanicalabuseq']

                              // Check whether the variable matches a condition
                              if (finChildAbuse == "yes"){
                                // Send user to next page
                                res.redirect('/tasklistresponse/safetyconcerns/childrensafety/financialdescription')

                              }else {
                                  // Send user to ineligible page
                                  res.redirect('/tasklistresponse/safetyconcerns/childrensafety/psychologicalabuse')
                              }

                            });

                            router.post('/tasklistresponse/safetyconcerns/childrensafety/psychologicalabuse-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var psychChildAbuse = req.session.data['psychologicalabuseq']

                                // Check whether the variable matches a condition
                                if (psychChildAbuse == "yes"){
                                  // Send user to next page
                                  res.redirect('/tasklistresponse/safetyconcerns/childrensafety/psychologicaldescription')

                                }else {
                                    // Send user to ineligible page
                                    res.redirect('/tasklistresponse/safetyconcerns/childrensafety/emotionalabuse')
                                }

                              });

                              router.post('/tasklistresponse/safetyconcerns/childrensafety/emotionalabuse-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var emoChildAbuse = req.session.data['emotionalabuseq']

                                  // Check whether the variable matches a condition
                                  if (emoChildAbuse == "yes"){
                                    // Send user to next page
                                    res.redirect('/tasklistresponse/safetyconcerns/childrensafety/emotionaldescription')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/tasklistresponse/safetyconcerns/childrensafety/checkanswers')
                                  }

                                });

                                router.post('/tasklistresponse/safetyconcerns/existingorders/orders-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var existOrders = req.session.data['existingorders']

                                    // Check whether the variable matches a condition
                                    if (existOrders == "yes"){
                                      // Send user to next page
                                      res.redirect('/tasklistresponse/safetyconcerns/existingorders/ordersmade')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('/tasklistresponse/safetyconcerns/existingorders/checkanswers')
                                    }

                                  });

                                  router.post('/tasklistresponse/legalrepresentation/start-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var legRep = req.session.data['solicitor']

                                      // Check whether the variable matches a condition
                                      if (legRep == "yes"){
                                        // Send user to next page
                                        res.redirect('/tasklistresponse/legalrepresentation/solicitordirect')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('/tasklistresponse/legalrepresentation/solicitornotdirect')
                                      }

                                    });

                                    router.post('/tasklistresponse/legalrepresentation/solicitorresponse-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var legRep = req.session.data['selffill']

                                        // Check whether the variable matches a condition
                                        if (legRep == "yes"){
                                          // Send user to next page
                                          res.redirect('/tasklistresponse/legalrepresentation/solicitornotdirect')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('/tasklistresponse/legalrepresentation/solicitordirect')
                                        }

                                      });

                                      router.post('/tasklistresponse/aboutyou/confidentiality/start-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var conDetails = req.session.data['confidential']

                                          // Check whether the variable matches a condition
                                          if (conDetails == "yes"){
                                            // Send user to next page
                                            res.redirect('/tasklistresponse/aboutyou/confidentiality/feedback')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('/tasklistresponse/aboutyou/confidentiality/feedbackno')
                                          }

                                        });

                                        router.post('/tasklistresponse/aboutyou/confidentiality/startalternative-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var noConDe = req.session.data['confidential']

                                            // Check whether the variable matches a condition
                                            if (noConDe == "yes"){
                                              // Send user to next page
                                              res.redirect('/tasklistresponse/aboutyou/confidentiality/feedback')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/tasklistresponse/aboutyou/confidentiality/feedbackno')
                                            }

                                          });

                                        router.post('/tasklistresponse/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var detKnown = req.session.data['detailsknown']

                                            // Check whether the variable matches a condition
                                            if (detKnown == "yes"){
                                              // Send user to next page
                                              res.redirect('/tasklistresponse/aboutyou/confidentiality/startalternative')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/tasklistresponse/aboutyou/confidentiality/start')
                                            }

                                          });
                                          router.post('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/detailsknown-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var detailsKnown = req.session.data['detailsknown']

                                              // Check whether the variable matches a condition
                                              if (detailsKnown == "yes"){
                                                // Send user to next page
                                                res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/startalternative')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/start')
                                              }

                                            });
                                          router.post('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/detailsusedbefore-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var detailsUsed = req.session.data['detailsknown']

                                              // Check whether the variable matches a condition
                                              if (detailsUsed == "yes"){
                                                // Send user to next page
                                                res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/feedbackcant')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/detailsknown')
                                              }

                                            });
                                            router.post('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/start-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var confDetails = req.session.data['confidential']

                                                // Check whether the variable matches a condition
                                                if (confDetails == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/feedback')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/feedbackno')
                                                }

                                              });

                                              router.post('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/startalternative-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var noConf = req.session.data['confidential']

                                                  // Check whether the variable matches a condition
                                                  if (noConf == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/feedback')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/respondenttasklist/aboutyou/editcontactdetails/confidentiality/feedbackno')
                                                  }

                                                });


                                            router.post('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/detailsknown-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var detailsKnown = req.session.data['detailsknown']

                                                // Check whether the variable matches a condition
                                                if (detailsKnown == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/startalternative')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/start')
                                                }

                                              });
                                            router.post('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/detailsusedbefore-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var detailsUsed = req.session.data['detailsknown']

                                                // Check whether the variable matches a condition
                                                if (detailsUsed == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/feedbackcant')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/detailsknown')
                                                }

                                              });

                                              router.post('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/start-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var confDetails = req.session.data['confidential']

                                                  // Check whether the variable matches a condition
                                                  if (confDetails == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/feedback')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
                                                  }

                                                });

                                                router.post('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/startalternative-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var noConf = req.session.data['confidential']

                                                    // Check whether the variable matches a condition
                                                    if (noConf == "yes"){
                                                      // Send user to next page
                                                      res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/feedback')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('/respondenttasklist/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
                                                    }

                                                  });

                                              router.post('/tasklistresponse/aboutyou/confirmcontactdetails/confidentiality/start-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var conDetails = req.session.data['confidential']

                                                  // Check whether the variable matches a condition
                                                  if (conDetails == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/tasklistresponse/aboutyou/confirmcontactdetails/confidentiality/feedback')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/tasklistresponse/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
                                                  }

                                                });

                                                router.post('/tasklistresponse/aboutyou/confirmcontactdetails/confidentiality/startalternative-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var noConDe = req.session.data['confidential']

                                                    // Check whether the variable matches a condition
                                                    if (noConDe == "yes"){
                                                      // Send user to next page
                                                      res.redirect('/tasklistresponse/confirmcontactdetails/aboutyou/confidentiality/feedback')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('/tasklistresponse/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
                                                    }

                                                  });


                                          router.post('/tasklistresponse/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var reasonAdjust = req.session.data['reasonable-adjustments']

                                              // Check whether the variable matches a condition
                                              if (reasonAdjust == "No, I do not need any support at this time"){
                                                // Send user to next page
                                                res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/checkanswersreqs')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/tasklistresponse/aboutyou/tellusyourhearingneeds/documents')
                                              }

                                            });

                                            router.post('/tasklistresponse/safetyconcerns/generalabuse-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var genAbuse = req.session.data['generalabuse']

                                                // Check whether the variable matches a condition
                                                if (genAbuse == "Yes"){
                                                  // Send user to next page
                                                  res.redirect('concernabout')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('checkanswers-no')
                                                }

                                              });

                                              router.post('/tasklistresponse/safetyconcerns/concernabout-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var whoVic = req.session.data['concernabout']

                                                  // Check whether the variable matches a condition
                                                  if (whoVic == "thechildren"){
                                                    // Send user to next page
                                                    res.redirect('childabuse')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('typeofabuse')
                                                  }

                                                });

                                                router.post('/tasklistresponse/safetyconcerns/childabuse-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var abduct = req.session.data['childabuse']

                                                    // Check whether the variable matches a condition
                                                    if (abduct == "Abduction"){
                                                      // Send user to next page
                                                      res.redirect('abduction/childlocation')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('physicaldescriptionchild')
                                                    }

                                                  });

                                          router.post('/tasklistresponse/safetyconcerns/abduction/abduction-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var childAbd = req.session.data['abduction']

                                              // Check whether the variable matches a condition
                                              if (childAbd == "yes"){
                                                // Send user to next page
                                                res.redirect('/tasklistresponse/safetyconcerns/abduction/policeinvolvement')
                                              } else {
                                                // Send user to ineligible page
                                                res.redirect('/tasklistresponse/safetyconcerns/abduction/checkanswers')
                                              }

                                            });

                                            router.post('/tasklistresponse/safetyconcerns/abduction/threats-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var abdThreat = req.session.data['threat']

                                                // Check whether the variable matches a condition
                                                if (abdThreat == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/tasklistresponse/safetyconcerns/abduction/previousabductions')
                                                } else {
                                                  // Send user to ineligible page
                                                  res.redirect('../otherconcerns/drugs')
                                                }

                                              });

                                            router.post('/tasklistresponse/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var passport = req.session.data['passport']

                                                // Check whether the variable matches a condition
                                                if (passport == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/tasklistresponse/safetyconcerns/abduction/passportamount')
                                                } else {
                                                  // Send user to ineligible page
                                                  res.redirect('/tasklistresponse/safetyconcerns/abduction/threats')
                                                }

                                              });




//darespondenttasklist's forms below

  router.post('/darespondenttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var confDetails = req.session.data['confidential']

    // Check whether the variable matches a condition
    if (confDetails == "yes"){
      // Send user to next page
      res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedback')

    }else {
        // Send user to ineligible page
        res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedbackno')
    }

  });

  router.post('/darespondenttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var noConf = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (noConf == "yes"){
        // Send user to next page
        res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/darespondenttasklist/aboutyou/confidentiality/feedbackno')
      }

    });

    router.post('/darespondenttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var detailsKnown = req.session.data['detailsknown']

        // Check whether the variable matches a condition
        if (detailsKnown == "yes"){
          // Send user to next page
          res.redirect('/darespondenttasklist/aboutyou/confidentiality/startalternative')

        }else {
            // Send user to ineligible page
            res.redirect('/darespondenttasklist/aboutyou/confidentiality/start')
        }

      });

      router.post('/darespondenttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var reasonAdj = req.session.data['reasonable-adjustments']

          // Check whether the variable matches a condition
          if (reasonAdj == "No"){
            // Send user to next page
            res.redirect('../../submit/reviewandsubmit')

          }else {
              // Send user to ineligible page
              res.redirect('/darespondenttasklist/aboutyou/tellusyourhearingneeds/documents')
          }

        });

//respondenttasklist's forms below

router.post('/respondenttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var confDetails = req.session.data['confidential']
  // Check whether the variable matches a condition
  if (confDetails == "yes"){
    // Send user to next page
    res.redirect('/respondenttasklist/aboutyou/confidentiality/feedback')
  }else {
      // Send user to ineligible page
      res.redirect('/respondenttasklist/aboutyou/confidentiality/feedbackno')
  }
});
router.post('/respondenttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var noConf = req.session.data['confidential']
    // Check whether the variable matches a condition
    if (noConf == "yes"){
      // Send user to next page
      res.redirect('/respondenttasklist/aboutyou/confidentiality/feedback')
    }else {
        // Send user to ineligible page
        res.redirect('/respondenttasklist/aboutyou/confidentiality/feedbackno')
    }
  });
router.post('/respondenttasklist/applications/responsetoallegations/start-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var ansAlleg = req.session.data['answer']
    // Check whether the variable matches a condition
    if (ansAlleg == "yes"){
      // Send user to next page
      res.redirect('/respondenttasklist/applications/responsetoallegations/applicantabuse')
    }else {
        // Send user to ineligible page
        res.redirect('/respondenttasklist/applications/responsetoallegations/checkanswers-no')
    }
  });
  router.post('/respondenttasklist/applications/responsetoallegations/paperform/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var paperAlleg = req.session.data['answer']
      // Check whether the variable matches a condition
      if (paperAlleg == "yes"){
        // Send user to next page
        res.redirect('/respondenttasklist/applications/responsetoallegations/paperform/applicantabuse')
      }else {
          // Send user to ineligible page
          res.redirect('/respondenttasklist/applications/responsetoallegations/paperform/checkanswers-no')
      }
    });
  router.post('/respondenttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var detailsKnown = req.session.data['detailsknown']
      // Check whether the variable matches a condition
      if (detailsKnown == "yes"){
        // Send user to next page
        res.redirect('/respondenttasklist/aboutyou/confidentiality/startalternative')
      }else {
          // Send user to ineligible page
          res.redirect('/respondenttasklist/aboutyou/confidentiality/start')
      }
    });
    router.post('/respondenttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var reasonAdj = req.session.data['reasonable-adjustments']
        // Check whether the variable matches a condition
        if (reasonAdj == "No"){
          // Send user to next page
          res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/checkanswersreqs')
        }else {
            // Send user to ineligible page
            res.redirect('/respondenttasklist/aboutyou/tellusyourhearingneeds/documents')
        }
      });






  //C100 form below


  router.post('/applicanttasklist/aboutyou/confidentiality/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var confDetails = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (confDetails == "yes"){
        // Send user to next page
        res.redirect('/applicanttasklist/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/applicanttasklist/aboutyou/confidentiality/feedbackno')
      }

    });

    router.post('/applicanttasklist/aboutyou/confidentiality/startalternative-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var noConf = req.session.data['confidential']

        // Check whether the variable matches a condition
        if (noConf == "yes"){
          // Send user to next page
          res.redirect('/applicanttasklist/aboutyou/confidentiality/feedback')

        }else {
            // Send user to ineligible page
            res.redirect('/applicanttasklist/aboutyou/confidentiality/feedbackno')
        }

      });


      router.post('/applicanttasklist/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detailsKnown = req.session.data['detailsknown']

          // Check whether the variable matches a condition
          if (detailsKnown == "yes"){
            // Send user to next page
            res.redirect('/applicanttasklist/aboutyou/confidentiality/startalternative')

          }else {
              // Send user to ineligible page
              res.redirect('/applicanttasklist/aboutyou/confidentiality/start')
          }

        });

        router.post('/applicanttasklist/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var reasonAdjust = req.session.data['reasonable-adjustments']

            // Check whether the variable matches a condition
            if (reasonAdjust == "No"){
              // Send user to next page
              res.redirect('/applicanttasklist/aboutyou/tellusyourhearingneeds/checkanswersreqs')

            }else {
                // Send user to ineligible page
                res.redirect('/applicanttasklist/aboutyou/tellusyourhearingneeds/documents')
            }

          });

          router.post('/applicanttasklist/withdraw/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var withApp = req.session.data['withdraw']

              // Check whether the variable matches a condition
              if (withApp == "yes"){
                // Send user to next page
                res.redirect('confirmationwithdraw')

              }else {
                  // Send user to ineligible page
                  res.redirect('../startreply')
              }

            });

          router.post('/c100/legalrepresentation-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var legRep = req.session.data['solicitor']

              // Check whether the variable matches a condition
              if (legRep == "Yes"){
                // Send user to next page
                res.redirect('/c100/legalrepresentationapplication')

              }else {
                  // Send user to ineligible page
                  res.redirect('permissions')
              }

            });

            router.post('/c100/legalrepresentationapplication-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var repCon = req.session.data['solicitorapplication']

                // Check whether the variable matches a condition
                if (repCon == "Yes"){
                  // Send user to next page
                  res.redirect('contactrepresentative')

                }else {
                    // Send user to ineligible page
                    res.redirect('permissions')
                }

              });

              router.post('/c100/permissions-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var permNeed = req.session.data['permission']

                  // Check whether the variable matches a condition
                  if (permNeed == "Yes"){
                    // Send user to next page
                    res.redirect('permissionswhy')

                  }else {
                      // Send user to ineligible page
                      res.redirect('miam/miamotherproceedings')
                  }

                });

                router.post('/c100/permissionsrequested-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var permReq = req.session.data['permissionsrequested']

                    // Check whether the variable matches a condition
                    if (permReq == "Yes"){
                      // Send user to next page
                      res.redirect('miam/miamotherproceedings')

                    }else {
                        // Send user to ineligible page
                        res.redirect('permissionsguidance')
                    }

                  });

                  router.post('/c100/safetyconcerns/generalabuse-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var genAbuse = req.session.data['generalabuse']

                      // Check whether the variable matches a condition
                      if (genAbuse == "Yes"){
                        // Send user to next page
                        res.redirect('concernabout')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../internationalelement/start')
                      }

                    });

                    router.post('/c100/safetyconcerns/concernabout-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var whoVic = req.session.data['concernabout']

                        // Check whether the variable matches a condition
                        if (whoVic == "thechildren"){
                          // Send user to next page
                          res.redirect('childabuse')

                        }else {
                            // Send user to ineligible page
                            res.redirect('typeofabuse')
                        }

                      });

                      router.post('/c100/safetyconcerns/childabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var abduct = req.session.data['childabuse']

                          // Check whether the variable matches a condition
                          if (abduct == "Abduction"){
                            // Send user to next page
                            res.redirect('abduction/childlocation')

                          }else {
                              // Send user to ineligible page
                              res.redirect('physicaldescriptionchild')
                          }

                        });

                router.post('/c100/safetyconcerns/abduction/abduction-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var childAbd = req.session.data['abduction']

                    // Check whether the variable matches a condition
                    if (childAbd == "yes"){
                      // Send user to next page
                      res.redirect('/c100/safetyconcerns/abduction/policeinvolvement')
                    } else {
                      // Send user to ineligible page
                      res.redirect('/c100/safetyconcerns/abduction/checkanswers')
                    }

                  });

                  router.post('/c100/safetyconcerns/abduction/threats-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var abdThreat = req.session.data['threat']

                      // Check whether the variable matches a condition
                      if (abdThreat == "yes"){
                        // Send user to next page
                        res.redirect('/c100/safetyconcerns/abduction/previousabductions')
                      } else {
                        // Send user to ineligible page
                        res.redirect('../otherconcerns/drugs')
                      }

                    });

                  router.post('/c100/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var passport = req.session.data['passport']

                      // Check whether the variable matches a condition
                      if (passport == "yes"){
                        // Send user to next page
                        res.redirect('/c100/safetyconcerns/abduction/passportamount')
                      } else {
                        // Send user to ineligible page
                        res.redirect('/c100/safetyconcerns/abduction/threats')
                      }

                    });

                    router.post('/c100/typeoforder/courtorder-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var typeOrder = req.session.data['typeoforder']

                        // Check whether the variable matches a condition
                        if (typeOrder == "child_arrangements_home"){
                          // Send user to next page
                          res.redirect('caorder')
                        } else {
                          // Send user to ineligible page
                          res.redirect('caorder2')
                        }

                      });

                      router.post('/c100/confidentiality/start-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var conDetails = req.session.data['confidential']

                          // Check whether the variable matches a condition
                          if (conDetails == "yes"){
                            // Send user to next page
                            res.redirect('feedback')

                          }else {
                              // Send user to ineligible page
                              res.redirect('feedbackno')
                          }

                        });

                        router.post('/c100/confidentiality/startalternative-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var noConDe = req.session.data['confidential']

                            // Check whether the variable matches a condition
                            if (noConDe == "yes"){
                              // Send user to next page
                              res.redirect('feedback')

                            }else {
                                // Send user to ineligible page
                                res.redirect('feedbackno')
                            }

                          });

                        router.post('/c100/confidentiality/detailsknown-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var detKnown = req.session.data['detailsknown']

                            // Check whether the variable matches a condition
                            if (detKnown == "yes"){
                              // Send user to next page
                              res.redirect('startalternative')

                            }else {
                                // Send user to ineligible page
                                res.redirect('start')
                            }

                            });

                            router.post('/c100/typeofhearing/urgent-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var urgHear = req.session.data['urgenthering']

                                // Check whether the variable matches a condition
                                if (urgHear == "yes"){
                                  // Send user to next page
                                  res.redirect('urgentdetails')

                                }else {
                                    // Send user to ineligible page
                                    res.redirect('withoutnotice')
                                }

                                });

                                router.post('/c100/typeofhearing/withoutnotice-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var withNotice = req.session.data['withoutnotice']

                                    // Check whether the variable matches a condition
                                    if (withNotice == "yes"){
                                      // Send user to next page
                                      res.redirect('withoutnoticedetails')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('../people/childplaceholder')
                                    }

                                    });

                                    router.post('/c100/consentagreement-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var consAgr = req.session.data['consentagreement']

                                        // Check whether the variable matches a condition
                                        if (consAgr == "Yes"){
                                          // Send user to next page
                                          res.redirect('consentorder/typeoforder/courtorder')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('alternativeresolution/goingtocourt')
                                        }

                                        });

                      router.post('/c100/proceedings/start-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var protProceedings = req.session.data['protection']
                          var proceedings = req.session.data['childrenorders']

                          // Check whether the variable matches a condition
                          if (proceedings == "yes" || protProceedings == "yes"){
                            // Send user to next page
                            res.redirect('/c100/proceedings/courtproceedings')
                          } else {
                            // Send user to ineligible page
                            res.redirect('../safetyconcerns/concernguidance')
                          }

                        });

                        router.post('/c100/safetyconcerns/childabuse-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var chilAbuse = req.session.data['childabuse']

                            // Check whether the variable matches a condition
                            if (chilAbuse == "physicalabuse" ){
                              // Send user to next page
                              res.redirect('/c100/safetyconcerns/physicaldescriptionchild')
                            }

                            else {
                              // Send user to ineligible page
                              res.redirect('/c100/safetyconcerns/otherconcerns/drugs')
                            }

                          });



                          router.post('/c100/tellusyourhearingneeds/start-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var reasonAdjust = req.session.data['reasonable-adjustments']

                              // Check whether the variable matches a condition
                              if (reasonAdjust == "No, I do not need any support at this time"){
                                // Send user to next page
                                res.redirect('../submit/electronic/fees/helpwithfees')

                              }else {
                                  // Send user to ineligible page
                                  res.redirect('/c100/tellusyourhearingneeds/documents')
                              }

                            });


                                router.post('/c100/submit/howtosubmit-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var howSub = req.session.data['howsubmit']

                                    // Check whether the variable matches a condition
                                    if (howSub == "Submit electronically"){
                                      // Send user to next page
                                      res.redirect('electronic/fees/helpwithfees')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('paper/fees/helpwithfees')
                                    }

                                  });

                                router.post('/c100/miam/miamotherproceedings-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var miamProc = req.session.data['miamproceedings']

                                    // Check whether the variable matches a condition
                                    if (miamProc == "yes"){
                                      // Send user to next page
                                      res.redirect('miamnoneed')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('miaminfo')
                                    }

                                  });

                                  router.post('/c100/miam/miamattendance-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var miamAtt = req.session.data['miamattendance']

                                      // Check whether the variable matches a condition
                                      if (miamAtt == "yes"){
                                        // Send user to next page
                                        res.redirect('miamdocument')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('mediatorconfirmation')
                                      }

                                    });

                                    router.post('/c100/miam/miamdocument-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var miamDoc = req.session.data['miamdocument']

                                        // Check whether the variable matches a condition
                                        if (miamDoc == "yes"){
                                          // Send user to next page
                                          res.redirect('miamupload')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('miamgetdoc')
                                        }

                                      });


                                      router.post('/c100/miam/mediatorconfirmation-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var medConf = req.session.data['mediatorconfirmation']

                                          // Check whether the variable matches a condition
                                          if (medConf == "yes"){
                                            // Send user to next page
                                            res.redirect('mediatordocument')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('validreason')
                                          }

                                        });

                                        router.post('/c100/miam/mediatordocument-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var medDoc = req.session.data['mediatordocument']

                                            // Check whether the variable matches a condition
                                            if (medDoc == "yes"){
                                              // Send user to next page
                                              res.redirect('miamupload')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('miamgetdoc')
                                            }

                                          });

                                          router.post('/c100/miam/validreason-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var valReas = req.session.data['validreason']

                                              // Check whether the variable matches a condition
                                              if (valReas == "yes"){
                                                // Send user to next page
                                                res.redirect('generalreasons')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('miamgetmediator')
                                              }

                                            });

                                            router.post('/c100/miam/generalreasons-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var valReas = req.session.data['exemptionreasons']

                                                // Check whether the variable matches a condition
                                                if (valReas == "Urgency"){
                                                  // Send user to next page
                                                  res.redirect('miamurgency')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('miamdomesticabuse')
                                                }

                                              });



                                              router.post('/c100/miam/miamurgency-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var urgReason = req.session.data['urgency']

                                                  // Check whether the variable matches a condition
                                                  if (urgReason == "No"){
                                                    // Send user to next page
                                                    res.redirect('miampreviousattendance')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('../miamurgencyjourney/typeofhearing/urgent')
                                                  }

                                                });

                                                router.post('/c100/proceedings/emergencyprotectionorder-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var ordCopy = req.session.data['ordercopy']

                                                    // Check whether the variable matches a condition
                                                    if (ordCopy == "yes"){
                                                      // Send user to next page
                                                      res.redirect('emergencyupload')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('../safetyconcerns/concernguidance')
                                                    }

                                                  });

                                                  router.post('/c100/proceedings/courtproceedings-answer', function (req, res) {
                                                      // Make a variable and give it the value from 'how-many-balls'
                                                      var curOrders = req.session.data['proceedings']

                                                      // Check whether the variable matches a condition
                                                      if (curOrders == "Emergency Protection Order"){
                                                        // Send user to next page
                                                        res.redirect('emergencyprotectionorder')

                                                      }else {
                                                          // Send user to ineligible page
                                                          res.redirect('otherorder')
                                                      }

                                                    });

                                                    router.post('/c100/proceedings/otherorder-answer', function (req, res) {
                                                        // Make a variable and give it the value from 'how-many-balls'
                                                        var othOrder = req.session.data['ordercopy']

                                                        // Check whether the variable matches a condition
                                                        if (othOrder == "yes"){
                                                          // Send user to next page
                                                          res.redirect('otherordersupload')

                                                        }else {
                                                            // Send user to ineligible page
                                                            res.redirect('../safetyconcerns/concernguidance')
                                                        }

                                                      });

                                                      router.post('/c100/submit/electronic/fees/helpwithfees-answer', function (req, res) {
                                                          // Make a variable and give it the value from 'how-many-balls'
                                                          var elhwFees = req.session.data['helpwithfees']

                                                          // Check whether the variable matches a condition
                                                          if (elhwFees == "Yes"){
                                                            // Send user to next page
                                                            res.redirect('feesapplied')

                                                          }else {
                                                              // Send user to ineligible page
                                                              res.redirect('../reviewandsubmit')
                                                          }

                                                        });

                                                        router.post('/c100/submit/paper/fees/helpwithfees-answer', function (req, res) {
                                                            // Make a variable and give it the value from 'how-many-balls'
                                                            var paphwFees = req.session.data['helpwithfees']

                                                            // Check whether the variable matches a condition
                                                            if (paphwFees == "Yes"){
                                                              // Send user to next page
                                                              res.redirect('feesapplied')

                                                            }else {
                                                                // Send user to ineligible page
                                                                res.redirect('../reviewandsubmitpaper')
                                                            }

                                                          });

                                                          router.post('/c100/submit/electronic/fees/feesapplied-answer', function (req, res) {
                                                              // Make a variable and give it the value from 'how-many-balls'
                                                              var elfeeApp = req.session.data['feesapplied']

                                                              // Check whether the variable matches a condition
                                                              if (elfeeApp == "Yes"){
                                                                // Send user to next page
                                                                res.redirect('../reviewandsubmithwf')

                                                              }else {
                                                                  // Send user to ineligible page
                                                                  res.redirect('hwfguidance')
                                                              }

                                                            });


                                                        router.post('/c100/submit/paper/fees/feesapplied-answer', function (req, res) {
                                                            // Make a variable and give it the value from 'how-many-balls'
                                                            var papfeeApp = req.session.data['feesapplied']

                                                            // Check whether the variable matches a condition
                                                            if (papfeeApp == "Yes"){
                                                              // Send user to next page
                                                              res.redirect('../reviewandsubmitpaperhwf')

                                                            }else {
                                                                // Send user to ineligible page
                                                                res.redirect('hwfguidance')
                                                            }

                                                          });


//________________________________________________
//Consent order journey


router.post('/c100/consentorder/typeoforder/courtorder-answer', function (req, res) {
// Make a variable and give it the value from 'how-many-balls'
var typeOrder = req.session.data['typeoforder']

// Check whether the variable matches a condition
if (typeOrder == "child_arrangements_home"){
// Send user to next page
res.redirect('caorder')
} else {
// Send user to ineligible page
res.redirect('caorder2')
}

});

router.post('/c100/consentorder/legalrepresentation-answer', function (req, res) {
// Make a variable and give it the value from 'how-many-balls'
var legRep = req.session.data['solicitor']

// Check whether the variable matches a condition
if (legRep == "Yes"){
// Send user to next page
res.redirect('/c100/consentorder/legalrepresentationapplication')

}else {
  // Send user to ineligible page
  res.redirect('typeofhearing/urgent')
}

});

router.post('/c100/consentorder/legalrepresentationapplication-answer', function (req, res) {
// Make a variable and give it the value from 'how-many-balls'
var repCon = req.session.data['solicitorapplication']

// Check whether the variable matches a condition
if (repCon == "Yes"){
  // Send user to next page
  res.redirect('contactrepresentative')

}else {
    // Send user to ineligible page
    res.redirect('permissions')
}

});

router.post('/c100/consentorder/typeofhearing/urgent-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var urgHear = req.session.data['urgenthering']

  // Check whether the variable matches a condition
  if (urgHear == "yes"){
    // Send user to next page
    res.redirect('urgentdetails')

  }else {
      // Send user to ineligible page
      res.redirect('withoutnotice')
  }

  });

  router.post('/c100/consentorder/typeofhearing/withoutnotice-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var withNotice = req.session.data['withoutnotice']

      // Check whether the variable matches a condition
      if (withNotice == "yes"){
        // Send user to next page
        res.redirect('withoutnoticedetails')

      }else {
          // Send user to ineligible page
          res.redirect('../people/childplaceholder')
      }

      });

      router.post('/c100/consentorder/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detKnown = req.session.data['detailsknown']

          // Check whether the variable matches a condition
          if (detKnown == "yes"){
            // Send user to next page
            res.redirect('startalternative')

          }else {
              // Send user to ineligible page
              res.redirect('start')
          }

          });

          router.post('/c100/consentorder/confidentiality/startalternative-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var noConDe = req.session.data['confidential']

              // Check whether the variable matches a condition
              if (noConDe == "yes"){
                // Send user to next page
                res.redirect('feedback')

              }else {
                  // Send user to ineligible page
                  res.redirect('feedbackno')
              }

            });

            router.post('/c100/consentorder/confidentiality/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var conDetails = req.session.data['confidential']

                // Check whether the variable matches a condition
                if (conDetails == "yes"){
                  // Send user to next page
                  res.redirect('feedback')

                }else {
                    // Send user to ineligible page
                    res.redirect('feedbackno')
                }

              });

              router.post('/c100/consentorder/proceedings/start-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var protProceedings = req.session.data['protection']
                  var proceedings = req.session.data['childrenorders']

                  // Check whether the variable matches a condition
                  if (proceedings == "yes" || protProceedings == "yes"){
                    // Send user to next page
                    res.redirect('/c100/consentorder/proceedings/courtproceedings')
                  } else {
                    // Send user to ineligible page
                    res.redirect('../safetyconcerns/concernguidance')
                  }

                });

                router.post('/c100/consentorder/proceedings/courtproceedings-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var curOrders = req.session.data['proceedings']

                    // Check whether the variable matches a condition
                    if (curOrders == "Emergency Protection Order"){
                      // Send user to next page
                      res.redirect('emergencyprotectionorder')

                    }else {
                        // Send user to ineligible page
                        res.redirect('otherorder')
                    }

                  });

                  router.post('/c100/consentorder/proceedings/otherorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var othOrder = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (othOrder == "yes"){
                        // Send user to next page
                        res.redirect('otherordersupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });


                  router.post('/c100/consentorder/proceedings/emergencyprotectionorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var ordCopy = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (ordCopy == "yes"){
                        // Send user to next page
                        res.redirect('emergencyupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });

                    router.post('/c100/consentorder/safetyconcerns/generalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var genAbuse = req.session.data['generalabuse']

                        // Check whether the variable matches a condition
                        if (genAbuse == "Yes"){
                          // Send user to next page
                          res.redirect('concernabout')

                        }else {
                            // Send user to ineligible page
                            res.redirect('../internationalelement/start')
                        }

                      });

                      router.post('/c100/consentorder/safetyconcerns/concernabout-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var whoVic = req.session.data['concernabout']

                          // Check whether the variable matches a condition
                          if (whoVic == "thechildren"){
                            // Send user to next page
                            res.redirect('childabuse')

                          }else {
                              // Send user to ineligible page
                              res.redirect('typeofabuse')
                          }

                        });

                        router.post('/c100/consentorder/safetyconcerns/childabuse-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var abduct = req.session.data['childabuse']

                            // Check whether the variable matches a condition
                            if (abduct == "Abduction"){
                              // Send user to next page
                              res.redirect('abduction/childlocation')

                            }else {
                                // Send user to ineligible page
                                res.redirect('physicaldescriptionchild')
                            }

                          });


                          router.post('/c100/consentorder/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var passport = req.session.data['passport']

                              // Check whether the variable matches a condition
                              if (passport == "yes"){
                                // Send user to next page
                                res.redirect('/c100/consentorder/safetyconcerns/abduction/passportamount')
                              } else {
                                // Send user to ineligible page
                                res.redirect('/c100/consentorder/safetyconcerns/abduction/threats')
                              }

                            });

                            router.post('/c100/consentorder/safetyconcerns/abduction/threats-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var abdThreat = req.session.data['threat']

                                // Check whether the variable matches a condition
                                if (abdThreat == "yes"){
                                  // Send user to next page
                                  res.redirect('/c100/consentorder/safetyconcerns/abduction/previousabductions')
                                } else {
                                  // Send user to ineligible page
                                  res.redirect('../otherconcerns/drugs')
                                }

                              });

                              router.post('/c100/consentorder/tellusyourhearingneeds/start-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var reasonAdjust = req.session.data['reasonable-adjustments']

                                  // Check whether the variable matches a condition
                                  if (reasonAdjust == "No, I do not need any support at this time"){
                                    // Send user to next page
                                    res.redirect('../submit/howtosubmit')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/c100/consentorder/tellusyourhearingneeds/documents')
                                  }

                                });

                                router.post('/c100/consentorder/submit/howtosubmit-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var howSub = req.session.data['howsubmit']

                                    // Check whether the variable matches a condition
                                    if (howSub == "Submit electronically"){
                                      // Send user to next page
                                      res.redirect('electronic/fees/helpwithfees')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('paper/fees/helpwithfees')
                                    }

                                  });

                                  router.post('/c100/consentorder/submit/electronic/fees/helpwithfees-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var elhwFees = req.session.data['helpwithfees']

                                      // Check whether the variable matches a condition
                                      if (elhwFees == "Yes"){
                                        // Send user to next page
                                        res.redirect('feesapplied')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('../reviewandsubmit')
                                      }

                                    });

                                    router.post('/c100/consentorder/submit/paper/fees/helpwithfees-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var paphwFees = req.session.data['helpwithfees']

                                        // Check whether the variable matches a condition
                                        if (paphwFees == "Yes"){
                                          // Send user to next page
                                          res.redirect('feesapplied')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('../reviewandsubmitpaper')
                                        }

                                      });

                                      router.post('/c100/consentorder/submit/electronic/fees/feesapplied-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var elfeeApp = req.session.data['feesapplied']

                                          // Check whether the variable matches a condition
                                          if (elfeeApp == "Yes"){
                                            // Send user to next page
                                            res.redirect('../reviewandsubmithwf')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('hwfguidance')
                                          }

                                        });


                                    router.post('/c100/consentorder/submit/paper/fees/feesapplied-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var papfeeApp = req.session.data['feesapplied']

                                        // Check whether the variable matches a condition
                                        if (papfeeApp == "Yes"){
                                          // Send user to next page
                                          res.redirect('../reviewandsubmitpaperhwf')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('hwfguidance')
                                        }

                                      });




//________________________________________________
//MIAM existing proceedings journey


router.post('/c100/miamotherproceedings/typeoforder/courtorder-answer', function (req, res) {
// Make a variable and give it the value from 'how-many-balls'
var typeOrder = req.session.data['typeoforder']

// Check whether the variable matches a condition
if (typeOrder == "child_arrangements_home"){
// Send user to next page
res.redirect('caorder')
} else {
// Send user to ineligible page
res.redirect('caorder2')
}

});

router.post('/c100/miamotherproceedings/typeofhearing/urgent-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var urgHear = req.session.data['urgenthering']

  // Check whether the variable matches a condition
  if (urgHear == "yes"){
    // Send user to next page
    res.redirect('urgentdetails')

  }else {
      // Send user to ineligible page
      res.redirect('withoutnotice')
  }

  });

  router.post('/c100/miamotherproceedings/typeofhearing/withoutnotice-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var withNotice = req.session.data['withoutnotice']

      // Check whether the variable matches a condition
      if (withNotice == "yes"){
        // Send user to next page
        res.redirect('withoutnoticedetails')

      }else {
          // Send user to ineligible page
          res.redirect('../people/childplaceholder')
      }

      });

      router.post('/c100/miamotherproceedings/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detKnown = req.session.data['detailsknown']

          // Check whether the variable matches a condition
          if (detKnown == "yes"){
            // Send user to next page
            res.redirect('startalternative')

          }else {
              // Send user to ineligible page
              res.redirect('start')
          }

          });

          router.post('/c100/miamotherproceedings/confidentiality/startalternative-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var noConDe = req.session.data['confidential']

              // Check whether the variable matches a condition
              if (noConDe == "yes"){
                // Send user to next page
                res.redirect('feedback')

              }else {
                  // Send user to ineligible page
                  res.redirect('feedbackno')
              }

            });

            router.post('/c100/miamotherproceedings/confidentiality/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var conDetails = req.session.data['confidential']

                // Check whether the variable matches a condition
                if (conDetails == "yes"){
                  // Send user to next page
                  res.redirect('feedback')

                }else {
                    // Send user to ineligible page
                    res.redirect('feedbackno')
                }

              });

              router.post('/c100/miamotherproceedings/proceedings/start-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var protProceedings = req.session.data['protection']
                  var proceedings = req.session.data['childrenorders']

                  // Check whether the variable matches a condition
                  if (proceedings == "yes" || protProceedings == "yes"){
                    // Send user to next page
                    res.redirect('/c100/miamotherproceedings/proceedings/courtproceedings')
                  } else {
                    // Send user to ineligible page
                    res.redirect('../typeoforder/courtorder')
                  }

                });

                router.post('/c100/miamotherproceedings/proceedings/courtproceedings-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var curOrders = req.session.data['proceedings']

                    // Check whether the variable matches a condition
                    if (curOrders == "Emergency Protection Order"){
                      // Send user to next page
                      res.redirect('emergencyprotectionorder')

                    }else {
                        // Send user to ineligible page
                        res.redirect('otherorder')
                    }

                  });

                  router.post('/c100/miamotherproceedings/proceedings/otherorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var othOrder = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (othOrder == "yes"){
                        // Send user to next page
                        res.redirect('otherordersupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });


                  router.post('/c100/miamotherproceedings/proceedings/emergencyprotectionorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var ordCopy = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (ordCopy == "yes"){
                        // Send user to next page
                        res.redirect('emergencyupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });

                    router.post('/c100/miamotherproceedings/safetyconcerns/generalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var genAbuse = req.session.data['generalabuse']

                        // Check whether the variable matches a condition
                        if (genAbuse == "Yes"){
                          // Send user to next page
                          res.redirect('concernabout')

                        }else {
                            // Send user to ineligible page
                            res.redirect('../internationalelement/start')
                        }

                      });

                      router.post('/c100/miamotherproceedings/safetyconcerns/concernabout-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var whoVic = req.session.data['concernabout']

                          // Check whether the variable matches a condition
                          if (whoVic == "thechildren"){
                            // Send user to next page
                            res.redirect('childabuse')

                          }else {
                              // Send user to ineligible page
                              res.redirect('typeofabuse')
                          }

                        });

                        router.post('/c100/miamotherproceedings/safetyconcerns/childabuse-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var abduct = req.session.data['childabuse']

                            // Check whether the variable matches a condition
                            if (abduct == "Abduction"){
                              // Send user to next page
                              res.redirect('abduction/childlocation')

                            }else {
                                // Send user to ineligible page
                                res.redirect('physicaldescriptionchild')
                            }

                          });


                          router.post('/c100/miamotherproceedings/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var passport = req.session.data['passport']

                              // Check whether the variable matches a condition
                              if (passport == "yes"){
                                // Send user to next page
                                res.redirect('/c100/miamotherproceedings/safetyconcerns/abduction/passportamount')
                              } else {
                                // Send user to ineligible page
                                res.redirect('/c100/miamotherproceedings/safetyconcerns/abduction/threats')
                              }

                            });

                            router.post('/c100/miamotherproceedings/safetyconcerns/abduction/threats-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var abdThreat = req.session.data['threat']

                                // Check whether the variable matches a condition
                                if (abdThreat == "yes"){
                                  // Send user to next page
                                  res.redirect('/c100/miamotherproceedings/safetyconcerns/abduction/previousabductions')
                                } else {
                                  // Send user to ineligible page
                                  res.redirect('../otherconcerns/drugs')
                                }

                              });

                              router.post('/c100/miamotherproceedings/tellusyourhearingneeds/start-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var reasonAdjust = req.session.data['reasonable-adjustments']

                                  // Check whether the variable matches a condition
                                  if (reasonAdjust == "No, I do not need any support at this time"){
                                    // Send user to next page
                                    res.redirect('../submit/howtosubmit')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/c100/miamotherproceedings/tellusyourhearingneeds/documents')
                                  }

                                });

                                router.post('/c100/miamotherproceedings/submit/howtosubmit-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var howSub = req.session.data['howsubmit']

                                    // Check whether the variable matches a condition
                                    if (howSub == "Submit electronically"){
                                      // Send user to next page
                                      res.redirect('electronic/fees/helpwithfees')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('paper/fees/helpwithfees')
                                    }

                                  });

                                  router.post('/c100/miamotherproceedings/submit/electronic/fees/helpwithfees-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var elhwFees = req.session.data['helpwithfees']

                                      // Check whether the variable matches a condition
                                      if (elhwFees == "Yes"){
                                        // Send user to next page
                                        res.redirect('feesapplied')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('../reviewandsubmit')
                                      }

                                    });

                                    router.post('/c100/miamotherproceedings/submit/paper/fees/helpwithfees-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var paphwFees = req.session.data['helpwithfees']

                                        // Check whether the variable matches a condition
                                        if (paphwFees == "Yes"){
                                          // Send user to next page
                                          res.redirect('feesapplied')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('../reviewandsubmitpaper')
                                        }

                                      });

                                      router.post('/c100/miamotherproceedings/submit/electronic/fees/feesapplied-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var elfeeApp = req.session.data['feesapplied']

                                          // Check whether the variable matches a condition
                                          if (elfeeApp == "Yes"){
                                            // Send user to next page
                                            res.redirect('../reviewandsubmithwf')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('hwfguidance')
                                          }

                                        });


                                    router.post('/c100/miamotherproceedings/submit/paper/fees/feesapplied-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var papfeeApp = req.session.data['feesapplied']

                                        // Check whether the variable matches a condition
                                        if (papfeeApp == "Yes"){
                                          // Send user to next page
                                          res.redirect('../reviewandsubmitpaperhwf')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('hwfguidance')
                                        }

                                      });


//________________________________________________
//MIAM urgency journey


router.post('/c100/miamurgencyjourney/typeoforder/courtorder-answer', function (req, res) {
// Make a variable and give it the value from 'how-many-balls'
var typeOrder = req.session.data['typeoforder']

// Check whether the variable matches a condition
if (typeOrder == "child_arrangements_home"){
// Send user to next page
res.redirect('caorder')
} else {
// Send user to ineligible page
res.redirect('caorder2')
}

});

router.post('/c100/miamurgencyjourney/typeofhearing/urgent-answer', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var urgHear = req.session.data['urgenthering']

  // Check whether the variable matches a condition
  if (urgHear == "yes"){
    // Send user to next page
    res.redirect('urgentdetails')

  }else {
      // Send user to ineligible page
      res.redirect('withoutnotice')
  }

  });

  router.post('/c100/miamurgencyjourney/typeofhearing/withoutnotice-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var withNotice = req.session.data['withoutnotice']

      // Check whether the variable matches a condition
      if (withNotice == "yes"){
        // Send user to next page
        res.redirect('withoutnoticedetails')

      }else {
          // Send user to ineligible page
          res.redirect('../typeoforder/courtorder')
      }

      });

      router.post('/c100/miamurgencyjourney/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detKnown = req.session.data['detailsknown']

          // Check whether the variable matches a condition
          if (detKnown == "yes"){
            // Send user to next page
            res.redirect('startalternative')

          }else {
              // Send user to ineligible page
              res.redirect('start')
          }

          });

          router.post('/c100/miamurgencyjourney/confidentiality/startalternative-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var noConDe = req.session.data['confidential']

              // Check whether the variable matches a condition
              if (noConDe == "yes"){
                // Send user to next page
                res.redirect('feedback')

              }else {
                  // Send user to ineligible page
                  res.redirect('feedbackno')
              }

            });

            router.post('/c100/miamurgencyjourney/confidentiality/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var conDetails = req.session.data['confidential']

                // Check whether the variable matches a condition
                if (conDetails == "yes"){
                  // Send user to next page
                  res.redirect('feedback')

                }else {
                    // Send user to ineligible page
                    res.redirect('feedbackno')
                }

              });

              router.post('/c100/miamurgencyjourney/proceedings/start-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var protProceedings = req.session.data['protection']
                  var proceedings = req.session.data['childrenorders']

                  // Check whether the variable matches a condition
                  if (proceedings == "yes" || protProceedings == "yes"){
                    // Send user to next page
                    res.redirect('/c100/miamurgencyjourney/proceedings/courtproceedings')
                  } else {
                    // Send user to ineligible page
                    res.redirect('../safetyconcerns/concernguidance')
                  }

                });

                router.post('/c100/miamurgencyjourney/proceedings/courtproceedings-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var curOrders = req.session.data['proceedings']

                    // Check whether the variable matches a condition
                    if (curOrders == "Emergency Protection Order"){
                      // Send user to next page
                      res.redirect('emergencyprotectionorder')

                    }else {
                        // Send user to ineligible page
                        res.redirect('otherorder')
                    }

                  });

                  router.post('/c100/miamurgencyjourney/proceedings/otherorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var othOrder = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (othOrder == "yes"){
                        // Send user to next page
                        res.redirect('otherordersupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });


                  router.post('/c100/miamurgencyjourney/proceedings/emergencyprotectionorder-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var ordCopy = req.session.data['ordercopy']

                      // Check whether the variable matches a condition
                      if (ordCopy == "yes"){
                        // Send user to next page
                        res.redirect('emergencyupload')

                      }else {
                          // Send user to ineligible page
                          res.redirect('../safetyconcerns/concernguidance')
                      }

                    });

                    router.post('/c100/miamurgencyjourney/safetyconcerns/generalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var genAbuse = req.session.data['generalabuse']

                        // Check whether the variable matches a condition
                        if (genAbuse == "Yes"){
                          // Send user to next page
                          res.redirect('concernabout')

                        }else {
                            // Send user to ineligible page
                            res.redirect('../internationalelement/start')
                        }

                      });

                      router.post('/c100/miamurgencyjourney/safetyconcerns/concernabout-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var whoVic = req.session.data['concernabout']

                          // Check whether the variable matches a condition
                          if (whoVic == "thechildren"){
                            // Send user to next page
                            res.redirect('childabuse')

                          }else {
                              // Send user to ineligible page
                              res.redirect('typeofabuse')
                          }

                        });

                        router.post('/c100/miamurgencyjourney/safetyconcerns/childabuse-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var abduct = req.session.data['childabuse']

                            // Check whether the variable matches a condition
                            if (abduct == "Abduction"){
                              // Send user to next page
                              res.redirect('abduction/childlocation')

                            }else {
                                // Send user to ineligible page
                                res.redirect('physicaldescriptionchild')
                            }

                          });


                          router.post('/c100/miamurgencyjourney/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var passport = req.session.data['passport']

                              // Check whether the variable matches a condition
                              if (passport == "yes"){
                                // Send user to next page
                                res.redirect('/c100/miamurgencyjourney/safetyconcerns/abduction/passportamount')
                              } else {
                                // Send user to ineligible page
                                res.redirect('/c100/miamurgencyjourney/safetyconcerns/abduction/threats')
                              }

                            });

                            router.post('/c100/miamurgencyjourney/safetyconcerns/abduction/threats-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var abdThreat = req.session.data['threat']

                                // Check whether the variable matches a condition
                                if (abdThreat == "yes"){
                                  // Send user to next page
                                  res.redirect('/c100/miamurgencyjourney/safetyconcerns/abduction/previousabductions')
                                } else {
                                  // Send user to ineligible page
                                  res.redirect('../otherconcerns/drugs')
                                }

                              });

                              router.post('/c100/miamurgencyjourney/tellusyourhearingneeds/start-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var reasonAdjust = req.session.data['reasonable-adjustments']

                                  // Check whether the variable matches a condition
                                  if (reasonAdjust == "No, I do not need any support at this time"){
                                    // Send user to next page
                                    res.redirect('../submit/howtosubmit')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/c100/miamurgencyjourney/tellusyourhearingneeds/documents')
                                  }

                                });

                                router.post('/c100/miamurgencyjourney/submit/howtosubmit-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var howSub = req.session.data['howsubmit']

                                    // Check whether the variable matches a condition
                                    if (howSub == "Submit electronically"){
                                      // Send user to next page
                                      res.redirect('electronic/fees/helpwithfees')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('paper/fees/helpwithfees')
                                    }

                                  });

                                  router.post('/c100/miamurgencyjourney/submit/electronic/fees/helpwithfees-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var elhwFees = req.session.data['helpwithfees']

                                      // Check whether the variable matches a condition
                                      if (elhwFees == "Yes"){
                                        // Send user to next page
                                        res.redirect('feesapplied')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('../reviewandsubmit')
                                      }

                                    });

                                    router.post('/c100/miamurgencyjourney/submit/paper/fees/helpwithfees-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var paphwFees = req.session.data['helpwithfees']

                                        // Check whether the variable matches a condition
                                        if (paphwFees == "Yes"){
                                          // Send user to next page
                                          res.redirect('feesapplied')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('../reviewandsubmitpaper')
                                        }

                                      });

                                      router.post('/c100/miamurgencyjourney/submit/electronic/fees/feesapplied-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var elfeeApp = req.session.data['feesapplied']

                                          // Check whether the variable matches a condition
                                          if (elfeeApp == "Yes"){
                                            // Send user to next page
                                            res.redirect('../reviewandsubmithwf')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('hwfguidance')
                                          }

                                        });


                                    router.post('/c100/miamurgencyjourney/submit/paper/fees/feesapplied-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var papfeeApp = req.session.data['feesapplied']

                                        // Check whether the variable matches a condition
                                        if (papfeeApp == "Yes"){
                                          // Send user to next page
                                          res.redirect('../reviewandsubmitpaperhwf')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('hwfguidance')
                                        }

                                      });










  //Nadeems forms below:

  router.post('/applicantjourney/aboutyou/confidentiality/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var conDetails = req.session.data['confidential']

      // Check whether the variable matches a condition
      if (conDetails == "yes"){
        // Send user to next page
        res.redirect('/applicantjourney/aboutyou/confidentiality/feedback')

      }else {
          // Send user to ineligible page
          res.redirect('/applicantjourney/aboutyou/confidentiality/feedbackno')
      }

    });

    router.post('/applicantjourney/aboutyou/confidentiality/startalternative-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var noConDe = req.session.data['confidential']

        // Check whether the variable matches a condition
        if (noConDe == "yes"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/confidentiality/feedback')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/confidentiality/feedbackno')
        }

      });

    router.post('/applicantjourney/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var detKnown = req.session.data['detailsknown']

        // Check whether the variable matches a condition
        if (detKnown == "yes"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/confidentiality/startalternative')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/confidentiality/start')
        }

      });



      router.post('/applicantjourney/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var reasonAdj = req.session.data['reasonable-adjustments']

        // Check whether the variable matches a condition
        if (reasonAdj == "No"){
          // Send user to next page
          res.redirect('/applicantjourney/aboutyou/tellusyourhearingneeds/safetyrequirements')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourney/aboutyou/tellusyourhearingneeds/documents')
        }

      });



      router.post('/applicantjourneyca/aboutyou/confidentiality/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var conDetails = req.session.data['confidential']

        // Check whether the variable matches a condition
        if (conDetails == "yes"){
          // Send user to next page
          res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedback')

        }else {
            // Send user to ineligible page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedbackno')
        }

      });

      router.post('/applicantjourneyca/aboutyou/confidentiality/startalternative-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var noConDe = req.session.data['confidential']

          // Check whether the variable matches a condition
          if (noConDe == "yes"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedback')

          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/confidentiality/feedbackno')
          }

        });


        router.post('/applicantjourneyca/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var detKnown = req.session.data['detailsknown']

          // Check whether the variable matches a condition
          if (detKnown == "yes"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/confidentiality/startalternative')

          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/confidentiality/start')
          }

        });



        router.post('/applicantjourneyca/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var reasonAdj = req.session.data['reasonable-adjustments']

          // Check whether the variable matches a condition
          if (reasonAdj == "No"){
            // Send user to next page
            res.redirect('/applicantjourneyca/aboutyou/tellusyourhearingneeds/safetyrequirements')

          }else {
              // Send user to ineligible page
              res.redirect('/applicantjourneyca/aboutyou/tellusyourhearingneeds/documents')
          }

        });


          //Solicitors respondent journey:


        router.post('/solicitortasklistresponse/safetyconcerns/abduction/abduction-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var childAbd = req.session.data['abduction']

          // Check whether the variable matches a condition
          if (childAbd == "yes"){
            // Send user to next page
            res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/policeinvolvement')
          } else {
            // Send user to ineligible page
            res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/checkanswers')
          }

        });

        router.post('/solicitortasklistresponse/safetyconcerns/abduction/threats-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var abdThreat = req.session.data['threat']

            // Check whether the variable matches a condition
            if (abdThreat == "yes"){
              // Send user to next page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/previousabductions')
            } else {
              // Send user to ineligible page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/childlocation')
            }

          });

        router.post('/solicitortasklistresponse/safetyconcerns/abduction/passportoffice-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var passport = req.session.data['passport']

            // Check whether the variable matches a condition
            if (passport == "yes"){
              // Send user to next page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/passportamount')
            } else {
              // Send user to ineligible page
              res.redirect('/solicitortasklistresponse/safetyconcerns/abduction/threats')
            }

          });

          router.post('/solicitortasklistresponse/applicationdetails/proceedings/start-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var protProceedings = req.session.data['protection']
              var proceedings = req.session.data['childrenorders']

              // Check whether the variable matches a condition
              if (proceedings == "yes" || protProceedings == "yes"){
                // Send user to next page
                res.redirect('/solicitortasklistresponse/applicationdetails/proceedings/courtproceedings')
              } else {
                // Send user to ineligible page
                res.redirect('/solicitortasklistresponse/applicationdetails/proceedings/checkanswers-proceedings')
              }

            });


            router.post('/solicitortasklistresponse/applicationdetails/miam/start-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var miam = req.session.data['MIAM']

                // Check whether the variable matches a condition
                if (miam == "yes"){
                  // Send user to next page
                  res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAMyes')

                }else {
                    // Send user to ineligible page
                    res.redirect('/solicitortasklistresponse/applicationdetails/miam/willingnesstoattend')
                }

              });

              router.post('/solicitortasklistresponse/applicationdetails/miam/willingnesstoattend-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var miamWill = req.session.data['MIAM-willing']

                  // Check whether the variable matches a condition
                  if (miamWill == "yes"){
                    // Send user to next page
                    res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAM')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/solicitortasklistresponse/applicationdetails/miam/checkanswers-MIAMnono')
                  }

                });

              router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualabuse-answer', function (req, res) {
                  // Make a variable and give it the value from 'how-many-balls'
                  var sexAbuse = req.session.data['sexualabuse']

                  // Check whether the variable matches a condition
                  if (sexAbuse == "yes"){
                    // Send user to next page
                    res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualdescription')

                  }else {
                      // Send user to ineligible page
                      res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/physicalabuse')
                  }

                });

                router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/physicalabuse-answer', function (req, res) {
                    // Make a variable and give it the value from 'how-many-balls'
                    var physAbuse = req.session.data['physicalabuseq']

                    // Check whether the variable matches a condition
                    if (physAbuse == "yes"){
                      // Send user to next page
                      res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/physicaldescription')

                    }else {
                        // Send user to ineligible page
                        res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/financialabuse')
                    }

                  });

                  router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/financialabuse-answer', function (req, res) {
                      // Make a variable and give it the value from 'how-many-balls'
                      var finAbuse = req.session.data['finanicalabuseq']

                      // Check whether the variable matches a condition
                      if (finAbuse == "yes"){
                        // Send user to next page
                        res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/financialdescription')

                      }else {
                          // Send user to ineligible page
                          res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicalabuse')
                      }

                    });

                    router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicalabuse-answer', function (req, res) {
                        // Make a variable and give it the value from 'how-many-balls'
                        var psychAbuse = req.session.data['psychologicalabuseq']

                        // Check whether the variable matches a condition
                        if (psychAbuse == "yes"){
                          // Send user to next page
                          res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/psychologicaldescription')

                        }else {
                            // Send user to ineligible page
                            res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionalabuse')
                        }

                      });

                      router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionalabuse-answer', function (req, res) {
                          // Make a variable and give it the value from 'how-many-balls'
                          var emoAbuse = req.session.data['emotionalabuseq']

                          // Check whether the variable matches a condition
                          if (emoAbuse == "yes"){
                            // Send user to next page
                            res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/emotionaldescription')

                          }else {
                              // Send user to ineligible page
                              res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/checkanswers')
                          }

                        });

                        router.post('/solicitortasklistresponse/safetyconcerns/yoursafety/generalquestions-answer', function (req, res) {
                            // Make a variable and give it the value from 'how-many-balls'
                            var genAbuse = req.session.data['generalabuse']

                            // Check whether the variable matches a condition
                            if (genAbuse == "yes"){
                              // Send user to next page
                              res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/sexualabuse')

                            }else {
                                // Send user to ineligible page
                                res.redirect('/solicitortasklistresponse/safetyconcerns/yoursafety/generalno')
                            }

                          });

                          router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/childrenabuse-answer', function (req, res) {
                              // Make a variable and give it the value from 'how-many-balls'
                              var genAbuse = req.session.data['generalabuse']

                              // Check whether the variable matches a condition
                              if (genAbuse == "yes"){
                                // Send user to next page
                                res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/start')

                              }else {
                                  // Send user to ineligible page
                                  res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/generalno')
                              }

                            });

                            router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/sexualabuse-answer', function (req, res) {
                                // Make a variable and give it the value from 'how-many-balls'
                                var sexChildAbuse = req.session.data['sexualabuse']

                                // Check whether the variable matches a condition
                                if (sexChildAbuse == "yes"){
                                  // Send user to next page
                                  res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/sexualdescription')

                                }else {
                                    // Send user to ineligible page
                                    res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/physicalabuse')
                                }

                              });

                              router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/physicalabuse-answer', function (req, res) {
                                  // Make a variable and give it the value from 'how-many-balls'
                                  var physChildAbuse = req.session.data['physicalabuseq']

                                  // Check whether the variable matches a condition
                                  if (physChildAbuse == "yes"){
                                    // Send user to next page
                                    res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/physicaldescription')

                                  }else {
                                      // Send user to ineligible page
                                      res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/financialabuse')
                                  }

                                });

                                router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/financialabuse-answer', function (req, res) {
                                    // Make a variable and give it the value from 'how-many-balls'
                                    var finChildAbuse = req.session.data['finanicalabuseq']

                                    // Check whether the variable matches a condition
                                    if (finChildAbuse == "yes"){
                                      // Send user to next page
                                      res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/financialdescription')

                                    }else {
                                        // Send user to ineligible page
                                        res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicalabuse')
                                    }

                                  });

                                  router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicalabuse-answer', function (req, res) {
                                      // Make a variable and give it the value from 'how-many-balls'
                                      var psychChildAbuse = req.session.data['psychologicalabuseq']

                                      // Check whether the variable matches a condition
                                      if (psychChildAbuse == "yes"){
                                        // Send user to next page
                                        res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/psychologicaldescription')

                                      }else {
                                          // Send user to ineligible page
                                          res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionalabuse')
                                      }

                                    });

                                    router.post('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionalabuse-answer', function (req, res) {
                                        // Make a variable and give it the value from 'how-many-balls'
                                        var emoChildAbuse = req.session.data['emotionalabuseq']

                                        // Check whether the variable matches a condition
                                        if (emoChildAbuse == "yes"){
                                          // Send user to next page
                                          res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/emotionaldescription')

                                        }else {
                                            // Send user to ineligible page
                                            res.redirect('/solicitortasklistresponse/safetyconcerns/childrensafety/checkanswers')
                                        }

                                      });

                                      router.post('/solicitortasklistresponse/safetyconcerns/existingorders/orders-answer', function (req, res) {
                                          // Make a variable and give it the value from 'how-many-balls'
                                          var existOrders = req.session.data['existingorders']

                                          // Check whether the variable matches a condition
                                          if (existOrders == "yes"){
                                            // Send user to next page
                                            res.redirect('/solicitortasklistresponse/safetyconcerns/existingorders/ordersmade')

                                          }else {
                                              // Send user to ineligible page
                                              res.redirect('/solicitortasklistresponse/safetyconcerns/existingorders/checkanswers')
                                          }

                                        });

                                        router.post('/solicitortasklistresponse/legalrepresentation/start-answer', function (req, res) {
                                            // Make a variable and give it the value from 'how-many-balls'
                                            var legRep = req.session.data['solicitor']

                                            // Check whether the variable matches a condition
                                            if (legRep == "yes"){
                                              // Send user to next page
                                              res.redirect('/solicitortasklistresponse/legalrepresentation/solicitordirect')

                                            }else {
                                                // Send user to ineligible page
                                                res.redirect('/solicitortasklistresponse/legalrepresentation/solicitornotdirect')
                                            }

                                          });

                                          router.post('/solicitortasklistresponse/legalrepresentation/solicitorresponse-answer', function (req, res) {
                                              // Make a variable and give it the value from 'how-many-balls'
                                              var legRep = req.session.data['selffill']

                                              // Check whether the variable matches a condition
                                              if (legRep == "yes"){
                                                // Send user to next page
                                                res.redirect('/solicitortasklistresponse/legalrepresentation/solicitornotdirect')

                                              }else {
                                                  // Send user to ineligible page
                                                  res.redirect('/solicitortasklistresponse/legalrepresentation/solicitordirect')
                                              }

                                            });

                                            router.post('/solicitortasklistresponse/aboutyou/confidentiality/start-answer', function (req, res) {
                                                // Make a variable and give it the value from 'how-many-balls'
                                                var conDetails = req.session.data['confidential']

                                                // Check whether the variable matches a condition
                                                if (conDetails == "yes"){
                                                  // Send user to next page
                                                  res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedback')

                                                }else {
                                                    // Send user to ineligible page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedbackno')
                                                }

                                              });

                                              router.post('/solicitortasklistresponse/aboutyou/confidentiality/startalternative-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var noConDe = req.session.data['confidential']

                                                  // Check whether the variable matches a condition
                                                  if (noConDe == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedback')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/feedbackno')
                                                  }

                                                });

                                              router.post('/solicitortasklistresponse/aboutyou/confidentiality/detailsknown-answer', function (req, res) {
                                                  // Make a variable and give it the value from 'how-many-balls'
                                                  var detKnown = req.session.data['detailsknown']

                                                  // Check whether the variable matches a condition
                                                  if (detKnown == "yes"){
                                                    // Send user to next page
                                                    res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/startalternative')

                                                  }else {
                                                      // Send user to ineligible page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/confidentiality/start')
                                                  }

                                                });
                                                router.post('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/start-answer', function (req, res) {
                                                    // Make a variable and give it the value from 'how-many-balls'
                                                    var reasonAdjust = req.session.data['reasonable-adjustments']

                                                    // Check whether the variable matches a condition
                                                    if (reasonAdjust == "No"){
                                                      // Send user to next page
                                                      res.redirect('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/checkanswersreqs')

                                                    }else {
                                                        // Send user to ineligible page
                                                        res.redirect('/solicitortasklistresponse/aboutyou/tellusyourhearingneeds/documents')
                                                    }

                                                  });


//CA applicant dashboard

router.post('/applicanttasklist/flow/digitalcommunication-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var comAgreement = req.session.data['communicationagreement']

    // Check whether the variable matches a condition
    if (comAgreement == "Yes"){
      // Send user to next page
      res.redirect('/applicanttasklist/presub')

    }else {
        // Send user to ineligible page
        res.redirect('paperjourney')
    }

  });

router.post('/applicanttasklist/applications/responsetoallegations/start-answer', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var ansAlleg = req.session.data['answer']

    // Check whether the variable matches a condition
    if (ansAlleg == "yes"){
      // Send user to next page
      res.redirect('/applicanttasklist/applications/responsetoallegations/applicantabuse')

    }else {
        // Send user to ineligible page
        res.redirect('/applicanttasklist/applications/responsetoallegations/checkanswers-no')
    }

  });

  router.post('/applicanttasklist/applications/responsetoallegations/paperform/start-answer', function (req, res) {
      // Make a variable and give it the value from 'how-many-balls'
      var paperAlleg = req.session.data['answer']

      // Check whether the variable matches a condition
      if (paperAlleg == "yes"){
        // Send user to next page
        res.redirect('/applicanttasklist/applications/responsetoallegations/paperform/applicantabuse')

      }else {
          // Send user to ineligible page
          res.redirect('/applicanttasklist/applications/responsetoallegations/paperform/checkanswers-no')
      }

    });
    router.post('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/start-answer', function (req, res) {
        // Make a variable and give it the value from 'how-many-balls'
        var confDetails = req.session.data['confidential']

        // Check whether the variable matches a condition
        if (confDetails == "yes"){
          // Send user to next page
          res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/feedback')

        }else {
            // Send user to ineligible page
            res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/feedbackno')
        }

      });

      router.post('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/startalternative-answer', function (req, res) {
          // Make a variable and give it the value from 'how-many-balls'
          var noConf = req.session.data['confidential']

          // Check whether the variable matches a condition
          if (noConf == "yes"){
            // Send user to next page
            res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/feedback')

          }else {
              // Send user to ineligible page
              res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/feedbackno')
          }

        });

        router.post('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/start-answer', function (req, res) {
            // Make a variable and give it the value from 'how-many-balls'
            var confDetails = req.session.data['confidential']

            // Check whether the variable matches a condition
            if (confDetails == "yes"){
              // Send user to next page
              res.redirect('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/feedback')

            }else {
                // Send user to ineligible page
                res.redirect('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
            }

          });

          router.post('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/startalternative-answer', function (req, res) {
              // Make a variable and give it the value from 'how-many-balls'
              var noConf = req.session.data['confidential']

              // Check whether the variable matches a condition
              if (noConf == "yes"){
                // Send user to next page
                res.redirect('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/feedback')

              }else {
                  // Send user to ineligible page
                  res.redirect('/applicanttasklist/aboutyou/confirmcontactdetails/confidentiality/feedbackno')
              }

            });

            router.post('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/detailsknown-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var detailsKnown = req.session.data['detailsknown']

                // Check whether the variable matches a condition
                if (detailsKnown == "yes"){
                  // Send user to next page
                  res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/startalternative')

                }else {
                    // Send user to ineligible page
                    res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/start')
                }

              });
            router.post('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/detailsusedbefore-answer', function (req, res) {
                // Make a variable and give it the value from 'how-many-balls'
                var detailsUsed = req.session.data['detailsknown']

                // Check whether the variable matches a condition
                if (detailsUsed == "yes"){
                  // Send user to next page
                  res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/feedbackcant')

                }else {
                    // Send user to ineligible page
                    res.redirect('/applicanttasklist/aboutyou/editcontactdetails/confidentiality/detailsknown')
                }

              });

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/idam/payonline', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payonline = req.session.data['payonline']

  // Check whether the variable matches a condition
  if (payonline == "yes"){
    // Send user to next page
    res.redirect('/idam/legalrepresentation.html')
  } else {
    // Send user to ineligible page
    res.redirect('/idam/paperform.html')
  }

})

router.post('/applicanttasklist/aboutyou/contactpreferences/contactpreferences', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var contactpreferences = req.session.data['contactpreferences']
  // Check whether the variable matches a condition

  if (contactpreferences=="email"){
    // Send user to next page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactemail');
    
  }if  (contactpreferences=="post") {
    // Send user to next page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactpost');

  } else {
    // Send user to error page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactpreferenceserror');
  }

})

router.post('/applicanttasklist/aboutyou/contactpreferences/contactpreferenceserror', function (req, res) {
  // Make a variable and give it the value from 'how-many-balls'
  var contactpreferences = req.session.data['contactpreferences']
  // Check whether the variable matches a condition

  if (contactpreferences=="email"){
    // Send user to next page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactemail');
    
  }if  (contactpreferences=="post") {
    // Send user to next page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactpost');

  } else {
    // Send user to error page
    res.redirect('/applicanttasklist/aboutyou/contactpreferences/contactpreferenceserror');
  }

})


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/respondenttasklist/aboutyou/Confidentiality/keepconfidential', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confidential = req.session.data['confidential']

  // Check whether the variable matches a condition
  if (confidential == "yes"){
    // Send user to next page
    res.redirect('/respondenttasklist/aboutyou/Confidentiality/feedback.html')
  } 
  else {
    // Send user to ineligible page
    res.redirect('/respondenttasklist/aboutyou/Confidentiality/feedbackno.html')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/idam/legalrepresentation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var legalrepresentation = req.session.data['legalrepresentation']

  // Check whether the variable matches a condition
  if (legalrepresentation == "yes"){
    // Send user to next page
    res.redirect('/idam/fillapplication.html')
  } else {
    // Send user to ineligible page
    res.redirect('/idam/signin.html')
  }

})


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/idam/fillapplication', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var fillapplication = req.session.data['fillapplication']

  // Check whether the variable matches a condition
  if (fillapplication == "yes"){
    // Send user to next page
    res.redirect('/idam/contactlr.html')
  } else {
    // Send user to ineligible page
    res.redirect('/idam/signin.html')
  }

  


})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/screening/legalrepresentation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var legalrepresentation = req.session.data['legalrepresentation']

  // Check whether the variable matches a condition
  if (legalrepresentation == "yes"){
    // Send user to next page
    res.redirect('/screening/fillapplication.html')
  } else {
    // Send user to ineligible page
    res.redirect('/applicanttasklist/presub.html')
  }

})


// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/screening/fillapplication', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var fillapplication = req.session.data['fillapplication']

  // Check whether the variable matches a condition
  if (fillapplication == "yes"){
    // Send user to next page
    res.redirect('/screening/contactlr.html')
  } else {
    // Send user to ineligible page
    res.redirect('/applicanttasklist/presub.html')
  }

})

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/screening/payonline', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var payonline = req.session.data['payonline']

  // Check whether the variable matches a condition
  if (payonline == "yes"){
    // Send user to next page
    res.redirect('/screening/legalrepresentation.html')
  } else {
    // Send user to ineligible page
    res.redirect('/screening/paperform.html')
  }

})

module.exports = router
