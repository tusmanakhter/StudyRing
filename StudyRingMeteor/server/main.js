import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Meteor.isServer){
    process.env.MAIL_URL="smtp://StudyRingConcordia%40gmail.com:soen341concordia@smtp.gmail.com:465/"; 
  }
})
